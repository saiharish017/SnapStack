# SnapStack — Project Memory & Technical Blueprint

This document serves as the **persistent operational memory** for SnapStack. It captures the project identity, architectural decisions, Google Stitch design tokens, library choices, and strict engineering constraints.

---

## 1. Project Identity & Purpose

* **Project Name:** **SnapStack**
* **Tagline:** *"Tested AI Workflows & Tool Stacks in a Snap"*
* **Target Audience:** Solo founders, builders, indie hackers, automation engineers, and small teams adopting AI.
* **Core Value Proposition:** A 100% free, community-tested directory of end-to-end multi-tool AI workflows, actionable prompt playbooks, and verified AI tool profiles—paired with zero-lag video breakdowns and honest free alternatives.
* **GitHub Repository:** `https://github.com/saiharish017/SnapStack.git`

---

## 2. Core Architecture & Tech Stack

| Layer | Technology | Details |
| :--- | :--- | :--- |
| **Framework** | **Next.js 15 (App Router)** | Server Components (RSC) by default; client components strictly for interactive leaves. |
| **Language** | **TypeScript 5.9** | Strict mode, full end-to-end type safety. |
| **Styling** | **Tailwind CSS v4** | Modern `@theme` tokens, zero build bloat, PostCSS. |
| **UI Primitives** | **shadcn/ui (Radix UI)** | Accessible headless primitives (`Slot`, `Dialog`, `Tabs`, `Accordion`, `Select`, `DropdownMenu`, `Avatar`, `Tooltip`). |
| **Icons** | **Lucide React** | 1,000+ clean, consistent SVG icons. |
| **Toasts** | **Sonner** | Clean toast notifications for clipboard copy and bookmark actions. |
| **Animations** | **Framer Motion** | Micro-interactions and smooth tab transitions. |
| **Database & Auth** | **Supabase (PostgreSQL 16)** | Managed PostgreSQL with Row-Level Security (RLS) & Supabase SSR cookie management. |
| **Validation** | **Zod** | Typed payload validation for forms and Server Actions. |
| **Video Delivery** | **Lite YouTube Facade** | 100% zero-hosting, zero-bandwidth cost, offloaded to YouTube CDN. |

---

## 3. Strict Rule: Use UI Libraries (Never Build From Scratch)

To maintain clean code quality, prevent bugs, and respect Karpathy minimalism:
* **NEVER reinvent existing UI primitives:**
  * Modals / Drawers ➔ Use shadcn `Dialog` / `Sheet` (`@radix-ui/react-dialog`).
  * Collapsible SOPs ➔ Use shadcn `Accordion` (`@radix-ui/react-accordion`).
  * View Switchers ➔ Use shadcn `Tabs` (`@radix-ui/react-tabs`).
  * Dropdowns / Menus ➔ Use shadcn `DropdownMenu` (`@radix-ui/react-dropdown-menu`).
  * Multi-attribute Selects ➔ Use shadcn `Select` (`@radix-ui/react-select`).
  * Toast Alerts ➔ Use `sonner`.
  * SVG Icons ➔ Use `lucide-react`.
  * Class Merging ➔ Use `cn()` from `@/lib/utils` (`clsx` + `tailwind-merge`).
  * Data Validation ➔ Use `zod`.

---

## 4. Google Stitch Design System Source (MANDATORY)

* **Primary Stitch Project ID:** `projects/8555052820962903380`
  * **Rule:** ALL designs, layouts, screens, tokens, and components MUST be sourced strictly from `projects/8555052820962903380`.
  * **Theme Name:** `Obsidian Precision` / `Obsidian Precision Craft`

### Exact Screen Mapping from `projects/8555052820962903380`:
| Screen ID | Screen Title | Route |
| :--- | :--- | :--- |
| `85ef2c500312422289da873ac5f7a461` | `SnapStack - AI Workflows & Tool Directory` | `/` (Homepage) |
| `1f9f8a14f6ce44579fdd80622093cbce` | `SnapStack - Workflows Catalog` | `/workflows` |
| `9e42c00aa0e941e8bafb20b3347f3d48` | `SnapStack - Workflow Recipe: GitHub PR Security & AST Audit` | `/workflows/[slug]` |
| `55d2c50a545f47ad90c04b29de8cf64a` | `SnapStack - AI Skills & Prompt Techniques Catalog` | `/skills` |
| `837484fea0b24901ba1c3653a8d88991` | `SnapStack - Skill Playbook: Invoice Extraction via Claude Vision` | `/skills/[slug]` |
| `b9672779be17430f99879edcbe6de5b8` | `SnapStack - AI Tools Directory` | `/tools` |
| `84e4452ab2544ca78c5f595cddc34ff2` | `SnapStack - AI Tool Profile: Claude 3.7 Sonnet` | `/tools/[slug]` |
| `8e84ce53635d4da5ba2d355697c43bae` | `SnapStack - Video Tutorials & Execution Feed` | `/videos` |
| `03140c2d58e74e018d0de40962cdf701` | `SnapStack - Tool Comparison: Claude 3.7 Sonnet vs GPT-4o` | `/compare/[slug]` |
| `7e219b88f6c8409c835919714de03098` | `SnapStack - Authentication & Secure Sign In` | `/login` |
| `162b859671bd4969acf94747405e3918` | `SnapStack - User Dashboard & Personal Vault` | `/dashboard` |
| `ceb9b448363e41aa96b19f4b9a68124e` | `SnapStack - Free Community Submission Portal` | `/submit` |

