/**
 * Ocean storm thunder noise generator using cached noise buffer and bandpass filtering.
 */

let noiseBuffer: AudioBuffer | null = null;

function getNoiseBuffer(ctx: AudioContext): AudioBuffer {
  if (noiseBuffer) return noiseBuffer;

  const bufferSize = ctx.sampleRate * 3; // 3 seconds of noise
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = buffer.getChannelData(0);

  for (let i = 0; i < bufferSize; i++) {
    data[i] = Math.random() * 2 - 1;
  }

  noiseBuffer = buffer;
  return noiseBuffer;
}

export function playThunderRumble(ctx: AudioContext, masterGain: GainNode) {
  if (!ctx || ctx.state !== 'running') return;

  const now = ctx.currentTime;
  const source = ctx.createBufferSource();
  source.buffer = getNoiseBuffer(ctx);

  const filter = ctx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(80, now);
  filter.frequency.linearRampToValueAtTime(250, now + 0.5);
  filter.frequency.linearRampToValueAtTime(60, now + 2.5);

  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.01, now);
  gain.gain.linearRampToValueAtTime(0.4, now + 0.3);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 2.8);

  source.connect(filter);
  filter.connect(gain);
  gain.connect(masterGain);

  source.start(now);
  source.stop(now + 2.8);
}
