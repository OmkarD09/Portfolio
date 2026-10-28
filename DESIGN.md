# DESIGN.md — omkar.dev Visual System Specification

## 1. Aesthetic Thesis: Dark Organic
The visual language for **omkar.dev** merges technical precision with organic warmth. Instead of cold cybernetic clichés or cookie-cutter SaaS templates, the environment is grounded in earthy, tactile mineral tones (`Obsidian` and `Olive`) punctuated by intentional kinetic energy (`Electric Apricot`).

- **Design Variance**: **8 / 10** — Unconventional section architecture, asymmetrical grids, editorial type treatments, non-templated project walkthroughs.
- **Motion Intensity**: **7 / 10** — High-craft choreography, physics-based viewport entrances, tactile hover feedbacks, strict `prefers-reduced-motion` compliance.
- **Visual Density**: **4 / 10** — Generous whitespace, focused reading rhythm, uncrowded project narratives.

---

## 2. Palette Architecture

All colors adhere to WCAG AA contrast compliance against `#151515` and `#222222`.

| Color Role | Name | Hex | HSL | Contrast on Obsidian | Application |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Primary Canvas** | **Obsidian** | `#151515` | `0 0% 8%` | Root | Deep bedrock, document root background |
| **Secondary Ground** | **Soft Charcoal** | `#222222` | `0 0% 13%` | Structural | Section containers, layered architectural cards, code frames |
| **Boundary Line** | **Charcoal Border**| `#2E2E2E` | `0 0% 18%` | Subtle | Micro-hairline borders (1px solid) |
| **Primary Type** | **Warm Ivory** | `#F5E6C5` | `41 71% 87%` | 14.8:1 (AAA) | Display headlines, section titles, high-emphasis copy |
| **Secondary Type** | **Natural Taupe** | `#9F886F` | `32 20% 53%` | 5.8:1 (AA) | Body paragraphs, narrative text, subheadings, muted labels |
| **Tertiary Neutral**| **Taupe Muted** | `#6E6050` | `32 16% 37%` | 3.2:1 | Timestamps, metadata keys, inactive pagination |
| **Primary Accent** | **Electric Apricot**| `#FF8A3D` | `24 100% 62%` | 7.9:1 (AA) | Interactive focus states, button accents, live demo signals |
| **Secondary Accent**| **Organic Olive** | `#3F422E` | `69 18% 22%` | 2.1:1 (Structural) | Tag badges, architecture callout backdrops, pill accents |

---

## 3. Typography Hierarchy

Fonts must be configured using modern, high-legibility typefaces:
- **Display & Headings**: Geometric, sculptural sans-serif (e.g. *Cabinet Grotesk* or *Syne*) with deliberate letter tracking.
- **Body & Content**: Highly legible humanized sans-serif (e.g. *Plus Jakarta Sans* or *Inter*) set in warm-tinted Ivory and Taupe.
- **Code & Technical Data**: Clean monospace (*JetBrains Mono*) strictly reserved for terminal outputs, architectural specs, and code blocks. Never used for general body copy.

---

## 4. Absolute Anti-Patterns & Prohibitions

1. **No generic purple/blue gradients or linear mesh sweeps**: Use flat obsidian surfaces accented by tinted organic lighting or authentic photography.
2. **No floating generic glassmorphism cards**: Containers must feel physical, architectural, and grounded with crisp border geometry.
3. **No ubiquitous orange halos**: Apricot (`#FF8A3D`) is a laser-focused spotlight, not an ambient haze.
4. **No nested cards within cards**: Avoid stacking box-in-box; use typography, line breaks, and spatial offsets for grouping.
5. **No pure `#000000` or `#FFFFFF`**: All extremes are tinted to Obsidian (`#151515`) and Warm Ivory (`#F5E6C5`).
6. **No bouncy/elastic spring physics**: Motion must convey weight, restraint, and deliberate editorial presence.
