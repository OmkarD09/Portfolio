import type { Transition, Variants } from 'motion/react';

/**
 * Editorial transitions without bouncing/elastic easing.
 * Deliberate, physical, weighted movement adhering to AGENTS.md.
 */
export const transitions: Record<string, Transition> = {
  instant: {
    duration: 0.15,
    ease: [0.22, 1, 0.36, 1],
  },
  swift: {
    duration: 0.3,
    ease: [0.22, 1, 0.36, 1],
  },
  deliberate: {
    duration: 0.5,
    ease: [0.22, 1, 0.36, 1],
  },
  scenic: {
    duration: 0.8,
    ease: [0.16, 1, 0.3, 1],
  },
};

/**
 * Common entry reveal variants
 */
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

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};
