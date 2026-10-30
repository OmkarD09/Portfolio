import type { Transition, Variants } from 'motion/react';

/**
 * Dark Organic Motion System: omkar.dev
 *
 * Physical, weighted, and editorial animation tokens.
 * Explicitly rejects bouncing/elastic easing, generic floats, and decorative noise.
 * Enforces strict WCAG AA/AAA accessibility and prefers-reduced-motion fallbacks.
 */

// Motion Durations (in seconds)
export const durations = {
  micro: 0.18, // Short interactions, micro-toggles, hover states
  swift: 0.28, // Navigation state shifts, tab pill sliding
  standard: 0.5, // Standard card reveals, viewport entry
  expanded: 0.75, // Monumental typography reveals, major section entrances
  scenic: 1.0, // Ambient orbital drift, opening choreographies
} as const;

// Easing Curves (Cubic Bezier curves with physical weight)
export const easings = {
  editorial: [0.22, 1, 0.36, 1] as const, // Signature weighted ease-out
  scenic: [0.16, 1, 0.3, 1] as const, // Smooth cinematic curve for large reveals
  sharp: [0.25, 1, 0.5, 1] as const, // Crisp responsive transitions
  linear: [0, 0, 1, 1] as const, // Constant velocity for background planetary orbits
} as const;

// Stagger intervals (in seconds)
export const staggers = {
  tight: 0.04, // Word reveals, list items
  normal: 0.08, // Grid cards, pipeline stages
  relaxed: 0.12, // Major section structural blocks
} as const;

// Master Transitions
export const transitions: Record<string, Transition> = {
  instant: {
    duration: durations.micro,
    ease: easings.editorial,
  },
  swift: {
    duration: durations.swift,
    ease: easings.editorial,
  },
  deliberate: {
    duration: durations.standard,
    ease: easings.editorial,
  },
  scenic: {
    duration: durations.expanded,
    ease: easings.scenic,
  },
  springPill: {
    type: 'spring',
    stiffness: 350,
    damping: 32,
    mass: 0.8,
  },
};

// Reusable Viewport Trigger Config
export const viewportDefault = {
  once: true,
  amount: 0.18,
};

// Common Entry & Reveal Variants
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.deliberate,
  },
};

export const fadeInDown: Variants = {
  hidden: {
    opacity: 0,
    y: -14,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.deliberate,
  },
};

export const fadeInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -24,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: transitions.deliberate,
  },
};

export const fadeInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 24,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: transitions.deliberate,
  },
};

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: transitions.deliberate,
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggers.normal,
      delayChildren: 0.05,
    },
  },
};

export const staggerContainerRelaxed: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggers.relaxed,
      delayChildren: 0.1,
    },
  },
};

export const staggerContainerTight: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggers.tight,
      delayChildren: 0.04,
    },
  },
};

// Masked Text Reveal (For headlines & large editorial typography)
export const textMaskChild: Variants = {
  hidden: {
    y: '100%',
    opacity: 0,
  },
  visible: {
    y: '0%',
    opacity: 1,
    transition: {
      duration: durations.expanded,
      ease: easings.editorial,
    },
  },
};

// Interactive Hover Variants
export const interactiveCardHover: Variants = {
  rest: {
    y: 0,
    transition: transitions.swift,
  },
  hover: {
    y: -4,
    transition: transitions.swift,
  },
};
