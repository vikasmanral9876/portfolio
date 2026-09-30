import React from 'react';
import { portfolioData } from '@/data/portfolioData';
import { Code, Bot, Cpu, Binary, CheckCircle2 } from 'lucide-react';

export default function Journey() {
  const { journey } = portfolioData;

  const getMilestoneIcon = (category: string) => {
    switch (category) {
      case 'fullstack':
        return <Code className="h-4 w-4 text-sky-400" />;
      case 'ai':
        return <Bot className="h-4 w-4 text-cyan-400" />;
      case 'iot':
        return <Cpu className="h-4 w-4 text-indigo-400" />;
      case 'dsa':
        return <Binary className="h-4 w-4 text-emerald-400" />;
      default:
        return <Code className="h-4 w-4 text-sky-400" />;
    }
  };

  return (
    <section id="journey" className="py-14 sm:py-16 border-t border-zinc-900 bg-zinc-950 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-8 sm:mb-10">
          <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider block mb-1">
            Development Journey
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Engineering & Technical Progression
          </h2>
          <p className="text-sm text-zinc-400 mt-1 max-w-xl">
            A transparent overview of core development phases, practical project architecture, embedded hardware training, and DSA problem solving.
          </p>
        </div>

        {/* Timeline Line & Items */}
        <div className="relative border-l border-zinc-800 ml-4 sm:ml-6 space-y-6 sm:space-y-7">
          {journey.map((item) => (
            <div key={item.id} className="relative pl-7 sm:pl-9 group">
              
              {/* Timeline Node Dot */}
              <div className="absolute -left-[17px] top-1.5 h-8 w-8 rounded-full bg-zinc-900 border-2 border-zinc-700 flex items-center justify-center group-hover:border-sky-400 group-hover:scale-110 transition-all shadow-md shadow-black">
                {getMilestoneIcon(item.category)}
              </div>

              {/* Milestone Card */}
              <div className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-850 hover:border-zinc-750 transition-all card-hover-effect">
                
                {/* Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mb-2.5">
                  <div>
                    <span className="text-[11px] font-mono text-sky-400 uppercase tracking-wider font-semibold">
                      {item.period}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight mt-0.5">
                      {item.title}
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-zinc-400 bg-zinc-800/80 px-2.5 py-0.5 rounded-md self-start border border-zinc-700/60">
                    {item.subtitle}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-3">
                  {item.description}
                </p>

                {/* Core Achievements / Key Points */}
                <div className="space-y-1.5 mb-3.5">
                  {item.keyPoints.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-xs text-zinc-400">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 pt-2.5 border-t border-zinc-850/80">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-800/60 text-zinc-300 border border-zinc-750"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
