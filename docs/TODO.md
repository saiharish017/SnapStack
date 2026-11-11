# SnapStack — Page-by-Page Implementation To-Do List

This document outlines the implementation roadmap for all 12 screens of **SnapStack**, strictly adhering to the design specifications in **Google Stitch Project `projects/8555052820962903380`**, Next.js 15 App Router (RSC by default), Tailwind CSS v4, and shadcn/ui primitives.

---

## 📊 High-Level Progress Overview

| Phase | Category | Pages | Status |
| :--- | :--- | :--- | :--- |
| **Phase 1** | **Foundation & Home** | `/` (Homepage) | ✅ **Completed** |
| **Phase 2** | **Core Discovery (Workflows)** | `/workflows`, `/workflows/[slug]` | ✅ **Completed** |
| **Phase 3** | **Tools & Comparisons** | `/tools`, `/tools/[slug]`, `/compare/[slug]` | ✅ **Completed** |
| **Phase 4** | **Skills & Prompt Playbooks** | `/skills`, `/skills/[slug]` | ✅ **Completed** |
| **Phase 5** | **Media & Feed** | `/videos` | ✅ **Completed** |
| **Phase 6** | **Auth, Vault & Community** | `/login`, `/dashboard`, `/submit` | ✅ **Completed** |

---

## 📌 Page Breakdown & Implementation Checklist

### Phase 1: Foundation & Homepage

- [x] **Page 1: Homepage (`/`)**
  - **Stitch Screen ID:** `85ef2c500312422289da873ac5f7a461` (*Flowcraft - AI Workflows & Tool Directory*)
  - **Route:** `app/page.tsx`
  - **Status:** ✅ **DONE** (Dev server live on `http://localhost:3000`)
  - **Key Modules Implemented:**
    - [x] Dark Obsidian Canvas layout (`#010102`) with hairline borders (`#23252a`)
    - [x] Hero badge (`✦ 240+ Production AI Workflows Tested & Verified for 2026`)
    - [x] JTBD Headline: *"Automate your company with verified AI workflows"*
    - [x] Live filter chips with live counts + `⌘K` keyboard trigger
    - [x] Live search autocomplete dropdown with Bot and Tool icons
    - [x] Asymmetric 5-Module Bento Grid (Core Verified Workflows, Sales & RevOps, QA Suite, Finance & Ledger, Figma AST)
    - [x] Trending AI Workflows section with Grid View vs Table View interactive toggle
    - [x] Verified AI Tools Directory preview (n8n, Claude 3.7 Sonnet, Clay, Cursor)
    - [x] 4-Pillar Quality Standard ("Why SnapStack is Built Differently")
    - [x] Tuesday Dispatch subscription banner + Global Footer

---

### Phase 2: Core Discovery & Workflow Engine

- [x] **Page 2: Workflows Catalog (`/workflows`)**
  - **Stitch Screen ID:** `1f9f8a14f6ce44579fdd80622093cbce` (*Flowcraft - Workflows Catalog*)
  - **Route:** `app/workflows/page.tsx`
  - **Status:** ✅ **DONE**
  - **Deliverables & Tasks:**
    - [x] Dynamic category filter sidebar/tabs (All, Developers, Sales & RevOps, Operations, Growth, Founders)
    - [x] Multi-attribute filtering (Platform, Difficulty, Time Saved, Verification status)
    - [x] Search input with instant live filtering and `⌘K` keyboard shortcut
    - [x] Grid vs Table View mode toggle
    - [x] Multi-tool stack pipeline visual badges (`GitHub` → `Claude 3.7` → `SonarQube`)
    - [x] Production Blueprint Schema drawer with 1-click clipboard copy
    - [x] Interactive bookmark vault saving with Sonner toasts
    - [x] Batch Export Blueprints JSON bundle

- [x] **Page 3: Workflow Recipe Detail (`/workflows/[slug]`)**
  - **Stitch Screen ID:** `9e42c00aa0e941e8bafb20b3347f3d48` (*Flowcraft - Workflow Recipe: GitHub PR Security & AST Audit*)
  - **Route:** `app/workflows/[slug]/page.tsx`
  - **Status:** ✅ **DONE**
  - **Deliverables & Tasks:**
    - [x] Breadcrumbs navigation (`Home > Workflows > Developers > Automated GitHub PR Security & AST Audit`)
    - [x] Recipe Header with verification badge, version stamp (`v2.4.1`), and bookmark CTA
    - [x] Interactive 5-node Execution Architecture canvas with node inspection
    - [x] Master Video Walkthrough with 60s Fast Demo vs Full HD Tutorial modes
    - [x] Lite YouTube Video breakdown facade (zero hosting costs)
    - [x] Required Tools & Operating Cost breakdown with Free Tier Feasibility Guarantee
    - [x] **"Can I do this in ChatGPT for free?"** honest breakdown module
    - [x] Step-by-Step SOP Accordion (`@radix-ui/react-accordion`) with copyable curl, JSON, and prompt snippets
    - [x] Downloadable JSON Blueprint specification with 1-click clipboard copy
    - [x] Schema.org `HowTo` structured data for technical SEO
    - [x] Related tested workflows cross-linking

