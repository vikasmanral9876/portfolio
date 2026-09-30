'use client';

import React, { useState } from 'react';
import {
  Layout,
  Server,
  Database,
  ShieldCheck,
  Bot,
  Terminal,
  Wrench,
  CheckCircle2,
} from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

export default function Skills() {
  const { skillCategories } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return <Layout className="h-4 w-4 text-sky-400" />;
      case 'Server':
        return <Server className="h-4 w-4 text-indigo-400" />;
      case 'Database':
        return <Database className="h-4 w-4 text-emerald-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="h-4 w-4 text-amber-400" />;
      case 'Bot':
        return <Bot className="h-4 w-4 text-cyan-400" />;
      case 'Terminal':
        return <Terminal className="h-4 w-4 text-purple-400" />;
      case 'Wrench':
        return <Wrench className="h-4 w-4 text-rose-400" />;
      default:
        return <Layout className="h-4 w-4 text-sky-400" />;
    }
  };

  const filteredCategories =
    selectedCategory === 'all'
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === selectedCategory);

  return (
    <section id="skills" className="py-14 sm:py-16 border-t border-zinc-900 bg-zinc-950 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
          <div>
            <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider block mb-1">
              Technical Skills
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Skills & Technology Stack
            </h2>
            <p className="text-sm text-zinc-400 mt-1.5 max-w-xl">
              Categorized technologies utilized across the software development lifecycle, from client interface to server systems and data architecture.
            </p>
          </div>

          {/* Quick Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-zinc-900/60 border border-zinc-800 text-xs font-sans">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-zinc-800 text-white font-medium shadow-xs'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              All Categories
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-zinc-800 text-white font-medium shadow-xs'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {cat.title.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-850 hover:border-zinc-750 transition-all flex flex-col justify-between group card-hover-effect"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-zinc-850 border border-zinc-800">
                      {getCategoryIcon(category.icon)}
                    </div>
                    <h3 className="text-base font-semibold text-zinc-100 font-sans">
                      {category.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-zinc-400 mb-3.5 leading-relaxed">
                  {category.description}
                </p>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono transition-colors ${
                        skill.isKeySkill
                          ? 'bg-zinc-800/90 text-zinc-100 border border-zinc-700/80 shadow-xs'
                          : 'bg-zinc-900 text-zinc-400 border border-zinc-800/60'
                      }`}
                    >
                      {skill.isKeySkill && (
                        <CheckCircle2 className="h-3 w-3 text-sky-400 shrink-0" />
                      )}
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Stack Architecture Footnote */}
        <div className="mt-8 p-3.5 sm:p-4 rounded-xl bg-zinc-900/30 border border-zinc-850 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
            <span>
              <strong>Engineering Practice:</strong> Modular code structure, component-driven design, and API testing with Postman.
            </span>
          </div>
          <span className="font-mono text-zinc-500 text-[11px]">
            React • Next.js • Node.js • Express • MongoDB • Java
          </span>
        </div>

      </div>
    </section>
  );
}
