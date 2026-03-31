'use client';

import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { resumeData } from '@/lib/resume-data';

export default function Experience() {
  return (
    <SectionWrapper id="experience" className="relative z-10 py-12 px-6 max-w-3xl mx-auto">
      <div className="mb-12 relative">
        {/* Title glow */}
        <div className="absolute -left-4 top-0 w-20 h-20 bg-[#22d3ee]/10 rounded-full blur-xl" />
        <div className="flex items-center gap-3 mb-2">
          <span className="text-lg tracking-[0.3em] text-[#22d3ee] uppercase font-mono">
            03
          </span>
          <div className="h-px w-12 bg-[#22d3ee]/30" />
        </div>
        <h2 className="text-4xl font-bold tracking-widest text-[#f1f5f9] font-['Syne']">
          Experience
        </h2>
      </div>

      <div className="relative ml-4 pl-8">
        {/* Timeline line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[#22d3ee]/50 via-[#22d3ee]/30 to-[#f59e0b]/30" />

        {resumeData.experience.map((exp, index) => (
          <motion.div
            key={index}
            className="relative mb-12 last:mb-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
          >
            {/* Timeline node with pulse */}
            <div className="absolute -left-[37px] top-0 timeline-node" />

            {/* Card */}
            <div className="glass-card p-6 rounded-xl ml-4">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-[#f1f5f9] font-['Syne'] group-hover:text-[#22d3ee] transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-[#22d3ee] text-sm mt-1">{exp.company}</p>
                </div>
                <span className="text-xs px-3 py-1 rounded-full bg-[#22d3ee]/10 border border-[#22d3ee]/30 text-[#22d3ee] font-mono self-start">
                  {exp.yearRange}
                </span>
              </div>

              {/* Bullets */}
              {exp.bullets && exp.bullets.length > 0 && (
                <ul className="space-y-3">
                  {exp.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-sm text-[#94a3b8] leading-relaxed"
                    >
                      <span className="text-[#22d3ee] mt-1.5">▹</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Connector line to next */}
            {index < resumeData.experience.length - 1 && (
              <div className="absolute left-0 top-full w-px h-8 -ml-px bg-gradient-to-b from-[#22d3ee]/30 to-transparent" />
            )}
          </motion.div>
        ))}
      </div>

      {/* Decorative bottom line */}
      <div className="mt-12 h-px bg-gradient-to-r from-transparent via-[#22d3ee]/30 to-transparent" />
    </SectionWrapper>
  );
}
