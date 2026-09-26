'use client';

import React from 'react';
import { cameraWaypoints } from '@/lib/animations/cameraTrajectories';
import { useScrollTimeline } from '@/hooks/useScrollTimeline';
import { useLenisScroll } from '@/hooks/useLenisScroll';
import { useWebAudio } from '@/hooks/useWebAudio';

const SECTION_NUMBERS = ['01', '02', '03', '04', '05', '06'];

export const ChapterIndicator: React.FC = () => {
  const { activeChapterIndex } = useScrollTimeline();
  const { scrollToProgress } = useLenisScroll();
  const { triggerClickSound } = useWebAudio();

  const handleMarkerClick = (progress: number) => {
    triggerClickSound();
    scrollToProgress(progress);
  };

  return (
    <nav
      className="fixed right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-3 pointer-events-auto"
      aria-label="Story Chapter Navigation"
    >
      <div className="w-px h-10 bg-slate-800" aria-hidden="true" />
      {cameraWaypoints.map((wp, index) => {
        const isActive = activeChapterIndex === wp.chapterIndex;
        const sectionNum = SECTION_NUMBERS[index];
        return (
          <button
            key={wp.chapterIndex}
            onClick={() => handleMarkerClick(wp.scrollProgress)}
            className="group relative flex items-center justify-end focus:outline-none"
            aria-label={`Jump to Section ${sectionNum}: ${wp.chapterTitle}`}
          >
            {/* Tooltip Hover & Active Badge Label */}
            <span
              className={`absolute right-10 transition-all duration-200 font-mono text-xs whitespace-nowrap px-2.5 py-1 rounded-md border pointer-events-none ${
                isActive
                  ? 'opacity-100 bg-slate-950/90 text-amber-300 border-amber-500/50 shadow-md font-bold scale-105'
                  : 'opacity-0 group-hover:opacity-100 bg-slate-950/80 text-cyan-300 border-slate-700'
              }`}
            >
              {sectionNum}. {wp.chapterTitle}
            </span>

            {/* Section Number Marker Circle */}
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center font-mono text-xs transition-all duration-300 ${
                isActive
                  ? 'bg-amber-400 text-slate-950 font-bold scale-110 shadow-[0_0_15px_rgba(245,158,11,0.7)] ring-2 ring-amber-300'
                  : 'bg-slate-900/90 text-slate-400 border border-slate-700 hover:border-cyan-400 hover:text-cyan-300 hover:scale-105'
              }`}
            >
              {sectionNum}
            </div>
          </button>
        );
      })}
      <div className="w-px h-10 bg-slate-800" aria-hidden="true" />
    </nav>
  );
};
