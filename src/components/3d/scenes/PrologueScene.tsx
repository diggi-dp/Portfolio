'use client';

import React from 'react';
import { NordicTerrainMesh } from '../elements/NordicTerrainMesh';
import { MonolithMesh } from '../elements/MonolithMesh';
import { SnowBlizzardParticles } from '../particles/SnowBlizzardParticles';

export const PrologueScene: React.FC = () => {
  return (
    <group position={[0, 0, 0]}>
      {/* Directional Moon Light */}
      <directionalLight
        position={[-10, 20, 15]}
        intensity={0.4}
        color="#1a2842"
      />

      {/* Warm Obelisk Core Ambient Light */}
      <pointLight
        position={[0, 4, 0]}
        intensity={3.5}
        color="#dfa84a"
        distance={25}
      />

      {/* Procedural Nordic Terrain */}
      <NordicTerrainMesh />

      {/* Central Basalt Obelisk */}
      <MonolithMesh />

      {/* Instanced Snow Blizzard Particles */}
      <SnowBlizzardParticles />
    </group>
  );
};
