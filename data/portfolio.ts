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
      'Engineered an ambient clinical companion that captures doctor-patient verbal consultations, transcribes regional dialects with medical ontology mapping, and compiles structured electronic health records with zero keyboard interruption.',
    architecture: [
      'Ambient audio capture pipeline with noise suppression',
      'Multilingual speech-to-text with medical term alignment',
      'Clinical ontology entity extraction (SNOMED-CT / ICD-10)',
      'Deterministic structured SOAP note generation',
    ],
    techStack: ['Next.js', 'TypeScript', 'WebAudio API', 'LLM Agents', 'FastAPI', 'Tailwind CSS'],
    contributions: [
      'Architected offline-resilient audio chunking and socket streaming pipeline',
      'Designed deterministic schema validation for zero-hallucination prescription drafting',
      'Engineered privacy-first client-side de-identification of patient telemetry',
    ],
    metricsOrState: 'Active Core Prototype · Clinical Evaluation Ready',
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
      accessStatus: 'private',
      accessLabel: 'Private Codebase · Architecture on Request',
      accessNote:
        'Clinical encounter data pipelines and voice de-identification models are restricted to prevent telemetry exposure. Architecture walkthroughs are available for selective evaluation.',
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
      'Built an offline-first field recorder utilizing lightweight on-device vision-embeddings and local vector indexing (IndexedDB/WASM) for instant botanical taxonomy identification without internet connectivity.',
    architecture: [
      'Edge embeddings inference running in browser via WebAssembly',
      'IndexedDB vector store with cosine similarity ranking',
      'Hierarchical botanical taxonomy lookup cache',
      'PWA background sync queuing observations until connectivity restores',
    ],
    techStack: ['React', 'TypeScript', 'WASM', 'ONNX Runtime Web', 'IndexedDB', 'Tailwind CSS'],
    contributions: [
      'Implemented quantized edge vision classifier running at <180ms inference in-browser',
      'Engineered conflict-free replicated data types (CRDTs) for multi-naturalist expedition logs',
      'Optimized thermal throttle management for prolonged field battery longevity',
    ],
    metricsOrState: 'Field Tested · Open-Source Taxonomy Engine',
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
        description: 'Cosine distance ranking against 8,500 indexed regional flora in IndexedDB.',
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
      accessStatus: 'in-development',
      accessLabel: 'Active Field Testing · Early Access',
      accessNote:
        'Quantized ONNX models and offline IndexedDB taxonomy indexes are undergoing field benchmark audits. Code access is shared with botanical research collaborators.',
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
      'Designed a proactive developer tool that traverses abstract syntax trees (AST), predicts breaking upstream changes before upgrades, and synthesizes automated compatibility polyfills using isolated codemods.',
    architecture: [
      'Static dependency graph topology and vulnerability traversal',
      'Semantic AST diffing engine comparing public export signatures',
      'Automated synthetic test generation for upgrade regression checks',
      'Deterministic codemod generation for breaking API migration',
    ],
    techStack: ['TypeScript', 'Node.js', 'Babel / SWC AST', 'CLI Runtime', 'GitHub Actions'],
    contributions: [
      'Built lockfile topological parser resolving multi-level transitive cycle conflicts',
      'Authored AST translation heuristics converting deprecated API calls automatically',
      'Designed zero-telemetry CLI runtime for enterprise security compliance',
    ],
    metricsOrState: 'Developer Tooling · OSS Beta Release',
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
      accessStatus: 'private',
      accessLabel: 'Developer Preview · Inquire Access',
      accessNote:
        'AST diffing algorithms and automated codemod transformers are currently in private developer testing. Early CLI binaries are provided upon inquiry.',
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
      'Created an autonomous receivables system that predicts default risk through payment behavior scoring and dispatches personalized, multi-stage communication cadences with context-aware tone adjustments.',
    architecture: [
      'Historical accounts-receivable aging and behavioral probability model',
      'Event-driven agent scheduling for proactive reminder dispatches',
      'Adaptive communication engine tuning formality based on relationship tenure',
      'Stripe & Banking reconciliation webhook processor',
    ],
    techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS', 'Trigger.dev', 'Stripe API'],
    contributions: [
      'Architected state machine governing debt collection communication escalations',
      'Designed risk assessment scoring based on historical payment delinquency vectors',
      'Engineered client portal with friction-free one-click settlement affordances',
    ],
    metricsOrState: 'Production System · Tested on $120k+ Invoice Volumes',
    pipeline: [
      {
        step: 'I',
        name: 'Ledger Ingestion',
        description: 'Syncs historical invoices, aging buckets, and settlement events from Stripe.',
      },
      {
        step: 'II',
        name: 'Behavior Scoring',
        description: 'Calculates counterparty delinquency probability using historical payment timing.',
      },
      {
        step: 'III',
        name: 'Cadence Engine',
        description: 'Dispatches multi-stage notifications adapted to client relationship tenure.',
      },
      {
        step: 'IV',
        name: 'Settlement Portal',
        description: 'Provides one-click direct payment links with automatic ledger reconciliation.',
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
      accessStatus: 'proprietary',
      accessLabel: 'Proprietary System · Client Confidential',
      accessNote:
        'Live fintech system governing receivables data. System architecture diagrams and state machine specifications are presented during technical interviews.',
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
      'Engineered a high-performance open-access civic transparency dashboard that parses public election commission filings into searchable candidate profiles, ward development report cards, and civic issue trackers.',
    architecture: [
      'OCR and data extraction pipeline ingesting scanned election affidavits',
      'Normalized schema modeling candidate assets, liabilities, and legal disclosures',
      'Ward-level geospatial mapping linked to municipal spending data',
      'Lightweight edge-cached SSR frontend optimized for 3G mobile devices',
    ],
    techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS', 'MapLibre GL', 'Vercel Edge'],
    contributions: [
      'Constructed automated OCR extraction pipelines converting messy affidavits to structured JSON',
      'Implemented ward boundary map rendering with 60fps vector tiles on budget smartphones',
      'Authored transparent data verification methodology ensuring zero political bias',
    ],
    metricsOrState: 'Public Civic Initiative · Serving Mumbai Citizens',
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
        description: 'Serves pre-rendered candidate profiles with sub-80ms load times on mobile 3G.',
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
      accessStatus: 'in-development',
      accessLabel: 'Public Civic Initiative · Inquire Collaboration',
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
      'Designing scalable distributed frontends, server-rendered application boundaries, and resilient backend pipelines that maintain sub-100ms response targets under scale.',
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
    technologies: ['Design Tokens', 'Motion for React', 'WCAG AAA Standards', 'Performance Tuning', 'Component Architecture'],
  },
  {
    area: 'Developer Tooling & Infrastructure',
    statement:
      'Authoring CLI runtimes, AST codemod analyzers, and developer infrastructure that turn complex engineering hurdles into straightforward workflows.',
    technologies: ['AST Parsing (SWC/Babel)', 'Static Analysis', 'GitHub Actions', 'WASM Runtime', 'Docker'],
  },
];
