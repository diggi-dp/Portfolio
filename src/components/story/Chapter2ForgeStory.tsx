'use client';

import React, { useState } from 'react';
import { CheckCircle2, Shield, Zap, Lock } from 'lucide-react';
import { useWebAudio } from '@/hooks/useWebAudio';
import { siteConfig } from '@/lib/config/site.config';

export const Chapter2ForgeStory: React.FC = () => {
  const { triggerClickSound, triggerChimeSound } = useWebAudio();

  const [puzzles, setPuzzles] = useState(() =>
    siteConfig.chapters.chapter2.cards.map((card, idx) => ({
      ...card,
      icon:
        idx === 0 ? (
          <Shield className="w-6 h-6 text-amber-400" />
        ) : idx === 1 ? (
          <Zap className="w-6 h-6 text-cyan-400" />
        ) : (
          <Lock className="w-6 h-6 text-emerald-400" />
        ),
      solved: idx === 0,
    }))
  );

  const handlePuzzleClick = (id: string) => {
    triggerClickSound();
    setPuzzles((prev) =>
      prev.map((p) => {
        if (p.id === id) {
          if (!p.solved) triggerChimeSound();
          return { ...p, solved: !p.solved };
        }
        return p;
      })
    );
  };

  return (
    <div className="flex flex-col items-center justify-center text-center max-w-5xl px-6 pointer-events-auto select-none pt-32 md:pt-36">
      {/* Chapter Tag */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/40 text-cyan-300 font-mono text-xs tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
        <span>{siteConfig.chapters.chapter2.tag}</span>
      </div>

      <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-3 drop-shadow-md">
        {siteConfig.chapters.chapter2.title}
      </h2>

      <p className="font-sans text-sm md:text-base text-slate-300 max-w-2xl mb-8 font-normal leading-relaxed">
        {siteConfig.chapters.chapter2.subtitle}
      </p>

      {/* Mindset Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {puzzles.map((puzzle) => (
          <div
            key={puzzle.id}
            onClick={() => handlePuzzleClick(puzzle.id)}
            className={`glass-panel p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between text-left ${
              puzzle.solved
                ? 'border-amber-400/80 bg-slate-900/95 shadow-[0_0_30px_rgba(245,158,11,0.25)] scale-[1.02]'
                : 'border-slate-700/70 hover:border-cyan-400/60 hover:scale-[1.01]'
            }`}
          >
            <div>
              {/* Card Header Icon & Status */}
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
                  {puzzle.icon}
                </div>
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-mono text-xs font-semibold ${
                    puzzle.solved
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/50'
                      : 'bg-slate-800 text-slate-400 border border-slate-700'
                  }`}
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {puzzle.solved ? 'CORE IGNITED' : 'STANDBY'}
                </span>
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-xl font-serif font-bold text-white mb-1">
                {puzzle.title}
              </h3>
              <p className="font-mono text-xs text-amber-400 uppercase tracking-wider mb-3">
                {puzzle.subtitle}
              </p>

              {/* Description */}
              <p className="font-sans text-sm text-slate-200 leading-relaxed">
                {puzzle.description}
              </p>
            </div>

            {/* Click Directive */}
            <div className="mt-6 pt-4 border-t border-slate-800 font-mono text-xs text-cyan-300 flex items-center justify-between">
              <span>
                {puzzle.solved ? 'PARAMETER ACTIVE' : 'CLICK TO ENGAGE'}
              </span>
              <span>→</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
