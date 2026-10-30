'use client';

import React from 'react';
import { Mail, Globe, Code2, ArrowUpRight, ArrowUp } from 'lucide-react';

export function FooterSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="pt-28 pb-16 bg-obsidian text-warm-ivory">
      {/* Monumental Kinetic Headline */}
      <div className="pb-16 md:pb-24">
        <span className="text-electric-apricot text-xs font-semibold tracking-wide mb-4 block">
          INITIATE CONVERSATION
        </span>

        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.2rem] xl:text-[6.2rem] font-display font-extrabold tracking-tight text-warm-ivory leading-[1.0] sm:leading-[0.98]">
          <span className="block overflow-hidden whitespace-nowrap">
            LET&apos;S BUILD
          </span>
          <span className="block overflow-hidden whitespace-nowrap text-warm-ivory mt-2 sm:mt-3">
            WHAT&apos;S NEXT<span className="text-electric-apricot">.</span>
          </span>
        </h2>
      </div>

      {/* Main Footer Interaction Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16">
        {/* Left Column: Direct Invitation & Positioning (6 cols) */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          <p className="text-base sm:text-lg text-natural-taupe max-w-lg leading-relaxed">
            I am currently open to engineering roles, ambitious product collaborations,
            and high-impact developer tooling initiatives. If you are building something
            rigorous, let&apos;s talk.
          </p>

          <div className="flex flex-col gap-2 pt-2">
            <span className="text-xs text-taupe-muted font-medium">DIRECT CHANNEL</span>
            <a
              href="mailto:dhakaneomkar009@gmail.com"
              className="text-xl sm:text-2xl font-display font-bold text-warm-ivory hover:text-electric-apricot transition-colors duration-200 self-start"
            >
              dhakaneomkar009@gmail.com
            </a>
          </div>
        </div>

        {/* Right Column: Verified Network & Repositories (6 cols) */}
        <div className="lg:col-span-6 flex flex-col justify-between gap-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="https://github.com/OmkarD09"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 bg-soft-charcoal/80 rounded-lg border border-charcoal-border hover:border-electric-apricot/50 transition-colors flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <Code2 className="w-4 h-4 text-electric-apricot" />
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-warm-ivory">GitHub</span>
                  <span className="text-xs text-natural-taupe">@OmkarD09</span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-natural-taupe group-hover:text-electric-apricot group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href="https://linkedin.com/in/omkardhakane"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 bg-soft-charcoal/80 rounded-lg border border-charcoal-border hover:border-electric-apricot/50 transition-colors flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-electric-apricot" />
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-warm-ivory">LinkedIn</span>
                  <span className="text-xs text-natural-taupe">omkardhakane</span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-natural-taupe group-hover:text-electric-apricot group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Quick Scroll to Top */}
          <button
            type="button"
            onClick={scrollToTop}
            className="group self-start inline-flex items-center gap-2 text-xs text-natural-taupe hover:text-warm-ivory transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-electric-apricot transition-transform duration-200 group-hover:-translate-y-1" />
          </button>
        </div>
      </div>

      {/* Bottom Metadata Bar */}
      <div className="pt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-taupe-muted">
        <div>
          <span>&copy; {new Date().getFullYear()} Omkar Dhakane.</span>
          <span className="ml-2">Crafted with Next.js 16, React 19 &amp; GSAP.</span>
        </div>

        <div className="flex items-center gap-4">
          <samp className="font-mono text-[11px]">BASED IN // MUMBAI, INDIA</samp>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
        </div>
      </div>
    </footer>
  );
}
