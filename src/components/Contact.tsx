'use client';

import React, { useState } from 'react';
import { portfolioData } from '@/data/portfolioData';
import { Mail, Copy, Check, Send, CheckCircle2, MessageSquare, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Contact() {
  const { socialLinks } = portfolioData;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    roleOrSubject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(socialLinks.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setErrorMessage('Please fill in your name, email, and message.');
      return;
    }

    setIsSubmitting(true);

    // Simulate clean dispatch with prompt feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 border-t border-zinc-900 bg-zinc-950/70 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider block mb-1">
            Contact
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Connect & Discuss Opportunities
          </h2>
          <p className="text-sm text-zinc-400 mt-1.5 max-w-xl">
            Currently interviewing for Software Developer, Full-Stack Developer, and Frontend/Backend roles. Feel free to reach out directly via email or the form below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Channels & Socials */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Email Card */}
            <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-850 hover:border-zinc-750 transition-all card-hover-effect">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-zinc-400">Direct Email</span>
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
              </div>

              <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-zinc-950 border border-zinc-800">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <Mail className="h-4 w-4 text-sky-400 shrink-0" />
                  <span className="text-xs sm:text-sm font-mono text-zinc-200 truncate select-all">
                    {socialLinks.email}
                  </span>
                </div>

                <button
                  onClick={handleCopyEmail}
                  id="copy-email-btn"
                  title="Copy email to clipboard"
                  className="p-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-750 text-xs transition-colors shrink-0 cursor-pointer"
                >
                  {copiedEmail ? (
                    <Check className="h-4 w-4 text-emerald-400" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>

              {copiedEmail && (
                <p className="text-[11px] font-mono text-emerald-400 mt-2 flex items-center gap-1">
                  <CheckCircle2 className="h-3 w-3" />
                  Email address copied to clipboard!
                </p>
              )}

              <div className="pt-4 mt-4 border-t border-zinc-850/60 flex items-center justify-between">
                <a
                  href={`mailto:${socialLinks.email}`}
                  id="send-direct-email-link"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-sky-400 hover:text-sky-300 font-medium"
                >
                  <span>Open in Mail Client</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
                <span className="text-[11px] text-zinc-500 font-mono">Response within 24h</span>
              </div>
            </div>

            {/* Social Channels */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-github-card"
                className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-850 hover:border-zinc-700 transition-all card-hover-effect flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-2">
                  <GithubIcon className="h-5 w-5 text-zinc-200" />
                  <ArrowUpRight className="h-3.5 w-3.5 text-zinc-500" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-white">GitHub</h4>
                  <p className="text-[11px] font-mono text-zinc-400">@vikasmanral9876</p>
                </div>
              </a>

              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-linkedin-card"
                className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-850 hover:border-zinc-700 transition-all card-hover-effect flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-2">
                  <LinkedinIcon className="h-5 w-5 text-sky-400" />
                  <ArrowUpRight className="h-3.5 w-3.5 text-zinc-500" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-white">LinkedIn</h4>
                  <p className="text-[11px] font-mono text-zinc-400 truncate">/in/vikas-manral-942aa6201</p>
                </div>
              </a>
            </div>

            {/* Availability Box */}
            <div className="p-4 rounded-xl bg-zinc-900/20 border border-zinc-850 text-xs text-zinc-400 space-y-1.5 font-mono">
              <div className="flex items-center gap-2 text-zinc-200 font-semibold">
                <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                <span>Role Availability</span>
              </div>
              <p className="text-[11px] text-zinc-400">
                Full-Time Software Developer • Full-Stack Engineer • Frontend/Backend Developer Roles
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/40 border border-zinc-850">
              
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="h-4 w-4 text-sky-400" />
                <h3 className="text-base font-semibold text-white">
                  Send a Direct Message
                </h3>
              </div>

              {submitted ? (
                <div
                  id="contact-success-banner"
                  className="p-6 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-center space-y-3 animate-in fade-in zoom-in-95 duration-200"
                >
                  <div className="h-10 w-10 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <Check className="h-5 w-5" />
                  </div>
                  <h4 className="text-sm font-semibold text-white">
                    Thank You, {formState.name}!
                  </h4>
                  <p className="text-xs text-zinc-300 max-w-sm mx-auto leading-relaxed">
                    Your message has been received. You can also reach out directly at{' '}
                    <strong className="text-emerald-300">{socialLinks.email}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({ name: '', email: '', roleOrSubject: '', message: '' });
                    }}
                    className="text-xs font-mono text-sky-400 hover:underline pt-2 cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="p-3 rounded-lg bg-red-950/40 border border-red-500/30 text-xs text-red-300">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-mono text-zinc-400 mb-1.5"
                      >
                        Your Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-zinc-200 placeholder:text-zinc-600 focus:outline-hidden focus:border-sky-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-mono text-zinc-400 mb-1.5"
                      >
                        Your Email <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-zinc-200 placeholder:text-zinc-600 focus:outline-hidden focus:border-sky-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block text-xs font-mono text-zinc-400 mb-1.5"
                    >
                      Role or Subject
                    </label>
                    <input
                      type="text"
                      id="contact-subject"
                      value={formState.roleOrSubject}
                      onChange={(e) => setFormState({ ...formState, roleOrSubject: e.target.value })}
                      placeholder="e.g. Full-Stack Developer Opportunity / Interview"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-zinc-200 placeholder:text-zinc-600 focus:outline-hidden focus:border-sky-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-mono text-zinc-400 mb-1.5"
                    >
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Share details about the role, technical team, or collaboration opportunity..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-zinc-200 placeholder:text-zinc-600 focus:outline-hidden focus:border-sky-500 transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    id="contact-submit-btn"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 font-medium text-xs transition-all shadow-xs disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Sending message...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="h-3.5 w-3.5" />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
