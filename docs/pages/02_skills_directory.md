# Page Specification: Skills & Workflows Directory (`/skills`)

## 1. Overview & Goal
* **Route:** `/skills` (or `/workflows`)
* **Target Audience:** Users looking for solutions to specific operational tasks (e.g., *"How do I automate social media drafting?"*, *"How do I screen resumes with AI?"*).
* **Primary Objective:** Provide a filterable, intent-driven catalog of step-by-step AI workflow recipes with video walkthroughs, tool stacks, and downloadable assets.

---

## 2. Page Structure & Wireframe Layout

### Header & Filter Bar
* **Title:** *"AI Skills & Workflows Library"*
* **Sub-title:** *"Step-by-step execution playbooks with verified tool stacks and video guides."*
* **Search Input:** Search workflows by keyword, tool name, or job (e.g., *"Notion meeting notes"*).
* **Sidebar / Filter Drawer (Desktop Sidebar, Mobile Modal):**
  * **Role:** Founders, Marketers, Sales, Engineering, Customer Support, Freelancers.
  * **Difficulty:** No-Code, Low-Code, Developer / API.
  * **Automation Platform:** Make.com, n8n, Zapier, Native AI Prompt, Custom Python.
  * **Estimated Time Saved:** `< 2 hours/wk`, `2–5 hours/wk`, `5+ hours/wk`.
  * **Stack Cost:** Free only ($0), Under $25/mo, Enterprise.
  * **Video Type Available:** Has Short (<60s), Has Full Walkthrough (>3m).
  * **Status:** Verified Working (Current Month).

### Sorting & Active Filters Bar
* **Active Filter Badges:** Dismissible pills for applied filters with a "Clear All" button.
* **Results Counter:** *"Showing 42 workflows"*
* **Sort Dropdown:**
  * Most Popular / Most Saved
  * Highest Time Saved
  * Easiest Setup
  * Newly Verified

### Workflow Cards Grid (Responsive 2 or 3 Column Grid)
Each card contains:
* **Thumbnail / Video Facade:**
  * Preview image from the linked YouTube video.
  * Play badge with video duration tag (e.g. `▶ 58s Short` or `▶ 7:30 Full Tutorial`).
* **Header:**
  * Role Tag (e.g. `[Marketing]`) + Difficulty Badge (`[No-Code]`).
  * Workflow Title (e.g. *"Repurpose 1 Long YouTube Video into 10 Viral LinkedIn Posts"*).
* **Tool Stack Chain:**
  * Visual chain of tool icons (e.g. `[YouTube] ➔ [Descript] ➔ [Claude] ➔ [Buffer]`).
* **Metrics Row:**
  * Time Saved estimate: `~4 hrs/week`
  * Stack Estimated Cost: `~$15/mo`
* **Footer Actions:**
  * **[View Workflow & Recipe]** primary button.
  * Bookmark icon button (save to `/saved` dashboard).
  * "Verified Working" checkmark with date.

### Pagination / Load More
* Infinite scroll or "Load More" pagination with URL state synchronization (`/skills?page=2&role=marketing`) to ensure link sharing and SEO crawlability.

---

## 3. Data Requirements (Supabase Queries)
```sql
SELECT 
  s.id, s.title, s.slug, s.job_to_be_done, s.difficulty, s.time_saved_estimate,
  v.youtube_video_id, v.duration_seconds, v.video_type,
  json_agg(json_build_object('id', t.id, 'name', t.name, 'slug', t.slug, 'logo_url', t.website_url)) AS tools
FROM skills s
LEFT JOIN video_skills vs ON s.id = vs.skill_id
LEFT JOIN videos v ON vs.video_id = v.id
LEFT JOIN tool_skills ts ON s.id = ts.skill_id
LEFT JOIN tools t ON ts.tool_id = t.id
GROUP BY s.id, v.youtube_video_id, v.duration_seconds, v.video_type;
```

---

## 4. SEO & Conversion Elements
* **Canonical URL:** `/skills`
* **URL Filter Syncing:** Dynamic query params (`/skills?role=sales&difficulty=no-code`) for shareable, filtered landing views.
* **Schema Markup:** `ItemList` schema pointing to individual `HowTo` structured data items.

