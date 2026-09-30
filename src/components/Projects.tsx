'use client';

import React, { useState } from 'react';
import { portfolioData } from '@/data/portfolioData';
import ProjectCard from './ProjectCard';
import { FolderGit2 } from 'lucide-react';

export default function Projects() {
  const { projects, socialLinks } = portfolioData;
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const categories = ['All', 'AI Applications', 'Full-Stack', 'Embedded Systems'] as const;

  const filteredProjects =
    selectedFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedFilter);

  const primaryProject = projects.find((p) => p.id === 'hirepilot');
  const otherProjects = projects.filter((p) => p.id !== 'hirepilot');

  // When 'All' is selected, show primary project with large visual emphasis on top, followed by other projects
  const isAllSelected = selectedFilter === 'All';

  return (
    <section id="projects" className="py-14 sm:py-16 border-t border-zinc-900 bg-zinc-950/70 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
          <div>
            <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider block mb-1">
              Featured Work
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Projects & Applications
            </h2>
            <p className="text-sm text-zinc-400 mt-1.5 max-w-xl">
              Practical full-stack web applications, Gemini AI integrations, and embedded hardware systems built with clean code and tested functionality.
            </p>
          </div>

          {/* Visually Light Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-zinc-900/60 border border-zinc-800 text-xs font-sans">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                id={`filter-project-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  selectedFilter === cat
                    ? 'bg-zinc-800 text-white font-medium shadow-xs'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Layout */}
        {isAllSelected ? (
          <div className="space-y-6">
            {/* Primary / Featured Project Card (Larger Visual Emphasis) */}
            {primaryProject && (
              <div>
                <ProjectCard project={primaryProject} isPrimary={true} />
              </div>
            )}

            {/* Other Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-1">
              {otherProjects.map((project) => (
                <ProjectCard key={project.id} project={project} isPrimary={false} />
              ))}
            </div>
          </div>
        ) : (
          /* Filtered View Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className={project.id === 'hirepilot' ? 'col-span-full' : ''}
              >
                <ProjectCard
                  project={project}
                  isPrimary={project.id === 'hirepilot'}
                />
              </div>
            ))}
          </div>
        )}

        {/* GitHub Footnote Card */}
        <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-zinc-900/30 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="p-2.5 rounded-xl bg-zinc-850 text-sky-400 border border-zinc-700/60 shrink-0">
              <FolderGit2 className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">
                Looking for more project code & technical repositories?
              </h4>
              <p className="text-xs text-zinc-400 mt-0.5">
                Explore complete source code and commit history on GitHub.
              </p>
            </div>
          </div>

          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            id="projects-github-cta"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 text-xs font-medium shrink-0 transition-colors shadow-xs"
          >
            <span>Visit GitHub Profile</span>
          </a>
        </div>

      </div>
    </section>
  );
}
