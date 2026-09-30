'use client';

import React from 'react';
import { portfolioData } from '@/data/portfolioData';
import { Terminal, Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Footer() {
  const { name, headline, socialLinks } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="portfolio-footer" className="border-t border-zinc-900 bg-zinc-950 py-12 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-zinc-900">
          
          {/* Brand & Tagline */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-zinc-100">
              <div className="p-1 rounded bg-zinc-900 border border-zinc-800 text-sky-400">
                <Terminal className="h-4 w-4" />
              </div>
              <span className="font-mono text-sm font-bold tracking-tight">
                {name}
              </span>
            </div>
            <p className="text-xs text-zinc-400 max-w-sm">
              {headline}
            </p>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
            >
              <GithubIcon className="h-4 w-4" />
            </a>

            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>

            <a
              href={`mailto:${socialLinks.email}`}
              aria-label="Email"
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
            >
              <Mail className="h-4 w-4" />
            </a>

            <button
              onClick={scrollToTop}
              id="back-to-top-btn"
              title="Back to top"
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-850 text-zinc-300 hover:text-white border border-zinc-800 text-xs font-mono transition-colors cursor-pointer"
            >
              <span>Top</span>
              <ArrowUp className="h-3 w-3" />
            </button>
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-500 font-mono">
          <p>© {new Date().getFullYear()} {name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Built with Next.js, React & Tailwind CSS</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
