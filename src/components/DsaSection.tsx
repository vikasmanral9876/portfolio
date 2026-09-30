import { portfolioData } from '@/data/portfolioData';
import { Binary, Code2, Check, ArrowUpRight, Cpu } from 'lucide-react';
import { LeetCodeIcon, GithubIcon } from './Icons';

export default function DsaSection() {
  const { dsaTopics, socialLinks } = portfolioData;

  return (
    <section id="dsa" className="py-14 sm:py-16 border-t border-zinc-900 bg-zinc-950/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-7 sm:mb-8">
          <div>
            <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block mb-1">
              Problem Solving
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Data Structures & Algorithms (Java)
            </h2>
            <p className="text-sm text-zinc-400 mt-1 max-w-xl">
              Consistent focus on time and space complexity, algorithmic thinking, and clean object-oriented problem solving using Java.
            </p>
          </div>

          {/* Coding Profile Links */}
          <div className="flex items-center gap-2.5 mt-4 sm:mt-0">
            {socialLinks.leetcode && (
              <a
                href={socialLinks.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                id="dsa-leetcode-link"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-900 hover:bg-zinc-850 text-amber-300 border border-zinc-800 text-xs font-mono transition-colors shadow-xs"
              >
                <LeetCodeIcon className="h-3.5 w-3.5" />
                <span>LeetCode Profile</span>
                <ArrowUpRight className="h-3 w-3" />
              </a>
            )}

            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              id="dsa-github-link"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-900 hover:bg-zinc-850 text-zinc-200 border border-zinc-800 text-xs font-mono transition-colors shadow-xs"
            >
              <GithubIcon className="h-3.5 w-3.5" />
              <span>GitHub Solutions</span>
              <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>
        </div>

        {/* DSA Focus Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {dsaTopics.map((topic) => (
            <div
              key={topic.title}
              className="p-4 sm:p-4.5 rounded-2xl bg-zinc-900/40 border border-zinc-850 hover:border-zinc-750 transition-all flex flex-col justify-between card-hover-effect"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-bold text-white tracking-tight flex items-center gap-2">
                    <Binary className="h-3.5 w-3.5 text-emerald-400" />
                    {topic.title}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {topic.status}
                  </span>
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed mb-2.5">
                  {topic.description}
                </p>

                {/* Concept Badges */}
                <div className="flex flex-wrap gap-1">
                  {topic.concepts.map((concept) => (
                    <span
                      key={concept}
                      className="text-[10.5px] font-mono px-2 py-0.5 rounded bg-zinc-800/80 text-zinc-300 border border-zinc-750/70"
                    >
                      {concept}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Indicator */}
              <div className="pt-2.5 mt-2.5 border-t border-zinc-850/60 flex items-center justify-between text-[10.5px] font-mono text-zinc-500">
                <span className="flex items-center gap-1">
                  <Check className="h-3 w-3 text-emerald-400" />
                  Java Implementations
                </span>
                <span>O(log N) - O(N) focus</span>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Problem-Solving Methodology Highlight */}
        <div className="mt-6 p-4 rounded-xl bg-zinc-900/30 border border-zinc-850 grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
          <div className="flex items-start gap-2.5">
            <div className="p-1.5 rounded-lg bg-zinc-800 text-sky-400 shrink-0">
              <Code2 className="h-3.5 w-3.5" />
            </div>
            <div>
              <h4 className="text-xs font-semibold text-zinc-200">First-Principles Analysis</h4>
              <p className="text-[11px] text-zinc-400 mt-0.5">
                Breaking down problem constraints and edge cases before drafting code.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <div className="p-1.5 rounded-lg bg-zinc-800 text-emerald-400 shrink-0">
              <Binary className="h-3.5 w-3.5" />
            </div>
            <div>
              <h4 className="text-xs font-semibold text-zinc-200">Complexity Trade-Offs</h4>
              <p className="text-[11px] text-zinc-400 mt-0.5">
                Evaluating space versus time complexity to select the most efficient structure.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <div className="p-1.5 rounded-lg bg-zinc-800 text-indigo-400 shrink-0">
              <Cpu className="h-3.5 w-3.5" />
            </div>
            <div>
              <h4 className="text-xs font-semibold text-zinc-200">Clean OOP Code in Java</h4>
              <p className="text-[11px] text-zinc-400 mt-0.5">
                Structuring readable classes, modular helper methods, and descriptive naming.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
