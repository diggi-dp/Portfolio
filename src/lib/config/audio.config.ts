export const audioConfig = {
  masterGainDefault: 0.7,
  subBassFrequency: 32, // Hz
  binauralBeatOffset: 0.4, // Hz
  clickFrequencies: {
    start: 800,
    end: 1200,
    durationMs: 15,
  },
  chimeFrequency: 523.25, // C5
  arpeggioNotes: [261.63, 329.63, 392.0, 493.88, 587.33], // C4, E4, G4, B4, D5 (C-Major 9th)
  filterSweep: {
    minHz: 100,
    maxHz: 4000,
    durationSec: 0.6,
  },
} as const;

export type AudioConfig = typeof audioConfig;
