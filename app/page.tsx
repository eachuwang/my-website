import Navigation from '@/components/Navigation';
import StarField from '@/components/StarField';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="relative">
      {/* Mesh Grid Background */}
      <div className="mesh-bg scanlines">
        <div className="mesh-grid" />
        <div className="mesh-glow mesh-glow-1" />
        <div className="mesh-glow mesh-glow-2" />
      </div>

      <StarField />
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
