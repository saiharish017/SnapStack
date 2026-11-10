# SnapStack — Complete Page Architecture & Section Specifications

This document defines the structural composition, section hierarchy, components, and data requirements for all pages of **SnapStack**. It focuses purely on **layout, UI components, data fields, and interactive mechanics** without marketing copy.

---

## Navigation & Global Shell (Present on All Pages)

### 1. Global Navigation Bar (`Sticky Header`)
* **Left:** Brand Logo (Icon + Wordmark link to `/`).
* **Center Navigation Links:**
  * `Workflows` (links to `/workflows` — Multi-tool automation recipes & blueprints)
  * `Skills` (links to `/skills` — AI prompt techniques & single-tool capabilities)
  * `Tools` (links to `/tools` — Vetted AI software directory)
  * `Videos` (links to `/videos` — Short & long video tutorial feed)
* **Right Utility Controls:**
  * Global Search Trigger `[ ⌘K / Search ]` (opens command palette modal).
  * GitHub Repository link button.
  * Theme Toggle (Dark / Light mode).
  * **User Authentication Control:**
    * **State A (Logged Out):** `[Sign In]` button linking to `/login`.
    * **State B (Logged In):** User Avatar dropdown (`My Saved Workflows`, `My Saved Skills`, `Prompt Vault`, `Stack Calculator`, `Sign Out`).

### 2. Global Footer
* **Column 1:** Brand identity, open-source license indicator, $0 free-tier pledge.
* **Column 2 (Workflows & Skills by Role):** Direct links to filtered playbooks (`Founders`, `Sales`, `Marketing`, `Devs`, `Operations`).
* **Column 3 (Browse Directories):** Links to `/workflows`, `/skills`, `/tools`, `/videos`, `/compare`.
* **Column 4 (Community & Legal):** Newsletter subscription form, `/submit` link, and affiliate transparency statement.

---

## Page 1: Homepage (`/`)

### Section 1: Hero & Outcome Search
* **Layout:** Centered single-column hero container.
* **Components & Elements:**
  * Pre-header pill: Static badge indicating verified test status.
  * Main Headline container (Outcome focus).
  * Sub-headline container.
  * **Search Input Component:**
    * Full-width search bar with search icon.
    * Real-time autocomplete dropdown showing matching Workflows, Skills, and Tools.
  * **Role Filter Bar:**
    * Horizontal scrolling pill list: `All`, `Founders`, `Sales & CRM`, `Marketing`, `Operations`, `Developers`.
    * Interactive filter triggers that update Section 3 in-place.

### Section 2: "Workflow of the Week" (Hero Bento Spotlight)
* **Layout:** Asymmetric 2-column bento card (`2/5` text metadata, `3/5` video facade).
* **Left Column (Context & Execution Details):**
  * Section label badge: `Featured Automation`.
  * Workflow title.
  * Role tag pill.
  * Stack Icons Row: Horizontal chain of tool logos with separator arrows.
  * Metric Badges:
    * Time saved badge (`hrs/week`).
    * Difficulty badge (`No-Code` / `Low-Code` / `Developer`).
    * Setup time badge (`minutes`).
  * Action Button: Primary link button to `/workflows/[slug]`.
* **Right Column (Video Facade Player):**
  * Video thumbnail image with 16:9 aspect ratio.
  * Centered Play button overlay.
  * Duration pill overlay.
  * Channel attribution overlay (Channel name + avatar).
  * Click behavior: Loads YouTube iframe at exact start timestamp.

### Section 3: Trending Multi-Tool Workflows Grid
* **Layout:** Header bar with view controls + 3-column responsive card grid (6 cards).
* **Controls Bar:**
  * Section heading: *"End-to-End Automated Workflows"*.
  * Sort Tabs: `Trending`, `Easiest Setup`, `Highest Time Saved`, `Recently Added`.
