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
  CheckCircle2,
} from 'lucide-react';
import { durations, easings, transitions } from '@/lib/motion';

interface ProjectVisualizerProps {
  project: Project;
}

interface StageData {
  stage: string;
  name: string;
  desc: string;
  isTerminal?: boolean;
}

function VisualizerStageGrid({ stages }: { stages: StageData[] }) {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.07,
        delayChildren: prefersReducedMotion ? 0 : 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: prefersReducedMotion ? 1 : 0,
      y: prefersReducedMotion ? 0 : 8,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: durations.swift,
        ease: easings.editorial,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs relative"
    >
      {stages.map((stage, idx) => {
        return (
          <motion.div
            key={stage.stage}
            variants={itemVariants}
            whileHover={
              prefersReducedMotion
                ? undefined
                : {
                    y: -2,
                    transition: transitions.swift,
                  }
            }
            className={`relative p-3.5 rounded flex flex-col justify-between gap-2 border transition-colors cursor-default ${
              stage.isTerminal
                ? 'bg-organic-olive/60 border-organic-olive text-warm-ivory'
                : 'bg-soft-charcoal/80 border-charcoal-border text-natural-taupe hover:border-taupe-muted/40'
            }`}
          >
            <div className="flex items-center justify-between">
              <span
                className={`text-[10px] font-semibold ${
                  stage.isTerminal ? 'text-warm-ivory' : 'text-electric-apricot'
                }`}
              >
                {stage.stage}
              </span>
              {stage.isTerminal ? (
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
              ) : (
                <samp className="font-mono text-[9px] text-taupe-muted">0{idx + 1}</samp>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <span className="font-bold text-warm-ivory">{stage.name}</span>
              <span className="text-natural-taupe text-[11px] leading-tight">
                {stage.desc}
              </span>
            </div>

            {/* Desktop Stage Directional Connector Flow */}
            {idx < stages.length - 1 && (
              <div
                className="hidden sm:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10 w-4 h-4 rounded-full bg-obsidian items-center justify-center border border-charcoal-border pointer-events-none"
                aria-hidden="true"
              >
                <ArrowRight className="w-2.5 h-2.5 text-electric-apricot" />
              </div>
            )}
          </motion.div>
        );
      })}
    </motion.div>
  );
}

export function ProjectVisualizer({ project }: ProjectVisualizerProps) {
  switch (project.id) {
    case 'swasthyavaani':
      return (
        <div className="bg-obsidian/90 p-5 rounded-lg flex flex-col gap-4 border border-charcoal-border">
          <div className="flex items-center justify-between text-xs text-natural-taupe">
            <span className="font-semibold text-warm-ivory flex items-center gap-2">
              <Mic className="w-3.5 h-3.5 text-electric-apricot" />
              Clinical Ingestion &amp; Ontology Pipeline
            </span>
            <samp className="font-mono text-[10px] text-taupe-muted">
              MODE // AMBIENT 16kHz
            </samp>
          </div>

          <VisualizerStageGrid
            stages={[
              {
                stage: 'Stage I',
                name: 'Ambient Audio',
                desc: 'WebAudio silence gating & noise suppression',
              },
              {
                stage: 'Stage II',
                name: 'Phonetic Normalizer',
                desc: 'Dialect mapping across rural clinic vernacular',
              },
              {
                stage: 'Stage III',
                name: 'Ontology Linker',
                desc: 'SNOMED-CT & ICD-10 concept entity linkage',
              },
              {
                stage: 'Stage IV',
                name: 'SOAP Record',
                desc: 'Deterministic schema-validated clinical summary',
                isTerminal: true,
              },
            ]}
          />
        </div>
      );

    case 'trailscribe':
      return (
        <div className="bg-obsidian/90 p-5 rounded-lg flex flex-col gap-4 border border-charcoal-border">
          <div className="flex items-center justify-between text-xs text-natural-taupe">
            <span className="font-semibold text-warm-ivory flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5 text-electric-apricot" />
              Offline-First Edge Vector Search Architecture
            </span>
            <samp className="font-mono text-[10px] text-taupe-muted">
              INFERENCE // ONNX RUNTIME WASM
            </samp>
          </div>

          <VisualizerStageGrid
            stages={[
              {
                stage: 'Stage I',
                name: 'Specimen Input',
                desc: 'Raw camera frame with WebGL exposure balance',
              },
              {
                stage: 'Stage II',
                name: 'WASM Tensor',
                desc: 'Quantized 384-dim visual embedding generation',
              },
              {
                stage: 'Stage III',
                name: 'IndexedDB K-NN',
                desc: 'Local cosine distance across botanical taxonomy dataset',
              },
              {
                stage: 'Stage IV',
                name: 'CRDT Sync Queue',
                desc: 'Conflict-free replicated log awaiting network',
                isTerminal: true,
              },
            ]}
          />
        </div>
      );

    case 'resilify':
      return (
        <div className="bg-obsidian/90 p-5 rounded-lg flex flex-col gap-4 border border-charcoal-border">
          <div className="flex items-center justify-between text-xs text-natural-taupe">
            <span className="font-semibold text-warm-ivory flex items-center gap-2">
              <GitBranch className="w-3.5 h-3.5 text-electric-apricot" />
              AST Dependency Graph &amp; Exit Capsule Pipeline
            </span>
            <samp className="font-mono text-[10px] text-taupe-muted">
              ENGINE // GEMMA 4 + AST
            </samp>
          </div>

          <VisualizerStageGrid
            stages={[
              {
                stage: 'Stage I',
                name: 'AST Ingestion',
                desc: 'Parses dependency imports and deprecated symbols',
              },
              {
                stage: 'Stage II',
                name: 'Decay Classifier',
                desc: 'Detects abandoned libraries and Python 3.12+ shifts',
              },
              {
                stage: 'Stage III',
                name: 'Gemma 4 Capsule',
                desc: 'Synthesizes surgical modernization migration patches',
              },
              {
                stage: 'Stage IV',
                name: 'Test Verification',
                desc: 'Deterministic test runner verifies zero regression',
                isTerminal: true,
              },
            ]}
          />
        </div>
      );

    case 'cashnudge':
      return (
        <div className="bg-obsidian/90 p-5 rounded-lg flex flex-col gap-4 border border-charcoal-border">
          <div className="flex items-center justify-between text-xs text-natural-taupe">
            <span className="font-semibold text-warm-ivory flex items-center gap-2">
              <Sliders className="w-3.5 h-3.5 text-electric-apricot" />
              Tabular Risk Quantification &amp; Follow-Up Engine
            </span>
            <samp className="font-mono text-[10px] text-taupe-muted">
              MODEL // TABPFN + GEMMA
            </samp>
          </div>

          <VisualizerStageGrid
            stages={[
              {
                stage: 'Stage I',
                name: 'Ledger Ingestion',
                desc: 'In-memory parse of invoice history with zero PII store',
              },
              {
                stage: 'Stage II',
                name: 'TabPFN Risk',
                desc: 'Tabular prior-fitted late payment probability',
              },
              {
                stage: 'Stage III',
                name: 'Gemma Drafting',
                desc: 'Calibrated follow-ups with risk-tiered tone',
              },
              {
                stage: 'Stage IV',
                name: 'Mail Handoff',
                desc: 'One-click prefill into Gmail compose via mailto:',
                isTerminal: true,
              },
            ]}
          />
        </div>
      );

    case 'jantrack-mumbai':
      return (
        <div className="bg-obsidian/90 p-5 rounded-lg flex flex-col gap-4 border border-charcoal-border">
          <div className="flex items-center justify-between text-xs text-natural-taupe">
            <span className="font-semibold text-warm-ivory flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-electric-apricot" />
              Civic Ingestion &amp; Ward Candidate Report Card
            </span>
            <samp className="font-mono text-[10px] text-taupe-muted">
              DELIVERY // 227 WARDS · GEMINI AI
            </samp>
          </div>

          <VisualizerStageGrid
            stages={[
              {
                stage: 'Stage I',
                name: 'Sync Engine',
                desc: 'Parses official election disclosures and assets',
              },
              {
                stage: 'Stage II',
                name: 'Disclosure Schema',
                desc: 'Normalizes criminal, asset, and promise data',
              },
              {
                stage: 'Stage III',
                name: 'Ward GIS Linker',
                desc: 'Maps 1,578+ candidates across 227 municipal wards',
              },
              {
                stage: 'Stage IV',
                name: 'Gemini Summaries',
                desc: 'Objective, non-partisan AI civic analysis',
                isTerminal: true,
              },
            ]}
          />
        </div>
      );

    default:
      return null;
  }
}
