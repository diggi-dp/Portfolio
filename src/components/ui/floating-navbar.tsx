'use client';
import React, { useState } from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from 'framer-motion';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, 'change', (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === 'number') {
      const direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          'fixed inset-x-0 top-10 z-[5000] mx-auto flex max-w-fit items-center justify-center space-x-4 rounded-full border border-slate-800 border-transparent bg-transparent bg-gradient-to-r from-slate-900/70 to-slate-700/70 bg-[length:200%_100%] px-8 py-4 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]',
          className,
        )}
      >
        {navItems.map(
          (
            navItem: { name: string; link: string; icon?: JSX.Element },
            idx: number,
          ) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                'text-neutral-50hover:text-neutral-300 relative flex items-center space-x-1',
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden text-sm sm:block md:text-lg">
                {navItem.name}
              </span>
            </Link>
          ),
        )}
      </motion.div>
    </AnimatePresence>
  );
};
