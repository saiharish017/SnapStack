# SnapStack — UI/UX Design Specification & Google Stitch Prompt Package

Use this document to generate high-fidelity UI/UX mockups in **Google Stitch (`stitch.withgoogle.com`)**. 

It contains the global design system rules followed by section-by-section layout prompts for all 9 screens.

---

## 🎨 Global Design System & Theme Guidelines

* **Product Name:** **SnapStack**
* **Tagline:** *"Tested AI Workflows & Tool Stacks in a Snap"*
* **Target Audience:** Solo founders, builders, indie hackers, and automation engineers.
* **Aesthetic / Vibe:** Clean, modern developer SaaS aesthetic (inspired by Linear, Vercel, and Raycast). Minimalist, bento-grid card structures, subtle 1px border outlines (`border-neutral-200` light / `border-neutral-800` dark), micro-badges, and generous whitespace.
* **Color Palette:**
  * **Background:** Deep neutral dark mode (`#09090B` or `#0F172A`) or ultra-clean light mode (`#FAFAFA`).
  * **Card Surface:** `#18181B` / `#FFFFFF` with subtle border contrast.
  * **Primary Accent:** Electric Emerald (`#10B981`) or Electric Indigo (`#6366F1`) for action buttons, verification checkmarks, and active states.
  * **Status Pills:** Green (`Verified Working`), Blue (`No-Code`), Purple (`Developer / API`), Amber (`Community Review`).
* **Typography:** Clean sans-serif (Inter, Geist, or Space Grotesk) with clear hierarchical font scales.

---

## 📱 Page-by-Page Screen Prompts for Stitch

---

### SCREEN 1: Homepage (`/`)
> **Stitch Prompt:**
> "Design a clean, modern SaaS landing page for **SnapStack**, an open-source AI workflow and tool adoption platform. Modern dark mode, bento-grid layout, high visual polish."

* **Key Sections to Render:**
  1. **Sticky Header / Navbar:** 
     * Left: Minimalist logo (geometric lightning/stack icon + wordmark "SnapStack").
     * Center: Nav links (`Workflows`, `AI Tools`, `Videos`, `Why Free?`).
     * Right: Search icon shortcut `[ ⌘K ]` + GitHub star button.
  2. **Hero Section (Outcome Search):**
     * Bold Headline: *"Find the exact AI workflow for your job—not just another tool list."*
     * Subtitle: *"Tested automation recipes, copyable prompts, and 60-second video walkthroughs. 100% free."*
     * Large interactive search bar with placeholder: *"What job do you want done? (e.g. Auto-extract invoice data into Sheets...)"*.
     * Filter chips below search: `[All]`, `[Founders]`, `[Sales & CRM]`, `[Marketing]`, `[Operations]`, `[Devs]`.
  3. **"Workflow of the Week" (Hero Bento Spotlight):**
     * Split card: Left side shows outcome details (*"Turn Zoom Recordings into HubSpot Deals"*), required tool stack icons (`Whisper + Claude + HubSpot`), time saved badge (`~5 hrs/wk`), and a primary CTA `[View Recipe & Copy Prompt]`.
     * Right side shows a YouTube video player card with a play icon overlay and duration pill (`4:12`).
  4. **Trending Workflows Grid (6 Bento Cards):**
     * Cards featuring workflow title, chain of tool logos connected by small arrows, difficulty pill (`[No-Code]`), time saved, and a video badge (`[▶ 58s Short]`).
  5. **Verified Tools Spotlight (4 Cards):**
     * Clean cards with tool logo, name, pricing pill (`Freemium from $20/mo`), compliance tags (`[SOC 2]`, `[No Data Training]`), and a `[View 3 Tutorials ➔]` button.
  6. **4-Pillar Trust Banner:**
     * 4 horizontal cards: `100% Free & Open Access`, `Real Screen Video Proof`, `1-Click Blueprints`, `Honest "Do it in ChatGPT for Free" Callouts`.
  7. **Footer:** Directory links, newsletter box (*"Get 1 tested workflow every Tuesday"*), and open-source badge.

