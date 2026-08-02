'use client';

import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { projectsData, ProjectWorldData } from '@/lib/cms/projectsData';
import { ProjectRelicMesh } from '../elements/ProjectRelicMesh';

interface RelicsSceneProps {
  onSelectProject?: (project: ProjectWorldData) => void;
}

export const RelicsScene: React.FC<RelicsSceneProps> = ({
  onSelectProject,
}) => {
  const blackHoleRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (blackHoleRef.current) {
      blackHoleRef.current.rotation.z += delta * 0.2;
    }
  });

  // Calculate dynamic positions around the central anomaly for any number of projects
  const positions = useMemo(() => {
    const count = projectsData.length;
    const radiusX = 7.5;
    const radiusY = 4.5;
    return projectsData.map((_, idx) => {
      const angle = (idx / count) * Math.PI * 2 - Math.PI / 4;
      const x = Math.cos(angle) * radiusX;
      const y = Math.sin(angle) * radiusY;
      return [x, y, 0] as [number, number, number];
    });
  }, []);

  return (
    <group position={[0, -30, 0]}>
      {/* Central Interstellar Black Hole Anomaly */}
      <mesh ref={blackHoleRef} position={[0, 0, -5]}>
        <ringGeometry args={[2, 6, 64]} />
        <meshBasicMaterial
          color="#06b6d4"
          side={THREE.DoubleSide}
          transparent
          opacity={0.5}
        />
      </mesh>

      <mesh position={[0, 0, -5]}>
        <sphereGeometry args={[1.8, 32, 32]} />
        <meshBasicMaterial color="#020617" />
      </mesh>

      {/* Ambient Lighting */}
      <ambientLight intensity={0.6} />
      <pointLight position={[0, 0, 10]} intensity={4.0} color="#38bdf8" />

      {/* Dynamic Project Relic Artifacts */}
      {projectsData.map((project, idx) => (
        <ProjectRelicMesh
          key={project.id}
          position={positions[idx] || [0, 0, 0]}
          geometryType={project.relicGeometry}
          color={project.color}
          title={project.title}
          onClick={() => onSelectProject && onSelectProject(project)}
        />
      ))}
    </group>
  );
};
