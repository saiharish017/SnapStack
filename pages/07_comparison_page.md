# Page Specification: Tool Comparison Page (`/compare/[toolA]-vs-[toolB]`)

## 1. Overview & Goal
* **Route:** `/compare/[toolA]-vs-[toolB]` (e.g., `/compare/claude-vs-chatgpt`, `/compare/make-vs-zapier`)
* **Target Audience:** High-intent buyers and professionals on the verge of subscribing to a tool, looking for an objective comparison.
* **Primary Objective:** Capture high-volume organic search traffic (*"Tool A vs Tool B"*), provide an objective feature/pricing breakdown, and show side-by-side video demonstrations.

---

## 2. Page Structure & Wireframe Layout

### Header & Scorecard Summary
* **Headline:** *"[Tool A] vs [Tool B]: In-Depth Comparison & Winner by Use Case"*
* **Quick Verdict Box:**
  * *"Pick [Tool A] if you need: Deep reasoning, long document analysis, coding."*
  * *"Pick [Tool B] if you need: Web search, voice mode, mobile app ecosystem."*
* **Side-by-Side Logo & Link Row:**
  * Column A: Logo, Rating, Pricing Tag, **[Visit Tool A ↗]** (Affiliate link).
  * Column B: Logo, Rating, Pricing Tag, **[Visit Tool B ↗]** (Affiliate link).

### Section 1: The Side-by-Side Video Showdown
* Two embedded video facades placed side-by-side:
  * **Video A:** 60s demo showing Tool A solving a task.
  * **Video B:** 60s demo showing Tool B solving the same task.
* Allows users to see the actual user interface and output quality before making a decision.

### Section 2: Comprehensive Comparison Matrix
A responsive side-by-side comparison table:

| Decision Metric | Tool A (e.g. Claude) | Tool B (e.g. ChatGPT) | Advantage |
| :--- | :--- | :--- | :--- |
| **Pricing / Pro Plan** | $20 / month | $20 / month | Tie |
| **Free Tier Access** | Moderate limits | Generous free tier | Tool B |
| **Context Window** | 200,000 tokens | 128,000 tokens | Tool A |
| **Coding & Logic** | Industry leading | Very strong | Tool A |
| **Internet Browsing** | Basic / Search API | Native real-time | Tool B |
| **Data Privacy** | No training on API/Pro | Optional opt-out | Tool A |
| **API & Developer SDK** | REST, Python, TS | REST, Python, Node | Tie |

### Section 3: Cost & Workflow Compatibility
* Comparing how each tool fits into a wider workflow:
  * Integrations comparison (e.g., Slack, Notion, Zapier).
  * Cost efficiency at scale (token pricing per 1M tokens).

### Section 4: Community Poll & Ratings
* Interactive user poll: *"Which tool do you prefer for your daily work?"*
  * Live percentage breakdown (e.g. 58% Claude / 42% ChatGPT).
  * User reviews highlighted with specific role tags (e.g. *"Review from a Senior Software Engineer"*).

### Section 5: Common Alternatives
* Links to other tools in this category (e.g., Gemini Advanced, DeepSeek, Mistral).

---

## 3. Data Requirements (Supabase Queries)
* Query both `tools` records where `slug IN (slugA, slugB)`.
* Fetch verified videos for both tools.
* Fetch community poll statistics and user rating aggregates.

---

## 4. SEO & Schema Markup
* **Title Tag:** *[Tool A] vs [Tool B] ([Current Year]): Which AI Tool is Best for You?*
* **Meta Description:** *Compare [Tool A] and [Tool B] side-by-side. Discover differences in pricing, performance, data privacy (SOC 2), and watch video comparisons.*
* **Schema Markup:** `Product` comparison schema with `Review` and `ItemList`.

