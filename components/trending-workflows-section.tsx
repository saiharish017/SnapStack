"use client";

import * as React from "react";
import Link from "next/link";
import {
  LayoutGrid,
  List,
  Play,
  Heart,
  Timer,
  ChevronRight,
  TrendingUp,
} from "lucide-react";

interface WorkflowItem {
  id: string;
  title: string;
  description: string;
  role: string;
  complexity: string;
  stackChain: string[];
  timeSaved: string;
  cost: string;
  videoDuration: string;
  verifiedDate: string;
  href: string;
}

const WORKFLOWS: WorkflowItem[] = [
  {
    id: "lead-enrichment",
    title: "End-to-End Inbound Lead Enrichment & Cold Drafts",
    description: "Extracts target account data from Apollo, runs waterfall enrichment in Clay, drafts tailored sales icebreakers with GPT-4o, and stages CRM tasks.",
    role: "Sales & RevOps",
    complexity: "Low-Code",
    stackChain: ["Apollo", "Clay", "GPT-4o", "HubSpot"],
    timeSaved: "9 hrs/wk",
    cost: "$49/mo stack",
    videoDuration: "08:45",
    verifiedDate: "Verified Nov 2026",
    href: "/workflows/lead-qualification",
  },
  {
    id: "github-pr-security",
    title: "Automated GitHub PR Security & Architecture Review",
    description: "Runs deep reasoning static audits on incoming PR diffs, checks compliance against OpenAPI specs, and writes inline suggestions.",
    role: "DevSecOps",
    complexity: "Code Agent",
    stackChain: ["GitHub", "Claude 3.7", "SonarQube"],
    timeSaved: "18 hrs/wk",
    cost: "$0/mo stack",
    videoDuration: "11:12",
    verifiedDate: "Verified Nov 2026",
    href: "/workflows/github-auto-pr",
  },
  {
    id: "seo-repurpose",
    title: "Multi-Platform SEO Blog to Social Snippet Repurposing",
    description: "Ingests longform markdown drafts, cross-references with Perplexity citations, generates slide carousels, and buffers social posts.",
    role: "Marketing",
    complexity: "No-Code",
    stackChain: ["Perplexity", "Make.com", "Buffer"],
    timeSaved: "11 hrs/wk",
    cost: "$16/mo stack",
    videoDuration: "06:20",
    verifiedDate: "Verified Nov 2026",
    href: "/workflows/youtube-repurpose",
  },
  {
    id: "invoice-sync",
    title: "Self-Driving Financial Invoice Parsing & Quickbooks Sync",
    description: "Detects incoming vendor invoices in Google Drive, uses local Llama-3 for optical extraction, reconciles accounts, and alerts discrepancies.",
    role: "Finance",
    complexity: "Low-Code",
    stackChain: ["Drive", "OCR", "Llama-3", "QBO"],
    timeSaved: "8 hrs/wk",
    cost: "$0/mo stack",
    videoDuration: "09:55",
    verifiedDate: "Verified Nov 2026",
    href: "/workflows/invoice-ocr",
  },
  {
    id: "executive-news",
    title: "Executive Daily Podcast & Competitor News Intelligence",
    description: "Monitors industry transcripts, queries DeepSeek for strategic risk analysis, and pushes a 2-minute bulleted audio briefing to Telegram at 7 AM.",
    role: "Founders",
    complexity: "No-Code",
    stackChain: ["Fireflies", "DeepSeek", "Telegram"],
    timeSaved: "6 hrs/wk",
    cost: "$0/mo stack",
    videoDuration: "05:15",
    verifiedDate: "Verified Nov 2026",
    href: "/workflows/competitor-monitor",
  },
  {
    id: "figma-to-tailwind",
    title: "Figma to Tailwind React Component Generator",
    description: "Extracts node schemas directly from selected Figma frames, triggers a Cursor background agent to generate clean TypeScript code, and commits to GitHub.",
    role: "Engineering",
    complexity: "AST Agent",
    stackChain: ["Figma", "Cursor", "Vercel"],
    timeSaved: "15 hrs/wk",
    cost: "$20/mo stack",
    videoDuration: "13:40",
    verifiedDate: "Verified Nov 2026",
    href: "/workflows/figma-tailwind",
  },
];

