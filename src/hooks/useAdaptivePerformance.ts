'use client';

import { useState, useEffect } from 'react';
import { webglConfig } from '@/lib/config/webgl.config';

export function useAdaptivePerformance() {
  const [dpr, setDpr] = useState<number>(webglConfig.dpr.max);
  const [isLowPower, setIsLowPower] = useState(false);

  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    let animId: number;

    const monitorPerformance = () => {
      frameCount++;
      const now = performance.now();
      const elapsed = now - lastTime;

      if (elapsed >= 1000) {
        const fps = (frameCount * 1000) / elapsed;
        frameCount = 0;
        lastTime = now;

        if (fps < webglConfig.performance.lowFpsThreshold) {
          setDpr(webglConfig.dpr.min);
          setIsLowPower(true);
        } else {
          setDpr(webglConfig.dpr.max);
          setIsLowPower(false);
        }
      }

      animId = requestAnimationFrame(monitorPerformance);
    };

    animId = requestAnimationFrame(monitorPerformance);

    return () => {
      cancelAnimationFrame(animId);
    };
  }, []);

  return { dpr, isLowPower };
}
