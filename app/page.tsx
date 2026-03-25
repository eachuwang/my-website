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
