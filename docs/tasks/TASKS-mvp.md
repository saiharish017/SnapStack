# Implementation Tasks Breakdown: SnapStack (V1 MVP)

* **Product Name:** **SnapStack** (Working Title)
* **Document ID:** `TASKS-MVP-001`
* **Related Docs:** [PRD-MVP-001](../prd/PRD-mvp.md) | [SPEC-MVP-001](../architecture/SPEC-mvp.md)
* **Status:** Ready for Execution
* **Stack:** Next.js 15 (App Router, TypeScript) + Tailwind CSS v4 + shadcn/ui + Supabase

---

## Milestone 1: Baseline Project Scaffolding & Design System

- [ ] **Task 1.1: Next.js 15 Initialization**
  - Initialize Next.js 15 project with App Router, TypeScript (Strict Mode), and ESLint.
  - Configure `tailwind.config.ts` with CSS variables for dark/light themes.
  - *Verification:* `npm run dev` boots cleanly with zero compiler warnings.
- [ ] **Task 1.2: Install shadcn/ui Core Primitives**
  - Install and configure `shadcn/ui` base dependencies.
  - Add primitives: `button`, `badge`, `tabs`, `accordion`, `dialog`, `sheet`, `card`, `tooltip`.
  - Install `lucide-react` for iconography and `sonner` for toast notifications.
  - *Verification:* Render a test component showcasing button variants, badges, and a Sonner toast trigger.
- [ ] **Task 1.3: Global Layout & Responsive Shell**
  - Build `app/layout.tsx` with global font configuration (Inter / Space Grotesk).
  - Build `components/layout/Navbar.tsx` with logo, navigation links (`Skills`, `Tools`, `Videos`), and GitHub/X links.
  - Build `components/layout/Footer.tsx` with role directory links, $0 free-tier pledge, and affiliate transparency notice.
  - *Verification:* Responsive navigation collapse on mobile screens (`<640px`).

---

## Milestone 2: Supabase Integration & Database Schema

