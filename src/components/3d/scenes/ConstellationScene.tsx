'use client';

import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import {
  auroraVertexShader,
  auroraFragmentShader,
} from '../shaders/auroraShader.glsl';
import { SkillNodeMesh } from '../elements/SkillNodeMesh';
import { SkillNodeData } from '@/lib/cms/skillsData';

interface ConstellationSceneProps {
  onHoverSkill?: (skill: SkillNodeData | null) => void;
}

export const ConstellationScene: React.FC<ConstellationSceneProps> = ({
  onHoverSkill,
}) => {
  const auroraRef = useRef<THREE.ShaderMaterial>(null);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
    }),
    []
  );

  useFrame((_, delta) => {
    if (auroraRef.current) {
      auroraRef.current.uniforms.uTime.value += delta;
    }
  });

  return (
    <group position={[0, -45, 0]}>
      {/* Refined Deep Obsidian Floor */}
      <mesh position={[0, -8, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial
          color="#030712"
          roughness={0.15}
          metalness={0.8}
        />
      </mesh>

      {/* Volumetric Aurora Sky Curtain */}
      <mesh position={[0, 10, -20]}>
        <planeGeometry args={[100, 30]} />
        <shaderMaterial
          ref={auroraRef}
          vertexShader={auroraVertexShader}
          fragmentShader={auroraFragmentShader}
          uniforms={uniforms}
          transparent
          opacity={0.3}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Muted Ambient Lighting */}
      <ambientLight intensity={0.5} />
      <pointLight position={[0, 5, 5]} intensity={1.2} color="#38bdf8" />

      {/* 3D Skill Star Nodes */}
      <SkillNodeMesh onHoverSkill={(s) => onHoverSkill && onHoverSkill(s)} />
    </group>
  );
};
