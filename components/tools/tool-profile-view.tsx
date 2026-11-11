"use client";

import * as React from "react";
import Link from "next/link";
import { toast } from "sonner";
import {
  Bookmark,
  Share2,
  ExternalLink,
  Shield,
  Zap,
  CheckCircle2,
  Lock,
  MemoryStick as Memory,
  Terminal,
  PlayCircle,
  Copy,
  Check,
  ArrowRight,
  Sparkles,
  Workflow as WorkflowIcon,
  CreditCard,
  Building,
  HelpCircle,
} from "lucide-react";
import { ToolProfile } from "@/lib/data/tools";
import { WORKFLOWS } from "@/lib/data/workflows";

interface ToolProfileViewProps {
  tool: ToolProfile;
}

export function ToolProfileView({ tool }: ToolProfileViewProps) {
  const [isBookmarked, setIsBookmarked] = React.useState(false);
  const [copiedSdkKey, setCopiedSdkKey] = React.useState<string | null>(null);

  const toggleBookmark = () => {
    setIsBookmarked((prev) => {
      const next = !prev;
      toast(next ? "Saved to your Personal Vault!" : "Removed from bookmarks.");
      return next;
    });
  };

  const shareProfile = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Profile link copied to clipboard!");
  };

  const copyCommand = (cmd: string, key: string) => {
    navigator.clipboard.writeText(cmd);
    setCopiedSdkKey(key);
    toast.success("SDK install command copied!");
    setTimeout(() => setCopiedSdkKey(null), 2000);
  };

  // Find workflows using this tool
  const relatedWorkflows = WORKFLOWS.filter((wf) =>
    wf.stack.some((s) => s.toLowerCase().includes(tool.name.toLowerCase().split(" ")[0]))
  );

  return (
    <div className="w-full">
      {/* SECTION 1: Breadcrumbs & Tool Top Bar */}
      <div className="w-full border-b border-hairline bg-surface-1/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between text-xs font-mono text-ink-subtle">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2">
            <Link href="/" className="hover:text-ink transition-colors">Home</Link>
            <span>/</span>
            <Link href="/tools" className="hover:text-ink transition-colors">Tools</Link>
            <span>/</span>
            <span className="text-ink-tertiary">{tool.category}</span>
            <span>/</span>
            <span className="text-ink font-medium">{tool.name}</span>
          </nav>

          <div className="hidden sm:flex items-center gap-2 bg-surface-2 border border-hairline px-2.5 py-0.5 rounded-full text-[11px] text-ink-muted">
            <span className="w-1.5 h-1.5 rounded-full bg-status-emerald animate-pulse" />
            Live Evaluation Bench 2026.2
          </div>
        </div>
      </div>

      {/* SECTION 2: Tool Hero & Identity Header */}
      <section className="w-full bg-surface-1 border-b border-hairline relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
            {/* Identity & Tags */}
            <div className="flex-1 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-xl bg-surface-2 border border-hairline flex items-center justify-center p-3 shrink-0 shadow-sm relative">
                  <span className="font-mono text-xl font-bold text-brand-lavender">
                    {tool.name.charAt(0)}
                  </span>
                  <span className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-status-emerald border-2 border-surface-1" />
                </div>
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h1 className="text-2xl sm:text-3xl font-semibold text-ink tracking-tight">
                      {tool.name}
                    </h1>
                    <span className="font-mono text-xs px-2 py-0.5 rounded-full bg-surface-2 border border-hairline text-ink-subtle">
                      {tool.company}
                    </span>
                    <span className="inline-flex items-center gap-1 font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-surface-2 border border-hairline text-status-emerald">
                      <span className="w-1.5 h-1.5 rounded-full bg-status-emerald" />
                      {tool.verifiedVersion}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 pt-0.5 text-xs font-mono">
                    <span className="px-2 py-0.5 rounded bg-surface-2 border border-hairline text-brand-lavender">
                      {tool.category}
                    </span>
                    {tool.modelId && (
                      <>
                        <span className="text-ink-tertiary">•</span>
                        <span className="text-ink-tertiary">Model ID: {tool.modelId}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-ink-muted max-w-3xl leading-relaxed">
                {tool.description}
              </p>
            </div>

            {/* CTAs & Disclosures */}
            <div className="w-full lg:w-80 flex flex-col gap-3 shrink-0">
              <a
                href={tool.websiteUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-brand-lavender hover:bg-[#828fff] text-white font-semibold text-xs px-4 py-2.5 rounded-lg flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                <span>Visit Official Website</span>
                <ExternalLink className="h-4 w-4" />
              </a>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={toggleBookmark}
                  className={`w-full bg-surface-2 hover:bg-surface-3 border border-hairline text-xs font-semibold px-3 py-2 rounded-lg flex items-center justify-center gap-1.5 transition-colors ${
                    isBookmarked ? "text-brand-lavender border-brand-lavender" : "text-ink-muted hover:text-ink"
                  }`}
                >
                  <Bookmark className={`h-4 w-4 ${isBookmarked ? "fill-brand-lavender" : ""}`} />
                  <span>{isBookmarked ? "Saved" : "Bookmark"}</span>
                </button>
                <button
                  onClick={shareProfile}
                  className="w-full bg-surface-2 hover:bg-surface-3 border border-hairline text-ink-muted hover:text-ink text-xs font-semibold px-3 py-2 rounded-lg flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Share2 className="h-4 w-4" />
                  <span>Share Profile</span>
                </button>
              </div>
              <p className="font-mono text-[11px] text-ink-tertiary leading-normal pt-1">
                <span className="text-ink-subtle">Affiliate transparency:</span> Some links may reward SnapStack maintainers at zero markup to you.
              </p>
            </div>
          </div>

          {/* Metric Telemetry Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-6 mt-6 border-t border-hairline">
            <div className="bg-surface-2/70 border border-hairline rounded-lg p-3">
              <div className="flex items-center justify-between text-xs text-ink-tertiary uppercase font-mono">
                <span>Pass Rate</span>
                <CheckCircle2 className="h-3.5 w-3.5 text-status-emerald" />
              </div>
              <p className="font-mono text-xl font-semibold text-ink mt-1">{tool.passRate}</p>
              <span className="font-mono text-[11px] text-ink-subtle">SWE-bench verified</span>
            </div>

            <div className="bg-surface-2/70 border border-hairline rounded-lg p-3">
              <div className="flex items-center justify-between text-xs text-ink-tertiary uppercase font-mono">
                <span>Avg Latency</span>
                <Zap className="h-3.5 w-3.5 text-brand-lavender" />
              </div>
              <p className="font-mono text-xl font-semibold text-ink mt-1">{tool.avgLatency}</p>
              <span className="font-mono text-[11px] text-ink-subtle">Non-reasoning warm stream</span>
            </div>

            <div className="bg-surface-2/70 border border-hairline rounded-lg p-3">
              <div className="flex items-center justify-between text-xs text-ink-tertiary uppercase font-mono">
                <span>Context Window</span>
                <span className="text-brand-lavender">⌘</span>
              </div>
              <p className="font-mono text-xl font-semibold text-ink mt-1">{tool.contextWindow}</p>
              <span className="font-mono text-[11px] text-ink-subtle">Tokens (~150k words)</span>
            </div>

            <div className="bg-surface-2/70 border border-hairline rounded-lg p-3">
              <div className="flex items-center justify-between text-xs text-ink-tertiary uppercase font-mono">
                <span>Data Training</span>
                <Lock className="h-3.5 w-3.5 text-status-emerald" />
              </div>
              <p className="font-mono text-xl font-semibold text-status-emerald mt-1">{tool.dataTraining}</p>
              <span className="font-mono text-[11px] text-ink-subtle">Default for commercial API</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Decision Factsheet & Technical Specs (Bento Grid) */}
      <section className="w-full py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-2">
          <div>
            <span className="font-mono text-xs text-brand-lavender uppercase tracking-widest block font-semibold">
              // ARCHITECTURE & GOVERNANCE
            </span>
            <h2 className="text-2xl font-semibold text-ink mt-1">Decision Factsheet & Technical Specs</h2>
          </div>
          <p className="font-mono text-xs text-ink-tertiary">Audited protocol specs updated weekly</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Card A: Pricing Breakdown */}
          <div className="bg-surface-1 border border-hairline rounded-xl p-5 flex flex-col justify-between hover:border-hairline-strong transition-all">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-hairline">
                <div className="flex items-center gap-2">
                  <CreditCard className="h-4 w-4 text-brand-lavender" />
                  <h3 className="text-sm font-semibold text-ink">Pricing Breakdown</h3>
                </div>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-surface-2 border border-hairline text-ink-subtle">
                  USD Standard
                </span>
              </div>

              <div className="space-y-3 pt-3">
                {tool.pricingBreakdown.map((tier) => (
                  <div key={tier.name} className="p-3 bg-surface-2 rounded-lg border border-hairline">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-semibold text-ink">{tier.name}</span>
                      <span className="font-mono text-xs text-status-emerald font-medium">{tier.price}</span>
                    </div>
                    <p className="text-xs text-ink-subtle leading-relaxed">{tier.description}</p>
                  </div>
                ))}

                {tool.apiRates && (
                  <div className="p-3 bg-surface-2 rounded-lg border border-hairline">
                    <span className="text-xs font-semibold text-ink block mb-1">API Metered Rates</span>
                    <ul className="font-mono text-[11px] space-y-1 text-ink-subtle">
                      <li className="flex justify-between">
                        <span>Input Token Base:</span>
                        <span className="text-ink font-medium">{tool.apiRates.input}</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Output Token Base:</span>
                        <span className="text-ink font-medium">{tool.apiRates.output}</span>
                      </li>
                      {tool.apiRates.cachingRead && (
                        <li className="flex justify-between">
                          <span>Prompt Caching Read:</span>
                          <span className="text-status-emerald font-medium">{tool.apiRates.cachingRead}</span>
                        </li>
                      )}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <div className="pt-3 mt-4 border-t border-hairline flex items-center justify-between text-xs font-mono text-ink-tertiary">
              <span>Batch API 50% rebate eligible</span>
              <span className="text-ink-subtle">Tier 4 Available</span>
            </div>
          </div>

          {/* Card B: Data Privacy & Security */}
          <div className="bg-surface-1 border border-hairline rounded-xl p-5 flex flex-col justify-between hover:border-hairline-strong transition-all">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-hairline">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-status-emerald" />
                  <h3 className="text-sm font-semibold text-ink">Data Privacy & Security</h3>
                </div>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-surface-2 border border-hairline text-status-emerald">
                  Enterprise Ready
                </span>
              </div>

              <div className="space-y-4 pt-3">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-ink-tertiary">
                    Training Policy
                  </span>
                  <p className="text-xs font-semibold text-ink mt-0.5">Guaranteed Zero Training on API Data</p>
                  <p className="text-xs text-ink-subtle mt-0.5">
                    Default for all commercial API traffic. Consumer web tiers have explicit opt-out toggles in settings.
                  </p>
                </div>

                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-ink-tertiary">
                    Data Residency Options
                  </span>
                  <p className="text-xs font-semibold text-ink mt-0.5">US & EU Multi-Region Tenancy</p>
                  <p className="text-xs text-ink-subtle mt-0.5">
                    Available direct and via native private clusters on AWS Bedrock & Google Cloud Vertex AI.
                  </p>
                </div>

                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-ink-tertiary">
                    Compliance & Certifications
                  </span>
                  <div className="grid grid-cols-2 gap-2 mt-1.5 font-mono text-[11px]">
                    {tool.compliance.map((c) => (
                      <span key={c} className="px-2 py-1 bg-surface-2 rounded border border-hairline text-ink-muted flex items-center gap-1.5">
                        <CheckCircle2 className="h-3 w-3 text-status-emerald" />
                        <span className="truncate">{c}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-3 mt-4 border-t border-hairline flex items-center justify-between text-xs font-mono text-ink-tertiary">
              <span>Retention Window:</span>
              <span className="text-status-emerald">Zero-Day (ZDR) Available</span>
            </div>
          </div>

          {/* Card C: Developer & System Specs */}
          <div className="bg-surface-1 border border-hairline rounded-xl p-5 flex flex-col justify-between hover:border-hairline-strong transition-all">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-hairline">
                <div className="flex items-center gap-2">
                  <Terminal className="h-4 w-4 text-brand-lavender" />
                  <h3 className="text-sm font-semibold text-ink">Developer & System Specs</h3>
                </div>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-surface-2 border border-hairline text-ink-subtle">
                  Engine Spec
                </span>
              </div>

              <div className="space-y-4 pt-3">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-ink-tertiary">
                    Context Depth
                  </span>
                  <div className="flex items-baseline justify-between mt-0.5">
                    <span className="font-mono text-sm font-semibold text-ink">{tool.contextWindow}</span>
                    <span className="font-mono text-[11px] text-ink-subtle">~150k words</span>
                  </div>
                  <div className="w-full bg-surface-2 h-1.5 rounded-full overflow-hidden mt-1.5 border border-hairline">
                    <div className="bg-brand-lavender h-full rounded-full" style={{ width: "100%" }} />
                  </div>
                </div>

                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-ink-tertiary">
                    Supported Modalities
                  </span>
                  <div className="flex flex-wrap gap-1.5 mt-1 text-xs">
                    {tool.supportedModalities.map((m) => (
                      <span key={m} className="px-2 py-0.5 bg-surface-2 rounded border border-hairline text-ink-muted">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-ink-tertiary">
                    SDKs & Toolkits
                  </span>
                  <div className="space-y-1 font-mono text-[11px] text-ink-muted mt-1">
                    {tool.sdks.map((sdk) => (
                      <div key={sdk.name} className="p-1.5 bg-surface-2 rounded border border-hairline flex items-center justify-between">
                        <span className="text-ink-tertiary">{sdk.name}</span>
                        <div className="flex items-center gap-2">
                          <code className="text-ink">{sdk.command}</code>
                          <button
                            onClick={() => copyCommand(sdk.command, sdk.name)}
                            className="hover:text-white transition-colors"
                          >
                            {copiedSdkKey === sdk.name ? (
                              <Check className="h-3 w-3 text-status-emerald" />
                            ) : (
                              <Copy className="h-3 w-3" />
                            )}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-ink-tertiary">
                    Ecosystem Integrations
                  </span>
                  <p className="text-xs text-ink-subtle mt-0.5 leading-relaxed">
                    {tool.ecosystem.join(", ")}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-3 mt-4 border-t border-hairline flex items-center justify-between text-xs font-mono text-ink-tertiary">
              <span>Max Output Tokens:</span>
              <span className="text-ink font-medium">8,192 (64k Extended)</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Head-to-Head Comparison Teaser Banner */}
      <section className="w-full bg-surface-1 border-y border-hairline py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs bg-surface-2 text-brand-lavender border border-hairline px-2.5 py-1 rounded-full uppercase font-semibold">
              Versus Matrix
            </span>
            <p className="text-sm font-semibold text-ink">
              Compare Claude 3.7 Sonnet vs. OpenAI GPT-4o head-to-head
            </p>
          </div>
          <Link
            href="/compare/claude-3-7-sonnet-vs-gpt-4o"
            className="bg-brand-lavender hover:bg-[#828fff] text-white text-xs font-semibold px-4 py-2 rounded-lg flex items-center gap-1.5 transition-colors shadow-sm shrink-0"
          >
            <span>View Full Comparison</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>

      {/* SECTION 5: Tested Workflows Featuring This Tool */}
      {relatedWorkflows.length > 0 && (
        <section className="w-full py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="font-mono text-xs uppercase text-brand-lavender tracking-wider font-semibold">
                Production Implementations
              </span>
              <h2 className="text-xl font-semibold text-ink mt-0.5">Workflows Powered by {tool.name}</h2>
            </div>
            <Link href="/workflows" className="text-xs font-semibold text-brand-lavender hover:underline">
              Browse All Workflows →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {relatedWorkflows.map((wf) => (
              <Link
                key={wf.id}
                href={`/workflows/${wf.slug}`}
                className="p-5 bg-surface-1 hover:bg-surface-2 border border-hairline hover:border-hairline-strong rounded-xl transition-all duration-200 block group"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-surface-3 text-ink-subtle text-[10px] px-2 py-0.5 rounded border border-hairline font-mono">
                    {wf.role}
                  </span>
                  <span className="text-[#e4f222] font-mono text-[10px]">⚡ {wf.timeSaved}</span>
                </div>
                <h3 className="text-sm font-semibold text-ink group-hover:text-brand-lavender transition-colors mb-1">
                  {wf.title}
                </h3>
                <p className="text-xs text-ink-subtle line-clamp-2">{wf.description}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

