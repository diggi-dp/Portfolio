import { audioConfig } from '../config/audio.config';

/**
 * Pure Web Audio API Synthesizer Engine.
 * Provides sub-bass binaural drone, filter sweeps, and major 9th arpeggios.
 */

class WebAudioSynthEngine {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private subOsc1: OscillatorNode | null = null;
  private subOsc2: OscillatorNode | null = null;
  private isInitialized = false;
  private isMuted = false;

  public initialize(): AudioContext | null {
    if (typeof window === 'undefined') return null;

    if (!this.ctx) {
      const AudioCtxClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;
      this.ctx = new AudioCtxClass();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(
        audioConfig.masterGainDefault,
        this.ctx.currentTime
      );
      this.masterGain.connect(this.ctx.destination);
    }

    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    if (!this.isInitialized && this.ctx.state === 'running') {
      this.startAmbientSubDrone();
      this.isInitialized = true;
    }

    return this.ctx;
  }

  private startAmbientSubDrone() {
    if (!this.ctx || !this.masterGain) return;

    const now = this.ctx.currentTime;
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(120, now);

    this.subOsc1 = this.ctx.createOscillator();
    this.subOsc2 = this.ctx.createOscillator();

    this.subOsc1.type = 'sine';
    this.subOsc2.type = 'sine';

    this.subOsc1.frequency.setValueAtTime(audioConfig.subBassFrequency, now);
    this.subOsc2.frequency.setValueAtTime(
      audioConfig.subBassFrequency + audioConfig.binauralBeatOffset,
      now
    );

    const droneGain = this.ctx.createGain();
    droneGain.gain.setValueAtTime(0.3, now);

    this.subOsc1.connect(filter);
    this.subOsc2.connect(filter);
    filter.connect(droneGain);
    droneGain.connect(this.masterGain);

    this.subOsc1.start(now);
    this.subOsc2.start(now);
  }

  public playFilterSweep() {
    if (!this.ctx || !this.masterGain || this.ctx.state !== 'running') return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const filter = this.ctx.createBiquadFilter();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(130.81, now); // C3

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(audioConfig.filterSweep.minHz, now);
    filter.frequency.exponentialRampToValueAtTime(
      audioConfig.filterSweep.maxHz,
      now + audioConfig.filterSweep.durationSec
    );

    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(
      0.001,
      now + audioConfig.filterSweep.durationSec
    );

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + audioConfig.filterSweep.durationSec);
  }

  public playSkillArpeggio() {
    if (!this.ctx || !this.masterGain || this.ctx.state !== 'running') return;

    const now = this.ctx.currentTime;
    audioConfig.arpeggioNotes.forEach((freq, index) => {
      if (!this.ctx || !this.masterGain) return;
      const noteTime = now + index * 0.08;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, noteTime);

      gain.gain.setValueAtTime(0.15, noteTime);
      gain.gain.exponentialRampToValueAtTime(0.001, noteTime + 0.3);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(noteTime);
      osc.stop(noteTime + 0.3);
    });
  }

  public toggleMute(): boolean {
    if (!this.masterGain || !this.ctx) return false;
    const now = this.ctx.currentTime;
    this.isMuted = !this.isMuted;

    this.masterGain.gain.cancelScheduledValues(now);
    this.masterGain.gain.linearRampToValueAtTime(
      this.isMuted ? 0.0 : audioConfig.masterGainDefault,
      now + 0.3
    );

    return this.isMuted;
  }

  public getAudioContext(): AudioContext | null {
    return this.ctx;
  }

  public getMasterGain(): GainNode | null {
    return this.masterGain;
  }

  public getIsMuted(): boolean {
    return this.isMuted;
  }
}

export const synthEngine = new WebAudioSynthEngine();
