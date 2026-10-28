'use client';

import React from 'react';
import { Terminal, Search, Copy, Check, Layers, Cpu, ArrowUpRight, X } from 'lucide-react';
import { PROJECTS } from '@/data/portfolio';

export function CommandPalette() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [copied, setCopied] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');

  // Keyboard shortcut listener (Cmd+K / Ctrl+K / Escape)
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Body scroll locking when open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleCopyEmail = async () => {
    let success = false;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText('contact@omkar.dev');
        success = true;
      }
    } catch {
      // Fall through to textarea fallback
    }

    if (!success) {
      try {
        const textArea = document.createElement('textarea');
        textArea.value = 'contact@omkar.dev';
        textArea.style.position = 'fixed';
        textArea.style.left = '-9999px';
        textArea.style.top = '-9999px';
        textArea.setAttribute('readonly', '');
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        success = document.execCommand('copy');
        document.body.removeChild(textArea);
      } catch {
        success = false;
      }
    }

    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleSelectProject = (projectId: string) => {
    window.dispatchEvent(new CustomEvent('select-project', { detail: projectId }));
    setIsOpen(false);
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const filteredProjects = PROJECTS.filter(
    (p) =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {/* Floating HUD Trigger Pill in Bottom Right */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsOpen(true)}
          className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-soft-charcoal text-warm-ivory hover:text-electric-apricot rounded-full text-xs font-semibold cursor-pointer transition-colors border border-charcoal-border/70"
          aria-label="Open developer command palette"
        >
          <Terminal className="w-3.5 h-3.5 text-electric-apricot" />
          <span className="hidden sm:inline">Developer Console</span>
          <kbd className="px-1.5 py-0.5 bg-obsidian text-natural-taupe rounded text-[10px] font-sans">
            ⌘K
          </kbd>
        </button>
      </div>

      {/* Modal Backdrop & Drawer */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Developer Command Palette"
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian/90 animate-in fade-in-0 duration-150"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-xl bg-soft-charcoal rounded-xl p-6 flex flex-col gap-5 border border-charcoal-border"
          >
            {/* Search Input Bar */}
            <div className="flex items-center justify-between pb-3">
              <div className="flex items-center gap-3 w-full">
                <Search className="w-4 h-4 text-natural-taupe shrink-0" />
                <input
                  type="text"
                  placeholder="Jump to project or run action..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  className="w-full bg-transparent text-sm text-warm-ivory placeholder:text-natural-taupe/60 focus:outline-none"
                />
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 text-natural-taupe hover:text-warm-ivory rounded transition-colors cursor-pointer"
                aria-label="Close command palette"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Actions Grid */}
            <div className="flex flex-col gap-2">
              <span className="text-[11px] font-semibold text-natural-taupe">
                Instant Actions
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex items-center justify-between p-3 bg-obsidian rounded-md text-xs font-medium text-warm-ivory hover:text-electric-apricot transition-colors text-left cursor-pointer border border-charcoal-border/40"
                >
                  <div className="flex items-center gap-2">
                    {copied ? (
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                    ) : (
                      <Copy className="w-3.5 h-3.5 text-electric-apricot" />
                    )}
                    <span>{copied ? 'Email Copied!' : 'Copy Direct Email'}</span>
                  </div>
                  <span className="text-[10px] text-natural-taupe">contact@omkar.dev</span>
                </button>

                <a
                  href="https://github.com/OmkarD09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 bg-obsidian rounded-md text-xs font-medium text-warm-ivory hover:text-electric-apricot transition-colors border border-charcoal-border/40"
                >
                  <div className="flex items-center gap-2">
                    <ArrowUpRight className="w-3.5 h-3.5 text-electric-apricot" />
                    <span>GitHub Profile</span>
                  </div>
                  <span className="text-[10px] text-natural-taupe">@OmkarD09</span>
                </a>
              </div>
            </div>

            {/* Project Quick Jump List */}
            <div className="flex flex-col gap-2 max-h-60 overflow-y-auto pt-2">
              <span className="text-[11px] font-semibold text-natural-taupe">
                Showcase Projects
              </span>
              <div className="flex flex-col gap-1.5">
                {filteredProjects.map((project) => (
                  <button
                    key={project.id}
                    type="button"
                    onClick={() => handleSelectProject(project.id)}
                    className="flex items-center justify-between p-3 bg-obsidian/70 hover:bg-obsidian rounded-md transition-colors text-warm-ivory hover:text-electric-apricot text-left cursor-pointer border border-charcoal-border/30"
                  >
                    <div className="flex items-center gap-3">
                      <Layers className="w-3.5 h-3.5 text-electric-apricot shrink-0" />
                      <div>
                        <div className="text-xs font-semibold">{project.title}</div>
                        <div className="text-[11px] text-natural-taupe line-clamp-1">
                          {project.tagline}
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] text-natural-taupe shrink-0 ml-2">
                      {project.category.split('·')[0].trim()}
                    </span>
                  </button>
                ))}
                {filteredProjects.length === 0 && (
                  <p className="text-xs text-natural-taupe py-4 text-center">
                    No matching systems found.
                  </p>
                )}
              </div>
            </div>

            {/* System Status Footnote */}
            <div className="pt-3 flex items-center justify-between text-[11px] text-natural-taupe">
              <div className="flex items-center gap-2">
                <Cpu className="w-3.5 h-3.5 text-electric-apricot" />
                <span>Next.js 16 · Turbopack · Dark Organic</span>
              </div>
              <span>Press ESC to exit</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
