# SnapStack — Documentation Index & Architecture Map

Welcome to the documentation repository for **SnapStack** (*"Tested AI Workflows & Tool Stacks in a Snap"*). 

All project research, specifications, architecture blueprints, design prompts, and implementation roadmaps are organized into specialized subdirectories below:

---

## 📂 Documentation Directory Structure

```
docs/
├── prd/
│   └── PRD-mvp.md                     # Product Requirements Document (V1 MVP)
├── architecture/
│   ├── SPEC-mvp.md                    # Technical Architecture Spec (Mermaid flows & SQL schema)
│   └── tech_stack.md                  # Tech stack breakdown ($0/mo Next.js 15 + Supabase)
├── pages/
│   ├── page.md                        # Master 12-page structural & layout blueprint (No copy)
│   ├── 01_homepage.md                 # Detailed Homepage wireframe & sections
│   ├── 02_skills_directory.md         # Skills & Workflows catalog wireframe
│   ├── 03_skill_detail.md             # Single workflow recipe execution wireframe
│   ├── 04_tools_directory.md          # AI tools directory wireframe
│   ├── 05_tool_detail.md              # Single tool profile & video gallery wireframe
│   ├── 06_video_feed.md               # Video library & interactive drawer wireframe
│   ├── 07_comparison_page.md          # Tool vs Tool comparison showdown wireframe
│   ├── 08_user_dashboard.md           # User dashboard & stack cost tracker wireframe
│   └── 09_submission_portal.md        # 100% free creator & founder submission portal
├── design/
│   └── STITCH_DESIGN_PROMPTS.md       # Google Stitch (stitch.withgoogle.com) UI mockup prompts
├── research/
│   ├── research.md                    # Market research, competitor analysis & strategy
│   └── workflow_sourcing_guide.md     # YouTube search formulas & n8n/Make curation playbook
├── tasks/
│   └── TASKS-mvp.md                   # Dependency-ordered 7-milestone execution task list
└── skills/
    └── ai_agent_skills.md             # Curated agent skills & prompt rules (Karpathy, Firecrawl, etc.)
```

---

## 📑 Quick Navigation by Purpose

### 1. Product & Strategy
* **[PRD-mvp.md](./prd/PRD-mvp.md):** The core product vision, target persona (Solo Founders & Indie Hackers), user stories, acceptance criteria, and explicit out-of-scope boundaries.
* **[research.md](./research/research.md):** Market dynamics, directory fatigue analysis, YouTube zero-hosting quota economics, and business positioning.
* **[workflow_sourcing_guide.md](./research/workflow_sourcing_guide.md):** How to source, verify, and curate the first 15–30 high-impact workflows from YouTube, n8n, and Make.com.

### 2. Technical Architecture & Engineering
* **[SPEC-mvp.md](./architecture/SPEC-mvp.md):** End-to-end request lifecycle, Mermaid data-flow diagrams, PostgreSQL relational schema, cascading foreign key indexes, and Row-Level Security (RLS) policies.
* **[tech_stack.md](./architecture/tech_stack.md):** Next.js 15 (App Router, RSC), Tailwind CSS v4, shadcn/ui, Supabase, and complete **$0/month free-tier budget verification**.
* **[TASKS-mvp.md](./tasks/TASKS-mvp.md):** Step-by-step engineering roadmap broken into 7 sequential milestones with explicit verification criteria.

### 3. UI/UX Design & Page Layouts
* **[page.md](./pages/page.md):** The master structural blueprint detailing layout structures, component hierarchies, form controls, and interactive states across all 12 platform pages (without copywriting).
* **[STITCH_DESIGN_PROMPTS.md](./design/STITCH_DESIGN_PROMPTS.md):** Ready-to-copy prompts formatted for Google Stitch (`stitch.withgoogle.com`) to generate high-fidelity UI screens.
* **[pages/](./pages/):** Deep-dive wireframe specifications for individual platform views.

### 4. Agent Customizations & Guidelines
* **[ai_agent_skills.md](./skills/ai_agent_skills.md):** Curated AI developer skills (UI/UX Pro Max, Anti-Slop Copywriting, Next.js architecture, Firecrawl scraper, and Karpathy minimalism rules).
* **[`/AGENTS.md`](../AGENTS.md):** Root workspace rule automatically enforced by Google Antigravity across all tasks.

