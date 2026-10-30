import React from 'react';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { IntroNarrative } from '@/components/IntroNarrative';
import { PinnedProjectShowcase } from '@/components/PinnedProjectShowcase';
import { CapabilitiesSection } from '@/components/CapabilitiesSection';
import { PrinciplesSection } from '@/components/PrinciplesSection';
import { FooterSection } from '@/components/FooterSection';
import { CommandPalette } from '@/components/CommandPalette';

export default function Home() {
  return (
    <div className="min-h-[100dvh] bg-obsidian text-warm-ivory selection:bg-electric-apricot selection:text-obsidian">
      <Navigation />
      <main className="max-w-7xl 2xl:max-w-[1400px] mx-auto px-6 md:px-12">
        <HeroSection />
        <IntroNarrative />
        <PinnedProjectShowcase />
        <CapabilitiesSection />
        <PrinciplesSection />
        <FooterSection />
      </main>
      <CommandPalette />
    </div>
  );
}
