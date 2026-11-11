"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  CheckCircle2, 
  UploadCloud, 
  Play, 
  Terminal, 
  Cpu, 
  Layers, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  HelpCircle, 
  Check, 
  Code2, 
  ExternalLink,
  Plus,
  Trash2
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function SubmissionPortalView() {
  const [submissionType, setSubmissionType] = useState<"workflow" | "skill" | "tool">("workflow");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form State
  const [wfTitle, setWfTitle] = useState("Autonomous Multi-Agent GitHub PR Security & AST Audit");
  const [wfVideoUrl, setWfVideoUrl] = useState("https://youtube.com/watch?v=dQw4w9WgXcQ");
  const [wfTimestamp, setWfTimestamp] = useState("01:15");
  const [wfFormat, setWfFormat] = useState<"short" | "tutorial">("tutorial");
  const [wfRole, setWfRole] = useState("Software Engineers");
  const [selectedTools, setSelectedTools] = useState<string[]>(["Claude 3.7 Sonnet", "n8n Automations", "GitHub Actions"]);
  const [wfPrompt, setWfPrompt] = useState(`You are an elite Application Security Engineer auditing AST changes in pull request commits.
1. Scan AST diffs for unprotected eval(), unescaped shell execution, and tainted SQL arguments.
2. Flag any external dependencies without fixed semantic hash pins.
3. Emit output strictly adhering to FC-SECURITY-SARIF JSON format with confidence scores.`);
  const [creatorName, setCreatorName] = useState("Alex Vance");
  const [creatorTwitter, setCreatorTwitter] = useState("@vance_automates");

  const handleAddTool = () => {
    const newTool = prompt("Enter tool name to add (e.g. Cursor, DeepSeek R1, Supabase):");
    if (newTool && !selectedTools.includes(newTool)) {
      setSelectedTools([...selectedTools, newTool]);
    }
  };

  const handleRemoveTool = (tool: string) => {
    setSelectedTools(selectedTools.filter((t) => t !== tool));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 900);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-cyan-500/10 via-indigo-500/5 to-transparent blur-3xl pointer-events-none" />

      {/* Telemetry Bar */}
      <div className="relative border-b border-slate-800/80 bg-slate-950/70 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-[11px]">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="uppercase tracking-wider font-semibold">
              100% Free Community Submission • Zero Pay-to-Play • Rigorous Technical Audit
            </span>
          </div>

          <div className="flex items-center gap-3 font-mono text-[11px] text-slate-400">
            <span className="flex items-center gap-1 text-emerald-400">
              <ShieldCheck className="w-3.5 h-3.5" /> AUDIT PROTOCOL v4.1
            </span>
            <span className="text-slate-700">•</span>
            <span className="text-slate-300">REPRODUCIBILITY REQUIREMENT: STRICT</span>
          </div>
        </div>
      </div>

      {/* Hero Header Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col gap-6 max-w-3xl mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-400 text-xs font-mono uppercase tracking-wider self-start">
            // INGESTION PIPELINE
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Submit to the <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">SnapStack Index</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Contribute verified AI automation pipelines, prompt engineering playbooks, or developer tools. Every entry is independently audited by software engineers for reproducible proof.
          </p>
        </div>

        {/* Segmented Control Switcher (3 Tabs) */}
        <div className="bg-slate-900 border border-slate-800 p-1.5 rounded-xl flex flex-col sm:flex-row items-stretch gap-1.5 shadow-sm">
          <button
            onClick={() => { setSubmissionType("workflow"); setIsSubmitted(false); }}
            className={`flex-1 flex items-center justify-center gap-3 px-4 py-3 rounded-lg text-left transition ${
              submissionType === "workflow"
                ? "bg-slate-800 text-white shadow border border-slate-700"
                : "text-slate-400 hover:text-white hover:bg-slate-800/50"
            }`}
          >
            <Layers className="w-5 h-5 text-cyan-400 shrink-0" />
            <div>
              <span className="font-semibold text-xs block">Option A: Submit a Workflow</span>
              <span className="text-[11px] text-slate-400 hidden md:block">Multi-Tool Automation Pipeline (.json + Video)</span>
            </div>
          </button>

          <button
            onClick={() => { setSubmissionType("skill"); setIsSubmitted(false); }}
            className={`flex-1 flex items-center justify-center gap-3 px-4 py-3 rounded-lg text-left transition ${
              submissionType === "skill"
                ? "bg-slate-800 text-white shadow border border-slate-700"
                : "text-slate-400 hover:text-white hover:bg-slate-800/50"
            }`}
          >
            <Terminal className="w-5 h-5 text-indigo-400 shrink-0" />
            <div>
              <span className="font-semibold text-xs block">Option B: Submit an AI Skill</span>
              <span className="text-[11px] text-slate-400 hidden md:block">Prompt Technique, AST Hooks & Guardrails</span>
            </div>
          </button>

          <button
            onClick={() => { setSubmissionType("tool"); setIsSubmitted(false); }}
            className={`flex-1 flex items-center justify-center gap-3 px-4 py-3 rounded-lg text-left transition ${
              submissionType === "tool"
                ? "bg-slate-800 text-white shadow border border-slate-700"
                : "text-slate-400 hover:text-white hover:bg-slate-800/50"
            }`}
          >
            <Cpu className="w-5 h-5 text-emerald-400 shrink-0" />
            <div>
              <span className="font-semibold text-xs block">Option C: Submit an AI Tool</span>
              <span className="text-[11px] text-slate-400 hidden md:block">Founder Software Indexing & Verified Sandbox</span>
            </div>
          </button>
        </div>
      </section>

      {/* Main Content Form Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {isSubmitted ? (
          <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-8 text-center max-w-xl mx-auto space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-950/60 border border-emerald-800 flex items-center justify-center text-emerald-400 mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h2 className="text-2xl font-bold text-white">Submission Successfully Received!</h2>
            <p className="text-xs text-slate-300 leading-relaxed">
              Your spec has entered our automated verification pipeline. Our core research team will benchmark the runtime execution against schema invariants and notify you upon publication.
            </p>
            <div className="pt-2">
              <Button
                onClick={() => setIsSubmitted(false)}
                variant="outline"
                className="border-slate-700 bg-slate-800 text-xs text-white"
              >
                Submit another spec
              </Button>
            </div>
          </div>
        ) : (
          <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-6 lg:p-8 shadow-xl">
            {/* FORM A: CREATOR WORKFLOW */}
            {submissionType === "workflow" && (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-cyan-950 border border-cyan-800 flex items-center justify-center text-cyan-400">
                      <Layers className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-white">Workflow Telemetry Specification</h2>
                      <p className="text-xs text-slate-400">Submit reproducible automation pipelines with verifiable video proof</p>
                    </div>
                  </div>
                  <span className="font-mono text-[11px] text-cyan-400 bg-cyan-950/80 px-2.5 py-1 rounded border border-cyan-800/60">
                    SCHEMA: FC-WORKFLOW-V2
                  </span>
                </div>

                {/* Video URL & Format Row */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  <div className="lg:col-span-8 space-y-1.5">
                    <label className="flex items-center justify-between text-xs font-semibold text-slate-200">
                      <span>YouTube Video Proof URL <span className="text-cyan-400">*</span></span>
                      <span className="text-slate-500 font-mono text-[10px]">Must include full execution run</span>
                    </label>
                    <input
                      type="url"
                      required
                      value={wfVideoUrl}
                      onChange={(e) => setWfVideoUrl(e.target.value)}
                      placeholder="https://www.youtube.com/watch?v=..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 font-mono focus:outline-none focus:border-cyan-500/60"
                    />
                  </div>

                  <div className="lg:col-span-4 space-y-1.5">
                    <label className="flex items-center justify-between text-xs font-semibold text-slate-200">
                      <span>Start Timestamp</span>
                      <span className="text-slate-500 font-mono text-[10px]">SKIP INTRO</span>
                    </label>
                    <input
                      type="text"
                      value={wfTimestamp}
                      onChange={(e) => setWfTimestamp(e.target.value)}
                      placeholder="01:15"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 font-mono focus:outline-none focus:border-cyan-500/60"
                    />
                  </div>
                </div>

                {/* Video Format & Live Thumbnail */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  <div className="lg:col-span-4 space-y-2">
                    <span className="text-xs font-semibold text-slate-200 block">Video Format Specification</span>
                    <div className="grid grid-cols-2 gap-2">
                      <label
                        onClick={() => setWfFormat("short")}
                        className={`p-3 rounded-lg border text-xs cursor-pointer flex flex-col gap-0.5 transition ${
                          wfFormat === "short" ? "bg-slate-950 border-cyan-500 text-white" : "bg-slate-950/40 border-slate-800 text-slate-400"
                        }`}
                      >
                        <span className="font-semibold">Short Form</span>
                        <span className="text-[10px] text-slate-500">&lt;60s demo</span>
                      </label>
                      <label
                        onClick={() => setWfFormat("tutorial")}
                        className={`p-3 rounded-lg border text-xs cursor-pointer flex flex-col gap-0.5 transition ${
                          wfFormat === "tutorial" ? "bg-slate-950 border-cyan-500 text-white" : "bg-slate-950/40 border-slate-800 text-slate-400"
                        }`}
                      >
                        <span className="font-semibold">Full Tutorial</span>
                        <span className="text-[10px] text-slate-500">&gt;3m deep dive</span>
                      </label>
                    </div>
                  </div>

                  <div className="lg:col-span-8 bg-slate-950 border border-slate-800 rounded-xl p-4 flex flex-col sm:flex-row items-center gap-4">
                    <div className="relative w-full sm:w-48 h-28 rounded-lg overflow-hidden bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                      <div className="w-10 h-10 rounded-full bg-cyan-500/20 border border-cyan-400 flex items-center justify-center text-cyan-300">
                        <Play className="w-5 h-5 ml-0.5" />
                      </div>
                      <span className="absolute bottom-1.5 right-1.5 bg-slate-950 text-white font-mono text-[10px] px-1.5 py-0.5 rounded">
                        08:42
                      </span>
                    </div>
                    <div className="min-w-0 flex-1 space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        <span className="font-mono text-[10px] text-slate-400 uppercase">Dynamic Preview Verified</span>
                      </div>
                      <p className="font-bold text-xs text-white truncate">{wfTitle}</p>
                      <p className="text-[11px] text-slate-400">Direct pipeline execution stream detected: skips intro, starts at {wfTimestamp}.</p>
                    </div>
                  </div>
                </div>

                {/* Title & Target Role */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                  <div className="md:col-span-8 space-y-1.5">
                    <label className="text-xs font-semibold text-slate-200 block">
                      Workflow Title / Job To Be Done <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={wfTitle}
                      onChange={(e) => setWfTitle(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-500/60"
                    />
                  </div>

                  <div className="md:col-span-4 space-y-1.5">
                    <label className="text-xs font-semibold text-slate-200 block">
                      Target Operational Role
                    </label>
                    <select
                      value={wfRole}
                      onChange={(e) => setWfRole(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-500/60"
                    >
                      <option>Software Engineers</option>
                      <option>Founders</option>
                      <option>Marketing & SEO</option>
                      <option>Sales & RevOps</option>
                      <option>Operations & Legal</option>
                    </select>
                  </div>
                </div>

                {/* Multi-Select Tools */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-200">
                    <span>Tools Orchestrated in this Flow</span>
                    <span className="text-slate-500 text-[11px]">Select all active integrations</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 p-3 bg-slate-950 border border-slate-800 rounded-lg">
                    {selectedTools.map((tool) => (
                      <span key={tool} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
                        {tool}
                        <button
                          type="button"
                          onClick={() => handleRemoveTool(tool)}
                          className="hover:text-rose-400 transition"
                        >
                          ✕
                        </button>
                      </span>
                    ))}
                    <button
                      type="button"
                      onClick={handleAddTool}
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-300 text-xs font-mono hover:bg-cyan-900/60 transition"
                    >
                      <Plus className="w-3 h-3" /> Add Tool
                    </button>
                  </div>
                </div>

                {/* File Upload Dropzone */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-200">
                    <span>Automation Blueprint Spec File (.json) <span className="text-cyan-400">*</span></span>
                    <span className="text-slate-500 font-mono text-[10px]">MAX 10MB</span>
                  </div>
                  <div
                    onClick={() => alert("File selected: github-ast-audit.n8n.json (38.4 KB)")}
                    className="w-full bg-slate-950 border border-dashed border-slate-800 hover:border-cyan-500/50 rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer transition"
                  >
                    <UploadCloud className="w-10 h-10 text-cyan-400 mb-2" />
                    <p className="font-semibold text-xs text-white">Drag & drop .json export from n8n / Make.com or click to browse</p>
                    <p className="text-[11px] text-slate-500 mt-1">Accepts verified schema: n8n workflow nodes, Make blueprint, LangChain graph JSON, or CrewAI config</p>
                    <div className="mt-3 flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-slate-900 font-mono text-[11px] text-slate-300 border border-slate-800">
                        github-ast-audit.n8n.json
                      </span>
                      <span className="font-mono text-[11px] text-emerald-400">38.4 KB (Uploaded)</span>
                    </div>
                  </div>
                </div>

                {/* Core System Prompt Textarea */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-200">
                    <span>Core System Prompt / Orchestrator Context</span>
                    <span className="font-mono text-[10px] text-slate-500">Tokens: ~412 / 8,000</span>
                  </div>
                  <textarea
                    rows={5}
                    value={wfPrompt}
                    onChange={(e) => setWfPrompt(e.target.value)}
                    className="w-full p-3.5 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300 focus:outline-none focus:border-cyan-500/60 leading-relaxed"
                  />
                </div>

                {/* Creator Attribution */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs text-slate-400 block">Channel / Creator Name</label>
                    <input
                      type="text"
                      value={creatorName}
                      onChange={(e) => setCreatorName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-500/60"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs text-slate-400 block">Twitter/X Handle</label>
                    <input
                      type="text"
                      value={creatorTwitter}
                      onChange={(e) => setCreatorTwitter(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-500/60"
                    />
                  </div>
                </div>

                {/* Submit Bar */}
                <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Includes public CC-BY Attribution & instant GitHub canonical credit</span>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs px-6 py-2.5 rounded-lg gap-2 shadow-md shadow-cyan-950 cursor-pointer"
                  >
                    <span>{isSubmitting ? "Submitting..." : "Submit Workflow for Free Verification"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </form>
            )}

            {/* FORM B: CREATOR SKILL */}
            {submissionType === "skill" && (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-indigo-950 border border-indigo-800 flex items-center justify-center text-indigo-400">
                      <Terminal className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-white">AI Skill & Prompt Technique Submission</h2>
                      <p className="text-xs text-slate-400">Precision system prompts, AST fences, and dynamic reasoning instructions</p>
                    </div>
                  </div>
                  <span className="font-mono text-[11px] text-indigo-300 bg-indigo-950/80 px-2.5 py-1 rounded border border-indigo-800/60">
                    SCHEMA: FC-SKILL-V1
                  </span>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-200 block">
                    Skill Title / Focus Area <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    defaultValue="Claude 3.7 Dynamic Thinking Budget for High-Stakes Code Refactoring"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-500/60"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-200 block">Target Model / Engine</label>
                    <select className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-500/60">
                      <option>Claude 3.7 Sonnet (Thinking Mode)</option>
                      <option>OpenAI GPT-4o / o3-mini</option>
                      <option>DeepSeek R1 671B</option>
                      <option>Cursor CLI / Composer</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-200 block">Technique Category</label>
                    <select className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-500/60">
                      <option>Prompt Engineering & Reasoning</option>
                      <option>Coding & Architecture</option>
                      <option>Data Extraction & Vision</option>
                      <option>Content & Copywriting</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-200 block">
                    Prompt Specification Template <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    rows={5}
                    defaultValue={`<thinking_budget target="8192">
Analyze the legacy AST for: {{INPUT_DOCUMENT}}
Draft zero-allocation transforms targeting TypeScript 5.8+.
</thinking_budget>`}
                    className="w-full p-3.5 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300 focus:outline-none focus:border-cyan-500/60 leading-relaxed"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs px-6 py-2.5 rounded-lg gap-2 cursor-pointer"
                >
                  <span>{isSubmitting ? "Submitting..." : "Submit Skill for Free Verification"}</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </form>
            )}

            {/* FORM C: TOOL FOUNDER */}
            {submissionType === "tool" && (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-950 border border-emerald-800 flex items-center justify-center text-emerald-400">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-white">AI Tool Founder Indexing Submission</h2>
                      <p className="text-xs text-slate-400">Index your developer tooling, API, or reasoning software for community discovery</p>
                    </div>
                  </div>
                  <span className="font-mono text-[11px] text-emerald-300 bg-emerald-950/80 px-2.5 py-1 rounded border border-emerald-800/60">
                    TIER: INDEPENDENT INDEX
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-200 block">
                      Tool Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      defaultValue="GraphSync AI"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-500/60"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-200 block">
                      Canonical Product Website <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="url"
                      required
                      defaultValue="https://graphsync.dev"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-500/60"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-200 block">
                    1-Line Technical Superpower <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    defaultValue="Real-time multi-agent dependency graph sync with sub-10ms AST change detection"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-500/60"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-200 block">Pricing Model</label>
                    <select className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-500/60">
                      <option>Freemium (Generous Free Quota)</option>
                      <option>Open Source (Apache 2.0 / MIT)</option>
                      <option>Free Beta / Free Community</option>
                      <option>Paid Only (Commercial)</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-200 block">Starting Paid Tier</label>
                    <input
                      type="text"
                      defaultValue="$19/mo per seat or usage-based"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-500/60"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs px-6 py-2.5 rounded-lg gap-2 cursor-pointer"
                >
                  <span>{isSubmitting ? "Submitting..." : "Submit Tool for Free Indexing"}</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </form>
            )}
          </div>
        )}
      </main>
    </div>
  );
}

