'use client';

import { useState, useEffect } from 'react';

export interface PointerVector {
  x: number; // Normalized -1 to 1
  y: number; // Normalized -1 to 1
  clientX: number;
  clientY: number;
  velocityX: number;
  velocityY: number;
}

export function usePointerVector(): PointerVector {
  const [pointer, setPointer] = useState<PointerVector>({
    x: 0,
    y: 0,
    clientX: 0,
    clientY: 0,
    velocityX: 0,
    velocityY: 0,
  });

  useEffect(() => {
    let lastX = 0;
    let lastY = 0;
    let lastTime = performance.now();
    let rafId: number | null = null;
    let pendingEvent: { clientX: number; clientY: number } | null = null;

    const updatePointer = () => {
      if (!pendingEvent) return;
      const { clientX, clientY } = pendingEvent;
      pendingEvent = null;

      const now = performance.now();
      const dt = Math.max(1, now - lastTime);

      const velocityX = (clientX - lastX) / dt;
      const velocityY = (clientY - lastY) / dt;

      lastX = clientX;
      lastY = clientY;
      lastTime = now;

      const normX = (clientX / window.innerWidth) * 2 - 1;
      const normY = -(clientY / window.innerHeight) * 2 + 1;

      setPointer({
        x: normX,
        y: normY,
        clientX,
        clientY,
        velocityX,
        velocityY,
      });

      rafId = null;
    };

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      pendingEvent = { clientX, clientY };

      if (!rafId) {
        rafId = requestAnimationFrame(updatePointer);
      }
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    window.addEventListener('touchmove', handlePointerMove, { passive: true });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('touchmove', handlePointerMove);
    };
  }, []);

  return pointer;
}
