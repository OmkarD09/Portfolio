'use client';

import React from 'react';
import { Mail, Globe, Code2, ArrowUpRight, ArrowUp } from 'lucide-react';

export function FooterSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="pt-28 pb-20 bg-obsidian text-warm-ivory">
      {/* Monumental Wordmark Anchor */}
      <div className="pb-20 mb-20">
        <span className="text-electric-apricot text-sm font-semibold tracking-normal mb-4 block">
          Initiate Conversation
        </span>
        <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-extrabold tracking-tight text-warm-ivory leading-[0.95]">
          Let’s build what’s next.
        </h2>
      </div>

      {/* Contact Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-20">
        {/* Direct Email Connection */}
        <div className="md:col-span-6 flex flex-col gap-4">
          <span className="text-sm font-semibold text-natural-taupe">
            Direct Inquiries
          </span>
          <a
            href="mailto:contact@omkar.dev"
            className="text-2xl sm:text-4xl font-display font-bold text-warm-ivory hover:text-electric-apricot transition-colors duration-200 inline-flex items-center gap-3 self-start"
          >
            <span>contact@omkar.dev</span>
            <ArrowUpRight className="w-6 h-6 text-electric-apricot" />
          </a>
          <p className="text-base text-natural-taupe max-w-md leading-relaxed mt-2">
            Available for principal engineering roles, AI systems advisory, and
            challenging full-stack initiatives with high technical complexity.
          </p>
        </div>

        {/* Network & Presence Links */}
        <div className="md:col-span-3 flex flex-col gap-4">
          <span className="text-sm font-semibold text-natural-taupe">
            Profiles &amp; Code
          </span>
          <a
            href="https://github.com/omkardhakane"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-base text-warm-ivory hover:text-electric-apricot transition-colors duration-200"
          >
            <Code2 className="w-4 h-4 text-natural-taupe" />
            <span>GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-natural-taupe" />
          </a>
          <a
            href="https://linkedin.com/in/omkardhakane"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-base text-warm-ivory hover:text-electric-apricot transition-colors duration-200"
          >
            <Globe className="w-4 h-4 text-natural-taupe" />
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-natural-taupe" />
          </a>
          <a
            href="mailto:contact@omkar.dev"
            className="inline-flex items-center gap-2 text-base text-warm-ivory hover:text-electric-apricot transition-colors duration-200"
          >
            <Mail className="w-4 h-4 text-natural-taupe" />
            <span>Email</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-natural-taupe" />
          </a>
        </div>

        {/* System Specs Column */}
        <div className="md:col-span-3 flex flex-col gap-4">
          <span className="text-sm font-semibold text-natural-taupe">
            System Spec
          </span>
          <div className="flex flex-col gap-2 text-sm text-natural-taupe">
            <div>Framework: Next.js 16 App Router</div>
            <div>Runtime: React 19 + Turbopack</div>
            <div>Palette: Dark Organic (#151515)</div>
            <div>A11y: WCAG AAA Compliant</div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-natural-taupe">
        <div>
          © {new Date().getFullYear()} Omkar Dhakane. All rights reserved.
        </div>

        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 text-warm-ivory hover:text-electric-apricot transition-colors cursor-pointer"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
}
