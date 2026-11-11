---
name: firecrawl-scraper
description: >-
  Web scraping and structured data ingestion skill for AI tools, pricing, and workflow specs
  using Firecrawl MCP. Extracts pricing tiers, free tier limits, specs, compliance, and logos
  into structured Supabase SQL insert statements.
---

# Firecrawl Web Ingestion & Tool Scraping Skill

Enables automated, accurate scraping and ingestion of AI tool data, pricing models, feature sets, and compliance statements via the Firecrawl MCP server.

---

## 1. Purpose & Workflow

Populating 150+ AI tools and keeping their pricing up-to-date manually is error-prone. This skill standardizes extracting structured data directly from official tool websites and documentation.

### The Scraping Workflow:
1. Provide the target URL (e.g., `https://claude.ai/pricing`, `https://cursor.com/pricing`).
2. Run Firecrawl scrape or crawl targeting pricing, feature tables, and documentation.
3. Parse and normalize findings into SnapStack's relational schema.
4. Output clean, validated SQL insert/update statements.

---

## 2. MCP Configuration (`mcp.json`)

To enable Firecrawl in your local environment, add this entry to your MCP configuration:
```json
{
  "mcpServers": {
    "firecrawl": {
      "command": "npx",
      "args": ["-y", "firecrawl-mcp"],
      "env": {
        "FIRECRAWL_API_KEY": "YOUR_FIRECRAWL_API_KEY"
      }
    }
  }
}
```

---

## 3. Extraction Prompt Template

When ingesting a new AI tool, use this structured prompt:

```text
Scrape the official homepage and pricing page for: [TOOL_URL]

Extract the following structured attributes:
1. Tool Name, Short Tagline (< 80 chars), and Official Website URL.
2. Primary Category (e.g., Coding, Writing, Video, Automation, Voice).
3. Pricing Model: 'free' | 'freemium' | 'paid' | 'open_source'.
4. Starting Price (USD/month, 0 if free tier exists).
5. Free Tier Limits (exact details: requests/mo, message limits, credits).
6. Can this be done for free in standard ChatGPT? (Yes/No + honest explanation).
7. Context Window / Supported LLMs (if applicable).
8. API Availability: Does it provide an open developer API? (true/false).
9. Output format: A clean PostgreSQL INSERT statement matching public.tools.
```

---

## 4. Normalization & Validation Rules

- **Detect "Free Trial" vs "Free Tier":** A 7-day trial that requires a credit card is NOT "freemium"; classify it as `paid` with `has_free_trial = true`.
- **Honest Free Alternative:** Always formulate an objective answer to *"Can I do this in ChatGPT for free?"*. If a standard prompt solves 80% of the problem, document the prompt.
- **Logo Assets:** Extract high-resolution SVG or PNG logos (transparent background, minimum 256x256).

