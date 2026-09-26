'use client';

import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const PARTICLE_COUNT = 160;

export const SnowBlizzardParticles: React.FC = () => {
  const meshRef = useRef<THREE.InstancedMesh>(null);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const x = (Math.random() - 0.5) * 50;
      const y = Math.random() * 40 - 10;
      const z = (Math.random() - 0.5) * 50;
      const speed = Math.random() * 0.05 + 0.02;
      const scale = Math.random() * 0.08 + 0.04;
      const swayOffset = Math.random() * Math.PI * 2;
      temp.push({ x, y, z, speed, scale, swayOffset });
    }
    return temp;
  }, []);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame(() => {
    if (!meshRef.current) return;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const p = particles[i];
      p.y -= p.speed;
      if (p.y < -10) {
        p.y = 30;
      }

      const swayX = p.x + Math.sin(p.y * 0.15 + p.swayOffset) * 0.3;
      dummy.position.set(swayX, p.y, p.z);
      dummy.scale.setScalar(p.scale);
      dummy.updateMatrix();

      meshRef.current.setMatrixAt(i, dummy.matrix);
    }

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, PARTICLE_COUNT]}>
      <dodecahedronGeometry args={[0.2, 0]} />
      <meshBasicMaterial color="#d4e8f0" transparent opacity={0.75} />
    </instancedMesh>
  );
};
