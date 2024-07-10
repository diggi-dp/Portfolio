'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Skills } from '@/lib/data';

const BlockRenderer = ({ Skills }: { Skills: Skills[] }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      className="mb-4 flex flex-wrap justify-center gap-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 1 }}
    >
      {Skills.map((skill, index) => (
        <motion.div
          key={index}
          className="inline-flex h-12 items-center justify-center rounded-md border border-slate-800 bg-gradient-to-r from-slate-900 to-slate-700 bg-[length:200%_100%] p-4 px-6 font-medium text-slate-400 opacity-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 1, delay: index * 0.12 }}
        >
          {skill.icon}
          <span className="ml-2 text-lg">{skill.name}</span>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default BlockRenderer;
