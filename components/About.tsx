'use client';

import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { resumeData } from '@/lib/resume-data';

export default function About() {
  return (
    <SectionWrapper id="about" className="relative z-10 py-12 px-6 max-w-3xl mx-auto">
      <div className="mb-8 relative">
        {/* Title glow */}
        <div className="absolute -left-4 top-0 w-20 h-20 bg-[#22d3ee]/10 rounded-full blur-xl" />
        <div className="flex items-center gap-3 mb-2">
          <span className="text-lg tracking-[0.3em] text-[#22d3ee] uppercase font-mono">
            01
          </span>
          <div className="h-px w-12 bg-[#22d3ee]/30" />
        </div>
        <h2 className="text-4xl font-bold tracking-widest text-[#f1f5f9] font-['Syne']">
          About
        </h2>
      </div>

      <motion.p
        className="text-lg leading-relaxed text-[#94a3b8] font-light"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {resumeData.about}
      </motion.p>

      {/* Decorative bottom line */}
      <div className="mt-8 h-px bg-gradient-to-r from-transparent via-[#22d3ee]/30 to-transparent" />
    </SectionWrapper>
  );
}
