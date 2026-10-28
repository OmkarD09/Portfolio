export interface PipelineStage {
  step: string;
  name: string;
  description: string;
}

export interface CodeSnippet {
  filename: string;
  language: string;
  code: string;
}

export type AccessStatus = 'public' | 'private' | 'in-development' | 'proprietary';

export interface ProjectLinks {
  github?: string;
  demo?: string;
  accessStatus: AccessStatus;
  accessLabel: string;
  accessNote: string;
  inquirySubject: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: string;
  problem: string;
  solution: string;
  architecture: string[];
  techStack: string[];
  contributions: string[];
  metricsOrState: string;
  pipeline: PipelineStage[];
  codeSnippet: CodeSnippet;
  links: ProjectLinks;
}

export const PROJECTS: Project[] = [
  {
    id: 'swasthyavaani',
    title: 'SwasthyaVaani',
    tagline: 'AI-Powered Clinical Patient Case-Taking',
    category: 'Healthcare AI · Voice & Multilingual',
    problem:
      'Doctors in high-volume rural clinics spend over 40% of consultation time typing unstructured notes across diverse dialects, leading to clinician burnout and loss of critical diagnostic nuances.',
    solution:
      'Engineered an AI-assisted clinical intake companion for Indian healthcare workflows that structures conversational patient symptoms into a ClinicalState, generating physician-reviewable SOAP documentation before consultations.',
    architecture: [
      'Conversational intake pipeline with patient-friendly adaptive questioning',
      'Clinical ontology entity extraction aligned with ABDM and FHIR R4',
      'Deterministic structured SOAP note generation',
      'Zero-dependency offline mode with SQLite and simulated local providers',
    ],
    techStack: ['React 19', 'TypeScript', 'FastAPI', 'Python 3.12', 'ABDM / FHIR R4', 'Tailwind CSS'],
    contributions: [
      'Architected conversational pre-consultation intake engine with structured ClinicalState synthesis',
      'Implemented FHIR R4 and ABDM schema validation for clinician-reviewable encounter summaries',
      'Engineered zero-dependency offline fallback mode running on local SQLite and simulated providers',
    ],
    metricsOrState: 'Architectural Prototype · Multilingual Clinical Pipeline & Schema Specification',
    pipeline: [
      {
        step: 'I',
        name: 'Ambient Buffer',
        description: 'Real-time 16kHz audio stream chunking with client-side silence threshold gating.',
      },
      {
        step: 'II',
        name: 'Phonetic Alignment',
        description: 'Multilingual phoneme matching tailored to regional clinic dialect vernacular.',
      },
      {
        step: 'III',
        name: 'Ontology Mapping',
        description: 'Entity extraction mapped deterministically to SNOMED-CT and ICD-10 concepts.',
      },
      {
        step: 'IV',
        name: 'SOAP Synthesis',
        description: 'Strict schema-validated generation of physician encounter documentation.',
      },
    ],
    codeSnippet: {
      filename: 'types/clinical-encounter.ts',
      language: 'typescript',
      code: `interface ClinicalEncounterDraft {
  sessionId: string;
  encounterType: 'OPD_WALKIN' | 'FOLLOW_UP';
  symptoms: Array<{
    chiefComplaint: string;
    durationDays: number;
    severity: 'MILD' | 'MODERATE' | 'ACUTE';
    snomedConceptId: string;
  }>;
  vitals: {
    systolicBp?: number;
    diastolicBp?: number;
    pulseBpm?: number;
    tempCelsius?: number;
  };
  prescriptions: Array<{
    drugGenericName: string;
    dosageMg: number;
    frequencySchedule: 'OD' | 'BD' | 'TDS' | 'PRN';
    durationDays: number;
    contraindicationFlags: string[];
  }>;
  deterministicChecksum: string;
}`,
    },
    links: {
      github: 'https://github.com/OmkarD09/SwasthyaVaani',
      accessStatus: 'public',
      accessLabel: 'Open Source · Smart India Hackathon',
      accessNote:
        'AI-assisted clinical intake companion engineered for Indian healthcare workflows (SIH 2026). Public code and documentation available on GitHub.',
      inquirySubject: 'Architecture Access: SwasthyaVaani',
    },
  },
  {
    id: 'trailscribe',
    title: 'TrailScribe',
    tagline: 'Offline-First AI Naturalist Field Companion',
    category: 'Edge AI · Local Vector Search',
    problem:
      'Naturalists, forest guards, and field biologists working in remote wilderness areas lose access to cloud models and databases precisely when identifying rare species and cataloging ecological specimens.',
    solution:
      'Built an open-weight, zero-cloud naturalist field companion PWA powered by Google Gemma 2:2B and local vector indexing (IndexedDB/WASM) for on-device botanical specimen classification and offline field logs.',
    architecture: [
      'Local-first PWA architecture powered by Google Gemma 2:2B',
      'IndexedDB vector store with cosine similarity ranking',
      'Hierarchical botanical taxonomy lookup cache',
      'PWA background sync queuing observations until connectivity restores',
    ],
    techStack: ['React', 'TypeScript', 'Google Gemma 2:2B', 'ONNX Runtime Web', 'IndexedDB', 'Tailwind CSS'],
    contributions: [
      'Implemented local-first PWA architecture utilizing Gemma 2:2B for zero-cloud field observations',
      'Engineered client-side vector search and taxonomy cache in IndexedDB',
      'Optimized offline battery consumption and ambient screen exposure for field expeditions',
    ],
    metricsOrState: 'Edge Architecture Prototype · Offline Vector Search Engine',
    pipeline: [
      {
        step: 'I',
        name: 'Sensor Normalization',
        description: 'Raw camera buffer preprocessing with ambient exposure balancing in WebGL.',
      },
      {
        step: 'II',
        name: 'WASM Embedding',
        description: 'Lightweight quantized ONNX model generating 384-dim specimen feature vector.',
      },
      {
        step: 'III',
        name: 'Local Vector K-NN',
        description: 'Cosine distance ranking against local botanical taxonomy vector embeddings in IndexedDB.',
      },
      {
        step: 'IV',
        name: 'CRDT Sync Queue',
        description: 'Replicated event logs waiting for network discovery before peer synchronization.',
      },
    ],
    codeSnippet: {
      filename: 'engine/local-taxon-observation.ts',
      language: 'typescript',
      code: `interface LocalTaxonObservation {
  observationId: string;
  timestampIso: string;
  coordinates: {
    latitude: number;
    longitude: number;
    altitudeMeters: number;
  };
  embeddingVector: Float32Array; // 384-dimensional quantized float
  candidateMatches: Array<{
    taxonId: string;
    scientificName: string;
    family: string;
    confidenceScore: number; // 0.00 - 1.00
  }>;
  syncState: 'LOCAL_DRAFT' | 'QUEUED_FOR_REPLICATION' | 'MERGED';
  crdtVectorClock: Record<string, number>;
}`,
    },
    links: {
      github: 'https://github.com/OmkarD09/trailscribe',
      accessStatus: 'public',
      accessLabel: 'Open Source · Hacktoberfest',
      accessNote:
        'Zero-cloud naturalist companion PWA engineered for Hacktoberfest 2026 (Track: Touch Grass & Best Use of Gemma). Apache-2.0 licensed.',
      inquirySubject: 'Early Access: TrailScribe Taxonomy Engine',
    },
  },
  {
    id: 'resilify',
    title: 'Resilify',
    tagline: 'AI-Assisted Dependency Resilience & Supply Chain Defense',
    category: 'DevOps & Tooling · AST Analysis',
    problem:
      'Modern web apps rely on hundreds of transitive dependencies where a single breaking release, security flaw, or abandoned library halts production pipelines or introduces zero-day vulnerabilities.',
    solution:
      'Designed an AI-assisted dependency resilience and exit capsule engine using Gemma 4 and AST traversal to detect abandoned dependencies, inspect breaking API shifts, and generate deterministic migration capsules.',
    architecture: [
      'Static dependency graph topology and vulnerability traversal',
      'AST inspection comparing upstream public signatures across releases',
      'Deterministic verification harness running regression test suites',
      'Gemma 4 migration capsule generator for automated library modernization',
    ],
    techStack: ['Python 3.12', 'Gemma 4', 'AST Analysis', 'Static Verification', 'GitHub Actions'],
    contributions: [
      'Constructed AST dependency analyzer detecting deprecated libraries and signature incompatibilities',
      'Architected deterministic verification harness running test suites before and after migration capsules',
      'Authored structured migration recipes for modernizing legacy dependencies to Python 3.12+ built-ins',
    ],
    metricsOrState: 'Developer Tooling Prototype · AST Compatibility Engine',
    pipeline: [
      {
        step: 'I',
        name: 'Lockfile DAG',
        description: 'Parses package lockfiles into a unified topological dependency graph.',
      },
      {
        step: 'II',
        name: 'Export AST Diffing',
        description: 'Compares upstream TypeScript typings across SemVer version increments.',
      },
      {
        step: 'III',
        name: 'Signature Collision',
        description: 'Flags deprecated exports, reordered parameter signatures, and altered types.',
      },
      {
        step: 'IV',
        name: 'Codemod Synthesis',
        description: 'Synthesizes surgical AST migrations with verification regression suites.',
      },
    ],
    codeSnippet: {
      filename: 'core/breaking-change-diagnostic.ts',
      language: 'typescript',
      code: `interface BreakingChangeDiagnostic {
  targetPackage: string;
  versionSpan: { fromVersion: string; toVersion: string };
  affectedCallsites: Array<{
    sourceFile: string;
    line: number;
    column: number;
    deprecatedSymbol: string;
    mutationType: 'REMOVED_EXPORT' | 'SIGNATURE_MISMATCH' | 'TYPE_RESTRICTION';
  }>;
  automatedCodemodAvailable: boolean;
  recommendedSyntheticFix: string;
  riskLevel: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
}`,
    },
    links: {
      github: 'https://github.com/OmkarD09/H26_ImpactForge_Resilify',
      accessStatus: 'public',
      accessLabel: 'Open Source · ImpactForge',
      accessNote:
        'AI-assisted dependency resilience and exit capsule engine engineered for ImpactForge Hackathon (Track 1: Gemma 4 Dependency Resilience).',
      inquirySubject: 'Developer Preview Access: Resilify',
    },
  },
  {
    id: 'cashnudge',
    title: 'CashNudge',
    tagline: 'Invoice Risk Intelligence & AI Follow-Up Engine',
    category: 'Fintech · Agentic Workflow',
    problem:
      'Freelancers and boutique engineering studios lose thousands annually in unpaid invoices and delayed collections due to awkward, manual follow-up timing and lack of client payment risk intelligence.',
    solution:
      'Created an AI-powered invoice risk assistant using Prior Labs TabPFN for tabular risk estimation on small historical ledgers and Google Gemma for drafting calibrated, relationship-preserving payment follow-ups.',
    architecture: [
      'Prior Labs TabPFN tabular model predicting late payment probability',
      'Context-aware follow-up drafting using Google Gemma open weights',
      'Direct Gmail compose and desktop mail client handoff via mailto:',
      'Privacy-first in-memory workflow with zero persistent PII storage',
    ],
    techStack: ['Next.js', 'TypeScript', 'FastAPI', 'Prior Labs TabPFN', 'Google Gemma', 'Tailwind CSS'],
    contributions: [
      'Implemented tabular payment risk quantification using Prior Labs TabPFN on client payment histories',
      'Built contextual follow-up generation using Google Gemma with risk-tiered tone adjustment',
      'Designed privacy-first in-memory workflow with zero persistent PII storage and direct Gmail/mailto handoff',
    ],
    metricsOrState: 'System Prototype · Behavioral Risk Scoring & Follow-Up Workflow',
    pipeline: [
      {
        step: 'I',
        name: 'Ledger Ingestion',
        description: 'Parses invoice aging and client settlement history without cloud persistence.',
      },
      {
        step: 'II',
        name: 'TabPFN Risk Model',
        description: 'Quantifies late payment probability via tabular prior-data fitted networks.',
      },
      {
        step: 'III',
        name: 'Gemma Follow-Up',
        description: 'Drafts calibrated, context-sensitive follow-up messages based on risk tier.',
      },
      {
        step: 'IV',
        name: 'Mail Handoff',
        description: 'Pre-populates recipient and drafted body directly into user Gmail compose.',
      },
    ],
    codeSnippet: {
      filename: 'services/invoice-risk-model.ts',
      language: 'typescript',
      code: `interface InvoiceRiskAssessment {
  invoiceId: string;
  counterpartyId: string;
  amountCents: number;
  daysPastDue: number;
  predictedDefaultRisk: number; // 0.00 - 1.00 probability score
  escalationState: 'COURTESY_REMINDER' | 'ACCOUNT_REVIEW' | 'DIRECT_ESCALATION';
  optimalChannel: 'EMAIL' | 'SMS' | 'ACCOUNTANT_PING';
  dispatchTimingUtc: string;
  reconciliationWebhookId?: string;
}`,
    },
    links: {
      github: 'https://github.com/OmkarD09/CashNudge',
      accessStatus: 'public',
      accessLabel: 'Open Source · GitHub',
      accessNote:
        'AI-powered invoice risk estimation and payment follow-up assistant built with TabPFN, Gemma, FastAPI, and Next.js.',
      inquirySubject: 'Architecture Briefing: CashNudge',
    },
  },
  {
    id: 'jantrack-mumbai',
    title: 'JanTrack Mumbai',
    tagline: 'Civic Awareness & Candidate Transparency Platform',
    category: 'Civic Tech · Public Data Infrastructure',
    problem:
      'Municipal electoral data, candidate criminal disclosures, and ward-level budget allocations in Mumbai are buried in opaque PDF scans, preventing citizens from making informed voting decisions.',
    solution:
      'Engineered a digital report card for Mumbai election candidates that consolidates public disclosures into searchable profiles, tracks promises across 227 wards, and generates AI-powered civic insights.',
    architecture: [
      'Automated sync engine normalizing election filings and candidate disclosures',
      'Normalized schema modeling candidate assets, liabilities, and legal disclosures',
      'Ward-level geospatial mapping covering 227 municipal wards',
      'Lightweight server and client architecture with Gemini AI civic summaries',
    ],
    techStack: ['React 19', 'TypeScript', 'Node.js', 'Express', 'MongoDB / Drizzle', 'Gemini AI'],
    contributions: [
      'Constructed public disclosure ingestion pipeline normalizing candidate criminal, asset, and educational records',
      'Implemented ward-level civic report cards tracking candidate promises across Mumbai municipal wards',
      'Engineered Gemini AI integration for objective, non-partisan candidate background summaries',
    ],
    metricsOrState: 'Public Civic Initiative · Open Data Infrastructure in Development',
    pipeline: [
      {
        step: 'I',
        name: 'Affidavit OCR',
        description: 'Automated ingestion pipeline parsing official scanned election disclosures.',
      },
      {
        step: 'II',
        name: 'Schema Normalization',
        description: 'Extracts verified criminal affidavits, educational history, and asset records.',
      },
      {
        step: 'III',
        name: 'Geospatial Ward Linker',
        description: 'Maps electoral candidates to municipal ward boundary GIS coordinates.',
      },
      {
        step: 'IV',
        name: 'Edge Cache SSR',
        description: 'Serves pre-rendered candidate profiles via edge caching optimized for high-latency mobile networks.',
      },
    ],
    codeSnippet: {
      filename: 'schemas/candidate-disclosure.ts',
      language: 'typescript',
      code: `interface CandidateDisclosureProfile {
  candidateId: string;
  fullName: string;
  electoralWard: string;
  affidavitFilingYear: number;
  legalDisclosures: {
    pendingCriminalCases: number;
    convictionCount: number;
    caseCategories: string[];
  };
  financials: {
    declaredMovableAssetsInr: number;
    declaredImmovableAssetsInr: number;
    totalLiabilitiesInr: number;
  };
  wardCivicReportCard: {
    allocatedBudgetInr: number;
    utilizedBudgetInr: number;
    potholeGrievanceResolutionRate: number;
  };
}`,
    },
    links: {
      github: 'https://github.com/OmkarD09/JanTrack-Mumbai',
      accessStatus: 'in-development',
      accessLabel: 'Public Civic Initiative · Open Source',
      accessNote:
        'Civic open-data infrastructure and OCR parsing models for municipal disclosures. Contributions and civic partnership inquiries are welcomed.',
      inquirySubject: 'Civic Collab: JanTrack Mumbai',
    },
  },
];

