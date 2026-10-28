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
              INFERENCE // ONNX RUNTIME WASM
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
                Local cosine distance across botanical taxonomy dataset
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
              AST Dependency Graph &amp; Exit Capsule Pipeline
            </span>
            <samp className="font-mono text-[10px] text-taupe-muted">
              ENGINE // GEMMA 4 + AST
            </samp>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
            <div className="p-3 bg-soft-charcoal/80 rounded flex flex-col gap-1.5">
              <span className="text-[10px] text-electric-apricot font-semibold">Stage I</span>
              <span className="font-bold text-warm-ivory">AST Ingestion</span>
              <span className="text-natural-taupe text-[11px] leading-tight">
                Parses dependency imports and deprecated symbols
              </span>
            </div>

            <div className="p-3 bg-soft-charcoal/80 rounded flex flex-col gap-1.5">
              <span className="text-[10px] text-electric-apricot font-semibold">Stage II</span>
              <span className="font-bold text-warm-ivory">Decay Classifier</span>
              <span className="text-natural-taupe text-[11px] leading-tight">
                Detects abandoned libraries and Python 3.12+ shifts
              </span>
            </div>

            <div className="p-3 bg-soft-charcoal/80 rounded flex flex-col gap-1.5">
              <span className="text-[10px] text-electric-apricot font-semibold">Stage III</span>
              <span className="font-bold text-warm-ivory">Gemma 4 Capsule</span>
              <span className="text-natural-taupe text-[11px] leading-tight">
                Synthesizes surgical modernization migration patches
              </span>
            </div>

            <div className="p-3 bg-organic-olive/50 rounded flex flex-col gap-1.5">
              <span className="text-[10px] text-warm-ivory font-semibold">Stage IV</span>
              <span className="font-bold text-warm-ivory">Test Verification</span>
              <span className="text-natural-taupe text-[11px] leading-tight">
                Deterministic test runner verifies zero regression
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
              Tabular Risk Quantification &amp; Follow-Up Engine
            </span>
            <samp className="font-mono text-[10px] text-taupe-muted">
              MODEL // TABPFN + GEMMA
            </samp>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
            <div className="p-3 bg-soft-charcoal/80 rounded flex flex-col gap-1.5">
              <span className="text-[10px] text-electric-apricot font-semibold">Stage I</span>
              <span className="font-bold text-warm-ivory">Ledger Ingestion</span>
              <span className="text-natural-taupe text-[11px] leading-tight">
                In-memory parse of invoice history with zero PII store
              </span>
            </div>

            <div className="p-3 bg-soft-charcoal/80 rounded flex flex-col gap-1.5">
              <span className="text-[10px] text-electric-apricot font-semibold">Stage II</span>
              <span className="font-bold text-warm-ivory">TabPFN Risk</span>
              <span className="text-natural-taupe text-[11px] leading-tight">
                Tabular prior-fitted late payment probability
              </span>
            </div>

            <div className="p-3 bg-soft-charcoal/80 rounded flex flex-col gap-1.5">
              <span className="text-[10px] text-electric-apricot font-semibold">Stage III</span>
              <span className="font-bold text-warm-ivory">Gemma Drafting</span>
              <span className="text-natural-taupe text-[11px] leading-tight">
                Calibrated follow-ups with risk-tiered tone
              </span>
            </div>

            <div className="p-3 bg-organic-olive/50 rounded flex flex-col gap-1.5">
              <span className="text-[10px] text-warm-ivory font-semibold">Stage IV</span>
              <span className="font-bold text-warm-ivory">Mail Handoff</span>
              <span className="text-natural-taupe text-[11px] leading-tight">
                One-click prefill into Gmail compose via mailto:
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
              Civic Ingestion &amp; Ward Candidate Report Card
            </span>
            <samp className="font-mono text-[10px] text-taupe-muted">
              DELIVERY // 227 WARDS · GEMINI AI
            </samp>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
            <div className="p-3 bg-soft-charcoal/80 rounded flex flex-col gap-1.5">
              <span className="text-[10px] text-electric-apricot font-semibold">Stage I</span>
              <span className="font-bold text-warm-ivory">Sync Engine</span>
              <span className="text-natural-taupe text-[11px] leading-tight">
                Parses official election disclosures and assets
              </span>
            </div>

            <div className="p-3 bg-soft-charcoal/80 rounded flex flex-col gap-1.5">
              <span className="text-[10px] text-electric-apricot font-semibold">Stage II</span>
              <span className="font-bold text-warm-ivory">Disclosure Schema</span>
              <span className="text-natural-taupe text-[11px] leading-tight">
                Normalizes criminal, asset, and promise data
              </span>
            </div>

            <div className="p-3 bg-soft-charcoal/80 rounded flex flex-col gap-1.5">
              <span className="text-[10px] text-electric-apricot font-semibold">Stage III</span>
              <span className="font-bold text-warm-ivory">Ward GIS Linker</span>
              <span className="text-natural-taupe text-[11px] leading-tight">
                Maps 1,578+ candidates across 227 municipal wards
              </span>
            </div>

            <div className="p-3 bg-organic-olive/50 rounded flex flex-col gap-1.5">
              <span className="text-[10px] text-warm-ivory font-semibold">Stage IV</span>
              <span className="font-bold text-warm-ivory">Gemini Summaries</span>
              <span className="text-natural-taupe text-[11px] leading-tight">
                Objective, non-partisan AI civic analysis
              </span>
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
}
