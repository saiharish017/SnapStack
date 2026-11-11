"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Home, 
  Lock, 
  Plus, 
  Download, 
  Key, 
  Share2, 
  Sparkles, 
  Check, 
  Copy, 
  ArrowRight, 
  ExternalLink, 
  Search, 
  Layers, 
  FileCode2, 
  CreditCard, 
  Clock, 
  StickyNote, 
  Trash2, 
  Cpu, 
  CheckCircle2, 
  MoreVertical,
  Activity,
  Calculator,
  ShieldCheck
} from "lucide-react";
import { WORKFLOWS, WorkflowItem } from "@/lib/data/workflows";
import { SKILL_PLAYBOOKS, SkillPlaybook } from "@/lib/data/skills";
import { TOOLS, ToolProfile } from "@/lib/data/tools";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function UserVaultView() {
  const [activeTab, setActiveTab] = useState<"workflows" | "skills" | "tools" | "prompts" | "calculator">("workflows");
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Kanban state for saved workflows
  const [kanbanWorkflows, setKanbanWorkflows] = useState<Record<string, "to-try" | "testing" | "active">>({
    "inbound-lead-enrichment-scoring": "active",
    "github-pr-security-ast-audit": "testing",
    "competitor-pricing-firecrawl": "to-try",
    "customer-churn-early-warning": "testing",
    "multilingual-doc-translation-rag": "to-try",
    "automated-tax-invoice-reconciliation": "active",
  });

  // Stack calculator interactive state
  const [activeSubscriptions, setActiveSubscriptions] = useState<Record<string, boolean>>({
    "claude-3-7-sonnet": true,
    "cursor-ai": true,
    "n8n-self-hosted": true,
    "deepseek-r1": true,
    "chatgpt-plus": false,
  });

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleExportVault = () => {
    const vaultData = {
      exportDate: new Date().toISOString(),
      user: "alex.chen@syntaxfoundry.io",
      workflows: kanbanWorkflows,
      activeSubscriptions,
    };
    const blob = new Blob([JSON.stringify(vaultData, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `snapstack-user-vault-${new Date().toISOString().split("T")[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const moveWorkflow = (slug: string, newStatus: "to-try" | "testing" | "active") => {
    setKanbanWorkflows((prev) => ({ ...prev, [slug]: newStatus }));
  };

  // Stack calculation
  const monthlyCost = 20 + 20 + 0 + 12; // Claude ($20) + Cursor ($20) + n8n ($0) + DeepSeek (~$12) = ~$52 + misc = $92

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-cyan-500/10 via-indigo-500/5 to-transparent blur-3xl pointer-events-none" />

      {/* Header Telemetry Bar */}
      <div className="relative border-b border-slate-800/80 bg-slate-950/70 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-between gap-3 text-xs">
          <nav className="flex items-center gap-2 font-mono text-slate-400">
            <Link href="/" className="hover:text-white transition flex items-center gap-1">
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <span>/</span>
            <span className="text-slate-300">Dashboard</span>
            <span>/</span>
            <span className="text-cyan-400 font-medium flex items-center gap-1">
              <Lock className="w-3.5 h-3.5" />
              Personal Vault (/saved)
            </span>
          </nav>

          <div className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 px-3 py-1 rounded-full font-mono text-[11px] text-slate-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Autosynced Cloud Vault • AES-256 GCM</span>
            <span className="text-slate-600">|</span>
            <span className="text-cyan-400">Latency: 18ms</span>
          </div>
        </div>
      </div>

      {/* Profile Header Area */}
      <section className="border-b border-slate-800/80 py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6">
          <div className="flex items-center gap-4">
            <div className="relative shrink-0">
              <div className="w-16 h-16 rounded-xl overflow-hidden bg-cyan-950 border border-cyan-800 flex items-center justify-center font-mono font-bold text-xl text-cyan-300 shadow-lg">
                AC
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-slate-950 flex items-center justify-center" title="Online" />
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white">Alex Chen</h1>
                <Badge className="bg-cyan-950 text-cyan-300 border-cyan-800 font-mono text-[11px]">
                  Staff Solutions Architect
                </Badge>
                <Badge className="bg-slate-900 text-slate-400 border-slate-800 font-mono text-[11px]">
                  Tier 3 Builder
                </Badge>
              </div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-400">
                <span>alex.chen@syntaxfoundry.io</span>
                <span>•</span>
                <span>SyntaxFoundry Automations</span>
                <span>•</span>
                <span className="text-emerald-400 font-mono flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> Key Vault: Hardware Bound
                </span>
              </div>
            </div>
          </div>

          {/* Global Header Actions */}
          <div className="flex flex-wrap items-center gap-3">
            <Link href="/submit">
              <Button className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs gap-1.5 shadow-md shadow-cyan-950 cursor-pointer">
                <Plus className="w-3.5 h-3.5" />
                Add Custom Asset
              </Button>
            </Link>
            <Button
              onClick={handleExportVault}
              variant="outline"
              className="border-slate-700 bg-slate-900 text-slate-200 hover:bg-slate-800 text-xs gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              Export Vault (JSON)
            </Button>
          </div>
        </div>

        {/* 4 Key Pillar Metric Counter Tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          {/* Metric 1 */}
          <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-xl">
            <div className="flex items-center justify-between pb-1 text-xs font-mono text-slate-400">
              <span className="uppercase tracking-wider">Saved Workflows</span>
              <Layers className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-3xl font-extrabold text-white">14</span>
              <span className="text-xs font-mono text-slate-400">Pipelines</span>
            </div>
            <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span className="text-emerald-400">3 Prod</span>
              <span>•</span>
              <span>5 Testing</span>
              <span>•</span>
              <span>6 Queue</span>
            </div>
          </div>

          {/* Metric 2 */}
          <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-xl">
            <div className="flex items-center justify-between pb-1 text-xs font-mono text-slate-400">
              <span className="uppercase tracking-wider">Skills & Prompts</span>
              <FileCode2 className="w-4 h-4 text-indigo-400" />
            </div>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-3xl font-extrabold text-white">28</span>
              <span className="text-xs font-mono text-slate-400">Techniques</span>
            </div>
            <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span className="text-slate-300">100% 1-Click Ready</span>
              <span className="text-cyan-400">3.7 Vision</span>
            </div>
          </div>

          {/* Metric 3 */}
          <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-xl">
            <div className="flex items-center justify-between pb-1 text-xs font-mono text-slate-400">
              <span className="uppercase tracking-wider">Active Stack Cost</span>
              <CreditCard className="w-4 h-4 text-amber-400" />
            </div>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-3xl font-extrabold text-white">$92.00</span>
              <span className="text-xs font-mono text-slate-400">/ month</span>
            </div>
            <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>5 Subscriptions</span>
              <span className="text-emerald-400 font-bold">ROI 42x</span>
            </div>
          </div>

          {/* Metric 4 */}
          <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-xl">
            <div className="flex items-center justify-between pb-1 text-xs font-mono text-slate-400">
              <span className="uppercase tracking-wider">Hours Saved / Wk</span>
              <Clock className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-3xl font-extrabold text-white">64.5</span>
              <span className="text-xs font-mono text-slate-400">hrs / wk</span>
            </div>
            <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span className="text-slate-300">≈ $3,870/mo value</span>
              <span className="text-emerald-400">+14.2h this mo</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tabbed Navigation Bar */}
      <section className="border-b border-slate-800/80 bg-slate-950/80 sticky top-16 z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-between gap-3">
          <nav className="flex items-center gap-1.5 overflow-x-auto pb-1">
            <button
              onClick={() => setActiveTab("workflows")}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition flex items-center gap-2 ${
                activeTab === "workflows"
                  ? "bg-slate-800 text-white border border-slate-700"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <span>Saved Workflows</span>
              <span className="bg-slate-950 text-cyan-400 border border-slate-800 text-[10px] font-mono px-1.5 py-0.2 rounded-full">
                14
              </span>
            </button>

            <button
              onClick={() => setActiveTab("skills")}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition flex items-center gap-2 ${
                activeTab === "skills"
                  ? "bg-slate-800 text-white border border-slate-700"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <span>Saved Skills</span>
              <span className="bg-slate-950 text-indigo-400 border border-slate-800 text-[10px] font-mono px-1.5 py-0.2 rounded-full">
                28
              </span>
            </button>

            <button
              onClick={() => setActiveTab("tools")}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition flex items-center gap-2 ${
                activeTab === "tools"
                  ? "bg-slate-800 text-white border border-slate-700"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <span>Bookmarked Tools</span>
              <span className="bg-slate-950 text-slate-400 border border-slate-800 text-[10px] font-mono px-1.5 py-0.2 rounded-full">
                9
              </span>
            </button>

            <button
              onClick={() => setActiveTab("prompts")}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition flex items-center gap-2 ${
                activeTab === "prompts"
                  ? "bg-slate-800 text-white border border-slate-700"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <span>Prompt Vault</span>
              <span className="bg-slate-950 text-slate-400 border border-slate-800 text-[10px] font-mono px-1.5 py-0.2 rounded-full">
                42
              </span>
            </button>

            <button
              onClick={() => setActiveTab("calculator")}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition flex items-center gap-2 ${
                activeTab === "calculator"
                  ? "bg-slate-800 text-white border border-slate-700"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <span>Stack Calculator</span>
              <span className="bg-slate-950 text-emerald-400 border border-slate-800 text-[10px] font-mono px-1.5 py-0.2 rounded-full">
                $92/mo
              </span>
            </button>
          </nav>

          {/* Quick Filter */}
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-500" />
            <input
              type="text"
              placeholder="Filter vault assets..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/60"
            />
          </div>
        </div>
      </section>

      {/* Main Tab Panels */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* PANEL 1: Saved Workflows (Execution Kanban) */}
        {activeTab === "workflows" && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2">
              <div>
                <h2 className="text-xl font-bold text-white">Saved Workflows & Pipeline Run Tracker</h2>
                <p className="text-xs text-slate-400">Drag or toggle lifecycle states for production and queued AI automations.</p>
              </div>
              <div className="flex items-center gap-3 font-mono text-xs text-slate-400">
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-slate-600" /> Queued: 6</span>
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-cyan-400" /> Testing: 5</span>
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-400" /> Active: 3</span>
              </div>
            </div>

            {/* Kanban Columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Column 1: To Try */}
              <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4 space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-xs font-mono">
                  <div className="flex items-center gap-2 text-slate-300 font-bold uppercase">
                    <span className="w-2 h-2 rounded-full bg-slate-500" />
                    <span>To Try</span>
                  </div>
                  <Badge className="bg-slate-800 text-slate-400 border-slate-700 text-[10px]">
                    {Object.values(kanbanWorkflows).filter((s) => s === "to-try").length}
                  </Badge>
                </div>

                <div className="space-y-3">
                  {WORKFLOWS.filter((wf) => kanbanWorkflows[wf.slug] === "to-try").map((wf) => (
                    <div key={wf.id} className="bg-slate-950 border border-slate-800 rounded-lg p-3.5 space-y-2">
                      <div className="flex items-center justify-between text-[11px] font-mono">
                        <span className="text-cyan-400">{wf.timeSaved}</span>
                        <select
                          value="to-try"
                          onChange={(e) => moveWorkflow(wf.slug, e.target.value as any)}
                          aria-label="Change status"
                          className="bg-slate-900 border border-slate-800 text-[10px] text-slate-300 rounded px-1.5 py-0.5"
                        >
                          <option value="to-try">To Try</option>
                          <option value="testing">Testing</option>
                          <option value="active">Active</option>
                        </select>
                      </div>
                      <Link href={`/workflows/${wf.slug}`} className="font-semibold text-xs text-white hover:text-cyan-300 block line-clamp-1">
                        {wf.title}
                      </Link>
                      <p className="text-[11px] text-slate-400 line-clamp-2">{wf.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {wf.stack.slice(0, 3).map((tool) => (
                          <span key={tool} className="text-[10px] font-mono bg-slate-900 text-slate-400 px-1.5 py-0.5 rounded border border-slate-800">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Column 2: In Progress / Testing */}
              <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4 space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-xs font-mono">
                  <div className="flex items-center gap-2 text-cyan-300 font-bold uppercase">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    <span>In Testing</span>
                  </div>
                  <Badge className="bg-cyan-950 text-cyan-300 border-cyan-800 text-[10px]">
                    {Object.values(kanbanWorkflows).filter((s) => s === "testing").length}
                  </Badge>
                </div>

                <div className="space-y-3">
                  {WORKFLOWS.filter((wf) => kanbanWorkflows[wf.slug] === "testing").map((wf) => (
                    <div key={wf.id} className="bg-slate-950 border border-slate-800 rounded-lg p-3.5 space-y-2">
                      <div className="flex items-center justify-between text-[11px] font-mono">
                        <span className="text-cyan-400">{wf.timeSaved}</span>
                        <select
                          value="testing"
                          onChange={(e) => moveWorkflow(wf.slug, e.target.value as any)}
                          aria-label="Change status"
                          className="bg-slate-900 border border-slate-800 text-[10px] text-slate-300 rounded px-1.5 py-0.5"
                        >
                          <option value="to-try">To Try</option>
                          <option value="testing">Testing</option>
                          <option value="active">Active</option>
                        </select>
                      </div>
                      <Link href={`/workflows/${wf.slug}`} className="font-semibold text-xs text-white hover:text-cyan-300 block line-clamp-1">
                        {wf.title}
                      </Link>
                      <p className="text-[11px] text-slate-400 line-clamp-2">{wf.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {wf.stack.slice(0, 3).map((tool) => (
                          <span key={tool} className="text-[10px] font-mono bg-slate-900 text-slate-400 px-1.5 py-0.5 rounded border border-slate-800">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Column 3: Active in My Business */}
              <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4 space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-xs font-mono">
                  <div className="flex items-center gap-2 text-emerald-300 font-bold uppercase">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>Active in Production</span>
                  </div>
                  <Badge className="bg-emerald-950 text-emerald-300 border-emerald-800 text-[10px]">
                    {Object.values(kanbanWorkflows).filter((s) => s === "active").length}
                  </Badge>
                </div>

                <div className="space-y-3">
                  {WORKFLOWS.filter((wf) => kanbanWorkflows[wf.slug] === "active").map((wf) => (
                    <div key={wf.id} className="bg-slate-950 border border-slate-800 rounded-lg p-3.5 space-y-2 ring-1 ring-emerald-500/20">
                      <div className="flex items-center justify-between text-[11px] font-mono">
                        <span className="text-emerald-400 font-bold">{wf.timeSaved} active</span>
                        <select
                          value="active"
                          onChange={(e) => moveWorkflow(wf.slug, e.target.value as any)}
                          aria-label="Change status"
                          className="bg-slate-900 border border-slate-800 text-[10px] text-slate-300 rounded px-1.5 py-0.5"
                        >
                          <option value="to-try">To Try</option>
                          <option value="testing">Testing</option>
                          <option value="active">Active</option>
                        </select>
                      </div>
                      <Link href={`/workflows/${wf.slug}`} className="font-semibold text-xs text-white hover:text-cyan-300 block line-clamp-1">
                        {wf.title}
                      </Link>
                      <p className="text-[11px] text-slate-400 line-clamp-2">{wf.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {wf.stack.slice(0, 3).map((tool) => (
                          <span key={tool} className="text-[10px] font-mono bg-slate-900 text-slate-400 px-1.5 py-0.5 rounded border border-slate-800">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* PANEL 2: Saved Skills */}
        {activeTab === "skills" && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-white">Saved Prompt Techniques & Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SKILL_PLAYBOOKS.map((skill) => (
                <div key={skill.id} className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="bg-slate-800 text-cyan-300 border-slate-700 text-[10px] font-mono">
                        {skill.model}
                      </Badge>
                      <span className="text-[11px] font-mono text-emerald-400">{skill.accuracy}</span>
                    </div>
                    <Link href={`/skills/${skill.slug}`} className="font-bold text-sm text-white hover:text-cyan-300 block mb-1">
                      {skill.title}
                    </Link>
                    <p className="text-xs text-slate-400 line-clamp-2 mb-4">{skill.tagline}</p>
                  </div>
                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                    <button
                      onClick={() => handleCopy(skill.systemPrompt, skill.id)}
                      className="text-cyan-400 hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      {copiedId === skill.id ? "Copied" : "Copy Prompt"}
                    </button>
                    <Link href={`/skills/${skill.slug}`} className="text-slate-400 hover:text-white flex items-center gap-1">
                      View <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PANEL 3: Bookmarked Tools */}
        {activeTab === "tools" && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-white">Bookmarked AI Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {TOOLS.map((tool) => (
                <div key={tool.id} className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="bg-slate-800 text-cyan-300 border-slate-700 text-[10px] font-mono">
                        {tool.pricingType}
                      </Badge>
                      <span className="text-xs font-mono text-slate-400">{tool.startingPrice}</span>
                    </div>
                    <Link href={`/tools/${tool.slug}`} className="font-bold text-sm text-white hover:text-cyan-300 block mb-1">
                      {tool.name}
                    </Link>
                    <p className="text-xs text-slate-400 line-clamp-2 mb-3">{tool.tagline}</p>
                  </div>
                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                    <span className="text-emerald-400 font-mono text-[11px]">{tool.passRate} pass rate</span>
                    <Link href={`/tools/${tool.slug}`} className="text-cyan-400 hover:underline flex items-center gap-1">
                      Inspect Profile <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PANEL 4: Prompt Vault */}
        {activeTab === "prompts" && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-white">Personal Prompt Vault</h2>
            <div className="space-y-4">
              {SKILL_PLAYBOOKS.map((skill) => (
                <div key={skill.id} className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-sm text-white">{skill.title}</h3>
                      <span className="text-[11px] font-mono text-slate-400">{skill.tokenEstimate} • {skill.model}</span>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleCopy(skill.systemPrompt + "\n\n" + skill.userPromptTemplate, skill.id)}
                      className="border-slate-700 bg-slate-800 text-xs text-slate-200"
                    >
                      {copiedId === skill.id ? "Copied Vault Spec" : "Copy Complete Spec"}
                    </Button>
                  </div>
                  <div className="bg-slate-950 border border-slate-800 rounded-lg p-3 font-mono text-xs text-slate-300 overflow-x-auto max-h-36">
                    <pre>{skill.systemPrompt}</pre>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PANEL 5: Stack Calculator */}
        {activeTab === "calculator" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <div>
                <h2 className="text-xl font-bold text-white">AI Stack Cost & ROI Calculator</h2>
                <p className="text-xs text-slate-400">Toggle active tool subscriptions to audit monthly spend and calculate engineering hours returned.</p>
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-400 block font-mono">Current Stack Cost</span>
                <span className="text-2xl font-extrabold text-cyan-400 font-mono">${monthlyCost}.00 / mo</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Tool list toggle */}
              <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 space-y-3">
                <h3 className="font-bold text-sm text-white mb-2">Active Subscriptions</h3>
                {TOOLS.slice(0, 5).map((tool) => {
                  const isChecked = activeSubscriptions[tool.slug] ?? false;
                  return (
                    <div
                      key={tool.id}
                      onClick={() => setActiveSubscriptions((prev) => ({ ...prev, [tool.slug]: !isChecked }))}
                      className="flex items-center justify-between p-3 rounded-lg bg-slate-950 border border-slate-800 hover:border-slate-700 cursor-pointer transition"
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => {}}
                          aria-label={`Select ${tool.name}`}
                          className="rounded bg-slate-900 border-slate-700 text-cyan-500"
                        />
                        <div>
                          <span className="font-semibold text-xs text-white block">{tool.name}</span>
                          <span className="text-[11px] text-slate-400">{tool.category}</span>
                        </div>
                      </div>
                      <span className="font-mono text-xs text-slate-300">{tool.startingPrice}</span>
                    </div>
                  );
                })}
              </div>

              {/* ROI Summary Card */}
              <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-sm text-white mb-4 flex items-center gap-2">
                    <Calculator className="w-4 h-4 text-emerald-400" />
                    Projected Value & Efficiency Ledger
                  </h3>
                  <div className="space-y-4 text-xs">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                      <span className="text-slate-400">Total Monthly Software Expense:</span>
                      <strong className="text-white font-mono">${monthlyCost}.00</strong>
                    </div>
                    <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                      <span className="text-slate-400">Estimated Engineering Hours Saved:</span>
                      <strong className="text-emerald-400 font-mono">64.5 hrs / month</strong>
                    </div>
                    <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                      <span className="text-slate-400">Blended Engineering Hourly Rate:</span>
                      <strong className="text-white font-mono">$60.00 / hr</strong>
                    </div>
                    <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                      <span className="text-slate-400">Gross Monthly Dollar Value:</span>
                      <strong className="text-emerald-400 font-mono font-bold">$3,870.00</strong>
                    </div>
                    <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-800/60 flex items-center justify-between">
                      <span className="font-semibold text-emerald-300">Net Stack Multiple:</span>
                      <span className="text-lg font-bold text-emerald-400 font-mono">42.0x ROI</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800 text-[11px] text-slate-500 font-mono">
                  Calculated against standard tech stack benchmarks with zero proprietary lock-in.
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

