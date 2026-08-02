'use client';

import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useWebAudio } from '@/hooks/useWebAudio';

export const MonolithMesh: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const innerCoreRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const pointLightRef = useRef<THREE.PointLight>(null);

  const [hovered, setHovered] = useState(false);
  const { triggerChimeSound } = useWebAudio();

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();

    // Slow majestic rotation
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.15;
    }

    // Inner core pulsing
    if (innerCoreRef.current) {
      const pulse = Math.sin(t * 2) * 0.15 + 1.0;
      innerCoreRef.current.scale.set(pulse, pulse, pulse);
    }

    // Orbital ring rotations
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = t * 0.4;
      ring1Ref.current.rotation.y = t * 0.2;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z = t * 0.3;
      ring2Ref.current.rotation.x = -t * 0.25;
    }

    // Light intensity hover modulation
    if (pointLightRef.current) {
      pointLightRef.current.intensity = THREE.MathUtils.lerp(
        pointLightRef.current.intensity,
        hovered ? 8.0 : 4.0,
        0.1
      );
    }
  });

  const handlePointerOver = () => {
    setHovered(true);
    triggerChimeSound();
  };

  const handlePointerOut = () => {
    setHovered(false);
  };

  return (
    <group position={[0, 3, 0]}>
      {/* Dynamic Vibrant Point Light */}
      <pointLight
        ref={pointLightRef}
        color={hovered ? '#00f0ff' : '#ffb700'}
        intensity={4}
        distance={25}
        decay={2}
      />

      {/* Main Crystal Obelisk Body */}
      <mesh
        ref={meshRef}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        castShadow
        receiveShadow
      >
        <cylinderGeometry args={[0.8, 1.6, 7.5, 6]} />
        <meshPhysicalMaterial
          color={hovered ? '#06b6d4' : '#d97706'}
          emissive={hovered ? '#0891b2' : '#b45309'}
          emissiveIntensity={hovered ? 1.2 : 0.6}
          roughness={0.15}
          metalness={0.85}
          clearcoat={1.0}
          clearcoatRoughness={0.1}
          reflectivity={1.0}
        />
      </mesh>

      {/* Glowing Inner Core Energy Prism */}
      <mesh ref={innerCoreRef} position={[0, 0, 0]}>
        <octahedronGeometry args={[1.2, 0]} />
        <meshBasicMaterial
          color={hovered ? '#38bdf8' : '#fbbf24'}
          wireframe
          transparent
          opacity={0.8}
        />
      </mesh>

      {/* Floating Metallic Orbital Ring 1 */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[3.2, 0.06, 16, 100]} />
        <meshStandardMaterial
          color="#fbbf24"
          metalness={0.9}
          roughness={0.1}
          emissive="#d97706"
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* Floating Metallic Orbital Ring 2 */}
      <mesh ref={ring2Ref}>
        <torusGeometry args={[4.0, 0.04, 16, 100]} />
        <meshStandardMaterial
          color="#38bdf8"
          metalness={0.95}
          roughness={0.1}
          emissive="#0284c7"
          emissiveIntensity={0.6}
        />
      </mesh>
    </group>
  );
};
