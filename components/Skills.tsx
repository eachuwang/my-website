'use client';

import SectionWrapper from './SectionWrapper';
import { resumeData } from '@/lib/resume-data';

const categoryColors: Record<string, string> = {
  'AI/大模型': 'text-[#4cc9f0] border-[#4cc9f0]/30 bg-[#4cc9f0]/10',
  '编程语言': 'text-[#a78bfa] border-[#a78bfa]/30 bg-[#a78bfa]/10',
  '数据库': 'text-[#34d399] border-[#34d399]/30 bg-[#34d399]/10',
  '大数据': 'text-[#fbbf24] border-[#fbbf24]/30 bg-[#fbbf24]/10',
  '工具': 'text-[#f472b6] border-[#f472b6]/30 bg-[#f472b6]/10',
};

const categoryGradients: Record<string, string> = {
  'AI/大模型': 'from-[#4cc9f0]/20 to-[#4cc9f0]/5',
  '编程语言': 'from-[#a78bfa]/20 to-[#a78bfa]/5',
  '数据库': 'from-[#34d399]/20 to-[#34d399]/5',
  '大数据': 'from-[#fbbf24]/20 to-[#fbbf24]/5',
  '工具': 'from-[#f472b6]/20 to-[#f472b6]/5',
};

export default function Skills() {
  const categories = Array.from(new Set(resumeData.skills.map((s) => s.category)));

  return (
    <SectionWrapper id="skills" className="relative z-10 py-12 px-6 max-w-3xl mx-auto">
      <div className="mb-8 relative">
        {/* 标题区域光晕 */}
        <div className="absolute -left-4 top-0 w-20 h-20 bg-[#4cc9f0]/10 rounded-full blur-xl" />
        <span className="text-lg tracking-[0.3em] text-[#4cc9f0] uppercase font-mono relative">
          05
        </span>
        <h2 className="text-3xl font-light tracking-widest text-[#e0f4ff] mt-2 relative">
          Skills
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {categories.map((category) => {
          const skills = resumeData.skills.filter((s) => s.category === category);
          if (skills.length === 0) return null;

          return (
            <div
              key={category}
              className={`relative bg-gradient-to-br ${categoryGradients[category]} border border-[#1b263b] rounded-lg p-4 group hover:border-[#4cc9f0]/30 transition-all`}
            >
              <h3 className="text-xs text-[#778da9] mb-3 uppercase tracking-wider">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`text-xs px-2 py-1 rounded border transition-all duration-200 ${categoryColors[category]} group-hover:scale-105`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* 装饰性底线 */}
      <div className="mt-8 h-px bg-gradient-to-r from-transparent via-[#4cc9f0]/30 to-transparent" />
    </SectionWrapper>
  );
}
