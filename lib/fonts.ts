import { Plus_Jakarta_Sans, Syne, JetBrains_Mono } from 'next/font/google';

/**
 * Syne — High-character geometric display font.
 * Used for monumental titles, headlines, and prominent section anchors.
 */
export const displayFont = Syne({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['600', '700', '800'],
});

/**
 * Plus Jakarta Sans — High-legibility modern grotesk.
 * Calibrated for reading rhythm, clean numbers, and body text.
 */
export const bodyFont = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

/**
 * JetBrains Mono — Reserved exclusively for literal code blocks,
 * terminal lines, and technical metadata.
 */
export const monoFont = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500'],
});
