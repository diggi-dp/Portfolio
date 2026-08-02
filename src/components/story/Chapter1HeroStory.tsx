'use client';

import React from 'react';
import { siteConfig } from '@/lib/config/site.config';
import { Sparkles } from 'lucide-react';

export const Chapter1HeroStory: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center max-w-5xl px-6 pointer-events-auto select-none pt-32 md:pt-36">
      {/* Top Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/40 text-amber-400 font-mono text-xs tracking-widest uppercase mb-6 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
        <Sparkles className="w-3.5 h-3.5" />
        <span>{siteConfig.hero.badge}</span>
      </div>

      {/* Main Display Title */}
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-extrabold text-white tracking-tight mb-4 drop-shadow-[0_4px_25px_rgba(0,0,0,0.9)]">
        {siteConfig.developer.name}
      </h1>

      {/* Subtitle */}
      <p className="text-lg md:text-xl font-sans text-amber-400 tracking-widest uppercase mb-8 font-semibold drop-shadow-md">
        {siteConfig.developer.subtitle}
      </p>

      {/* High-Contrast Description Card */}
      <div className="glass-panel-gold p-6 md:p-8 rounded-3xl max-w-2xl border border-amber-500/50 shadow-[0_20px_50px_rgba(0,0,0,0.8)] mb-10">
        <p className="font-sans text-base md:text-lg text-slate-100 leading-relaxed font-normal">
          {siteConfig.developer.bio}
        </p>
      </div>

      {/* Scroll Directive */}
      <div className="flex flex-col items-center gap-2 font-mono text-xs text-cyan-300/90 font-medium">
        <span>{siteConfig.hero.scrollDirective}</span>
        <div className="w-0.5 h-10 bg-gradient-to-b from-amber-400 via-cyan-400 to-transparent animate-bounce" />
      </div>
    </div>
  );
};
