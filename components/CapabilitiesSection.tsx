import React from 'react';
import { CAPABILITIES } from '@/data/portfolio';
import { Terminal, Shield, Zap, Sparkles } from 'lucide-react';

export function CapabilitiesSection() {
  const icons = [Terminal, Zap, Sparkles, Shield];

  return (
    <section id="architecture" className="py-24 md:py-36">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
        <div>
          <span className="text-electric-apricot text-sm font-semibold tracking-normal mb-3 block">
            Specialization &amp; Disciplines
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold text-warm-ivory tracking-tight">
            Technical Rigor
          </h2>
        </div>
        <p className="text-natural-taupe max-w-md text-base sm:text-lg leading-relaxed">
          Four foundational engineering areas combining scalable cloud architecture,
          agentic system design, and high-craft frontend interfaces.
        </p>
      </div>

      {/* Capabilities 2x2 Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {CAPABILITIES.map((cap, index) => {
          const IconComponent = icons[index % icons.length];
          return (
            <div
              key={cap.area}
              className="bg-soft-charcoal rounded-xl p-8 sm:p-10 flex flex-col justify-between gap-10"
            >
              <div className="flex flex-col gap-5">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded bg-organic-olive flex items-center justify-center text-electric-apricot">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="text-xs text-taupe-muted">
                    Pillar {['I', 'II', 'III', 'IV'][index]}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-bold text-warm-ivory">
                  {cap.area}
                </h3>

                <p className="text-base sm:text-lg text-natural-taupe leading-relaxed">
                  {cap.statement}
                </p>
              </div>

              <div className="flex flex-wrap gap-2.5 pt-6">
                {cap.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-obsidian text-warm-ivory rounded text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
