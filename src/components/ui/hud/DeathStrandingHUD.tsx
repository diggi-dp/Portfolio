'use client';

import React from 'react';
import { useDynamicTelemetry } from '@/hooks/useDynamicTelemetry';
import { siteConfig } from '@/lib/config/site.config';
import { Mail, Phone, FileText } from 'lucide-react';
import { useWebAudio } from '@/hooks/useWebAudio';

export const DeathStrandingHUD: React.FC = () => {
  const { fps, altitude, bearing, coordinates } = useDynamicTelemetry();
  const { triggerClickSound } = useWebAudio();

  const handleLinkClick = () => {
    triggerClickSound();
  };

  return (
    <div className="fixed inset-0 z-30 pointer-events-none select-none font-mono text-xs text-cyan-300">
      {/* Top Left Dynamic Telemetry Box (Desktop & Large Tablet) */}
      <div className="absolute top-6 left-6 hidden lg:flex flex-col gap-1 p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 backdrop-blur-md shadow-lg pointer-events-auto">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-slate-300">[ LOC: {coordinates} ]</span>
        </div>
        <div className="flex items-center gap-3 text-slate-400 text-[11px]">
          <span>[ SYS: ONLINE {fps}FPS ]</span>
          <span className="text-amber-400 font-semibold">
            ALT: {altitude > 0 ? `+${altitude}` : altitude}M
          </span>
        </div>
        <div className="text-slate-500 text-[10px]">BEARING: {bearing}</div>
      </div>

      {/* Top Floating Social & Resume Action Bar */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-1/2 sm:-translate-x-1/2 pointer-events-auto flex items-center gap-1.5 sm:gap-2 p-1.5 sm:p-2 rounded-full bg-slate-950/90 border border-slate-800/80 backdrop-blur-xl shadow-2xl z-40 max-w-[calc(100vw-130px)] sm:max-w-none">
        {/* Resume Button */}
        <a
          href={siteConfig.links.resume}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleLinkClick}
          className="flex items-center gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 hover:bg-amber-400 hover:text-slate-950 transition-all font-mono text-[11px] sm:text-xs font-bold shadow-sm shrink-0"
          title="View Resume / CV"
        >
          <FileText className="w-3.5 h-3.5" />
          <span className="inline">RESUME</span>
        </a>

        <div className="w-px h-4 bg-slate-800 shrink-0" />

        {/* GitHub SVG Icon */}
        <a
          href={siteConfig.links.github}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleLinkClick}
          className="p-1.5 sm:p-2 rounded-full text-slate-300 hover:text-cyan-300 hover:bg-slate-800/60 transition-colors shrink-0"
          title="GitHub Repository"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
          </svg>
        </a>

        {/* LinkedIn SVG Icon */}
        <a
          href={siteConfig.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleLinkClick}
          className="p-1.5 sm:p-2 rounded-full text-slate-300 hover:text-cyan-300 hover:bg-slate-800/60 transition-colors shrink-0"
          title="LinkedIn Profile"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26Z" />
          </svg>
        </a>

        {/* Email */}
        <a
          href={`mailto:${siteConfig.links.email}`}
          onClick={handleLinkClick}
          className="p-1.5 sm:p-2 rounded-full text-slate-300 hover:text-cyan-300 hover:bg-slate-800/60 transition-colors shrink-0"
          title="Send Email"
        >
          <Mail className="w-4 h-4" />
        </a>

        {/* Phone */}
        <a
          href={`tel:${siteConfig.links.phone}`}
          onClick={handleLinkClick}
          className="hidden sm:flex p-1.5 sm:p-2 rounded-full text-slate-300 hover:text-cyan-300 hover:bg-slate-800/60 transition-colors shrink-0"
          title="Call Direct"
        >
          <Phone className="w-4 h-4" />
        </a>
      </div>

      {/* Bottom Left Developer Info */}
      <div className="absolute bottom-6 left-6 hidden md:flex flex-col gap-0.5 text-slate-500 text-[10px]">
        <span>[ DEV: {siteConfig.developer.name} ]</span>
        <span>[ STACK: NEXT.JS 16 || R3F || THREE.JS || GSAP ]</span>
      </div>

      {/* Bottom Right Interaction Guide */}
      <div className="absolute bottom-6 right-6 hidden md:flex flex-col items-end gap-0.5 text-slate-500 text-[10px]">
        <span>[ PRESS 1-6 TO JUMP CHAPTERS ]</span>
      </div>
    </div>
  );
};
