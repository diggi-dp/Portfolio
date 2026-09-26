'use client';

import React from 'react';
import { Briefcase, Archive } from 'lucide-react';
import { siteConfig, CareerEntry } from '@/lib/config/site.config';

export const Chapter3CareerStory: React.FC = () => {
  const chapterConfig = siteConfig.chapters.chapter3;
  const careers = chapterConfig.careers as unknown as CareerEntry[];

  return (
    <div className="flex flex-col items-center justify-center text-center max-w-5xl px-6 pointer-events-auto select-none pt-32 md:pt-36">
      {/* Chapter Tag */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/40 text-emerald-300 font-mono text-xs tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
        <span>{chapterConfig.tag}</span>
      </div>

      <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-3 drop-shadow-md">
        {chapterConfig.title}
      </h2>

      <p className="font-sans text-sm md:text-base text-slate-300 max-w-2xl mb-10 font-normal leading-relaxed">
        {chapterConfig.subtitle}
      </p>

      {/* Career Timeline */}
      <div className="w-full max-w-3xl space-y-6">
        {careers.map((career, idx) => {
          const isActive = career.status === 'active';
          return (
            <div
              key={idx}
              className={`relative glass-panel p-6 md:p-8 rounded-2xl border text-left transition-all duration-500 ${
                isActive
                  ? 'border-emerald-400/70 bg-slate-900/95 shadow-[0_0_40px_rgba(16,185,129,0.15)]'
                  : 'border-slate-700/60 bg-slate-950/80'
              }`}
            >
              {/* Status Badge */}
              <div className="flex items-center justify-between mb-5 flex-wrap gap-3">
                <div className="flex items-center gap-3">
                  <div
                    className={`p-2.5 rounded-xl border ${
                      isActive
                        ? 'bg-emerald-500/10 border-emerald-500/40'
                        : 'bg-slate-800/80 border-slate-700'
                    }`}
                  >
                    {isActive ? (
                      <Briefcase className="w-5 h-5 text-emerald-400" />
                    ) : (
                      <Archive className="w-5 h-5 text-slate-400" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg md:text-xl text-white">
                      {career.role}
                    </h3>
                    <p
                      className={`font-mono text-xs tracking-wider uppercase ${
                        isActive ? 'text-emerald-400' : 'text-slate-400'
                      }`}
                    >
                      {career.company}
                    </p>
                  </div>
                </div>

                {/* Status Indicator */}
                <div
                  className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full font-mono text-xs font-bold border ${
                    isActive
                      ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/50'
                      : 'bg-slate-800/80 text-slate-500 border-slate-700'
                  }`}
                >
                  {isActive ? (
                    <>
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                      </span>
                      ACTIVE
                    </>
                  ) : (
                    <>
                      <span className="h-2 w-2 rounded-full bg-slate-600" />
                      ARCHIVED
                    </>
                  )}
                </div>
              </div>

              {/* Period */}
              <div
                className={`font-mono text-xs tracking-wider mb-4 ${
                  isActive ? 'text-emerald-400/80' : 'text-slate-500'
                }`}
              >
                {career.period}
              </div>

              {/* Description */}
              <p className="font-sans text-sm md:text-base text-slate-200 leading-relaxed">
                {career.description}
              </p>

              {/* Active indicator line */}
              {isActive && (
                <div className="absolute left-0 top-6 bottom-6 w-0.5 bg-gradient-to-b from-emerald-400 via-emerald-400/50 to-transparent rounded-full" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
