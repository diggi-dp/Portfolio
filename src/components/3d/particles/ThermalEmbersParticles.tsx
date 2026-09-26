'use client';

import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const EMBER_COUNT = 120;

export const ThermalEmbersParticles: React.FC = () => {
  const meshRef = useRef<THREE.InstancedMesh>(null);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < EMBER_COUNT; i++) {
      const x = (Math.random() - 0.5) * 35;
      const y = Math.random() * 25 - 25;
      const z = (Math.random() - 0.5) * 35;
      const speed = Math.random() * 0.04 + 0.015;
      const scale = Math.random() * 0.07 + 0.03;
      const swayOffset = Math.random() * Math.PI * 2;
      temp.push({ x, y, z, speed, scale, swayOffset });
    }
    return temp;
  }, []);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame(() => {
    if (!meshRef.current) return;

    for (let i = 0; i < EMBER_COUNT; i++) {
      const p = particles[i];
      p.y += p.speed;
      if (p.y > 2) {
        p.y = -25;
      }

      const swayX = p.x + Math.sin(p.y * 0.2 + p.swayOffset) * 0.25;
      dummy.position.set(swayX, p.y, p.z);
      dummy.scale.setScalar(p.scale);
      dummy.updateMatrix();

      meshRef.current.setMatrixAt(i, dummy.matrix);
    }

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, EMBER_COUNT]}>
      <sphereGeometry args={[0.15, 6, 6]} />
      <meshBasicMaterial color="#e2a84b" transparent opacity={0.85} />
    </instancedMesh>
  );
};
