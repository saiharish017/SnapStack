# GitHub AI Agent Skills & Rules for Claude / Cursor

This document compiles the **open-source GitHub skills, Cursor rules, and prompt systems** (such as `ui-ux-pro-max-skill`) designed to instruct Claude, Cursor, and AI coding assistants to build clean, professional, and well-structured web applications.

---

## 1. UI & UX Design Skills

### 🎨 `UI/UX Pro Max` (`nextlevelbuilder/ui-ux-pro-max-skill`)
* **GitHub Repository:** [`nextlevelbuilder/ui-ux-pro-max-skill`](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)
* **What it Does:** Injects deep design context into Claude Code, Cursor, and ChatGPT. Solves the "generic AI UI look" by providing a searchable database of:
  * 50+ modern UI styles (Minimalist, Bento Grid, Dark SaaS, Glassmorphism, Aurora UI).
  * Industry-specific color palettes (SaaS, Developer Tools, Analytics).
  * Curated Google Font pairings matched to Tailwind CSS configurations.
  * Contrast and responsive accessibility standards (WCAG compliant).
* **How to Install:**
  ```bash
  # For Claude Code (installs to ~/.claude/skills/)
  uipro init --ai claude --global

  # For Cursor (installs to ~/.cursor/rules/)
  uipro init --ai cursor --global
  ```

---

## 2. High-Converting Copywriting & "Anti-AI Slop" Skills

### ✍️ Anti-Slop & Conversion Copywriting Skill
* **Origin / Reference:** Curated from `awesome-cursorrules` and top marketing prompts.
* **Purpose:** Prevents Claude and Cursor from writing cheesy, robotic AI filler text (e.g., *"delve into"*, *"unleash"*, *"testament to"*, *"game changer"*) and enforces clear, concise, benefit-driven copy.
* **Ready-to-Use Skill Rule (`.cursor/rules/copywriting.mdc` or Claude Skill):**

```markdown
---
description: High-converting, anti-hype product copywriting rules.
globs: **/*.{tsx,jsx,md,mdx}
---

# Copywriting & Tone Standards

1. **Banned AI Vocabulary:**
   - NEVER use: "delve", "testament", "unleash", "tapestry", "plethora", "revolutionize", "beacon", "game changer", "cutting-edge".
2. **Jobs-to-be-Done (JTBD) Structure:**
   - Headlines must state the **exact outcome** and the **time or pain saved**.
   - Example: Instead of "Innovative AI Workflow Automation," write: "Auto-Extract Invoice Data into Google Sheets & Slack."
3. **The 'Can I Do This for Free?' Honesty Principle:**
   - In all tool reviews, always state whether the task can be done using a free prompt in standard ChatGPT/Claude before pitching paid tools.
4. **Action-Oriented Microcopy:**
   - Buttons must clearly state what happens next: "Copy System Prompt (Tested Nov 2026)", "Download Make Blueprint (.json)", "View 60s Demo".
```

---

## 3. Next.js 15 & Fullstack Architecture Skills

### ⚡ Next.js 15 App Router & React Server Components Rule
* **Origin / Reference:** Vercel Engineering best-practice rules and Next.js Cursor templates (`pontus-ab/cursor-rules`, `patrick-kidger/cursor-rules`).
* **Purpose:** Forces the AI to write idiomatic Next.js 15 code using Server Components by default, proper data fetching, and optimal performance caching.
* **Ready-to-Use Skill Rule (`.cursor/rules/nextjs-architecture.mdc`):**

```markdown
---
description: Enforce Next.js 15 App Router and React Server Components (RSC) standards.
globs: app/**/*.{ts,tsx}, components/**/*.{ts,tsx}
---

# Next.js 15 Architecture Standards

1. **Server Components by Default:**
   - Every component in `app/` is a Server Component unless interactive state (`useState`, `useEffect`, event listeners) is strictly needed.
   - Use `'use client'` only on leaf components (e.g., buttons with copy actions, interactive search bars, tab switchers).
2. **Data Fetching:**
   - Perform database queries (Supabase) directly inside Server Components using `async/await`.
   - Never create unnecessary internal API routes (`/api/...`) just to fetch data for a page.
3. **Static Generation & ISR:**
   - Use `generateStaticParams()` for tool pages (`/tools/[slug]`) and skill pages (`/skills/[slug]`).
   - Add `export const revalidate = 3600;` (1 hour) for automatic background regeneration.
4. **Images & Media:**
   - Use `next/image` for tool logos and avatars with explicit `width`, `height`, and `sizes`.
```

---

## 4. Tailwind CSS v4 & shadcn/ui Component Skill

