import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Download,
  LockOpen,
  ShieldCheck,
  Cpu,
  Layers,
  Terminal,
  ExternalLink,
  Star,
  Activity,
  Bot,
  FileSpreadsheet,
  Palette,
  Workflow,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LiveSearchAutocomplete } from "@/components/live-search-autocomplete";
import { TrendingWorkflowsSection } from "@/components/trending-workflows-section";
import { DispatchForm } from "@/components/dispatch-form";

export default function HomePage() {
  return (
    <div className="relative w-full overflow-hidden bg-canvas">
      {/* Top Ambient Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[840px] h-[400px] bg-gradient-to-b from-[#5e6ad2]/20 via-[#5e6ad2]/5 to-transparent blur-[140px] pointer-events-none rounded-full" />

      {/* =========================================================================
          SECTION 1: HERO & OUTCOME SEARCH (Screen 85ef2c500312422289da873ac5f7a461)
          ========================================================================= */}
      <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-12 flex flex-col items-center text-center">
        {/* Verified Status Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-1 border border-hairline shadow-xs mb-6 hover:border-hairline-strong transition-colors">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-status-emerald opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-status-emerald" />
          </span>
          <span className="font-mono text-xs text-ink-muted tracking-tight">
            ✦ 240+ Production AI Workflows Tested &amp; Verified for 2026
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-[-0.04em] text-ink leading-[1.06] mb-5 max-w-4xl">
          Automate your company with{" "}
          <span className="bg-gradient-to-r from-brand-lavender via-[#828fff] to-emerald-400 bg-clip-text text-transparent">
            verified AI workflows.
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="text-base sm:text-xl text-ink-subtle max-w-2xl mx-auto mb-8 tracking-tight leading-relaxed">
          Step-by-step blueprints, free prompts, and video walkthroughs across Claude, OpenAI, Cursor, and n8n — tested and benchmarked.
        </p>

        {/* Live Search Component with Autocomplete */}
        <LiveSearchAutocomplete />
      </section>

      {/* =========================================================================
          SECTION 2: CORE VERIFIED WORKFLOWS (ASYMMETRIC 5-MODULE BENTO GRID)
          ========================================================================= */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20" id="featured-workflow">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {/* CARD 1: Wide Bento Spotlight (lg:col-span-2) */}
          <div className="lg:col-span-2 bg-surface-1 border border-hairline rounded-xl p-6 flex flex-col justify-between hover:border-hairline-strong transition-all duration-200">
            <div className="flex flex-col">
              <div className="flex items-center justify-between pb-4 border-b border-hairline mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-status-emerald" />
                  <h3 className="text-sm font-semibold text-ink tracking-tight">
                    Core Verified Workflows
                  </h3>
                  <span className="font-mono text-xs bg-surface-2 text-ink-muted px-2 py-0.5 rounded border border-hairline">
                    6 Live
                  </span>
                </div>
                <Link
                  href="/workflows"
                  className="text-xs font-medium text-brand-lavender hover:text-brand-hover flex items-center gap-1 transition-colors"
                >
                  <span className="hidden sm:inline">Explore All Blueprints</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Table Rows */}
              <div className="flex flex-col divide-y divide-hairline">
                {/* Row 1 */}
                <div className="flex items-center justify-between py-3 px-2 rounded-lg hover:bg-surface-2/50 transition-colors group">
                  <div className="flex items-center gap-3 min-w-0 pr-2">
                    <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-surface-3 text-brand-lavender uppercase font-medium shrink-0">
                      DevSecOps
                    </span>
                    <div className="min-w-0">
                      <Link
                        href="/workflows/autonomous-pr-patching"
                        className="text-xs sm:text-sm font-medium text-ink hover:text-brand-lavender transition-colors block truncate"
                      >
                        Autonomous DevSecOps &amp; PR Synthesis Engine
                      </Link>
                      <div className="flex items-center gap-2 text-xs text-ink-tertiary font-mono mt-0.5">
                        <span className="truncate">Cursor Agent • SonarQube • GitHub Actions</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <div className="hidden md:flex items-center gap-1 font-mono text-xs text-status-amber font-medium">
                      <Star className="w-3 h-3 fill-status-amber text-status-amber" /> 4.98
                    </div>
                    <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-surface-2 text-ink-subtle border border-hairline hidden sm:inline">
                      Automated AST
                    </span>
                    <Link
                      href="/workflows/autonomous-pr-patching"
                      className="w-7 h-7 rounded-lg bg-surface-2 hover:bg-brand-lavender hover:text-white text-ink-subtle flex items-center justify-center transition-colors"
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="flex items-center justify-between py-3 px-2 rounded-lg hover:bg-surface-2/50 transition-colors group">
                  <div className="flex items-center gap-3 min-w-0 pr-2">
                    <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-surface-3 text-status-blue uppercase font-medium shrink-0">
                      Support
                    </span>
                    <div className="min-w-0">
                      <Link
                        href="/workflows/support-draft-replier"
                        className="text-xs sm:text-sm font-medium text-ink hover:text-brand-lavender transition-colors block truncate"
                      >
                        Self-Driving Customer Triage &amp; SLA Dispatch
                      </Link>
                      <div className="flex items-center gap-2 text-xs text-ink-tertiary font-mono mt-0.5">
                        <span className="truncate">Claude 3.7 • Zendesk API • Linear Triage</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <div className="hidden md:flex items-center gap-1 font-mono text-xs text-status-amber font-medium">
                      <Star className="w-3 h-3 fill-status-amber text-status-amber" /> 4.96
                    </div>
                    <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-surface-2 text-ink-subtle border border-hairline hidden sm:inline">
                      99.4% Precision
                    </span>
                    <Link
                      href="/workflows/support-draft-replier"
                      className="w-7 h-7 rounded-lg bg-surface-2 hover:bg-brand-lavender hover:text-white text-ink-subtle flex items-center justify-center transition-colors"
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Row 3 */}
                <div className="flex items-center justify-between py-3 px-2 rounded-lg hover:bg-surface-2/50 transition-colors group">
                  <div className="flex items-center gap-3 min-w-0 pr-2">
                    <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-surface-3 text-status-amber uppercase font-medium shrink-0">
                      Security
                    </span>
                    <div className="min-w-0">
                      <Link
                        href="/workflows/github-auto-pr"
                        className="text-xs sm:text-sm font-medium text-ink hover:text-brand-lavender transition-colors block truncate"
                      >
                        Automated GitHub PR Security &amp; Compliance Audit
                      </Link>
                      <div className="flex items-center gap-2 text-xs text-ink-tertiary font-mono mt-0.5">
                        <span className="truncate">Claude 3.7 • OpenAPI Lint • SonarQube</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <div className="hidden md:flex items-center gap-1 font-mono text-xs text-status-amber font-medium">
                      <Star className="w-3 h-3 fill-status-amber text-status-amber" /> 4.99
                    </div>
                    <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-surface-2 text-ink-subtle border border-hairline hidden sm:inline">
                      18 hrs/wk
                    </span>
                    <Link
                      href="/workflows/github-auto-pr"
                      className="w-7 h-7 rounded-lg bg-surface-2 hover:bg-brand-lavender hover:text-white text-ink-subtle flex items-center justify-center transition-colors"
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Row 4 */}
                <div className="flex items-center justify-between py-3 px-2 rounded-lg hover:bg-surface-2/50 transition-colors group">
                  <div className="flex items-center gap-3 min-w-0 pr-2">
                    <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-surface-3 text-ink-muted uppercase font-medium shrink-0">
                      Frontend
                    </span>
                    <div className="min-w-0">
                      <Link
                        href="/workflows/figma-tailwind"
                        className="text-xs sm:text-sm font-medium text-ink hover:text-brand-lavender transition-colors block truncate"
                      >
                        Figma Token to Tailwind React AST Compiler
                      </Link>
                      <div className="flex items-center gap-2 text-xs text-ink-tertiary font-mono mt-0.5">
                        <span className="truncate">Cursor Agent • Next.js 15 • Vercel CI</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <div className="hidden md:flex items-center gap-1 font-mono text-xs text-status-amber font-medium">
                      <Star className="w-3 h-3 fill-status-amber text-status-amber" /> 4.96
                    </div>
                    <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-surface-2 text-ink-subtle border border-hairline hidden sm:inline">
                      Strict TS
                    </span>
                    <Link
                      href="/workflows/figma-tailwind"
                      className="w-7 h-7 rounded-lg bg-surface-2 hover:bg-brand-lavender hover:text-white text-ink-subtle flex items-center justify-center transition-colors"
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Telemetry Status Footer */}
            <div className="pt-3 border-t border-hairline mt-4 flex items-center justify-between font-mono text-xs text-ink-tertiary">
              <div className="flex items-center gap-2">
                <span>Telemetry Status:</span>
                <span className="text-status-emerald flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-status-emerald animate-pulse" /> All chains operational
                </span>
              </div>
              <span className="hidden sm:inline text-ink-subtle">Audited daily</span>
            </div>
          </div>

          {/* CARD 2: Sales & RevOps Engine (Bento 1-Col) */}
          <div className="bg-surface-1 border border-hairline rounded-xl p-6 flex flex-col justify-between hover:border-hairline-strong transition-all duration-200">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-hairline mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-status-blue" />
                  <h3 className="text-sm font-semibold text-ink tracking-tight">Sales &amp; RevOps Engine</h3>
                  <span className="font-mono text-[11px] bg-surface-2 text-ink-muted px-2 py-0.5 rounded border border-hairline">
                    4.95 ★
                  </span>
                </div>
                <Link href="/workflows?role=sales" className="text-brand-lavender hover:text-brand-hover text-xs">
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="flex flex-col divide-y divide-hairline">
                <div className="py-2.5 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-medium text-ink block">Apollo Signal Scraping</span>
                    <span className="text-[11px] text-ink-tertiary font-mono">Webhook • Live Ingestion</span>
                  </div>
                  <span className="font-mono text-[11px] text-status-emerald">Live</span>
                </div>
                <div className="py-2.5 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-medium text-ink block">Clay Waterfall Cascade</span>
                    <span className="text-[11px] text-ink-tertiary font-mono">75+ Providers • 98% Match</span>
                  </div>
                  <span className="font-mono text-[11px] text-status-blue">Auto</span>
                </div>
                <div className="py-2.5 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-medium text-ink block">Perplexity Sonar Dossier</span>
                    <span className="text-[11px] text-ink-tertiary font-mono">HubSpot API • Linear Sync</span>
                  </div>
                  <span className="font-mono text-[11px] text-status-amber">Sync</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-hairline mt-4 flex items-center justify-between font-mono text-xs text-ink-tertiary">
              <span className="flex items-center gap-1 text-status-emerald">
                <span className="w-1.5 h-1.5 rounded-full bg-status-emerald" /> SOC-2 &amp; GDPR
              </span>
              <span className="text-ink-subtle">Sync active</span>
            </div>
          </div>

          {/* CARD 3: Self-Healing QA Suite (Bento 1-Col) */}
          <div className="bg-surface-1 border border-hairline rounded-xl p-6 flex flex-col justify-between hover:border-hairline-strong transition-all duration-200">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-hairline mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-brand-lavender" />
                  <h3 className="text-sm font-semibold text-ink tracking-tight">Self-Healing QA Suite</h3>
                  <span className="font-mono text-[11px] bg-surface-2 text-ink-muted px-2 py-0.5 rounded border border-hairline">
                    4.92 ★
                  </span>
                </div>
                <Link href="/workflows?role=qa" className="text-brand-lavender hover:text-brand-hover text-xs">
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="flex flex-col divide-y divide-hairline">
                <div className="py-2.5 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-medium text-ink block">Playwright Flake Intercept</span>
                    <span className="text-[11px] text-ink-tertiary font-mono">DOM dump capture</span>
                  </div>
                  <span className="font-mono text-[11px] bg-surface-2 px-1.5 py-0.5 rounded text-ink-subtle border border-hairline">Auto</span>
                </div>
                <div className="py-2.5 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-medium text-ink block">Cursor Agent AST Mutator</span>
                    <span className="text-[11px] text-ink-tertiary font-mono">Linear issue auto-resolve</span>
                  </div>
                  <span className="font-mono text-[11px] text-status-emerald">94.2%</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-hairline mt-4 flex items-center justify-between font-mono text-xs text-ink-tertiary">
              <span>Saved: <strong className="text-ink font-semibold">10 hrs/wk</strong></span>
              <span className="text-status-emerald flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-status-emerald" /> Verified
              </span>
            </div>
          </div>

          {/* CARD 4: Finance & Ledger Sync (Bento 1-Col) */}
          <div className="bg-surface-1 border border-hairline rounded-xl p-6 flex flex-col justify-between hover:border-hairline-strong transition-all duration-200">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-hairline mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-status-emerald" />
                  <h3 className="text-sm font-semibold text-ink tracking-tight">Finance &amp; Ledger Sync</h3>
                  <span className="font-mono text-[11px] bg-surface-2 text-ink-muted px-2 py-0.5 rounded border border-hairline">
                    4.94 ★
                  </span>
                </div>
                <Link href="/workflows?role=finance" className="text-brand-lavender hover:text-brand-hover text-xs">
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="flex flex-col divide-y divide-hairline">
                <div className="py-2.5 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-medium text-ink block">DocLLM Receipt Extraction</span>
                    <span className="text-[11px] text-ink-tertiary font-mono">Offline Llama 3.3 parsing</span>
                  </div>
                  <span className="font-mono text-[11px] bg-surface-2 px-1.5 py-0.5 rounded text-ink-subtle border border-hairline">Local</span>
                </div>
                <div className="py-2.5 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-medium text-ink block">QBO &amp; Xero Auto-Post</span>
                    <span className="text-[11px] text-ink-tertiary font-mono">Exact tax code attribution</span>
                  </div>
                  <span className="font-mono text-[11px] text-status-emerald">Zero-cloud</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-hairline mt-4 flex items-center justify-between font-mono text-xs text-ink-tertiary">
              <span>Saved: <strong className="text-ink font-semibold">8 hrs/wk</strong></span>
              <span className="text-status-emerald flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-status-emerald" /> SOC2 Ready
              </span>
            </div>
          </div>

          {/* CARD 5: Figma to Tailwind AST (Bento 1-Col) */}
          <div className="bg-surface-1 border border-hairline rounded-xl p-6 flex flex-col justify-between hover:border-hairline-strong transition-all duration-200">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-hairline mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-status-purple" />
                  <h3 className="text-sm font-semibold text-ink tracking-tight">Figma to Tailwind AST</h3>
                  <span className="font-mono text-[11px] bg-surface-2 text-ink-muted px-2 py-0.5 rounded border border-hairline">
                    4.96 ★
                  </span>
                </div>
                <Link href="/workflows?role=frontend" className="text-brand-lavender hover:text-brand-hover text-xs">
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="flex flex-col divide-y divide-hairline">
                <div className="py-2.5 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-medium text-ink block">Token &amp; Node Extractor</span>
                    <span className="text-[11px] text-ink-tertiary font-mono">JSON schema AST generation</span>
                  </div>
                  <span className="font-mono text-[11px] bg-surface-2 px-1.5 py-0.5 rounded text-ink-subtle border border-hairline">Tailwind 4</span>
                </div>
                <div className="py-2.5 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-medium text-ink block">Vercel Preview Deploy</span>
                    <span className="text-[11px] text-ink-tertiary font-mono">Next.js 15 &amp; React 19</span>
                  </div>
                  <span className="font-mono text-[11px] text-brand-lavender">Strict TS</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-hairline mt-4 flex items-center justify-between font-mono text-xs text-ink-tertiary">
              <span>Saved: <strong className="text-ink font-semibold">15 hrs/wk</strong></span>
              <span className="text-status-emerald flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-status-emerald" /> Verified
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: TRENDING AI WORKFLOWS (WITH GRID VS TABLE TOGGLE)
          ========================================================================= */}
      <TrendingWorkflowsSection />

      {/* =========================================================================
          SECTION 4: VERIFIED AI TOOLS DIRECTORY (Screen 85ef2c500312422289da873ac5f7a461)
          ========================================================================= */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20" id="verified-tools">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-brand-lavender" />
              <h2 className="text-xl sm:text-2xl font-semibold text-ink tracking-tight">
                Verified AI Tools Directory
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-ink-subtle">
              Inspected for privacy, uptime, and real API capabilities.
            </p>
          </div>
          <Link
            href="/tools"
            className="inline-flex items-center gap-1 text-brand-lavender hover:text-brand-hover text-xs sm:text-sm font-medium transition-colors"
          >
            <span>View all 84 tools</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4 Tool Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Tool 1: n8n */}
          <div className="bg-surface-1 border border-hairline hover:border-hairline-strong rounded-xl p-6 flex flex-col justify-between hover:bg-surface-2 transition-all duration-200">
            <div>
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-surface-3 border border-hairline flex items-center justify-center font-mono text-base font-bold text-brand-lavender">
                  n8
                </div>
                <span className="font-mono text-xs px-2 py-0.5 rounded bg-surface-3 text-status-emerald border border-hairline flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-status-emerald" /> Verified
                </span>
              </div>
              <h3 className="text-base font-semibold text-ink mb-1">n8n</h3>
              <p className="font-mono text-xs text-brand-lavender mb-2">Freemium • Workflow Automation</p>
              <p className="text-xs text-ink-subtle mb-4 leading-relaxed">
                Open-source workflow automation with dedicated AI agent nodes, vector store integrations, and sandboxed JS.
              </p>
              <div className="flex flex-wrap gap-1 mb-4">
                <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-surface-3 text-ink-muted">SOC 2</span>
                <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-surface-3 text-ink-muted">GDPR</span>
                <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-surface-3 text-ink-muted">Self-Hostable</span>
              </div>
            </div>
            <div>
              <div className="font-mono text-xs text-ink-tertiary mb-3 space-y-0.5">
                <p>Powers <strong className="text-ink font-semibold">142 workflows</strong></p>
                <p>38 video tutorials</p>
              </div>
              <div className="flex items-center gap-2 pt-2 border-t border-hairline">
                <Link
                  href="/tools/n8n"
                  className="flex-1 py-1.5 text-center rounded-lg bg-surface-3 hover:bg-surface-4 text-ink text-xs font-medium transition-colors"
                >
                  Details
                </Link>
                <a
                  href="https://n8n.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg bg-surface-3 hover:bg-surface-4 text-ink-subtle hover:text-ink transition-colors flex items-center justify-center"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Tool 2: Claude 3.7 Sonnet */}
          <div className="bg-surface-1 border border-hairline hover:border-hairline-strong rounded-xl p-6 flex flex-col justify-between hover:bg-surface-2 transition-all duration-200">
            <div>
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-surface-3 border border-hairline flex items-center justify-center font-mono text-base font-bold text-status-blue">
                  C3
                </div>
                <span className="font-mono text-xs px-2 py-0.5 rounded bg-surface-3 text-status-emerald border border-hairline flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-status-emerald" /> Verified
                </span>
              </div>
              <h3 className="text-base font-semibold text-ink mb-1">Claude 3.7 Sonnet</h3>
              <p className="font-mono text-xs text-brand-lavender mb-2">Paid / API • Reasoning LLM</p>
              <p className="text-xs text-ink-subtle mb-4 leading-relaxed">
                Anthropic reasoning &amp; hybrid agent model delivering precision coding, system triage, and zero hallucination audits.
              </p>
              <div className="flex flex-wrap gap-1 mb-4">
                <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-surface-3 text-ink-muted">SOC 2</span>
                <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-surface-3 text-ink-muted">HIPAA</span>
                <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-surface-3 text-ink-muted">Zero Retention</span>
              </div>
            </div>
            <div>
              <div className="font-mono text-xs text-ink-tertiary mb-3 space-y-0.5">
                <p>Powers <strong className="text-ink font-semibold">198 workflows</strong></p>
                <p>56 video tutorials</p>
              </div>
              <div className="flex items-center gap-2 pt-2 border-t border-hairline">
                <Link
                  href="/tools/claude-3-7-sonnet"
                  className="flex-1 py-1.5 text-center rounded-lg bg-surface-3 hover:bg-surface-4 text-ink text-xs font-medium transition-colors"
                >
                  Details
                </Link>
                <a
                  href="https://anthropic.com/claude"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg bg-surface-3 hover:bg-surface-4 text-ink-subtle hover:text-ink transition-colors flex items-center justify-center"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Tool 3: Clay */}
          <div className="bg-surface-1 border border-hairline hover:border-hairline-strong rounded-xl p-6 flex flex-col justify-between hover:bg-surface-2 transition-all duration-200">
            <div>
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-surface-3 border border-hairline flex items-center justify-center font-mono text-base font-bold text-status-amber">
                  Cy
                </div>
                <span className="font-mono text-xs px-2 py-0.5 rounded bg-surface-3 text-status-emerald border border-hairline flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-status-emerald" /> Verified
                </span>
              </div>
              <h3 className="text-base font-semibold text-ink mb-1">Clay</h3>
              <p className="font-mono text-xs text-brand-lavender mb-2">Freemium • Data Enrichment</p>
              <p className="text-xs text-ink-subtle mb-4 leading-relaxed">
                AI lead prospecting, automated enrichment, waterfall lookups across 75+ data providers, and custom research agents.
              </p>
              <div className="flex flex-wrap gap-1 mb-4">
                <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-surface-3 text-ink-muted">SOC 2</span>
                <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-surface-3 text-ink-muted">GDPR</span>
                <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-surface-3 text-ink-muted">Enterprise Ready</span>
              </div>
            </div>
            <div>
              <div className="font-mono text-xs text-ink-tertiary mb-3 space-y-0.5">
                <p>Powers <strong className="text-ink font-semibold">64 workflows</strong></p>
                <p>24 video tutorials</p>
              </div>
              <div className="flex items-center gap-2 pt-2 border-t border-hairline">
                <Link
                  href="/tools/clay"
                  className="flex-1 py-1.5 text-center rounded-lg bg-surface-3 hover:bg-surface-4 text-ink text-xs font-medium transition-colors"
                >
                  Details
                </Link>
                <a
                  href="https://clay.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg bg-surface-3 hover:bg-surface-4 text-ink-subtle hover:text-ink transition-colors flex items-center justify-center"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Tool 4: Cursor */}
          <div className="bg-surface-1 border border-hairline hover:border-hairline-strong rounded-xl p-6 flex flex-col justify-between hover:bg-surface-2 transition-all duration-200">
            <div>
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-surface-3 border border-hairline flex items-center justify-center font-mono text-base font-bold text-ink">
                  Cr
                </div>
                <span className="font-mono text-xs px-2 py-0.5 rounded bg-surface-3 text-status-emerald border border-hairline flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-status-emerald" /> Verified
                </span>
              </div>
              <h3 className="text-base font-semibold text-ink mb-1">Cursor</h3>
              <p className="font-mono text-xs text-brand-lavender mb-2">Freemium • Autonomous Editor</p>
              <p className="text-xs text-ink-subtle mb-4 leading-relaxed">
                AI-first code editor with agentic terminal execution, automatic multi-file edits, and instant codebase indexing.
              </p>
              <div className="flex flex-wrap gap-1 mb-4">
                <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-surface-3 text-ink-muted">Privacy Mode</span>
                <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-surface-3 text-ink-muted">Claude Integrated</span>
                <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-surface-3 text-ink-muted">Background Agent</span>
              </div>
            </div>
            <div>
              <div className="font-mono text-xs text-ink-tertiary mb-3 space-y-0.5">
                <p>Powers <strong className="text-ink font-semibold">112 workflows</strong></p>
                <p>42 video tutorials</p>
              </div>
              <div className="flex items-center gap-2 pt-2 border-t border-hairline">
                <Link
                  href="/tools/cursor"
                  className="flex-1 py-1.5 text-center rounded-lg bg-surface-3 hover:bg-surface-4 text-ink text-xs font-medium transition-colors"
                >
                  Details
                </Link>
                <a
                  href="https://cursor.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg bg-surface-3 hover:bg-surface-4 text-ink-subtle hover:text-ink transition-colors flex items-center justify-center"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: 4-PILLAR TRUST BANNER
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-surface-1 border border-hairline hover:border-hairline-strong rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl transition-all">
          <div className="mb-8 text-center max-w-xl mx-auto">
            <span className="font-mono text-xs uppercase tracking-wider text-brand-lavender font-semibold">
              Quality Standard
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-ink tracking-tight mt-1">
              Why SnapStack is Built Differently
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col gap-2 p-5 rounded-xl bg-surface-2 border border-hairline hover:border-hairline-strong transition-all">
              <div className="w-8 h-8 rounded-lg bg-surface-3 border border-hairline flex items-center justify-center text-status-emerald mb-1">
                <LockOpen className="w-4 h-4 text-status-emerald" />
              </div>
              <h3 className="text-sm font-semibold text-ink">100% Free &amp; Open Access</h3>
              <p className="text-xs text-ink-subtle leading-relaxed">
                Zero paywalls, no gated prompts, and no sponsored junk. Every recipe is open under the MIT License.
              </p>
            </div>

            <div className="flex flex-col gap-2 p-5 rounded-xl bg-surface-2 border border-hairline hover:border-hairline-strong transition-all">
              <div className="w-8 h-8 rounded-lg bg-surface-3 border border-hairline flex items-center justify-center text-brand-lavender mb-1">
                <CheckCircle2 className="w-4 h-4 text-brand-lavender" />
              </div>
              <h3 className="text-sm font-semibold text-ink">Real Screen Video Proof</h3>
              <p className="text-xs text-ink-subtle leading-relaxed">
                Every single workflow is screen-recorded and verified working in production with exact step timestamps.
              </p>
            </div>

            <div className="flex flex-col gap-2 p-5 rounded-xl bg-surface-2 border border-hairline hover:border-hairline-strong transition-all">
              <div className="w-8 h-8 rounded-lg bg-surface-3 border border-hairline flex items-center justify-center text-status-amber mb-1">
                <Download className="w-4 h-4 text-status-amber" />
              </div>
              <h3 className="text-sm font-semibold text-ink">1-Click Blueprints</h3>
              <p className="text-xs text-ink-subtle leading-relaxed">
                Download clean importable JSON blueprints for Make.com, n8n, Zapier, and GitHub Actions templates.
              </p>
            </div>

            <div className="flex flex-col gap-2 p-5 rounded-xl bg-surface-2 border border-hairline hover:border-hairline-strong transition-all">
              <div className="w-8 h-8 rounded-lg bg-surface-3 border border-hairline flex items-center justify-center text-status-emerald mb-1">
                <ShieldCheck className="w-4 h-4 text-status-emerald" />
              </div>
              <h3 className="text-sm font-semibold text-ink">Radical Honesty</h3>
              <p className="text-xs text-ink-subtle leading-relaxed">
                If a workflow can be done with ChatGPT Free in 15 seconds, we explicitly tell you instead of selling software.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: COMMUNITY DISPATCH BANNER
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="relative bg-surface-1 border border-hairline hover:border-hairline-strong rounded-2xl p-8 lg:p-10 overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 transition-all">
          <div className="flex flex-col gap-2 max-w-xl text-center lg:text-left">
            <div className="inline-flex items-center justify-center lg:justify-start gap-2 text-brand-lavender font-mono text-xs uppercase font-semibold">
              <span className="w-2 h-2 rounded-full bg-brand-lavender animate-pulse" />
              Weekly AI Dispatch
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-ink tracking-tight">
              Join 14,000+ builders shipping tested AI workflows.
            </h2>
            <p className="text-sm text-ink-subtle leading-relaxed">
              One production-tested recipe, benchmark report, and copyable prompt package every Tuesday. No noise.
            </p>
          </div>

          <div className="w-full lg:w-auto flex flex-col gap-2 min-w-[340px]">
            <DispatchForm buttonText="Get Dispatch" placeholder="lead.dev@company.com" />
            <div className="flex items-center justify-center lg:justify-start gap-3 text-ink-tertiary font-mono text-xs pt-1">
              <span>✔ No spam, ever</span>
              <span>•</span>
              <span className="flex items-center gap-1 text-ink-muted">
                RSS Available
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
