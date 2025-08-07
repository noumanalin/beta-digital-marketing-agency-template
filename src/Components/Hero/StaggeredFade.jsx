'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
// import { cn } from '@/lib/utils'; // Optional: if you're not using this, safely remove

export const StaggeredFade = ({ text, className = '' }) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    show: (i) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.07 },
    }),
  };

  const { ref, inView: isInView } = useInView({ triggerOnce: true });
  const letters = text.split('');

  return (
    <motion.h2
      ref={ref}
      initial="hidden"
      animate={isInView ? 'show' : 'hidden'}
      variants={variants}
      className={className} // Use your own Tailwind/Custom className here
    >
      {letters.map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          variants={variants}
          custom={i}
          className="inline-block"
        >
          {char}
        </motion.span>
      ))}
    </motion.h2>
  );
};
