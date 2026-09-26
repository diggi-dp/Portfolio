'use client';

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

let globalLenis: Lenis | null = null;
let rafId: number | null = null;
let activeUsersCount = 0;

function startLenisLoop() {
  if (typeof window === 'undefined') return;

  if (!globalLenis) {
    globalLenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });
  }

  if (rafId === null) {
    function raf(time: number) {
      if (globalLenis) {
        globalLenis.raf(time);
      }
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);
  }
}

function stopLenisLoop() {
  if (rafId !== null) {
    cancelAnimationFrame(rafId);
    rafId = null;
  }
  if (globalLenis) {
    globalLenis.destroy();
    globalLenis = null;
  }
}

/**
 * Scroll smoothly to a specific chapter (1 to 6) in both forward and reverse order.
 */
export function scrollToChapter(chapterNumber: number) {
  if (typeof window === 'undefined') return;

  const targetId = `chapter-${chapterNumber}`;
  const element = document.getElementById(targetId);

  if (globalLenis && element) {
    globalLenis.scrollTo(element, { duration: 1.2, offset: 0 });
    return;
  }

  const maxScroll = Math.max(
    1,
    document.documentElement.scrollHeight - window.innerHeight
  );
  const targetProgress = Math.max(0, Math.min(1, (chapterNumber - 1) / 5));
  const targetY = targetProgress * maxScroll;

  if (globalLenis) {
    globalLenis.scrollTo(targetY, { duration: 1.2 });
  } else if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  } else {
    window.scrollTo({ top: targetY, behavior: 'smooth' });
  }
}

/**
 * Scroll smoothly to a normalized progress (0.0 to 1.0).
 */
export function scrollToProgress(progress: number) {
  if (typeof window === 'undefined') return;

  const maxScroll = Math.max(
    1,
    document.documentElement.scrollHeight - window.innerHeight
  );
  const clampedProgress = Math.max(0, Math.min(1, progress));
  const targetY = clampedProgress * maxScroll;

  if (globalLenis) {
    globalLenis.scrollTo(targetY, { duration: 1.2 });
  } else {
    window.scrollTo({ top: targetY, behavior: 'smooth' });
  }
}

export function useLenisScroll() {
  useEffect(() => {
    activeUsersCount++;
    startLenisLoop();

    return () => {
      activeUsersCount--;
      if (activeUsersCount <= 0) {
        activeUsersCount = 0;
        stopLenisLoop();
      }
    };
  }, []);

  return {
    lenis: globalLenis,
    scrollToChapter,
    scrollToProgress,
  };
}
