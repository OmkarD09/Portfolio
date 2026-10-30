'use client';

import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { PROJECTS, Project } from '@/data/portfolio';
import { ProjectVisualizer } from '@/components/ProjectVisualizer';
import {
  ArrowUpRight,
  Code2,
  Copy,
  Check,
  FileCode,
  Layers,
  Workflow,
  Sparkles,
  GitBranch,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

type ViewTab = 'architecture' | 'pipeline' | 'schema';

export function PinnedProjectShowcase() {
  const containerRef = useRef<HTMLElement>(null);
  const pinWrapRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [activeTab, setActiveTab] = useState<ViewTab>('architecture');
  const [copiedCode, setCopiedCode] = useState(false);

  const activeProject: Project = PROJECTS[activeIdx] || PROJECTS[0];

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;

      const mm = gsap.matchMedia();

      // Desktop Pinned Presentation
      mm.add('(min-width: 1024px)', () => {
        if (prefersReducedMotion) return;

        ScrollTrigger.create({
          trigger: pinWrapRef.current,
          pin: true,
          start: 'top top',
          end: '+=160%',
          scrub: 0.6,
          onUpdate: (self) => {
            const progress = self.progress;
            const projectCount = PROJECTS.length;
            const newIndex = Math.min(
              Math.floor(progress * projectCount),
              projectCount - 1
            );
            setActiveIdx(newIndex);
          },
        });
      });

      return () => mm.revert();
    },
    { scope: containerRef }
  );

  const copyToClipboard = async (text: string) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        setCopiedCode(true);
        setTimeout(() => setCopiedCode(false), 2000);
      }
    } catch {
      // Ignore
    }
  };

  const jumpToProject = (index: number) => {
    setActiveIdx(index);
    setActiveTab('architecture');

    // On desktop, adjust scroll position to align with ScrollTrigger progress
    const st = ScrollTrigger.getById('project-pin-trigger');
    if (st) {
      const targetScroll = st.start + (st.end - st.start) * (index / (PROJECTS.length - 1));
      window.scrollTo({ top: targetScroll, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative w-full py-12 md:py-20"
    >
      <div ref={pinWrapRef} className="min-h-[100dvh] flex flex-col justify-between py-6">
        {/* Section Header & Interactive Project Selection Rail */}
        <div className="flex flex-col gap-6 pb-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-electric-apricot text-xs font-semibold tracking-wide mb-2 block">
                VERIFIED ARCHITECTURAL CASE STUDIES
              </span>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-warm-ivory tracking-tight">
                Featured Systems
              </h2>
            </div>

            <p className="text-natural-taupe max-w-md text-xs sm:text-sm leading-relaxed">
              Scroll through five production-grade architectural prototypes
              covering clinical NLP, on-device vector search, AST dependency
              resilience, and public civic data pipelines.
            </p>
          </div>

          {/* Interactive Project Switcher Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none select-none">
            {PROJECTS.map((proj, idx) => {
              const isCurrent = idx === activeIdx;
              return (
                <button
                  key={proj.id}
                  type="button"
                  onClick={() => jumpToProject(idx)}
                  className={`px-3.5 py-2 rounded text-xs font-medium transition-colors duration-200 whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                    isCurrent
                      ? 'bg-warm-ivory text-obsidian font-semibold'
                      : 'bg-soft-charcoal/80 text-natural-taupe hover:text-warm-ivory hover:bg-soft-charcoal border border-charcoal-border/70'
                  }`}
                >
                  <samp className="font-mono text-[10px] opacity-75">
                    0{idx + 1}
                  </samp>
                  <span>{proj.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Pinned Showcase Grid: Case Study Details (Left) + Architectural Workstation (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start my-auto">
          {/* Left Column: Case Study Narrative (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {/* Project Index & Category */}
            <div className="flex items-center gap-3 text-xs">
              <span className="px-2.5 py-1 rounded bg-organic-olive/70 text-warm-ivory text-[11px] font-medium border border-organic-olive">
                {activeProject.category}
              </span>
              <samp className="font-mono text-[11px] text-taupe-muted">
                SYSTEM 0{activeIdx + 1} // 0{PROJECTS.length}
              </samp>
            </div>

            {/* Title & Tagline */}
            <div className="flex flex-col gap-1">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-warm-ivory tracking-tight">
                {activeProject.title}
              </h3>
              <p className="text-sm font-medium text-electric-apricot">
                {activeProject.tagline}
              </p>
            </div>

            {/* Problem & Solution Synthesis */}
            <div className="flex flex-col gap-3 text-xs sm:text-sm text-natural-taupe leading-relaxed">
              <p>
                <strong className="text-warm-ivory">The Challenge: </strong>
                {activeProject.problem}
              </p>
              <p>
                <strong className="text-warm-ivory">Engineered Solution: </strong>
                {activeProject.solution}
              </p>
            </div>

            {/* Key Architectural Decisions */}
            <div className="flex flex-col gap-2 pt-1 text-xs">
              <span className="font-semibold text-warm-ivory flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-electric-apricot" />
                <span>ARCHITECTURAL HIGHLIGHTS</span>
              </span>
              <ul className="flex flex-col gap-1.5 text-natural-taupe list-disc list-inside">
                {activeProject.architecture.slice(0, 3).map((item, i) => (
                  <li key={i} className="leading-snug">
                    <span className="text-natural-taupe">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Verified Tech Stack Tags */}
            <div className="flex flex-wrap gap-1.5 pt-2">
              {activeProject.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-soft-charcoal text-natural-taupe rounded text-[11px] border border-charcoal-border/70"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons: Verified GitHub Repo & Inquiries */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              {activeProject.links.github && (
                <a
                  href={activeProject.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-4 py-2.5 bg-warm-ivory text-obsidian font-semibold rounded text-xs hover:bg-electric-apricot transition-colors duration-200 cursor-pointer active:scale-95"
                >
                  <span>Verified Repository</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-obsidian transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              )}

              <span className="text-[11px] text-taupe-muted">
                {activeProject.metricsOrState}
              </span>
            </div>
          </div>

          {/* Right Column: Architectural Workstation Frame (7 cols) */}
          <div data-ui="project-workstation" className="lg:col-span-7 bg-soft-charcoal rounded-xl border border-charcoal-border p-4 sm:p-6 flex flex-col gap-4">
            {/* Workstation Header & Tab Switcher */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-charcoal-border/70">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#3F422E]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#2E2E2E]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#151515]" />
                <span className="ml-2 text-xs font-semibold text-warm-ivory tracking-tight">
                  workstation // {activeProject.id}
                </span>
              </div>

              {/* View Mode Tabs */}
              <div className="flex items-center gap-1 bg-obsidian p-1 rounded-lg border border-charcoal-border/70 self-start sm:self-auto">
                <button
                  type="button"
                  onClick={() => setActiveTab('architecture')}
                  className={`px-2.5 py-1 rounded text-[11px] font-medium transition-colors flex items-center gap-1.5 cursor-pointer ${
                    activeTab === 'architecture'
                      ? 'bg-soft-charcoal text-warm-ivory'
                      : 'text-natural-taupe hover:text-warm-ivory'
                  }`}
                >
                  <Layers className="w-3 h-3 text-electric-apricot" />
                  <span>Architecture</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('pipeline')}
                  className={`px-2.5 py-1 rounded text-[11px] font-medium transition-colors flex items-center gap-1.5 cursor-pointer ${
                    activeTab === 'pipeline'
                      ? 'bg-soft-charcoal text-warm-ivory'
                      : 'text-natural-taupe hover:text-warm-ivory'
                  }`}
                >
                  <Workflow className="w-3 h-3 text-electric-apricot" />
                  <span>Pipeline</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('schema')}
                  className={`px-2.5 py-1 rounded text-[11px] font-medium transition-colors flex items-center gap-1.5 cursor-pointer ${
                    activeTab === 'schema'
                      ? 'bg-soft-charcoal text-warm-ivory'
                      : 'text-natural-taupe hover:text-warm-ivory'
                  }`}
                >
                  <FileCode className="w-3 h-3 text-electric-apricot" />
                  <span>Data Contract</span>
                </button>
              </div>
            </div>

            {/* Tab Content Display */}
            <div className="min-h-[280px] sm:min-h-[340px] flex flex-col justify-center">
              {activeTab === 'architecture' && (
                <div className="flex flex-col gap-4 animate-in fade-in duration-300">
                  <ProjectVisualizer project={activeProject} />
                </div>
              )}

              {activeTab === 'pipeline' && (
                <div className="flex flex-col gap-3 animate-in fade-in duration-300">
                  <div className="text-xs font-semibold text-warm-ivory flex items-center gap-2">
                    <Workflow className="w-3.5 h-3.5 text-electric-apricot" />
                    <span>Four-Stage Execution Pipeline Specification</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeProject.pipeline.map((stage) => (
                      <div
                        key={stage.step}
                        className="p-3.5 bg-obsidian rounded-lg border border-charcoal-border/70 flex flex-col gap-1.5"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-bold text-warm-ivory">
                            {stage.name}
                          </span>
                          <span className="px-1.5 py-0.5 rounded bg-organic-olive/50 text-[10px] text-warm-ivory font-medium">
                            STAGE {stage.step}
                          </span>
                        </div>
                        <p className="text-[11px] text-natural-taupe leading-relaxed">
                          {stage.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'schema' && (
                <div className="flex flex-col gap-3 animate-in fade-in duration-300">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-warm-ivory flex items-center gap-2">
                      <Code2 className="w-3.5 h-3.5 text-electric-apricot" />
                      <span>{activeProject.codeSnippet.filename}</span>
                    </span>

                    <button
                      type="button"
                      onClick={() =>
                        copyToClipboard(activeProject.codeSnippet.code)
                      }
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-obsidian hover:bg-soft-charcoal text-natural-taupe hover:text-warm-ivory rounded text-[11px] font-medium border border-charcoal-border/70 transition-colors cursor-pointer"
                    >
                      {copiedCode ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy Schema</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Schema Code Block */}
                  <pre className="p-4 bg-obsidian rounded-lg border border-charcoal-border/70 overflow-x-auto text-xs text-natural-taupe font-mono leading-relaxed max-h-[300px]">
                    <code>{activeProject.codeSnippet.code}</code>
                  </pre>
                </div>
              )}
            </div>

            {/* Workstation Footer Status */}
            <div className="flex items-center justify-between pt-3 text-[11px] text-taupe-muted">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>STATE VERIFIED // DETERMINISTIC COMPLIANCE</span>
              </div>
              <samp className="font-mono text-[10px]">
                {activeProject.codeSnippet.filename}
              </samp>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