---

### SCREEN 2: Automated Workflows Catalog (`/workflows`)
> **Stitch Prompt:**
> "Design an exploratory catalog page for end-to-end multi-tool AI workflows and automated pipelines. Left sidebar features filter checkboxes for Role, Platform (Make.com, n8n, Zapier), Difficulty, and $0 Free Stacks. Right side displays a responsive 3-column grid of workflow cards with video thumbnails, connected tool logo chains (e.g. Descript ➔ Claude ➔ Buffer), time saved badges, and bookmark buttons."

* **Key Sections to Render:**
  1. **Top Bar:** Page title *"AI Workflows Library"*, search input, and sort dropdown (*Most Saved*, *Highest Time Saved*, *Easiest Setup*).
  2. **Filter Sidebar (Left):**
     * **Role:** Checkboxes for `Founders`, `Marketing`, `Sales`, `Devs`, `Ops`.
     * **Platform:** `Make.com`, `n8n`, `Zapier`, `Python`.
     * **Difficulty:** `No-Code`, `Low-Code`, `Developer`.
     * **Video Type:** `Has 60s Short`, `Has Full Tutorial (>3m)`.
     * **Cost:** `100% Free Stacks ($0)`, `Under $25/mo`.
  3. **Workflow Cards Grid (Right):**
     * Video preview thumbnail with duration pill.
     * Role tag + difficulty pill.
     * Big outcome headline (e.g., *"Repurpose 1 YouTube Video into 10 LinkedIn Posts"*).
     * Connected tool stack chain icons (`[Descript] ➔ [Claude] ➔ [Buffer]`).
     * Bottom row: `~4 hrs saved/wk`, `Verified Nov 2026`, and a bookmark heart icon.

---

### SCREEN 3: Single Workflow Recipe Page (`/workflows/[slug]`)
> **Stitch Prompt:**
> "Design a high-converting, execution-ready recipe page for an automated multi-tool AI workflow. Clean two-column layout with visual node flowchart at top, embedded video player, tool stack list with live cost, copyable prompt code block, and downloadable Make/n8n blueprint JSON buttons."

* **Key Sections to Render:**
  1. **Header Breadcrumbs & Meta Bar:**
     * `Home > Workflows > Sales > Auto-Lead Qualifier`
     * Title: *"Convert Inbound Email Leads into Scored CRM Records & Slack Alerts"*
     * Meta pills: `[Sales & Ops]`, `[Setup: 12 mins]`, `[Saves ~6 hrs/wk]`, `[✔ Verified Working on Claude 3.7]`.
  2. **Interactive Visual Flowchart Bar:**
     * A clean visual diagram at the top:
       `[Input: Inbound Email]` ➔ `[AI: Claude extracts budget & intent]` ➔ `[Condition: Score > 7]` ➔ `[Action: HubSpot Deal + Slack Alert]`.
  3. **Video Player Section:**
     * Tabs above player: `[▶ 60s Quick Demo (Shorts format)]` and `[▶ Full Step-by-Step Guide (16:9)]`.
     * Large video embed facade with channel credit and publish date.
  4. **The Required Tool Stack & Cost Box:**
     * Side-by-side cards for each required tool (e.g. `Claude API`, `Make.com`, `HubSpot`).
     * Live Stack Cost pill: *"Total Stack Cost: $0 on free tier / ~$19/mo scaled"*.
  5. **"Can I Do This for Free in ChatGPT?" (The Radical Honesty Callout):**
     * Expandable callout card showing the free single-turn prompt alternative for users who don't want to buy software.
  6. **The Action Vault (Prompts & Blueprints):**
     * Code block displaying the exact System Prompt with a prominent `[Copy Prompt]` button.
     * Blueprints bar: `[Download Make.com Blueprint (.json)]` and `[Download n8n Blueprint (.json)]`.
  7. **Step-by-Step SOP Accordion:**
     * Expandable numbers: `Step 1: Get API Keys`, `Step 2: Webhook Trigger`, `Step 3: Claude Prompt Node`, `Step 4: Output Mapping`.
  8. **Community Feedback Widget:**
     * *"Did this workflow work for you today?"* `[👍 Works Great (96%)]` `[⚠️ Report Issue]`.

