'use client';

import React from 'react';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

export const PostProcessingPipeline: React.FC = () => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 300);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <EffectComposer>
      {/* Selective Vibrant Bloom for Glowing Runes & Relics */}
      <Bloom
        intensity={1.2}
        luminanceThreshold={0.2}
        luminanceSmoothing={0.9}
      />
    </EffectComposer>
  );
};
