# SnapStack — Product Concept & Strategic Research

* **Working Title:** **SnapStack** (Tagline: *"Tested AI Workflows & Tool Stacks in a Snap"*)

## Core Vision & Value Proposition

A modern, workflow-centric AI adoption platform that bridges the gap between **discovering AI tools** and **actually using them**. 

Rather than competing as a high-volume, generic listing site, the platform differentiates through:
1. **Outcome-Driven "Skills / Workflows":** Users search by task (e.g., "Automate client onboarding", "Extract invoice tables to Sheets").
2. **Curated "How-To" Video Modules:** Every Tool and Skill page embeds short-form, high-signal video walkthroughs showing the tool/workflow in real action.
3. **Structured Decision Data:** Transparent pricing, data privacy/retention policies, required integrations, and setup difficulty.

---

## Core Entities: Skills vs. Tools

The platform organizes content around two interconnected hubs:

```
[ Skill / Workflow Page ]  <===========>  [ AI Tool Profile Page ]
- Job to be Done                          - Tool Overview & Category
- Tool Stack Required                     - Pricing & Compliance (GDPR, SOC2)
- Step-by-Step Execution Guide            - Associated Skills / Use Cases
- Copyable Prompts / Templates            - Curated "How-To" Video Tutorials
- End-to-End Walkthrough Video            - Alternatives & Integrations
```

### 1. The "Skill / Workflow" Page
Focuses on the **job to be done** (outcome-driven).
* **Metadata:** Target role (e.g., Marketer, Solo Founder), estimated time saved, difficulty rating (No-code / Low-code / Dev).
* **The Stack:** The exact chain of tools used (e.g., *Whisper + Claude + Zapier*).
* **Actionable Assets:** Copy-paste prompt templates, automation JSON/blueprints, and checklists.
* **Embedded Video:** A short, focused video demonstrating the full workflow end-to-end.

### 2. The "AI Tool" Profile Page
Focuses on the **software product** with practical adoption context.
* **Decision Specs:** Accurate pricing tiers, API access, integrations, data residency, and whether user data is trained on.
* **Curated Video Gallery:** 2–4 verified short-form videos showing practical use cases and tutorials (e.g., "How to connect with Notion in 60s", "Best prompt settings for this model").
* **Linked Skills:** Direct links to every documented workflow that utilizes this tool.
* **Pros, Cons & Failure Modes:** Real-world limitations (e.g., hallucination risks, rate limits).

---

## Zero-Hosting Video Strategy: YouTube API Architecture

To completely avoid video storage, transcoding pipelines, and expensive CDN bandwidth costs, **all videos are hosted on YouTube and embedded via YouTube's official player.**

### 1. YouTube Data API v3 Strategy & Quota Management
Google grants 10,000 free quota units per day per project.

* **Quota Rule (Admin Ingestion Only):**
  * `search.list` costs **100 units** per call: Never run this live on user page loads. Use it only in backend curation/admin scripts to discover candidate videos.
  * `videos.list` costs **1 unit** per call (supports batching up to 50 video IDs per call): Used to fetch fresh view counts, duration, and metadata.
* **Database Caching:** Store all video metadata locally in your database (`youtube_video_id`, title, duration, creator, thumbnail URL). Never call YouTube's API synchronously during client page requests.

### 2. Dual-Format Video Strategy: Shorts + Long-Form Tutorials

Supporting **both** Shorts and standard YouTube videos is essential for high adoption:
* **YouTube Shorts (< 60s):** Serves the *evaluation phase*. Users get a fast, punchy 45-second visual hook showing what the tool does, key highlights, or a quick prompt demo.
* **Standard YouTube Videos (3–15+ mins):** Serves the *implementation phase*. Complex multi-tool workflows (e.g., connecting Make.com + Supabase + Claude) cannot fit into a Short. Users need in-depth step-by-step walkthroughs to actually set up the workflow.
* **Timestamp Precision:** For long-form videos, the platform supports direct timestamp jumping (e.g. `start_seconds: 145`) so users can skip long channel intros and land directly on the relevant software demonstration.

```html
<!-- Universal Privacy-Friendly Embed with Timestamp Support -->
<iframe 
  src="https://www.youtube-nocookie.com/embed/{VIDEO_ID}?start={START_SECONDS}&rel=0" 
  title="Tutorial Player"
  loading="lazy"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
  allowfullscreen>
</iframe>
```

* **Dynamic Aspect Ratios:**
  * **Shorts / Vertical Demos:** Styled with `aspect-ratio: 9 / 16`
  * **Standard Full Tutorials:** Styled with `aspect-ratio: 16 / 9`

### 3. Performance & Page Speed (Lite Facade Pattern)
Loading multiple live YouTube iframes destroys web performance (adding ~500KB of JavaScript per iframe).
* **Facade Pattern:**
  1. Render a clean thumbnail card using YouTube's image CDN (`https://img.youtube.com/vi/{VIDEO_ID}/maxresdefault.jpg` or `hqdefault.jpg`) with a play icon overlay and creator attribution.
  2. The actual iframe is loaded **only when the user clicks Play**.
  3. This guarantees near-instant page loads and high Google Lighthouse / SEO scores.

### 4. Video Data Schema

