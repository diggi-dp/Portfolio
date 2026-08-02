'use client';

import React, { useState, useEffect, useCallback } from 'react';
import dynamic from 'next/dynamic';
import { Chapter1HeroStory } from '@/components/story/Chapter1HeroStory';
import { Chapter2ForgeStory } from '@/components/story/Chapter2ForgeStory';
import { Chapter3RelicsStory } from '@/components/story/Chapter3RelicsStory';
import { Chapter4ConstellationStory } from '@/components/story/Chapter4ConstellationStory';
import { Chapter5SignalStory } from '@/components/story/Chapter5SignalStory';
import { AudioControlHUD } from '@/components/ui/audio/AudioControlHUD';
import { ChapterIndicator } from '@/components/ui/hud/ChapterIndicator';
import { DeathStrandingHUD } from '@/components/ui/hud/DeathStrandingHUD';
import { CustomReticleCursor } from '@/components/ui/cursor/CustomReticleCursor';
import { ProjectWorldModal } from '@/components/ui/modals/ProjectWorldModal';
import { ProjectWorldData } from '@/lib/cms/projectsData';
import { SkillNodeData } from '@/lib/cms/skillsData';
import { useLenisScroll } from '@/hooks/useLenisScroll';
import { useWebAudio } from '@/hooks/useWebAudio';

// Dynamic import for WebGL R3F Canvas to disable SSR
const WorldCanvas = dynamic(
  () =>
    import('@/components/3d/canvas/WorldCanvas').then((mod) => mod.WorldCanvas),
  { ssr: false }
);

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const [selectedProject, setSelectedProject] =
    useState<ProjectWorldData | null>(null);
  const [hoveredSkill] = useState<SkillNodeData | null>(null);

  const { scrollToProgress } = useLenisScroll();
  const { toggleMute } = useWebAudio();

  useEffect(() => {
    let mountedTimer: NodeJS.Timeout | null = null;

    const mountCanvas = () => {
      setIsMounted(true);
      cleanup();
    };

    const cleanup = () => {
      if (mountedTimer) clearTimeout(mountedTimer);
      window.removeEventListener('scroll', mountCanvas);
      window.removeEventListener('pointermove', mountCanvas);
      window.removeEventListener('touchstart', mountCanvas);
      window.removeEventListener('keydown', mountCanvas);
    };

    window.addEventListener('scroll', mountCanvas, {
      passive: true,
      once: true,
    });
    window.addEventListener('pointermove', mountCanvas, {
      passive: true,
      once: true,
    });
    window.addEventListener('touchstart', mountCanvas, {
      passive: true,
      once: true,
    });
    window.addEventListener('keydown', mountCanvas, {
      passive: true,
      once: true,
    });

    mountedTimer = setTimeout(mountCanvas, 2200);

    return cleanup;
  }, []);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      const activeEl = document.activeElement as HTMLElement | null;
      if (
        activeEl &&
        (activeEl.tagName === 'INPUT' ||
          activeEl.tagName === 'TEXTAREA' ||
          activeEl.isContentEditable)
      ) {
        return;
      }
      if (e.key === '1') scrollToProgress(0.0);
      if (e.key === '2') scrollToProgress(0.25);
      if (e.key === '3') scrollToProgress(0.5);
      if (e.key === '4') scrollToProgress(0.75);
      if (e.key === '5') scrollToProgress(1.0);
      if (e.key === 'm' || e.key === 'M') toggleMute();
      if (e.key === 'Escape') setSelectedProject(null);
    },
    [scrollToProgress, toggleMute]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <main className="relative min-h-[500vh] bg-obsidian-950 text-slate-100 selection:bg-cyan-hud selection:text-obsidian-950">
      {/* 3D WebGL Canvas Layer */}
      {isMounted && <WorldCanvas />}

      {/* Sci-Fi Reticle & Perimeter HUD Overlays */}
      <CustomReticleCursor />
      <DeathStrandingHUD />
      <AudioControlHUD />
      <ChapterIndicator />

      {/* Chapter Story Overlay Containers */}
      <div className="relative z-10 w-full pointer-events-none">
        {/* Chapter I: The Frozen Ridge */}
        <section className="min-h-screen flex items-center justify-center py-20">
          <Chapter1HeroStory />
        </section>

        {/* Chapter II: The Chamber of Equilibrium */}
        <section className="min-h-screen flex items-center justify-center py-20">
          <Chapter2ForgeStory />
        </section>

        {/* Chapter III: Chronicles of Creation */}
        <section className="min-h-screen flex items-center justify-center py-20">
          <Chapter3RelicsStory onSelectProject={setSelectedProject} />
        </section>

        {/* Chapter IV: The Trial of Mastery */}
        <section className="min-h-screen flex items-center justify-center py-20">
          <Chapter4ConstellationStory hoveredSkill={hoveredSkill} />
        </section>

        {/* Chapter V: Transmission Nexus */}
        <section className="min-h-screen flex items-center justify-center py-20">
          <Chapter5SignalStory />
        </section>
      </div>

      {/* Project World Holographic Modal */}
      <ProjectWorldModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </main>
  );
}
