"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Maximize2, 
  Volume2, 
  Bookmark, 
  Share2, 
  Copy, 
  Check, 
  ExternalLink, 
  ArrowRight, 
  Search, 
  Grid, 
  Smartphone, 
  Clock, 
  ThumbsUp, 
  Flag, 
  ShieldCheck, 
  Terminal, 
  Code2, 
  Layers, 
  Sparkles,
  CheckCircle2
} from "lucide-react";
import { VIDEOS, VideoItem } from "@/lib/data/videos";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function VideosFeedView() {
  const [viewMode, setViewMode] = useState<"grid" | "shorts">("grid");
  const [activeVideo, setActiveVideo] = useState<VideoItem>(VIDEOS[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [contentType, setContentType] = useState<"All" | "Workflow" | "Skill">("All");
  const [selectedTool, setSelectedTool] = useState<string>("All");
  const [selectedRole, setSelectedRole] = useState<string>("All");
  const [durationFilter, setDurationFilter] = useState<"All" | "Short" | "Quick" | "Deep">("All");
  const [copiedSection, setCopiedSection] = useState<string | null>(null);
  const [upvotedVideos, setUpvotedVideos] = useState<Record<string, boolean>>({});

  const filteredVideos = useMemo(() => {
    return VIDEOS.filter((video) => {
      const matchesSearch =
        video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        video.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        video.tools.some((t) => t.name.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesType =
        contentType === "All" || video.contentType === contentType;

      const matchesTool =
        selectedTool === "All" || video.tools.some((t) => t.name.toLowerCase().includes(selectedTool.toLowerCase()));

      const matchesRole =
        selectedRole === "All" || video.roleTarget.toLowerCase().includes(selectedRole.toLowerCase());

      const matchesDuration =
        durationFilter === "All" || video.durationType === durationFilter;

      const matchesMode =
        viewMode === "grid" || video.aspectRatio === "9:16";

      return matchesSearch && matchesType && matchesTool && matchesRole && matchesDuration && matchesMode;
    });
  }, [searchQuery, contentType, selectedTool, selectedRole, durationFilter, viewMode]);

  const handleCopySnippet = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedSection(id);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  const handleUpvote = (id: string) => {
    setUpvotedVideos((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-cyan-500/10 via-indigo-500/5 to-transparent blur-3xl pointer-events-none" />

      {/* Eyebrow Telemetry Strip */}
      <div className="relative border-b border-slate-800/80 bg-slate-950/70 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-cyan-400 bg-cyan-950/60 border border-cyan-800/60 px-2.5 py-0.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              REC FEED ONLINE
            </span>
            <span className="font-mono text-[11px] text-slate-400 uppercase tracking-wider hidden sm:inline">
              140+ Unedited Video Playbooks • Real-Time Demos • 100% Reproducible
            </span>
          </div>

          <div className="flex items-center gap-3 font-mono text-[11px] text-slate-400">
            <span className="inline-flex items-center gap-1 text-emerald-400">
              <ShieldCheck className="w-3.5 h-3.5" />
              Vetted Specs
            </span>
            <span className="text-slate-700">|</span>
            <span>Zero Fluff Guarantee</span>
          </div>
        </div>
      </div>

      {/* Main Header & View Mode Switcher */}
      <section className="relative pt-10 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-slate-800/80">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-3">
              Video Tutorials & <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Execution Feed</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Watch verified AI builders execute multi-tool automations and prompt techniques in real time. Inspect prompts, copy verified code snippets, and clone reproducible workflows in one click.
            </p>
          </div>

          {/* View Mode Switcher */}
          <div className="flex items-center self-start lg:self-auto bg-slate-900 border border-slate-800 rounded-xl p-1 gap-1 shadow-sm shrink-0">
            <button
              onClick={() => setViewMode("grid")}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all ${
                viewMode === "grid"
                  ? "bg-slate-800 text-white shadow-sm border border-slate-700"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <Grid className="w-3.5 h-3.5 text-cyan-400" />
              <span>Grid Mode</span>
            </button>
            <button
              onClick={() => setViewMode("shorts")}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all ${
                viewMode === "shorts"
                  ? "bg-slate-800 text-white shadow-sm border border-slate-700"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <Smartphone className="w-3.5 h-3.5 text-indigo-400" />
              <span>Shorts Stream</span>
              <span className="font-mono text-[10px] bg-indigo-950 text-indigo-300 border border-indigo-800/60 px-1.5 py-0.2 rounded ml-1">
                9:16
              </span>
            </button>
          </div>
        </div>

        {/* Content Type Tabs & Quick Stats */}
        <div className="pt-6 flex flex-wrap items-center justify-between gap-4 border-b border-slate-800/60 pb-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            <button
              onClick={() => setContentType("All")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition ${
                contentType === "All"
                  ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                  : "bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800"
              }`}
            >
              All Videos <span className="text-[10px] opacity-70 ml-1">142</span>
            </button>
            <button
              onClick={() => setContentType("Workflow")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition ${
                contentType === "Workflow"
                  ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                  : "bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800"
              }`}
            >
              Workflows (Multi-Tool) <span className="text-[10px] opacity-70 ml-1">86</span>
            </button>
            <button
              onClick={() => setContentType("Skill")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition ${
                contentType === "Skill"
                  ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                  : "bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800"
              }`}
            >
              Skills (Prompts & Demos) <span className="text-[10px] opacity-70 ml-1">56</span>
            </button>
          </div>

          <div className="flex items-center gap-2 text-slate-400 font-mono text-xs">
            <Clock className="w-3.5 h-3.5 text-cyan-400" />
            <span>Last live drop {VIDEOS[0].verifiedDate}</span>
          </div>
        </div>

        {/* Secondary Filter Row */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
          {/* Search Input */}
          <div className="md:col-span-5 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search video playbooks, tools, or techniques..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900/90 border border-slate-800 text-xs text-slate-200 placeholder:text-slate-500 pl-9 pr-4 py-2.5 rounded-lg focus:outline-none focus:border-cyan-500/60"
            />
          </div>

          {/* Tool Filter Dropdown */}
          <div className="md:col-span-3">
            <select
              value={selectedTool}
              onChange={(e) => setSelectedTool(e.target.value)}
              aria-label="Filter by Tool"
              className="w-full bg-slate-900/90 border border-slate-800 text-xs text-slate-200 px-3 py-2.5 rounded-lg focus:outline-none focus:border-cyan-500/60"
            >
              <option value="All">All Tools: Claude, Cursor, n8n...</option>
              <option value="Claude">Claude 3.7 Sonnet</option>
              <option value="Cursor">Cursor Composer</option>
              <option value="n8n">n8n Self-Hosted</option>
              <option value="DeepSeek">DeepSeek R1</option>
            </select>
          </div>

          {/* Role Filter Dropdown */}
          <div className="md:col-span-2">
            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              aria-label="Filter by Role"
              className="w-full bg-slate-900/90 border border-slate-800 text-xs text-slate-200 px-3 py-2.5 rounded-lg focus:outline-none focus:border-cyan-500/60"
            >
              <option value="All">Role: All Builders</option>
              <option value="Software">Software Engineers</option>
              <option value="RevOps">RevOps & Automation</option>
              <option value="Growth">Growth & Marketing</option>
              <option value="Founders">Founders</option>
            </select>
          </div>

          {/* Duration Filter Pills */}
          <div className="md:col-span-2 flex items-center gap-1 justify-start md:justify-end">
            {(["All", "Short", "Quick", "Deep"] as const).map((dur) => (
              <button
                key={dur}
                onClick={() => setDurationFilter(dur)}
                className={`px-2 py-1 rounded text-[11px] font-mono transition ${
                  durationFilter === dur
                    ? "bg-slate-800 text-white border border-slate-700"
                    : "text-slate-400 hover:text-slate-200 bg-slate-900/40 border border-slate-800/60"
                }`}
              >
                {dur === "All" ? "All" : dur === "Short" ? "<60s" : dur === "Quick" ? "1-5m" : ">5m"}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Spotlight: Active Interactive Execution Sandbox */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-slate-900/70 border border-slate-800/90 rounded-2xl p-5 lg:p-6 shadow-2xl relative overflow-hidden">
          {/* Section Marker */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-5">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-xs uppercase tracking-wider text-white font-bold font-mono">
                Active Execution Sandbox
              </span>
              <span className="font-mono text-[10px] bg-cyan-950 text-cyan-300 border border-cyan-800/60 px-2 py-0.5 rounded-full ml-1">
                Synced Video Player + Code Spec
              </span>
            </div>
            <div className="text-xs font-mono text-slate-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              {activeVideo.accuracy}
            </div>
          </div>

          {/* Split Grid: Video Player + Execution Drawer */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left/Top: High-Res Simulated Video Player Frame */}
            <div className="lg:col-span-7 flex flex-col justify-between bg-slate-950 border border-slate-800/90 rounded-xl overflow-hidden shadow-xl">
              {/* Top Video Header Bar */}
              <div className="bg-slate-900/90 px-3 py-2 border-b border-slate-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                  <span className="font-mono text-[11px] text-slate-400 ml-2 flex items-center gap-1.5">
                    <Terminal className="w-3 h-3 text-cyan-400" />
                    {activeVideo.slug}.mp4
                  </span>
                </div>
                <div className="flex items-center gap-2 font-mono text-[10px] text-slate-400">
                  <span className="bg-slate-800 px-1.5 py-0.5 rounded text-slate-300">60 FPS</span>
                  <span className="bg-cyan-950 text-cyan-300 border border-cyan-800/50 px-1.5 py-0.5 rounded">
                    {activeVideo.aspectRatio} Cam
                  </span>
                </div>
              </div>

              {/* Video Screen / IDE Capture Simulator */}
              <div className="relative bg-slate-950 p-6 flex flex-col justify-center min-h-[360px] font-mono select-none overflow-hidden">
                {/* Radial grid backdrop */}
                <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />

                {/* Live stream text simulator */}
                <div className="relative z-10 space-y-3 text-xs">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800/80 text-slate-400">
                    <div className="flex items-center gap-2 text-cyan-300 font-medium">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                      <span>STREAMING RUNTIME • {activeVideo.tools[0]?.name}</span>
                    </div>
                    <span className="text-emerald-400 font-mono text-[11px]">{activeVideo.duration} Live</span>
                  </div>

                  {/* Terminal Log Lines */}
                  <div className="bg-slate-900/80 border border-slate-800 rounded-lg p-3.5 space-y-1.5 text-slate-300 text-[11px] font-mono">
                    {activeVideo.terminalLogs.map((log, idx) => (
                      <p key={idx} className={idx === 0 ? "text-cyan-300 font-bold" : idx === activeVideo.terminalLogs.length - 1 ? "text-emerald-400 font-semibold" : "text-slate-400"}>
                        {log}
                      </p>
                    ))}
                  </div>

                  {/* Flagged Status Pill */}
                  <div className="flex items-center gap-2 pt-1 text-[11px]">
                    <span className="bg-slate-900 border border-slate-800 text-slate-300 px-2 py-0.5 rounded flex items-center gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      Deterministic Verification Passed
                    </span>
                    <span className="text-slate-500 font-mono">By {activeVideo.creator.name}</span>
                  </div>
                </div>

                {/* Central Play/Pause Watermark Overlay */}
                <div 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="absolute inset-0 flex items-center justify-center cursor-pointer bg-slate-950/20 hover:bg-slate-950/40 transition group"
                >
                  <div className="w-14 h-14 rounded-full bg-cyan-500/20 border border-cyan-400/50 backdrop-blur-md flex items-center justify-center text-cyan-300 group-hover:scale-110 transition-transform shadow-lg shadow-cyan-950">
                    {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-0.5" />}
                  </div>
                </div>
              </div>

              {/* Player Controls Bar */}
              <div className="bg-slate-900/90 border-t border-slate-800 p-3 space-y-2">
                {/* Scrubber Bar */}
                <div className="relative w-full h-1.5 bg-slate-800 rounded-full cursor-pointer group">
                  <div className="absolute left-0 top-0 h-full w-[45%] bg-cyan-500 rounded-full" />
                  <div className="absolute left-[45%] top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 bg-white rounded-full border border-cyan-500 shadow" />
                </div>

                {/* Control buttons */}
                <div className="flex items-center justify-between text-xs pt-1 text-slate-400">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="text-white hover:text-cyan-400 transition cursor-pointer"
                    >
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    </button>
                    <button
                      onClick={() => {}}
                      className="hover:text-white transition cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                    <span className="font-mono text-[11px] text-slate-400">
                      0:28 / {activeVideo.duration}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <button className="hover:text-white transition cursor-pointer">
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                    <span className="bg-slate-800 border border-slate-700 text-slate-300 px-1 py-0.5 rounded text-[10px] font-mono">
                      1.0x
                    </span>
                    <button className="hover:text-white transition cursor-pointer">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right/Bottom: Execution Drawer & Vetted Artifacts */}
            <div className="lg:col-span-5 flex flex-col justify-between bg-slate-900/90 border border-slate-800 rounded-xl p-5 space-y-4">
              <div>
                {/* Execution Drawer Header */}
                <div className="flex items-start justify-between gap-2 pb-3 border-b border-slate-800">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono text-xs uppercase font-bold text-cyan-400">
                        Execution Drawer
                      </span>
                      <span className="font-mono text-[10px] bg-slate-800 text-slate-400 px-1.5 py-0.2 rounded">
                        v2.4 Spec
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-white line-clamp-2">
                      {activeVideo.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => handleUpvote(activeVideo.id)}
                      className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition cursor-pointer"
                      title="Bookmark Video"
                    >
                      <Bookmark className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(window.location.href);
                        alert("Video link copied to clipboard!");
                      }}
                      className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition cursor-pointer"
                      title="Share Video"
                    >
                      <Share2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Required Tools Row */}
                <div className="py-3 space-y-1.5">
                  <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                    <span className="uppercase text-[10px] tracking-wider">Required Tools & Runtimes</span>
                    <span className="text-emerald-400 text-[10px]">$0 Free Tier Verified</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {activeVideo.tools.map((tool) => (
                      <Link
                        key={tool.slug}
                        href={`/tools/${tool.slug}`}
                        className="inline-flex items-center gap-1.5 bg-slate-950 hover:bg-slate-800 border border-slate-800 text-xs text-slate-200 px-2.5 py-1 rounded-md transition"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        <span>{tool.name}</span>
                        <ExternalLink className="w-2.5 h-2.5 text-slate-500" />
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Prompt / Code Snippet Box */}
                <div className="pt-2 space-y-1.5">
                  <div className="flex items-center justify-between font-mono text-xs text-slate-400">
                    <span className="flex items-center gap-1 text-slate-300">
                      <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                      {activeVideo.snippetFilename}
                      <span className="text-slate-500 text-[10px]">({activeVideo.snippetTokens})</span>
                    </span>
                    <button
                      onClick={() => handleCopySnippet(activeVideo.codeSnippet, "drawer-code")}
                      className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 text-[11px] cursor-pointer"
                    >
                      {copiedSection === "drawer-code" ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy Snippet</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="bg-slate-950 border border-slate-800 rounded-lg p-3 font-mono text-[11px] text-slate-300 overflow-x-auto max-h-36">
                    <pre>{activeVideo.codeSnippet}</pre>
                  </div>
                </div>
              </div>

              {/* Action Buttons & Feedback */}
              <div className="pt-3 border-t border-slate-800/80 space-y-3">
                <div className="flex flex-col sm:flex-row gap-2">
                  {activeVideo.associatedWorkflowSlug && (
                    <Link
                      href={`/workflows/${activeVideo.associatedWorkflowSlug}`}
                      className="flex-1 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 transition shadow"
                    >
                      <span>View Full Workflow Recipe</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  )}
                  {activeVideo.associatedSkillSlug && (
                    <Link
                      href={`/skills/${activeVideo.associatedSkillSlug}`}
                      className="flex-1 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 transition shadow"
                    >
                      <span>View Skill Playbook</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  )}
                </div>

                <div className="flex items-center justify-between text-xs font-mono text-slate-400 pt-1">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleUpvote(activeVideo.id)}
                      className={`flex items-center gap-1 px-2 py-0.5 rounded border transition cursor-pointer ${
                        upvotedVideos[activeVideo.id]
                          ? "bg-cyan-950 border-cyan-700 text-cyan-300"
                          : "bg-slate-950 border-slate-800 text-slate-300 hover:text-white"
                      }`}
                    >
                      <ThumbsUp className="w-3 h-3" />
                      <span>{activeVideo.upvotes + (upvotedVideos[activeVideo.id] ? 1 : 0)} Upvotes</span>
                    </button>
                    <span>{activeVideo.clones} Clones</span>
                  </div>

                  <button
                    onClick={() => alert("Spec reported for audit. Thank you!")}
                    className="hover:text-rose-400 text-slate-500 transition flex items-center gap-1 cursor-pointer"
                  >
                    <Flag className="w-3 h-3" />
                    <span>Report Broken Spec</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid of Verified Video Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <h2 className="text-xl font-bold text-white">Latest Verified Demos</h2>
            <span className="font-mono text-xs bg-slate-900 border border-slate-800 text-slate-400 px-2 py-0.5 rounded ml-2">
              Showing {filteredVideos.length} videos
            </span>
          </div>

          <div className="text-xs font-mono text-slate-400">
            Sort: <strong className="text-white">Most Vetted First</strong>
          </div>
        </div>

        {/* Video Cards Grid */}
        <div className={`grid gap-6 ${viewMode === "shorts" ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"}`}>
          {filteredVideos.map((video) => {
            const isCurrentActive = activeVideo.id === video.id;
            return (
              <article
                key={video.id}
                onClick={() => {
                  setActiveVideo(video);
                  window.scrollTo({ top: 380, behavior: "smooth" });
                }}
                className={`group cursor-pointer bg-slate-900/60 hover:bg-slate-900 border rounded-xl overflow-hidden transition-all duration-200 flex flex-col justify-between shadow-sm ${
                  isCurrentActive
                    ? "border-cyan-500/80 ring-1 ring-cyan-500/50"
                    : "border-slate-800/80 hover:border-slate-700"
                }`}
              >
                <div>
                  {/* Video Thumbnail Facade */}
                  <div className={`relative ${video.aspectRatio === "9:16" && viewMode === "shorts" ? "aspect-[9/16]" : "aspect-[16/10]"} bg-slate-950 overflow-hidden border-b border-slate-800`}>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent z-10" />

                    {/* Simulated Code Lines */}
                    <div className="p-3 font-mono text-[10px] text-slate-500 select-none space-y-1">
                      <span className="text-cyan-400">&gt; {video.tools[0]?.name}</span>
                      <p className="text-slate-400 line-clamp-2">{video.terminalLogs[0]}</p>
                      <p className="text-emerald-400 line-clamp-1">{video.terminalLogs[video.terminalLogs.length - 1]}</p>
                    </div>

                    {/* Top Badges */}
                    <div className="absolute top-2.5 left-2.5 z-20 flex items-center gap-1.5">
                      <span className="font-mono text-[10px] bg-slate-900/90 text-cyan-300 backdrop-blur-md px-2 py-0.5 rounded-full border border-slate-700">
                        {video.aspectRatio === "9:16" ? "9:16 Short" : "16:9 Demo"}
                      </span>
                      <span className="font-mono text-[10px] bg-slate-900/80 text-slate-400 px-1.5 py-0.5 rounded border border-slate-800">
                        {video.contentType}
                      </span>
                    </div>

                    {/* Duration Badge */}
                    <div className="absolute bottom-2.5 right-2.5 z-20">
                      <span className="font-mono text-[11px] bg-slate-950/90 text-white px-1.5 py-0.5 rounded border border-slate-700 font-semibold">
                        {video.duration}
                      </span>
                    </div>

                    {/* Play Overlay on Hover */}
                    <div className="absolute inset-0 z-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-slate-950/40 backdrop-blur-[1px]">
                      <div className="w-10 h-10 rounded-full bg-cyan-500 text-slate-950 flex items-center justify-center shadow-lg transform group-hover:scale-105 transition-transform">
                        <Play className="w-5 h-5 ml-0.5" />
                      </div>
                    </div>
                  </div>

                  {/* Content Details */}
                  <div className="p-4 space-y-2">
                    <h3 className="font-bold text-sm text-white group-hover:text-cyan-300 transition line-clamp-2 leading-snug">
                      {video.title}
                    </h3>

                    {/* Creator Row */}
                    <div className="flex items-center gap-2 pt-1 text-[11px] text-slate-400 font-mono">
                      <div className="w-5 h-5 rounded-full bg-cyan-950 border border-cyan-800 flex items-center justify-center text-[10px] text-cyan-300 font-bold">
                        {video.creator.initials}
                      </div>
                      <span>{video.creator.handle}</span>
                    </div>

                    {/* Tools Pills */}
                    <div className="flex flex-wrap gap-1 pt-1">
                      {video.tools.map((t) => (
                        <span key={t.slug} className="text-[10px] font-mono bg-slate-950 border border-slate-800 text-slate-400 px-1.5 py-0.5 rounded">
                          {t.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="px-4 pb-3 pt-2 border-t border-slate-800/60 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>{video.views} views • {video.accuracy}</span>
                  <button className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-1 group-hover:translate-x-0.5 transition-all">
                    <span>Inspect</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}

