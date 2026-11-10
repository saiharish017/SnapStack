# Page Specification: Homepage (`/`) — SnapStack

* **Brand Name:** **SnapStack** (Working Title)
* **Route:** `/`
* **Target Audience:** All visitors (first-time discoverers, returning builders, search arrivals).
* **Primary Objective:** Immediately communicate the value proposition (*"Don't just discover tools—get working AI workflows with step-by-step video recipes"*), hook users into searching by outcome, and showcase trending video tutorials.

---

## 2. Page Structure & Wireframe Layout

### Section 1: Hero & Outcome Search
* **Headline:** *"Find the exact AI workflow for your job—not just another tool list."*
* **Sub-headline:** *"Step-by-step automation recipes, copyable prompts, and 60-second video walkthroughs for modern professionals."*
* **Interactive AI Workflow Matchmaker (Search Box):**
  * Natural language search input: *"What job do you want done? (e.g., Turn Zoom recordings into CRM updates)"*
  * Instant search suggestions showing both matched **Skills** and **Tools**.
* **Quick Role Filter Chips:**
  * Pill buttons: `[All]`, `[Solo Founders]`, `[Marketing & Content]`, `[Sales & CRM]`, `[Developers]`, `[Operations & HR]`.
  * Clicking a chip instantly filters the trending workflows below.

### Section 2: "Workflow of the Week" (Hero Spotlight)
A featured, high-impact automation with full proof of execution.
* **Left Column (Context & Data):**
  * Title: e.g., *"Auto-extract invoice data into Google Sheets & Slack notification"*
  * Roles: `[Finance]`, `[Operations]`
  * Required Stack: `[Claude 3.7]` + `[Make.com]` + `[Google Sheets]`
  * Time Saved: `~5 hrs/week` | Difficulty: `No-Code` | Setup: `8 mins`
  * CTA: **[View Full Workflow & Copy Prompts]**
* **Right Column (Video Walkthrough Facade):**
  * High-res YouTube thumbnail with prominent Play button.
  * Duration badge: `4:12`
  * "Click to Play" loads the embedded YouTube player at `start_seconds`.

### Section 3: Trending Skills / Workflows Grid
* **Header:** *"Popular AI Workflows Right Now"*
* **View Toggle:** `[Trending]`, `[Easiest to Setup]`, `[Highest Time Saved]`, `[Recently Added]`.
* **Workflow Cards (Grid of 6–8 cards):**
  * Outcome Title.
  * Stack Icons: Logos of the tools used in the chain.
  * Video Indicator: `[▶ 60s Demo]` or `[▶ Full Tutorial]`.
  * Time saved metric + setup difficulty badge.
  * One-click Bookmark / Save button (top right of card).

### Section 4: Verified AI Tools Spotlight
* **Header:** *"Featured & Verified AI Tools"*
* **Tool Cards (Grid of 4–6 tools):**
  * Logo + Tool Name + Category (e.g., *LLM, Transcription, Video Gen*).
  * 1-line honest summary (e.g., *"Industry standard for deep reasoning and code"*).
  * Pricing Tag: `Freemium` | `From $20/mo` | `Open Source`.
  * Compliance Pills: `[SOC 2]` `[GDPR]`.
  * Mini Video Preview: Hover or click shows a 30s micro-demo.
  * Links: `[View Details]` and `[Visit Website ↗]`.

### Section 5: The "Why We're Different" Trust Banner
* 4 pillars explaining why this platform is not a bloated directory:
  1. **100% Free & Open Access:** All workflows, prompt vaults, and blueprint downloads are completely free with zero paywalls.
  2. **Zero Fluff / Tested Proof:** Every workflow is tested and verified working.
  3. **Copyable Blueprints:** Download Make/n8n JSONs and copy prompts with 1 click.
  4. **"Can I do this for Free?" Transparency:** We show when you don't need to pay for paid tools.

### Section 6: Footer
* Directory links, categories by role, creator submission CTA, newsletter signup (*"Weekly AI Workflow in your inbox"*), legal, and disclaimer (*"Affiliate links help support our testing"*).

---

## 3. Data Requirements (Supabase Queries)
* `featured_workflow`: Fetch workflow marked `is_featured = true` joined with required tools and primary video.
* `trending_skills`: Fetch 8 skills sorted by `view_count` / `upvotes`.
* `featured_tools`: Fetch 6 tools with `verified_status = 'verified'` and `is_featured = true`.
* `roles_list`: Array of available role categories.

---

## 4. SEO & Conversion Elements
* **Title Tag:** *SnapStack — Tested AI Workflows & Tool Stacks in a Snap*
* **Meta Description:** *Discover verified AI tools and step-by-step workflow tutorials. Learn how to automate sales, marketing, and operations with copyable prompts and video guides.*
* **OpenGraph Image:** Dynamic OG image featuring trending workflows of the week.

