'use client';

import React, { useEffect, useRef } from 'react';
import { X, Download, ExternalLink, FileText } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      id="resume-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
    >
      <div
        ref={modalRef}
        id="resume-modal-container"
        className="relative w-full max-w-5xl h-[92vh] sm:h-[90vh] bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-zinc-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-3.5 sm:px-6 py-3 border-b border-zinc-800 bg-zinc-900/90 backdrop-blur-sm shrink-0">
          <div className="flex items-center gap-2 min-w-0 pr-2">
            <FileText className="h-4 w-4 text-sky-400 shrink-0" aria-hidden="true" />
            <span
              id="resume-modal-title"
              className="text-xs sm:text-sm font-mono font-medium text-zinc-200 truncate"
              title="Vikas-Manral-Resume.pdf"
            >
              Vikas-Manral-Resume.pdf
            </span>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Open in New Tab Button */}
            <a
              href="/resume/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              id="resume-open-tab-btn"
              title="Open resume in new tab"
              aria-label="Open resume in new tab"
              className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-750 text-zinc-300 hover:text-white text-xs font-mono transition-colors border border-zinc-700/60 cursor-pointer focus:outline-hidden focus:ring-1 focus:ring-sky-500"
            >
              <ExternalLink className="h-3.5 w-3.5 text-sky-400" aria-hidden="true" />
              <span className="hidden sm:inline">Open in Tab</span>
            </a>

            {/* Direct Download Button */}
            <a
              href="/resume/resume.pdf"
              download="Vikas-Manral-Resume.pdf"
              id="resume-download-btn"
              title="Download Vikas Manral Resume PDF"
              aria-label="Download Resume"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 text-xs font-mono font-semibold transition-all shadow-xs active:scale-95 cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-sky-500"
            >
              <Download className="h-3.5 w-3.5" aria-hidden="true" />
              <span className="hidden sm:inline">Download Resume</span>
              <span className="sm:hidden">Download</span>
            </a>

            {/* Close Button */}
            <button
              ref={closeButtonRef}
              onClick={onClose}
              id="close-resume-modal-btn"
              aria-label="Close Resume Preview"
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors ml-0.5 sm:ml-1 cursor-pointer focus:outline-hidden focus:ring-1 focus:ring-zinc-400"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Embedded PDF Viewer Area */}
        <div className="relative flex-1 w-full bg-zinc-900 overflow-hidden flex flex-col">
          <iframe
            src="/resume/resume.pdf#view=FitH"
            title="Vikas Manral Resume PDF Preview"
            className="w-full h-full border-0 bg-zinc-900"
          />
        </div>
      </div>
    </div>
  );
}
