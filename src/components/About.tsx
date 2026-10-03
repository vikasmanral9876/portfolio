import React from 'react';
import { Cpu, Layers, Sparkles, Binary, ArrowRight } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

export default function About() {
  const { about, education } = portfolioData;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="h-5 w-5 text-sky-400" />;
      case 'Layers':
        return <Layers className="h-5 w-5 text-indigo-400" />;
      case 'Sparkles':
        return <Sparkles className="h-5 w-5 text-emerald-400" />;
      case 'Binary':
        return <Binary className="h-5 w-5 text-amber-400" />;
      default:
        return <Cpu className="h-5 w-5 text-sky-400" />;
    }
  };

  return (
    <section id="about" className="py-24 border-t border-zinc-900 bg-zinc-950/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider block mb-1">
            About Me
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Building Software with an Engineering Mindset
          </h2>
          <p className="text-sm text-zinc-400 mt-1.5 max-w-xl">
            Full-Stack developer focused on building practical web applications and AI-powered workflows.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Narrative Column */}
          <div className="lg:col-span-7 space-y-5 text-zinc-300 text-sm sm:text-base leading-relaxed">
            <p className="text-zinc-200 font-medium text-lg leading-snug">
              {about.summary}
            </p>

            {about.story.map((paragraph, index) => (
              <p key={index} className="text-zinc-400">
                {paragraph}
              </p>
            ))}

            {/* Academic Credential Card */}
            <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 mt-6 flex items-start gap-4">
              <div className="p-2.5 rounded-lg bg-zinc-800 text-sky-400 shrink-0">
                <Cpu className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-zinc-100">
                  {education.degree}
                </h3>
                <p className="text-xs text-zinc-400 mt-0.5">
                  {education.institution} • {education.university}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-2.5">
                  {education.coursework.slice(0, 4).map((c) => (
                    <span
                      key={c}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-800/80 text-zinc-300 border border-zinc-700/50"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#skills"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-sky-400 hover:text-sky-300 font-semibold group"
              >
                <span>View technical skills</span>
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Core Pillars Column */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {about.coreValues.map((val) => (
              <div
                key={val.title}
                className="p-5 rounded-xl bg-zinc-900/40 border border-zinc-850 hover:border-zinc-700/80 transition-all card-hover-effect"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-zinc-850/80 border border-zinc-800">
                    {getIcon(val.icon)}
                  </div>
                  <h3 className="text-sm font-semibold text-zinc-100 font-sans">
                    {val.title}
                  </h3>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed pl-1">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
