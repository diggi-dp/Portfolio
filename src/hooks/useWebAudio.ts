'use client';

import { useState, useCallback, useEffect } from 'react';
import { synthEngine } from '@/lib/audio/synthEngine';
import { soundtrackEngine } from '@/lib/audio/soundtrack';
import { playUIClick, playCrystalChime } from '@/lib/audio/uiClicks';
import { playThunderRumble } from '@/lib/audio/stormAudio';

export function useWebAudio() {
  const [isInitialized, setIsInitialized] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const initAudio = useCallback(() => {
    const ctx = synthEngine.initialize();
    if (ctx && ctx.state === 'running') {
      setIsInitialized(true);
      soundtrackEngine.init(ctx, synthEngine.getMasterGain() || undefined);
      soundtrackEngine.play();
    }
  }, []);

  const toggleMute = useCallback(() => {
    const muted = synthEngine.toggleMute();
    setIsMuted(muted);
    if (muted) {
      soundtrackEngine.stop();
    } else {
      soundtrackEngine.play();
    }
  }, []);

  const triggerClickSound = useCallback(() => {
    const ctx = synthEngine.getAudioContext();
    const master = synthEngine.getMasterGain();
    if (ctx && master) playUIClick(ctx, master);
  }, []);

  const triggerChimeSound = useCallback(() => {
    const ctx = synthEngine.getAudioContext();
    const master = synthEngine.getMasterGain();
    if (ctx && master) playCrystalChime(ctx, master);
  }, []);

  const triggerFilterSweep = useCallback(() => {
    synthEngine.playFilterSweep();
  }, []);

  const triggerSkillArpeggio = useCallback(() => {
    synthEngine.playSkillArpeggio();
  }, []);

  const triggerThunderSound = useCallback(() => {
    const ctx = synthEngine.getAudioContext();
    const master = synthEngine.getMasterGain();
    if (ctx && master) playThunderRumble(ctx, master);
  }, []);

  useEffect(() => {
    const handleFirstUserGesture = () => {
      initAudio();
    };

    window.addEventListener('click', handleFirstUserGesture, { once: true });
    window.addEventListener('touchstart', handleFirstUserGesture, {
      once: true,
    });

    return () => {
      window.removeEventListener('click', handleFirstUserGesture);
      window.removeEventListener('touchstart', handleFirstUserGesture);
    };
  }, [initAudio]);

  return {
    isInitialized,
    isMuted,
    initAudio,
    toggleMute,
    triggerClickSound,
    triggerChimeSound,
    triggerFilterSweep,
    triggerSkillArpeggio,
    triggerThunderSound,
  };
}
