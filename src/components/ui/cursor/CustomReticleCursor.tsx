'use client';

import React, { useEffect, useState } from 'react';
import { usePointerVector } from '@/hooks/usePointerVector';

export const CustomReticleCursor: React.FC = () => {
  const pointer = usePointerVector();
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.getAttribute('role') === 'button'
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mouseover', handleOver, { passive: true });

    return () => {
      window.removeEventListener('mouseover', handleOver);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 pointer-events-none z-50 transition-all duration-75 ease-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        transform: `translate3d(${pointer.clientX}px, ${pointer.clientY}px, 0)`,
      }}
    >
      {/* Sleek Minimal Cursor Ring */}
      <div
        className={`-translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-hud/60 transition-all duration-200 flex items-center justify-center ${
          isHovered
            ? 'w-8 h-8 border-rune-gold bg-rune-gold/15 scale-125'
            : 'w-4 h-4 opacity-50'
        }`}
      >
        <div className="w-1 h-1 bg-cyan-hud rounded-full" />
      </div>
    </div>
  );
};
