'use client';

import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { resumeData } from '@/lib/resume-data';

export default function Projects() {
  return (
    <SectionWrapper id="projects" className="relative z-10 py-12 px-6 max-w-5xl mx-auto">
      <div className="mb-12 relative">
        {/* Title glow */}
        <div className="absolute -left-4 top-0 w-20 h-20 bg-[#22d3ee]/10 rounded-full blur-xl" />
        <div className="flex items-center gap-3 mb-2">
          <span className="text-lg tracking-[0.3em] text-[#22d3ee] uppercase font-mono">
            04
          </span>
          <div className="h-px w-12 bg-[#22d3ee]/30" />
        </div>
        <h2 className="text-4xl font-bold tracking-widest text-[#f1f5f9] font-['Syne']">
          Featured Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {resumeData.projects.map((project, index) => (
          <motion.div
            key={index}
            className="group relative glass-card holo-border p-6 transition-all duration-500 cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{
              y: -8,
              transition: { duration: 0.3 }
            }}
          >
            {/* Project number */}
            <div className="absolute top-4 right-4 text-6xl font-bold text-[#22d3ee]/5 font-['Syne']">
              {String(index + 1).padStart(2, '0')}
            </div>

            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-[#f1f5f9] mb-3 font-['Syne'] group-hover:text-[#22d3ee] transition-colors duration-300">
                {project.title}
              </h3>

              <p className="text-[#94a3b8] text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techTags.map((tag) => (
                  <span
                    key={tag}
                    className="skill-tag text-xs px-3 py-1 rounded-full bg-[#111827]/80 border border-[#22d3ee]/20 text-[#22d3ee]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-6">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#94a3b8] hover:text-[#22d3ee] transition-colors duration-300 link-glow"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                    <span className="text-sm">Source</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#94a3b8] hover:text-[#f59e0b] transition-colors duration-300 link-glow"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    <span className="text-sm">Live Demo</span>
                  </a>
                )}
              </div>
            </div>

            {/* Corner accent */}
            <div className="absolute bottom-0 left-0 w-16 h-16 border-l border-b border-[#22d3ee]/20 rounded-bl-lg" />
          </motion.div>
        ))}
      </div>

      {/* Decorative bottom line */}
      <div className="mt-16 h-px bg-gradient-to-r from-transparent via-[#22d3ee]/30 to-transparent" />
    </SectionWrapper>
  );
}