### A. Tonal Elevation Ladder (Dark Canvas Substrate)
* `canvas`: `#010102` (deep obsidian background, infinite depth)
* `surface-1`: `#0f1011` (base cards, containers, code wrappers)
* `surface-2`: `#141516` (elevated tiles, hovered cards, table rows)
* `surface-3`: `#18191a` (drawers, flyouts, floating chrome)
* `surface-4`: `#191a1b` (active tabs, floating tooltips)

### B. 1px Hairlines (No Diffuse Shadows)
* `hairline`: `#23252a` (resting boundaries)
* `hairline-strong`: `#34343a` (hover boundaries)
* `hairline-subtle`: `#1b1c1e` (dividers)

### C. Inks & Typography
* `ink`: `#f7f8f8` (titles & headings)
* `ink-muted`: `#d0d6e0` (body copy)
* `ink-subtle`: `#8a8f98` (secondary metadata)
* `ink-tertiary`: `#62666d` (placeholders & hints)

### D. Chromatic Accents & Status Badges
* Primary Action / Brand: `brand-lavender` (`#5e6ad2`, hover `#828fff`, focus `#5e69d1`)
* Verified Working / $0 Free Tier: `status-emerald` (`#10b981`)
* No-Code Workflows: `status-blue` (`#3b82f6`)
* Developer / API Tools: `status-purple` (`#a855f7`)
* Community Review: `status-amber` (`#f59e0b`)

---

## 5. Directory Structure & Route Map

```text
SnapStack/
├── app/
│   ├── layout.tsx                     # Root layout with fonts, metadata, global styles
│   ├── globals.css                    # Tailwind v4 setup + Stitch Obsidian tokens
│   ├── page.tsx                       # Page 1: Homepage & Outcome Matchmaker
│   ├── workflows/
│   │   ├── page.tsx                   # Page 2: Automated Workflows Catalog
│   │   └── [slug]/page.tsx            # Page 3: Single Workflow Recipe (SOP, Video, Flowchart)
│   ├── skills/
│   │   ├── page.tsx                   # Page 4: AI Skills & Prompt Playbooks Catalog
│   │   └── [slug]/page.tsx            # Page 5: Single Skill & Prompt Detail
│   ├── tools/
│   │   ├── page.tsx                   # Page 6: Vetted AI Tools Directory
│   │   └── [slug]/page.tsx            # Page 7: Single AI Tool Profile (Specs, Linked Workflows)
│   ├── videos/
│   │   └── page.tsx                   # Page 8: Video Feed & Discovery (Shorts & Deep Dives)
│   ├── compare/
│   │   └── [slug]/page.tsx            # Page 9: Side-by-Side Tool Comparison Matrix
│   ├── login/
│   │   └── page.tsx                   # Page 10: Authentication & Secure Sign In (Supabase)
│   ├── dashboard/
│   │   └── page.tsx                   # Page 11: User Dashboard & Saved Vault
│   └── submit/
│       └── page.tsx                   # Page 12: Community Submission Portal
├── components/
│   └── ui/                            # Pre-configured shadcn/ui primitives
│       ├── button.tsx
│       ├── badge.tsx
│       └── card.tsx
├── lib/
│   ├── utils.ts                       # cn() class utility
│   └── supabase/
│       ├── client.ts                  # Client-side Supabase browser client
│       └── server.ts                  # Server Component Supabase client with cookies
├── docs/                              # Project documentation & PRDs
│   ├── design/DESIGN_SYSTEM.md        # Stitch design system specification
│   ├── pages/page.md                  # Comprehensive 12-page specification
│   ├── prd/PRD-mvp.md                 # MVP product requirements document
│   └── architecture/SPEC-mvp.md       # Technical architecture specification
└── .agents/skills/                    # 10 Antigravity custom AI Agent skills
```

