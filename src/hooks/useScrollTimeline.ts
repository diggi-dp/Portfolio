'use client';

import { useState, useEffect } from 'react';
import {
  cameraWaypoints,
  CameraWaypoint,
} from '@/lib/animations/cameraTrajectories';

export interface ScrollState {
  scrollProgress: number; // 0.0 to 1.0
  activeChapterIndex: number;
  currentWaypoint: CameraWaypoint;
  interpolatedCameraPosition: [number, number, number];
  interpolatedCameraTarget: [number, number, number];
}

// Live mutable state for 60fps WebGL render loops without triggering React re-renders
export const liveScrollTelemetry = {
  progress: 0,
  position: [...cameraWaypoints[0].position] as [number, number, number],
  target: [...cameraWaypoints[0].target] as [number, number, number],
  activeChapterIndex: 1,
};

export function useScrollTimeline(): ScrollState {
  const [scrollState, setScrollState] = useState<ScrollState>({
    scrollProgress: 0,
    activeChapterIndex: 1,
    currentWaypoint: cameraWaypoints[0],
    interpolatedCameraPosition: cameraWaypoints[0].position,
    interpolatedCameraTarget: cameraWaypoints[0].target,
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollEl = document.documentElement;
      const totalScroll = Math.max(
        1,
        (scrollEl.scrollHeight || document.body.scrollHeight) -
          window.innerHeight
      );

      const currentScroll = window.scrollY;
      const progress = Math.max(0, Math.min(1, currentScroll / totalScroll));

      // Symmetrically determine active chapter index (both forward and reverse order)
      let activeIndex = 1;
      if (progress < 0.1) activeIndex = 1;
      else if (progress < 0.3) activeIndex = 2;
      else if (progress < 0.5) activeIndex = 3;
      else if (progress < 0.7) activeIndex = 4;
      else if (progress < 0.9) activeIndex = 5;
      else activeIndex = 6;

      // Interpolate 3D camera position between waypoints
      let pos: [number, number, number] = cameraWaypoints[0].position;
      let target: [number, number, number] = cameraWaypoints[0].target;

      for (let i = 0; i < cameraWaypoints.length - 1; i++) {
        const wpCurr = cameraWaypoints[i];
        const wpNext = cameraWaypoints[i + 1];

        if (
          progress >= wpCurr.scrollProgress &&
          progress <= wpNext.scrollProgress
        ) {
          const segProgress =
            (progress - wpCurr.scrollProgress) /
            (wpNext.scrollProgress - wpCurr.scrollProgress);

          pos = [
            wpCurr.position[0] +
              (wpNext.position[0] - wpCurr.position[0]) * segProgress,
            wpCurr.position[1] +
              (wpNext.position[1] - wpCurr.position[1]) * segProgress,
            wpCurr.position[2] +
              (wpNext.position[2] - wpCurr.position[2]) * segProgress,
          ];

          target = [
            wpCurr.target[0] +
              (wpNext.target[0] - wpCurr.target[0]) * segProgress,
            wpCurr.target[1] +
              (wpNext.target[1] - wpCurr.target[1]) * segProgress,
            wpCurr.target[2] +
              (wpNext.target[2] - wpCurr.target[2]) * segProgress,
          ];
          break;
        }
      }

      if (progress >= 1) {
        pos = cameraWaypoints[cameraWaypoints.length - 1].position;
        target = cameraWaypoints[cameraWaypoints.length - 1].target;
      }

      // Update mutable live telemetry for high-performance direct R3F read
      liveScrollTelemetry.progress = progress;
      liveScrollTelemetry.position[0] = pos[0];
      liveScrollTelemetry.position[1] = pos[1];
      liveScrollTelemetry.position[2] = pos[2];
      liveScrollTelemetry.target[0] = target[0];
      liveScrollTelemetry.target[1] = target[1];
      liveScrollTelemetry.target[2] = target[2];
      liveScrollTelemetry.activeChapterIndex = activeIndex;

      setScrollState({
        scrollProgress: progress,
        activeChapterIndex: activeIndex,
        currentWaypoint: cameraWaypoints[activeIndex - 1],
        interpolatedCameraPosition: pos,
        interpolatedCameraTarget: target,
      });
    };

    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return scrollState;
}
