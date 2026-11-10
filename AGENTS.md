# SnapStack — Project Standards & Agent Guidelines

* **Working Project Name:** **SnapStack** (Tagline: *"Tested AI Workflows & Tool Stacks in a Snap"*)

## 1. Core Architecture & Tech Stack Constraints
* **Framework:** Next.js 15 (App Router) with React Server Components (RSC) by default.
* **Database & Auth:** Supabase (PostgreSQL) with Row-Level Security (RLS) and typed queries.
* **Styling & UI:** Tailwind CSS v4 + shadcn/ui primitives.
* **Pricing & Budget Constraint:** Strict **$0/month free-tier architecture** (all platform features, workflows, and submissions are 100% free with no paywalls).
* **Video Integration:** 100% zero-hosting via YouTube API and Lite-Embed Facade (`aspect-[9/16]` for Shorts, `aspect-[16/9]` for Tutorials).

## 2. Planning Protocol: Spec-Driven Development (SDD)
Before jumping into coding complex features:
1. Clarify ambiguous requirements (ask targeted questions on scope, persona, constraints).
2. Reference or scaffold requirements in `docs/prd/` and technical architecture in `docs/architecture/`.
3. Break implementation into atomic, testable tasks.

## 3. Copywriting & Tone Standards
* Enforce **Jobs-to-be-Done (JTBD)** outcome-driven copy (e.g. *"Auto-Extract Invoice Data into Sheets"*).
* Never use robotic AI buzzwords (*"delve"*, *"unleash"*, *"testament to"*).
* Include the honest **"Can I do this in ChatGPT for free?"** callout on tool and workflow recipes.

