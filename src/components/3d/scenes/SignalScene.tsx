'use client';

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { GerstnerOceanMesh } from '../elements/GerstnerOceanMesh';

export const SignalScene: React.FC = () => {
  const beaconRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (beaconRef.current) {
      beaconRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <group position={[0, -64, 0]}>
      {/* Ancient Coastal Basalt Deck */}
      <mesh position={[0, -5, 0]}>
        <boxGeometry args={[20, 2, 20]} />
        <meshStandardMaterial color="#0f172a" roughness={0.8} />
      </mesh>

      {/* Soothing Indigo Signal Beacon Beam */}
      <mesh ref={beaconRef} position={[0, 15, 0]}>
        <cylinderGeometry args={[0.5, 3.0, 40, 32, 1, true]} />
        <meshBasicMaterial
          color="#6366f1"
          transparent
          opacity={0.25}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Stormy Gerstner Wave Ocean */}
      <GerstnerOceanMesh />

      {/* Calm Ocean Lighting */}
      <ambientLight intensity={0.4} />
      <pointLight
        position={[0, 10, 0]}
        intensity={1.5}
        color="#818cf8"
        distance={40}
      />
    </group>
  );
};
