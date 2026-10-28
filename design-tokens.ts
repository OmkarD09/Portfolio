/**
 * OMKAR.DEV DESIGN SYSTEM — "DARK ORGANIC"
 * Core Design Tokens, Spatial System, Typography, and Motion Specifications.
 */

export const colors = {
  // Surface Foundations
  obsidian: '#151515',      // Primary root background
  softCharcoal: '#222222',  // Secondary background, structural panels, card grounds
  charcoalBorder: '#2E2E2E',// Subtle boundary lines

  // Typography & Content
  warmIvory: '#F5E6C5',     // Primary typography, high-contrast headings & titles
  naturalTaupe: '#9F886F',  // Supporting neutral, body copy, muted labels, secondary text
  taupeMuted: '#6E6050',    // Tertiary metadata, inactive states, timestamp details

  // Strategic Accents
  electricApricot: '#FF8A3D', // Primary accent: interactive highlights, focus rings, key CTAs
  apricotHover: '#FF9E5E',    // Hover variant for apricot interactive elements
  organicOlive: '#3F422E',    // Secondary accent: architecture tags, pill backgrounds, status indicators
  oliveLight: '#555A3E',      // Olive border and subtle hover state
} as const;

export const typography = {
  fontFamilies: {
    heading: 'var(--font-heading, "Syne", "Cabinet Grotesk", sans-serif)',
    body: 'var(--font-body, "Plus Jakarta Sans", "Inter", sans-serif)',
    code: 'var(--font-code, "JetBrains Mono", monospace)',
  },
  scale: {
    hero: 'clamp(3.5rem, 8vw, 7rem)',       // Dynamic monumental scale
    display: 'clamp(2.5rem, 5vw, 4.5rem)',  // Section anchors
    h1: 'clamp(2rem, 3.5vw, 3rem)',
    h2: 'clamp(1.5rem, 2.5vw, 2.25rem)',
    h3: 'clamp(1.25rem, 1.8vw, 1.625rem)',
    bodyLarge: '1.125rem',
    body: '1rem',
    bodySmall: '0.875rem',
    caption: '0.75rem',
  },
  lineHeights: {
    tight: 1.05,
    snug: 1.2,
    normal: 1.5,
    relaxed: 1.7,
  },
} as const;

export const spacing = {
  sectionGap: 'clamp(5rem, 12vw, 10rem)',
  containerPadding: 'clamp(1.25rem, 4vw, 3.5rem)',
  gridGutter: 'clamp(1rem, 2.5vw, 2.5rem)',
} as const;

export const creativeTargets = {
  designVariance: 8,  // 8/10: Asymmetrical compositions, editorial cadence
  motionIntensity: 7, // 7/10: Choreographed stagger, tactile physics
  visualDensity: 4,   // 4/10: Generous breathing room, deliberate whitespace
} as const;

export const motionTokens = {
  durations: {
    instant: 0.15,
    swift: 0.3,
    deliberate: 0.5,
    scenic: 0.8,
  },
  easings: {
    // Weighted physics, no elastic bounce
    editorial: [0.22, 1, 0.36, 1],
    smoothOut: [0.16, 1, 0.3, 1],
    sharpIn: [0.7, 0, 0.84, 0],
  },
} as const;
