'use client';

import SectionWrapper from './SectionWrapper';
import { resumeData } from '@/lib/resume-data';

const contactLinks = [
  {
    href: `mailto:${resumeData.email}`,
    label: 'Email',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    href: resumeData.github,
    label: 'GitHub',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    ),
  },
  {
    href: resumeData.linkedin,
    label: 'LinkedIn',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <SectionWrapper id="contact" className="relative z-10 py-12 px-6 max-w-3xl mx-auto text-center">
      <div className="mb-8 relative">
        {/* 标题区域光晕 */}
        <div className="absolute -left-4 top-0 w-20 h-20 bg-[#4cc9f0]/10 rounded-full blur-xl" />
        <span className="text-lg tracking-[0.3em] text-[#4cc9f0] uppercase font-mono relative">
          06
        </span>
        <h2 className="text-3xl font-light tracking-widest text-[#e0f4ff] mt-2 relative">
          Contact
        </h2>
      </div>

      <p className="text-[#778da9] mb-12 font-light">
        欢迎联系我，期待与您的合作。
      </p>

      <div className="flex justify-center gap-12">
        {contactLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith('mailto') ? undefined : '_blank'}
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 group"
          >
            {/* 图标圆形背景 */}
            <div className="w-14 h-14 rounded-full border-2 border-[#4cc9f0]/30 bg-[#0d1b2a]/50 flex items-center justify-center text-[#4cc9f0] group-hover:border-[#4cc9f0] group-hover:shadow-[0_0_20px_rgba(76,201,240,0.4)] transition-all duration-300">
              {link.icon}
            </div>

            {/* 标签文字 */}
            <span className="text-sm text-[#778da9] group-hover:text-[#4cc9f0] transition-colors relative">
              {link.label}
              {/* 下划线 */}
              <span className="absolute -bottom-1 left-0 right-0 h-px bg-[#4cc9f0] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </span>
          </a>
        ))}
      </div>
    </SectionWrapper>
  );
}