- [ ] **Task 2.1: Supabase Client Configuration**
  - Install `@supabase/supabase-js` and `@supabase/ssr`.
  - Configure `lib/supabase/client.ts` (browser) and `lib/supabase/server.ts` (Server Components).
  - Set up `.env.local` with `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
  - *Verification:* Server Component successfully establishes an authenticated handshake with Supabase.
- [ ] **Task 2.2: Database Migration Execution**
  - Run SQL migration script from `SPEC-MVP-001` in Supabase:
    - Tables: `tools`, `skills`, `videos`, `tool_skills`, `video_tools`, `video_skills`.
    - Enable Row-Level Security (RLS) with public read policies.
    - Create B-tree indexes on foreign keys.
  - *Verification:* Supabase table editor confirms all 6 tables exist with active RLS and foreign key constraints.
- [ ] **Task 2.3: Generate TypeScript Database Types**
  - Run Supabase type generator to produce `types/database.ts`.
  - Verify complete type safety across all queries.
  - *Verification:* TypeScript compiles with zero `any` types when querying `skills` and `tools`.

---

## Milestone 3: Initial Seed Data Insertion (15 High-Impact Workflows)

- [ ] **Task 3.1: Seed Tools Table**
  - Populate initial 15 vetted tools (Claude 3.7, Make.com, n8n, Whisper, HubSpot, Notion, Zapier, Descript, Airtable, etc.) with real pricing, compliance tags, and URLs.
  - *Verification:* Query `SELECT count(*) FROM tools` returns $\ge 15$.
- [ ] **Task 3.2: Seed YouTube Videos Table**
  - Populate 15 verified YouTube tutorials and Shorts with channel attribution, duration, and exact `start_seconds`.
  - *Verification:* Query `SELECT count(*) FROM videos` returns $\ge 15$.
- [ ] **Task 3.3: Seed Skills & Junction Tables**
  - Insert 15 complete workflows from `workflow_sourcing_guide.md` (prompts, blueprints, SOP steps, "Can I do this for free?" callouts).
  - Link skills to their tools and videos via junction tables.
  - *Verification:* Relational query returns complete nested object: `skill -> tools -> video`.

---

## Milestone 4: Core Reusable Feature Components

- [ ] **Task 4.1: Video Facade Player Component (`components/video/VideoFacade.tsx`)**
  - Render YouTube thumbnail (`img.youtube.com/vi/{id}/hqdefault.jpg`) with play icon overlay and duration pill.
  - Maintain responsive aspect ratio: `aspect-[9/16]` for Shorts, `aspect-[16/9]` for tutorials.
  - On click, dynamically inject YouTube iframe with `autoplay=1&start={start_seconds}`.
  - *Verification:* Page load network tab confirms 0 KB YouTube iframe JS loaded until user clicks Play.
- [ ] **Task 4.2: Action Vault & Copy Prompt Component (`components/workflow/PromptVault.tsx`)**
  - Display system prompt in a formatted code block with syntax highlighting.
  - One-click "Copy System Prompt" button using `navigator.clipboard`.
  - Trigger green checkmark state and Sonner toast: *"Prompt copied to clipboard!"*.
  - *Verification:* Test copy action across desktop Chrome and mobile Safari webview.
- [ ] **Task 4.3: Blueprint JSON Downloader (`components/workflow/BlueprintDownload.tsx`)**
  - Trigger one-click browser download of Make.com / n8n blueprint JSON file.
  - *Verification:* Clicking button downloads a valid `.json` file that opens cleanly in Make.com.
- [ ] **Task 4.4: "Can I Do This for Free?" Honesty Box (`components/workflow/FreeAlternativeBox.tsx`)**
  - Accordion / Callout box highlighting whether the workflow can run in standard ChatGPT for free.
  - Display the free standalone prompt and trade-off notes.
  - *Verification:* Expand and collapse behavior renders smoothly on mobile.

---

## Milestone 5: Page Construction (Next.js 15 Server Components)

- [ ] **Task 5.1: Homepage (`app/page.tsx`)**
  - Hero with Outcome-based search bar.
  - Role filter chips (`Founders`, `Sales`, `Marketing`, `Devs`).
  - Featured "Workflow of the Week" split card (context + video player).
  - Trending Workflows grid (6 cards) and Featured Tools grid (6 cards).
  - 4-Pillar Trust Banner (100% Free, Zero Fluff, Copyable Blueprints, Free Alternatives).
  - *Verification:* Page renders purely as a React Server Component with sub-second TTFB.
- [ ] **Task 5.2: Skills & Workflows Catalog (`app/skills/page.tsx`)**
  - Multi-attribute filter sidebar (Role, Difficulty, Platform, Time Saved).
  - Search input with real-time URL search param synchronization (`/skills?role=founders`).
  - Responsive grid of Workflow cards with stack icons and video badges.
  - *Verification:* Applying a filter updates URL and displays filtered results without a full page refresh.
- [ ] **Task 5.3: Skill Recipe Detail Page (`app/skills/[slug]/page.tsx`)**
  - Header with breadcrumbs, role tag, time saved, and verification stamp.
  - Format Switcher: Toggle between *60s Short Demo* and *Full Step-by-Step Tutorial*.
  - Lite-facade video player with creator attribution.
  - Tool stack list with live pricing calculation.
  - "Can I do this in ChatGPT for free?" callout.
  - Action Vault (Copy prompt + Download blueprint).
  - Step-by-step SOP accordion.
  - *Verification:* Pre-rendered statically with `generateStaticParams()` and ISR `revalidate = 3600`.
- [ ] **Task 5.4: Tools Directory (`app/tools/page.tsx`)**
  - Filter bar: Category, Pricing model (Free/Freemium/Paid), Compliance (SOC 2, GDPR).
  - Grid of tool cards showing logo, superpower, pricing, and video count.
  - *Verification:* Filter by `SOC 2 = true` displays only compliant tools.
- [ ] **Task 5.5: Tool Profile Page (`app/tools/[slug]/page.tsx`)**
  - Header with logo, verified badge, and direct website CTA.
  - Decision factsheet (pricing tiers, data privacy, API limits).
  - Curated YouTube video gallery (Shorts + in-depth guides).
  - Associated Workflows grid ("What can you build with this tool?").
  - Pros, Cons, and real failure modes.
  - *Verification:* Page statically generates for all seeded tools.
- [ ] **Task 5.6: Video Feed & Library (`app/videos/page.tsx`)**
  - Grid mode on desktop; vertical stream on mobile.
  - Interactive Action Drawer attached to every video.
  - *Verification:* Playing a video presents the matching copyable prompt in the drawer.

---

## Milestone 6: Programmatic SEO & Performance Optimization

- [ ] **Task 6.1: Dynamic Metadata & OpenGraph**
  - Add `generateMetadata()` to all dynamic routes.
  - Generate custom OpenGraph preview cards using `next/og`.
  - *Verification:* Discord and Twitter/X card debuggers display crisp title, description, and image.
- [ ] **Task 6.2: JSON-LD Structured Data Schema**
  - Inject `HowTo` schema on `/skills/[slug]`.
  - Inject `SoftwareApplication` schema on `/tools/[slug]`.
  - Inject `VideoObject` schema on video embeds.
  - *Verification:* Google Rich Results Test validates 0 errors and 0 warnings.
- [ ] **Task 6.3: Automated Sitemap & Robots**
  - Build `app/sitemap.ts` dynamically pulling all active skill and tool slugs.
  - Build `app/robots.ts` permitting search engine indexing.
  - *Verification:* Visiting `/sitemap.xml` returns valid XML with all URLs.

---

## Milestone 7: Production Build & Vercel Free-Tier Deployment

- [ ] **Task 7.1: Production Build Verification**
  - Run `npm run build` locally.
  - Verify static pre-rendering passes for all routes with zero TypeScript or lint errors.
  - *Verification:* Build output confirms SSG/ISR symbols (circle/diamond) for all content routes.
- [ ] **Task 7.2: Lighthouse Performance Audit**
  - Run Chrome DevTools Lighthouse audit.
  - Performance: $\ge 95$ | Accessibility: $100$ | Best Practices: $100$ | SEO: $100$.
- [ ] **Task 7.3: Deploy to Vercel (Hobby Tier - $0/mo)**
  - Link GitHub repository to Vercel.
  - Configure production environment variables (`SUPABASE_URL`, `SUPABASE_ANON_KEY`).
  - Deploy to production with automatic HTTPS / SSL.
  - *Verification:* Live custom domain loads in $<1$ second with \$0 monthly infrastructure cost.