export const CAPABILITIES = [
  {
    area: 'Full-Stack Architecture',
    statement:
      'Designing scalable distributed frontends, server-rendered application boundaries, and resilient backend pipelines designed for low-latency responsiveness under scale.',
    technologies: ['Next.js App Router', 'React 19', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
  },
  {
    area: 'Agentic AI & LLM Systems',
    statement:
      'Moving beyond generic chat wrappers to build deterministic, tool-augmented agents, edge embeddings, and structured schema pipelines with zero hallucination tolerance.',
    technologies: ['LLM Orchestration', 'Local Embeddings (WASM)', 'RAG Architecture', 'Structured Outputs', 'Audio Pipelines'],
  },
  {
    area: 'Product Craft & Systems',
    statement:
      'Executing distinctive art-directed interfaces with editorial typography, physical micro-motion, strict accessibility compliance, and zero generic boilerplate.',
    technologies: ['Design Tokens', 'Motion for React', '14.8:1 Contrast Ratio', 'Performance Tuning', 'Component Architecture'],
  },
  {
    area: 'Developer Tooling & Infrastructure',
    statement:
      'Authoring CLI runtimes, AST codemod analyzers, and developer infrastructure that turn complex engineering hurdles into straightforward workflows.',
    technologies: ['AST Parsing (SWC/Babel)', 'Static Analysis', 'GitHub Actions', 'WASM Runtime', 'Docker'],
  },
];
