'use client';

import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { webglConfig } from '@/lib/config/webgl.config';

export const SnowBlizzardParticles: React.FC = () => {
  const count = webglConfig.performance.heavyParticleCount;
  const meshRef = useRef<THREE.InstancedMesh>(null);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 60;
      const y = Math.random() * 40 - 10;
      const z = (Math.random() - 0.5) * 60;
      const speed = Math.random() * 0.05 + 0.02;
      temp.push({ x, y, z, speed, initialY: y });
    }
    return temp;
  }, [count]);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame(() => {
    if (!meshRef.current) return;

    particles.forEach((particle, i) => {
      particle.y -= particle.speed;
      particle.x += Math.sin(particle.y * 0.1) * 0.01;

      if (particle.y < -10) {
        particle.y = 30;
      }

      dummy.position.set(particle.x, particle.y, particle.z);
      dummy.scale.setScalar(Math.random() * 0.08 + 0.04);
      dummy.updateMatrix();

      meshRef.current?.setMatrixAt(i, dummy.matrix);
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <dodecahedronGeometry args={[0.2, 0]} />
      <meshBasicMaterial color="#d4e8f0" transparent opacity={0.75} />
    </instancedMesh>
  );
};
