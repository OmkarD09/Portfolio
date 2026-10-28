'use client';

import React from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { PROJECTS, Project } from '@/data/portfolio';
import { ProjectVisualizer } from '@/components/ProjectVisualizer';
import {
  ArrowUpRight,
  CheckCircle2,
  Layers,
  Cpu,
  Code2,
  Workflow,
  FileCode,
  Copy,
  Check,
  Lock,
  Shield,
  Mail,
  X,
  ArrowRight,
  ArrowDown,
  Terminal,
} from 'lucide-react';

type TabMode = 'overview' | 'pipeline' | 'schema';

const ROMAN_INDEX = ['I', 'II', 'III', 'IV', 'V'];
const TABS: TabMode[] = ['overview', 'pipeline', 'schema'];

export function ProjectShowcase() {
  const [activeProject, setActiveProject] = React.useState<Project>(PROJECTS[0]);
  const [activeTab, setActiveTab] = React.useState<TabMode>('overview');
  const [copiedCode, setCopiedCode] = React.useState(false);
  const [copiedEmail, setCopiedEmail] = React.useState(false);
  const [isAccessDrawerOpen, setIsAccessDrawerOpen] = React.useState(false);

  const prefersReducedMotion = useReducedMotion();

  // Listen for cross-component project selection (e.g. from CommandPalette)
  React.useEffect(() => {
    const handleSelectProject = (e: CustomEvent<string>) => {
      const found = PROJECTS.find((p) => p.id === e.detail);
      if (found) {
        setActiveProject(found);
        setCopiedCode(false);
        setIsAccessDrawerOpen(false);
      }
    };
    window.addEventListener('select-project' as any, handleSelectProject);
    return () => window.removeEventListener('select-project' as any, handleSelectProject);
  }, []);

  const copyToClipboard = async (text: string): Promise<boolean> => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        return true;
      }
    } catch {
      // Fall through to textarea fallback
    }

    try {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-9999px';
      textArea.style.top = '-9999px';
      textArea.setAttribute('readonly', '');
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const success = document.execCommand('copy');
      document.body.removeChild(textArea);
      return success;
    } catch {
      return false;
    }
  };

  const handleCopyCode = async (code: string) => {
    const ok = await copyToClipboard(code);
    if (ok) {
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  const handleCopyEmail = async (email: string) => {
    const ok = await copyToClipboard(email);
    if (ok) {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  const handleRailKeyDown = (e: React.KeyboardEvent, currentIndex: number) => {
    let nextIndex = -1;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      nextIndex = (currentIndex + 1) % PROJECTS.length;
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      nextIndex = (currentIndex - 1 + PROJECTS.length) % PROJECTS.length;
    } else if (e.key === 'Home') {
      e.preventDefault();
      nextIndex = 0;
    } else if (e.key === 'End') {
      e.preventDefault();
      nextIndex = PROJECTS.length - 1;
    }

    if (nextIndex >= 0) {
      const nextProj = PROJECTS[nextIndex];
      setActiveProject(nextProj);
      setCopiedCode(false);
      setIsAccessDrawerOpen(false);
      document.getElementById(`project-tab-${nextProj.id}`)?.focus();
    }
  };

  const handleViewTabKeyDown = (e: React.KeyboardEvent, currentTab: TabMode) => {
    const currentIndex = TABS.indexOf(currentTab);
    let nextIndex = -1;
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      nextIndex = (currentIndex + 1) % TABS.length;
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      nextIndex = (currentIndex - 1 + TABS.length) % TABS.length;
    }

    if (nextIndex >= 0) {
      const nextTab = TABS[nextIndex];
      setActiveTab(nextTab);
      document.getElementById(`tab-${nextTab}`)?.focus();
    }
  };

  return (
    <section id="projects" className="py-24 md:py-36">
      {/* Section Anchor Heading */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 sm:mb-20">
        <div>
          <span className="text-electric-apricot text-sm font-semibold tracking-normal mb-3 block">
            Selected Works &amp; Architecture
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold text-warm-ivory tracking-tight">
            Featured Systems
          </h2>
        </div>
        <p className="text-natural-taupe max-w-md text-base sm:text-lg leading-relaxed">
          Deep-dive case studies into AI-assisted healthcare, offline-first vector search,
          supply chain resilience, and civic transparency platforms.
        </p>
      </div>

      {/* Showcase Grid Layout: Navigation Rail + Case-Study Workstation */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Left Column: Project Navigation Rail */}
        <div
          role="tablist"
          aria-label="Project Selection Rail"
          className="lg:col-span-4 flex flex-col gap-3.5"
        >
          {PROJECTS.map((project, index) => {
            const isSelected = activeProject.id === project.id;
            return (
              <button
                key={project.id}
                role="tab"
                id={`project-tab-${project.id}`}
                aria-controls={`project-panel-${project.id}`}
                aria-selected={isSelected}
                tabIndex={0}
                onKeyDown={(e) => handleRailKeyDown(e, index)}
                onClick={() => {
                  setActiveProject(project);
                  setCopiedCode(false);
                  setIsAccessDrawerOpen(false);
                }}
                className={`group relative w-full text-left p-5 sm:p-6 rounded-lg transition-colors duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-soft-charcoal text-warm-ivory border border-charcoal-border shadow-none'
                    : 'bg-soft-charcoal/30 text-natural-taupe border border-transparent hover:text-warm-ivory hover:bg-soft-charcoal/60'
                }`}
              >
                {/* Active Indicator Pip */}
                <div className="flex items-start justify-between gap-3 mb-2.5">
                  <span
                    className={`text-xs font-semibold ${
                      isSelected ? 'text-electric-apricot' : 'text-natural-taupe'
                    }`}
                  >
                    {project.category}
                  </span>
                  <div className="flex items-center gap-2">
                    <samp className="font-mono text-[10px] text-taupe-muted">
                      SYS-{ROMAN_INDEX[index]}
                    </samp>
                    {isSelected && (
                      <span
                        className="w-2 h-2 rounded-full bg-electric-apricot shrink-0"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                </div>

                <div
                  className={`text-xl sm:text-2xl font-display font-bold transition-colors ${
                    isSelected ? 'text-warm-ivory' : 'text-warm-ivory/80 group-hover:text-warm-ivory'
                  }`}
                >
                  {project.title}
                </div>

                <p className="text-xs sm:text-sm mt-2 text-natural-taupe line-clamp-2 leading-relaxed">
                  {project.tagline}
                </p>
              </button>
            );
          })}
        </div>

        {/* Right Column: In-Depth Project Case Study Inspector */}
        <div
          role="tabpanel"
          id={`project-panel-${activeProject.id}`}
          aria-labelledby={`project-tab-${activeProject.id}`}
          className="lg:col-span-8 bg-soft-charcoal rounded-xl p-6 sm:p-8 md:p-10 flex flex-col gap-8 border border-charcoal-border"
        >
          {/* Workstation Header */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-semibold text-electric-apricot">
                  {activeProject.category}
                </span>
                <samp className="font-mono text-[11px] text-taupe-muted flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  SPEC // VERIFIED
                </samp>
              </div>

              <h3 className="text-3xl sm:text-4xl font-display font-bold text-warm-ivory">
                {activeProject.title}
              </h3>
              <p className="text-sm sm:text-base text-natural-taupe mt-2 leading-relaxed">
                {activeProject.tagline}
              </p>
            </div>

            {activeProject.links.github ? (
              <a
                href={activeProject.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 bg-obsidian text-warm-ivory hover:text-electric-apricot rounded text-xs font-semibold self-start transition-colors border border-charcoal-border"
              >
                <Code2 className="w-4 h-4 text-electric-apricot" />
                <span>Source</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            ) : (
              <button
                onClick={() => setIsAccessDrawerOpen((prev) => !prev)}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-obsidian text-warm-ivory hover:text-electric-apricot rounded text-xs font-semibold self-start transition-colors border border-charcoal-border cursor-pointer"
              >
                <Lock className="w-3.5 h-3.5 text-electric-apricot" />
                <span>Architecture on Request</span>
              </button>
            )}
          </div>

          {/* Access Note & Inquiry Drawer */}
          {isAccessDrawerOpen && (
            <div
              role="region"
              aria-label="Architecture access note"
              className="p-6 bg-obsidian rounded-lg flex flex-col gap-4 text-xs border border-charcoal-border"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-electric-apricot font-semibold">
                  <Shield className="w-4 h-4" />
                  <span>{activeProject.links.accessLabel}</span>
                </div>
                <button
                  onClick={() => setIsAccessDrawerOpen(false)}
                  className="p-1 text-natural-taupe hover:text-warm-ivory cursor-pointer"
                  aria-label="Close access note"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <p className="text-sm text-warm-ivory/90 leading-relaxed">
                {activeProject.links.accessNote}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={`mailto:contact@omkar.dev?subject=${encodeURIComponent(
                    activeProject.links.inquirySubject
                  )}&body=${encodeURIComponent(
                    `Hi Omkar,\n\nI am reviewing your portfolio and would like to request an architecture walkthrough for ${activeProject.title}.\n\nBest regards,`
                  )}`}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-warm-ivory text-obsidian hover:bg-electric-apricot rounded text-xs font-semibold transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Request Technical Walkthrough</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => handleCopyEmail('contact@omkar.dev')}
                  className="inline-flex items-center gap-1.5 px-3 py-2 bg-soft-charcoal text-warm-ivory hover:text-electric-apricot rounded text-xs font-medium transition-colors cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span>Copied email</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-natural-taupe" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          {/* Project-Specific Visual Storytelling Pipeline */}
          <div className="flex flex-col gap-2">
            <span className="text-[11px] font-semibold text-natural-taupe">
              Architectural Workflow
            </span>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : -4 }}
                transition={{ duration: 0.2 }}
              >
                <ProjectVisualizer project={activeProject} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Interactive Inspector Tabs */}
          <div
            role="tablist"
            aria-label="Case Study Views"
            className="flex items-center gap-1.5 p-1.5 bg-obsidian rounded-lg self-start border border-charcoal-border"
          >
            <button
              role="tab"
              id="tab-overview"
              aria-controls="panel-overview"
              aria-selected={activeTab === 'overview'}
              tabIndex={0}
              onKeyDown={(e) => handleViewTabKeyDown(e, 'overview')}
              onClick={() => setActiveTab('overview')}
              className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded text-xs font-semibold transition-colors cursor-pointer ${
                activeTab === 'overview'
                  ? 'bg-soft-charcoal text-warm-ivory'
                  : 'text-natural-taupe hover:text-warm-ivory'
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-electric-apricot" />
              <span>System Overview</span>
            </button>
            <button
              role="tab"
              id="tab-pipeline"
              aria-controls="panel-pipeline"
              aria-selected={activeTab === 'pipeline'}
              tabIndex={0}
              onKeyDown={(e) => handleViewTabKeyDown(e, 'pipeline')}
              onClick={() => setActiveTab('pipeline')}
              className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded text-xs font-semibold transition-colors cursor-pointer ${
                activeTab === 'pipeline'
                  ? 'bg-soft-charcoal text-warm-ivory'
                  : 'text-natural-taupe hover:text-warm-ivory'
              }`}
            >
              <Workflow className="w-3.5 h-3.5 text-electric-apricot" />
              <span>Execution Pipeline</span>
            </button>
            <button
              role="tab"
              id="tab-schema"
              aria-controls="panel-schema"
              aria-selected={activeTab === 'schema'}
              tabIndex={0}
              onKeyDown={(e) => handleViewTabKeyDown(e, 'schema')}
              onClick={() => setActiveTab('schema')}
              className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded text-xs font-semibold transition-colors cursor-pointer ${
                activeTab === 'schema'
                  ? 'bg-soft-charcoal text-warm-ivory'
                  : 'text-natural-taupe hover:text-warm-ivory'
              }`}
            >
              <FileCode className="w-3.5 h-3.5 text-electric-apricot" />
              <span>Data Contract</span>
            </button>
          </div>

          {/* Tab View: Overview */}
          {activeTab === 'overview' && (
            <div
              role="tabpanel"
              id="panel-overview"
              aria-labelledby="tab-overview"
              className="flex flex-col gap-8"
            >
              {/* Problem & Solution Synthesis */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                <div className="flex flex-col gap-2.5 p-5 bg-obsidian/70 rounded-lg border border-charcoal-border">
                  <span className="text-xs font-semibold text-electric-apricot">
                    The Engineering Problem
                  </span>
                  <p className="text-sm text-warm-ivory/90 leading-relaxed">
                    {activeProject.problem}
                  </p>
                </div>

                <div className="flex flex-col gap-2.5 p-5 bg-obsidian/70 rounded-lg border border-charcoal-border">
                  <span className="text-xs font-semibold text-electric-apricot">
                    The Architectural Solution
                  </span>
                  <p className="text-sm text-warm-ivory/90 leading-relaxed">
                    {activeProject.solution}
                  </p>
                </div>
              </div>

              {/* Architecture Blueprint List */}
              <div className="flex flex-col gap-4 bg-obsidian/70 p-6 rounded-lg border border-charcoal-border">
                <div className="flex items-center gap-2 text-sm font-semibold text-warm-ivory">
                  <Layers className="w-4 h-4 text-electric-apricot" />
                  <span>Architectural Blueprint</span>
                </div>
                <ul className="grid grid-cols-1 gap-2.5 mt-1">
                  {activeProject.architecture.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-xs sm:text-sm text-natural-taupe"
                    >
                      <span className="text-electric-apricot mt-0.5">•</span>
                      <span className="text-warm-ivory/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Core Contributions */}
              <div className="flex flex-col gap-4">
                <span className="text-xs font-semibold text-natural-taupe">
                  Engineering Contributions
                </span>
                <div className="grid grid-cols-1 gap-3">
                  {activeProject.contributions.map((contribution, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 text-sm text-natural-taupe"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-warm-ivory/90 leading-relaxed">{contribution}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab View: Pipeline */}
          {activeTab === 'pipeline' && (
            <div
              role="tabpanel"
              id="panel-pipeline"
              aria-labelledby="tab-pipeline"
              className="flex flex-col gap-6"
            >
              <span className="text-xs font-semibold text-natural-taupe">
                Runtime Execution Pipeline
              </span>

              {/* Pipeline Flow Grid with Directional Connectors */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {activeProject.pipeline.map((stage, sIdx) => {
                  const romanStages = ['Stage I', 'Stage II', 'Stage III', 'Stage IV'];
                  return (
                    <div
                      key={stage.step}
                      className="relative p-5 bg-obsidian/80 rounded-lg flex flex-col justify-between gap-3 border border-charcoal-border"
                    >
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-electric-apricot">
                            {romanStages[sIdx] || `Stage ${stage.step}`}
                          </span>
                          <Workflow className="w-3.5 h-3.5 text-natural-taupe" />
                        </div>
                        <div className="text-sm sm:text-base font-display font-bold text-warm-ivory">
                          {stage.name}
                        </div>
                      </div>

                      <p className="text-xs text-natural-taupe leading-relaxed">
                        {stage.description}
                      </p>

                      {/* Directional flow indicators on desktop */}
                      {sIdx < activeProject.pipeline.length - 1 && (
                        <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-soft-charcoal items-center justify-center border border-charcoal-border">
                          <ArrowRight className="w-3 h-3 text-electric-apricot" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Tab View: Schema & Data Contract */}
          {activeTab === 'schema' && (
            <div
              role="tabpanel"
              id="panel-schema"
              aria-labelledby="tab-schema"
              className="flex flex-col gap-4"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-semibold text-natural-taupe">
                  <FileCode className="w-4 h-4 text-electric-apricot" />
                  <code>{activeProject.codeSnippet.filename}</code>
                </div>
                <button
                  onClick={() => handleCopyCode(activeProject.codeSnippet.code)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-obsidian text-warm-ivory hover:text-electric-apricot rounded text-xs font-medium transition-colors cursor-pointer border border-charcoal-border"
                  aria-label="Copy schema to clipboard"
                >
                  {copiedCode ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span>Copied Schema</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Schema</span>
                    </>
                  )}
                </button>
              </div>

              <div className="bg-obsidian/95 p-5 rounded-lg overflow-x-auto text-xs sm:text-sm text-warm-ivory leading-relaxed border border-charcoal-border">
                <pre className="text-warm-ivory font-mono">
                  <code>{activeProject.codeSnippet.code}</code>
                </pre>
              </div>
            </div>
          )}

          {/* Technology Badges & State Footer */}
          <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex flex-wrap gap-2.5">
              {activeProject.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 bg-organic-olive text-warm-ivory rounded text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-2 text-xs text-natural-taupe font-medium shrink-0">
              <Cpu className="w-4 h-4 text-electric-apricot" />
              <span>{activeProject.metricsOrState}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

