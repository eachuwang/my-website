'use client';

import SectionWrapper from './SectionWrapper';
import { resumeData } from '@/lib/resume-data';

export default function About() {
  return (
    <SectionWrapper id="about" className="relative z-10 py-12 px-6 max-w-3xl mx-auto">
      <div className="mb-8 relative">
        {/* 标题区域光晕 */}
        <div className="absolute -left-4 top-0 w-20 h-20 bg-[#4cc9f0]/10 rounded-full blur-xl" />
        <span className="text-lg tracking-[0.3em] text-[#4cc9f0] uppercase font-mono relative">
          01
        </span>
        <h2 className="text-3xl font-light tracking-widest text-[#e0f4ff] mt-2 relative">
          About
        </h2>
      </div>

      <p className="text-lg leading-relaxed text-[#778da9] font-light">
        {resumeData.about}
      </p>

      {/* 装饰性底线 */}
      <div className="mt-8 h-px bg-gradient-to-r from-transparent via-[#4cc9f0]/30 to-transparent" />
    </SectionWrapper>
  );
}
