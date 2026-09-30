'use client';

import React, { useEffect } from 'react';
import { portfolioData } from '@/data/portfolioData';
import { X, Download, Printer, FileText, CheckCircle2, GraduationCap, Code2, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const { name, title, headline, education, projects, skillCategories, socialLinks } = portfolioData;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      id="resume-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="resume-modal-container"
        className="relative w-full max-w-4xl max-h-[90vh] bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-zinc-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-3.5 border-b border-zinc-850 bg-zinc-900/60">
          <div className="flex items-center gap-2">
            <FileText className="h-4 w-4 text-sky-400" />
            <span className="text-xs font-mono font-medium text-zinc-300">
              Vikas_Manral_Resume_Preview.pdf
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              id="resume-print-btn"
              title="Print Resume"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-750 text-zinc-300 text-xs font-mono transition-colors cursor-pointer"
            >
              <Printer className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Print</span>
            </button>

            <a
              href="/resume.pdf"
              download="Vikas_Manral_Resume.pdf"
              id="resume-download-direct-btn"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 text-xs font-mono font-semibold transition-colors shadow-xs"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              id="close-resume-modal-btn"
              aria-label="Close Resume Preview"
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors ml-1 cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Resume Content */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8 font-sans text-xs sm:text-sm">
          
          {/* Header */}
          <div className="border-b border-zinc-800 pb-6 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                {name}
              </h1>
              <p className="text-sm font-mono text-sky-400 mt-1 font-medium">
                {title}
              </p>
              <p className="text-xs text-zinc-400 mt-1 max-w-xl">
                {headline}
              </p>
            </div>

            <div className="flex flex-col items-center sm:items-end text-xs font-mono text-zinc-400 space-y-1">
              <span className="flex items-center gap-1.5">
                <Mail className="h-3.5 w-3.5 text-zinc-400" />
                {socialLinks.email}
              </span>
              <span className="flex items-center gap-1.5">
                <GithubIcon className="h-3.5 w-3.5 text-zinc-400" />
                github.com/vikasmanral9876
              </span>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-sky-400 transition-colors"
              >
                <LinkedinIcon className="h-3.5 w-3.5 text-zinc-400" />
                <span>linkedin.com/in/vikas-manral-942aa6201</span>
              </a>
            </div>
          </div>

          {/* Education Section */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-sky-400 font-bold flex items-center gap-2">
              <GraduationCap className="h-4 w-4" />
              <span>Education</span>
            </h2>
            <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-850">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-1">
                <h3 className="text-sm font-bold text-white">
                  {education.degree}
                </h3>
                <span className="text-xs font-mono text-zinc-400">{education.duration}</span>
              </div>
              <p className="text-xs text-zinc-300 mt-1">
                {education.institution} • {education.university} ({education.location})
              </p>
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {education.coursework.map((course) => (
                  <span
                    key={course}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Technical Skills Section */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-sky-400 font-bold flex items-center gap-2">
              <Code2 className="h-4 w-4" />
              <span>Technical Skills</span>
            </h2>
            <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-850 space-y-2.5">
              {skillCategories.map((cat) => (
                <div key={cat.id} className="text-xs flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3">
                  <span className="font-mono text-zinc-400 font-semibold w-40 shrink-0">
                    {cat.title}:
                  </span>
                  <span className="text-zinc-200">
                    {cat.skills.map((s) => s.name).join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Full-Stack Projects */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-sky-400 font-bold flex items-center gap-2">
              <FileText className="h-4 w-4" />
              <span>Featured Full-Stack Projects</span>
            </h2>
            <div className="space-y-3">
              {projects.map((proj) => (
                <div
                  key={proj.id}
                  className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-850 space-y-2"
                >
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-1">
                    <h3 className="text-sm font-bold text-white">
                      {proj.title}
                    </h3>
                    <span className="text-[11px] font-mono text-sky-400">
                      {proj.tags.slice(0, 4).join(' • ')}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {proj.description}
                  </p>
                  <ul className="space-y-1">
                    {proj.features.slice(0, 2).map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs text-zinc-300">
                        <CheckCircle2 className="h-3 w-3 text-sky-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Development Focus & DSA */}
          <div className="p-4 rounded-xl bg-zinc-900/20 border border-zinc-800/80 text-xs text-zinc-400 font-mono space-y-1">
            <div className="text-zinc-200 font-semibold">
              // Core Focus & Problem Solving
            </div>
            <p>
              Mastering Data Structures & Algorithms in Java (Arrays, Linked Lists, Trees, Dynamic Programming). Dedicated to writing robust, maintainable full-stack code adhering to clean architecture.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
