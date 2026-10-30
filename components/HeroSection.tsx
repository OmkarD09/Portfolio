'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ArrowDown, ArrowUpRight, Terminal, Sparkles } from 'lucide-react';
import { ArchitecturalCanvas } from '@/components/ArchitecturalCanvas';

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const headlineLine1Ref = useRef<HTMLSpanElement>(null);
  const headlineLine2Ref = useRef<HTMLSpanElement>(null);
  const identityRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const footerCueRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Check prefers-reduced-motion
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;

      if (prefersReducedMotion) {
        // Instant visual appearance without animation delays
        gsap.set(
          [
            identityRef.current,
            headlineLine1Ref.current,
            headlineLine2Ref.current,
            copyRef.current,
            ctaRef.current,
            footerCueRef.current,
          ],
          { opacity: 1, y: 0 }
        );
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Choreographed cinematic entrance sequence
      tl.fromTo(
        identityRef.current,
        { opacity: 0, y: -16 },
        { opacity: 1, y: 0, duration: 0.6 }
      )
        .fromTo(
          headlineLine1Ref.current,
          { yPercent: 110, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 0.85, ease: 'expo.out' },
          '-=0.35'
        )
        .fromTo(
          headlineLine2Ref.current,
          { yPercent: 110, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 0.85, ease: 'expo.out' },
          '-=0.7'
        )
        .fromTo(
          copyRef.current,
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.65 },
          '-=0.5'
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.55 },
          '-=0.4'
        )
        .fromTo(
          footerCueRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.6 },
          '-=0.3'
        );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-[calc(100svh-5rem)] flex flex-col justify-between py-6 md:py-10 select-none overflow-hidden"
    >
      {/* Background Architectural Coordinate Matrix */}
      <ArchitecturalCanvas />

      {/* Top Identity & Discipline Ribbon */}
      <div
        ref={identityRef}
        className="flex items-center justify-between gap-4 pb-6 md:pb-8 text-xs text-natural-taupe z-10"
      >
        {/* Identity Coordinate */}
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-electric-apricot" />
          <span className="font-semibold text-warm-ivory tracking-wide">
            OMKAR DHAKANE
          </span>
          <span className="text-taupe-muted">/</span>
          <span className="hidden sm:inline text-natural-taupe">
            SOFTWARE ENGINEER
          </span>
        </div>

        {/* Central Discipline Indicator */}
        <div className="hidden lg:flex items-center gap-2 text-taupe-muted">
          <Terminal className="w-3.5 h-3.5 text-electric-apricot" />
          <span>DISCIPLINE // FULL-STACK × APPLIED AI</span>
        </div>

        {/* Geographic Coordinate */}
        <div className="flex items-center gap-1.5 sm:gap-2 text-natural-taupe">
          <span className="hidden sm:inline text-taupe-muted">BASED IN //</span>
          <span className="text-warm-ivory font-medium">MUMBAI, INDIA</span>
          <samp className="hidden sm:inline font-mono text-[10px] text-taupe-muted ml-1">
            19.076° N
          </samp>
        </div>
      </div>

      {/* Monumental Kinetic Typography: Primary Focal Anchor */}
      <div className="my-auto py-8 sm:py-12 lg:py-16 z-10">
        <h1 className="text-[0.84rem] min-[360px]:text-[0.92rem] min-[390px]:text-[1.00rem] min-[430px]:text-[1.12rem] sm:text-[1.65rem] md:text-[2.0rem] lg:text-[2.75rem] xl:text-[3.4rem] 2xl:text-[3.85rem] font-display font-extrabold tracking-tight text-warm-ivory leading-[1.02] sm:leading-[0.98]">
          {/* Line 1: I BUILD THINGS THAT */}
          <span className="block overflow-hidden">
            <span
              ref={headlineLine1Ref}
              className="inline-block transform-gpu will-change-transform"
            >
              I BUILD THINGS THAT
            </span>
          </span>

          {/* Line 2: MOVE IDEAS FORWARD. (With Electric Apricot accent) */}
          <span className="block overflow-hidden text-warm-ivory mt-2 sm:mt-3">
            <span
              ref={headlineLine2Ref}
              className="inline-block transform-gpu will-change-transform"
            >
              MOVE IDEAS{' '}
              <span className="text-warm-ivory">
                FORWARD<span className="text-electric-apricot">.</span>
              </span>
            </span>
          </span>
        </h1>
      </div>

      {/* Lower Editorial Split: Supporting Statement, Actions & Engineering Pillars */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-end pt-4 pb-6 z-10">
        {/* Left Column: Statement & Dual Action CTAs (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div ref={copyRef}>
            <p className="text-base sm:text-lg lg:text-xl text-natural-taupe font-normal max-w-xl leading-relaxed">
              I build full-stack products, AI-powered applications, and developer
              tools that turn ambitious ideas into useful software.
            </p>
          </div>

          <div ref={ctaRef} className="flex flex-wrap items-center gap-4 pt-1">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2.5 px-6 py-3.5 bg-warm-ivory text-obsidian font-semibold rounded text-sm hover:bg-electric-apricot transition-colors duration-200 cursor-pointer active:scale-[0.98]"
            >
              <span>Explore my work</span>
              <ArrowDown className="w-4 h-4 text-obsidian transition-transform duration-200 group-hover:translate-y-1" />
            </a>

            <a
              href="#contact"
              className="group inline-flex items-center gap-2.5 px-6 py-3.5 bg-soft-charcoal text-warm-ivory font-semibold rounded text-sm hover:text-electric-apricot transition-colors duration-200 cursor-pointer border border-charcoal-border hover:border-electric-apricot/40 active:scale-[0.98]"
            >
              <span>Let&apos;s connect</span>
              <ArrowUpRight className="w-4 h-4 text-natural-taupe transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-electric-apricot" />
            </a>
          </div>
        </div>

        {/* Right Column: Core Architectural Disciplines (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-3 pt-2 lg:pt-0">
          <div className="flex items-center gap-2 text-xs font-semibold text-warm-ivory pb-1">
            <Sparkles className="w-3.5 h-3.5 text-electric-apricot" />
            <span>CORE ARCHITECTURAL DISCIPLINES</span>
          </div>

          <div className="flex flex-col gap-3 text-xs">
            <div className="flex flex-col gap-0.5">
              <span className="font-semibold text-warm-ivory text-sm">
                Agentic &amp; On-Device AI
              </span>
              <span className="text-natural-taupe text-xs leading-relaxed">
                Local WASM embeddings, clinical NLP ontologies, edge inference.
              </span>
            </div>

            <div className="flex flex-col gap-0.5">
              <span className="font-semibold text-warm-ivory text-sm">
                Full-Stack Architecture
              </span>
              <span className="text-natural-taupe text-xs leading-relaxed">
                Next.js 16, React 19, strict type contracts, sub-second latency.
              </span>
            </div>

            <div className="flex flex-col gap-0.5">
              <span className="font-semibold text-warm-ivory text-sm">
                Developer Tooling &amp; Systems
              </span>
              <span className="text-natural-taupe text-xs leading-relaxed">
                AST static analysis, CRDT offline stores, civic data pipelines.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Editorial Transition Bar & Showcase Indicator */}
      <div
        ref={footerCueRef}
        className="pt-6 sm:pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-natural-taupe pb-4 sm:pb-0 z-10"
      >
        <a
          href="#intro"
          className="group inline-flex items-center gap-2 text-warm-ivory hover:text-electric-apricot transition-colors duration-200 cursor-pointer"
        >
          <span>Scroll to explore engineering philosophy</span>
          <ArrowDown className="w-3.5 h-3.5 text-electric-apricot transition-transform duration-200 group-hover:translate-y-1" />
        </a>

        <div className="flex items-center gap-3 sm:pr-48">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <samp className="font-mono text-[11px] text-taupe-muted">
            RUNTIME // NEXT.16 · REACT.19 · GSAP SCROLLTRIGGER
          </samp>
        </div>
      </div>
    </section>
  );
}
