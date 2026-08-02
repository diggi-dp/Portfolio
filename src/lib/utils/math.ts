/**
 * Math & Vector utilities for 3D lerping, clamping, and perlin noise bounds.
 */

export function lerp(start: number, end: number, amt: number): number {
  return (1 - amt) * start + amt * end;
}

export function clamp(val: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, val));
}

export function smoothstep(min: number, max: number, value: number): number {
  const x = Math.max(0, Math.min(1, (value - min) / (max - min)));
  return x * x * (3 - 2 * x);
}

export function randomRange(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

export function normalizeValue(val: number, min: number, max: number): number {
  return (val - min) / (max - min);
}
