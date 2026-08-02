'use client';

import React from 'react';
import { SciFiTerminalForm } from '../ui/terminal/SciFiTerminalForm';
import { siteConfig } from '@/lib/config/site.config';

export const Chapter5SignalStory: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center max-w-4xl px-6 pointer-events-auto select-none pt-32 md:pt-36">
      {/* Chapter Tag */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/40 text-amber-300 font-mono text-xs tracking-widest uppercase mb-3 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
        <span>{siteConfig.chapters.chapter5.tag}</span>
      </div>

      <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-3 drop-shadow-md">
        {siteConfig.chapters.chapter5.title}
      </h2>

      <p className="font-sans text-sm md:text-base text-slate-200 max-w-2xl mb-8 font-normal leading-relaxed">
        {siteConfig.chapters.chapter5.subtitle}
      </p>

      {/* Terminal Form Container */}
      <div className="w-full max-w-2xl">
        <SciFiTerminalForm />
      </div>
    </div>
  );
};
