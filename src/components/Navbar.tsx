'use client';

import React, { useState, useEffect } from 'react';
import { Terminal, Menu, X, FileText, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

export default function Navbar({ onOpenResume }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'skills', 'projects', 'journey', 'dsa', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Journey', href: '#journey' },
    { name: 'DSA', href: '#dsa' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-zinc-950/85 backdrop-blur-md border-b border-zinc-800/80 shadow-lg shadow-black/40 py-3'
          : 'bg-transparent border-b border-transparent py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#hero"
          id="nav-brand-logo"
          className="group flex items-center gap-2.5 text-zinc-100 hover:text-white transition-colors"
        >
          <div className="h-8 w-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-sky-400 group-hover:border-sky-500/50 transition-colors shadow-sm">
            <Terminal className="h-4 w-4" />
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-sm font-semibold tracking-tight flex items-center gap-1.5">
              <span>vikas.manral()</span>
            </span>
            <div className="flex items-center gap-1.5 text-[11px] text-zinc-400 font-sans">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="hidden sm:inline">Open to opportunities</span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-zinc-900/60 border border-zinc-800/80 rounded-full px-4 py-1.5 backdrop-blur-sm">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                id={`nav-link-${link.name.toLowerCase()}`}
                className={`text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-sky-400 bg-sky-500/10 font-semibold'
                    : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Button: Resume */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenResume}
            id="nav-resume-btn"
            aria-label="Open Resume Preview"
            className="flex items-center gap-1.5 text-xs font-medium px-3.5 py-2 rounded-lg bg-zinc-100 text-zinc-950 hover:bg-white transition-all shadow-sm hover:shadow hover:shadow-zinc-200/10 active:scale-95 cursor-pointer"
          >
            <FileText className="h-3.5 w-3.5" />
            <span>Resume</span>
            <ArrowUpRight className="h-3 w-3 text-zinc-600" />
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenResume}
            id="mobile-resume-btn"
            aria-label="Open Resume Preview"
            className="text-xs font-medium px-2.5 py-1.5 rounded-md bg-zinc-100 text-zinc-950 hover:bg-white"
          >
            Resume
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-toggle"
            aria-label="Toggle Navigation Menu"
            className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="md:hidden bg-zinc-950/95 border-b border-zinc-800/80 px-4 pt-3 pb-5 mt-2 space-y-1.5 backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-200"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-900 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
