'use client';

import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

export function useLenisScroll() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  const scrollToProgress = (progress: number) => {
    if (!lenisRef.current) return;
    const targetScroll =
      progress * (document.body.scrollHeight - window.innerHeight);
    lenisRef.current.scrollTo(targetScroll, { duration: 1.8 });
  };

  return { lenis: lenisRef.current, scrollToProgress };
}