---

### Phase 3: AI Tools & Head-to-Head Comparisons

- [x] **Page 4: AI Tools Directory (`/tools`)**
  - **Stitch Screen ID:** `b9672779be17430f99879edcbe6de5b8` (*Flowcraft - AI Tools Directory*)
  - **Route:** `app/tools/page.tsx`
  - **Status:** ✅ **DONE**
  - **Deliverables & Tasks:**
    - [x] Category quick-filters: LLMs & Reasoning, Coding Assistants, Automation & Agents, Audio & Voice, Video Generation
    - [x] Pricing model dropdown filter (Free, Freemium, Paid, Open Source)
    - [x] Compliance chips (No Data Training, SOC 2 Type II, GDPR, HIPAA Ready)
    - [x] 3-Column Tool Cards Grid with verified badges, 48x48 icon containers, and telemetry indicators (Guides, Workflows, Skills)
    - [x] Live search bar with instant debounced filtering and `⌘K` listener

- [x] **Page 5: AI Tool Profile (`/tools/[slug]`)**
  - **Stitch Screen ID:** `84e4452ab2544ca78c5f595cddc34ff2` (*Flowcraft - AI Tool Profile: Claude 3.7 Sonnet*)
  - **Route:** `app/tools/[slug]/page.tsx`
  - **Status:** ✅ **DONE**
  - **Deliverables & Tasks:**
    - [x] Tool Hero with verified badge, official website link, model ID, and telemetry strip (Pass Rate, TTFT, Context Window, Retention)
    - [x] Decision Factsheet & Technical Specs Bento Grid (Pricing Breakdown, Data Privacy & Security, Developer & System Specs)
    - [x] Context Depth progress meter (200k tokens)
    - [x] 1-Click copyable SDK commands (`pip install anthropic`, `npm i @anthropic-ai/sdk`)
    - [x] Workflows powered by this tool cross-linked directly to `/workflows/[slug]`
    - [x] Head-to-head comparison teaser banner

