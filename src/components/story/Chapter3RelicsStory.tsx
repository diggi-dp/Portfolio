'use client';

import React from 'react';
import Image from 'next/image';
import { projectsData, ProjectWorldData } from '@/lib/cms/projectsData';
import { useWebAudio } from '@/hooks/useWebAudio';
import { ExternalLink, Lock } from 'lucide-react';
import { siteConfig } from '@/lib/config/site.config';

interface Chapter3RelicsStoryProps {
  onSelectProject?: (project: ProjectWorldData) => void;
}

export const Chapter3RelicsStory: React.FC<Chapter3RelicsStoryProps> = ({
  onSelectProject,
}) => {
  const { triggerClickSound } = useWebAudio();

  const handleCardClick = (project: ProjectWorldData) => {
    triggerClickSound();
    if (onSelectProject) onSelectProject(project);
  };

  return (
    <div className="flex flex-col items-center justify-center text-center max-w-6xl px-6 pointer-events-auto select-none pt-32 md:pt-36">
      {/* Chapter Tag */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/40 text-amber-300 font-mono text-xs tracking-widest uppercase mb-3 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
        <span>{(siteConfig.chapters as any).chapter4.tag}</span>
      </div>

      <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-3 drop-shadow-md">
        {(siteConfig.chapters as any).chapter4.title}
      </h2>

      <p className="font-sans text-sm md:text-base text-slate-200 max-w-2xl mb-8 font-normal leading-relaxed">
        {(siteConfig.chapters as any).chapter4.subtitle}
      </p>

      {/* Visual Showcase Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {projectsData.map((project) => {
          const isClassified = (project as any).isClassified;
          return (
            <div
              key={project.id}
              onClick={() => handleCardClick(project)}
              className={`group relative glass-panel p-4 rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between hover:-translate-y-1.5 ${
                isClassified
                  ? 'border-cyan-500/40 hover:border-cyan-400/80 hover:shadow-[0_10px_40px_rgba(6,182,212,0.2)]'
                  : 'border-slate-700/80 hover:border-amber-400/80 hover:shadow-[0_10px_40px_rgba(245,158,11,0.2)]'
              }`}
            >
              {/* Image Preview Container */}
              <div className="relative w-full h-36 rounded-xl overflow-hidden mb-4 border border-slate-700 shadow-md">
                {isClassified ? (
                  <div className="absolute inset-0 bg-slate-900/95 backdrop-blur-sm flex flex-col items-center justify-center gap-2">
                    <Lock className="w-6 h-6 text-cyan-400/60" />
                    <span className="font-mono text-[10px] text-cyan-400/70 tracking-widest uppercase">
                      CLASSIFIED — ASSETS PENDING
                    </span>
                  </div>
                ) : (
                  <>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      quality={80}
                      className="object-cover object-top group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  </>
                )}
              </div>

              <div className="text-left flex-1">
                <h3 className="font-serif font-bold text-base text-white group-hover:text-amber-300 transition-colors mb-1.5 leading-snug">
                  {project.title}
                </h3>
                <p className="font-sans text-xs text-slate-300 line-clamp-2 mb-4 leading-relaxed">
                  {project.subtitle}
                </p>
              </div>

              {/* Metrics Badge & Launch Button */}
              <div className="pt-3 border-t border-slate-800 flex justify-between items-center font-mono text-xs text-cyan-300">
                <span className="font-bold text-amber-300 bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-500/30">
                  {isClassified ? 'LIVE' : project.metrics[0]?.value}
                </span>
                <span className="flex items-center gap-1 text-amber-400 font-bold group-hover:translate-x-1 transition-transform">
                  EXPLORE <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
