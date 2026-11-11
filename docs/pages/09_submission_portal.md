# Page Specification: Submission & Creator Portal (`/submit`)

## 1. Overview & Goal
* **Route:** `/submit`
* **Target Audience:** YouTube educators/creators seeking traffic & backlink attribution, and AI software founders looking to list and verify their tools.
* **Primary Objective:** Provide a structured submission pipeline that collects rich metadata (prompts, blueprints, compliance data) while creating an upfront revenue stream through expedited review tiers.

---

## 2. Page Structure & Wireframe Layout

### Header & Value Proposition
* **Headline:** *"Submit a Video Tutorial or AI Tool"*
* **Sub-headline:** *"Help builders discover practical workflows. Creators get permanent attribution and traffic; tool founders get high-intent buyers."*

### Submission Type Selector (Radio Toggle)
* `[🔘 Option A: I am a Creator submitting a YouTube Tutorial / Workflow]`
* `[🔘 Option B: I am a Founder / Developer submitting an AI Tool]`

---

### Form A: Creator Video & Workflow Submission
Designed to make it easy for YouTube creators to submit their tutorials:
1. **YouTube Video URL:** (e.g., `https://youtube.com/watch?v=...` or `https://youtube.com/shorts/...`).
   * *Real-time preview:* Auto-fetches and displays video title and channel name using lightweight oEmbed/metadata.
2. **Video Format:** `[Short (<60s)]` or `[Full Tutorial (>3 mins)]`.
3. **Start Timestamp (Optional):** Time where the actual tutorial begins (e.g. `01:45` to skip intro/sponsor).
4. **Tools Demonstrated:** Multi-select or input tool names used in the video (e.g. `Claude`, `Make.com`).
5. **Job to be Done / Title:** What does this video teach? (e.g. *"Automate cold outreach personalization"*).
6. **Copyable Prompt / Recipe Code:** Paste the prompt or template demonstrated in the video.
7. **Creator Attribution:** Channel Name, Twitter/X handle, and website link.

---

### Form B: Tool Founder Submission
Designed to enforce honest, structured evaluation data:
1. **Tool Name & Website URL:** (Direct product domain).
2. **Category:** LLM, Audio, Video, Coding, Automation, etc.
3. **Primary Superpower (1 Sentence):** *"What makes this tool unique compared to raw ChatGPT?"*
4. **Pricing Details:**
   * Pricing Model: `Free`, `Freemium`, `Paid Only`, `Open Source`.
   * Free Tier Restrictions: Token limits, watermarks, etc.
   * Starting Paid Price (USD).
5. **Data Privacy & Security Checklist (Strict):**
   * `[ ] We do NOT train AI models on user inputs.`
   * `[ ] SOC 2 Type II Certified`
   * `[ ] GDPR Compliant`
6. **Required Proof / Tutorial Video:** Link to an existing public YouTube video showing the tool in real action.

---

### 100% Free Community Submission Policy
All submissions on the platform are **completely free ($0)**:
* **No Paywalls or Hidden Fees:** We do not charge creators or tool developers for inclusion or verification.
* **Merit & Quality Based Review:** Every submission is evaluated purely on content quality, usefulness, and video proof.
* **Free Community Queue:** Submissions are reviewed editorially in order of arrival and published once verified.

---

## 3. Data Requirements & Moderation Architecture
* Submissions are stored in an unverified state in the database:
  * Table: `submissions_queue`
  * Status: `'pending_review'`, `'approved'`, `'rejected'`.
* **Automated Screening:**
  * Validates that the YouTube video URL is public and embeddable.
  * Checks that the tool domain is active and not on malware/phishing blocklists.
* **Admin Review Dashboard (`/admin/moderation`):**
  * Admin clicks "Approve" $\rightarrow$ record automatically migrates into `tools`, `skills`, or `videos` production tables.

