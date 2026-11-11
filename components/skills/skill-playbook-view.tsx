"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Copy, 
  Check, 
  Cpu, 
  FileCode2, 
  ShieldAlert, 
  CheckCircle2, 
  Sparkles, 
  AlertTriangle, 
  ExternalLink,
  Code2,
  Terminal,
  Layers,
  ArrowRight
} from "lucide-react";
import { SkillPlaybook, SKILL_PLAYBOOKS } from "@/lib/data/skills";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface SkillPlaybookViewProps {
  playbook: SkillPlaybook;
}

export function SkillPlaybookView({ playbook }: SkillPlaybookViewProps) {
  const [copiedSection, setCopiedSection] = useState<string | null>(null);
  const [activeSchemaTab, setActiveSchemaTab] = useState<"output" | "input">("output");
  const [activePromptTab, setActivePromptTab] = useState<"system" | "user" | "full">("full");

  const handleCopy = (text: string, sectionId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(sectionId);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  const fullPromptPayload = `=== SYSTEM PROMPT ===\n${playbook.systemPrompt}\n\n=== USER PROMPT TEMPLATE ===\n${playbook.userPromptTemplate}`;

  const relatedPlaybooks = SKILL_PLAYBOOKS.filter(
    (s) => s.id !== playbook.id && (s.category === playbook.category || s.tags.some(t => playbook.tags.includes(t)))
  ).slice(0, 2);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-cyan-500/10 via-indigo-500/5 to-transparent blur-3xl pointer-events-none" />

      {/* Breadcrumb Navigation */}
      <div className="relative border-b border-slate-800/80 bg-slate-950/60 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-slate-400">
            <Link href="/" className="hover:text-slate-200 transition">Home</Link>
            <span>/</span>
            <Link href="/skills" className="hover:text-slate-200 transition">Skills & Playbooks</Link>
            <span>/</span>
            <span className="text-cyan-400 font-medium truncate max-w-[200px] sm:max-w-xs">{playbook.title}</span>
          </div>

          <Link
            href="/skills"
            className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-200 transition"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Catalog
          </Link>
        </div>
      </div>

      {/* Header & Meta Bar */}
      <header className="relative border-b border-slate-800/80 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <Badge className="bg-cyan-950/80 text-cyan-300 border-cyan-800/60 font-mono text-xs">
              {playbook.category}
            </Badge>
            <Badge className="bg-slate-900 text-slate-300 border-slate-800 font-mono text-xs">
              {playbook.skillLevel}
            </Badge>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-800/60 text-emerald-400 text-xs font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {playbook.accuracy}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            {playbook.title}
          </h1>
          <p className="max-w-3xl text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
            {playbook.tagline}
          </p>

          {/* Specs Grid Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3 p-4 rounded-xl bg-slate-900/70 border border-slate-800/90 text-xs">
            <div>
              <span className="text-slate-400 block mb-1">Target Engine</span>
              <span className="font-semibold text-white flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                {playbook.model}
              </span>
            </div>
            <div>
              <span className="text-slate-400 block mb-1">Token Estimate</span>
              <span className="font-semibold font-mono text-cyan-300">{playbook.tokenEstimate}</span>
            </div>
            <div>
              <span className="text-slate-400 block mb-1">Verification Status</span>
              <span className="font-semibold font-mono text-emerald-400">{playbook.verifiedDate}</span>
            </div>
            <div>
              <span className="text-slate-400 block mb-1">Tested Checkpoints</span>
              <span className="font-semibold font-mono text-slate-300 truncate block">
                {playbook.testedVersions[0]}
              </span>
            </div>
            <div className="col-span-2 sm:col-span-4 lg:col-span-1 flex items-center justify-end">
              <Button
                onClick={() => handleCopy(fullPromptPayload, "header-copy")}
                className="w-full lg:w-auto bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs gap-1.5 cursor-pointer shadow-md shadow-cyan-950"
              >
                {copiedSection === "header-copy" ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-slate-950" />
                    Copied Payload
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    Copy Complete Prompt
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Playbook Content Sections */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        {/* Section 1: Prompt Architecture & Payload */}
        <section className="rounded-xl bg-slate-900/60 border border-slate-800/90 p-6">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-6 border-b border-slate-800">
            <div>
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <FileCode2 className="w-5 h-5 text-cyan-400" />
                Prompt Architecture & Execution Payload
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Deterministic instructions enforcing XML delimitation and schema boundaries.
              </p>
            </div>

            {/* Prompt View Tabs & Copy */}
            <div className="flex items-center gap-2">
              <div className="flex rounded-lg bg-slate-950 p-1 border border-slate-800 text-xs font-mono">
                <button
                  onClick={() => setActivePromptTab("full")}
                  className={`px-3 py-1 rounded transition ${
                    activePromptTab === "full" ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40" : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  Full Payload
                </button>
                <button
                  onClick={() => setActivePromptTab("system")}
                  className={`px-3 py-1 rounded transition ${
                    activePromptTab === "system" ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40" : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  System
                </button>
                <button
                  onClick={() => setActivePromptTab("user")}
                  className={`px-3 py-1 rounded transition ${
                    activePromptTab === "user" ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40" : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  User Template
                </button>
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  const text =
                    activePromptTab === "full"
                      ? fullPromptPayload
                      : activePromptTab === "system"
                      ? playbook.systemPrompt
                      : playbook.userPromptTemplate;
                  handleCopy(text, "prompt-box");
                }}
                className="border-slate-700 bg-slate-800 text-slate-200 hover:bg-slate-700 text-xs gap-1.5"
              >
                {copiedSection === "prompt-box" ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    Copy Tab
                  </>
                )}
              </Button>
            </div>
          </div>

          {/* Prompt Code Display */}
          <div className="rounded-lg bg-slate-950 border border-slate-800/90 p-4 font-mono text-xs leading-relaxed text-slate-300 overflow-x-auto max-h-[500px]">
            {activePromptTab === "full" && (
              <pre className="whitespace-pre-wrap">{fullPromptPayload}</pre>
            )}
            {activePromptTab === "system" && (
              <pre className="whitespace-pre-wrap">{playbook.systemPrompt}</pre>
            )}
            {activePromptTab === "user" && (
              <pre className="whitespace-pre-wrap">{playbook.userPromptTemplate}</pre>
            )}
          </div>
        </section>

        {/* Section 2: Schema & Sample I/O */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column: Schema Contracts */}
          <div className="rounded-xl bg-slate-900/60 border border-slate-800/90 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-cyan-400" />
                  JSON Schema Contract
                </h3>
                <div className="flex rounded-md bg-slate-950 p-0.5 border border-slate-800 text-[11px] font-mono">
                  <button
                    onClick={() => setActiveSchemaTab("output")}
                    className={`px-2.5 py-0.5 rounded ${
                      activeSchemaTab === "output" ? "bg-cyan-500/20 text-cyan-300" : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    Output Schema
                  </button>
                  <button
                    onClick={() => setActiveSchemaTab("input")}
                    className={`px-2.5 py-0.5 rounded ${
                      activeSchemaTab === "input" ? "bg-cyan-500/20 text-cyan-300" : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    Input Schema
                  </button>
                </div>
              </div>
              <div className="rounded-lg bg-slate-950 border border-slate-800 p-4 font-mono text-[11px] text-slate-300 overflow-x-auto max-h-96">
                <pre>{activeSchemaTab === "output" ? playbook.outputSchema : playbook.inputSchema}</pre>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
              <span>Strict Draft-07 Compliant</span>
              <button
                onClick={() => handleCopy(activeSchemaTab === "output" ? playbook.outputSchema : playbook.inputSchema, "schema-copy")}
                className="text-cyan-400 hover:underline flex items-center gap-1 cursor-pointer"
              >
                {copiedSection === "schema-copy" ? "Copied Schema" : "Copy Schema"}
              </button>
            </div>
          </div>

          {/* Right Column: Deterministic Sample Output */}
          <div className="rounded-xl bg-slate-900/60 border border-slate-800/90 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-emerald-400" />
                  Deterministic Runtime Sample Output
                </h3>
                <Badge className="bg-emerald-950 text-emerald-400 border-emerald-800/50 font-mono text-[10px]">
                  Verified Pass
                </Badge>
              </div>
              <div className="rounded-lg bg-slate-950 border border-slate-800 p-4 font-mono text-[11px] text-emerald-300/90 overflow-x-auto max-h-96">
                <pre>{playbook.sampleOutput}</pre>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
              <span className="truncate max-w-[260px]">{playbook.sampleInput}</span>
              <button
                onClick={() => handleCopy(playbook.sampleOutput, "sample-copy")}
                className="text-cyan-400 hover:underline flex items-center gap-1 cursor-pointer"
              >
                {copiedSection === "sample-copy" ? "Copied Output" : "Copy Sample"}
              </button>
            </div>
          </div>
        </section>

        {/* Section 3: Failure Modes & Edge Cases */}
        <section className="rounded-xl bg-slate-900/60 border border-slate-800/90 p-6">
          <div className="pb-3 mb-6 border-b border-slate-800">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-amber-400" />
              Known Failure Modes & Engineering Mitigations
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Field observations and defensive prompt instructions to guarantee zero pipeline crashes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {playbook.failureModes.map((fm, idx) => (
              <div
                key={idx}
                className="rounded-lg bg-slate-950/80 border border-slate-800/80 p-4 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold mb-2">
                    <AlertTriangle className="w-4 h-4 shrink-0" />
                    <span>{fm.issue}</span>
                  </div>
                  <div className="text-xs text-slate-400 mb-3 leading-relaxed">
                    <strong className="text-slate-300 block mb-0.5 font-mono text-[11px]">Root Cause:</strong>
                    {fm.cause}
                  </div>
                </div>
                <div className="pt-3 border-t border-slate-800/60 text-xs text-slate-300 bg-slate-900/40 p-2.5 rounded border border-slate-800/40">
                  <strong className="text-cyan-400 block mb-1 font-mono text-[11px]">Engineered Mitigation:</strong>
                  {fm.mitigation}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Can I do this in ChatGPT for free? */}
        <section className="rounded-xl bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-indigo-900/50 p-6">
          <div className="flex items-start gap-4">
            <div className="p-2.5 rounded-lg bg-indigo-950/80 border border-indigo-800/60 shrink-0">
              <Sparkles className="w-5 h-5 text-indigo-400" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white mb-2">
                Can I do this in ChatGPT for free?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                {playbook.canDoInChatGPTFree}
              </p>
              <div className="flex items-center gap-2 text-xs font-mono text-indigo-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Tested independently without affiliate bias.
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Recommended Stack & Related Playbooks */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Recommended Stack */}
          <div className="md:col-span-5 rounded-xl bg-slate-900/60 border border-slate-800/90 p-6">
            <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
              <Layers className="w-4 h-4 text-cyan-400" />
              Recommended Stack & Tools
            </h3>
            <div className="space-y-3">
              {playbook.recommendedTools.map((tool) => (
                <Link
                  key={tool.slug}
                  href={`/tools/${tool.slug}`}
                  className="group flex items-center justify-between p-3 rounded-lg bg-slate-950/70 border border-slate-800 hover:border-cyan-500/40 transition"
                >
                  <div>
                    <span className="font-semibold text-white text-xs group-hover:text-cyan-300 transition block">
                      {tool.name}
                    </span>
                    <span className="text-[11px] text-slate-400">{tool.role}</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 transition" />
                </Link>
              ))}
            </div>
          </div>

          {/* Related Playbooks */}
          <div className="md:col-span-7 rounded-xl bg-slate-900/60 border border-slate-800/90 p-6">
            <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              Related Skill Playbooks
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedPlaybooks.map((related) => (
                <Link
                  key={related.slug}
                  href={`/skills/${related.slug}`}
                  className="group block p-4 rounded-lg bg-slate-950/70 border border-slate-800 hover:border-cyan-500/40 transition flex flex-col justify-between"
                >
                  <div>
                    <Badge className="bg-slate-900 text-cyan-400 border-slate-800 text-[10px] font-mono mb-2">
                      {related.model}
                    </Badge>
                    <h4 className="font-bold text-white text-xs group-hover:text-cyan-300 transition line-clamp-1 mb-1">
                      {related.title}
                    </h4>
                    <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                      {related.tagline}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] text-cyan-400 font-semibold mt-3 group-hover:translate-x-0.5 transition-all">
                    View Playbook <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