---

### SCREEN 4: AI Skills & Prompt Techniques Catalog (`/skills`)
> **Stitch Prompt:**
> "Design a modern catalog and playbook directory for AI prompting skills and single-tool superpowers. Clean category tabs at top, filter bar for models (Claude 3.7, GPT-4o, Midjourney, Cursor), and a 3-column card grid showing prompt technique cards with 1-click copy buttons."

* **Key Sections to Render:**
  1. **Header & Category Tabs:**
     * Title: *"AI Skills & Prompt Engineering Playbooks"*.
     * Subtitle: *"Master specific AI techniques, prompt templates, and single-tool superpowers."*.
     * Category Quick Tabs: `All Skills`, `Prompt Engineering & Reasoning`, `Content & Copywriting`, `Coding & Architecture`, `Data Extraction & Vision`, `Image & Media Generation`.
  2. **Skills Cards Grid (3 Columns):**
     * Card Header: Tool icon + Model name (`Claude 3.7`) + Category pill (`Prompting`).
     * Title: e.g. *"Claude 3.7 Artifacts: Building Interactive React Dashboards in Prompts"*.
     * Video facade thumbnail (60s micro-guide preview).
     * Monospace prompt preview snippet.
     * Card Actions: `[Copy Template]` button (with instant toast) + `[View Guide ➔]`.

---

### SCREEN 5: Single Skill & Prompt Playbook Page (`/skills/[slug]`)
> **Stitch Prompt:**
> "Design a deep educational guide page for a single AI prompt technique or tool superpower. Features a 60-second micro-demo video, a side-by-side Before/After prompt comparison, and a master syntax-highlighted prompt template with variable token chips."

* **Key Sections to Render:**
  1. **Header Breadcrumbs & Meta Bar:**
     * `Home > Skills > Vision & Extraction > Invoice Table Extraction`
     * Title: *"How to Extract Clean Tabular Data from Invoices using Claude Vision"*
     * Meta pills: `Target Tool: Claude 3.7`, `Difficulty: Intermediate`, `Model Temp: 0.1`, `Verified Nov 2026`.
     * `[Bookmark Skill]` button.
  2. **Micro-Tutorial Video Section:**
     * 60–90 second vertical or 16:9 video walkthrough demonstrating the exact prompt in action.
  3. **Side-by-Side Before & After Output Showcase:**
     * Two comparison panels:
       * Left: *"Standard Vague Prompt"* ➔ outputs messy, unstructured prose.
       * Right: *"Mastered Skill Prompt"* ➔ outputs clean, valid JSON/Markdown table.
  4. **The Master Prompt Template Vault:**
     * Syntax-highlighted code block with variable highlight tokens (e.g. `{{DOCUMENT_TEXT}}`, `{{OUTPUT_COLUMNS}}`).
     * Sticky `[Copy Prompt Template]` button.
     * Model parameter specs box (Temperature, System Instructions, Context tokens).
  5. **"Workflows That Use This Skill":**
     * 3-card grid linking to full automated pipelines (`/workflows/[slug]`) that implement this exact technique.

---

### SCREEN 6: AI Tools Directory (`/tools`)
> **Stitch Prompt:**
> "Design a clean, unbloated software directory of vetted AI tools. Focuses on decision data: privacy compliance, transparent pricing, and practical video counts."