export function TrendingWorkflowsSection() {
  const [viewMode, setViewMode] = React.useState<"grid" | "table">("grid");
  const [activeFilter, setActiveFilter] = React.useState<"trending" | "easy" | "saved" | "recent">("trending");

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20" id="trending-grid">
      {/* Controls Header Bar */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <TrendingUp className="w-4 h-4 text-brand-lavender" />
            <h2 className="text-xl sm:text-2xl font-semibold text-ink tracking-tight">
              Trending AI Workflows
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-ink-subtle">
            Battle-tested automations community teams run in production.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Filter Pills */}
          <div className="inline-flex bg-surface-1 p-1 rounded-lg border border-hairline text-xs font-medium">
            <button
              type="button"
              onClick={() => setActiveFilter("trending")}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                activeFilter === "trending"
                  ? "bg-surface-3 text-ink shadow-xs"
                  : "text-ink-muted hover:text-ink"
              }`}
            >
              Trending
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("easy")}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                activeFilter === "easy"
                  ? "bg-surface-3 text-ink shadow-xs"
                  : "text-ink-muted hover:text-ink"
              }`}
            >
              Easiest Setup
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("saved")}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                activeFilter === "saved"
                  ? "bg-surface-3 text-ink shadow-xs"
                  : "text-ink-muted hover:text-ink"
              }`}
            >
              Highest Time Saved
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("recent")}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                activeFilter === "recent"
                  ? "bg-surface-3 text-ink shadow-xs"
                  : "text-ink-muted hover:text-ink"
              }`}
            >
              Recently Added
            </button>
          </div>

          {/* Grid vs Table View Toggle */}
          <div className="inline-flex bg-surface-1 p-1 rounded-lg border border-hairline gap-1">
            <button
              type="button"
              onClick={() => setViewMode("grid")}
              title="Compact Grid View"
              className={`px-2.5 py-1.5 rounded-md text-xs flex items-center gap-1.5 transition-all ${
                viewMode === "grid"
                  ? "bg-surface-3 text-ink font-medium shadow-xs"
                  : "text-ink-muted hover:text-ink"
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5 text-brand-lavender" />
              <span className="hidden sm:inline">Grid</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode("table")}
              title="Dense Table/List View"
              className={`px-2.5 py-1.5 rounded-md text-xs flex items-center gap-1.5 transition-all ${
                viewMode === "table"
                  ? "bg-surface-3 text-ink font-medium shadow-xs"
                  : "text-ink-muted hover:text-ink"
              }`}
            >
              <List className="w-3.5 h-3.5 text-brand-lavender" />
              <span className="hidden sm:inline">Table</span>
            </button>
          </div>
        </div>
      </div>

      {/* VIEW 1: 3-Column Responsive Grid */}
      {viewMode === "grid" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WORKFLOWS.map((wf) => (
            <article
              key={wf.id}
              className="bg-surface-1 border border-hairline rounded-xl p-5 sm:p-6 flex flex-col justify-between hover:border-hairline-strong hover:bg-surface-2/50 transition-all duration-200 group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-surface-3 text-ink-muted border border-hairline">
                      {wf.role}
                    </span>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-surface-2 text-ink-subtle border border-hairline">
                      {wf.complexity}
                    </span>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-surface-2 text-status-amber border border-hairline inline-flex items-center gap-1">
                      <Play className="w-2.5 h-2.5 text-brand-lavender fill-brand-lavender" />
                      {wf.videoDuration}
                    </span>
                  </div>
                  <button
                    type="button"
                    aria-label="Bookmark Workflow"
                    className="text-ink-tertiary hover:text-red-400 transition-colors shrink-0"
                  >
                    <Heart className="w-4 h-4" />
                  </button>
                </div>

                <h3 className="text-base font-semibold text-ink mb-2 group-hover:text-brand-lavender transition-colors line-clamp-1">
                  {wf.title}
                </h3>
                <p className="text-xs text-ink-subtle line-clamp-2 mb-4 leading-relaxed">
                  {wf.description}
                </p>

                {/* Stack Chain */}
                <div className="flex items-center gap-1.5 font-mono text-xs text-ink-tertiary bg-surface-2/50 border border-hairline p-2 rounded-lg mb-4">
                  {wf.stackChain.map((tool, idx) => (
                    <React.Fragment key={idx}>
                      <span className={idx === 1 ? "text-brand-lavender font-medium" : "text-ink"}>
                        {tool}
                      </span>
                      {idx < wf.stackChain.length - 1 && (
                        <span className="text-ink-tertiary text-xs">➔</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-3 border-t border-hairline flex flex-col gap-2 mt-auto font-mono text-xs">
                <div className="flex items-center justify-between text-ink-muted">
                  <span className="flex items-center gap-1.5 text-status-emerald">
                    <Timer className="w-3.5 h-3.5" /> {wf.timeSaved} saved
                  </span>
                  <span className="px-1.5 py-0.5 bg-surface-2 rounded text-ink-tertiary border border-hairline text-[11px]">
                    {wf.cost}
                  </span>
                </div>
                <div className="flex items-center justify-between text-ink-tertiary pt-0.5">
                  <span className="inline-flex items-center gap-1 text-ink-subtle text-[11px]">
                    {wf.verifiedDate}
                  </span>
                  <Link
                    href={wf.href}
                    className="text-brand-lavender hover:text-brand-hover inline-flex items-center gap-0.5 transition-colors font-medium text-xs group-hover:translate-x-0.5 transition-transform"
                  >
                    Get Flow <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* VIEW 2: Dense Table/List View */}
      {viewMode === "table" && (
        <div className="w-full overflow-x-auto bg-surface-1 border border-hairline rounded-xl shadow-lg">
          <table className="w-full text-left border-collapse">
            <thead className="bg-surface-2/70 border-b border-hairline font-mono text-xs text-ink-tertiary uppercase">
              <tr>
                <th className="py-3 px-4 font-medium">Workflow / Blueprint</th>
                <th className="py-3 px-4 font-medium">Role &amp; Type</th>
                <th className="py-3 px-4 font-medium hidden md:table-cell">Tool Stack Chain</th>
                <th className="py-3 px-4 font-medium">Efficiency</th>
                <th className="py-3 px-4 font-medium hidden sm:table-cell">Stack Cost</th>
                <th className="py-3 px-4 font-medium hidden lg:table-cell">Proof</th>
                <th className="py-3 px-4 font-medium text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-hairline text-xs">
              {WORKFLOWS.map((wf) => (
                <tr key={wf.id} className="hover:bg-surface-2/50 transition-colors group">
                  <td className="py-3.5 px-4">
                    <div className="font-medium text-ink group-hover:text-brand-lavender transition-colors">
                      {wf.title}
                    </div>
                    <div className="font-mono text-[11px] text-ink-tertiary mt-0.5 truncate max-w-sm">
                      {wf.description}
                    </div>
                  </td>
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-surface-3 text-ink-muted border border-hairline mr-1.5">
                      {wf.role}
                    </span>
                    <span className="font-mono text-[11px] text-ink-subtle">
                      {wf.complexity}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 hidden md:table-cell">
                    <div className="flex items-center gap-1 font-mono text-xs text-ink-tertiary">
                      {wf.stackChain.map((tool, idx) => (
                        <React.Fragment key={idx}>
                          <span className={idx === 1 ? "text-brand-lavender" : "text-ink"}>
                            {tool}
                          </span>
                          {idx < wf.stackChain.length - 1 && <span>→</span>}
                        </React.Fragment>
                      ))}
                    </div>
                  </td>
                  <td className="py-3.5 px-4 whitespace-nowrap font-mono text-status-emerald">
                    <span className="flex items-center gap-1">
                      <Timer className="w-3.5 h-3.5" /> {wf.timeSaved}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 whitespace-nowrap hidden sm:table-cell font-mono text-ink-muted">
                    {wf.cost}
                  </td>
                  <td className="py-3.5 px-4 whitespace-nowrap hidden lg:table-cell">
                    <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-surface-2 text-status-amber border border-hairline inline-flex items-center gap-1">
                      <Play className="w-2.5 h-2.5 text-brand-lavender fill-brand-lavender" />
                      {wf.videoDuration}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-right whitespace-nowrap">
                    <Link
                      href={wf.href}
                      className="inline-flex items-center gap-1 font-medium text-xs text-brand-lavender hover:text-brand-hover px-2.5 py-1 rounded bg-surface-2 hover:bg-surface-3 transition-colors"
                    >
                      Get Flow <ChevronRight className="w-3 h-3" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}

