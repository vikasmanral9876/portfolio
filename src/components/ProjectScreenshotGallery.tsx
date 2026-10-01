'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';
import {
  Globe,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  X,
  Layers,
} from 'lucide-react';
import { ProjectScreenshot } from '@/types';

interface ProjectScreenshotGalleryProps {
  screenshots: ProjectScreenshot[];
  projectTitle: string;
  liveDemoUrl?: string;
  className?: string;
  aspectRatio?: '16/9' | '1918/891' | string;
  variant?: 'primary' | 'card';
}

export default function ProjectScreenshotGallery({
  screenshots,
  projectTitle,
  liveDemoUrl,
  className = '',
  aspectRatio = '1918/891',
  variant = 'primary',
}: ProjectScreenshotGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Touch tracking for swipe gestures in lightbox
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const total = screenshots.length;
  const currentScreenshot = screenshots[activeIndex] || screenshots[0];

  const isVideoAspect = aspectRatio === '16/9' || aspectRatio === 'video';
  const aspectClass = isVideoAspect ? 'aspect-video' : 'aspect-[1918/891]';
  const imgWidth = isVideoAspect ? 1600 : 1918;
  const imgHeight = isVideoAspect ? 900 : 891;
  const thumbnailGridClass =
    variant === 'card'
      ? (total === 3 ? 'grid grid-cols-3 gap-1.5 sm:gap-2 w-full' : 'grid grid-cols-2 gap-2 w-full')
      : (total === 3 ? 'grid grid-cols-3 gap-2 w-full' : 'grid grid-cols-2 sm:grid-cols-4 gap-2 w-full');

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  }, [total]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  }, [total]);

  const handleCloseLightbox = useCallback(() => {
    setIsLightboxOpen(false);
  }, []);

  // Keyboard navigation for Lightbox: Left / Right / Escape
  useEffect(() => {
    if (!isLightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        handleCloseLightbox();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Lock body scrolling when lightbox is open
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isLightboxOpen, handleCloseLightbox, handlePrev, handleNext]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 45;

    if (distance > minSwipeDistance) {
      // Swiped left -> Next
      handleNext();
    } else if (distance < -minSwipeDistance) {
      // Swiped right -> Prev
      handlePrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const getDisplayUrl = () => {
    if (liveDemoUrl) {
      try {
        const url = new URL(liveDemoUrl);
        return url.hostname;
      } catch {
        return liveDemoUrl;
      }
    }
    return `${projectTitle.toLowerCase().replace(/\s+/g, '')}.app`;
  };

  if (!screenshots || screenshots.length === 0) {
    return null;
  }

  return (
    <div className={`w-full flex flex-col bg-zinc-950 overflow-hidden ${className}`}>
      {/* Clean Browser Chrome Window Header */}
      <div className="flex items-center justify-between px-3.5 py-2.5 border-b border-zinc-850 bg-zinc-900/80 shrink-0">
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-500/70" aria-hidden="true" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-500/70" aria-hidden="true" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" aria-hidden="true" />
        </div>

        {/* URL Pill */}
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-zinc-950 border border-zinc-800 text-xs font-mono text-zinc-300 max-w-[200px] sm:max-w-sm truncate">
          <Globe className="h-3.5 w-3.5 text-sky-400 shrink-0" aria-hidden="true" />
          <span className="truncate">{getDisplayUrl()}</span>
        </div>

        {/* Gallery counter & quick expand trigger */}
        <button
          type="button"
          onClick={() => setIsLightboxOpen(true)}
          className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-mono text-zinc-400 hover:text-sky-300 hover:bg-zinc-800/80 transition-colors focus:outline-none focus:ring-1 focus:ring-sky-400 cursor-pointer"
          title="Click to view full-size screenshots"
          aria-label="Open screenshot lightbox modal"
        >
          <Maximize2 className="h-3 w-3 text-sky-400" aria-hidden="true" />
          <span className="hidden sm:inline">Enlarge ({activeIndex + 1}/{total})</span>
          <span className="sm:hidden">{activeIndex + 1}/{total}</span>
        </button>
      </div>

      {/* Primary Screenshot View Container (Preserves original 1918x891 proportions without cropping) */}
      <div className="p-3 sm:p-4 pb-2 sm:pb-3 flex flex-col items-center">
        <div
          role="button"
          tabIndex={0}
          onClick={() => setIsLightboxOpen(true)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setIsLightboxOpen(true);
            }
          }}
          className={`w-full relative ${aspectClass} rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800/90 shadow-lg shadow-black/50 group/image cursor-pointer focus:outline-none focus:ring-2 focus:ring-sky-400/80 transition-all hover:border-sky-500/40`}
          aria-label={`Enlarge ${currentScreenshot.label} screenshot in full lightbox`}
        >
          {/* Main Active Screenshot */}
          <img
            src={currentScreenshot.src}
            alt={currentScreenshot.alt}
            width={imgWidth}
            height={imgHeight}
            decoding="async"
            loading="eager"
            className="w-full h-full object-contain bg-zinc-950 transition-opacity duration-200"
          />

          {/* Subtle Hover Action Pill */}
          <div className="absolute inset-0 bg-black/35 opacity-0 group-hover/image:opacity-100 transition-opacity flex items-center justify-center p-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-sky-400/40 text-xs font-medium text-sky-200 shadow-xl backdrop-blur-sm transform translate-y-1 group-hover/image:translate-y-0 transition-transform">
              <Maximize2 className="h-3.5 w-3.5 text-sky-400" aria-hidden="true" />
              <span>Click to view full size</span>
            </div>
          </div>

          {/* Current Screenshot Active Label Badge */}
          <div className="absolute bottom-2 left-2 z-10">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-950/85 border border-zinc-800 text-[11px] font-medium font-sans text-zinc-200 backdrop-blur-xs shadow-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
              {currentScreenshot.label}
            </span>
          </div>

          {/* Quick Counter Badge */}
          <div className="absolute bottom-2 right-2 z-10">
            <span className="px-2 py-0.5 rounded-md bg-zinc-950/80 border border-zinc-800 text-[10px] font-mono text-zinc-400 backdrop-blur-xs">
              {activeIndex + 1} / {total}
            </span>
          </div>
        </div>
      </div>

      {/* Small Thumbnail Previews Strip with Verified Functional Labels */}
      <div className="px-3 sm:px-4 pb-3 sm:pb-4 pt-1">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 font-semibold flex items-center gap-1.5">
            <Layers className="h-3 w-3 text-sky-400" aria-hidden="true" />
            Project Interface Screens ({total}):
          </span>
          <span className="text-[10px] text-zinc-500 font-mono hidden sm:inline">
            Select thumbnail to preview
          </span>
        </div>

        {/* Thumbnail Buttons Grid / Horizontal Scroll for Mobile */}
        <div
          className={thumbnailGridClass}
          role="tablist"
          aria-label={`${projectTitle} application screenshot views`}
        >
          {screenshots.map((s, idx) => {
            const isSelected = idx === activeIndex;
            return (
              <button
                key={s.src}
                type="button"
                role="tab"
                aria-selected={isSelected}
                aria-label={`View ${s.label} screenshot`}
                onClick={() => setActiveIndex(idx)}
                className={`group flex flex-col items-start text-left p-1.5 rounded-lg border transition-all cursor-pointer focus:outline-none focus:ring-1 focus:ring-sky-400 ${
                  isSelected
                    ? 'border-sky-400/80 bg-sky-950/20 ring-1 ring-sky-400/40 shadow-xs shadow-sky-500/10'
                    : 'border-zinc-850 bg-zinc-900/40 hover:bg-zinc-900 hover:border-zinc-700'
                }`}
              >
                {/* Thumbnail Image */}
                <div className={`w-full ${aspectClass} rounded-sm overflow-hidden bg-zinc-950 border border-zinc-800/80 mb-1.5 relative`}>
                  <img
                    src={s.src}
                    alt={s.alt}
                    width={isVideoAspect ? 400 : 480}
                    height={isVideoAspect ? 225 : 223}
                    loading="lazy"
                    decoding="async"
                    className={`w-full h-full object-contain transition-opacity duration-150 ${
                      isSelected ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'
                    }`}
                  />
                  {isSelected && (
                    <div className="absolute inset-0 ring-1 ring-inset ring-sky-400/50 pointer-events-none" />
                  )}
                </div>

                {/* Short Functional Label */}
                <div className="w-full flex items-center justify-between gap-1 px-0.5">
                  <span
                    className={`text-[11px] font-medium leading-tight truncate ${
                      isSelected
                        ? 'text-sky-300 font-semibold'
                        : 'text-zinc-400 group-hover:text-zinc-200'
                    }`}
                  >
                    {s.label}
                  </span>
                  <span className="text-[9px] font-mono text-zinc-500 shrink-0">
                    #{idx + 1}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Accessible Full Lightbox Modal rendered via Portal into document.body */}
      {isLightboxOpen && mounted && createPortal(
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${projectTitle} screenshot lightbox modal`}
          className="fixed inset-0 z-50 bg-zinc-950/95 backdrop-blur-md flex flex-col justify-between p-3 sm:p-5 transition-opacity duration-200 animate-in fade-in"
        >
          {/* Lightbox Top Bar */}
          <div className="flex items-center justify-between px-2 sm:px-4 py-2 border-b border-zinc-850 shrink-0">
            <div className="flex items-center gap-2.5">
              <span className="text-xs font-semibold text-white tracking-tight sm:text-sm">
                {projectTitle}
              </span>
              <span className="text-zinc-600 text-xs">•</span>
              <span className="text-xs font-medium text-sky-400">
                {currentScreenshot.label}
              </span>
              <span className="px-2 py-0.5 rounded-full bg-zinc-850 border border-zinc-750 text-[11px] font-mono text-zinc-300">
                {activeIndex + 1} / {total}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="hidden md:inline-flex text-[11px] font-mono text-zinc-400">
                Use <kbd className="px-1.5 py-0.5 rounded bg-zinc-850 border border-zinc-700 text-zinc-300">←</kbd> <kbd className="px-1.5 py-0.5 rounded bg-zinc-850 border border-zinc-700 text-zinc-300">→</kbd> to navigate, <kbd className="px-1.5 py-0.5 rounded bg-zinc-850 border border-zinc-700 text-zinc-300">Esc</kbd> to exit
              </span>

              <button
                type="button"
                onClick={handleCloseLightbox}
                className="p-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-750 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-400 cursor-pointer"
                aria-label="Close screenshot modal (Escape)"
                title="Close (Escape)"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Lightbox Main Stage with Touch Gestures */}
          <div
            className="flex-1 relative flex items-center justify-center py-2 sm:py-4 px-1 sm:px-12 overflow-hidden select-none"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Previous Navigation Button */}
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-2 sm:left-4 z-20 p-2 sm:p-3 rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-700/80 shadow-xl backdrop-blur-xs transition-all focus:outline-none focus:ring-2 focus:ring-sky-400 active:scale-95 cursor-pointer"
              aria-label="Previous screenshot (Left arrow)"
              title="Previous screenshot (Left arrow)"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
            </button>

            {/* Next Navigation Button */}
            <button
              type="button"
              onClick={handleNext}
              className="absolute right-2 sm:right-4 z-20 p-2 sm:p-3 rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-700/80 shadow-xl backdrop-blur-xs transition-all focus:outline-none focus:ring-2 focus:ring-sky-400 active:scale-95 cursor-pointer"
              aria-label="Next screenshot (Right arrow)"
              title="Next screenshot (Right arrow)"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
            </button>

            {/* Full-Scale Screenshot */}
            <div className="max-w-full max-h-[72vh] flex items-center justify-center">
              <img
                src={currentScreenshot.src}
                alt={currentScreenshot.alt}
                width={imgWidth}
                height={imgHeight}
                className="max-w-full max-h-[72vh] object-contain rounded-xl border border-zinc-800 shadow-2xl bg-zinc-950"
              />
            </div>
          </div>

          {/* Lightbox Footer & Thumbnail Switcher */}
          <div className="border-t border-zinc-850 px-2 sm:px-4 pt-2.5 pb-1 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
            {/* Screenshot Caption */}
            <div className="text-center sm:text-left">
              <p className="text-xs sm:text-sm font-medium text-zinc-200">
                {currentScreenshot.caption || currentScreenshot.label}
              </p>
              <p className="text-[11px] text-zinc-500 font-mono mt-0.5">
                Real application interface capture from {projectTitle}
              </p>
            </div>

            {/* Thumbnail Selectors inside Lightbox */}
            <div className="flex items-center gap-1.5 overflow-x-auto max-w-full py-0.5">
              {screenshots.map((s, idx) => {
                const isSelected = idx === activeIndex;
                return (
                  <button
                    key={s.src}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    className={`p-0.5 rounded-md border transition-all cursor-pointer focus:outline-none focus:ring-1 focus:ring-sky-400 ${
                      isSelected
                        ? 'border-sky-400 bg-sky-950/30 ring-1 ring-sky-400'
                        : 'border-zinc-800 opacity-60 hover:opacity-100 hover:border-zinc-700'
                    }`}
                    aria-label={`Jump to ${s.label}`}
                    title={s.label}
                  >
                    <div className={`w-14 sm:w-16 ${aspectClass} rounded-xs overflow-hidden bg-zinc-950`}>
                      <img
                        src={s.src}
                        alt=""
                        width={isVideoAspect ? 100 : 120}
                        height={56}
                        loading="lazy"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
