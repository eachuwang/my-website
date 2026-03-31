'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { resumeData } from '@/lib/resume-data';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let rafId: number;

    const handleScroll = () => {
      rafId = requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

        setScrolled(scrollTop > 80);
        setScrollProgress(progress);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Smooth scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 h-0.5 bg-gradient-to-r from-[#22d3ee] to-[#f59e0b] z-[60]"
        style={{ width: `${scrollProgress}%` }}
        transition={{ type: 'tween', duration: 0.05 }}
      />

      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#030712]/80 backdrop-blur-xl border-b border-[#22d3ee]/10'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo / Initials */}
          <motion.div
            className="text-xl font-bold tracking-wider text-[#f1f5f9] font-['Syne']"
            whileHover={{ textShadow: '0 0 20px #22d3ee' }}
            transition={{ duration: 0.2 }}
          >
            {resumeData.name.split(' ').map(n => n[0]).join('')}
          </motion.div>

          {/* Desktop navigation */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="relative text-sm text-[#94a3b8] hover:text-[#22d3ee] transition-colors duration-300 tracking-wide"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <span className="flex items-center gap-1">
                  <span className="text-[#22d3ee]/50 text-xs">0{index + 1}.</span>
                  {item.label}
                </span>
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <motion.a
            href="#contact"
            className="hidden md:block px-4 py-2 text-sm bg-gradient-to-r from-[#22d3ee]/20 to-[#0891b2]/20 border border-[#22d3ee]/30 rounded-lg text-[#22d3ee] hover:border-[#22d3ee] hover:bg-[#22d3ee]/10 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Get in Touch
          </motion.a>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 relative"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-[#f1f5f9] transition-all duration-300 ${
                mobileMenuOpen ? 'rotate-45 translate-y-2 bg-[#22d3ee]' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#f1f5f9] transition-opacity duration-300 ${
                mobileMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#f1f5f9] transition-all duration-300 ${
                mobileMenuOpen ? '-rotate-45 -translate-y-2 bg-[#22d3ee]' : ''
              }`}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#030712]/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="text-3xl text-[#f1f5f9] font-['Syne']"
                onClick={handleNavClick}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ textShadow: '0 0 30px #22d3ee', color: '#22d3ee' }}
              >
                <span className="text-[#22d3ee]/50 text-lg mr-2">0{index + 1}.</span>
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