* **Workflow Card Components:**
  * Card top: YouTube video preview thumbnail with duration pill.
  * Card header: Role tag + Difficulty tag + Save/Bookmark icon button.
  * Card body: Workflow outcome title.
  * Tool Chain: Mini tool logos with arrows (`[Tool A] ➔ [Tool B] ➔ [Tool C]`).
  * Card footer:
    * Time saved counter.
    * Estimated monthly stack cost ($0 or monthly price).
    * Verification checkmark with month/year.
  * Whole card is clickable link to `/workflows/[slug]`.

### Section 4: Featured AI Skills & Prompt Techniques (Micro-Skills)
* **Layout:** Header bar + 4-column card grid.
* **Controls Bar:**
  * Section heading: *"Master Core AI Skills & Prompt Techniques"*.
  * Subtitle: *"Single-tool techniques and prompt templates you can learn in 60 seconds."*.
* **Skill Card Components:**
  * Category badge (`Prompting`, `Vision`, `Reasoning`, `Audio`, `Code`).
  * Target Tool Logo & Name (e.g. `Claude 3.7`, `Midjourney V6`, `Cursor`).
  * Skill Title (e.g., *"Extracting Clean Tables from Messy Invoices"*).
  * Video tag: `[▶ 54s Short]`.
  * Quick Action: `[Copy Prompt]` button + link to `/skills/[slug]`.

### Section 5: Verified AI Tools Spotlight
* **Layout:** Header bar + 4-column responsive grid.
* **Tool Card Components:**
  * Top: Tool logo + Tool name + Verified badge.
  * Tagline / Category pill.
  * Pricing model pill (`Free`, `Freemium`, `Paid`).
  * Compliance check pills: `[SOC 2]`, `[GDPR]`, `[No Data Training]`.
  * Usage counters: Number of Workflows and Skills utilizing this tool.
  * Video counter: Number of how-to tutorials available.
  * Actions: `[Details]` button and external `[Visit Site ↗]` button.

### Section 6: Trust & Transparency Pillars
* **Layout:** 4-column horizontal bento cards.
* **Components:**
  * Card 1: 100% Free & Open Access indicator.
  * Card 2: Screen-Recorded Video Proof indicator.
  * Card 3: 1-Click Blueprints & Prompts indicator.
  * Card 4: Free ChatGPT/Claude Alternative indicator.

---

## Page 2: Workflows Catalog (`/workflows`)
*(Dedicated to multi-tool automation pipelines connecting 2+ tools with downloadable blueprints)*

### Section 1: Page Header & Quick Search
* **Layout:** Full-width header banner.
* **Components:**
  * Category title: *"Automated AI Workflows"* and descriptive subtitle.
  * Inline text search input with instant clear button.
  * Active Filter Badges row (dismissible chips with "Clear All").
  * Total results counter (`Showing X workflows`).

### Section 2: Workflows Catalog Layout (Filter Sidebar + Results Grid)
* **Layout:** 2-column desktop split (`280px` fixed sidebar on left, flexible 3-column grid on right; mobile transforms sidebar into a slide-over Sheet drawer).
* **Sidebar Filter Controls:**
  * **Role / Department:** Checkbox list (`Founders`, `Sales`, `Marketing`, `Operations`, `Developers`, `HR`).
  * **Automation Platform:** Checkbox list (`Make.com`, `n8n`, `Zapier`, `Python Script`).
  * **Difficulty Level:** Radio buttons (`All`, `No-Code`, `Low-Code`, `Developer`).
  * **Time Saved:** Radio buttons (`< 2 hrs/wk`, `2–5 hrs/wk`, `5+ hrs/wk`).
  * **Stack Cost:** Filter toggles (`100% Free ($0)`, `Under $25/mo`, `Any`).
  * **Video Type:** Checkboxes (`Shorts (<60s)`, `Full Walkthrough (>3m)`).
  * **Verification:** Toggle (`Only Verified Working`).
* **Main Results Grid:**
  * Sort dropdown menu (`Most Popular`, `Highest Time Saved`, `Easiest Setup`, `Newly Verified`).
  * Responsive 3-column card grid rendering Workflow Cards.
  * Empty state container with "Reset Filters" action.
  * Pagination / Infinite scroll trigger.

---

## Page 3: Single Workflow Recipe Page (`/workflows/[slug]`)
*(The deep execution page for a multi-tool automated pipeline)*

