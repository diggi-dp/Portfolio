import { audioConfig } from '../config/audio.config';

/**
 * High-frequency UI Click & Hover Crystal Chime generators.
 * Uses Web Audio API sine and triangle oscillators with exponential gain decay.
 */

export function playUIClick(ctx: AudioContext, masterGain: GainNode) {
  if (!ctx || ctx.state !== 'running') return;

  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = 'sine';
  osc.frequency.setValueAtTime(audioConfig.clickFrequencies.start, now);
  osc.frequency.exponentialRampToValueAtTime(
    audioConfig.clickFrequencies.end,
    now + audioConfig.clickFrequencies.durationMs / 1000
  );

  gain.gain.setValueAtTime(0.3, now);
  gain.gain.exponentialRampToValueAtTime(
    0.001,
    now + audioConfig.clickFrequencies.durationMs / 1000
  );

  osc.connect(gain);
  gain.connect(masterGain);

  osc.start(now);
  osc.stop(now + audioConfig.clickFrequencies.durationMs / 1000);
}

export function playCrystalChime(ctx: AudioContext, masterGain: GainNode) {
  if (!ctx || ctx.state !== 'running') return;

  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = 'triangle';
  osc.frequency.setValueAtTime(audioConfig.chimeFrequency, now);

  gain.gain.setValueAtTime(0.2, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);

  osc.connect(gain);
  gain.connect(masterGain);

  osc.start(now);
  osc.stop(now + 0.4);
}
