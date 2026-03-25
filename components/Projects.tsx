'use client';

import SectionWrapper from './SectionWrapper';
import { resumeData } from '@/lib/resume-data';

export default function Projects() {
  return (
    <SectionWrapper id="projects" className="relative z-10 py-12 px-6 max-w-5xl mx-auto">
      <div className="mb-8 relative">
        {/* 标题区域光晕 */}
        <div className="absolute -left-4 top-0 w-20 h-20 bg-[#4cc9f0]/10 rounded-full blur-xl" />
        <span className="text-lg tracking-[0.3em] text-[#4cc9f0] uppercase font-mono relative">
          04
        </span>
        <h2 className="text-3xl font-light tracking-widest text-[#e0f4ff] mt-2 relative">
          Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {resumeData.projects.map((project, index) => (
          <div
            key={index}
            className="group relative bg-[#1b263b]/50 border border-[#1b263b] rounded-lg p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#4cc9f0]/50 hover:shadow-[0_0_30px_rgba(76,201,240,0.15)]"
          >
            <h3 className="text-xl text-[#e0f4ff] mb-2">{project.title}</h3>
            <p className="text-[#778da9] text-sm leading-relaxed mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.techTags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full bg-[#0d1b2a] text-[#4cc9f0] border border-[#4cc9f0]/30"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#778da9] hover:text-[#4cc9f0] transition-colors"
                >
                  GitHub
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#778da9] hover:text-[#4cc9f0] transition-colors"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* 装饰性底线 */}
      <div className="mt-8 h-px bg-gradient-to-r from-transparent via-[#4cc9f0]/30 to-transparent" />
    </SectionWrapper>
  );
}