### Section 1: Breadcrumbs & Meta Bar
* **Layout:** Full-width header.
* **Components:**
  * Breadcrumb links: `Home > Workflows > [Role] > [Workflow Name]`.
  * Primary Workflow Title.
  * Meta Badges Row:
    * Role pill.
    * Setup time pill (`e.g., 12 mins`).
    * Difficulty pill (`No-Code / Make.com`).
    * Time saved pill (`~5 hrs/week`).
    * Verification Seal: `Verified Working on [Model Name] ([Date])`.
    * Bookmark / Save button (saves to user library).
    * Share button (native Web Share API or copy link).

### Section 2: Visual Pipeline Flowchart
* **Layout:** Full-width interactive or SVG diagram container.
* **Components:**
  * Visual node sequence:
    * `[Input Node]` (e.g., Email, PDF, Webhook).
    * Connector arrow.
    * `[AI Processing Node]` (Tool name, model, operation).
    * Connector arrow.
    * `[Decision / Condition Node]` (Optional branching logic).
    * Connector arrow.
    * `[Output Node]` (CRM record, Slack notification, Sheet row).
  * Clicking any tool node highlights that tool in the stack section below.

### Section 3: Master Video Walkthrough
* **Layout:** Centered media player card with format switcher tabs.
* **Components:**
  * Format Switcher Tabs:
    * Tab 1: `▶ 60s Fast Demo` (Vertical 9:16 aspect ratio).
    * Tab 2: `▶ Full Step-by-Step Tutorial` (Widescreen 16:9 aspect ratio).
  * Lite Facade player container:
    * Thumbnail image, play button, duration badge, start timestamp indicator.
    * Loads YouTube iframe only on user click.
  * Creator Attribution Bar:
    * Channel avatar, channel name link, subscribe link, original video upload date.

### Section 4: Tool Stack & Total Cost Calculator
* **Layout:** Multi-column tool cards row + Summary cost box.
* **Components:**
  * Individual Tool Cards for every tool in the stack:
    * Tool logo, name, role in this workflow.
    * Pricing tier required for this recipe (`Free Tier OK` or `Pro required`).
    * Internal link to `/tools/[slug]`.
    * External outbound link with affiliate tag.
  * **Total Stack Cost Summary Card:**
    * Free tier feasibility check (`$0/mo` verdict).
    * Scaled cost estimate (monthly software + API costs).
    * Estimated ROI / Hours saved vs. software cost.

### Section 5: The "Can I Do This for Free in ChatGPT?" Callout
* **Layout:** Distinct bordered callout container with expandable accordion.
* **Components:**
  * Status badge (`Free Alternative Available: Yes/No`).
  * Summary explaining the difference between the full stack vs. single-prompt execution.
  * Expandable prompt box:
    * Single-turn prompt that simulates the workflow inside ChatGPT/Claude.
    * Copy prompt button.
    * Limitations list (e.g., *"Requires manual file upload; cannot trigger automatically in background"*).

### Section 6: The Action Vault (Downloadable Blueprints & Prompts)
* **Layout:** 2-column or tabbed code/download container.
* **Components:**
  * **Panel A: System Prompts & Parameters:**
    * Monospace code block containing exact prompt text for the AI node.
    * Sticky `[Copy Prompt]` button with visual copy feedback.
  * **Panel B: Automation Blueprints (1-Click Imports):**
    * Download button: `[Download Make.com Blueprint (.json)]`.
    * Download button: `[Download n8n Workflow (.json)]`.
    * File metadata (file size, version).
    * 3-step import instruction modal trigger.

### Section 7: Step-by-Step Standard Operating Procedure (SOP)
* **Layout:** Vertical accordion or numbered milestone cards.
* **Components:**
  * `Step 1: Prerequisites & Account Setup` (API keys, account signups).
  * `Step 2: Trigger Configuration` (Webhook URLs, polling intervals).
  * `Step 3: AI Node Prompting` (Inserting system prompts, variable mapping).
  * `Step 4: Output Action & Testing` (Field mapping, test run validation).
  * **Known Failure Modes & Watchouts Card:**
    * Bullet points detailing edge-case failures (e.g. rate limits, image format errors, empty inputs) and how to handle them.

