'use client';

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import type { Variants } from 'motion/react';
import { fadeInUp, staggerContainer } from '@/lib/motion';
import { ArrowDown, ArrowUpRight, Code2, Terminal } from 'lucide-react';
import { SculpturalCenterpiece } from '@/components/SculpturalCenterpiece';

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  // Word-level kinetic typography reveal variants
  const wordReveal: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: prefersReducedMotion ? 0 : i * 0.08,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
  };

  const words = ['Engineering', 'ideas', 'into', 'reality.'];

  return (
    <section className="relative min-h-[calc(100svh-5rem)] flex flex-col justify-between py-4 md:py-8">
      {/* Asymmetric Core Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center my-auto">
        {/* Left Column: Kinetic Editorial Content (7 cols) */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col gap-6"
        >
          {/* Identity Label */}
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2.5 text-xs text-natural-taupe self-start"
          >
            <span className="w-2 h-2 rounded-full bg-electric-apricot" />
            <span className="font-semibold text-warm-ivory">Omkar Dhakane</span>
            <span className="text-taupe-muted">/</span>
            <span>Software Engineer &amp; Builder</span>
          </motion.div>

          {/* Kinetic Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5rem] font-display font-extrabold tracking-tight text-warm-ivory leading-[1.02]">
            <span className="block">
              {words.slice(0, 2).map((word, idx) => (
                <motion.span
                  key={word}
                  custom={idx}
                  variants={wordReveal}
                  initial="hidden"
                  animate="visible"
                  className="inline-block mr-3 sm:mr-4"
                >
                  {word}
                </motion.span>
              ))}
            </span>
            <span className="block text-warm-ivory">
              {words.slice(2).map((word, idx) => (
                <motion.span
                  key={word}
                  custom={idx + 2}
                  variants={wordReveal}
                  initial="hidden"
                  animate="visible"
                  className="inline-block mr-3 sm:mr-4"
                >
                  {word === 'reality.' ? (
                    <span className="text-warm-ivory">
                      reality<span className="text-electric-apricot">.</span>
                    </span>
                  ) : (
                    word
                  )}
                </motion.span>
              ))}
            </span>
          </h1>

          {/* Supporting Copy */}
          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl text-natural-taupe font-normal max-w-xl leading-relaxed"
          >
            I build full-stack products, AI-powered applications, and developer
            tools that turn ambitious ideas into useful software.
          </motion.p>

          {/* Dual Action CTAs */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-warm-ivory text-obsidian font-semibold rounded text-sm hover:bg-electric-apricot transition-colors duration-200 cursor-pointer"
            >
              <span>Explore my work</span>
              <ArrowDown className="w-4 h-4 text-obsidian" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-soft-charcoal text-warm-ivory font-semibold rounded text-sm hover:text-electric-apricot transition-colors duration-200 cursor-pointer"
            >
              <span>Let&apos;s connect</span>
              <ArrowUpRight className="w-4 h-4 text-natural-taupe" />
            </a>
          </motion.div>

          {/* Subtle Technical Engineering Annotations */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-center gap-6 pt-4 text-xs text-natural-taupe"
          >
            <div className="flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-electric-apricot" />
              <samp className="font-mono text-[11px] text-taupe-muted">
                DISCIPLINE // FULL-STACK × AI
              </samp>
            </div>
            <div className="flex items-center gap-2">
              <Code2 className="w-3.5 h-3.5 text-natural-taupe" />
              <samp className="font-mono text-[11px] text-taupe-muted">
                BASED IN // MUMBAI, INDIA
              </samp>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Organic Sculptural Centerpiece (5 cols) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="lg:col-span-5 flex items-center justify-center relative w-full"
        >
          <SculpturalCenterpiece />
        </motion.div>
      </div>

      {/* Bottom Architectural Metadata Bar & Restrained Scroll Cue */}
      <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-natural-taupe">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <samp className="font-mono text-[11px] text-taupe-muted">
            RUNTIME // NEXT.16 · REACT.19 · TURBOPACK
          </samp>
        </div>

        <a
          href="#projects"
          className="inline-flex items-center gap-2 text-warm-ivory hover:text-electric-apricot transition-colors duration-200"
        >
          <span>Scroll to showcase</span>
          <ArrowDown className="w-3.5 h-3.5 text-electric-apricot" />
        </a>
      </div>
    </section>
  );
}
