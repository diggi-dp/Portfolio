'use client';

import { useState, useEffect, useRef } from 'react';
import { useScrollTimeline } from './useScrollTimeline';
import { siteConfig } from '@/lib/config/site.config';

export function useDynamicTelemetry() {
  const { scrollProgress } = useScrollTimeline();
  const [fps, setFps] = useState<number>(60);
  const [altitude, setAltitude] = useState<number>(120);
  const [bearing, setBearing] = useState<string>('042° NE');
  const [coordinates, setCoordinates] = useState<string>(
    siteConfig.developer.coordinates
  );

  const frameCountRef = useRef(0);
  const lastTimeRef = useRef(performance.now());

  // Dynamic FPS Loop
  useEffect(() => {
    let animId: number;

    const calcFPS = () => {
      const now = performance.now();
      frameCountRef.current++;

      if (now >= lastTimeRef.current + 1000) {
        const currentFps = Math.round(
          (frameCountRef.current * 1000) / (now - lastTimeRef.current)
        );
        setFps(Math.min(60, Math.max(30, currentFps)));
        frameCountRef.current = 0;
        lastTimeRef.current = now;
      }

      animId = requestAnimationFrame(calcFPS);
    };

    animId = requestAnimationFrame(calcFPS);
    return () => cancelAnimationFrame(animId);
  }, []);

  // Sync Altitude and Bearing to Scroll Progress
  useEffect(() => {
    // Altitude descends from +120M to -450M as you scroll down
    const currentAlt = Math.round(120 - scrollProgress * 570);
    setAltitude(currentAlt);

    // Bearing rotates from 042° NE to 184° S
    const deg = Math.round(42 + scrollProgress * 142);
    const dir = deg < 90 ? 'NE' : deg < 135 ? 'E' : 'SE';
    setBearing(`${String(deg).padStart(3, '0')}° ${dir}`);
  }, [scrollProgress]);

  return {
    fps,
    altitude,
    bearing,
    coordinates,
  };
}