---

## 6. Installed AI Agent Skills

1. [**`ui-ux-pro-max`**](file:///d:/Upwork%20Projects/AI%20tool%20direactry/.agents/skills/ui-ux-pro-max/SKILL.md): 50+ UI styles, palettes, typography, WCAG compliance.
2. [**`copywriting-anti-slop`**](file:///d:/Upwork%20Projects/AI%20tool%20direactry/.agents/skills/copywriting-anti-slop/SKILL.md): JTBD copy, anti-AI buzzwords, "Can I do this for free?" callouts.
3. [**`nextjs-architecture`**](file:///d:/Upwork%20Projects/AI%20tool%20direactry/.agents/skills/nextjs-architecture/SKILL.md): Next.js 15 RSC by default, ISR caching (`revalidate = 3600`), Server Actions.
4. [**`tailwind-shadcn`**](file:///d:/Upwork%20Projects/AI%20tool%20direactry/.agents/skills/tailwind-shadcn/SKILL.md): Radix composition, video aspect ratios (`9:16` and `16:9`), responsive UI.
5. [**`seo-metadata`**](file:///d:/Upwork%20Projects/AI%20tool%20direactry/.agents/skills/seo-metadata/SKILL.md): Dynamic OpenGraph metadata, JSON-LD (`HowTo`, `SoftwareApplication`).
6. [**`supabase-schema`**](file:///d:/Upwork%20Projects/AI%20tool%20direactry/.agents/skills/supabase-schema/SKILL.md): Relational schema, mandatory foreign key indexing, RLS security.
7. [**`firecrawl-scraper`**](file:///d:/Upwork%20Projects/AI%20tool%20direactry/.agents/skills/firecrawl-scraper/SKILL.md): Automated tool specs, pricing tiers, and compliance ingestion.
8. [**`karpathy-minimalism`**](file:///d:/Upwork%20Projects/AI%20tool%20direactry/.agents/skills/karpathy-minimalism/SKILL.md): Clean, anti-bloat code standards, explicit error handling.
9. [**`project-planner`**](file:///d:/Upwork%20Projects/AI%20tool%20direactry/.agents/skills/project-planner/SKILL.md): Spec-Driven Development, PRDs, architecture specs.
10. [**`brand-naming`**](file:///d:/Upwork%20Projects/AI%20tool%20direactry/.agents/skills/brand-naming/SKILL.md): SMILE & SCRATCH framework, brand naming strategy.

---

## 7. Strict Architectural Guardrails

* **Zero Monthly Cost ($0/month):** Vercel Hobby + Supabase Free Tier + YouTube Video Embed Facades.
* **Server Components First:** Fetch data directly in Server Components; never create intermediate `/api/` fetch routes for your own pages.
* **Mandatory Free Callout:** Every workflow recipe and tool profile MUST answer *"Can I do this in ChatGPT for free?"*.
* **Video Container Aspect Ratios:** Always `aspect-[9/16]` for vertical Shorts/Reels; `aspect-[16/9]` for tutorials.

---

## 8. Implementation Status (All 12 Screens Completed)

1. `/` (Homepage) — Screen `85ef2c500312422289da873ac5f7a461` ✅
2. `/workflows` (Catalog) — Screen `1f9f8a14f6ce44579fdd80622093cbce` ✅
3. `/workflows/[slug]` (Recipe Detail) — Screen `9e42c00aa0e941e8bafb20b3347f3d48` ✅
4. `/tools` (AI Tools Directory) — Screen `b9672779be17430f99879edcbe6de5b8` ✅
5. `/tools/[slug]` (Tool Profile) — Screen `84e4452ab2544ca78c5f595cddc34ff2` ✅
6. `/compare/[slug]` (Head-to-Head Comparison) — Screen `03140c2d58e74e018d0de40962cdf701` ✅
7. `/skills` (AI Skills & Prompt Catalog) — Screen `55d2c50a545f47ad90c04b29de8cf64a` ✅
8. `/skills/[slug]` (Skill Playbook Detail) — Screen `837484fea0b24901ba1c3653a8d88991` ✅
9. `/videos` (Execution Feed & Video Tutorials) — Screen `8e84ce53635d4da5ba2d355697c43bae` ✅
10. `/login` (Authentication & Secure Sign In) — Screen `7e219b88f6c8409c835919714de03098` ✅
11. `/dashboard` (User Dashboard & Saved Vault) — Screen `162b859671bd4969acf94747405e3918` ✅
12. `/submit` (Free Community Submission Portal) — Screen `ceb9b448363e41aa96b19f4b9a68124e` ✅


