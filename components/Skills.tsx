'use client';

import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { resumeData } from '@/lib/resume-data';

const categoryConfig: Record<string, { color: string; gradient: string; glow: string }> = {
  'AI/LLM': {
    color: '#22d3ee',
    gradient: 'from-[#22d3ee]/20 to-[#0891b2]/5',
    glow: 'rgba(34, 211, 238, 0.4)'
  },
  'Programming': {
    color: '#a78bfa',
    gradient: 'from-[#a78bfa]/20 to-[#7c3aed]/5',
    glow: 'rgba(167, 139, 250, 0.4)'
  },
  'Database': {
    color: '#34d399',
    gradient: 'from-[#34d399]/20 to-[#059669]/5',
    glow: 'rgba(52, 211, 153, 0.4)'
  },
  'Big Data': {
    color: '#fbbf24',
    gradient: 'from-[#fbbf24]/20 to-[#d97706]/5',
    glow: 'rgba(251, 191, 36, 0.4)'
  },
  'Tools': {
    color: '#f472b6',
    gradient: 'from-[#f472b6]/20 to-[#db2777]/5',
    glow: 'rgba(244, 114, 182, 0.4)'
  },
};

// Skill proficiency levels (mapped by category index)
const proficiencyLevels: Record<string, number> = {
  'AI/LLM': 95,
  'Programming': 90,
  'Database': 85,
  'Big Data': 88,
  'Tools': 80,
};

export default function Skills() {
  const categories = Array.from(new Set(resumeData.skills.map((s) => s.category)));
  const proficiency = proficiencyLevels;

  return (
    <SectionWrapper id="skills" className="relative z-10 py-12 px-6 max-w-4xl mx-auto">
      <div className="mb-12 relative">
        {/* Title glow */}
        <div className="absolute -left-4 top-0 w-20 h-20 bg-[#22d3ee]/10 rounded-full blur-xl" />
        <div className="flex items-center gap-3 mb-2">
          <span className="text-lg tracking-[0.3em] text-[#22d3ee] uppercase font-mono">
            05
          </span>
          <div className="h-px w-12 bg-[#22d3ee]/30" />
        </div>
        <h2 className="text-4xl font-bold tracking-widest text-[#f1f5f9] font-['Syne']">
          Tech Stack
        </h2>
      </div>

      <div className="space-y-8">
        {categories.map((category, catIndex) => {
          const skills = resumeData.skills.filter((s) => s.category === category);
          if (skills.length === 0) return null;

          const config = categoryConfig[category] || categoryConfig['Tools'];
          const level = proficiency[category] || 75;

          return (
            <motion.div
              key={category}
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: catIndex * 0.15, duration: 0.6 }}
            >
              {/* Category header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{
                      background: config.color,
                      boxShadow: `0 0 15px ${config.glow}`
                    }}
                  />
                  <h3 className="text-sm uppercase tracking-[0.2em] text-[#94a3b8] font-mono">
                    {category}
                  </h3>
                </div>

                {/* Proficiency bar */}
                <div className="flex items-center gap-3">
                  <div className="w-32 h-1.5 bg-[#111827] rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: config.color }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${level}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: catIndex * 0.15 + 0.3, duration: 1, ease: 'easeOut' }}
                    />
                  </div>
                  <span className="text-xs text-[#64748b] font-mono w-8">{level}%</span>
                </div>
              </div>

              {/* Skills grid */}
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill.name}
                    className="skill-tag text-sm px-4 py-2 rounded-lg border bg-gradient-to-br border-[#1e293b] text-[#f1f5f9] hover:border-[#22d3ee]/50 transition-all duration-300 cursor-default"
                    style={{
                      borderColor: 'rgba(30, 41, 59, 0.8)',
                      background: `linear-gradient(135deg, rgba(17, 24, 39, 0.9), rgba(30, 41, 59, 0.5))`,
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIndex * 0.1 + skillIndex * 0.05 }}
                    whileHover={{
                      scale: 1.05,
                      borderColor: config.color,
                      boxShadow: `0 0 25px ${config.glow}`
                    }}
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>

              {/* Separator line */}
              {catIndex < categories.length - 1 && (
                <div className="mt-8 h-px bg-gradient-to-r from-transparent via-[#1e293b] to-transparent" />
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Decorative bottom line */}
      <div className="mt-12 h-px bg-gradient-to-r from-transparent via-[#22d3ee]/30 to-transparent" />
    </SectionWrapper>
  );
}