* **Key Sections to Render:**
  1. **Header:** Title *"Vetted AI Tools"*, category pills (`[LLMs]`, `[Voice & Audio]`, `[Video]`, `[Coding Assistants]`, `[Automation]`).
  2. **Filter Controls:**
     * Pricing: `Free`, `Freemium`, `Paid`, `Open Source`.
     * Security & Compliance: Checkboxes for `SOC 2 Type II`, `GDPR`, `Does NOT train on user data`.
  3. **Tool Cards Grid (3 Columns):**
     * Card Header: Tool Logo, Tool Name, verified checkmark, bookmark icon.
     * Category pill + Pricing model badge (`From $20/mo` or `Free`).
     * 1-line honest superpower summary (e.g., *"Industry-standard reasoning model for complex code & long documents"*).
     * Compliance badges: `[No AI Training]` `[SOC 2]`.
     * Activity indicators: `[▶ 4 Video Guides]` `[⚡ Used in 8 Workflows]`.
     * Buttons: `[View Details]` and `[Visit Official Site ↗]`.

---

### SCREEN 7: AI Tool Profile Page (`/tools/[slug]`)
> **Stitch Prompt:**
> "Design an objective, decision-focused profile page for a software tool (e.g. Claude or Make.com). Features technical factsheets, video tutorials, and linked workflows."

* **Key Sections to Render:**
  1. **Hero Header:** Big tool logo, name, company, verified badge, and primary CTA `[Visit Official Site ↗]` with affiliate disclosure note.
  2. **Decision & Security Factsheet (Table / Bento Card):**
     * Pricing Tiers breakdown (Free vs Pro vs API).
     * Data Privacy: *"Does it train on data? No on API/Team plans"*.
     * Certifications: `SOC 2 Type II`, `GDPR`.
     * Technical specs: Context window, supported languages, API availability.
  3. **Curated Video Gallery (2–4 Videos):**
     * Carousel or grid of YouTube video facades:
       * *Video 1:* 60s Fast Setup Demo.
       * *Video 2:* Complete 10-Minute Deep Dive.
       * *Video 3:* Best Prompt Settings for Developers.
  4. **"Workflows Powered by [Tool Name]" Grid:**
     * Shows all the ready-to-use recipes on SnapStack that use this tool.
  5. **Honest Review: Pros, Cons & Real Failure Modes:**
     * Two-column comparison: `What It Excels At` vs. `Limitations & Failure Points`.
  6. **Alternatives & Competitors:** Quick comparison cards (e.g., *Claude vs ChatGPT vs Gemini*).

---

### SCREEN 8: Video Feed & Library (`/videos`)
> **Stitch Prompt:**
> "Design a video-first discovery page for short-form and long-form AI tutorials. Modern dark UI with an interactive side drawer for copying prompts while the video plays."

* **Key Sections to Render:**
  1. **Top Bar:** View switcher: `[Grid View]` (desktop) vs `[Shorts Stream]` (vertical mobile swipe), and filter chips by Tool and Role.
  2. **Video Grid Layout:**
     * Video cards with high-res thumbnails, duration pills (`0:54` for Short, `8:20` for Tutorial), creator channel name, and linked tool pills.
  3. **The "Learn & Act" Interactive Drawer (Modal/Sidebar):**
     * When a user taps a video:
       * Top: Embedded YouTube player running at the exact starting timestamp.
       * Bottom / Right: Action Drawer showing:
         * Tools used in the video with direct links.
         * The exact copyable prompt used in the video with a `[Copy Prompt]` button.
         * Link to the full workflow recipe.

---

### SCREEN 9: Tool Comparison Showdown (`/compare/[toolA]-vs-[toolB]`)
> **Stitch Prompt:**
> "Design a side-by-side software comparison page (e.g., Claude vs ChatGPT). Features a high-converting comparison matrix and side-by-side video demos."

