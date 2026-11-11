"use client";

import * as React from "react";
import Link from "next/link";
import { toast } from "sonner";
import {
  Bookmark,
  Share2,
  CheckCircle2,
  Clock,
  Layers,
  Zap,
  Terminal,
  Play,
  Volume2,
  ExternalLink,
  Shield,
  HelpCircle,
  Copy,
  ChevronDown,
  ArrowRight,
  Code2,
  Send,
  Workflow as WorkflowIcon,
  Check,
  AlertTriangle,
  FileCode,
  Bell,
} from "lucide-react";
import { WorkflowItem } from "@/lib/data/workflows";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface WorkflowRecipeViewProps {
  workflow: WorkflowItem;
  relatedWorkflows: WorkflowItem[];
}

export function WorkflowRecipeView({ workflow, relatedWorkflows }: WorkflowRecipeViewProps) {
  const [isSaved, setIsSaved] = React.useState(false);
  const [savedCount, setSavedCount] = React.useState(142);
  const [videoMode, setVideoMode] = React.useState<"fast" | "full">("full");
  const [isVideoPlaying, setIsVideoPlaying] = React.useState(false);
  const [selectedNodeId, setSelectedNodeId] = React.useState<string>("node-1");
  const [copiedCodeKey, setCopiedCodeKey] = React.useState<string | null>(null);

  const toggleSave = () => {
    setIsSaved((prev) => {
      const next = !prev;
      setSavedCount((c) => (next ? c + 1 : c - 1));
      toast(next ? "Saved to your Personal Vault!" : "Removed from saved workflows.");
      return next;
    });
  };

  const copyShareLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Recipe link copied to clipboard!");
  };

  const copySnippet = (code: string, key: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeKey(key);
    toast.success("Snippet copied to clipboard!");
    setTimeout(() => setCopiedCodeKey(null), 2000);
  };

  return (
    <div className="w-full">
      {/* SECTION 1: BREADCRUMBS & META BAR */}
      <section className="w-full bg-surface-1 border-b border-hairline py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-6">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumbs" className="flex items-center gap-2 font-mono text-xs text-ink-tertiary">
            <Link href="/" className="hover:text-ink transition-colors">Home</Link>
            <span>/</span>
            <Link href="/workflows" className="hover:text-ink transition-colors">Workflows</Link>
            <span>/</span>
            <span className="text-ink-subtle">{workflow.role}</span>
            <span>/</span>
            <span className="text-ink-muted truncate max-w-xs md:max-w-md">{workflow.title}</span>
          </nav>

          {/* Main Headline Block */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <div className="space-y-3 max-w-4xl">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-surface-2 border border-hairline text-ink-muted text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-status-emerald animate-pulse" />
                RECIPE #{workflow.id.toUpperCase()} • PRODUCTION VERIFIED
              </div>
              <h1 className="text-3xl sm:text-4xl font-semibold text-ink tracking-tight">
                {workflow.title}
              </h1>
              <p className="text-base sm:text-lg text-ink-subtle leading-relaxed">
                {workflow.description}
              </p>
            </div>

            {/* Sticky Action Suite */}
            <div className="flex items-center gap-3 shrink-0 self-start">
              <button
                onClick={toggleSave}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg border text-xs font-semibold transition-all ${
                  isSaved
                    ? "bg-surface-3 border-brand-lavender text-brand-lavender"
                    : "bg-surface-2 border-hairline text-ink hover:bg-surface-3"
                }`}
              >
                <Bookmark className={`h-4 w-4 ${isSaved ? "fill-brand-lavender" : ""}`} />
                <span>{isSaved ? "Saved" : "Save Recipe"}</span>
                <span className="font-mono text-[10px] bg-surface-4 px-1.5 py-0.5 rounded text-ink-muted">
                  {savedCount}
                </span>
              </button>

              <button
                onClick={copyShareLink}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-lavender hover:bg-[#828fff] text-white text-xs font-semibold transition-all shadow-sm"
              >
                <Share2 className="h-4 w-4" />
                <span>Share Recipe</span>
              </button>
            </div>
          </div>

          {/* Meta Badges Ribbon */}
          <div className="flex flex-wrap items-center gap-2.5 pt-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-2 border border-hairline text-ink font-mono text-xs">
              <Terminal className="h-3.5 w-3.5 text-brand-lavender" />
              {workflow.role}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-2 border border-hairline text-ink-muted font-mono text-xs">
              <Clock className="h-3.5 w-3.5 text-ink-subtle" />
              {workflow.metrics.setupTime}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-2 border border-hairline text-ink-muted font-mono text-xs">
              <Layers className="h-3.5 w-3.5 text-ink-subtle" />
              {workflow.difficulty} / {workflow.orchestrator}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-2 border border-hairline text-[#e4f222] font-mono text-xs">
              <Zap className="h-3.5 w-3.5 text-[#e4f222]" />
              ~{workflow.timeSaved} saved
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-3 border border-hairline text-ink text-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-status-emerald opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-status-emerald" />
              </span>
              Verified Working ({workflow.verifiedDate})
            </span>
          </div>
        </div>
      </section>

      {/* SECTION 2: INTERACTIVE PIPELINE FLOWCHART */}
      <section className="w-full bg-canvas py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-3">
            <div>
              <span className="font-mono text-xs uppercase text-brand-lavender tracking-wider font-semibold">
                Step-By-Step Flow
              </span>
              <h2 className="text-2xl font-semibold text-ink mt-1">Interactive Execution Architecture</h2>
              <p className="text-sm text-ink-subtle mt-0.5">
                Click any operational node to cross-inspect tool capabilities, token footprints, and configs.
              </p>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs text-ink-tertiary">
              <span className="inline-block w-2 h-2 rounded-full bg-status-emerald" />
              Deterministic Runtime Pipeline (v2.4.1)
            </div>
          </div>

          {/* Flow Canvas */}
          <div
            className="w-full bg-surface-1 border border-hairline rounded-2xl p-6 md:p-8 relative overflow-hidden shadow-xl"
            style={{
              backgroundImage: "radial-gradient(#201f23 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative z-10 items-stretch">
              {workflow.nodes.map((node) => {
                const isSelected = selectedNodeId === node.id;
                return (
                  <div
                    key={node.id}
                    onClick={() => setSelectedNodeId(node.id)}
                    className={`cursor-pointer p-4 rounded-xl transition-all flex flex-col justify-between group shadow-sm border ${
                      isSelected
                        ? "bg-surface-3 border-brand-lavender ring-1 ring-brand-lavender"
                        : "bg-surface-2 hover:bg-surface-3 border-hairline hover:border-hairline-strong"
                    }`}
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[10px] text-ink-tertiary bg-surface-4 px-2 py-0.5 rounded border border-hairline">
                          {node.nodeNumber}
                        </span>
                        <Code2 className="h-3.5 w-3.5 text-brand-lavender" />
                      </div>
                      <p className="text-xs font-semibold text-ink group-hover:text-brand-lavender transition-colors">
                        {node.name}
                      </p>
                      <p className="text-[11px] text-ink-subtle leading-snug">{node.desc}</p>
                    </div>

                    <div className="mt-4 pt-3 bg-surface-4/60 rounded-lg p-2 font-mono text-[10px] text-ink-tertiary space-y-1 border border-hairline">
                      <span className="text-ink-muted flex items-center gap-1">
                        <span className="text-brand-lavender">●</span> {node.type}
                      </span>
                      <span className="block truncate">{node.payloadInfo}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Telemetry Metrics Bar */}
            <div className="mt-6 pt-4 border-t border-hairline flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-ink-subtle">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-status-emerald" /> End-to-end duration: {workflow.metrics.avgLatency}
                </span>
                <span className="hidden sm:inline">•</span>
                <span className="hidden sm:inline">Audit confidence score: 98.4%</span>
              </div>
              <div className="text-ink-tertiary text-[11px]">Payload encryption: TLS 1.3 • Zero retention tier</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: MASTER VIDEO WALKTHROUGH */}
      <section className="w-full bg-surface-1 border-y border-hairline py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="font-mono text-xs uppercase text-brand-lavender tracking-wider font-semibold">
                Video Masterclass
              </span>
              <h2 className="text-2xl font-semibold text-ink mt-0.5">Execution & Configuration Walkthrough</h2>
            </div>
            <div className="inline-flex p-1 bg-surface-2 border border-hairline rounded-lg">
              <button
                onClick={() => setVideoMode("fast")}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors flex items-center gap-1.5 ${
                  videoMode === "fast" ? "bg-surface-4 text-ink shadow-sm" : "text-ink-subtle hover:text-ink"
                }`}
              >
                <Play className="h-3 w-3" /> 60s Fast Demo
              </button>
              <button
                onClick={() => setVideoMode("full")}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors flex items-center gap-1.5 ${
                  videoMode === "full" ? "bg-surface-4 text-ink shadow-sm" : "text-ink-subtle hover:text-ink"
                }`}
              >
                <VideoIcon className="h-3 w-3 text-brand-lavender" /> Full Tutorial ({workflow.videoDuration} HD)
              </button>
            </div>
          </div>

          {/* Video Facade Player */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-surface-2 border border-hairline group cursor-pointer shadow-2xl flex flex-col justify-between p-4 sm:p-6">
            {!isVideoPlaying ? (
              <div
                onClick={() => setIsVideoPlaying(true)}
                className="absolute inset-0 flex flex-col justify-between p-6 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "linear-gradient(to top, rgba(1, 1, 2, 0.95), rgba(1, 1, 2, 0.4)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuBRd7X6vgtGPG97HVKwFaExXjyqVkg44KYIGfRDRayW6y_WhOBYjsu5K7R5yK7fZbqdq9ECR_d552EvHLQahBKRn3DSQ_aCYCqt1r1akin3Njgnq1E_FOV_W3K6ocWPcc7ut2xT8GzCZ8FX8foO1vJnXtgcJfrK2wiwoJLyRHijTBCCh1b9CwmDw3CvcF2iHaUrSV_0ajlAk5NZxBOenwpFJVYAxHT-_mq7illNB0Y')",
                }}
              >
                {/* Top Status */}
                <div className="flex items-center justify-between w-full relative z-10">
                  <div className="flex items-center gap-2">
                    <span className="bg-canvas/80 backdrop-blur-md font-mono text-[11px] text-ink px-2.5 py-1 rounded-md border border-hairline">
                      00:00 - Architecture Overview
                    </span>
                    <span className="bg-brand-lavender/20 text-brand-lavender font-mono text-[11px] px-2 py-0.5 rounded border border-brand-lavender/30">
                      1080p 60fps
                    </span>
                  </div>
                  <span className="bg-surface-1/80 font-mono text-[11px] text-ink-muted px-2.5 py-1 rounded-md border border-hairline">
                    {workflow.videoDuration} HD
                  </span>
                </div>

                {/* Glowing Center Play Trigger */}
                <div className="relative z-10 self-center flex flex-col items-center gap-3 group-hover:scale-105 transition-transform duration-300">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-brand-lavender text-white flex items-center justify-center shadow-2xl shadow-brand-lavender/50">
                    <Play className="h-8 w-8 ml-1 fill-white" />
                  </div>
                  <span className="text-xs font-semibold text-ink uppercase tracking-wider bg-canvas/80 px-3 py-1 rounded-full border border-hairline backdrop-blur-sm">
                    Click to Play Unedited Breakdown
                  </span>
                </div>

                {/* Bottom Timeline Preview */}
                <div className="relative z-10 w-full space-y-2">
                  <div className="w-full bg-surface-3/80 h-1.5 rounded-full overflow-hidden flex relative border border-hairline">
                    <div className="w-1/4 bg-brand-lavender h-full" />
                    <div className="w-1 bg-canvas h-full" />
                    <div className="w-1/3 bg-surface-4 h-full" />
                  </div>
                  <div className="flex justify-between font-mono text-[11px] text-ink-tertiary">
                    <span>00:00 / {workflow.videoDuration}</span>
                    <span className="hidden sm:inline">{workflow.videoTitle}</span>
                    <span className="flex items-center gap-1">
                      <Volume2 className="h-3 w-3" /> 100%
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${workflow.youtubeId || "dQw4w9WgXcQ"}?autoplay=1&rel=0`}
                title={workflow.title}
                className="absolute inset-0 w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>

          {/* Creator Attribution Bar */}
          <div className="p-4 rounded-xl bg-surface-2 border border-hairline flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img
                src={workflow.creator.avatar}
                alt={workflow.creator.name}
                className="w-11 h-11 rounded-full object-cover border border-hairline"
              />
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-ink">{workflow.creator.name}</span>
                  {workflow.creator.verified && (
                    <span className="inline-flex items-center gap-0.5 font-mono text-[10px] bg-brand-lavender/10 text-brand-lavender px-1.5 py-0.2 rounded border border-brand-lavender/20">
                      <CheckCircle2 className="h-3 w-3" /> Verified Architect
                    </span>
                  )}
                </div>
                <p className="text-xs text-ink-subtle">{workflow.creator.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => toast.success(`Subscribed to ${workflow.creator.name}'s workflow updates!`)}
                className="px-3.5 py-1.5 rounded-lg bg-surface-3 hover:bg-surface-4 text-ink text-xs font-medium border border-hairline transition-colors flex items-center gap-1.5"
              >
                <Bell className="h-3.5 w-3.5" /> Follow Author
              </button>
              <a
                href={`https://youtube.com/watch?v=${workflow.youtubeId || "dQw4w9WgXcQ"}`}
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-1.5 rounded-lg bg-surface-1 hover:bg-surface-3 text-ink-muted hover:text-ink text-xs font-medium border border-hairline transition-colors flex items-center gap-1"
              >
                <ExternalLink className="h-3.5 w-3.5" /> YouTube Mirror
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: REQUIRED TOOLS & COST DECOMPOSITION */}
      <section className="w-full bg-canvas py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <span className="font-mono text-xs uppercase text-brand-lavender tracking-wider font-semibold">
              Stack Decomposition
            </span>
            <h2 className="text-2xl font-semibold text-ink mt-0.5">Required Tools & Operating Cost</h2>
            <p className="text-sm text-ink-subtle">
              Audit the components required to host this autonomous CI/CD security step.
            </p>
          </div>

          {/* 4 Tool Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {workflow.tools.map((tool) => (
              <div
                key={tool.name}
                className="bg-surface-1 border border-hairline hover:border-hairline-strong p-5 rounded-xl flex flex-col justify-between transition-colors shadow-sm"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] text-ink-tertiary">{tool.toolNumber}</span>
                    <span className="bg-surface-2 border border-hairline text-ink-muted text-[10px] px-2 py-0.5 rounded font-mono">
                      {tool.category}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-ink mt-2">{tool.name}</h3>
                  <p className="text-xs text-ink-subtle leading-relaxed">{tool.description}</p>
                </div>

                <div className="mt-5 pt-3 space-y-1.5 bg-surface-2/60 p-3 rounded-lg border border-hairline">
                  <div className="flex justify-between font-mono text-[11px]">
                    <span className="text-ink-tertiary">Cost basis:</span>
                    <span className="text-ink font-medium">{tool.costBasis}</span>
                  </div>
                  <div className="flex justify-between font-mono text-[11px]">
                    <span className="text-ink-tertiary">Integration:</span>
                    <span className="text-ink font-medium">{tool.integration}</span>
                  </div>
                  <Link
                    href={`/tools`}
                    className="inline-flex items-center gap-1 text-brand-lavender hover:text-[#828fff] text-xs pt-1 font-medium"
                  >
                    View Tool Directory →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Total Stack Cost Summary Banner */}
          <div className="p-6 sm:p-8 rounded-2xl bg-surface-2 border border-hairline relative overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center relative z-10">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-status-emerald" />
                  <span className="text-sm font-semibold text-ink">Free Tier Feasibility Guarantee</span>
                </div>
                <p className="text-xs text-ink-subtle leading-relaxed">
                  100% Free-Tier Feasible using self-hosted n8n in Docker alongside open-source Semgrep rules. Pay only Anthropic API usage.
                </p>
              </div>

              <div className="bg-surface-3 border border-hairline p-4 rounded-xl space-y-1">
                <span className="font-mono text-[10px] text-ink-tertiary uppercase">
                  Estimated Monthly Operating Cost
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-semibold text-ink">{workflow.metrics.estimatedCost}</span>
                </div>
                <p className="text-[11px] text-ink-tertiary">Assuming ~500 production PR audits / month on team scale.</p>
              </div>

              <div className="bg-surface-3 border border-hairline p-4 rounded-xl space-y-1">
                <span className="font-mono text-[10px] text-[#e4f222] uppercase font-semibold">
                  Net Engineering ROI
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-semibold text-[#e4f222]">{workflow.metrics.netMonthlyRoi}</span>
                  <span className="font-mono text-xs text-ink-subtle">net value</span>
                </div>
                <p className="text-[11px] text-ink-tertiary">Based on 18 saved staff-hours / week at $75/hr blended rate.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: "CAN I DO THIS FOR FREE IN CHATGPT?" */}
      <section className="w-full bg-surface-1 border-b border-hairline py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-surface-2 border border-hairline rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-surface-4 border border-hairline font-mono text-[11px] text-ink-muted">
                  <HelpCircle className="h-3.5 w-3.5 text-brand-lavender" />
                  Zero-Budget Alternative Analysis
                </div>
                <h3 className="text-xl font-semibold text-ink">Can I do this for free inside ChatGPT Web?</h3>
              </div>
              <span className="px-3 py-1 rounded-full bg-surface-3 border border-hairline font-mono text-xs text-ink-subtle self-start sm:self-auto">
                {workflow.canIDoInChatGPT.status}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-surface-3 border border-hairline space-y-2.5">
                <span className="font-mono text-xs text-brand-lavender uppercase font-semibold flex items-center gap-1.5">
                  <Zap className="h-3.5 w-3.5" /> This SnapStack Automation
                </span>
                <ul className="text-xs text-ink-muted space-y-2">
                  {workflow.canIDoInChatGPT.flowcraftPerks.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-status-emerald shrink-0 mt-0.5" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-surface-3 border border-hairline space-y-2.5">
                <span className="font-mono text-xs text-ink-muted uppercase font-semibold flex items-center gap-1.5">
                  <FileCode className="h-3.5 w-3.5" /> ChatGPT Free Web Interface
                </span>
                <ul className="text-xs text-ink-muted space-y-2">
                  {workflow.canIDoInChatGPT.chatGptLimitations.map((l) => (
                    <li key={l} className="flex items-start gap-2 text-ink-tertiary">
                      <AlertTriangle className="h-3.5 w-3.5 text-amber-500 shrink-0 mt-0.5" />
                      <span>{l}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: STEP-BY-STEP SOP ACCORDION */}
      <section className="w-full bg-canvas py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="font-mono text-xs uppercase text-brand-lavender tracking-wider font-semibold">
              Deployment Playbook
            </span>
            <h2 className="text-2xl font-semibold text-ink mt-0.5">Step-by-Step SOP Setup</h2>
            <p className="text-sm text-ink-subtle">
              Copy-pasteable configurations to deploy this workflow in under 20 minutes.
            </p>
          </div>

          <Accordion type="single" collapsible defaultValue="step-1" className="space-y-3">
            {workflow.sopSteps.map((step) => (
              <AccordionItem
                key={step.stepNumber}
                value={`step-${step.stepNumber}`}
                className="bg-surface-1 border border-hairline rounded-xl px-5 py-1"
              >
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3 text-left">
                    <span className="font-mono text-xs bg-surface-3 border border-hairline text-brand-lavender px-2 py-0.5 rounded">
                      STEP {step.stepNumber}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-ink">{step.title}</p>
                      <p className="text-[11px] font-mono text-ink-tertiary">{step.subtitle}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-3 pt-2">
                  <p className="text-xs text-ink-muted leading-relaxed">{step.description}</p>
                  {step.codeSnippet && (
                    <div className="relative bg-surface-4 rounded-lg p-3 font-mono text-xs text-ink-muted border border-hairline">
                      <div className="flex items-center justify-between pb-2 mb-2 border-b border-hairline text-[10px] text-ink-tertiary">
                        <span>{step.language || "bash"}</span>
                        <button
                          onClick={() => copySnippet(step.codeSnippet!, `step-${step.stepNumber}`)}
                          className="flex items-center gap-1 hover:text-ink transition-colors"
                        >
                          {copiedCodeKey === `step-${step.stepNumber}` ? (
                            <>
                              <Check className="h-3 w-3 text-status-emerald" /> Copied
                            </>
                          ) : (
                            <>
                              <Copy className="h-3 w-3" /> Copy
                            </>
                          )}
                        </button>
                      </div>
                      <pre className="overflow-x-auto leading-relaxed">
                        <code>{step.codeSnippet}</code>
                      </pre>
                    </div>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* SECTION 7: DOWNLOADABLE JSON BLUEPRINT SPECIFICATION */}
      <section className="w-full bg-surface-1 border-t border-hairline py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="font-mono text-xs text-brand-lavender uppercase tracking-wider font-semibold">
                Import Ready
              </span>
              <h2 className="text-xl font-semibold text-ink">Production JSON Blueprint Spec</h2>
            </div>
            <button
              onClick={() => copySnippet(JSON.stringify(workflow.blueprintSpec, null, 2), "blueprint-full")}
              className="bg-brand-lavender hover:bg-[#828fff] text-white text-xs px-4 py-2 rounded-lg font-semibold transition-colors flex items-center gap-1.5 shadow-sm self-start sm:self-auto"
            >
              {copiedCodeKey === "blueprint-full" ? (
                <>
                  <Check className="h-3.5 w-3.5" /> Blueprint Copied!
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" /> 1-Click Copy Full Blueprint
                </>
              )}
            </button>
          </div>

          <div className="relative bg-surface-4 p-4 rounded-xl font-mono text-xs text-ink-muted overflow-x-auto shadow-inner border border-hairline">
            <pre className="leading-relaxed">
              <code>{JSON.stringify(workflow.blueprintSpec, null, 2)}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* SECTION 8: RELATED WORKFLOWS */}
      {relatedWorkflows.length > 0 && (
        <section className="w-full bg-canvas py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="font-mono text-xs uppercase text-brand-lavender tracking-wider font-semibold">
                  Cross-Functional Stacks
                </span>
                <h2 className="text-xl font-semibold text-ink mt-0.5">Related Tested Workflows</h2>
              </div>
              <Link
                href="/workflows"
                className="text-xs font-semibold text-brand-lavender hover:text-[#828fff] flex items-center gap-1"
              >
                Browse All 42 Workflows →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedWorkflows.map((rw) => (
                <Link
                  key={rw.id}
                  href={`/workflows/${rw.slug}`}
                  className="p-5 bg-surface-1 hover:bg-surface-2 border border-hairline hover:border-hairline-strong rounded-xl transition-all duration-200 block group"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-surface-3 text-ink-subtle text-[10px] px-2 py-0.5 rounded border border-hairline font-mono">
                      {rw.role}
                    </span>
                    <span className="text-[#e4f222] font-mono text-[10px]">⚡ {rw.timeSaved}</span>
                  </div>
                  <h3 className="text-sm font-semibold text-ink group-hover:text-brand-lavender transition-colors mb-1">
                    {rw.title}
                  </h3>
                  <p className="text-xs text-ink-subtle line-clamp-2">{rw.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

function VideoIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="23 7 16 12 23 17 23 7" />
      <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
    </svg>
  );
}

