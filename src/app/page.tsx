'use client';

import React, { useState, useEffect, useCallback } from 'react';
import dynamic from 'next/dynamic';
import { Chapter1HeroStory } from '@/components/story/Chapter1HeroStory';
import { Chapter2ForgeStory } from '@/components/story/Chapter2ForgeStory';
import { Chapter3CareerStory } from '@/components/story/Chapter3CareerStory';
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
import { useLenisScroll, scrollToChapter } from '@/hooks/useLenisScroll';

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

  // Initialize shared Lenis smooth scroll
  useLenisScroll();

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

    mountedTimer = setTimeout(mountCanvas, 1500);

    return cleanup;
  }, []);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    const activeEl = document.activeElement as HTMLElement | null;
    if (
      activeEl &&
      (activeEl.tagName === 'INPUT' ||
        activeEl.tagName === 'TEXTAREA' ||
        activeEl.isContentEditable)
    ) {
      return;
    }
    // Jump to chapters 1-6 in both directions (forward and backward)
    if (e.key === '1') scrollToChapter(1);
    if (e.key === '2') scrollToChapter(2);
    if (e.key === '3') scrollToChapter(3);
    if (e.key === '4') scrollToChapter(4);
    if (e.key === '5') scrollToChapter(5);
    if (e.key === '6') scrollToChapter(6);
    if (e.key === 'Escape') setSelectedProject(null);
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <main className="relative min-h-[600vh] bg-obsidian-950 text-slate-100 selection:bg-cyan-hud selection:text-obsidian-950">
      {/* 3D WebGL Canvas Layer */}
      {isMounted && <WorldCanvas />}

      {/* Sci-Fi Reticle & Perimeter HUD Overlays */}
      <CustomReticleCursor />
      <DeathStrandingHUD />
      <AudioControlHUD />
      <ChapterIndicator />

      {/* Chapter Story Overlay Containers with explicit section IDs */}
      <div className="relative z-10 w-full pointer-events-none">
        {/* Chapter I: The Frozen Ridge */}
        <section
          id="chapter-1"
          className="min-h-screen flex items-center justify-center py-20"
        >
          <Chapter1HeroStory />
        </section>

        {/* Chapter II: The Chamber of Equilibrium */}
        <section
          id="chapter-2"
          className="min-h-screen flex items-center justify-center py-20"
        >
          <Chapter2ForgeStory />
        </section>

        {/* Chapter III: The Supply Line */}
        <section
          id="chapter-3"
          className="min-h-screen flex items-center justify-center py-20"
        >
          <Chapter3CareerStory />
        </section>

        {/* Chapter IV: Chronicles of Creation */}
        <section
          id="chapter-4"
          className="min-h-screen flex items-center justify-center py-20"
        >
          <Chapter3RelicsStory onSelectProject={setSelectedProject} />
        </section>

        {/* Chapter V: The Trial of Mastery */}
        <section
          id="chapter-5"
          className="min-h-screen flex items-center justify-center py-20"
        >
          <Chapter4ConstellationStory hoveredSkill={hoveredSkill} />
        </section>

        {/* Chapter VI: Transmission Nexus */}
        <section
          id="chapter-6"
          className="min-h-screen flex items-center justify-center py-20"
        >
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
