# Page Specification: User Dashboard & Saved Vault (`/saved`)

## 1. Overview & Goal
* **Route:** `/saved` (or `/dashboard`)
* **Target Audience:** Returning users who want to organize their AI tool stack and track workflow implementation.
* **Primary Objective:** Drive user retention and account creation via Supabase Auth by providing a personal workspace for saved workflows, bookmarked tools, custom prompt vaults, and stack cost tracking.

---

## 2. Page Structure & Wireframe Layout

### Header & User Profile Bar
* User Avatar, Name, Email, and Role tag (e.g., *"Founder / Operations"*).
* Quick Stats Row:
  * `[12 Workflows Saved]` | `[6 Tools in Stack]` | `[~14 hrs/wk Estimated Time Saved]`.
* Search within saved library.

### Tab Navigation
1. `[My Saved Workflows]`
2. `[Bookmarked Tools]`
3. `[My Prompt Vault]`
4. `[My Stack Cost Calculator]`

---

### Tab 1: My Saved Workflows (Execution Tracker)
Users don't just bookmark workflows—they track implementation:
* **Kanban / Status Columns or Filter Badges:**
  * `[To Try]` ➔ `[In Progress / Testing]` ➔ `[Active in My Business ✔]`.
* **Workflow Cards:**
  * Displays outcome, tool stack, and quick links to blueprints/prompts.
  * Direct action: **[View Recipe]**, **[Copy Prompt]**, or **[Mark as Implemented]**.
  * Personal notes field: User can write custom notes (e.g., *"Using this with our custom Zendesk webhook"*).

### Tab 2: Bookmarked Tools
* Grid of tools the user has saved.
* Shows current subscription tier (User can tag: *"Free tier"*, *"Pro $20/mo"*, *"Considering"*).
* Quick links to official websites and new video guides.

### Tab 3: My Prompt Vault
* Centralized collection of all system prompts and templates saved from Skill pages.
* Categorized by task (e.g. Sales, Coding, Content).
* One-click **[Copy Prompt]** button with instant copy-to-clipboard functionality.
* Option to add personal prompt variations.

### Tab 4: My Stack Cost Calculator
* Automatically calculates the combined monthly cost of all tools currently saved in the user's active stack.
* E.g.:
  * *Claude Pro:* \$20/mo
  * *Make.com Core:* \$9/mo
  * *HubSpot Starter:* \$15/mo
  * **Total AI Tech Stack: \$44 / month**
* Suggests optimizations (e.g., *"You could replace Tool X with the free ChatGPT prompt from Workflow #12 and save $15/mo"*).

---

## 3. Data Requirements (Supabase Auth & Database)
* Requires authenticated session via `supabase.auth.getUser()`.
* **Database Tables Used:**
  * `user_saved_skills` (user_id, skill_id, status, notes, created_at).
  * `user_saved_tools` (user_id, tool_id, subscription_status, created_at).
  * `user_prompts` (user_id, title, content, category, created_at).

---

## 4. Retention & Re-engagement Mechanics
* **Workflow of the Week Notifications:** Opt-in checkbox to receive 1 verified workflow every Tuesday matching their selected role.
* **Broken Workflow Alerts:** Notifies the user if one of their active saved workflows has been flagged by the community as needing updates due to a model release.