### Section 8: Community Status & Verification Loop
* **Layout:** Horizontal feedback card.
* **Components:**
  * Question prompt: *"Did this workflow work for you today?"*.
  * Upvote button (`👍 It Works`) with live counter.
  * Report button (`⚠️ Broken / Needs Update`).

### Section 9: Related Workflows Grid
* **Layout:** 3-column card grid showing 3 adjacent workflows.

---

## Page 4: AI Skills & Prompt Techniques Catalog (`/skills`)
*(Dedicated to single-tool capabilities, prompt engineering playbooks, and micro-skills)*

### Section 1: Page Header & Quick Search
* **Layout:** Full-width header banner.
* **Components:**
  * Title: *"AI Skills & Prompt Engineering Playbooks"*.
  * Subtitle: *"Master specific AI techniques, system prompt templates, and tool superpowers."*.
  * Inline text search input (search by prompt topic, model name, or task).
  * Category Quick Tabs:
    * `All Skills`
    * `Prompt Engineering & Reasoning` (e.g., chain-of-thought, XML tags, role-prompting)
    * `Content & Copywriting` (e.g., tone matching, cold emails, hook generation)
    * `Coding & Architecture` (e.g., debugging, test generation, schema design)
    * `Data Extraction & Vision` (e.g., table extraction, image-to-JSON, receipt parsing)
    * `Image & Media Generation` (e.g., Midjourney parameters, character consistency)

### Section 2: Skills Catalog Grid (Filter Bar + Cards)
* **Layout:** Horizontal filter bar + 3-column card grid.
* **Filter Controls:**
  * **Target Tool / Model:** Filter by `Claude 3.7`, `GPT-4o`, `DeepSeek R1`, `Midjourney`, `Cursor`, `Whisper`.
  * **Skill Level:** `Beginner`, `Intermediate`, `Advanced`.
  * **Format:** `Has Copyable Prompt Template`, `Has Micro-Video Guide`.
* **Skill Card Components:**
  * Header: Tool icon + Model name + Skill Category pill.
  * Skill Title (e.g., *"Claude 3.7 Artifacts: Building Interactive React Dashboards in Prompts"*).
  * Video Facade thumbnail (compact vertical or 16:9 preview).
  * Preview of the core prompt technique.
  * Action Buttons:
    * `[Copy Template]` (instant clipboard copy with toast).
    * `[View Full Skill Guide ➔]` (links to `/skills/[slug]`).

---

## Page 5: Single Skill & Prompt Playbook Page (`/skills/[slug]`)
*(The deep learning page for a specific AI capability or prompt technique)*

### Section 1: Breadcrumbs & Header
* **Layout:** Full-width header.
* **Components:**
  * Breadcrumb links: `Home > Skills > [Category] > [Skill Name]`.
  * Primary Skill Title (e.g., *"How to Extract Clean Tabular Data from Invoices using Claude Vision"*).
  * Metadata bar: Target Tool logo, Required Model version, Skill difficulty level, Last verified date.
  * Bookmark / Save button (saves skill to user profile).

### Section 2: Demonstration Video (The 60-Second Micro-Tutorial)
* **Layout:** Centered media player card.
* **Components:**
  * Video embed facade (optimized for 60-90 second vertical Shorts or concise demo).
  * Creator attribution (channel name, video source).
  * Direct timestamp launch.

### Section 3: Before & After Comparison Showcase
* **Layout:** 2-column side-by-side comparison cards.
* **Components:**
  * **Left Card (Standard / Naive Prompt):** Shows the common vague prompt and the messy, generic result.
  * **Right Card (Mastered Skill Prompt):** Shows the optimized structured prompt and the clean, production-ready output.

