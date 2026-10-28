'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Terminal, Menu, X } from 'lucide-react';

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navLinks = [
    { href: '#projects', label: 'Showcase' },
    { href: '#architecture', label: 'Capabilities' },
    { href: '#ethos', label: 'Principles' },
  ];

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

        {/* Desktop Navigation Links */}
        <nav aria-label="Primary Navigation" className="flex items-center gap-4 sm:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hidden md:inline-block text-sm font-medium text-natural-taupe hover:text-warm-ivory transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-obsidian bg-warm-ivory hover:bg-electric-apricot px-4 py-2 rounded-sm transition-colors duration-200"
          >
            <span>Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="md:hidden p-2 rounded text-warm-ivory hover:text-electric-apricot hover:bg-soft-charcoal transition-colors cursor-pointer"
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-electric-apricot" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div
          id="mobile-navigation"
          role="region"
          aria-label="Mobile Navigation"
          className="md:hidden bg-soft-charcoal px-6 py-6 flex flex-col gap-4 animate-in slide-in-from-top-2 duration-150"
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-medium text-warm-ivory hover:text-electric-apricot py-2.5 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 text-xs font-semibold text-obsidian bg-warm-ivory hover:bg-electric-apricot px-4 py-3 rounded-sm transition-colors"
          >
            <span>Connect &amp; Collaborate</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      )}
    </header>
  );
}
