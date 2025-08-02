import React from 'react';
import Header from '@/components/Header';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Resume from '@/components/Resume';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen animated-gradient">
      <Header />
      <About />
      <div className="section-divider my-16"></div>
      <Experience />
      <div className="section-divider my-16"></div>
      <Projects />
      <div className="section-divider my-16"></div>
      <Resume />
      <div className="section-divider my-16"></div>
      <Contact />
    </main>
  );
}
