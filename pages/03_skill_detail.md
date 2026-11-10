# Page Specification: Skill / Workflow Detail Page (`/skills/[slug]`)

## 1. Overview & Goal
* **Route:** `/skills/[slug]` (e.g., `/skills/automate-lead-qualification-slack`)
* **Target Audience:** High-intent users looking to execute a specific workflow immediately.
* **Primary Objective:** Act as an **actionable, executable adoption blueprint**. Give the user everything they need: the video walkthrough, the tool stack, copyable prompt templates, downloadable Make/n8n blueprints, and realistic failure points.

---

## 2. Page Structure & Wireframe Layout

### Header & Breadcrumbs
* Breadcrumbs: `Home > Skills > [Role] > Workflow Title`
* **Workflow Title:** e.g., *"Convert Inbound Email Leads into Scored CRM Records & Slack Alerts"*
* **Meta Bar:**
  * Role Badge (`Sales & Operations`)
  * Setup Time (`15 minutes`)
  * Difficulty (`No-Code / Make.com`)
  * Time Saved (`~6 hrs/week`)
  * Verification Stamp: `✔ Verified Working on Claude 3.7 (Nov 2026)`
  * Bookmark / Share Buttons

### Section 1: The Interactive Visual Flowchart
* An interactive visual node diagram rendered at the top of the recipe:
  ```
  [Input: Inbound Email] 
         ↓
  [AI Step: Claude 3.7 parses budget, role & intent]
         ↓
  [Condition: Lead Score > 7?]
      ├─ Yes ➔ [Action: Create HubSpot Deal + Ping #sales Slack]
      └─ No  ➔ [Action: Add to Nurture Sequence]
  ```
* Clicking any tool node jumps the user to that tool's section or profile page.

### Section 2: Master Video Walkthrough (YouTube Embed Facade)
* **Format Switcher (Tabs above video):**
  * `[▶ 60s Fast Summary]` (YouTube Short format - `9:16` vertical)
  * `[▶ Full Step-by-Step Tutorial]` (YouTube Full Tutorial - `16:9` widescreen, starts at `start_seconds`)
* **Video Player:** Click-to-load YouTube facade (0ms performance impact until played).
* **Creator Credit Bar:** Channel name, channel link, subscribe button, and original publish date.

### Section 3: The Tool Stack & Cost Breakdown
* **Side-by-Side Stack Cards:**
  1. **Tool 1 (e.g. Claude 3.7 API):** Purpose, Free tier vs Paid, Link to Tool Page, Affiliate link.
  2. **Tool 2 (e.g. Make.com):** Role in workflow, Free operations limit.
  3. **Tool 3 (e.g. HubSpot CRM):** Native integration notes.
* **Total Stack Cost Calculator:**
  * Free Tier Viability: *"Can you run this for $0? Yes, up to 100 leads/month."*
  * Scaling Cost: `~$19/month` for standard volume.

### Section 4: "Can I Do This for Free in ChatGPT?" (The Trust Box)
* An expandable honesty callout:
  * *"Want to test this without setting up Make.com or paying for software?"*
  * A copyable single-turn prompt that simulates this exact task directly inside standard ChatGPT or Claude.

### Section 5: The Action Vault (Prompts & 1-Click Blueprints)
* **Tab 1: System Prompts & Instructions:**
  * Formatted code block with the exact prompt used by the AI step.
  * One-click `[Copy Prompt]` button with toast notification.
* **Tab 2: Automation Blueprints (1-Click Import):**
  * `[Download Make.com Blueprint (.json)]`
  * `[Download n8n Workflow (.json)]`
  * Setup instructions: *"How to import this blueprint in 3 clicks."*

### Section 6: Step-by-Step SOP (Standard Operating Procedure)
* **Step 1: Prerequisites & API Keys:** Exact credentials needed before starting.
* **Step 2: Webhook / Trigger Setup:** Connecting the input source.
* **Step 3: AI Formatting Node:** What parameters (temperature, model name) to use.
* **Step 4: Output Mapping:** Where the resulting data is stored.
* **Failure Modes & Watchouts:** Known risks (e.g., *"What happens if the email contains an image instead of text?"*).

### Section 7: Community Feedback & Verification
* **Status Widget:** *"Did this workflow work for you?"*
  * `[👍 It Works Great]` (Upvote counter)
  * `[⚠️ Something is Broken / Outdated]` (Opens modal to report broken step or changed UI).

### Section 8: Related Workflows
* 3 cards showing adjacent recipes (e.g., *"Auto-generate personalized follow-up emails from LinkedIn"*).

---

## 3. Data Requirements (Supabase Queries)
* Fetch `skills` record by slug.
* Join `videos` linked via `video_skills` (both short and full tutorial).
* Join `tools` linked via `tool_skills` (specs, pricing, logos).
* Fetch prompt templates and downloadable asset links.
* Fetch upvote count and verification logs.

---

## 4. SEO & Schema Markup
* **Schema Type:** `HowTo` Structured Data (specifying `step`, `tool`, `supply`, `totalTime`, and `video`).
* **Title Tag:** *How to [Outcome] with [Tool Stack] | Step-by-Step AI Workflow*
* **Meta Description:** *Follow this verified AI workflow tutorial to [Outcome]. Includes YouTube video guide, copyable prompts, and downloadable automation blueprints.*

