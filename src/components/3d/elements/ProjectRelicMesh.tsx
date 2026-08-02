'use client';

import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useWebAudio } from '@/hooks/useWebAudio';

interface ProjectRelicMeshProps {
  position: [number, number, number];
  geometryType: 'icosahedron' | 'cube' | 'octahedron' | 'dodecahedron';
  color: string;
  title: string;
  onClick?: () => void;
}

export const ProjectRelicMesh: React.FC<ProjectRelicMeshProps> = ({
  position,
  geometryType,
  color,
  onClick,
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const { triggerChimeSound } = useWebAudio();

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();

    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.4;
      meshRef.current.rotation.y += delta * 0.6;
      meshRef.current.position.y =
        position[1] + Math.sin(t * 1.5 + position[0]) * 0.35;
    }

    if (glowRef.current) {
      glowRef.current.rotation.y -= delta * 0.5;
      glowRef.current.position.y =
        position[1] + Math.sin(t * 1.5 + position[0]) * 0.35;
    }
  });

  const renderGeometry = () => {
    switch (geometryType) {
      case 'icosahedron':
        return <icosahedronGeometry args={[1.5, 0]} />;
      case 'cube':
        return <boxGeometry args={[2.2, 2.2, 2.2]} />;
      case 'octahedron':
        return <octahedronGeometry args={[1.8, 0]} />;
      case 'dodecahedron':
        return <dodecahedronGeometry args={[1.6, 0]} />;
      default:
        return <icosahedronGeometry args={[1.5, 0]} />;
    }
  };

  const handlePointerOver = (e: any) => {
    e.stopPropagation();
    setHovered(true);
    triggerChimeSound();
  };

  const handlePointerOut = () => {
    setHovered(false);
  };

  const handleClick = (e: any) => {
    e.stopPropagation();
    if (onClick) onClick();
  };

  return (
    <group>
      {/* Internal Point Light Source for Vibrant Glow */}
      <pointLight
        position={[position[0], position[1] + 1, position[2]]}
        color={color}
        intensity={hovered ? 6.0 : 3.0}
        distance={15}
      />

      {/* Main Glass Metallic Relic Mesh */}
      <mesh
        ref={meshRef}
        position={position}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={handleClick}
        scale={hovered ? 1.25 : 1.0}
      >
        {renderGeometry()}
        <meshPhysicalMaterial
          color={color}
          emissive={color}
          emissiveIntensity={hovered ? 1.0 : 0.4}
          roughness={0.1}
          metalness={0.8}
          clearcoat={1.0}
          clearcoatRoughness={0.05}
          transmission={0.3}
          reflectivity={1.0}
        />
      </mesh>

      {/* Outer Holographic Energy Shell */}
      <mesh ref={glowRef} position={position} scale={hovered ? 1.45 : 1.2}>
        {renderGeometry()}
        <meshBasicMaterial
          color={color}
          wireframe
          transparent
          opacity={hovered ? 0.8 : 0.35}
        />
      </mesh>
    </group>
  );
};
