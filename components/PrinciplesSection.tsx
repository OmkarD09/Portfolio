'use client';

import React from 'react';
import { Eye, ShieldAlert, Sliders, Sparkles } from 'lucide-react';

export function PrinciplesSection() {
  const principles = [
    {
      title: 'Out-of-Distribution Craft',
      description:
        'Reject generic templates, linear rainbow gradients, and predictable box-in-box layouts. Software interfaces should possess distinct editorial identity, physical weight, and bespoke character.',
      highlight: 'Editorial character over cookie-cutter boilerplate.',
    },
    {
      title: 'Deterministic AI Systems',
      description:
        'Avoid superficial chat wrappers. Build agentic workflows anchored by strict schema validation, offline-first vector retrieval, structured outputs, and zero hallucination tolerance.',
      highlight: 'Validated schemas over stochastic unpredictability.',
    },
    {
      title: 'Truth in Engineering',
      description:
        'No vanity numbers, fabricated metrics, or speculative claims. Real software is evaluated through verified performance, uptime stability, clean maintainability, and tactile usability.',
      highlight: 'Verifiable implementation over speculative claims.',
    },
    {
      title: 'Uncompromising Accessibility',
      description:
        'High contrast ratios (14.8:1 AAA Ivory on Obsidian), fluid keyboard navigation, semantic DOM hierarchy, and universal respect for prefers-reduced-motion preferences.',
      highlight: 'Universal usability engineered from day one.',
    },
  ];

  return (
    <section id="ethos" className="py-24 md:py-36">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-20">
        <div>
          <span className="text-electric-apricot text-xs font-semibold tracking-wide mb-3 block">
            CORE PHILOSOPHY &amp; ETHOS
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-warm-ivory tracking-tight">
            Engineering Principles
          </h2>
        </div>
        <p className="text-natural-taupe max-w-md text-sm sm:text-base leading-relaxed">
          Four non-negotiable standards guiding architectural decisions, code
          quality, and product craft across all software systems.
        </p>
      </div>

      {/* Manifesto 2-Column Asymmetric Rhythm (Non-card layout) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        {principles.map((item, index) => (
          <div
            key={item.title}
            className="flex flex-col gap-4 border-l-2 border-charcoal-border pl-6 hover:border-electric-apricot transition-colors duration-300"
          >
            <samp className="font-mono text-xs text-electric-apricot font-semibold">
              PRINCIPLE // 0{index + 1}
            </samp>

            <h3 className="text-xl sm:text-2xl font-display font-bold text-warm-ivory">
              {item.title}
            </h3>

            <p className="text-base text-natural-taupe leading-relaxed">
              {item.description}
            </p>

            <span className="text-xs font-medium text-warm-ivory/80 pt-1">
              &rarr; {item.highlight}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
