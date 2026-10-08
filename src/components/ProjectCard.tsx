'use client';

import React, { useState } from 'react';
import { ExternalLink, Check, Sparkles, Cpu, Globe, Laptop, Image as ImageIcon, ChevronDown, ChevronUp, Play } from 'lucide-react';
import { GithubIcon } from './Icons';
import { ProjectItem } from '@/types';
import ProjectScreenshotGallery from './ProjectScreenshotGallery';

interface ProjectCardProps {
  project: ProjectItem;
  isPrimary?: boolean;
}

export default function ProjectCard({ project, isPrimary = false }: ProjectCardProps) {
  const [showAllFeatures, setShowAllFeatures] = useState(false);
  const demoVideoUrl = project.demoUrl || project.demoVideoUrl;

  const getDisplayUrl = () => {
    if (project.liveDemoUrl) {
      try {
        const url = new URL(project.liveDemoUrl);
        return url.hostname;
      } catch {
        return project.liveDemoUrl;
      }
    }
    if (project.id === 'hirepilot') {
      return 'hirepilot.app';
    }
    if (project.id === 'spott-event-organizer') {
      return 'spott-events.saas';
    }
    if (project.projectType === 'Hardware / Embedded') {
      return 'embedded://arduino-nano/firmware';
    }
    return `app://${project.id}.local`;
  };

  const isHardware = project.projectType === 'Hardware / Embedded';

  // PRIMARY FEATURED PROJECT (HirePilot) - Visually dominant layout with real screenshot gallery
  if (isPrimary) {
    const displayedFeatures = showAllFeatures ? project.features : project.features.slice(0, 4);

    return (
      <article
        id={`project-card-${project.id}`}
        className="rounded-2xl bg-zinc-900/50 border border-sky-500/40 ring-1 ring-sky-500/20 shadow-xl shadow-black/40 overflow-hidden group card-hover-effect transition-all flex flex-col lg:grid lg:grid-cols-12"
      >
        {/* Dedicated Large Screenshot Area (Dominant on Left for lg screens, Top for mobile) */}
        <div className="lg:col-span-7 bg-zinc-950 flex flex-col border-b lg:border-b-0 lg:border-r border-zinc-800/80 overflow-hidden">
          {project.screenshots && project.screenshots.length > 0 ? (
            <ProjectScreenshotGallery
              screenshots={project.screenshots}
              projectTitle={project.title}
              liveDemoUrl={project.liveDemoUrl}
            />
          ) : (
            <div className="flex flex-col">
              {/* Browser Chrome Window Header */}
              <div className="flex items-center justify-between px-3.5 py-2.5 border-b border-zinc-850 bg-zinc-900/80 shrink-0">
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-500/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-500/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-zinc-950 border border-zinc-800 text-xs font-mono text-zinc-300 max-w-[260px] sm:max-w-sm truncate">
                  <Globe className="h-3.5 w-3.5 text-sky-400 shrink-0" />
                  <span className="truncate">{getDisplayUrl()}</span>
                </div>
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest hidden sm:inline">
                  Preview
                </span>
              </div>
              <div className="flex-1 w-full relative flex items-center justify-center overflow-hidden bg-zinc-950 p-4 sm:p-6">
                {project.imageUrl ? (
                  <img
                    src={project.imageUrl}
                    alt={`${project.title} screenshot`}
                    className="w-full h-full object-cover object-top rounded-lg border border-zinc-800"
                  />
                ) : (
                  <div className="w-full h-full min-h-[210px] sm:min-h-[260px] rounded-xl border border-dashed border-zinc-800 bg-zinc-900/30 flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
                    <div className="relative z-10 flex flex-col items-center gap-3">
                      <div className="p-3.5 rounded-2xl bg-sky-500/10 border border-sky-500/30 text-sky-400">
                        <Laptop className="h-8 w-8" />
                      </div>
                      <p className="text-xs font-mono text-zinc-400 font-medium">
                        {project.title} Interface Preview
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Content Details (Right Column on lg screens, Bottom on mobile) */}
        <div className="lg:col-span-5 p-5 sm:p-6 lg:p-7 flex flex-col justify-between space-y-5">
          <div className="space-y-4">
            {/* Header Badges */}
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/30 font-medium">
                {project.category}
              </span>

              <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-semibold">
                <Sparkles className="h-3 w-3" />
                Featured Project
              </span>
            </div>

            {/* Title & Subtitle */}
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight group-hover:text-sky-300 transition-colors">
                {project.title}
              </h3>
              <p className="text-xs font-mono text-sky-400/90 font-medium mt-1">
                {project.subtitle}
              </p>
              <p className="text-xs sm:text-sm text-zinc-300 mt-2 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* 3–5 Key Technical Features with Expandable View */}
            <div className="pt-2 border-t border-zinc-850 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-semibold block">
                  Key Technical Features:
                </span>
                {project.features.length > 4 && (
                  <button
                    type="button"
                    onClick={() => setShowAllFeatures(!showAllFeatures)}
                    className="inline-flex items-center gap-1 text-[11px] font-mono text-sky-400 hover:text-sky-300 transition-colors cursor-pointer focus:outline-none"
                    aria-expanded={showAllFeatures}
                  >
                    <span>{showAllFeatures ? 'Show fewer' : `View all (${project.features.length})`}</span>
                    {showAllFeatures ? (
                      <ChevronUp className="h-3 w-3" aria-hidden="true" />
                    ) : (
                      <ChevronDown className="h-3 w-3" aria-hidden="true" />
                    )}
                  </button>
                )}
              </div>
              <div className="space-y-1.5">
                {displayedFeatures.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                    <Check className="h-3.5 w-3.5 text-sky-400 shrink-0 mt-0.5" />
                    <span className="leading-snug">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Badges */}
            <div className="pt-2">
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-800/80 border border-zinc-750 text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons: GitHub, Demo Video & Live Demo */}
          <div className="pt-4 border-t border-zinc-850 flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                id={`project-${project.id}-github-btn`}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-750 text-zinc-100 border border-zinc-700 text-xs font-medium transition-colors shadow-xs focus:ring-1 focus:ring-sky-400"
              >
                <GithubIcon className="h-3.5 w-3.5" />
                <span>GitHub</span>
              </a>
            )}

            {demoVideoUrl && (
              <a
                href={demoVideoUrl}
                target="_blank"
                rel="noopener noreferrer"
                id={`project-${project.id}-video-btn`}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 text-xs font-semibold transition-all shadow-sm active:scale-95 focus:ring-1 focus:ring-sky-400"
              >
                <Play className="h-3.5 w-3.5" fill="currentColor" />
                <span>Demo Video</span>
              </a>
            )}

            {project.liveDemoUrl ? (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                id={`project-${project.id}-demo-btn`}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 text-xs font-semibold transition-all shadow-sm active:scale-95 focus:ring-1 focus:ring-sky-400"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                <span>Live Demo</span>
              </a>
            ) : !demoVideoUrl ? (
              <button
                disabled
                title="Live deployment URL can be provided here"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-500 text-xs font-mono cursor-not-allowed opacity-75"
              >
                <ExternalLink className="h-3.5 w-3.5 opacity-50" />
                <span>Live Demo</span>
              </button>
            ) : null}
          </div>
        </div>
      </article>
    );
  }

  // STANDARD PROJECT CARDS (Full-Stack E-Commerce, Spott, Speed Control Car)
  return (
    <article
      id={`project-card-${project.id}`}
      className="rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 transition-all flex flex-col justify-between overflow-hidden group card-hover-effect shadow-md shadow-black/20"
    >
      <div>
        {/* Dedicated Screenshot Area */}
        {project.screenshots && project.screenshots.length > 0 ? (
          <div className="border-b border-zinc-850">
            <ProjectScreenshotGallery
              screenshots={project.screenshots}
              projectTitle={project.title}
              liveDemoUrl={project.liveDemoUrl}
              aspectRatio={isHardware ? '3/2' : '16/9'}
              variant={isHardware ? 'hardware' : 'card'}
            />
          </div>
        ) : (
          <div className="relative bg-zinc-950 border-b border-zinc-850 overflow-hidden">
            {/* Mock Browser Window Titlebar */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-zinc-850 bg-zinc-900/60">
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="h-2 w-2 rounded-full bg-zinc-700"></span>
                <span className="h-2 w-2 rounded-full bg-zinc-700"></span>
                <span className="h-2 w-2 rounded-full bg-zinc-700"></span>
              </div>

              <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-zinc-950 border border-zinc-800 text-[11px] font-mono text-zinc-400 max-w-[200px] truncate">
                <Globe className="h-3 w-3 text-zinc-500 shrink-0" />
                <span className="truncate">{getDisplayUrl()}</span>
              </div>

              <div className="w-6"></div>
            </div>

            {/* Screenshot Container Slot */}
            <div className="w-full min-h-[175px] sm:min-h-[190px] flex items-center justify-center p-3 sm:p-4 bg-zinc-950 relative overflow-hidden">
              {project.imageUrl ? (
                <img
                  src={project.imageUrl}
                  alt={`${project.title} screenshot`}
                  className="w-full h-full object-cover object-top rounded-lg border border-zinc-850"
                />
              ) : (
                /* Dedicated Screenshot Area Placeholder */
                <div className="w-full h-full min-h-[150px] sm:min-h-[165px] rounded-lg border border-dashed border-zinc-800 bg-zinc-900/25 flex flex-col items-center justify-center p-4 text-center relative overflow-hidden group-hover:border-zinc-700 transition-colors">
                  <div className="absolute inset-0 bg-dot-pattern opacity-20 pointer-events-none"></div>

                  <div className="relative z-10 flex flex-col items-center gap-2">
                    <div
                      className={`p-2.5 rounded-xl border flex items-center justify-center ${
                        isHardware
                          ? 'bg-amber-500/10 border-amber-500/30 text-amber-300'
                          : 'bg-zinc-850 border-zinc-750 text-zinc-300'
                      }`}
                    >
                      {isHardware ? (
                        <Cpu className="h-5 w-5" />
                      ) : (
                        <Laptop className="h-5 w-5" />
                      )}
                    </div>

                    <div className="space-y-0.5">
                      <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-zinc-850/80 text-[10px] font-mono text-zinc-400 border border-zinc-800">
                        <ImageIcon className="h-2.5 w-2.5 text-zinc-400" />
                        <span>Screenshot Area</span>
                      </div>
                      <p className="text-[11px] font-mono text-zinc-400 font-medium">
                        {project.title}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Content Body */}
        <div className="p-5 space-y-3.5">
          {/* Category & Hardware Badges */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-zinc-800 text-sky-400 border border-zinc-750 font-medium">
              {project.category}
            </span>

            {isHardware && (
              <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30 font-medium">
                <Cpu className="h-3 w-3" />
                Physical Hardware
              </span>
            )}
          </div>

          {/* Project Title & One-line Description */}
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-sky-300 transition-colors tracking-tight">
              {project.title}
            </h3>
            <p className="text-xs text-zinc-400 mt-1 leading-relaxed line-clamp-2">
              {project.description}
            </p>
          </div>

          {/* 3 to 5 Key Technical Features */}
          <div className="space-y-1.5 pt-2 border-t border-zinc-850">
            <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 font-semibold block">
              Key Technical Implementation:
            </span>
            {project.features.slice(0, 5).map((feature, idx) => (
              <div key={idx} className="flex items-start gap-1.5 text-xs text-zinc-300">
                <Check className="h-3.5 w-3.5 text-sky-400 shrink-0 mt-0.5" />
                <span className="leading-snug">{feature}</span>
              </div>
            ))}
          </div>

          {/* Technology Badges */}
          <div className="pt-1">
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800/80 border border-zinc-750 text-zinc-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Card Action Buttons: GitHub, Demo Video, and Live Demo */}
      <div className="p-5 pt-0 mt-1 flex items-center gap-2.5">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            id={`project-${project.id}-github-btn`}
            className={`${!project.liveDemoUrl && !demoVideoUrl ? 'w-full' : 'flex-1'} inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-zinc-850 hover:bg-zinc-800 text-zinc-200 border border-zinc-750 text-xs font-medium transition-colors`}
          >
            <GithubIcon className="h-3.5 w-3.5" />
            <span>GitHub</span>
          </a>
        )}

        {demoVideoUrl && (
          <a
            href={demoVideoUrl}
            target="_blank"
            rel="noopener noreferrer"
            id={`project-${project.id}-video-btn`}
            className={`${!project.githubUrl && !project.liveDemoUrl ? 'w-full' : 'flex-1'} inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 text-xs font-semibold transition-all shadow-sm active:scale-95`}
          >
            <Play className="h-3.5 w-3.5" fill="currentColor" />
            <span>Demo Video</span>
          </a>
        )}

        {project.liveDemoUrl ? (
          <a
            href={project.liveDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
            id={`project-${project.id}-demo-btn`}
            className={`${!project.githubUrl && !demoVideoUrl ? 'w-full' : 'flex-1'} inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 text-xs font-semibold transition-all shadow-sm active:scale-95`}
          >
            <ExternalLink className="h-3.5 w-3.5" />
            <span>Live Demo</span>
          </a>
        ) : !isHardware && !demoVideoUrl ? (
          <button
            disabled
            title="Live demo link can be provided here"
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-500 text-xs font-mono cursor-not-allowed opacity-75"
          >
            <ExternalLink className="h-3.5 w-3.5 opacity-50" />
            <span>Live Demo</span>
          </button>
        ) : null}
      </div>
    </article>
  );
}
