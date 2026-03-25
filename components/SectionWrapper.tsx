'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function SectionWrapper({ children, className = '', id }: SectionWrapperProps) {
  return (
    <motion.div
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