### Section 4: The Master Prompt Vault & Parameters
* **Layout:** Code container with variable highlight tokens.
* **Components:**
  * Model Configuration Specs:
    * Recommended Model: `Claude 3.7 Sonnet` / `GPT-4o`.
    * Recommended Temperature: `0.1` (deterministic) vs `0.7` (creative).
    * Context / Token requirements.
  * **Interactive Prompt Template:**
    * Syntax-highlighted code block with variable tags (e.g., `{{DOCUMENT_TEXT}}`, `{{OUTPUT_COLUMNS}}`).
    * One-click `[Copy Prompt Template]` button.
    * Example filled-in prompt view toggle.

### Section 5: Step-by-Step Implementation & Tips
* **Layout:** Clean vertical checklist.
* **Components:**
  * Breakdown of why the prompt works (e.g. use of XML tags `<instructions>`, few-shot examples, negative constraints).
  * Pro tips for avoiding hallucinations and token waste.

### Section 6: "Workflows That Use This Skill"
* **Layout:** 3-column card grid.
* **Components:**
  * Direct links to full automated multi-tool workflows (`/workflows/[slug]`) that implement this exact skill in their pipeline.

---

## Page 6: AI Tools Directory (`/tools`)

### Section 1: Page Header & Category Tabs
* **Layout:** Full-width header container.
* **Components:**
  * Title and descriptive subtitle.
  * Search input by tool name, capability, or company.
  * Category quick-filter tabs: `All`, `LLMs & Reasoning`, `Audio & Voice`, `Video Generation`, `Coding Assistants`, `Automation & Agents`, `Design & Images`, `Research`.

### Section 2: Tools Directory Grid (Filter Bar + Cards)
* **Layout:** Horizontal top filter bar + 3-column card grid.
* **Filter Dropdowns & Controls:**
  * **Pricing Model:** `All`, `Free`, `Freemium`, `Paid`, `Open Source`.
  * **Security & Compliance Checkbox Filters:**
    * `[✔] Does NOT train on customer data`
    * `[✔] SOC 2 Type II Certified`
    * `[✔] GDPR Compliant`
    * `[✔] HIPAA / Healthcare Ready`
  * **API & Developer Access:** `Has REST API`, `Has Python/TS SDK`.
  * **Content Availability:** `Has Video Tutorials Only`.
  * **Sort Dropdown:** `Most Workflows Built`, `Alphabetical (A–Z)`, `Price (Low to High)`, `Newly Verified`.
* **Tool Card Components:**
  * Header: Tool logo (48x48px), Tool name, Verified checkmark, Bookmark button.
  * Category tag + Pricing badge (`Free`, `Freemium from $X`, `Paid`).
  * 1-line capability summary.
  * Compliance chips: `[No Training]`, `[SOC 2]`.
  * Feature counters:
    * Video badge: `▶ X Video Guides`.
    * Workflows badge: `⚡ In X Workflows`.
    * Skills badge: `🎯 In X Skills`.
  * Action Buttons:
    * `[View Profile & Guides]` (internal link to `/tools/[slug]`).
    * `[Visit Site ↗]` (external outbound link with affiliate tracking).

---

## Page 7: Single AI Tool Profile Page (`/tools/[slug]`)

### Section 1: Tool Hero & Identity Header
* **Layout:** 2-column header row.
* **Components:**
  * Left: Tool Logo (64x64px), Tool Name, Parent Company/Developer, Verified Badge, Category Tag.
  * 1-line core capability summary.
  * Right:
    * Primary CTA button: `[Visit Official Website ↗]`.
    * Affiliate transparency disclaimer note.
    * Bookmark button + Share button.

### Section 2: Decision Factsheet & Technical Specs
* **Layout:** Multi-column bento specification table.
* **Components:**
  * **Card A (Pricing Breakdown):**
    * Free tier limits (tokens, credits, watermarks).
    * Starting paid tier price.
    * Enterprise / API pricing model.
  * **Card B (Data Privacy & Security):**
    * Model training policy (`Does it train on your inputs?`).
    * Data residency regions (US, EU, etc.).
    * Certifications (`SOC 2`, `GDPR`, `ISO 27001`).
  * **Card C (Developer & System Specs):**
    * Context window size / token limit.
    * Input modalities (Text, Image, Audio, Video, PDF).
    * API availability, rate limits, SDK availability.
    * Native integration list (Slack, Notion, Zapier, etc.).

