'use client';

import { useState, useCallback, useEffect } from 'react';
import { synthEngine } from '@/lib/audio/synthEngine';
import { playUIClick, playCrystalChime } from '@/lib/audio/uiClicks';
import { playThunderRumble } from '@/lib/audio/stormAudio';

export function useWebAudio() {
  const [audioState, setAudioState] = useState(() => ({
    isInitialized: synthEngine.getIsInitialized(),
    isMuted: synthEngine.getIsMuted(),
  }));

  // Synchronize state across all components using synthEngine subscription
  useEffect(() => {
    return synthEngine.subscribe((state) => {
      setAudioState({
        isInitialized: state.isInitialized,
        isMuted: state.isMuted,
      });
    });
  }, []);

  const initAudio = useCallback(async () => {
    await synthEngine.initialize();
  }, []);

  const toggleMute = useCallback(async () => {
    await synthEngine.toggleMute();
  }, []);

  const triggerClickSound = useCallback(() => {
    if (synthEngine.getIsMuted()) return;
    const ctx = synthEngine.getAudioContext();
    const master = synthEngine.getMasterGain();
    if (ctx && master) playUIClick(ctx, master);
  }, []);

  const triggerChimeSound = useCallback(() => {
    if (synthEngine.getIsMuted()) return;
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
    if (synthEngine.getIsMuted()) return;
    const ctx = synthEngine.getAudioContext();
    const master = synthEngine.getMasterGain();
    if (ctx && master) playThunderRumble(ctx, master);
  }, []);

  // Eagerly initialize on ANY user gesture (click, tap, scroll, keydown)
  useEffect(() => {
    if (synthEngine.getIsInitialized()) return;

    const handleFirstUserGesture = () => {
      synthEngine.initialize();
      cleanup();
    };

    const cleanup = () => {
      window.removeEventListener('click', handleFirstUserGesture);
      window.removeEventListener('pointerdown', handleFirstUserGesture);
      window.removeEventListener('keydown', handleFirstUserGesture);
      window.removeEventListener('touchstart', handleFirstUserGesture);
      window.removeEventListener('wheel', handleFirstUserGesture);
    };

    window.addEventListener('click', handleFirstUserGesture, {
      once: true,
      passive: true,
    });
    window.addEventListener('pointerdown', handleFirstUserGesture, {
      once: true,
      passive: true,
    });
    window.addEventListener('keydown', handleFirstUserGesture, {
      once: true,
      passive: true,
    });
    window.addEventListener('touchstart', handleFirstUserGesture, {
      once: true,
      passive: true,
    });
    window.addEventListener('wheel', handleFirstUserGesture, {
      once: true,
      passive: true,
    });

    return cleanup;
  }, []);

  return {
    isInitialized: audioState.isInitialized,
    isMuted: audioState.isMuted,
    initAudio,
    toggleMute,
    triggerClickSound,
    triggerChimeSound,
    triggerFilterSweep,
    triggerSkillArpeggio,
    triggerThunderSound,
  };
}
