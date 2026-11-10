# Page Specification: Video Library & Tutorials Feed (`/videos`)

## 1. Overview & Goal
* **Route:** `/videos` (or `/tutorials`)
* **Target Audience:** Visual learners who prefer watching short-form demos and tutorials before reading documentation.
* **Primary Objective:** Deliver a high-retention video discovery experience (Shorts + long tutorials) that connects every single video directly to an actionable tool and copyable prompt (the **"Learn & Act" loop**).

---

## 2. Page Structure & Wireframe Layout

### Header & Format Toggle
* **Headline:** *"AI in Action: Video Tutorials & Micro-Demos"*
* **Sub-headline:** *"Watch how top builders automate workflows and use AI tools in real-time."*
* **Display Mode Switcher:**
  * `[Grid View]` (Default desktop view: cards showing thumbnails, tools, and duration).
  * `[Shorts Stream]` (Mobile-optimized vertical scroll feed for fast browsing).
* **Filter Bar:**
  * Filter by Tool: `[Claude]`, `[Make]`, `[Cursor]`, `[Midjourney]`, etc.
  * Filter by Role: `[Founders]`, `[Developers]`, `[Marketers]`.
  * Filter by Length: `[Shorts (< 60s)]` or `[Deep Dives (> 3 mins)]`.

### View 1: Grid Mode (Desktop & Tablet)
* **Video Card Structure:**
  * **Video Facade:** YouTube HQ thumbnail with Duration tag and Play icon overlay.
  * **Header:** Title + Creator Channel name & avatar.
  * **Linked Tools & Skills:** Pills showing `Tool: Claude` and `Skill: Support Bot`.
  * **Quick Action Button:** **[Open Tutorial & Copy Prompts]**.
* **Click Behavior:** Clicking a card opens the **Video Action Modal** (or dedicated video page).

### View 2: "Learn & Act" Drawer (The Interactive Player View)
When a video is opened or played:
* **Left / Top (The Video Player):**
  * Privacy-enhanced YouTube Iframe Player loaded at `start_seconds`.
  * Auto-adjusts to `9:16` (vertical) or `16:9` (horizontal) based on video format.
* **Right / Bottom (The Action Drawer):**
  * **Tools Used in this Video:** Clickable badges leading to tool pages with affiliate links.
  * **Workflow Blueprint:** Link to the full step-by-step recipe (`/skills/[slug]`).
  * **Copyable Prompt / Code Vault:** The exact prompt shown in the video with a 1-click **[Copy Prompt]** button.
  * **Community Feedback:** *"Was this demo helpful & accurate?"* (Upvote / Report).

---

## 3. Data Requirements (Supabase Queries)
```sql
SELECT 
  v.id, v.youtube_video_id, v.title, v.channel_title, v.duration_seconds,
  v.video_type, v.start_seconds, v.prompts_and_notes,
  json_agg(DISTINCT json_build_object('name', t.name, 'slug', t.slug)) AS tools,
  json_agg(DISTINCT json_build_object('title', s.title, 'slug', s.slug)) AS skills
FROM videos v
LEFT JOIN video_tools vt ON v.id = vt.video_id
LEFT JOIN tools t ON vt.tool_id = t.id
LEFT JOIN video_skills vs ON v.id = vs.video_id
LEFT JOIN skills s ON vs.skill_id = s.id
WHERE v.verified_status = 'verified'
GROUP BY v.id;
```

---

## 4. Performance & YouTube Quota Guidelines
* **Zero Real-Time API Calls:** The video feed renders purely from Supabase database records. No YouTube Data API calls occur during visitor page loads.
* **Lite Facade Optimization:** Only load YouTube iframe player scripts upon user click/tap, keeping the page loading in under 1 second.

