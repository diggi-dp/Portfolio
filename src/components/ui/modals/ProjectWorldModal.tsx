'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { X, Cpu, CheckCircle, BarChart2, ExternalLink } from 'lucide-react';
import { ProjectWorldData } from '@/lib/cms/projectsData';
import { useWebAudio } from '@/hooks/useWebAudio';

interface ProjectWorldModalProps {
  project: ProjectWorldData | null;
  onClose: () => void;
}

export const ProjectWorldModal: React.FC<ProjectWorldModalProps> = ({
  project,
  onClose,
}) => {
  const { triggerClickSound, triggerFilterSweep } = useWebAudio();
  const modalRef = useRef<HTMLDivElement>(null);

  // Lock body scroll and handle keyboard events
  useEffect(() => {
    if (project) {
      triggerFilterSweep();
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };

      window.addEventListener('keydown', handleKeyDown);

      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [project, triggerFilterSweep, onClose]);

  if (!project) return null;

  const handleClose = () => {
    triggerClickSound();
    onClose();
  };

  const handleScrollPropagation = (e: React.WheelEvent | React.TouchEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-slate-950/90 backdrop-blur-xl animate-fadeIn"
      onClick={handleClose}
      onWheel={handleScrollPropagation}
      onTouchMove={handleScrollPropagation}
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        onWheel={handleScrollPropagation}
        onTouchMove={handleScrollPropagation}
        className="relative w-full max-w-4xl glass-panel rounded-3xl p-6 md:p-8 border border-cyan-400/40 shadow-[0_0_80px_rgba(6,182,212,0.25)] max-h-[90vh] overflow-y-auto overscroll-contain select-text"
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-6 right-6 z-20 p-2.5 rounded-full bg-slate-900/80 border border-slate-700 text-slate-300 hover:text-amber-400 hover:border-amber-400 transition-colors focus:outline-none shadow-md"
          aria-label="Close Project World Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* High-Resolution Screenshot Banner */}
        <div className="relative w-full h-56 md:h-72 rounded-2xl overflow-hidden mb-6 border border-slate-800 shadow-2xl">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 896px) 100vw, 896px"
            quality={85}
            className="object-cover object-top hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
          <div className="absolute bottom-4 left-6 right-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="font-mono text-xs text-amber-400 tracking-widest uppercase mb-1 block">
                [ PROJECT WORLD || {project.id.toUpperCase()} ]
              </span>
              <h2 className="text-2xl md:text-4xl font-serif font-bold text-white drop-shadow-md">
                {project.title}
              </h2>
            </div>

            {/* Action Buttons: Live Demo & GitHub */}
            <div className="flex items-center gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={triggerClickSound}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500 text-slate-950 font-mono text-xs font-bold hover:bg-amber-400 transition-all shadow-lg hover:scale-105"
                >
                  <ExternalLink className="w-4 h-4" />
                  LIVE DEMO
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={triggerClickSound}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 border border-slate-700 text-cyan-300 font-mono text-xs font-bold hover:border-cyan-400 transition-all shadow-lg hover:scale-105"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
                  </svg>
                  GITHUB
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-base md:text-lg font-sans text-cyan-300 mb-6 font-medium">
          {project.subtitle}
        </p>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {project.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="bg-slate-900/90 p-4 rounded-xl border border-slate-800 flex flex-col items-center justify-center text-center shadow-inner"
            >
              <BarChart2 className="w-5 h-5 text-amber-400 mb-1" />
              <span className="text-2xl font-mono font-bold text-amber-300">
                {metric.value}
              </span>
              <span className="text-xs font-sans text-slate-400 mt-1">
                {metric.label}
              </span>
            </div>
          ))}
        </div>

        {/* Architecture & Engineering Details */}
        <div className="space-y-6 text-slate-300 font-sans text-sm">
          <div>
            <h3 className="font-mono text-xs text-amber-400 tracking-widest uppercase mb-2 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-cyan-300" /> SYSTEM ARCHITECTURE &
              ENGINEERING PATTERNS
            </h3>
            <p className="bg-slate-900/70 p-4 rounded-xl border border-slate-800 leading-relaxed text-slate-100">
              {project.architecture}
            </p>
          </div>

          <div>
            <h3 className="font-mono text-xs text-amber-400 tracking-widest uppercase mb-2 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-cyan-300" /> KEY CHALLENGES &
              SOLUTIONS
            </h3>
            <ul className="space-y-2">
              {project.challenges.map((c, i) => (
                <li
                  key={i}
                  className="bg-slate-900/70 p-3 rounded-lg border border-slate-800 flex items-start gap-3"
                >
                  <span className="text-cyan-300 font-mono text-base">▸</span>
                  <span className="leading-relaxed text-slate-200">{c}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Lessons Learned */}
          <div>
            <h3 className="font-mono text-xs text-amber-400 tracking-widest uppercase mb-2">
              LESSONS LEARNED & ARCHITECTURAL TAKEAWAYS
            </h3>
            <p className="bg-slate-900/70 p-4 rounded-xl border border-slate-800 leading-relaxed text-slate-300 italic">
              &quot;{project.lessonsLearned}&quot;
            </p>
          </div>

          {/* Technology Stack Chips */}
          <div>
            <h3 className="font-mono text-xs text-amber-400 tracking-widest uppercase mb-2">
              TECHNOLOGY STACK
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((t, i) => (
                <span
                  key={i}
                  className="px-3.5 py-1.5 bg-slate-900 border border-cyan-400/30 text-cyan-300 font-mono text-xs rounded-full shadow-sm"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="mt-8 pt-4 border-t border-slate-800 flex flex-wrap justify-between items-center gap-4 font-mono text-xs text-slate-400">
          <span>TIMELINE: {project.timeline}</span>
          <button
            onClick={handleClose}
            className="px-6 py-2.5 bg-amber-500 text-slate-950 font-bold rounded-xl hover:bg-amber-400 transition-colors shadow-lg"
          >
            RETURN TO ORBIT [ESC]
          </button>
        </div>
      </div>
    </div>
  );
};