```json
{
  "id": "vid_101",
  "youtube_video_id": "dQw4w9WgXcQ",
  "title": "Complete Step-by-Step AI Support Agent Tutorial",
  "channel_title": "AI Builders Hub",
  "channel_id": "UCxxxxxxx",
  "duration_seconds": 645,
  "video_type": "full_tutorial", // "short" or "full_tutorial"
  "start_seconds": 120, // jumps straight to setup, skipping intro
  "thumbnail_url": "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
  "associated_tool_ids": ["claude-3-5-sonnet", "make"],
  "associated_skill_ids": ["customer-support-agent"],
  "curated_prompts": [
    "You are a tier-1 support assistant. Answer queries using only..."
  ],
  "verified_status": "verified",
  "last_checked_at": "2026-11-01"
}
```

---

## Technical & Architecture Recommendations

* **Platform Delivery:** **Responsive Web App / PWA First.** 
  * A directory and workflow business relies heavily on organic search (SEO), deep linking, and social sharing. Native apps (React Native/Flutter) can follow after audience validation.
* **Suggested Tech Stack:**
  * **Frontend/Framework:** Next.js or Astro (SSR/SSG for maximum SEO performance and fast page load).
  * **Preferred Database:** **Supabase (Managed PostgreSQL)**
    * **Relational Power:** Cleanly handles many-to-many connections between Tools, Skills, and Curated Videos using foreign keys and junction tables.
    * **Full-Text & Vector Search:** Built-in PostgreSQL text search and `pgvector` for natural-language semantic tool/workflow discovery.
    * **Built-in Auth:** Ready-to-use user management for saving workflows, bookmarks, and upvotes without separate auth infrastructure.
    * **Cost-Efficiency:** Generous free tier (500 MB storage, 50,000 monthly active users) which costs \$0 to launch and easily hosts hundreds of thousands of video and tool metadata records.
  * **Video Embed Component:** `lite-youtube-embed` or custom click-to-load React/HTML facade component.

### Relational Schema Blueprint (PostgreSQL / Supabase)

```sql
-- 1. Tools Table
CREATE TABLE tools (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  website_url TEXT NOT NULL,
  pricing_model TEXT, -- 'free', 'freemium', 'paid'
  starting_price NUMERIC,
  data_privacy_policy TEXT,
  soc2_compliant BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Skills / Workflows Table
CREATE TABLE skills (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  job_to_be_done TEXT NOT NULL,
  difficulty TEXT, -- 'no-code', 'low-code', 'developer'
  time_saved_estimate TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Curated YouTube Videos Table
CREATE TABLE videos (
  id TEXT PRIMARY KEY,
  youtube_video_id TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  channel_title TEXT,
  duration_seconds INTEGER,
  video_type TEXT DEFAULT 'short' CHECK (video_type IN ('short', 'full_tutorial', 'deep_dive')),
  start_seconds INTEGER DEFAULT 0,
  prompts_and_notes TEXT,
  verified_status TEXT DEFAULT 'verified',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Junction Tables (Many-to-Many Relationships)
CREATE TABLE tool_skills (
  tool_id TEXT REFERENCES tools(id) ON DELETE CASCADE,
  skill_id TEXT REFERENCES skills(id) ON DELETE CASCADE,
  PRIMARY KEY (tool_id, skill_id)
);

CREATE TABLE video_tools (
  video_id TEXT REFERENCES videos(id) ON DELETE CASCADE,
  tool_id TEXT REFERENCES tools(id) ON DELETE CASCADE,
  PRIMARY KEY (video_id, tool_id)
);

CREATE TABLE video_skills (
  video_id TEXT REFERENCES videos(id) ON DELETE CASCADE,
  skill_id TEXT REFERENCES skills(id) ON DELETE CASCADE,
  PRIMARY KEY (video_id, skill_id)
);
```

---

## Pricing & Accessibility Policy: 100% Free

To maximize trust, user adoption, and community growth, the platform is **completely free ($0)** for everyone:
1. **100% Free for Users:** All workflow recipes, step-by-step SOPs, copyable prompts, video tutorials, and downloadable automation blueprints (Make/n8n) are accessible without any paywall or subscription.
2. **100% Free for Creators & Tool Developers:** No paid submission or fast-track fees ($0 submission fee). All listings and videos are evaluated strictly on merit, utility, and real-world proof.
3. **Transparent Passive Affiliate Links:** Completely optional direct links to tools to help support hosting and maintenance, with strict editorial independence and zero bias.

---

## Complete Page Architecture & Sitemap

### 1. Public Core Pages
* **Homepage (`/`):** Outcome search, role filters, featured "Workflow of the Week", trending tools & workflows.
* **Skills / Workflows Directory (`/skills`):** Filter by role, difficulty, tool stack, and time saved.
* **Skill / Workflow Detail (`/skills/[slug]`):** Problem breakdown, required tool stack, full video tutorial embed, step-by-step SOP, and copyable prompts/blueprints.
* **Tools Directory (`/tools`):** Filter by category, pricing tiers, compliance (SOC2/GDPR), and integrations.
* **Tool Detail (`/tools/[slug]`):** Specs, pricing, curated video gallery (both quick Short & in-depth tutorial), and associated skills.
* **Video Library (`/videos`):** Filterable feed of Shorts and long-form tutorials with "Learn & Act" prompt drawers.

### 2. High-Intent SEO & Growth Pages
* **Comparison Matrix (`/compare/[toolA]-vs-[toolB]`):** Side-by-side pricing, privacy, and feature showdown with side-by-side video demos.
* **Role Landing Pages (`/for/[role]`):** Specialized bundles for founders, marketers, recruiters, sales reps, etc.

### 3. User & Admin Pages
* **User Dashboard / Saved (`/saved`):** Bookmarked tools, saved workflow recipes, and custom prompt vault via Supabase Auth.
* **Creator / Tool Submission (`/submit`):** Submission portal for creators and tool founders with moderation queue.
