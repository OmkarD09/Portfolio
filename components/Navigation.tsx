'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Terminal } from 'lucide-react';

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 w-full bg-obsidian">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3 text-warm-ivory font-display font-bold text-xl tracking-tight hover:text-electric-apricot transition-colors duration-200"
        >
          <div className="w-8 h-8 rounded bg-organic-olive flex items-center justify-center text-warm-ivory">
            <Terminal className="w-4 h-4 text-electric-apricot" />
          </div>
          <span>omkar.dev</span>
        </Link>

        <nav className="flex items-center gap-4 sm:gap-8">
          <a
            href="#projects"
            className="hidden md:inline-block text-sm font-medium text-natural-taupe hover:text-warm-ivory transition-colors duration-200"
          >
            Showcase
          </a>
          <a
            href="#architecture"
            className="hidden md:inline-block text-sm font-medium text-natural-taupe hover:text-warm-ivory transition-colors duration-200"
          >
            Capabilities
          </a>
          <a
            href="#ethos"
            className="hidden md:inline-block text-sm font-medium text-natural-taupe hover:text-warm-ivory transition-colors duration-200"
          >
            Principles
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-obsidian bg-warm-ivory hover:bg-electric-apricot px-4 py-2 rounded-sm transition-colors duration-200"
          >
            <span>Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </nav>
      </div>
    </header>
  );
}