### 🎨 Clean Component Design & Tailwind Skill
* **Origin / Reference:** Inspired by Emil Kowalski's UI polish rules and shadcn official patterns.
* **Purpose:** Ensures modern, accessible, and responsive components without messy or redundant CSS classes.
* **Ready-to-Use Skill Rule (`.cursor/rules/tailwind-shadcn.mdc`):**

```markdown
---
description: Guidelines for styling with Tailwind CSS and assembling shadcn/ui primitives.
globs: components/**/*.{ts,tsx}, app/**/*.{ts,tsx}
---

# UI Styling & Component Rules

1. **shadcn/ui Composition:**
   - Build complex interfaces by composing simple shadcn primitives (`Button`, `Dialog`, `Tabs`, `Badge`, `Accordion`, `Sheet`).
   - Do not invent custom CSS when a primitive already handles accessibility (focus rings, ARIA labels, keyboard escape).
2. **Responsive Breakpoints:**
   - Design mobile-first (`sm:`, `md:`, `lg:`).
   - Ensure touch targets on mobile are at least `44x44px`.
3. **Aspect Ratios for Videos:**
   - Vertical YouTube Shorts container: `aspect-[9/16] rounded-xl overflow-hidden`.
   - Standard YouTube Tutorials container: `aspect-[16/9] rounded-xl overflow-hidden`.
4. **Visual Micro-Interactions:**
   - Add subtle hover states: `hover:border-neutral-300 transition-colors`.
   - Use `sonner` for toast notifications when copying prompts or saving workflows.
```

---

## 5. Technical SEO & Schema.org Structured Data Skill

### 🔍 Programmatic SEO & Schema Skill
* **Origin / Reference:** Technical SEO community rules for Next.js.
* **Purpose:** Automatically equips every generated page with OpenGraph metadata and JSON-LD structured data to win Google rich search cards.
* **Ready-to-Use Skill Rule (`.cursor/rules/seo-metadata.mdc`):**

```markdown
---
description: Automates Next.js App Router metadata and JSON-LD schema generation.
globs: app/**/page.tsx
---

# Technical SEO Standards

1. **Dynamic Metadata:**
   - Every dynamic page (`/skills/[slug]`, `/tools/[slug]`) must export an `async generateMetadata()` function.
   - Must include `title`, `description`, `canonical`, and `openGraph` tags.
2. **JSON-LD Structured Data:**
   - `/skills/[slug]` pages must render a `<script type="application/ld+json">` with `HowTo` schema (steps, tools required, totalTime, video embed link).
   - `/tools/[slug]` pages must render `SoftwareApplication` schema (name, applicationCategory, offers, aggregateRating).
3. **Sitemaps & Robots:**
   - Keep `app/sitemap.ts` and `app/robots.ts` configured to crawl all active database slugs automatically.
```

---

## 6. Database Structuring & Schema Architecture Skills

