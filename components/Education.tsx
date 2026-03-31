'use client';

import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { resumeData } from '@/lib/resume-data';

export default function Education() {
  return (
    <SectionWrapper id="education" className="relative z-10 py-12 px-6 max-w-3xl mx-auto">
      <div className="mb-8 relative">
        {/* Title glow */}
        <div className="absolute -left-4 top-0 w-20 h-20 bg-[#22d3ee]/10 rounded-full blur-xl" />
        <div className="flex items-center gap-3 mb-2">
          <span className="text-lg tracking-[0.3em] text-[#22d3ee] uppercase font-mono">
            02
          </span>
          <div className="h-px w-12 bg-[#22d3ee]/30" />
        </div>
        <h2 className="text-4xl font-bold tracking-widest text-[#f1f5f9] font-['Syne']">
          Education
        </h2>
      </div>

      <div className="relative ml-4 pl-8">
        {/* Timeline line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[#22d3ee]/50 via-[#22d3ee]/30 to-transparent" />

        {resumeData.education.map((edu, index) => (
          <motion.div
            key={index}
            className="relative mb-10 last:mb-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
          >
            {/* Timeline node */}
            <div className="absolute -left-[37px] top-0 timeline-node" />

            {/* Card */}
            <div className="glass-card p-6 rounded-xl ml-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-[#f1f5f9] font-['Syne']">
                    {edu.degree}
                  </h3>
                  <p className="text-[#94a3b8] mt-1">{edu.institution}</p>
                </div>
                <span className="text-xs px-3 py-1 rounded-full bg-[#22d3ee]/10 border border-[#22d3ee]/30 text-[#22d3ee] font-mono self-start">
                  {edu.year}
                </span>
              </div>

              {edu.description && (
                <p className="text-sm text-[#64748b] mt-3 leading-relaxed">
                  {edu.description}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Decorative bottom line */}
      <div className="mt-8 h-px bg-gradient-to-r from-transparent via-[#22d3ee]/30 to-transparent" />
    </SectionWrapper>
  );
}
