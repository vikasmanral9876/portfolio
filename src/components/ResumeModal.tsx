'use client';

import React, { useEffect } from 'react';
import { X, Download, ExternalLink, FileText } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
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
        id="resume-modal-container"
        className="relative w-full max-w-5xl h-[88vh] sm:h-[90vh] bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-zinc-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-3.5 sm:px-6 py-3 border-b border-zinc-800 bg-zinc-900/80 backdrop-blur-sm shrink-0">
          <div className="flex items-center gap-2 min-w-0 pr-2">
            <FileText className="h-4 w-4 text-sky-400 shrink-0" />
            <span
              id="resume-modal-title"
              className="text-xs sm:text-sm font-mono font-medium text-zinc-200 truncate"
              title="Vikas_Manral_Resume.pdf"
            >
              Vikas_Manral_Resume.pdf
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
              className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white text-xs font-mono transition-colors border border-zinc-700/60 cursor-pointer"
            >
              <ExternalLink className="h-3.5 w-3.5 text-sky-400" />
              <span className="hidden sm:inline">Open in Tab</span>
            </a>

            {/* Direct Download Button */}
            <a
              href="/resume/resume.pdf"
              download="Vikas-Manral-Resume.pdf"
              id="resume-download-btn"
              title="Download Vikas Manral Resume PDF"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 text-xs font-mono font-semibold transition-all shadow-xs active:scale-95 cursor-pointer"
            >
              <Download className="h-3.5 w-3.5" />
              <span className="hidden xs:inline sm:inline">Download PDF</span>
              <span className="inline xs:hidden sm:hidden">Download</span>
            </a>

            {/* Close Button */}
            <button
              onClick={onClose}
              id="close-resume-modal-btn"
              aria-label="Close Resume Preview"
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors ml-0.5 sm:ml-1 cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Embedded PDF Viewer Area */}
        <div className="relative flex-1 w-full bg-zinc-900/50 overflow-hidden flex flex-col items-center justify-center">
          <object
            data="/resume/resume.pdf"
            type="application/pdf"
            className="w-full h-full rounded-b-2xl border-0"
            aria-label="Vikas Manral Resume PDF"
          >
            {/* Graceful Fallback if browser/device cannot render embedded PDF */}
            <div className="flex flex-col items-center justify-center h-full p-6 sm:p-8 text-center bg-zinc-950 text-zinc-300 space-y-4">
              <div className="h-14 w-14 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-sky-400 shadow-md">
                <FileText className="h-7 w-7" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm sm:text-base font-semibold text-white">
                  PDF Preview Unavailable
                </h3>
                <p className="text-xs text-zinc-400 max-w-sm">
                  Your browser or device does not support embedded PDF viewing. You can open or download the PDF file directly.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <a
                  href="/resume/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-850 text-zinc-200 border border-zinc-800 hover:border-zinc-700 text-xs font-mono transition-colors"
                >
                  <ExternalLink className="h-4 w-4 text-sky-400" />
                  <span>Open in New Tab</span>
                </a>
                <a
                  href="/resume/resume.pdf"
                  download="Vikas-Manral-Resume.pdf"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 text-xs font-mono font-semibold transition-colors"
                >
                  <Download className="h-4 w-4" />
                  <span>Download PDF</span>
                </a>
              </div>
            </div>
          </object>
        </div>
      </div>
    </div>
  );
}
