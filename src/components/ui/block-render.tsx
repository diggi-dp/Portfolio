'use client';
import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Skills } from '@/lib/data';

const BlockRenderer = ({ Skills }: { Skills: Skills[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, { once: true });
  return (
    <div
      ref={ref}
      className="mb-4 flex flex-wrap justify-center gap-3"
      style={{
        opacity: isInView ? 1 : 0,
        transition: 'opacity 1s ease-in-out',
      }}
    >
      {Skills.map((skill, index) => (
        <div
          key={index}
          className="inline-flex h-12 items-center justify-center rounded-md border border-slate-800 bg-gradient-to-r from-slate-900 to-slate-700 bg-[length:200%_100%] p-4 px-6 font-medium text-slate-400"
          style={{
            opacity: isInView ? 1 : 0,
            transition: `opacity 1s ease-in-out ${index * 0.12}s`,
          }}
        >
          {skill.icon}
          <span className="ml-2 text-lg">{skill.name}</span>
        </div>
      ))}
    </div>
  );
};

export default BlockRenderer;
