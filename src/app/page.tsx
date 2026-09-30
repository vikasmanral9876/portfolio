'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Journey from '@/components/Journey';
import DsaSection from '@/components/DsaSection';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ResumeModal from '@/components/ResumeModal';

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans selection:bg-sky-500/20 selection:text-sky-200">
      {/* Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1 flex flex-col">
        {/* 1. Hero Section */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* 2. About Section */}
        <About />

        {/* 3. Skills Section */}
        <Skills />

        {/* 4. Featured Projects Section */}
        <Projects />

        {/* 5. Journey Section */}
        <Journey />

        {/* 6. DSA & Coding Problem Solving Section */}
        <DsaSection />

        {/* 7. Education Section */}
        <Education />

        {/* 8. Contact Section */}
        <Contact />
      </main>

      {/* 9. Footer */}
      <Footer />

      {/* 10. Interactive Resume Modal Preview */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
