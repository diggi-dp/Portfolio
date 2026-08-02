'use client';

import React from 'react';
import { SkillNodeData } from '@/lib/cms/skillsData';
import { Code2, Layers, Cpu, Database } from 'lucide-react';
import { siteConfig } from '@/lib/config/site.config';

interface Chapter4ConstellationStoryProps {
  hoveredSkill?: SkillNodeData | null;
}

export const Chapter4ConstellationStory: React.FC<
  Chapter4ConstellationStoryProps
> = () => {
  const icons = [
    <Code2 key={0} className="w-5 h-5 text-amber-400" />,
    <Layers key={1} className="w-5 h-5 text-cyan-400" />,
    <Cpu key={2} className="w-5 h-5 text-emerald-400" />,
    <Database key={3} className="w-5 h-5 text-purple-400" />,
  ];

  const colors = [
    'border-amber-400/50',
    'border-cyan-400/50',
    'border-emerald-400/50',
    'border-purple-400/50',
  ];

  return (
    <div className="flex flex-col items-center justify-center text-center max-w-6xl px-6 pointer-events-auto select-none pt-32 md:pt-36">
      {/* Chapter Tag */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/40 text-cyan-300 font-mono text-xs tracking-widest uppercase mb-3 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
        <span>{siteConfig.chapters.chapter4.tag}</span>
      </div>

      <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-3 drop-shadow-md">
        {siteConfig.chapters.chapter4.title}
      </h2>

      <p className="font-sans text-sm md:text-base text-slate-200 max-w-2xl mb-8 font-normal leading-relaxed">
        {siteConfig.chapters.chapter4.subtitle}
      </p>

      {/* Skill Benefit Showcase Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {siteConfig.chapters.chapter4.categories.map((cat, idx) => (
          <div
            key={idx}
            className={`glass-panel p-6 rounded-2xl border ${colors[idx % colors.length]} hover:scale-[1.02] transition-all duration-300 text-left flex flex-col justify-between`}
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-slate-800 border border-slate-700">
                  {icons[idx % icons.length]}
                </div>
                <h3 className="font-serif font-bold text-sm text-white leading-snug">
                  {cat.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1 bg-slate-800/90 border border-slate-700 text-slate-100 font-mono text-xs rounded-lg shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-slate-800 font-mono text-[11px] text-amber-400 font-semibold">
              ✓ PRODUCTION TESTED
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
