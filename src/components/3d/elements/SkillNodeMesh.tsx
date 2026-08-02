'use client';

import React from 'react';
import { skillsData, SkillNodeData } from '@/lib/cms/skillsData';
import { useWebAudio } from '@/hooks/useWebAudio';

interface SkillNodeMeshProps {
  onHoverSkill: (skill: SkillNodeData | null) => void;
}

export const SkillNodeMesh: React.FC<SkillNodeMeshProps> = ({
  onHoverSkill,
}) => {
  const { triggerSkillArpeggio } = useWebAudio();

  const handlePointerOver = (skill: SkillNodeData) => {
    triggerSkillArpeggio();
    onHoverSkill(skill);
  };

  const handlePointerOut = () => {
    onHoverSkill(null);
  };

  return (
    <group>
      {/* 3D Glowing Skill Nodes */}
      {skillsData.map((skill) => (
        <mesh
          key={skill.id}
          position={skill.position}
          onPointerOver={() => handlePointerOver(skill)}
          onPointerOut={handlePointerOut}
        >
          <sphereGeometry args={[0.4, 16, 16]} />
          <meshStandardMaterial
            color="#4ef2d2"
            emissive="#4ef2d2"
            emissiveIntensity={2.5}
          />
        </mesh>
      ))}
    </group>
  );
};
