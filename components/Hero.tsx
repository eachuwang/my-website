'use client';

import { motion } from 'framer-motion';
import { resumeData } from '@/lib/resume-data';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6">
      <motion.h1
        className="text-5xl md:text-7xl font-extralight tracking-widest text-[#e0f4ff] mb-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {resumeData.name}
      </motion.h1>

      <motion.p
        className="text-xl md:text-2xl text-[#4cc9f0] tracking-widest mb-6 font-light"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {resumeData.title}
      </motion.p>

      <motion.p
        className="text-lg text-[#778da9] max-w-xl font-light"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        {resumeData.tagline}
      </motion.p>

      <motion.div
        className="absolute bottom-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1.2, duration: 0.5 },
          y: { delay: 1.2, duration: 1.5, repeat: Infinity, ease: 'easeInOut' },
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#4cc9f0"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </motion.div>
    </section>
  );
}