### Section 3: Curated YouTube Video Gallery
* **Layout:** Header + 3-card horizontal grid or carousel.
* **Components:**
  * Section title: Practical How-To Video Guides for this tool.
  * Video Cards:
    * Video 1: Quick 60s Feature Demo (Vertical Short).
    * Video 2: Full Setup & Onboarding Guide (16:9).
    * Video 3: Advanced Tips / Prompt Engineering (16:9).
  * Each card includes: Thumbnail, Play overlay, duration, creator credit, and curated prompt note.

### Section 4: "Skills & Capabilities You Can Learn"
* **Layout:** Responsive 3-column card grid.
* **Components:**
  * Grid of Skill Cards (from Page 4) teaching specific techniques for this tool.

### Section 5: "Workflows Powered by [Tool Name]"
* **Layout:** Responsive 3-column card grid.
* **Components:**
  * Grid of multi-tool Workflow Cards (from Page 2) that include this tool in their automation stack.

### Section 6: Balanced Review: Strengths, Weaknesses & Failure Points
* **Layout:** 2-column comparison card.
* **Components:**
  * **Column 1 (What It Excels At):**
    * Bullet points with green checkmarks detailing verified performance strengths.
  * **Column 2 (Limitations & Known Failure Points):**
    * Bullet points with warning icons detailing real-world bugs, rate-limit gotchas, or unsupported formats.

### Section 7: Alternatives & Comparisons
* **Layout:** Horizontal comparison cards row.
* **Components:**
  * 3 Alternative tools in the same category.
  * Feature highlight vs. current tool.
  * Direct comparison link button: `[Compare Tool A vs Tool B ➔]` (links to `/compare/...`).

---

## Page 8: Video Tutorials & Feed Page (`/videos`)

### Section 1: Header & View Mode Switcher
* **Layout:** Full-width header with mode controls.
* **Components:**
  * Page title and subtitle.
  * **View Mode Toggle:**
    * `[Grid Mode]` (Default desktop view).
    * `[Shorts Stream Mode]` (Vertical mobile-optimized swipe view).
  * Content Type Filter: `All Videos`, `Workflows (Multi-Tool)`, `Skills (Prompts & Demos)`.
  * Filter pills: Filter by Tool, by Role, or by Duration (`<60s` vs `>3 mins`).

### Section 2: Video Grid View (Default Layout)
* **Layout:** Responsive 3- or 4-column video card grid.
* **Components:**
  * Card thumbnail with aspect ratio badges (`9:16 Short` or `16:9 Tutorial`).
  * Duration overlay.
  * Video title.
  * Creator channel avatar and name.
  * Linked tool, skill, or workflow pills.
  * Action button: `[Open Video & Actions]`.

### Section 3: The "Learn & Act" Player Modal / Drawer
* **Layout:** Split view (Video Player on top/left, Action Drawer on bottom/right).
* **Components:**
  * **Video Player Area:**
    * Official YouTube iframe player loaded at `start_seconds`.
    * Aspect ratio adjusts dynamically based on video format.
  * **Action Drawer Area:**
    * **Tools Used:** Clickable badges linking to tool profiles with affiliate tags.
    * **Direct Recipe Link:** Button linking to the full `/workflows/[slug]` or `/skills/[slug]`.
    * **Prompt / Code Snippet Box:** Formatted code block showing the prompt used in the video with `[Copy Prompt]` button.
    * **Community Feedback:** Upvote and report buttons.

---

## Page 9: Tool Comparison Showdown (`/compare/[toolA]-vs-[toolB]`)

### Section 1: Header & Quick Verdict Card
* **Layout:** Centered header + 2-column scorecard.
* **Components:**
  * Headline: `[Tool A] vs [Tool B]`.
  * Logos of both tools with "VS" badge in the center.
  * **The Quick Verdict Bento Box:**
    * Box A: *"Choose [Tool A] if you need: [Bullet points of primary advantages]"*.
    * Box B: *"Choose [Tool B] if you need: [Bullet points of primary advantages]"*.
  * Action row: Direct links to official websites for both tools.

