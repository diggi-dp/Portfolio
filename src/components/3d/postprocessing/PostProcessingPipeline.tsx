'use client';

import React from 'react';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

export const PostProcessingPipeline: React.FC = () => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 200);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <EffectComposer multisampling={0}>
      {/* High-performance selective bloom restricted to bright emissive runes & cores */}
      <Bloom
        intensity={0.85}
        luminanceThreshold={0.85}
        luminanceSmoothing={0.4}
        mipmapBlur
      />
    </EffectComposer>
  );
};
