'use client';

import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import StarField from '@/components/StarField';
import ShootingStars from '@/components/ShootingStars';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  return (
    <main className="relative">
      {/* Mesh Grid Background */}
      <div className="mesh-bg scanlines">
        <div className="mesh-grid" />
        <div
          className="mesh-glow mesh-glow-1"
          style={{
            transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
            transition: 'transform 0.5s ease-out',
          }}
        />
        <div
          className="mesh-glow mesh-glow-2"
          style={{
            transform: `translate(${-mousePos.x}px, ${-mousePos.y}px)`,
            transition: 'transform 0.5s ease-out',
          }}
        />
      </div>

      <StarField />
      <ShootingStars />
      <Navigation />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
