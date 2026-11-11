# Workflow Sourcing & Curation Playbook

## 1. Core Principle: Curate, Don't Invent

You do not need to invent AI workflows from scratch. Thousands of developers, automation experts, and creators publish fully functional workflows, prompts, and blueprints every single day. 

Your role is to act as the **editorial filter and structured index**:
1. Find high-performing workflows with video proof.
2. Extract the structured metadata (Job to be Done, Tool Stack, Prompts, Blueprints).
3. Connect the YouTube video tutorial with direct timestamp jumping.
4. Verify that it actually works and list it for free.

---

## 2. Top Sourcing Channels

### A. Official Automation Template Repositories (Instant Blueprints)
These directories already provide pre-tested logic, step-by-step documentation, and downloadable JSON files:

1. **n8n Community Templates ([n8n.io/workflows](https://n8n.io/workflows))**
   * *Best For:* Advanced AI agents, LangChain nodes, self-hosted privacy setups, and multi-tool pipelines.
   * *Search Keywords:* Filter by tag `AI`, `LLM`, `OpenAI`, `Anthropic`.
   * *Asset Download:* Every template has a **"Copy Workflow / Download JSON"** button ready to export.
2. **Make.com Template Library ([make.com/en/templates](https://www.make.com/en/templates))**
   * *Best For:* Small business operations, no-code integrations, CRM workflows, and marketing automations.
   * *Search Keywords:* Search *"OpenAI"*, *"Claude"*, *"AI Assistant"*, *"Summarizer"*.
   * *Asset Download:* Full visual scenario blueprints.
3. **Zapier Central / AI Templates ([zapier.com/templates](https://zapier.com/templates))**
   * *Best For:* Mainstream SaaS tool connections (Google Workspace, Slack, HubSpot, Notion).

---

### B. YouTube Search Operators & Discovery Formula
YouTube is the primary source for your video walkthroughs and screen demonstrations.

#### High-Yield Search Queries (Copy & Paste into YouTube Search):
* `"make.com" "AI automation" "step by step"`
* `"n8n" "AI agent" tutorial`
* `"how I automated my" AI workflow`
* `"Claude 3" OR "Claude 3.7" automated workflow`
* `"ChatGPT" automation for [Sales / Real Estate / Marketing / Accounting]`
* `"free AI workflow blueprint"`
* `"AI voice agent" setup tutorial`

#### YouTube Filter Settings:
* **Upload Date:** *This Month* or *This Year* (ensures models and UIs are current).
* **Duration:**
  * **Under 4 minutes:** Perfect for fast overview Shorts.
  * **4 to 20 minutes:** The sweet spot for complete, hands-on tutorials showing the actual screen setup.

#### Description Goldmine:
Always open the video's description and pinned comment. High-quality creators almost always share:
* The exact system prompt in a Google Doc or GitHub gist.
* Downloadable Make/n8n `.json` blueprints.
* Link to free resources.

---

### C. Top YouTube Channels for AI Automation
Subscribe to and monitor these channels for regular high-quality workflow drops:

* **Liam Ottley:** High-level AI automation agency systems and business agent workflows.
* **David Ondrej:** Deep technical dives on n8n, local models, and agent architectures.
* **Nate Herk:** Highly structured, beginner-friendly Make.com and AI business workflows.
* **Cole Medin:** LangChain, AI developer frameworks, and complex agent pipelines.
* **Corbin Brown (Web Cafe AI):** Real-world small business and operational automations.
* **Matt Wolfe:** Broad coverage of newly released practical AI tools and use cases.

---

### D. Community Listening (Reddit & GitHub)
* **Subreddits to Monitor:**
  * `r/Automations` & `r/Integromat` (Make.com)
  * `r/n8n`
  * `r/ChatGPT` (filter by flair *"Use Cases"* or *"Prompts"*)
  * `r/SaaS` & `r/SideProject`
* **GitHub Repositories:**
  * Search GitHub for: `awesome-n8n-templates`, `ai-agent-workflows`, `make-automation-blueprints`.

---

## 3. The 5-Minute Ingestion Checklist

When you identify a good video or template, follow this exact checklist to publish it:

```
[ ] 1. Identify the Job to be Done (Clear, actionable title: "Auto-extract invoice data...")
[ ] 2. Map the Exact Tool Stack (e.g., Gmail + Claude 3.7 + Google Sheets + Make.com)
[ ] 3. Determine the Difficulty (No-Code, Low-Code, or Developer / API)
[ ] 4. Estimate Time Saved (e.g., "~4 hours per week")
[ ] 5. Grab the Video Details:
       - YouTube Video ID (11 characters)
       - Determine Format: "short" or "full_tutorial"
       - Set start_seconds (skip sponsor/intro directly to the action)
       - Creator channel name for attribution
[ ] 6. Extract Actionable Assets:
       - Copy the exact system prompt used
       - Download the Make/n8n .json blueprint (if provided)
[ ] 7. Identify the "Free Alternative":
       - Can this be tested in standard ChatGPT/Claude with a single prompt?
[ ] 8. Publish to Supabase Database with status = 'verified'
```

---

## 4. Quality Control & Rejection Criteria

To maintain trust and avoid the "directory spam" trap, apply these strict editorial rules:

### What to ACCEPT:
* Video clearly shows the actual software interface, clicks, and configuration.
* Clear inputs and outputs (e.g., *"Takes PDF invoice $\rightarrow$ Outputs row in Sheets"*).
* Prompts or blueprints are provided and usable.
* The workflow uses active, accessible models and tools.

### What to REJECT:
* ❌ Vague "Top 10 AI Tools That Will Make You Rich" hype videos.
* ❌ Videos that do not show how to set up the tool.
* ❌ Workflows relying on deprecated APIs or broken tools.
* ❌ Content hiding the template behind a paid paywall without a free alternative.

---

## 5. Starter Catalog: 15 High-Impact Launch Workflows

Here is a ready-to-curate list of 15 high-demand workflows across major business roles:

| # | Role | Workflow Title | Tool Stack | Source Type |
| :--- | :--- | :--- | :--- | :--- |
| **1** | **Sales** | Convert Zoom/Meet client calls into structured CRM deals & next steps | Whisper + Claude + HubSpot | YouTube Tutorial |
| **2** | **Marketing** | Repurpose 1 YouTube video into 5 LinkedIn posts, a Twitter thread & newsletter | Descript + Claude + Notion | YouTube Tutorial |
| **3** | **Finance / Ops** | Auto-extract invoice tables from email attachments into Google Sheets | Claude Vision + Make + Sheets | Make Template |
| **4** | **Support** | AI customer inquiry triage & drafted response bot in Slack | Claude 3.7 + Slack + Gmail | n8n Template |
| **5** | **Recruiting** | Auto-screen inbound PDF resumes against job requirements rubric | OpenAI API + Airtable | Make Template |
| **6** | **E-commerce** | Auto-generate SEO product descriptions from supplier image uploads | GPT-4o Vision + Shopify | YouTube Tutorial |
| **7** | **Founders** | Competitor website monitor: Alerts Slack when competitor changes pricing | Browse AI + Claude + Slack | Make Template |
| **8** | **Content** | Turn unorganized voice memos into publish-ready blog articles | AudioPen / Whisper + Claude | YouTube Short |
| **9** | **Real Estate** | Instant WhatsApp auto-responder for property listing inquiries | WhatsApp Cloud API + Make + AI | YouTube Tutorial |
| **10** | **Devs / Tech** | GitHub PR summarizer that writes automatic release changelogs to Notion | GitHub Actions + Claude + Notion | n8n Template |
| **11** | **Executive** | Daily morning briefing: Summarizes unread priority emails & calendar events | Gmail + Google Calendar + Claude | Make Template |
| **12** | **Legal / Ops** | Contract clause risk scanner: Flags non-standard indemnity/liability clauses | Claude 3.7 + Google Docs | YouTube Tutorial |
| **13** | **Marketing** | Social media competitor sentiment analyzer from Reddit & Twitter mentions | Apify + Claude + Google Sheets | n8n Template |
| **14** | **HR** | New employee onboarding bot: Answers FAQs from company Notion handbook | Notion API + Slack + Claude | n8n Template |
| **15** | **Freelancers** | Automatic client project proposal generator from intake form submission | Typeform + Claude + PandaDoc | Make Template |

