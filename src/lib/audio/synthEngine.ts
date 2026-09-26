import { audioConfig } from '../config/audio.config';
import { soundtrackEngine } from './soundtrack';

type AudioStateListener = (state: {
  isInitialized: boolean;
  isMuted: boolean;
}) => void;

class WebAudioSynthEngine {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private isInitialized = false;
  private isMuted = false;
  private listeners: Set<AudioStateListener> = new Set();
  private initializingPromise: Promise<AudioContext | null> | null = null;

  public subscribe(listener: AudioStateListener): () => void {
    this.listeners.add(listener);
    listener({ isInitialized: this.isInitialized, isMuted: this.isMuted });
    return () => {
      this.listeners.delete(listener);
    };
  }

  private notify() {
    this.listeners.forEach((listener) => {
      try {
        listener({ isInitialized: this.isInitialized, isMuted: this.isMuted });
      } catch (e) {
        console.error('Audio listener error:', e);
      }
    });
  }

  public async initialize(): Promise<AudioContext | null> {
    if (typeof window === 'undefined') return null;

    if (this.initializingPromise) {
      return this.initializingPromise;
    }

    this.initializingPromise = (async () => {
      try {
        if (!this.ctx) {
          const AudioCtxClass =
            window.AudioContext ||
            (window as unknown as { webkitAudioContext: typeof AudioContext })
              .webkitAudioContext;
          this.ctx = new AudioCtxClass();
          this.masterGain = this.ctx.createGain();
          this.masterGain.gain.setValueAtTime(
            this.isMuted ? 0.0 : audioConfig.masterGainDefault,
            this.ctx.currentTime
          );
          this.masterGain.connect(this.ctx.destination);
        }

        if (this.ctx.state === 'suspended') {
          await this.ctx.resume();
        }

        if (!this.isInitialized && this.ctx.state === 'running') {
          this.isInitialized = true;
          // Connect soundtrack engine to master gain
          soundtrackEngine.init(this.ctx, this.masterGain || undefined);
          if (!this.isMuted) {
            soundtrackEngine.play();
          }
          this.notify();
        }

        return this.ctx;
      } catch (err) {
        console.warn('Audio initialization deferred:', err);
        return null;
      } finally {
        this.initializingPromise = null;
      }
    })();

    return this.initializingPromise;
  }

  public async toggleMute(): Promise<boolean> {
    // If not initialized yet, initialize and start playing
    if (!this.isInitialized || !this.ctx) {
      this.isMuted = false;
      await this.initialize();
      this.notify();
      return this.isMuted;
    }

    // Toggle mute state
    this.isMuted = !this.isMuted;

    if (this.ctx.state === 'suspended' && !this.isMuted) {
      await this.ctx.resume();
    }

    if (this.masterGain && this.ctx) {
      const now = this.ctx.currentTime;
      this.masterGain.gain.cancelScheduledValues(now);
      this.masterGain.gain.linearRampToValueAtTime(
        this.isMuted ? 0.0 : audioConfig.masterGainDefault,
        now + 0.15
      );
    }

    if (this.isMuted) {
      soundtrackEngine.stop();
    } else {
      soundtrackEngine.play();
    }

    this.notify();
    return this.isMuted;
  }

  public playFilterSweep() {
    if (
      !this.ctx ||
      !this.masterGain ||
      this.ctx.state !== 'running' ||
      this.isMuted
    )
      return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const filter = this.ctx.createBiquadFilter();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(130.81, now);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(audioConfig.filterSweep.minHz, now);
    filter.frequency.exponentialRampToValueAtTime(
      audioConfig.filterSweep.maxHz,
      now + audioConfig.filterSweep.durationSec
    );

    gain.gain.setValueAtTime(0.12, now);
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
    if (
      !this.ctx ||
      !this.masterGain ||
      this.ctx.state !== 'running' ||
      this.isMuted
    )
      return;

    const now = this.ctx.currentTime;
    audioConfig.arpeggioNotes.forEach((freq, index) => {
      if (!this.ctx || !this.masterGain) return;
      const noteTime = now + index * 0.08;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, noteTime);

      gain.gain.setValueAtTime(0.12, noteTime);
      gain.gain.exponentialRampToValueAtTime(0.001, noteTime + 0.3);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(noteTime);
      osc.stop(noteTime + 0.3);
    });
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

  public getIsInitialized(): boolean {
    return this.isInitialized;
  }
}

export const synthEngine = new WebAudioSynthEngine();
