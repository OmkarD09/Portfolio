'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowDown, Code2, Cpu, GitBranch, Layers } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function IntroNarrative() {
  const containerRef = useRef<HTMLElement>(null);
  const textBlockRef = useRef<HTMLParagraphElement>(null);
  const pillarsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;

      if (prefersReducedMotion) return;

      // Scrubbed typography reveal: text highlights as visitor scrolls
      const words = textBlockRef.current?.querySelectorAll('.scrub-word');
      if (words && words.length > 0) {
        gsap.fromTo(
          words,
          { color: '#9F886F', opacity: 0.6 },
          {
            color: '#F5E6C5',
            opacity: 1,
            stagger: 0.04,
            scrollTrigger: {
              trigger: textBlockRef.current,
              start: 'top 80%',
              end: 'bottom 50%',
              scrub: 0.8,
            },
          }
        );
      }

      // Staggered architectural cards reveal
      const cards = pillarsRef.current?.querySelectorAll('.pillar-block');
      if (cards && cards.length > 0) {
        gsap.fromTo(
          cards,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.12,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: pillarsRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    },
    { scope: containerRef }
  );

  const statementWords = [
    'I',
    'engineer',
    'full-stack',
    'web',
    'systems',
    'that',
    'turn',
    'complex',
    'technical',
    'primitives',
    'into',
    'intuitive,',
    'high-craft',
    'software.',
    'From',
    'on-device',
    'AI',
    'models',
    'operating',
    'without',
    'cloud',
    'dependencies,',
    'to',
    'AST',
    'codebase',
    'analyzers',
    'and',
    'civic',
    'data',
    'infrastructure,',
    'my',
    'work',
    'prioritizes',
    'algorithmic',
    'rigor,',
    'verifiable',
    'resilience,',
    'and',
    'tactile',
    'product',
    'clarity.',
  ];

  const pillars = [
    {
      icon: Layers,
      title: 'Full-Stack Architecture',
      spec: 'Next.js 16 · React 19 · Turbopack · Deterministic Data Contracts',
    },
    {
      icon: Cpu,
      title: 'Edge & On-Device AI',
      spec: 'Gemma 2 · ONNX Runtime WASM · Client-Side Vector Cosine Similarity',
    },
    {
      icon: GitBranch,
      title: 'Developer Tooling & AST',
      spec: 'Static Abstract Syntax Tree Traversal · Automated Dependency Defense',
    },
    {
      icon: Code2,
      title: 'Civic Data Systems',
      spec: 'Public Disclosure Normalization · 227 Ward Geospatial Pipelines',
    },
  ];

  return (
    <section
      id="intro"
      ref={containerRef}
      className="py-24 sm:py-32 md:py-40 flex flex-col justify-center min-h-[90vh]"
    >
      <div className="flex flex-col gap-12 sm:gap-16">
        {/* Section Overline & Intent */}
        <div className="flex items-center gap-3 text-xs text-natural-taupe">
          <span className="w-2 h-2 rounded-full bg-electric-apricot" />
          <span className="font-semibold text-warm-ivory tracking-wide">
            ENGINEERING PHILOSOPHY &amp; APPROACH
          </span>
          <span className="text-taupe-muted">/</span>
          <span className="text-natural-taupe">01 PERSPECTIVE</span>
        </div>

        {/* Scrubbed Narrative Statement */}
        <p
          ref={textBlockRef}
          className="text-base sm:text-lg md:text-xl lg:text-[1.75rem] font-display font-bold leading-[1.5] tracking-tight max-w-4xl text-natural-taupe"
        >
          {statementWords.map((word, idx) => (
            <span
              key={`${word}-${idx}`}
              className="scrub-word inline-block mr-2 sm:mr-3 transition-colors duration-200"
            >
              {word === 'software.' || word === 'clarity.' ? (
                <span className="text-warm-ivory">
                  {word.slice(0, -1)}
                  <span className="text-electric-apricot">.</span>
                </span>
              ) : (
                word
              )}
            </span>
          ))}
        </p>

        {/* Four Architectural Focus Areas (Editorial Column Split) */}
        <div
          ref={pillarsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-4"
        >
          {pillars.map((pillar) => {
            return (
              <div
                key={pillar.title}
                className="pillar-block flex flex-col gap-2"
              >
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-electric-apricot" />
                  <h3 className="text-sm sm:text-base font-semibold text-warm-ivory font-display">
                    {pillar.title}
                  </h3>
                </div>
                <p className="text-xs text-natural-taupe leading-relaxed">
                  {pillar.spec}
                </p>
              </div>
            );
          })}
        </div>

        {/* Navigation Indicator into Showcase */}
        <div className="pt-8 flex items-center justify-between text-xs text-natural-taupe">
          <span className="text-taupe-muted">
            ARCHITECTURE IN PRACTICE // FIVE ACTIVE CASE STUDIES
          </span>

          <a
            href="#projects"
            className="group inline-flex items-center gap-2 text-warm-ivory hover:text-electric-apricot transition-colors duration-200 cursor-pointer"
          >
            <span>Proceed to pinned showcase</span>
            <ArrowDown className="w-3.5 h-3.5 text-electric-apricot transition-transform duration-200 group-hover:translate-y-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
