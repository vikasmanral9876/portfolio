'use client';

import React from 'react';
import { ArrowRight, FileText, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';
import CodeEditorCard from './CodeEditorCard';

interface HeroProps {
  onOpenResume: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  const { name, headline, subheadline, socialLinks } = portfolioData;

  const stackItems = [
    'React',
    'Next.js',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Convex',
    'REST APIs',
    'Java',
    'Gemini / AI APIs',
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[85vh] flex items-center pt-28 pb-16 lg:py-32 overflow-hidden"
    >
      {/* Background ambient lighting and developer grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>
      <div className="absolute -top-32 right-1/4 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-1/4 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Developer Headline & Intro */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-5">
            
            {/* Status & Name Pill */}
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-xl sm:rounded-full bg-zinc-900/90 border border-zinc-800 text-xs text-zinc-300 shadow-xs max-w-full">
              <span className="flex h-2 w-2 relative shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-zinc-400">Hi, I&apos;m</span>
              <span className="font-semibold text-white">{name}</span>
              <span className="text-zinc-600">·</span>
              <span className="text-zinc-300">Full-Stack / Software Developer</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold tracking-tight text-white leading-[1.2]">
                {headline}
              </h1>
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-xl">
                {subheadline}
              </p>
            </div>

            {/* Key Skill Highlights Bar */}
            <div className="space-y-1.5 pt-1 w-full max-w-xl">
              <div className="text-xs font-medium text-zinc-400">Core Technologies:</div>
              <div className="flex flex-wrap gap-1.5">
                {stackItems.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-2.5 py-0.5 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300 font-sans"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons & Social Links */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                id="hero-view-projects-btn"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-100 text-zinc-950 font-medium text-sm hover:bg-white transition-all shadow-sm active:scale-98"
              >
                <span>View Projects</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <button
                onClick={onOpenResume}
                id="hero-download-resume-btn"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-850 text-zinc-200 border border-zinc-800 font-medium text-sm transition-all hover:border-zinc-700 active:scale-98 cursor-pointer"
              >
                <FileText className="h-4 w-4 text-sky-400" />
                <span>Resume Preview</span>
              </button>

              <div className="flex items-center gap-2 ml-1">
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-github-link"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-850 text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-700 transition-colors shadow-xs"
                >
                  <GithubIcon className="h-4 w-4" />
                </a>

                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-linkedin-link"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-850 text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-700 transition-colors shadow-xs"
                >
                  <LinkedinIcon className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Recruiter Trust Indicator */}
            <div className="pt-1 flex flex-wrap items-center gap-4 text-xs text-zinc-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                B.Tech in ECE (AKTU)
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-sky-400" />
                Full-Stack Projects
              </span>
            </div>

          </div>

          {/* Right Column: Responsive Code Editor Visualization */}
          <div className="lg:col-span-5 w-full max-w-full overflow-hidden">
            <CodeEditorCard />
          </div>

        </div>
      </div>
    </section>
  );
}