### Section 2: Side-by-Side Video Demonstration
* **Layout:** 2-column equal split.
* **Components:**
  * Column 1: Video walkthrough of Tool A performing a standardized task.
  * Column 2: Video walkthrough of Tool B performing the exact same task.
  * Allows visual comparison of UI, speed, and output quality.

### Section 3: Structured Comparison Matrix Table
* **Layout:** Responsive comparison data table.
* **Rows / Evaluation Metrics:**
  * Pricing / Starting Tier.
  * Free Tier Allowance.
  * Context Window / Token Limits.
  * Speed & Latency benchmarks.
  * Data Privacy & Model Training Policy.
  * API Availability & SDKs.
  * Native Integrations list.
  * Each row highlights the winning tool with an accent badge.

### Section 4: Community Sentiment Poll
* **Layout:** Centered poll container.
* **Components:**
  * Poll question: *"Which tool do you use more frequently?"*.
  * Interactive vote buttons: `[Vote Tool A]` vs `[Vote Tool B]`.
  * Real-time percentage progress bar showing community vote split.

---

## Page 10: User Dashboard & Personal Vault (`/saved`)

### Section 1: User Profile & Global Metrics Header
* **Layout:** Header card with avatar, name, email, and role badge.
* **Components:**
  * Metrics counter pills:
    * `Saved Workflows Count`
    * `Saved Skills & Prompts Count`
    * `Active Stack Cost ($/month)`
    * `Total Estimated Hours Saved`

### Section 2: Tabbed Dashboard Navigation
* **Components:**
  * Tab 1: `[My Saved Workflows]` (Multi-tool automations)
  * Tab 2: `[My Saved Skills]` (Prompt playbooks & techniques)
  * Tab 3: `[Bookmarked Tools]` (Software stack)
  * Tab 4: `[My Prompt Vault]` (Custom & copied prompts)
  * Tab 5: `[Stack Cost Calculator]` (Monthly software budget)

### Section 3: Tab Content Panels
* **Panel 1: Saved Workflows (Execution Tracker):**
  * 3-column Kanban board or status filter pills:
    * Column A: `To Try`
    * Column B: `In Progress / Testing`
    * Column C: `Active in My Business ✔`
  * Draggable or movable workflow cards with quick links to prompts and blueprints.
  * Personal notes text field on each card.
* **Panel 2: Saved Skills & Prompt Playbooks:**
  * Grid of saved AI skills with 1-click prompt copy and model parameter notes.
* **Panel 3: Bookmarked Tools:**
  * Grid of saved tools with user-selected subscription status (`Free Tier`, `Active Paid Subscription`, `Evaluating`).
* **Panel 4: My Prompt Vault:**
  * Searchable list of saved prompts.
  * Quick-copy button on every prompt item.
  * User custom prompt addition button (`[+ Add Custom Prompt]`).
* **Panel 5: Stack Cost Calculator:**
  * Line-item breakdown of all active tools in the user's stack.
  * Combined monthly expenditure sum.
  * Free alternative savings recommendation box.

---

## Page 11: Free Community Submission Portal (`/submit`)

### Section 1: Header & Submission Type Toggle
* **Layout:** Centered form container.
* **Components:**
  * Header title and 100% free community review notice.
  * Segmented Control Toggle:
    * `[Option A: Submit a Workflow (Multi-Tool Automation)]`
    * `[Option B: Submit an AI Skill (Prompt Technique / Guide)]`
    * `[Option C: Submit an AI Tool]`

### Section 2: Form A — Creator Workflow Submission
* **Form Inputs & Fields:**
  * YouTube Video URL input (triggers dynamic preview thumbnail below).
  * Video Format radio: `Short (<60s)` or `Full Tutorial (>3m)`.
  * Start Timestamp input (`mm:ss` to skip channel intros).
  * Workflow Title / Job to be Done input.
  * Target Role selector dropdown (`Founders`, `Marketing`, `Sales`, `Devs`, etc.).
  * Tools Used multi-select tag input.
  * Automation Blueprint file upload (`.json` for Make.com/n8n).
  * System Prompt textarea.
  * Creator Attribution inputs (Channel name, Twitter/X handle, website URL).
  * Submit button: `[Submit Workflow for Free Verification]`.

