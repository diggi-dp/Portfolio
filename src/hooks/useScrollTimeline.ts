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
      const totalScroll = document.body.scrollHeight - window.innerHeight;
      if (totalScroll <= 0) return;

      const currentScroll = window.scrollY;
      const progress = Math.max(0, Math.min(1, currentScroll / totalScroll));

      // Find active chapter index based on scroll progress boundaries
      let activeIndex = 1;
      if (progress < 0.12) activeIndex = 1;
      else if (progress < 0.28) activeIndex = 2;
      else if (progress < 0.45) activeIndex = 3;
      else if (progress < 0.65) activeIndex = 4;
      else if (progress < 0.85) activeIndex = 5;
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
