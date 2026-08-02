'use client';

class SoundtrackEngine {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private gainNode: GainNode | null = null;
  private filterNode: BiquadFilterNode | null = null;
  private activeOscillators: OscillatorNode[] = [];
  private intervalId: NodeJS.Timeout | null = null;

  // Cinematic Nordic chord frequencies (Fm9 -> DbMaj7 -> Eb -> Cm7)
  private chords = [
    [174.61, 207.65, 261.63, 311.13, 349.23], // Fm9
    [138.59, 174.61, 207.65, 261.63, 311.13], // DbMaj7
    [155.56, 196.0, 233.08, 311.13, 392.0], // Eb
    [130.81, 155.56, 196.0, 233.08, 311.13], // Cm7
  ];

  public init(existingCtx?: AudioContext, masterGain?: GainNode) {
    if (this.ctx) return;
    this.ctx =
      existingCtx ||
      new (window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext)();

    this.gainNode = this.ctx.createGain();
    this.gainNode.gain.setValueAtTime(0.25, this.ctx.currentTime);

    this.filterNode = this.ctx.createBiquadFilter();
    this.filterNode.type = 'lowpass';
    this.filterNode.frequency.setValueAtTime(600, this.ctx.currentTime);

    this.filterNode.connect(this.gainNode);
    if (masterGain) {
      this.gainNode.connect(masterGain);
    } else {
      this.gainNode.connect(this.ctx.destination);
    }
  }

  public play() {
    if (!this.ctx || this.isPlaying) return;
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    this.isPlaying = true;
    let chordIdx = 0;

    const playChord = () => {
      if (!this.ctx || !this.filterNode || !this.isPlaying) return;

      // Stop previous chord notes
      this.activeOscillators.forEach((osc) => {
        try {
          osc.stop();
          osc.disconnect();
        } catch {}
      });
      this.activeOscillators = [];

      const currentChord = this.chords[chordIdx % this.chords.length];
      chordIdx++;

      currentChord.forEach((freq) => {
        if (!this.ctx || !this.filterNode) return;

        const osc = this.ctx.createOscillator();
        const noteGain = this.ctx.createGain();

        // Warm sine + soft triangle blend
        osc.type = Math.random() > 0.5 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

        // Soft attack envelope
        noteGain.gain.setValueAtTime(0, this.ctx.currentTime);
        noteGain.gain.linearRampToValueAtTime(0.08, this.ctx.currentTime + 2.5);
        noteGain.gain.exponentialRampToValueAtTime(
          0.001,
          this.ctx.currentTime + 7.5
        );

        osc.connect(noteGain);
        noteGain.connect(this.filterNode);

        osc.start();
        this.activeOscillators.push(osc);
      });
    };

    playChord();
    this.intervalId = setInterval(playChord, 8000);
  }

  public stop() {
    this.isPlaying = false;
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    this.activeOscillators.forEach((osc) => {
      try {
        osc.stop();
        osc.disconnect();
      } catch {}
    });
    this.activeOscillators = [];
  }

  public setVolume(vol: number) {
    if (this.gainNode && this.ctx) {
      this.gainNode.gain.setValueAtTime(
        Math.max(0, Math.min(1, vol)),
        this.ctx.currentTime
      );
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }
}

export const soundtrackEngine = new SoundtrackEngine();
