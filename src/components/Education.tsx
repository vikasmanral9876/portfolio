import React from 'react';
import { portfolioData } from '@/data/portfolioData';
import { GraduationCap, BookOpen, CheckCircle, Award, Landmark } from 'lucide-react';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-24 border-t border-zinc-900 bg-zinc-950 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider block mb-1">
            Education
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Education & Engineering Foundation
          </h2>
          <p className="text-sm text-zinc-400 mt-1.5 max-w-xl">
            {education.description || "B.Tech in Electronics & Communication Engineering with a strong foundation in programming, computer science, and systems engineering."}
          </p>
        </div>

        {/* Education Highlight Card */}
        <div className="rounded-2xl bg-zinc-900/40 border border-zinc-850 p-6 sm:p-8 card-hover-effect">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-zinc-850">
            <div className="flex items-start gap-4">
              <div className="p-3.5 rounded-xl bg-zinc-800 text-sky-400 border border-zinc-750 shrink-0">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {education.degree}
                </h3>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-sm text-zinc-300">
                  <span className="font-semibold text-zinc-100 flex items-center gap-1.5">
                    <Landmark className="h-3.5 w-3.5 text-zinc-400" />
                    {education.institution}
                  </span>
                  <span className="text-zinc-500">•</span>
                  <span className="text-zinc-400">{education.university}</span>
                </div>
                <p className="text-xs text-zinc-500 mt-1 font-mono">
                  {education.location}
                </p>
              </div>
            </div>

            <span className="self-start px-3 py-1 rounded-full bg-zinc-800 border border-zinc-700 text-xs font-mono text-zinc-300">
              {education.duration}
            </span>
          </div>

          {/* Grid of Coursework & Gained Competencies */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
            
            {/* Relevant Coursework */}
            <div>
              <div className="flex items-center gap-2 mb-3 text-xs font-mono text-zinc-300 uppercase tracking-wider font-semibold">
                <BookOpen className="h-3.5 w-3.5 text-sky-400" />
                <span>Relevant Coursework</span>
              </div>
              <ul className="space-y-2">
                {education.coursework.map((course) => (
                  <li key={course} className="flex items-center gap-2 text-xs text-zinc-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-400"></span>
                    <span>{course}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Core Engineering Disciplines */}
            <div>
              <div className="flex items-center gap-2 mb-3 text-xs font-mono text-zinc-300 uppercase tracking-wider font-semibold">
                <Award className="h-3.5 w-3.5 text-emerald-400" />
                <span>Engineering & Software Foundations</span>
              </div>
              <ul className="space-y-2">
                {education.skillsGained.map((skill) => (
                  <li key={skill} className="flex items-start gap-2 text-xs text-zinc-300">
                    <CheckCircle className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* ECE to Software Footnote */}
          <div className="mt-8 p-4 rounded-xl bg-zinc-950/60 border border-zinc-850/80 text-xs text-zinc-400 leading-relaxed font-sans">
            <span className="text-zinc-200 font-semibold">Engineering Perspective: </span>
            My ECE background strengthens my understanding of systems, debugging, and hardware-software interaction while my current focus is full-stack software development.
          </div>
        </div>

      </div>
    </section>
  );
}
