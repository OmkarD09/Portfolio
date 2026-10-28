import React from 'react';
import { Eye, ShieldAlert, Sliders, Sparkles } from 'lucide-react';

export function PrinciplesSection() {
  const principles = [
    {
      title: 'Out-of-Distribution Craft',
      description:
        'Reject generic templates, linear rainbow gradients, and predictable card-in-card layouts. Software interfaces should possess distinct editorial identity, physical weight, and bespoke character.',
      icon: Eye,
    },
    {
      title: 'Deterministic AI Systems',
      description:
        'Avoid superficial chat wrappers. Build agentic workflows anchored by strict schema validation, offline-first vector retrieval, structured outputs, and zero hallucination tolerance.',
      icon: Sliders,
    },
    {
      title: 'Truth in Engineering',
      description:
        'No vanity numbers, fabricated metrics, or speculative claims. Real software is evaluated through verified performance, uptime stability, clean maintainability, and tactile usability.',
      icon: ShieldAlert,
    },
    {
      title: 'Uncompromising Accessibility',
      description:
        'High contrast ratios (14.8:1 AAA Ivory on Obsidian), fluid keyboard navigation, semantic DOM hierarchy, and universal respect for prefers-reduced-motion preferences.',
      icon: Sparkles,
    },
  ];

  return (
    <section id="ethos" className="py-24 md:py-36">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
        <div>
          <span className="text-electric-apricot text-sm font-semibold tracking-normal mb-3 block">
            Engineering Ethos
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold text-warm-ivory tracking-tight">
            Design &amp; Code Principles
          </h2>
        </div>
        <p className="text-natural-taupe max-w-md text-base sm:text-lg leading-relaxed">
          The non-negotiable standards governing architecture, performance budgets,
          and aesthetic discernment across every deployed system.
        </p>
      </div>

      {/* Principles 4-Column Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {principles.map((p, idx) => {
          const Icon = p.icon;
          return (
            <div
              key={p.title}
              className="bg-soft-charcoal rounded-xl p-8 flex flex-col justify-between gap-8"
            >
              <div className="flex flex-col gap-4">
                <div className="w-10 h-10 rounded bg-organic-olive flex items-center justify-center text-electric-apricot">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-display font-bold text-warm-ivory">
                  {p.title}
                </h3>
                <p className="text-sm sm:text-base text-natural-taupe leading-relaxed">
                  {p.description}
                </p>
              </div>

              <div className="text-xs text-taupe-muted font-medium pt-6">
                Standard {['I', 'II', 'III', 'IV'][idx]}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
