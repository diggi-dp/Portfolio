'use client';

import React, { useEffect, useRef, useState } from 'react';

export const CustomReticleCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable custom cursor if device has a fine pointer (mouse)
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const handlePointerMove = (e: MouseEvent) => {
      if (!cursorRef.current) return;
      if (!isVisible) setIsVisible(true);
      cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    };

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target &&
        (target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.closest('button') ||
          target.closest('a') ||
          target.getAttribute('role') === 'button')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    window.addEventListener('mouseover', handleOver, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('mouseover', handleOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 pointer-events-none z-50 will-change-transform ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        transform: 'translate3d(-100px, -100px, 0)',
        transition: 'opacity 0.2s ease',
      }}
    >
      {/* Sleek Minimal Cursor Ring */}
      <div
        className={`-translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-hud/70 transition-all duration-150 flex items-center justify-center ${
          isHovered
            ? 'w-8 h-8 border-rune-gold bg-rune-gold/20 scale-125 shadow-[0_0_15px_rgba(223,168,74,0.4)]'
            : 'w-4 h-4 opacity-75'
        }`}
      >
        <div className="w-1 h-1 bg-cyan-hud rounded-full" />
      </div>
    </div>
  );
};
