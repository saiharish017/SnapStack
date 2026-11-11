# Page Specification: AI Tools Directory (`/tools`)

## 1. Overview & Goal
* **Route:** `/tools`
* **Target Audience:** Users seeking specific software solutions, comparing tools in a category, or looking for vetted alternatives.
* **Primary Objective:** Provide a clean, unbloated catalog of carefully vetted AI tools filtered by decision criteria (compliance, pricing, API access, integrations) rather than raw affiliate volume.

---

## 2. Page Structure & Wireframe Layout

### Header & Filter Control
* **Headline:** *"Vetted AI Tools Directory"*
* **Sub-headline:** *"Only tested tools with real video tutorials, transparent pricing, and privacy data. No dead wrappers."*
* **Search Bar:** Real-time search by tool name, keyword, or company (e.g., *"Claude"*, *"Transcription"*, *"Video generation"*).
* **Category Quick Chips:**
  * `[All]`, `[Reasoning & LLMs]`, `[Voice & Audio]`, `[Video Generation]`, `[Coding Assistants]`, `[Automation & Agents]`, `[Image & Design]`, `[Research & Data]`.

### Filter Sidebar (Desktop Sidebar / Mobile Drawer)
* **Pricing Model:** Free, Freemium, Paid (Monthly/Annual), Pay-per-use / API tokens, Open-Source / Self-hosted.
* **Security & Data Compliance:**
  * `[✔] Does NOT train on customer data`
  * `[✔] SOC 2 Type II Certified`
  * `[✔] GDPR Compliant`
  * `[✔] HIPAA / Healthcare Compliant`
* **Developer & API Access:** Has Public REST API, Has Webhooks, Has SDK (Python/JS).
* **Integrations:** Slack, Notion, Google Workspace, Zapier, Make, HubSpot, GitHub.
* **Has Verified Video Tutorials:** `[✔] Only show tools with video guides`.

### Results Header & Sorting
* **Count:** *"Displaying 184 vetted tools"*
* **Sort Options:**
  * Most Workflows Built
  * Editorially Verified
  * Starting Price: Low to High
  * Name: A to Z

### Tool Cards Grid (3 Columns on Desktop, 1 on Mobile)
Each tool card features:
* **Top Header:**
  * Tool Logo + Verified Checkmark Badge.
  * Tool Name.
  * Bookmark Icon (saves tool to user dashboard).
* **Category & Pricing Tag:**
  * Category badge (e.g. `LLM & Reasoning`).
  * Price pill: `Freemium (Paid from $20/mo)` or `100% Free`.
* **Honest 1-Line Description:**
  * Highlight the real superpower (e.g., *"Top-tier reasoning model for coding, long-context document analysis, and agentic workflows"*).
* **Video & Workflow Counters:**
  * `[▶ 4 Video Tutorials Available]`
  * `[⚡ Used in 8 Workflows]`
* **Compliance Tags:**
  * Small chips: `[No AI Training]` `[SOC 2]`.
* **Action Buttons:**
  * **[View Tool & Tutorials]** (leads to `/tools/[slug]`).
  * **[Visit Website ↗]** (external outbound link with transparent affiliate attribution).

---

## 3. Data Requirements (Supabase Queries)
```sql
SELECT 
  t.id, t.name, t.slug, t.website_url, t.pricing_model, t.starting_price,
  t.soc2_compliant, t.trains_on_user_data, t.category,
  COUNT(DISTINCT ts.skill_id) AS total_workflows,
  COUNT(DISTINCT vt.video_id) AS total_videos
FROM tools t
LEFT JOIN tool_skills ts ON t.id = ts.tool_id
LEFT JOIN video_tools vt ON t.id = vt.tool_id
WHERE t.verified_status = 'verified'
GROUP BY t.id;
```

---

## 4. SEO & Conversion Elements
* **Canonical URL:** `/tools`
* **Dynamic Title Tags:** *Best Vetted AI Tools Directory ([Current Year]) | Pricing, Video Guides & Security*
* **Meta Description:** *Compare the top AI tools filtered by real pricing, privacy terms (SOC 2, no training on data), and step-by-step video tutorials. No spam or broken wrappers.*
* **Schema Markup:** `CollectionPage` schema with `SoftwareApplication` entities.

