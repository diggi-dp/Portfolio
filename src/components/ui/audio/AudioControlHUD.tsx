'use client';

import React from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { useWebAudio } from '@/hooks/useWebAudio';

export const AudioControlHUD: React.FC = () => {
  const { isMuted, toggleMute, triggerClickSound } = useWebAudio();

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    triggerClickSound();
    toggleMute();
  };

  return (
    <button
      onClick={handleToggle}
      className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50 flex items-center gap-2 sm:gap-3 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full glass-panel border border-cyan-hud/30 text-cyan-hud hover:text-rune-gold hover:border-rune-gold transition-all duration-300 group focus:outline-none shadow-[0_0_20px_rgba(78,242,210,0.15)]"
      aria-label={isMuted ? 'Unmute Soundtrack' : 'Mute Soundtrack'}
    >
      <Music
        className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isMuted ? 'text-slate-500' : 'text-rune-gold animate-bounce'}`}
      />

      {isMuted ? (
        <VolumeX className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400 group-hover:text-rune-gold" />
      ) : (
        <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-hud group-hover:text-rune-gold" />
      )}

      <span className="hidden sm:inline font-mono text-xs tracking-wider uppercase font-semibold">
        {isMuted ? 'SOUNDTRACK: MUTED' : 'SOUNDTRACK: ACTIVE'}
      </span>
      <span className="sm:hidden font-mono text-[10px] tracking-wider uppercase font-semibold">
        {isMuted ? 'MUTED' : 'AUDIO'}
      </span>

      {!isMuted && (
        <span className="flex gap-1 items-end h-3 ml-1">
          <span
            className="w-0.5 bg-rune-gold h-2.5 animate-bounce"
            style={{ animationDelay: '0ms' }}
          />
          <span
            className="w-0.5 bg-cyan-hud h-3.5 animate-bounce"
            style={{ animationDelay: '150ms' }}
          />
          <span
            className="w-0.5 bg-rune-gold h-1.5 animate-bounce"
            style={{ animationDelay: '300ms' }}
          />
        </span>
      )}
    </button>
  );
};
