'use client';

import React from 'react';
import { motion } from 'motion/react';
import { fadeInUp, staggerContainer } from '@/lib/motion';
import { Button } from '@/components/ui/Button';
import { Panel } from '@/components/ui/Panel';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Layers,
  Palette,
} from 'lucide-react';

export function FoundationPreview() {
  const [clicked, setClicked] = React.useState(false);

  return (
    <main className="min-h-[100dvh] px-6 py-16 md:px-12 md:py-24 max-w-6xl mx-auto flex flex-col gap-16">
      {/* Editorial Header Anchor */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-6"
      >
        <motion.div
          variants={fadeInUp}
          className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 bg-organic-olive text-warm-ivory text-xs font-semibold rounded-full"
        >
          <Sparkles className="w-3.5 h-3.5 text-electric-apricot" />
          <span>Foundation Mode · Phase 2</span>
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-warm-ivory leading-[1.08]"
        >
          Omkar Dhakane
          <span className="block text-natural-taupe text-2xl sm:text-3xl md:text-4xl font-normal mt-2">
            Engineering System &amp; Design Architecture
          </span>
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-base sm:text-lg text-natural-taupe max-w-2xl leading-relaxed"
        >
          Testing the production foundation: Next.js App Router, React 19,
          Tailwind CSS with the Dark Organic token scale, Motion physics, and
          monumental typography.
        </motion.p>
      </motion.div>

      {/* Palette Demonstration Grid */}
      <section className="flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <Palette className="w-5 h-5 text-electric-apricot" />
          <h2 className="text-xl font-display font-semibold text-warm-ivory">
            Dark Organic Palette
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {[
            { name: 'Obsidian', hex: '#151515', bg: 'bg-obsidian border border-charcoal-border', text: 'text-warm-ivory' },
            { name: 'Soft Charcoal', hex: '#222222', bg: 'bg-soft-charcoal border border-charcoal-border', text: 'text-warm-ivory' },
            { name: 'Warm Ivory', hex: '#F5E6C5', bg: 'bg-warm-ivory', text: 'text-obsidian' },
            { name: 'Electric Apricot', hex: '#FF8A3D', bg: 'bg-electric-apricot', text: 'text-obsidian' },
            { name: 'Organic Olive', hex: '#3F422E', bg: 'bg-organic-olive', text: 'text-warm-ivory' },
            { name: 'Natural Taupe', hex: '#9F886F', bg: 'bg-natural-taupe', text: 'text-obsidian' },
          ].map((token) => (
            <div
              key={token.name}
              className={`p-4 rounded-md flex flex-col justify-between h-28 ${token.bg}`}
            >
              <span className={`text-xs font-semibold ${token.text}`}>
                {token.name}
              </span>
              <code>
                <span className={`text-xs opacity-80 ${token.text}`}>
                  {token.hex}
                </span>
              </code>
            </div>
          ))}
        </div>
      </section>

      {/* Structural Panels & Interactive Physics */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Panel variant="elevated" className="flex flex-col justify-between gap-6">
          <div className="flex flex-col gap-3">
            <div className="w-9 h-9 rounded bg-organic-olive/40 border border-organic-olive flex items-center justify-center text-electric-apricot">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="font-display font-semibold text-lg text-warm-ivory">
              App Router &amp; React 19
            </h3>
            <p className="text-sm text-natural-taupe leading-relaxed">
              Clean separation of Server Components and interactive client boundaries
              with strict TypeScript compilation.
            </p>
          </div>
          <code>
            <span className="text-xs text-taupe-muted">
              01 / INFRASTRUCTURE
            </span>
          </code>
        </Panel>

        <Panel variant="elevated" className="flex flex-col justify-between gap-6">
          <div className="flex flex-col gap-3">
            <div className="w-9 h-9 rounded bg-organic-olive/40 border border-organic-olive flex items-center justify-center text-electric-apricot">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="font-display font-semibold text-lg text-warm-ivory">
              Typography Hierarchy
            </h3>
            <p className="text-sm text-natural-taupe leading-relaxed">
              Syne display typography paired with Plus Jakarta Sans body and JetBrains
              Mono technical notations.
            </p>
          </div>
          <code>
            <span className="text-xs text-taupe-muted">
              02 / EDITORIAL RHYTHM
            </span>
          </code>
        </Panel>

        <Panel variant="elevated" className="flex flex-col justify-between gap-6">
          <div className="flex flex-col gap-3">
            <div className="w-9 h-9 rounded bg-organic-olive/40 border border-organic-olive flex items-center justify-center text-electric-apricot">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-display font-semibold text-lg text-warm-ivory">
              Quality &amp; Accessibility
            </h3>
            <p className="text-sm text-natural-taupe leading-relaxed">
              WCAG AAA contrast ratio compliance (14.8:1), native reduced-motion
              support, and strict anti-pattern avoidance.
            </p>
          </div>
          <code>
            <span className="text-xs text-taupe-muted">
              03 / CRAFT FLOOR
            </span>
          </code>
        </Panel>
      </section>

      {/* Interactive Motion Test Area */}
      <Panel variant="bordered" className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8">
        <div className="flex flex-col gap-1 text-center sm:text-left">
          <h3 className="font-display font-bold text-xl text-warm-ivory">
            Motion Physics Verification
          </h3>
          <p className="text-sm text-natural-taupe">
            Weighted physical easing transitions without elastic bounce.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="primary"
            onClick={() => setClicked(!clicked)}
            icon={<ArrowRight className="w-4 h-4" />}
          >
            {clicked ? 'Active Pulse Verified' : 'Trigger Motion Test'}
          </Button>

          <Button variant="secondary">
            Secondary State
          </Button>
        </div>
      </Panel>
    </main>
  );
}
