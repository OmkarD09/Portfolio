'use client';

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Project } from '@/data/portfolio';
import {
  Activity,
  Cpu,
  GitBranch,
  Layers,
  MapPin,
  Mic,
  ShieldAlert,
  Sliders,
  Sparkles,
  Workflow,
  ArrowRight,
} from 'lucide-react';

interface ProjectVisualizerProps {
  project: Project;
}

export function ProjectVisualizer({ project }: ProjectVisualizerProps) {
  const prefersReducedMotion = useReducedMotion();

  switch (project.id) {
    case 'swasthyavaani':
      return (
        <div className="bg-obsidian/90 p-5 rounded-lg flex flex-col gap-4">
          <div className="flex items-center justify-between text-xs text-natural-taupe">
            <span className="font-semibold text-warm-ivory flex items-center gap-2">
              <Mic className="w-3.5 h-3.5 text-electric-apricot" />
              Clinical Ingestion &amp; Ontology Pipeline
            </span>
            <samp className="font-mono text-[10px] text-taupe-muted">
              MODE // AMBIENT 16kHz
            </samp>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
            <div className="p-3 bg-soft-charcoal/80 rounded flex flex-col gap-1.5">
              <span className="text-[10px] text-electric-apricot font-semibold">Stage I</span>
              <span className="font-bold text-warm-ivory">Ambient Audio</span>
              <span className="text-natural-taupe text-[11px] leading-tight">
                WebAudio silence gating &amp; noise suppression
              </span>
            </div>

            <div className="p-3 bg-soft-charcoal/80 rounded flex flex-col gap-1.5">
              <span className="text-[10px] text-electric-apricot font-semibold">Stage II</span>
              <span className="font-bold text-warm-ivory">Phonetic Normalizer</span>
              <span className="text-natural-taupe text-[11px] leading-tight">
                Dialect mapping across rural clinic vernacular
              </span>
            </div>

            <div className="p-3 bg-soft-charcoal/80 rounded flex flex-col gap-1.5">
              <span className="text-[10px] text-electric-apricot font-semibold">Stage III</span>
              <span className="font-bold text-warm-ivory">Ontology Linker</span>
              <span className="text-natural-taupe text-[11px] leading-tight">
                SNOMED-CT &amp; ICD-10 concept entity linkage
              </span>
            </div>

            <div className="p-3 bg-organic-olive/50 rounded flex flex-col gap-1.5">
              <span className="text-[10px] text-warm-ivory font-semibold">Stage IV</span>
              <span className="font-bold text-warm-ivory">SOAP Record</span>
              <span className="text-natural-taupe text-[11px] leading-tight">
                Deterministic schema-validated clinical summary
              </span>
            </div>
          </div>
        </div>
      );

    case 'trailscribe':
      return (
        <div className="bg-obsidian/90 p-5 rounded-lg flex flex-col gap-4">
          <div className="flex items-center justify-between text-xs text-natural-taupe">
            <span className="font-semibold text-warm-ivory flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5 text-electric-apricot" />
              Offline-First Edge Vector Search Architecture
            </span>
            <samp className="font-mono text-[10px] text-taupe-muted">
              INFERENCE // ONNX WASM &lt;180ms
            </samp>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
            <div className="p-3 bg-soft-charcoal/80 rounded flex flex-col gap-1.5">
              <span className="text-[10px] text-electric-apricot font-semibold">Stage I</span>
              <span className="font-bold text-warm-ivory">Specimen Input</span>
              <span className="text-natural-taupe text-[11px] leading-tight">
                Raw camera frame with WebGL exposure balance
              </span>
            </div>

            <div className="p-3 bg-soft-charcoal/80 rounded flex flex-col gap-1.5">
              <span className="text-[10px] text-electric-apricot font-semibold">Stage II</span>
              <span className="font-bold text-warm-ivory">WASM Tensor</span>
              <span className="text-natural-taupe text-[11px] leading-tight">
                Quantized 384-dim visual embedding generation
              </span>
            </div>

            <div className="p-3 bg-soft-charcoal/80 rounded flex flex-col gap-1.5">
              <span className="text-[10px] text-electric-apricot font-semibold">Stage III</span>
              <span className="font-bold text-warm-ivory">IndexedDB K-NN</span>
              <span className="text-natural-taupe text-[11px] leading-tight">
                Local cosine distance across 8,500 indexed flora
              </span>
            </div>

            <div className="p-3 bg-organic-olive/50 rounded flex flex-col gap-1.5">
              <span className="text-[10px] text-warm-ivory font-semibold">Stage IV</span>
              <span className="font-bold text-warm-ivory">CRDT Sync Queue</span>
              <span className="text-natural-taupe text-[11px] leading-tight">
                Conflict-free replicated log awaiting network
              </span>
            </div>
          </div>
        </div>
      );

    case 'resilify':
      return (
        <div className="bg-obsidian/90 p-5 rounded-lg flex flex-col gap-4">
          <div className="flex items-center justify-between text-xs text-natural-taupe">
            <span className="font-semibold text-warm-ivory flex items-center gap-2">
              <GitBranch className="w-3.5 h-3.5 text-electric-apricot" />
              AST Dependency Graph &amp; Codemod Pipeline
            </span>
            <samp className="font-mono text-[10px] text-taupe-muted">
              ANALYZER // SWC AST PARSER
            </samp>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
            <div className="p-3 bg-soft-charcoal/80 rounded flex flex-col gap-1.5">
              <span className="text-[10px] text-electric-apricot font-semibold">Stage I</span>
              <span className="font-bold text-warm-ivory">Lockfile DAG</span>
              <span className="text-natural-taupe text-[11px] leading-tight">
                Topological transitive dependency traversal
              </span>
            </div>

            <div className="p-3 bg-soft-charcoal/80 rounded flex flex-col gap-1.5">
              <span className="text-[10px] text-electric-apricot font-semibold">Stage II</span>
              <span className="font-bold text-warm-ivory">AST Export Diff</span>
              <span className="text-natural-taupe text-[11px] leading-tight">
                Semantic TypeScript export signature diffing
              </span>
            </div>

            <div className="p-3 bg-soft-charcoal/80 rounded flex flex-col gap-1.5">
              <span className="text-[10px] text-electric-apricot font-semibold">Stage III</span>
              <span className="font-bold text-warm-ivory">Breaking Classifier</span>
              <span className="text-natural-taupe text-[11px] leading-tight">
                Identifies removed exports and union mutations
              </span>
            </div>

            <div className="p-3 bg-organic-olive/50 rounded flex flex-col gap-1.5">
              <span className="text-[10px] text-warm-ivory font-semibold">Stage IV</span>
              <span className="font-bold text-warm-ivory">Codemod Generator</span>
              <span className="text-natural-taupe text-[11px] leading-tight">
                Synthesizes compatibility polyfills &amp; tests
              </span>
            </div>
          </div>
        </div>
      );

    case 'cashnudge':
      return (
        <div className="bg-obsidian/90 p-5 rounded-lg flex flex-col gap-4">
          <div className="flex items-center justify-between text-xs text-natural-taupe">
            <span className="font-semibold text-warm-ivory flex items-center gap-2">
              <Sliders className="w-3.5 h-3.5 text-electric-apricot" />
              Receivables Behavioral Risk &amp; Escalation Machine
            </span>
            <samp className="font-mono text-[10px] text-taupe-muted">
              ENGINE // FINITE STATE CADENCE
            </samp>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
            <div className="p-3 bg-soft-charcoal/80 rounded flex flex-col gap-1.5">
              <span className="text-[10px] text-electric-apricot font-semibold">Stage I</span>
              <span className="font-bold text-warm-ivory">Ledger Ingestion</span>
              <span className="text-natural-taupe text-[11px] leading-tight">
                Syncs Stripe invoice aging and settlement logs
              </span>
            </div>

            <div className="p-3 bg-soft-charcoal/80 rounded flex flex-col gap-1.5">
              <span className="text-[10px] text-electric-apricot font-semibold">Stage II</span>
              <span className="font-bold text-warm-ivory">Risk Vectoring</span>
              <span className="text-natural-taupe text-[11px] leading-tight">
                Delinquency probability from payment history
              </span>
            </div>

            <div className="p-3 bg-soft-charcoal/80 rounded flex flex-col gap-1.5">
              <span className="text-[10px] text-electric-apricot font-semibold">Stage III</span>
              <span className="font-bold text-warm-ivory">Adaptive Cadence</span>
              <span className="text-natural-taupe text-[11px] leading-tight">
                Multi-stage follow-ups tuned to client tenure
              </span>
            </div>

            <div className="p-3 bg-organic-olive/50 rounded flex flex-col gap-1.5">
              <span className="text-[10px] text-warm-ivory font-semibold">Stage IV</span>
              <span className="font-bold text-warm-ivory">Instant Settlement</span>
              <span className="text-natural-taupe text-[11px] leading-tight">
                Friction-free portal with automatic reconciliation
              </span>
            </div>
          </div>
        </div>
      );

    case 'jantrack-mumbai':
      return (
        <div className="bg-obsidian/90 p-5 rounded-lg flex flex-col gap-4">
          <div className="flex items-center justify-between text-xs text-natural-taupe">
            <span className="font-semibold text-warm-ivory flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-electric-apricot" />
              Public Affidavit OCR &amp; Geospatial Ward Pipeline
            </span>
            <samp className="font-mono text-[10px] text-taupe-muted">
              DELIVERY // EDGE SSR &lt;80ms
            </samp>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
            <div className="p-3 bg-soft-charcoal/80 rounded flex flex-col gap-1.5">
              <span className="text-[10px] text-electric-apricot font-semibold">Stage I</span>
              <span className="font-bold text-warm-ivory">Affidavit OCR</span>
              <span className="text-natural-taupe text-[11px] leading-tight">
                Parses scanned PDF election commission filings
              </span>
            </div>

            <div className="p-3 bg-soft-charcoal/80 rounded flex flex-col gap-1.5">
              <span className="text-[10px] text-electric-apricot font-semibold">Stage II</span>
              <span className="font-bold text-warm-ivory">Disclosure Schema</span>
              <span className="text-natural-taupe text-[11px] leading-tight">
                Normalizes criminal, asset, and educational data
              </span>
            </div>

            <div className="p-3 bg-soft-charcoal/80 rounded flex flex-col gap-1.5">
              <span className="text-[10px] text-electric-apricot font-semibold">Stage III</span>
              <span className="font-bold text-warm-ivory">Ward GIS Linker</span>
              <span className="text-natural-taupe text-[11px] leading-tight">
                Intersects candidate profiles with municipal wards
              </span>
            </div>

            <div className="p-3 bg-organic-olive/50 rounded flex flex-col gap-1.5">
              <span className="text-[10px] text-warm-ivory font-semibold">Stage IV</span>
              <span className="font-bold text-warm-ivory">Edge SSR</span>
              <span className="text-natural-taupe text-[11px] leading-tight">
                High-performance delivery optimized for mobile 3G
              </span>
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
}
