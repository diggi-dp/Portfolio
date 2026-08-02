'use client';

import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { ThermalEmbersParticles } from '../particles/ThermalEmbersParticles';
import { useWebAudio } from '@/hooks/useWebAudio';

export const ForgeScene: React.FC = () => {
  const [isTamed, setIsTamed] = useState(false);
  const [isGateDissolved, setIsGateDissolved] = useState(false);
  const [isPrismCached, setIsPrismCached] = useState(false);

  const { triggerClickSound, triggerSkillArpeggio, triggerChimeSound } =
    useWebAudio();

  const blocksGroupRef = useRef<THREE.Group>(null);
  const gateRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (blocksGroupRef.current && !isTamed) {
      blocksGroupRef.current.children.forEach((child, idx) => {
        child.position.y += Math.sin(t * 3 + idx) * 0.02;
        child.rotation.x += 0.01;
      });
    }
  });

  const handleTameClick = () => {
    triggerClickSound();
    triggerSkillArpeggio();
    setIsTamed(true);
  };

  const handleGateHover = () => {
    if (!isGateDissolved) {
      triggerChimeSound();
      setIsGateDissolved(true);
    }
  };

  const handlePrismClick = () => {
    triggerClickSound();
    setIsPrismCached(true);
  };

  return (
    <group position={[0, -14, 0]}>
      {/* Cavern Ambient & Point Lighting */}
      <ambientLight intensity={0.25} />
      <pointLight
        position={[0, 5, 0]}
        intensity={isTamed ? 4.0 : 2.0}
        color={isTamed ? '#4ef2d2' : '#ff2200'}
        distance={30}
      />

      {/* Thermal Embers Particles */}
      <ThermalEmbersParticles />

      {/* Interaction 1: Taming Chaos Unstable Stone Blocks */}
      <group ref={blocksGroupRef} onClick={handleTameClick}>
        {[...Array(12)].map((_, i) => (
          <mesh
            key={i}
            position={[
              isTamed ? (i - 6) * 1.5 : Math.sin(i) * 8,
              isTamed ? 0 : Math.cos(i) * 4,
              isTamed ? -2 : Math.sin(i * 2) * 4,
            ]}
          >
            <boxGeometry args={[1.2, 1.2, 1.2]} />
            <meshStandardMaterial
              color={isTamed ? '#4ef2d2' : '#ff3322'}
              roughness={0.3}
              metalness={0.8}
            />
          </mesh>
        ))}
      </group>

      {/* Interaction 2: Frictionless Passage Basalt Gate */}
      <mesh ref={gateRef} position={[0, -6, 5]} onPointerOver={handleGateHover}>
        <boxGeometry args={[14, 8, 1]} />
        <meshStandardMaterial
          color="#1e2638"
          wireframe={isGateDissolved}
          transparent
          opacity={isGateDissolved ? 0.25 : 0.95}
        />
      </mesh>

      {/* Interaction 3: Optical Caching Prism */}
      <mesh position={[6, -2, 0]} onClick={handlePrismClick}>
        <octahedronGeometry args={[1.5, 0]} />
        <meshStandardMaterial
          color={isPrismCached ? '#3df6ff' : '#dfa84a'}
          emissive={isPrismCached ? '#3df6ff' : '#dfa84a'}
          emissiveIntensity={isPrismCached ? 3.0 : 1.0}
        />
      </mesh>
    </group>
  );
};
