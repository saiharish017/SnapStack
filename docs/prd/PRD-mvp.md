# Product Requirements Document (PRD): SnapStack (V1 MVP)

* **Product Name:** **SnapStack** (Working Title)
* **Document ID:** `PRD-MVP-001`
* **Status:** Approved for Implementation
* **Tagline:** *"Tested AI Workflows & Tool Stacks in a Snap"*
* **Target Audience Focus:** Solo Founders & Indie Hackers / High-Intent Builders
* **Cost Constraint:** Strict **$0/month Free Tier Architecture**

---

## 1. Problem Statement & Opportunity

### The Problem
* **Directory Bloat:** Over 50,000 consumer AI tools exist, but generic directories merely dump affiliate links and logos without showing how to actually use them.
* **Activation Failure:** Users find a tool (e.g., Claude, Whisper, Make) but abandon it because configuring multi-tool workflows, writing effective prompts, and connecting APIs is too difficult.
* **Misleading Hype:** Users are duped into paying $20/month for thin ChatGPT wrappers with zero transparency on whether tasks could be done for free.

### The Solution: An Executable AI Adoption Hub
A clean, lightning-fast web platform built around **Jobs-to-be-Done (JTBD)**:
1. Users arrive with a job (e.g., *"Auto-extract invoice data from Gmail into Sheets"*).
2. They watch a verified 60s demo or full step-by-step video tutorial (hosted on YouTube, zero lag).
3. They copy tested system prompts and download 1-click Make.com/n8n blueprints.
4. They see an honest assessment: *"Can I do this for free in ChatGPT?"*

---

## 2. Target Persona: The Solo Founder & Operator

* **Profile:** Solo founders, agency owners, and technical solopreneurs running businesses alone or with micro-teams.
* **Core Pain Points:** Context-switching fatigue, repetitive admin tasks (lead follow-up, invoice processing, content repurposing), limited budget.
* **Why this Persona Wins:**
  * Zero bureaucratic friction: They adopt and test tools immediately.
  * Natural viral loop: Active on X/Twitter, Reddit (`r/SaaS`), and Product Hunt.
  * Cross-functional demand: Their workflows span Sales, Marketing, Ops, and Code.

---

## 3. Scope & Feature Boundaries

### In Scope for V1 MVP
* **Outcome-Driven Homepage (`/`):** Instant search bar (*"What job do you want done?"*), role filters, and featured Workflow of the Week.
* **Skills / Workflows Catalog (`/skills`):** Filter by difficulty (*No-Code, Low-Code*), tool stack, and time saved.
* **Skill Recipe Detail (`/skills/[slug]`):**
  * Embedded YouTube player (Lite facade with timestamp jump).
  * Tool stack cards with transparent pricing and direct links.
  * Copy-to-clipboard prompt vault with visual toast feedback.
  * Downloadable Make.com / n8n blueprint JSON files.
  * Transparent *"Can I do this for free in ChatGPT?"* callout box.
  * Step-by-step Standard Operating Procedure (SOP).
* **AI Tools Catalog (`/tools`) & Tool Detail (`/tools/[slug]`):**
  * Decision factsheets (pricing tiers, SOC 2 / GDPR compliance, data retention).
  * Curated video gallery (Shorts + in-depth guides).
  * Direct links to all skills powered by the tool.
* **Video Tutorials Library (`/videos`):**
  * Grid and mobile view of curated YouTube Shorts and full tutorials.
  * In-drawer tool links and copyable prompts.
* **Programmatic SEO & JSON-LD:** Structured data (`HowTo`, `SoftwareApplication`, `VideoObject`) on every dynamic route.

### Strictly OUT OF SCOPE for V1 (Deferred to V1.1)
* ❌ **Creator Submission Portal (`/submit`):** The first 25–30 workflows will be curated internally to guarantee pristine quality and zero spam.
* ❌ **User Authentication & Personal Vault (`/saved`):** All workflows, prompts, and blueprints are 100% public with no login gate required.
* ❌ **Interactive Drag-and-Drop Canvas:** Using clean, static visual SOP cards for V1; interactive React Flow nodes deferred to V1.1.
* ❌ **Tool Comparison Matrix (`/compare/...`):** Deferred until initial tool directory reaches 50+ vetted tools.

---

## 4. User Stories & Acceptance Criteria

### Story 1: Discovering a Workflow by Outcome
* **As a** solo founder drowning in manual invoice entry,
* **I want to** search for "invoice extraction" on the homepage,
* **So that** I find a validated recipe showing how to automate it.
* **Acceptance Criteria:**
  * Given a query like "invoice", the search returns the matching skill card within 100ms.
  * The card displays the exact tool stack, time saved (`~4 hrs/wk`), and a video preview.

### Story 2: Executing a Workflow Recipe
* **As a** builder on the workflow page,
* **I want to** watch the setup video and copy the prompt without leaving the page,
* **So that** I can replicate it inside my own Make.com account in under 10 minutes.
* **Acceptance Criteria:**
  * Clicking the video thumbnail loads the YouTube player directly at `start_seconds`.
  * Clicking "Copy Prompt" copies the exact text to the clipboard and triggers a green confirmation toast.
  * Clicking "Download Make.com Blueprint" downloads a valid `.json` file.

### Story 3: Radical Honesty & Trust Evaluation
* **As an** evaluator considering a paid AI tool,
* **I want to** know if I actually need to buy it or if free ChatGPT can do the job,
* **So that** I avoid wasting money on unnecessary subscriptions.
* **Acceptance Criteria:**
  * Every paid tool/workflow has a clear "Can I do this for free?" box.
  * If yes, a free standalone prompt is provided with honest performance caveats.

---

## 5. Success Metrics for V1 Launch
* **Activation Rate:** >35% of visitors click "Copy Prompt" or "Download Blueprint".
* **Video Engagement:** >40% video play rate on Skill detail pages.
* **Page Performance:** 95+ Google Lighthouse score (Desktop & Mobile) with sub-second LCP.
* **Zero Infrastructure Cost:** Verified \$0.00 hosting and database spend on Vercel + Supabase.