### 🗄️ Official Supabase Postgres Best Practices Skill
* **GitHub Repository:** [`supabase/agent-skills`](https://github.com/supabase/agent-skills)
* **Skill Name:** `supabase-postgres-best-practices`
* **How to Install via CLI:**
  ```bash
  npx skills add supabase/agent-skills --skill supabase-postgres-best-practices
  ```
* **What it Does:** Instructs the AI agent on 8 critical database categories:
  * Schema design & normalization (1:1, 1:N, N:M junction tables).
  * Index optimization (B-tree on foreign keys, GIN on JSONB/tags).
  * Row-Level Security (RLS) best practices.
  * Preventing N+1 query traps in PostgREST / Supabase clients.
  * Connection pooling and transaction safety.

---

### 🏛️ Complete Database Structuring Rule (`.cursor/rules/supabase-schema.mdc`)

Place this rule into `.cursor/rules/supabase-schema.mdc` so Claude/Cursor automatically structures every table, migration, and query with enterprise-grade PostgreSQL practices:

```markdown
---
description: PostgreSQL and Supabase database schema design, normalization, indexing, and RLS rules.
globs: supabase/migrations/**/*.sql, **/*.sql, lib/supabase/**/*.{ts,tsx}
alwaysApply: false
---

# Supabase & PostgreSQL Schema Structuring Standards

You are an expert PostgreSQL database architect. When designing schemas, writing migrations, or querying data, adhere strictly to these standards:

## 1. Primary Keys & Data Types
- **Primary Keys:** Use `UUID` with default `gen_random_uuid()` or human-readable slugs for SEO routes. Never use auto-incrementing serial integers for core entities.
- **Timestamps:** Every table must have `created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL`.
- **Text & Strings:** Use `TEXT` rather than arbitrary `VARCHAR(255)` unless enforcing strict database-level length limits.
- **Enums vs. Check Constraints:** Use `TEXT CHECK (column IN ('val1', 'val2'))` for easy modification without migration lock-up.

## 2. Relational Architecture & Normalization
- **Junction Tables for Many-to-Many Relations:**
  - Structure connections (`tool_skills`, `video_tools`, `video_skills`) with composite primary keys:
    ```sql
    PRIMARY KEY (tool_id, skill_id)
    ```
  - Always enforce referential integrity with cascading deletes:
    ```sql
    tool_id UUID REFERENCES tools(id) ON DELETE CASCADE
    ```
- **Foreign Key Indexing (Crucial):**
  - PostgreSQL does NOT automatically index foreign keys. Always create an explicit B-tree index on every foreign key column to prevent full-table sequential scans during joins:
    ```sql
    CREATE INDEX idx_tool_skills_skill_id ON tool_skills(skill_id);
    CREATE INDEX idx_video_tools_tool_id ON video_tools(tool_id);
    ```

## 3. Row-Level Security (RLS) Architecture
- **Enable RLS on Every Table:**
  ```sql
  ALTER TABLE public.tools ENABLE ROW LEVEL SECURITY;
  ALTER TABLE public.user_saved_skills ENABLE ROW LEVEL SECURITY;
  ```
- **Public Read Tables (Tools, Skills, Videos):**
  ```sql
  CREATE POLICY "Allow public read access" 
  ON public.tools FOR SELECT 
  TO anon, authenticated 
  USING (true);
  ```
- **User-Owned Private Tables (Saved Vaults & Bookmarks):**
  ```sql
  CREATE POLICY "Users can only read and manage their own bookmarks" 
  ON public.user_saved_skills 
  FOR ALL 
  TO authenticated 
  USING (auth.uid() = user_id) 
  WITH CHECK (auth.uid() = user_id);
  ```

## 4. Query Performance & Supabase Joins
- Structure queries so Supabase's PostgREST client can resolve nested relations in a single round-trip:
  ```typescript
  const { data } = await supabase
    .from('skills')
    .select(`
      id, title, slug, job_to_be_done,
      tools ( id, name, slug, website_url ),
      videos ( id, youtube_video_id, title, duration_seconds )
    `)
    .eq('slug', slug)
    .single();
  ```
- Avoid fetching unnecessary columns; never use `select('*')` on high-traffic lists.
```

---

## 7. Automated Tool Data Scraping Skill: Firecrawl

### 🕷️ Firecrawl Web Ingestion Skill (`firecrawl-mcp-server`)
* **GitHub Repository:** [`firecrawl/firecrawl-mcp-server`](https://github.com/firecrawl/firecrawl-mcp-server)
* **What it Does:** Gives Claude and Cursor real-time web scraping and crawling capabilities via Model Context Protocol (MCP).
* **Why it's Crucial for this Directory:**
  * Populating 150+ AI tool profiles manually takes hundreds of hours.
  * With Firecrawl active, you can provide an AI tool's URL and prompt:
    > *"Scrape `https://claude.ai` and `https://claude.ai/pricing`—extract the exact pricing tiers, free tier limits, context window size, API availability, and compliance statements, then output it as a Supabase insert statement."*
* **How to Add to Cursor (`mcp.json`):**
  ```json
  {
    "mcpServers": {
      "firecrawl": {
        "command": "npx",
        "args": ["-y", "firecrawl-mcp"],
        "env": {
          "FIRECRAWL_API_KEY": "YOUR_FIRECRAWL_API_KEY"
        }
      }
    }
  }
  ```

---

## 8. Code Quality & Minimalism Skill (Karpathy Guidelines)

### ⚡ Clean & Minimalist Engineering Rule (`.cursor/rules/karpathy-minimalism.mdc`)
* **Origin / Reference:** Andrej Karpathy's viral LLM coding guidelines from `awesome-agent-skills`.
* **Purpose:** Prevents AI code bloat and ensures code remains clean, readable, and easy to maintain.

```markdown
---
description: Enforce simple, minimalist, and readable TypeScript and React code.
globs: **/*.{ts,tsx}
---

# Minimalist Code Standards

1. **Anti-Bloat:**
   - Do not write abstract factories, helper classes, or nested utility files when a simple, idiomatic 5-line function achieves the same result.
   - Avoid adding third-party npm packages for simple tasks that standard JavaScript/TypeScript natively handles.
2. **Explicit over Clever:**
   - Write clear, readable code with descriptive variable names over dense, one-line tricks.
3. **Fail Fast & Explicit Errors:**
   - Always handle unexpected nulls or missing database records with clear, early returns and meaningful error messages.
```

---

## 9. Project Planning, PRD & Architecture Research Skill

### 📋 Spec-Driven Development & Planner Skill (`project-planner.mdc`)
* **Origin / Reference:** Inspired by Anthropic's System Architect and `awesome-agent-skills` Product Manager patterns.
* **Purpose:** Ensures you never jump blindly into coding. Translates high-level ideas into structured Product Requirements Documents (PRDs), Technical Architecture Specs (ADRs), and dependency-ordered implementation task lists.
* **How it Operates (The 4-Phase System):**
  1. **Phase 1: Requirements & Scope (PRD):** Clarifies problem statements, target personas, acceptance criteria, and explicit *Out-of-Scope* boundaries (preventing scope creep).
  2. **Phase 2: Technical Research & Trade-offs:** Evaluates library/API options (e.g. Next.js vs Astro, Supabase vs Firebase) and documents the rationale.
  3. **Phase 3: System Design & Architecture Spec:** Maps out component hierarchies, data flows (UI $\rightarrow$ Server Action $\rightarrow$ Database), schema foreign keys, and API contracts.
  4. **Phase 4: Atomic Task Breakdown:** Breaks work into 1–3 hour testable milestones so development proceeds with zero confusion.

* **Ready-to-Use Skill Rule (`.cursor/rules/project-planner.mdc` or Claude Skill):**

```markdown
---
description: System Architect and Product Manager skill for PRDs, technical research, architecture specs, and task planning.
globs: docs/**/*.md, **/*.plan.md
---

# Principal Architect & Project Planning Standards

You are a Principal Software Architect and Technical Product Manager. When asked to plan a feature, research a direction, or scaffold project documentation, execute this workflow:

## 1. The "Grill Me" Clarification Loop
- Never make blind assumptions about ambiguous requirements.
- Ask 2–4 targeted questions regarding:
  1. Primary user persona & primary job to be done.
  2. Strict performance or budget constraints (e.g., $0/mo free tier).
  3. Boundaries: What is strictly OUT OF SCOPE for V1?

## 2. Structured PRD Output (`/docs/prd/PRD-[feature].md`)
Every feature spec must include:
- **Problem Statement:** The pain point in plain language.
- **User Stories & Acceptance Criteria:** In `Given / When / Then` format.
- **Out of Scope (Non-Goals):** Features deliberately deferred to prevent bloat.

## 3. Architecture & Trade-Off Spec (`/docs/architecture/SPEC-[feature].md`)
- **Evaluated Alternatives:** Document Option A vs. Option B with pros/cons.
- **Data Flow Diagram:** Visual ASCII/Mermaid flow showing request path.
- **Data Models:** Exact tables, foreign key constraints, and required indexes.
- **Edge Cases & Failure Modes:** What happens if the network drops, API limits hit, or user inputs invalid data?

## 4. Dependency-Ordered Task List (`/docs/tasks/TASKS-[feature].md`)
- Break the plan down into sequential, atomic tasks (e.g., Task 1: Database Migration ➔ Task 2: Supabase Query Layer ➔ Task 3: UI Component ➔ Task 4: Integration Test).
- Each task must have a clear verification test before proceeding to the next.
```

---

## 10. Complete Antigravity Skills & Rules Structure

In **Google Antigravity**, customizations are discovered automatically through native workspace locations:
* **Workspace Rules:** `AGENTS.md` (or `GEMINI.md`) at the project root for continuous guidelines.
* **Workspace Skills:** `.agents/skills/<skill-name>/SKILL.md` for on-demand procedural runbooks.

```
ai-tool-directory/
├── AGENTS.md                                   # Root workspace guidelines & constraints
├── .agents/
│   └── skills/
│       ├── project-planner/
│       │   └── SKILL.md                       # PRD generation & architecture planning
│       ├── ui-ux-pro-max/
│       │   └── SKILL.md                       # 50+ UI styles, palettes & design tokens
│       ├── copywriting-anti-slop/
│       │   └── SKILL.md                       # Jobs-to-be-Done copy & anti-AI slop
│       ├── nextjs-architecture/
│       │   └── SKILL.md                       # RSC, ISR caching & server actions
│       ├── tailwind-shadcn/
│       │   └── SKILL.md                       # Component composition & aspect ratios
│       ├── seo-metadata/
│       │   └── SKILL.md                       # JSON-LD HowTo & dynamic metadata
│       └── supabase-schema/
│           └── SKILL.md                       # Relational schema, indexes & RLS security
```

With this native Antigravity setup, your assistant adheres to these architectural guardrails on every turn without needing external IDE extensions.