### Section 3: Form B — Creator Skill / Prompt Submission
* **Form Inputs & Fields:**
  * Skill Title (e.g. *"Claude Extended Thinking for Financial Models"*).
  * Target Tool & Model selector (e.g. `Claude 3.7`, `Midjourney V6`).
  * Category dropdown (`Prompting`, `Code`, `Vision`, `Reasoning`, `Audio`).
  * System Prompt / Template text with variable tokens (`{{VARIABLE}}`).
  * Video Demo URL (YouTube Short or tutorial).
  * Before & After example textareas.
  * Submit button: `[Submit Skill for Free Verification]`.

### Section 4: Form C — Tool Founder Submission
* **Form Inputs & Fields:**
  * Tool Name input.
  * Website URL input.
  * Category selector dropdown.
  * 1-Line Superpower summary input.
  * Pricing Model selector + Starting price input.
  * Free tier limits description.
  * Security & Compliance Checkboxes:
    * `[ ] Our tool does NOT train AI models on user inputs.`
    * `[ ] SOC 2 Type II Certified.`
    * `[ ] GDPR Compliant.`
  * Required Proof: YouTube video tutorial or demo URL.
  * Founder contact email (for verification confirmation).
  * Submit button: `[Submit Tool for Free Review]`.

### Section 5: Submission Guidelines & Policy Banner
* **Components:**
  * Review timeframe notice (typically 3–5 business days).
  * Quality standards explanation (screen proof required, no scam wrappers, functional prompts required).
  * 100% free policy notice (all submissions treated equally without paid fast-tracks).

---

## Page 12: Authentication / Login & Sign Up (`/login`)

### Section 1: Page Shell & Split Layout
* **Layout:** Centered modal/card on mobile; 2-column split container on desktop (`1/2` Brand Value context, `1/2` Interactive Auth Form).
* **Left Column (Visual / Context Banner - Desktop only):**
  * Brand Logo + Wordmark.
  * Headline: Context on why creating an account is valuable (*"Save verified workflows, track your team's AI spend, and store custom prompts"*).
  * Mini Feature Checklist:
    * `[✔] 1-Click bookmarking for workflows & skills`
    * `[✔] Personal Prompt Vault with instant copy`
    * `[✔] Automated Stack Cost Calculator`
    * `[✔] 100% Free forever with zero spam`
  * Social Proof Pill: Dynamic counter showing active community automations.

### Section 2: Interactive Authentication Card (Right Column / Mobile Center)
* **Components & Form Controls:**
  * Card Header:
    * Title: `Sign in to SnapStack` / `Create your free account`.
    * Subtitle: *"Log in to save recipes and manage your personal stack"*.
  * **Social 1-Click OAuth Buttons:**
    * Primary Social Button: `[ Continue with Google ]` (Google icon + high-contrast button).
    * Secondary Social Button: `[ Continue with GitHub ]` (GitHub Octocat icon + outline button).
  * **Visual Divider:** Horizontal separator line with text `OR CONTINUE WITH EMAIL`.
  * **Passwordless Email / Magic Link Form:**
    * Email Input Field (with mail icon, auto-focus, and validation for valid format).
    * Primary Submit Button: `[ Send Magic Link / Sign In ]` (triggers loading spinner state on click).
  * **Interactive States:**
    * **State A (Form View):** Initial state ready for user input.
    * **State B (Link Sent State):** Card content swaps to confirmation message:
      * Checkmark animation.
      * *"Check your inbox! We sent a secure sign-in link to [user@email.com]"*.
      * `[Resend Link]` action + `[Use different email]` action.
  * **Redirect & Return Logic:**
    * Preserves URL query parameter `?redirect=/workflows/[slug]` or `?redirect=/skills/[slug]` so when a user clicks "Bookmark", they are routed to `/login` and immediately returned with the item saved.
  * **Card Footer:**
    * Terms of service & privacy policy links.
    * Return to home link: `← Back to SnapStack`.

