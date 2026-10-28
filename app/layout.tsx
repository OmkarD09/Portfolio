import type { Metadata, Viewport } from 'next';
import { displayFont, bodyFont, monoFont } from '@/lib/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'Omkar Dhakane — Full-Stack Engineer & AI Systems Architect',
  description:
    'Personal portfolio and engineering showcase of Omkar Dhakane. Specializing in high-craft full-stack architecture, agentic AI applications, and developer systems.',
  authors: [{ name: 'Omkar Dhakane', url: 'https://omkar.dev' }],
  creator: 'Omkar Dhakane',
  keywords: [
    'Omkar Dhakane',
    'Full-Stack Engineer',
    'AI Systems Architect',
    'Next.js 16',
    'TypeScript',
    'Product Engineering',
    'Developer Tools',
    'SwasthyaVaani',
    'TrailScribe',
    'Resilify',
  ],
  metadataBase: new URL('https://omkar.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Omkar Dhakane — Full-Stack Engineer & AI Systems Architect',
    description:
      'Personal portfolio and engineering showcase of Omkar Dhakane. Specializing in high-craft full-stack architecture, agentic AI applications, and developer systems.',
    url: 'https://omkar.dev',
    siteName: 'omkar.dev',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Omkar Dhakane — Full-Stack Engineer & AI Systems Architect',
    description:
      'Personal portfolio and engineering showcase of Omkar Dhakane. Specializing in high-craft full-stack architecture, agentic AI applications, and developer systems.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#151515',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Omkar Dhakane',
    url: 'https://omkar.dev',
    jobTitle: 'Full-Stack Engineer & AI Systems Developer',
    sameAs: [
      'https://github.com/OmkarD09',
      'https://linkedin.com/in/omkardhakane',
    ],
    knowsAbout: [
      'Full-Stack Web Architecture',
      'Next.js & React 19',
      'Agentic AI Systems',
      'Edge Vector Search & WASM',
      'AST Static Analysis & Developer Tooling',
      'Civic Tech & Public Data Infrastructure',
    ],
  };

  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable} dark scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-[100dvh] bg-obsidian text-warm-ivory font-body antialiased selection:bg-electric-apricot selection:text-obsidian">
        {children}
      </body>
    </html>
  );
}
