export const webglConfig = {
  dpr: {
    min: 1.0,
    max: 1.5,
    mobileMax: 1.25,
  },
  camera: {
    fov: 45,
    near: 0.1,
    far: 500,
    defaultPosition: [0, 4, 18] as [number, number, number],
  },
  performance: {
    fpsTarget: 60,
    lowFpsThreshold: 50,
    heavyParticleCount: 1800,
    mobileParticleCount: 600,
  },
  bloom: {
    luminanceThreshold: 1.2,
    luminanceSmoothing: 0.9,
    intensity: 1.5,
  },
} as const;

export type WebGLConfig = typeof webglConfig;