* **Key Sections to Render:**
  1. **Hero Scorecard:** Tool A Logo vs. Tool B Logo.
     * "Quick Verdict" summary cards: *"Choose Tool A for coding & long context"* vs. *"Choose Tool B for voice mode & web browsing"*.
  2. **Side-by-Side Video Showdown:**
     * Two video players side-by-side showing both tools performing the exact same task.
  3. **Comprehensive Comparison Matrix Table:**
     * Rows for Pricing, Free Tier, Context Window, Coding Benchmark, Data Training Policy, and API access.
  4. **Community Sentiment Poll:**
     * Interactive poll bar showing community votes (e.g., `58% Claude` vs `42% ChatGPT`).

---

### SCREEN 10: User Dashboard (`/saved`)
> **Stitch Prompt:**
> "Design a personal user dashboard for managing saved AI workflows and tracking monthly tool spend. Clean, card-based interface."

* **Key Sections to Render:**
  1. **User Profile Header:** Avatar, name, role tag (`Founder / Operations`), and stats bar (`12 Workflows Saved | $39/mo Stack Spend | ~15 hrs/wk Saved`).
  2. **Tabbed Navigation:**
     * Tab 1: `[My Saved Workflows]` — Kanban-style cards sorted by status: `To Try`, `In Progress`, `Active in My Business`.
     * Tab 2: `[My Saved Skills]` — Grid of prompt playbooks and single-tool techniques.
     * Tab 3: `[Bookmarked Tools]` — Grid of favorite software with user notes.
     * Tab 4: `[My Prompt Vault]` — Searchable list of saved system prompts with 1-click copy buttons.
     * Tab 5: `[Stack Cost Calculator]` — Live monthly sum of the user's active tools with cost-saving suggestions.

---

### SCREEN 11: Submission Portal (`/submit`)
> **Stitch Prompt:**
> "Design an open, 100% free submission portal for YouTube creators and software founders to submit tutorials, skills, and tools for editorial review."

* **Key Sections to Render:**
  1. **Header:** Title *"Submit a Tutorial or AI Tool"*, subtitle *"100% Free. Reviewed on merit and video proof."*.
  2. **Toggle Switcher:** `[Submit a Workflow (Automation)]` vs. `[Submit an AI Skill (Prompt Guide)]` vs. `[Submit an AI Tool]`.
  3. **Creator Forms:** URL input (with instant video preview), tool tags, start timestamp, and prompt/blueprint upload.
  4. **Founder Form:** Product URL, pricing model, compliance checkboxes (SOC 2, No Data Training), and required video proof link.
  5. **100% Free Community Review Notice:** Clarifying zero paywalls and editorial review standards.

---

### SCREEN 12: Authentication / Login & Sign Up (`/login`)
> **Stitch Prompt:**
> "Design a clean, developer-focused authentication page for SnapStack. Minimalist dark mode split card or centered dialog featuring 1-click social logins and passwordless magic links."

* **Key Sections to Render:**
  1. **Layout:** Split-screen card on desktop (left side shows benefit checklist: *"Save verified workflows, build custom prompt vaults, and calculate your AI stack costs"* + brand icon; right side shows auth form).
  2. **Auth Header:** Logo + title *"Sign in to SnapStack"* + subtitle *"Save recipes and manage your personal stack"*.
  3. **1-Click OAuth Buttons:**
     * `[ Continue with Google ]` (Google icon + primary button).
     * `[ Continue with GitHub ]` (GitHub Octocat icon + outline button).
  4. **Divider:** Subtle horizontal rule with text *"OR CONTINUE WITH EMAIL"*.
  5. **Passwordless Magic Link Form:**
     * Clean email input field with mail icon.
     * `[ Send Magic Link / Sign In ]` button with loading state.
  6. **Redirect Notice:** Small tooltip indicator: *"You'll be redirected back to your saved workflow immediately after signing in"*.
  7. **Footer:** Terms of Service, Privacy Policy, and `← Back to Home` link.


