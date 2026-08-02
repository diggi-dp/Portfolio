'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useScrollTimeline } from '@/hooks/useScrollTimeline';
import { usePointerVector } from '@/hooks/usePointerVector';
import { useAdaptivePerformance } from '@/hooks/useAdaptivePerformance';
import { PostProcessingPipeline } from '../postprocessing/PostProcessingPipeline';
import { PrologueScene } from '../scenes/PrologueScene';
import { ForgeScene } from '../scenes/ForgeScene';
import { RelicsScene } from '../scenes/RelicsScene';
import { ConstellationScene } from '../scenes/ConstellationScene';
import { SignalScene } from '../scenes/SignalScene';
import * as THREE from 'three';

const CameraRig: React.FC = () => {
  const { interpolatedCameraPosition, interpolatedCameraTarget } =
    useScrollTimeline();
  const pointer = usePointerVector();
  const targetVec = useRef(new THREE.Vector3());

  useFrame(({ camera }) => {
    // Parallax mouse offset dampening
    const parallaxX = pointer.x * 0.4;
    const parallaxY = pointer.y * 0.3;

    camera.position.x = THREE.MathUtils.lerp(
      camera.position.x,
      interpolatedCameraPosition[0] + parallaxX,
      0.08
    );
    camera.position.y = THREE.MathUtils.lerp(
      camera.position.y,
      interpolatedCameraPosition[1] + parallaxY,
      0.08
    );
    camera.position.z = THREE.MathUtils.lerp(
      camera.position.z,
      interpolatedCameraPosition[2],
      0.08
    );

    targetVec.current.set(
      interpolatedCameraTarget[0],
      interpolatedCameraTarget[1],
      interpolatedCameraTarget[2]
    );
    camera.lookAt(targetVec.current);
  });

  return null;
};

export const WorldCanvas: React.FC = () => {
  const { dpr } = useAdaptivePerformance();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="fixed inset-0 z-0 w-full h-full bg-[#05070a]" />;
  }

  return (
    <div className="fixed inset-0 z-0 w-full h-full pointer-events-auto">
      <Canvas
        camera={{ position: [0, 4, 18], fov: 45, near: 0.1, far: 500 }}
        dpr={dpr}
        gl={{
          antialias: true,
          powerPreference: 'high-performance',
          alpha: false,
        }}
      >
        <color attach="background" args={['#05070a']} />

        {/* Dynamic Smooth Camera Rig */}
        <CameraRig />

        {/* Cinematic Chapter 3D Scenes */}
        <PrologueScene />
        <ForgeScene />
        <RelicsScene />
        <ConstellationScene />
        <SignalScene />

        {/* Postprocessing Shader Effects */}
        <PostProcessingPipeline />
      </Canvas>
    </div>
  );
};