- [x] **Page 6: Head-to-Head Comparison (`/compare/[slug]`)**
  - **Stitch Screen ID:** `03140c2d58e74e018d0de40962cdf701` (*Flowcraft - Tool Comparison: Claude 3.7 Sonnet vs GPT-4o*)
  - **Route:** `app/compare/[slug]/page.tsx`
  - **Status:** ✅ **DONE**
  - **Deliverables & Tasks:**
    - [x] Split-screen visual header with dual tool badges and central `VS` circle
    - [x] Quick Verdict Bento Box (Architect's Choice vs High-Throughput Engine)
    - [x] Side-by-Side Execution Testbench with simulated terminal code streams, precision scores, and latency metrics
    - [x] Comprehensive 7-Metric Evaluation Matrix Table with highlighted winner badges
    - [x] Dynamic links to tool profiles and related workflows

---

### Phase 4: AI Skills & Prompt Playbooks

- [x] **Page 7: AI Skills & Prompt Techniques Catalog (`/skills`)**
  - **Stitch Screen ID:** `55d2c50a545f47ad90c04b29de8cf64a` (*Flowcraft - AI Skills & Prompt Techniques Catalog*)
  - **Route:** `app/skills/page.tsx`
  - **Status:** ✅ **DONE**
  - **Deliverables & Tasks:**
    - [x] Categorized quick tabs (Prompt Engineering & Reasoning, Coding & Architecture, Data Extraction & Vision, Content & Copywriting, Image & Media Generation)
    - [x] Model filters (Claude 3.7, DeepSeek R1, Cursor CLI, GPT-4o, Midjourney v6.1)
    - [x] Skill Level pills (Beginner, Intermediate, Advanced, Expert)
    - [x] Copyable prompt cards with token counts, accuracy badges, and author attribution
    - [x] Download Complete Prompt Vault (JSON) export

- [x] **Page 8: Skill Playbook Detail (`/skills/[slug]`)**
  - **Stitch Screen ID:** `837484fea0b24901ba1c3653a8d88991` (*Flowcraft - Skill Playbook: Invoice Extraction via Claude Vision*)
  - **Route:** `app/skills/[slug]/page.tsx`
  - **Status:** ✅ **DONE**
  - **Deliverables & Tasks:**
    - [x] Playbook metadata & Key Specs (Model, Tokens, Accuracy, Verification status, Tested versions)
    - [x] Tabbed prompt architecture & execution payload (Full, System, User Template) with 1-click copy
    - [x] Input vs Deterministic Output JSON Schema Contract comparison
    - [x] Known Failure Modes & Engineering Mitigations grid
    - [x] **"Can I do this in ChatGPT for free?"** honest breakdown
    - [x] Recommended stack & related playbooks cross-linking

---

### Phase 5: Media & Video Tutorials

- [x] **Page 9: Video Tutorials & Execution Feed (`/videos`)**
  - **Stitch Screen ID:** `8e84ce53635d4da5ba2d355697c43bae` (*Flowcraft - Video Tutorials & Execution Feed*)
  - **Route:** `app/videos/page.tsx`
  - **Status:** ✅ **DONE**
  - **Deliverables & Tasks:**
    - [x] Dual-format feed toggle: Grid Mode (`16:9` / responsive) vs Shorts Stream (`9:16` vertical video reels)
    - [x] Active Interactive Execution Sandbox spotlight with synchronized video player and execution drawer
    - [x] Real-time terminal logs simulation with token consumption counters
    - [x] Synchronized code snippet drawer with 1-click copy
    - [x] 1-Click "Inspect" card interaction that loads any video into the sandbox
    - [x] Duration filters (<60s Shorts, 1-5m Quick, >5m Deep), Tool filters, and Role filters
    - [x] Community upvotes counter, clones counter, and Report Broken Spec trigger

---

### Phase 6: Authentication, User Vault & Submissions

- [x] **Page 10: Authentication & Secure Sign In (`/login`)**
  - **Stitch Screen ID:** `7e219b88f6c8409c835919714de03098` (*Flowcraft - Authentication & Secure Sign In*)
  - **Route:** `app/login/page.tsx`
  - **Status:** ✅ **DONE**
  - **Deliverables & Tasks:**
    - [x] Dual-column layout with value proposition, protocol markers (`v2.4.9 Auth Protocol`), and vault entitlements
    - [x] Interactive State toggle (State A: Form vs State B: Sent Confirmation)
    - [x] 1-Click Google and GitHub OAuth buttons
    - [x] Passwordless magic link form with encrypted ephemeral token notice (valid for 15 mins)
    - [x] State B confirmation view with resend magic link simulation and direct dashboard bypass

- [x] **Page 11: User Dashboard & Personal Vault (`/dashboard`)**
  - **Stitch Screen ID:** `162b859671bd4969acf94747405e3918` (*Flowcraft - User Dashboard & Personal Vault*)
  - **Route:** `app/dashboard/page.tsx`
  - **Status:** ✅ **DONE**
  - **Deliverables & Tasks:**
    - [x] Autosynced Cloud Vault header with AES-256 GCM latency indicator
    - [x] Profile header with user details, builder tier, and export actions
    - [x] 4 Key Pillar Metric Tiles (Saved Workflows, Skills & Prompts, Active Stack Cost, Hours Saved / Wk)
    - [x] 5 Interactive Tab Panels: Saved Workflows (Execution Kanban), Saved Skills, Bookmarked Tools, Prompt Vault, and Stack Cost & ROI Calculator
    - [x] Interactive Kanban board with status dropdowns (`To Try`, `In Testing`, `Active in Production`)
    - [x] Interactive Stack Calculator with checkbox toggles and real-time ROI calculation ($3,870/mo value, 42.0x ROI)

- [x] **Page 12: Community Submission Portal (`/submit`)**
  - **Stitch Screen ID:** `ceb9b448363e41aa96b19f4b9a68124e` (*Flowcraft - Free Community Submission Portal*)
  - **Route:** `app/submit/page.tsx`
  - **Status:** ✅ **DONE**
  - **Deliverables & Tasks:**
    - [x] Segmented Control Switcher for Option A (Workflow), Option B (AI Skill), and Option C (AI Tool)
    - [x] Option A: YouTube Video proof URL, skip-intro timestamp, video format picker, dynamic video preview card
    - [x] Interactive tool tags manager with add and remove capabilities
    - [x] Automation Blueprint Spec `.json` upload dropzone
    - [x] Core System Prompt textarea with monospace styling and token counter
    - [x] Option B: Prompt engineering skill spec with before/after benchmark testcases
    - [x] Option C: Tool founder indexing form with pricing models and free tier limits
    - [x] Submission confirmation state with automated verification notice

