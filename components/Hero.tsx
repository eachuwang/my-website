'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '@/lib/resume-data';

export default function Hero() {
  const [typedName, setTypedName] = useState('');
  const [typedTitle, setTypedTitle] = useState('');
  const nameComplete = useRef(false);
  const titleComplete = useRef(false);

  // Generate particles deterministically to avoid hydration mismatch
  const particles = useRef(
    Array.from({ length: 6 }, (_, i) => ({
      id: i,
      left: `${(i * 17 + 7) % 100}%`,
      top: `${(i * 23 + 11) % 100}%`,
      delay: (i * 0.5) % 4,
      duration: 5 + (i * 0.7) % 3,
      type: i % 3 === 0 ? 'particle-amber' : 'particle-cyan',
    }))
  );

  useEffect(() => {
    const name = resumeData.name;
    const title = resumeData.title;

    let nameIndex = 0;
    let titleIndex = 0;

    const typeName = setInterval(() => {
      if (nameIndex <= name.length) {
        setTypedName(name.slice(0, nameIndex));
        nameIndex++;
      } else {
        nameComplete.current = true;
        clearInterval(typeName);
      }
    }, 80);

    const typeTitle = setInterval(() => {
      if (nameComplete.current && titleIndex <= title.length) {
        setTypedTitle(title.slice(0, titleIndex));
        titleIndex++;
      } else if (!nameComplete.current) {
        // Wait for name to complete
      } else {
        titleComplete.current = true;
        clearInterval(typeTitle);
      }
    }, 60);

    return () => {
      clearInterval(typeName);
      clearInterval(typeTitle);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.current.map((p) => (
          <div
            key={p.id}
            className={`particle ${p.type}`}
            style={{
              left: p.left,
              top: p.top,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Terminal prefix */}
      <motion.div
        className="flex items-center gap-2 mb-4 text-[#64748b]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <span className="text-[#22d3ee]">~/portfolio</span>
        <span className="text-[#f59e0b]">❯</span>
        <span className="text-[#22d3ee] animate-pulse">_</span>
      </motion.div>

      {/* Name with typewriter */}
      <motion.h1
        className="text-5xl md:text-7xl font-bold tracking-wider mb-2 relative"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <span className="text-gradient-animated font-['Syne']">{typedName}</span>
      </motion.h1>

      {/* Title with typewriter (starts after name completes) */}
      <motion.p
        className="text-xl md:text-2xl text-[#22d3ee] tracking-widest mb-6 font-light"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        {typedTitle}
        <span className="animate-pulse">|</span>
      </motion.p>

      {/* Tagline */}
      <motion.p
        className="text-lg text-[#94a3b8] max-w-xl font-light leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        {resumeData.tagline}
      </motion.p>

      {/* Status line */}
      <motion.div
        className="mt-12 flex items-center gap-4 text-sm text-[#64748b]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.6 }}
      >
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
          available for hire
        </span>
        <span className="text-[#374151]">|</span>
        <span>{resumeData.email}</span>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 2, duration: 0.5 },
          y: { delay: 2, duration: 1.5, repeat: Infinity, ease: 'easeInOut' },
        }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-[#64748b] tracking-widest">SCROLL</span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#22d3ee"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
