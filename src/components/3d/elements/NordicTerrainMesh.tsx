'use client';

import React, { useMemo } from 'react';
import * as THREE from 'three';
import {
  terrainVertexShader,
  terrainFragmentShader,
} from '../shaders/terrainShader.glsl';

export const NordicTerrainMesh: React.FC = () => {
  const shaderArgs = useMemo(
    () => ({
      vertexShader: terrainVertexShader,
      fragmentShader: terrainFragmentShader,
      side: THREE.DoubleSide,
    }),
    []
  );

  return (
    <mesh position={[0, -2, -10]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[120, 120, 64, 64]} />
      <shaderMaterial attach="material" {...shaderArgs} />
    </mesh>
  );
};
