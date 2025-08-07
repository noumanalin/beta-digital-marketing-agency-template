// components/TypingText.js
import React from 'react';
import { motion } from 'framer-motion';

const letterVariant = {
  hidden: { opacity: 0, x: -10 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.05,
    },
  }),
};

const TypingText = ({ text, className }) => {
  const letters = text.split('');

  return (
    <motion.span
      className={className}
      style={{ display: 'inline-block' }}
    >
      {letters.map((char, i) => (
        <motion.span
          key={i}
          variants={letterVariant}
          initial="hidden"
          animate="visible"
          custom={i}
          style={{ display: 'inline-block' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default TypingText;
