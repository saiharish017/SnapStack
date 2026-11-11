"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { 
  Sparkles, 
  Search, 
  Copy, 
  Check, 
  Download, 
  ArrowRight, 
  Filter, 
  Cpu, 
  FileCode2, 
  Layers, 
  SlidersHorizontal,
  Terminal,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";
import { SKILL_PLAYBOOKS, SkillPlaybook } from "@/lib/data/skills";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const CATEGORIES = [
  "All Categories",
  "Prompt Engineering & Reasoning",
  "Coding & Architecture",
  "Data Extraction & Vision",
  "Content & Copywriting",
  "Image & Media Generation"
] as const;

const MODELS = [
  "All Models",
  "Claude 3.7 Sonnet",
  "DeepSeek R1",
  "Cursor CLI / Claude 3.7",
  "GPT-4o",
  "Midjourney v6.1"
] as const;

const LEVELS = ["All Levels", "Beginner", "Intermediate", "Advanced", "Expert"] as const;

export function SkillsCatalogView() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All Categories");
  const [selectedModel, setSelectedModel] = useState<string>("All Models");
  const [selectedLevel, setSelectedLevel] = useState<string>("All Levels");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredPlaybooks = useMemo(() => {
    return SKILL_PLAYBOOKS.filter((skill) => {
      const matchesSearch =
        skill.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory =
        selectedCategory === "All Categories" || skill.category === selectedCategory;

      const matchesModel =
        selectedModel === "All Models" || skill.model.toLowerCase().includes(selectedModel.toLowerCase());

      const matchesLevel =
        selectedLevel === "All Levels" || skill.skillLevel === selectedLevel;

      return matchesSearch && matchesCategory && matchesModel && matchesLevel;
    });
  }, [searchQuery, selectedCategory, selectedModel, selectedLevel]);

  const handleCopyPrompt = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleExportVault = () => {
    const jsonStr = JSON.stringify(SKILL_PLAYBOOKS, null, 2);
    const blob = new Blob([jsonStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `snapstack-prompt-vault-${new Date().toISOString().split("T")[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-cyan-500/10 via-indigo-500/5 to-transparent blur-3xl pointer-events-none" />

      {/* Hero Header */}
      <section className="relative pt-16 pb-12 px-4 sm:px-6 lg:px-8 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            Tested Prompt Engineering & Execution Playbooks
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
            Battle-Tested <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">AI Skills & Prompts</span>
          </h1>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
            Production-ready prompt architectures, structured JSON output patterns, and model-specific playbooks verified against strict evaluation benchmarks. Zero hallucinated schemas.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              onClick={handleExportVault}
              variant="outline"
              className="border-cyan-500/30 bg-cyan-950/30 text-cyan-300 hover:bg-cyan-900/40 hover:text-cyan-200 gap-2"
            >
              <Download className="w-4 h-4" />
              Download Complete Prompt Vault (JSON)
            </Button>
            <div className="text-xs font-mono text-slate-400 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              100% Free Open Community Library
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none border-b border-slate-800/60 mb-8">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`whitespace-nowrap px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                  isActive
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-950"
                    : "bg-slate-900/60 text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 border border-slate-800"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Filter & Search Bar */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-8">
          {/* Search Input */}
          <div className="relative md:col-span-6">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search playbooks by skill, tag (e.g. Vision, JSON, Next.js), or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-slate-900/90 border border-slate-800 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/60 transition"
            />
          </div>

          {/* Model Filter */}
          <div className="md:col-span-3">
            <select
              value={selectedModel}
              onChange={(e) => setSelectedModel(e.target.value)}
              aria-label="Filter by AI Model"
              className="w-full px-3 py-2.5 rounded-lg bg-slate-900/90 border border-slate-800 text-sm text-slate-200 focus:outline-none focus:border-cyan-500/60"
            >
              {MODELS.map((m) => (
                <option key={m} value={m} className="bg-slate-900 text-slate-200">
                  {m}
                </option>
              ))}
            </select>
          </div>

          {/* Level Filter */}
          <div className="md:col-span-3">
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              aria-label="Filter by Skill Level"
              className="w-full px-3 py-2.5 rounded-lg bg-slate-900/90 border border-slate-800 text-sm text-slate-200 focus:outline-none focus:border-cyan-500/60"
            >
              {LEVELS.map((lvl) => (
                <option key={lvl} value={lvl} className="bg-slate-900 text-slate-200">
                  {lvl}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results Counter & Reset */}
        <div className="flex items-center justify-between text-xs text-slate-400 mb-6 font-mono">
          <span>Showing {filteredPlaybooks.length} of {SKILL_PLAYBOOKS.length} tested skill playbooks</span>
          {(searchQuery || selectedCategory !== "All Categories" || selectedModel !== "All Models" || selectedLevel !== "All Levels") && (
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All Categories");
                setSelectedModel("All Models");
                setSelectedLevel("All Levels");
              }}
              className="text-cyan-400 hover:underline cursor-pointer"
            >
              Reset all filters
            </button>
          )}
        </div>

        {/* Playbook Cards Grid */}
        {filteredPlaybooks.length === 0 ? (
          <div className="py-20 text-center rounded-xl border border-dashed border-slate-800 bg-slate-900/30">
            <Terminal className="w-10 h-10 text-slate-600 mx-auto mb-3" />
            <p className="text-slate-300 font-medium text-base mb-1">No skill playbooks match your criteria</p>
            <p className="text-slate-500 text-xs">Try adjusting your search terms or clearing selected category and model filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPlaybooks.map((playbook) => {
              const isCopied = copiedId === playbook.id;
              return (
                <div
                  key={playbook.id}
                  className="group flex flex-col justify-between rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 p-5 transition-all duration-200 hover:shadow-lg hover:shadow-cyan-950/20"
                >
                  <div>
                    {/* Top Meta Bar */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <Badge className="bg-slate-800/80 hover:bg-slate-800 text-cyan-300 border-slate-700 font-mono text-[11px] gap-1.5 py-0.5">
                        <Cpu className="w-3 h-3 text-cyan-400" />
                        {playbook.model}
                      </Badge>
                      <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        {playbook.accuracy}
                      </span>
                    </div>

                    {/* Title & Tagline */}
                    <Link
                      href={`/skills/${playbook.slug}`}
                      className="block group-hover:text-cyan-400 transition"
                    >
                      <h3 className="text-lg font-bold text-white mb-2 line-clamp-1">
                        {playbook.title}
                      </h3>
                      <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed mb-4">
                        {playbook.tagline}
                      </p>
                    </Link>

                    {/* Skill Info Pills */}
                    <div className="flex items-center gap-2 mb-4 text-[11px] font-mono text-slate-400">
                      <span className="px-2 py-0.5 rounded bg-slate-800/70 border border-slate-700/60">
                        {playbook.skillLevel}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-slate-800/70 border border-slate-700/60">
                        {playbook.tokenEstimate}
                      </span>
                      <span className="text-slate-500 ml-auto">{playbook.verifiedDate}</span>
                    </div>

                    {/* Prompt Payload Preview Box */}
                    <div className="relative rounded-lg bg-slate-950/90 border border-slate-800/80 p-3 mb-4 group/code">
                      <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800/60 text-[10px] font-mono text-slate-400">
                        <span className="flex items-center gap-1.5 text-slate-300">
                          <FileCode2 className="w-3 h-3 text-cyan-400" />
                          System / Core Prompt Preview
                        </span>
                        <button
                          onClick={() => handleCopyPrompt(playbook.id, playbook.systemPrompt + "\n\n" + playbook.userPromptTemplate)}
                          className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-[10px] transition cursor-pointer"
                        >
                          {isCopied ? (
                            <>
                              <Check className="w-3 h-3 text-emerald-400" />
                              <span className="text-emerald-400">Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3 text-slate-400" />
                              <span>Copy</span>
                            </>
                          )}
                        </button>
                      </div>
                      <pre className="text-[11px] font-mono text-slate-400 overflow-hidden line-clamp-3 leading-relaxed whitespace-pre-wrap">
                        {playbook.systemPrompt}
                      </pre>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {playbook.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800/40 border border-slate-700/50 text-slate-400"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400">
                      By {playbook.author}
                    </span>
                    <Link
                      href={`/skills/${playbook.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 hover:text-cyan-300 group-hover:translate-x-0.5 transition-all"
                    >
                      View Playbook
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}

