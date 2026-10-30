'use client';

import React from 'react';
import { CAPABILITIES } from '@/data/portfolio';
import { ArrowUpRight, Terminal } from 'lucide-react';

export function CapabilitiesSection() {
  return (
    <section id="architecture" className="py-24 md:py-36">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-20">
        <div>
          <span className="text-electric-apricot text-xs font-semibold tracking-wide mb-3 block">
            SPECIALIZATION &amp; DISCIPLINES
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-warm-ivory tracking-tight">
            Technical Rigor
          </h2>
        </div>
        <p className="text-natural-taupe max-w-md text-sm sm:text-base leading-relaxed">
          Four foundational engineering areas combining scalable web
          architecture, agentic system design, and high-craft developer tooling.
        </p>
      </div>

      {/* Editorial Capabilities Dossier (Non-card, typography-first composition) */}
      <div className="flex flex-col gap-10 md:gap-14">
        {CAPABILITIES.map((cap, index) => (
          <div
            key={cap.area}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start group transition-colors duration-200"
          >
            {/* Column 1: Index & Discipline Title (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-2">
              <samp className="font-mono text-xs text-electric-apricot font-semibold">
                DISCIPLINE // 0{index + 1}
              </samp>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-warm-ivory group-hover:text-electric-apricot transition-colors duration-200">
                {cap.area}
              </h3>
            </div>

            {/* Column 2: Statement & Tech Stack (7 cols) */}
            <div className="lg:col-span-7 flex flex-col gap-5">
              <p className="text-base sm:text-lg text-natural-taupe font-normal leading-relaxed">
                {cap.statement}
              </p>

              {/* Verified Technologies Pill Badges */}
              <div className="flex flex-wrap gap-2">
                {cap.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-soft-charcoal/80 text-warm-ivory/90 rounded text-xs border border-charcoal-border/70"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
