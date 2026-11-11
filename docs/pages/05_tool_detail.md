# Page Specification: AI Tool Profile Page (`/tools/[slug]`)

## 1. Overview & Goal
* **Route:** `/tools/[slug]` (e.g., `/tools/claude`, `/tools/make-com`)
* **Target Audience:** Prospective buyers, evaluators, and builders deciding whether to adopt or purchase a specific AI tool.
* **Primary Objective:** Provide practical, honest evaluation data, showcase curated YouTube video tutorials, and link directly to real workflows powered by this tool.

---

## 2. Page Structure & Wireframe Layout

### Header & Identity
* **Breadcrumbs:** `Home > Tools > [Category] > Tool Name`
* **Identity Row:**
  * High-res Logo + Verified Badge.
  * Tool Name + Developer/Parent Company (e.g., *"Claude by Anthropic"*).
  * 1-line Core Value Proposition.
* **Action CTAs:**
  * Primary Button: **[Visit Official Website ↗]** (Direct affiliate link with clear disclosure).
  * Secondary Buttons: `[Bookmark Tool]` and `[Share Profile]`.

### Section 1: Decision Matrix & Security Factsheet
A fast-scanning table designed for IT and budget decision-makers:
* **Pricing Tiers:** Free tier details, starting pro price, enterprise options.
* **Data Privacy & Retention:**
  * *Does it train models on your data?* `No (API & Pro settings enabled)`
  * *Data residency location:* `US / EU available`
  * *Certifications:* `SOC 2 Type II`, `GDPR`, `HIPAA (BBA)`
* **Technical Specs:**
  * API availability, rate limits, SDK languages (Python, TypeScript, REST).
  * Context window / token limits / file upload support.

### Section 2: Curated Video Tutorial Gallery (YouTube API)
* **Header:** *"Practical Video Guides: How to Use [Tool Name]"*
* **Video Tabs / Filter:**
  * `[All Videos]`, `[Quick Demos (<60s)]`, `[Complete Setup Guides]`, `[Advanced Tips]`.
* **Video Cards (2–4 curated videos):**
  * YouTube Thumbnail Facade (starts video only on click).
  * Duration & Format Tag (`Short (0:52)` or `Full Tutorial (11:20)`).
  * Creator name & link.
  * Curated Notes: Prompt or setup step demonstrated in the clip.
  * Direct timestamp launch (skips introductory video fluff).

### Section 3: "Workflows You Can Build With [Tool Name]"
* Direct grid of linked Skill / Workflow cards that utilize this tool in their stack.
* E.g., for Claude:
  * *Workflow 1: Auto-summarize PDF contracts into structured JSON.*
  * *Workflow 2: Turn voice notes into clean client proposal drafts.*
* Shows the user immediate use cases instead of leaving them with a blank prompt box.

### Section 4: Honest Review: Pros, Cons & Failure Points
* **What it excels at:** Real developer/user strengths (e.g., *"Exceptional reasoning, code generation, handles 200k tokens seamlessly"*).
* **Limitations & Failure Modes:** Real-world watchouts (e.g., *"Strict rate limits on peak hours; web search tool can be slow compared to Perplexity"*).
* **Community Rating & Feedback:**
  * Overall satisfaction score.
  * User feedback tags: `[Fast]`, `[Accurate]`, `[Expensive]`.

### Section 5: Alternatives & Comparisons
* 3 comparable tools in the same category (e.g. *ChatGPT, Gemini Advanced, DeepSeek*).
* Direct link to comparison page: `[Compare Claude vs ChatGPT ➔]`.

---

## 3. Data Requirements (Supabase Queries)
* Fetch `tools` record by slug.
* Join `videos` linked via `video_tools` junction table.
* Join `skills` linked via `tool_skills` junction table.
* Fetch alternative tools matching the same `category`.

---

## 4. SEO & Schema Markup
* **Schema Type:** `SoftwareApplication` with `aggregateRating`, `offers`, and `video` objects.
* **Title Tag:** *[Tool Name] Review, Pricing, Video Tutorials & Workflows ([Current Year])*
* **Meta Description:** *Detailed guide to [Tool Name]. Watch practical setup tutorials, compare pricing tiers, check data privacy terms (SOC 2, training policy), and explore ready-to-use workflows.*

