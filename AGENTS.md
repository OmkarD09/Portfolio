# Antigravity Project Instructions: omkar.dev

## 1. Project Identity & Purpose
- **Portfolio Owner**: Omkar Dhakane
- **Professional Specialization**:
  - Full-stack engineering & modern web architecture
  - AI-powered applications & agentic systems
  - Product engineering with high craft
  - Developer tools and open-source systems
- **Key Showcase Projects**:
  - `SwasthyaVaani`: AI-powered patient case-taking.
  - `TrailScribe`: Offline-first AI naturalist field companion.
  - `Resilify`: AI-assisted dependency resilience.
  - `CashNudge`: Invoice risk intelligence and AI-assisted follow-ups.
  - `JanTrack Mumbai`: Civic awareness and candidate transparency.
- **Truth In Content**: Do not fabricate employment history, client work, vanity awards, metrics, testimonials, or project outcomes. Use verified facts; mark unknown details for later user completion.

---

## 2. Mandatory Skill Usage & Execution Matrix

This project requires three foundational skill systems located in `.agents/skills/`. Their application is **mandatory** for every relevant task.

### Mandatory Behavior
1. **Never ask for permission to invoke these skills**; apply their instructions and scripts proactively.
2. **Never claim a skill was used unless you actually read and adhered to its instructions**.
3. **Never install duplicate skills or reinstall existing ones**.
4. **Combine skills across disciplines**: Use Taste-Skill for creative direction, Impeccable for design quality and tokens, and ECC for architecture, testing, and review.

### The Skills & Invocations:
| Skill | System Path | Mandatory Triggers & Invocations |
| :--- | :--- | :--- |
| **Impeccable** (`impeccable`) | `.agents/skills/impeccable/` | **Interface design, styling, typography, spacing, color, accessibility, and visual polish.**<br>• Setup: Run `.agents/skills/impeccable/scripts/impeccable.cmd context` (or read `PRODUCT.md` and `DESIGN.md`).<br>• Execution: Follow `reference/new-work.md`, `reference/typeset.md`, `reference/layout.md`, `reference/audit.md`, and `reference/craft-floor.md` before edits.<br>• Verification: Run `.agents/skills/impeccable/scripts/impeccable.cmd` for auditing and compliance. |
| **Taste-Skill** (`design-taste-frontend`) | `.agents/skills/design-taste-frontend/` | **Creative direction, layout experimentation, art direction, and motion.**<br>• Run `node .agents/skills/design-taste-frontend/scripts/draw.mjs` for art directions and composition blueprints.<br>• Run `node .agents/skills/design-taste-frontend/scripts/inspect.mjs` with Chrome/Edge CDP to measure house style and take screenshots.<br>• Run `node .agents/skills/design-taste-frontend/scripts/lint.mjs` to block AI slop tells. |
| **ECC (Everything Claude Code)** | `.agents/rules/`, `.agents/workflows/`, `.agents/agents/` | **Architecture, engineering workflows, TypeScript practices, testing, and reviews.**<br>• Workflows: Follow `.agents/workflows/plan.md`, `quality-gate.md`, `tdd-workflow.md`, `code-review.md`.<br>• Rules: Enforce `.agents/rules/common-coding-style.md`, `common-security.md`, and `common-testing.md`. |

---

## 3. Design System: Dark Organic

The visual identity is locked and strictly enforced:

### Color Palette Tokens
| Token Name | Hex Code | Role & Usage |
| :--- | :--- | :--- |
| **Obsidian** | `#151515` | Primary background, root canvas |
| **Soft Charcoal** | `#222222` | Secondary background, structural surfaces, panels |
| **Warm Ivory** | `#F5E6C5` | Primary typography, high-contrast headings, readable body |
| **Electric Apricot** | `#FF8A3D` | Primary accent, deliberate focal points, interactive hover/active states |
| **Organic Olive** | `#3F422E` | Secondary accent, badges, muted borders, subtle architectural accents |
| **Natural Taupe** | `#9F886F` | Supporting neutral, secondary typography, subtle dividers |

### Creative Direction Targets
- **Design Variance**: `8/10` (Asymmetrical, non-template layouts, experimental hierarchy, custom section blueprints)
- **Motion Intensity**: `7/10` (Purposeful micro-interactions, page choreography, respecting reduced motion)
- **Visual Density**: `4/10` (Generous whitespace, editorial rhythm, breathing room)

### Absolute Anti-Patterns (Impeccable & Taste-Skill bans)
- **No generic purple-to-blue gradients** or linear rainbow fills.
- **No ubiquitous orange glows** or heavy glassmorphism cards.
- **No cards nested in cards**, or wrapping every section in rounded rectangles.
- **No generic monospace fonts** for body copy (monospace is reserved exclusively for literal code snippets).
- **No pure grey text on dark backgrounds** (always warm-tinted with Taupe `#9F886F` or Ivory `#F5E6C5`).
- **No bouncing/elastic easing**; all motion must feel weighted, smooth, and physical.

---

## 4. Technical Stack & Engineering Standards

- **Core Framework**: Next.js (App Router), React 19, TypeScript
- **Styling**: Tailwind CSS configured with the Dark Organic token scale
- **Motion**: `motion` (Motion for React)
- **Icons**: `lucide-react`
- **3D / Canvas**: Use Three.js / React Three Fiber only if a 3D element genuinely elevates the experience; zero gratuitous dependencies.
- **Accessibility & Quality**:
  - Full keyboard navigability and semantic HTML hierarchy.
  - WCAG AA contrast ratio compliance (`#F5E6C5` on `#151515` = 14.8:1 contrast).
  - Explicit support for `prefers-reduced-motion`.
  - Zero hydration errors, strict TypeScript without `any` bypasses.

---

## 5. Autonomous Permission & Execution Protocol

The agent is empowered to operate **autonomously** on ordinary and reversible development tasks:
- Inspecting codebase and running local linters / diagnostics.
- Creating and modifying components, CSS styles, tests, and configuration files.
- Refactoring, improving visual polish, and fixing code defects.
- Running headless browser audits and local development servers.

**Explicit User Approval is Required For**:
- Public deployments, domain alterations, or publishing actions.
- Executing opaque external network installation commands.
- Incurring cloud costs or purchasing third-party services.
- Destructive operations outside the workspace.
- Secrets or credential management.
