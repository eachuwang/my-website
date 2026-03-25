'use client';

import SectionWrapper from './SectionWrapper';
import { resumeData } from '@/lib/resume-data';

export default function Education() {
  return (
    <SectionWrapper id="education" className="relative z-10 py-12 px-6 max-w-3xl mx-auto">
      <div className="mb-8 relative">
        {/* 标题区域光晕 */}
        <div className="absolute -left-4 top-0 w-20 h-20 bg-[#4cc9f0]/10 rounded-full blur-xl" />
        <span className="text-lg tracking-[0.3em] text-[#4cc9f0] uppercase font-mono relative">
          02
        </span>
        <h2 className="text-3xl font-light tracking-widest text-[#e0f4ff] mt-2 relative">
          Education
        </h2>
      </div>

      <div className="relative border-l border-[#1b263b] ml-4 pl-8">
        {resumeData.education.map((edu, index) => (
          <div
            key={index}
            className="relative mb-12 last:mb-0"
          >
            {/* 时间线节点 */}
            <div
              className="absolute -left-[37px] w-3 h-3 rounded-full bg-[#0d1b2a] border-2 border-[#4cc9f0]"
              style={{
                boxShadow: '0 0 10px var(--color-glow), 0 0 20px var(--color-glow)',
              }}
            />
            <div>
              <span className="text-xs text-[#4cc9f0] font-mono">{edu.year}</span>
              <h3 className="text-xl text-[#e0f4ff] mt-1">{edu.degree}</h3>
              <p className="text-[#778da9] mt-1">{edu.institution}</p>
              {edu.description && (
                <p className="text-sm text-[#778da9]/80 mt-3 leading-relaxed">
                  {edu.description}
                </p>
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
