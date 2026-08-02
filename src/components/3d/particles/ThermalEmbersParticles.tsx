'use client';

import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const ThermalEmbersParticles: React.FC = () => {
  const count = 3000;
  const meshRef = useRef<THREE.InstancedMesh>(null);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 40;
      const y = Math.random() * 30 - 25;
      const z = (Math.random() - 0.5) * 40;
      const speed = Math.random() * 0.04 + 0.01;
      temp.push({ x, y, z, speed, initialY: y });
    }
    return temp;
  }, [count]);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame(() => {
    if (!meshRef.current) return;

    particles.forEach((particle, i) => {
      particle.y += particle.speed;
      particle.x += Math.sin(particle.y * 0.2) * 0.01;

      if (particle.y > 0) {
        particle.y = -25;
      }

      dummy.position.set(particle.x, particle.y, particle.z);
      dummy.scale.setScalar(Math.random() * 0.06 + 0.03);
      dummy.updateMatrix();

      meshRef.current?.setMatrixAt(i, dummy.matrix);
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[0.15, 8, 8]} />
      <meshBasicMaterial color="#e2a84b" transparent opacity={0.85} />
    </instancedMesh>
  );
};
