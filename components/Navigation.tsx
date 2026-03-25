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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#0d1b2a]/90 backdrop-blur-md' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* 左侧留空 */}
          <div />

          {/* 桌面端导航 */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="text-sm text-[#778da9] hover:text-[#4cc9f0] transition-colors"
                whileHover={{ y: -2, textShadow: '0 0 10px var(--color-glow)' }}
                transition={{ duration: 0.2 }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* 移动端汉堡菜单按钮 */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-[#e0f4ff] transition-transform duration-300 ${
                mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#e0f4ff] transition-opacity duration-300 ${
                mobileMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#e0f4ff] transition-transform duration-300 ${
                mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </motion.nav>

      {/* 移动端菜单面板 */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#0d1b2a]/95 backdrop-blur-md flex flex-col items-center justify-center gap-8 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="text-2xl text-[#e0f4ff]"
                onClick={handleNavClick}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ textShadow: '0 0 15px var(--color-glow)' }}
              >
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
