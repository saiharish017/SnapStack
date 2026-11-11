"use client";

import * as React from "react";
import Link from "next/link";
import { toast } from "sonner";
import {
  Search,
  X,
  SlidersHorizontal,
  Bookmark,
  CheckCircle2,
  Clock,
  Zap,
  ArrowRight,
  Code,
  Copy,
  LayoutGrid,
  List,
  Download,
  Terminal,
  Layers,
  ChevronDown,
  Archive,
  Workflow as WorkflowIcon,
} from "lucide-react";
import { WORKFLOWS, WorkflowItem } from "@/lib/data/workflows";

export function WorkflowsCatalogView() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedRole, setSelectedRole] = React.useState<string>("All");
  const [selectedPlatform, setSelectedPlatform] = React.useState<string>("All");
  const [selectedDifficulty, setSelectedDifficulty] = React.useState<string>("All");
  const [verifiedOnly, setVerifiedOnly] = React.useState(true);
  const [viewMode, setViewMode] = React.useState<"grid" | "table">("grid");
  const [sortBy, setSortBy] = React.useState("Highest Time Saved");
  const [savedIds, setSavedIds] = React.useState<Set<string>>(new Set(["wf_ast_security_audit_092"]));
  const [activeSchemaTab, setActiveSchemaTab] = React.useState<"json" | "curl">("json");
  const searchInputRef = React.useRef<HTMLInputElement>(null);

  // Keyboard shortcut listener
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey && e.key === "k") || (e.key === "/" && document.activeElement !== searchInputRef.current)) {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const toggleSave = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setSavedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
        toast.info("Removed from saved workflows");
      } else {
        next.add(id);
        toast.success("Saved to personal vault!");
      }
      return next;
    });
  };

  const copyBlueprint = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Raw blueprint JSON copied to clipboard!");
  };

  const exportFiltered = () => {
    const payload = JSON.stringify(filteredWorkflows, null, 2);
    const blob = new Blob([payload], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "flowcraft-blueprints-export.json";
    a.click();
    URL.revokeObjectURL(url);
    toast.success("Exported blueprints JSON bundle!");
  };

  // Filter logic
  const filteredWorkflows = React.useMemo(() => {
    return WORKFLOWS.filter((wf) => {
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = wf.title.toLowerCase().includes(q);
        const matchesDesc = wf.description.toLowerCase().includes(q);
        const matchesStack = wf.stack.some((s) => s.toLowerCase().includes(q));
        const matchesRole = wf.role.toLowerCase().includes(q);
        if (!matchesTitle && !matchesDesc && !matchesStack && !matchesRole) return false;
      }
      if (selectedRole !== "All" && wf.role !== selectedRole) return false;
      if (selectedPlatform !== "All" && wf.orchestrator !== selectedPlatform) return false;
      if (selectedDifficulty !== "All" && wf.difficulty !== selectedDifficulty) return false;
      return true;
    });
  }, [searchQuery, selectedRole, selectedPlatform, selectedDifficulty]);

  const activeFiltersCount =
    (selectedRole !== "All" ? 1 : 0) +
    (selectedPlatform !== "All" ? 1 : 0) +
    (selectedDifficulty !== "All" ? 1 : 0) +
    (verifiedOnly ? 1 : 0);

  const clearAllFilters = () => {
    setSearchQuery("");
    setSelectedRole("All");
    setSelectedPlatform("All");
    setSelectedDifficulty("All");
    setVerifiedOnly(false);
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Ambient Backdrop Glows */}
      <div className="absolute -top-12 left-1/4 w-96 h-96 bg-brand-lavender/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-accent-blue-soft/5 blur-[100px] rounded-full pointer-events-none -z-10" />

      {/* SECTION 1: Page Header & Telemetry */}
      <header className="flex flex-col gap-4 mb-8">
        {/* Eyebrow Meta Telemetry */}
        <div className="flex items-center gap-2 font-mono text-[11px] text-ink-tertiary">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-surface-1 border border-hairline text-brand-lavender font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-status-emerald animate-pulse" />
            RUNTIME CATALOG v2.4
          </span>
          <span className="text-hairline-strong">/</span>
          <span className="text-ink-subtle">42 ACTIVE PIPELINES VERIFIED</span>
          <span className="text-hairline-strong">/</span>
          <span className="hidden sm:inline text-ink-muted">ZERO FLUFF</span>
        </div>

        {/* Heading & Mission Statement */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
          <div className="max-w-3xl space-y-2">
            <h1 className="font-semibold text-3xl sm:text-4xl text-ink tracking-tight">
              Automated AI Workflows
            </h1>
            <p className="text-base sm:text-lg text-ink-muted leading-relaxed">
              Battle-tested, end-to-end automation pipelines connecting 2+ tools. Downloadable JSON blueprints, prompt schemas, and unedited video proof.
            </p>
          </div>

          {/* Live Telemetry Status Counter */}
          <div className="flex items-center gap-3 bg-surface-1 border border-hairline px-4 py-3 rounded-xl shrink-0 shadow-sm">
            <div className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-status-emerald opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-status-emerald" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-ink">
                Showing {filteredWorkflows.length} verified workflows
              </span>
              <span className="font-mono text-[11px] text-ink-subtle">
                Latencies &lt; 240ms • 100% reproducible
              </span>
            </div>
          </div>
        </div>

        {/* Quick Search Bar */}
        <div className="mt-2 relative flex flex-col md:flex-row items-center gap-3">
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-ink-tertiary">
              <Search className="h-4 w-4" />
            </div>
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by tool, stack (n8n, Claude 3.7, Clay), outcome, or role..."
              className="w-full bg-surface-1 border border-hairline text-ink placeholder:text-ink-tertiary text-sm pl-10 pr-24 py-3 rounded-xl focus:outline-none focus:border-hairline-strong focus:bg-surface-2 transition-all shadow-sm"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center gap-1.5">
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="text-ink-subtle hover:text-ink p-1 rounded transition-colors"
                  title="Clear search"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
              <kbd className="font-mono text-[11px] bg-surface-2 text-ink-subtle px-2 py-0.5 rounded border border-hairline hidden sm:inline-block">
                ⌘K
              </kbd>
            </div>
          </div>
          <button
            onClick={() => {}}
            className="w-full md:w-auto flex items-center justify-center gap-2 bg-brand-lavender hover:bg-[#828fff] text-white px-5 py-3 rounded-xl text-xs font-semibold tracking-wide transition-all shrink-0 shadow-sm"
          >
            <SlidersHorizontal className="h-3.5 w-3.5" />
            <span>Apply Query</span>
          </button>
        </div>

        {/* Active Filter Dismissible Badges */}
        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="font-mono text-[11px] text-ink-tertiary uppercase tracking-wider mr-1">
            Active Filters:
          </span>

          {selectedRole !== "All" && (
            <div
              onClick={() => setSelectedRole("All")}
              className="inline-flex items-center gap-1.5 bg-surface-2 border border-hairline text-ink text-xs px-2.5 py-1 rounded-full shadow-sm hover:bg-surface-3 transition-colors cursor-pointer group"
            >
              <span className="text-ink-subtle">Role:</span>
              <span>{selectedRole}</span>
              <X className="h-3 w-3 text-ink-tertiary group-hover:text-ink" />
            </div>
          )}

          {selectedPlatform !== "All" && (
            <div
              onClick={() => setSelectedPlatform("All")}
              className="inline-flex items-center gap-1.5 bg-surface-2 border border-hairline text-ink text-xs px-2.5 py-1 rounded-full shadow-sm hover:bg-surface-3 transition-colors cursor-pointer group"
            >
              <span className="text-ink-subtle">Platform:</span>
              <span>{selectedPlatform}</span>
              <X className="h-3 w-3 text-ink-tertiary group-hover:text-ink" />
            </div>
          )}

          {selectedDifficulty !== "All" && (
            <div
              onClick={() => setSelectedDifficulty("All")}
              className="inline-flex items-center gap-1.5 bg-surface-2 border border-hairline text-ink text-xs px-2.5 py-1 rounded-full shadow-sm hover:bg-surface-3 transition-colors cursor-pointer group"
            >
              <span className="text-ink-subtle">Difficulty:</span>
              <span>{selectedDifficulty}</span>
              <X className="h-3 w-3 text-ink-tertiary group-hover:text-ink" />
            </div>
          )}

          {verifiedOnly && (
            <div
              onClick={() => setVerifiedOnly(false)}
              className="inline-flex items-center gap-1.5 bg-surface-2 border border-hairline text-ink text-xs px-2.5 py-1 rounded-full shadow-sm hover:bg-surface-3 transition-colors cursor-pointer group"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-status-emerald" />
              <span>Verified Only</span>
              <X className="h-3 w-3 text-ink-tertiary group-hover:text-ink" />
            </div>
          )}

          {activeFiltersCount > 0 && (
            <button
              onClick={clearAllFilters}
              className="text-xs text-brand-lavender hover:text-[#828fff] transition-colors ml-2 underline underline-offset-4"
            >
              Clear all filters
            </button>
          )}
        </div>
      </header>

      {/* SECTION 2: Catalog Layout (Sidebar + Results Canvas) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Sticky Sidebar Filter Controls */}
        <aside className="lg:col-span-3 lg:sticky lg:top-20 space-y-6 bg-surface-1 border border-hairline p-5 rounded-2xl shadow-sm">
          {/* Sidebar Head */}
          <div className="flex items-center justify-between pb-3 bg-surface-2/40 -mx-5 -mt-5 p-4 rounded-t-2xl border-b border-hairline">
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="h-4 w-4 text-brand-lavender" />
              <span className="text-xs font-semibold text-ink uppercase tracking-wider">
                Filters
              </span>
              <span className="font-mono text-[10px] bg-brand-lavender text-white px-1.5 py-0.2 rounded-full">
                {activeFiltersCount}
              </span>
            </div>
            <button
              onClick={clearAllFilters}
              className="text-xs text-ink-subtle hover:text-ink transition-colors"
            >
              Reset
            </button>
          </div>

          {/* Filter Group 1: Role / Team */}
          <div className="space-y-2.5">
            <span className="text-[11px] font-semibold text-ink-muted uppercase tracking-wider block font-mono">
              Role / Team
            </span>
            <div className="space-y-1 text-xs text-ink-subtle">
              {[
                { name: "All", count: 42 },
                { name: "Developers", count: 28 },
                { name: "Sales & RevOps", count: 18 },
                { name: "Operations", count: 22 },
                { name: "Growth", count: 15 },
                { name: "Founders", count: 12 },
              ].map((r) => (
                <label
                  key={r.name}
                  onClick={() => setSelectedRole(r.name)}
                  className={`flex items-center justify-between py-1.5 px-2 rounded-lg cursor-pointer transition-colors ${
                    selectedRole === r.name
                      ? "bg-surface-2 text-ink font-medium"
                      : "hover:text-ink hover:bg-surface-2/40"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="role"
                      checked={selectedRole === r.name}
                      onChange={() => setSelectedRole(r.name)}
                      className="accent-brand-lavender"
                    />
                    <span>{r.name}</span>
                  </span>
                  <span className="font-mono text-[11px] text-ink-tertiary">{r.count}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="h-px bg-hairline w-full" />

          {/* Filter Group 2: Orchestrator Platform */}
          <div className="space-y-2.5">
            <span className="text-[11px] font-semibold text-ink-muted uppercase tracking-wider block font-mono">
              Orchestrator Platform
            </span>
            <div className="space-y-1 text-xs text-ink-subtle">
              {[
                { name: "All", count: 42 },
                { name: "n8n", count: 34 },
                { name: "Make.com", count: 26 },
                { name: "Zapier", count: 19 },
                { name: "Python / LangGraph", count: 14 },
              ].map((p) => (
                <label
                  key={p.name}
                  onClick={() => setSelectedPlatform(p.name)}
                  className={`flex items-center justify-between py-1.5 px-2 rounded-lg cursor-pointer transition-colors ${
                    selectedPlatform === p.name
                      ? "bg-surface-2 text-ink font-medium"
                      : "hover:text-ink hover:bg-surface-2/40"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="platform"
                      checked={selectedPlatform === p.name}
                      onChange={() => setSelectedPlatform(p.name)}
                      className="accent-brand-lavender"
                    />
                    <span>{p.name}</span>
                  </span>
                  <span className="font-mono text-[11px] text-ink-tertiary">{p.count}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="h-px bg-hairline w-full" />

          {/* Filter Group 3: Difficulty Tier */}
          <div className="space-y-2.5">
            <span className="text-[11px] font-semibold text-ink-muted uppercase tracking-wider block font-mono">
              Implementation Difficulty
            </span>
            <div className="space-y-1.5 text-xs text-ink-subtle">
              {[
                { name: "All", label: "All Complexity Tiers" },
                { name: "No-Code", label: "No-Code (Visual Canvas)" },
                { name: "Low-Code", label: "Low-Code (JSON / Webhooks)" },
                { name: "Developer", label: "Developer (Node / API Scripts)" },
              ].map((d) => (
                <label
                  key={d.name}
                  onClick={() => setSelectedDifficulty(d.name)}
                  className={`flex items-center gap-2.5 cursor-pointer py-1 ${
                    selectedDifficulty === d.name ? "text-ink font-medium" : "hover:text-ink"
                  }`}
                >
                  <input
                    type="radio"
                    name="difficulty"
                    checked={selectedDifficulty === d.name}
                    onChange={() => setSelectedDifficulty(d.name)}
                    className="accent-brand-lavender"
                  />
                  <span>{d.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="h-px bg-hairline w-full" />

          {/* Filter Group 4: Verification Toggle */}
          <div className="space-y-3 pt-1">
            <div className="flex items-center justify-between p-2.5 bg-surface-2 border border-hairline rounded-xl">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-status-emerald" />
                <span className="text-xs font-semibold text-ink">Verified Working</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={verifiedOnly}
                  onChange={(e) => setVerifiedOnly(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-8 h-4 bg-surface-3 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-brand-lavender" />
              </label>
            </div>
          </div>
        </aside>

        {/* Main Results Canvas */}
        <main className="lg:col-span-9 flex flex-col gap-6">
          {/* Controls Bar atop Grid */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-surface-1 border border-hairline p-3 sm:p-4 rounded-2xl shadow-sm">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[11px] text-ink-tertiary uppercase">SORT BY:</span>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-surface-2 hover:bg-surface-3 text-ink text-xs font-medium pl-3 pr-8 py-1.5 rounded-lg border border-hairline focus:outline-none cursor-pointer transition-colors shadow-sm"
                >
                  <option>Highest Time Saved</option>
                  <option>Most Popular (Downloads)</option>
                  <option>Easiest Setup</option>
                  <option>Newly Verified (May 2026)</option>
                </select>
                <ChevronDown className="h-3.5 w-3.5 absolute right-2.5 top-2 pointer-events-none text-ink-tertiary" />
              </div>
            </div>

            <div className="flex items-center gap-3 self-end sm:self-auto">
              {/* View Mode Switcher */}
              <div className="flex items-center p-0.5 bg-surface-2 border border-hairline rounded-lg">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-1.5 rounded transition-all ${
                    viewMode === "grid" ? "bg-surface-3 text-ink shadow-sm" : "text-ink-tertiary hover:text-ink"
                  }`}
                  title="Grid View"
                >
                  <LayoutGrid className="h-3.5 w-3.5" />
                </button>
                <button
                  onClick={() => setViewMode("table")}
                  className={`p-1.5 rounded transition-all ${
                    viewMode === "table" ? "bg-surface-3 text-ink shadow-sm" : "text-ink-tertiary hover:text-ink"
                  }`}
                  title="Table View"
                >
                  <List className="h-3.5 w-3.5" />
                </button>
              </div>

              {/* Batch Export CTA */}
              <button
                onClick={exportFiltered}
                className="flex items-center gap-1.5 bg-surface-2 hover:bg-surface-3 text-ink text-xs font-medium px-3.5 py-1.5 rounded-lg border border-hairline transition-colors shadow-sm"
              >
                <Download className="h-3.5 w-3.5 text-brand-lavender" />
                <span className="hidden sm:inline">Export Blueprints</span>
              </button>
            </div>
          </div>

          {/* Results Grid / Table */}
          {filteredWorkflows.length === 0 ? (
            <div className="p-12 text-center bg-surface-1 border border-hairline rounded-2xl space-y-3">
              <WorkflowIcon className="h-8 w-8 text-ink-tertiary mx-auto opacity-50" />
              <h3 className="text-base font-semibold text-ink">No workflows match this query</h3>
              <p className="text-xs text-ink-subtle max-w-sm mx-auto">
                Try loosening your filters or resetting the search keywords.
              </p>
              <button
                onClick={clearAllFilters}
                className="text-xs text-brand-lavender hover:underline pt-2 font-medium"
              >
                Reset all filters
              </button>
            </div>
          ) : viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {filteredWorkflows.map((wf) => {
                const isSaved = savedIds.has(wf.id);
                return (
                  <article
                    key={wf.id}
                    className="group flex flex-col justify-between p-5 bg-surface-1 hover:bg-surface-2 border border-hairline hover:border-hairline-strong rounded-xl transition-all duration-200 relative"
                  >
                    <div className="space-y-3">
                      {/* Top Header */}
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="bg-surface-3 text-ink-subtle text-[11px] px-2 py-0.5 rounded border border-hairline font-medium">
                            {wf.role}
                          </span>
                          <span className="bg-surface-3 text-ink-subtle text-[11px] px-2 py-0.5 rounded border border-hairline font-medium">
                            {wf.difficulty}
                          </span>
                          <span className="text-[11px] font-mono text-ink-subtle bg-surface-2 px-1.5 py-0.5 rounded border border-hairline flex items-center gap-1">
                            <span className="text-[9px] text-brand-lavender">▶</span>
                            {wf.videoDuration}
                          </span>
                        </div>
                        <button
                          onClick={(e) => toggleSave(wf.id, e)}
                          className={`p-1 transition-colors ${
                            isSaved ? "text-brand-lavender" : "text-ink-tertiary hover:text-brand-lavender"
                          }`}
                          title={isSaved ? "Saved" : "Save Workflow"}
                        >
                          <Bookmark className={`h-4 w-4 ${isSaved ? "fill-brand-lavender" : ""}`} />
                        </button>
                      </div>

                      {/* Title & Summary */}
                      <div>
                        <Link href={`/workflows/${wf.slug}`}>
                          <h3 className="text-[15px] font-semibold text-ink group-hover:text-white transition-colors line-clamp-1 mb-1.5">
                            {wf.title}
                          </h3>
                        </Link>
                        <p className="text-xs text-ink-subtle line-clamp-2 leading-relaxed mb-4">
                          {wf.description}
                        </p>
                      </div>

                      {/* Stack Pipeline */}
                      <div className="space-y-1.5">
                        <span className="text-[10px] font-mono text-ink-tertiary uppercase tracking-wider block">
                          Stack Pipeline
                        </span>
                        <div className="flex items-center gap-1.5 overflow-x-auto text-[11px] font-mono scrollbar-none pb-1">
                          {wf.stack.map((tool, idx) => (
                            <React.Fragment key={tool}>
                              <span className="bg-surface-2 text-ink-muted px-2 py-0.5 rounded border border-hairline shrink-0">
                                {tool}
                              </span>
                              {idx < wf.stack.length - 1 && (
                                <span className="text-ink-tertiary">→</span>
                              )}
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Metrics / Footer */}
                    <div className="pt-4 mt-4 border-t border-hairline flex flex-col gap-2">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-[#e4f222] flex items-center gap-1">
                          <span>⚡</span> {wf.timeSaved} saved
                        </span>
                        <span className="text-ink-subtle">{wf.cost}</span>
                      </div>
                      <div className="flex items-center justify-between pt-1">
                        <span className="text-[11px] font-mono text-ink-subtle flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-status-emerald" /> Verified {wf.verifiedDate}
                        </span>
                        <Link
                          href={`/workflows/${wf.slug}`}
                          className="text-xs font-medium text-brand-lavender hover:text-[#828fff] inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-all"
                        >
                          Get Flow →
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            /* Table View */
            <div className="overflow-x-auto bg-surface-1 border border-hairline rounded-2xl shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-hairline text-ink-tertiary font-mono text-[11px] uppercase tracking-wider bg-surface-2/40">
                    <th className="py-3 px-4">Workflow</th>
                    <th className="py-3 px-4">Stack</th>
                    <th className="py-3 px-4">Platform</th>
                    <th className="py-3 px-4">Time Saved</th>
                    <th className="py-3 px-4">Cost</th>
                    <th className="py-3 px-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-hairline text-xs">
                  {filteredWorkflows.map((wf) => (
                    <tr key={wf.id} className="hover:bg-surface-2 transition-colors">
                      <td className="py-3 px-4 max-w-xs">
                        <Link href={`/workflows/${wf.slug}`} className="font-medium text-ink hover:text-brand-lavender">
                          {wf.title}
                        </Link>
                        <p className="text-[11px] text-ink-subtle truncate mt-0.5">{wf.description}</p>
                      </td>
                      <td className="py-3 px-4 font-mono text-[11px]">
                        <span className="text-ink-muted">{wf.stack.join(" → ")}</span>
                      </td>
                      <td className="py-3 px-4">
                        <span className="px-2 py-0.5 rounded bg-surface-2 border border-hairline text-[11px] text-ink-subtle font-mono">
                          {wf.orchestrator}
                        </span>
                      </td>
                      <td className="py-3 px-4 font-mono text-[#e4f222]">⚡ {wf.timeSaved}</td>
                      <td className="py-3 px-4 font-mono text-ink-subtle">{wf.cost}</td>
                      <td className="py-3 px-4 text-right">
                        <Link
                          href={`/workflows/${wf.slug}`}
                          className="text-brand-lavender hover:text-[#828fff] font-medium"
                        >
                          View →
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* SECTION 3: Standard Blueprint Schema Drawer / Code Viewport */}
          <section className="mt-8 p-6 bg-surface-1 border border-hairline rounded-2xl shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-[11px] font-mono text-brand-lavender uppercase tracking-wider block font-semibold">
                  Standard Blueprint Schema
                </span>
                <h2 className="text-xl font-semibold text-ink">Production-Grade JSON Format</h2>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[11px] bg-surface-2 border border-hairline text-status-emerald px-2.5 py-1 rounded-full flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-status-emerald" /> n8n v1.40+ Compatible
                </span>
                <button
                  onClick={() => copyBlueprint(JSON.stringify(WORKFLOWS[0].blueprintSpec, null, 2))}
                  className="bg-surface-2 hover:bg-surface-3 text-ink text-xs px-3 py-1.5 rounded-lg border border-hairline transition-colors flex items-center gap-1 shadow-sm font-medium"
                >
                  <Copy className="h-3 w-3" /> Copy Raw
                </button>
              </div>
            </div>

            {/* Code Viewport Telemetry */}
            <div className="relative bg-surface-4 p-4 rounded-xl font-mono text-xs text-ink-muted overflow-x-auto shadow-inner border border-hairline">
              <div className="flex items-center justify-between text-[11px] text-ink-tertiary pb-2 mb-2 border-b border-hairline">
                <span>flowcraft-spec-v2.json</span>
                <span>application/vnd.flowcraft.blueprint+json</span>
              </div>
              <pre className="leading-relaxed">
                <code>{JSON.stringify(WORKFLOWS[0].blueprintSpec, null, 2)}</code>
              </pre>
            </div>
          </section>

          {/* SECTION 4: Pagination & Progress Meter */}
          <div className="flex flex-col items-center justify-center gap-4 py-8">
            <div className="w-full max-w-xs space-y-1.5 text-center">
              <div className="flex justify-between font-mono text-[11px] text-ink-tertiary">
                <span>Showing {filteredWorkflows.length} of 42 Workflows</span>
                <span>{Math.round((filteredWorkflows.length / 42) * 100)}%</span>
              </div>
              <div className="w-full h-1.5 bg-surface-2 rounded-full overflow-hidden border border-hairline">
                <div
                  className="h-full bg-brand-lavender rounded-full transition-all duration-300"
                  style={{ width: `${Math.round((filteredWorkflows.length / 42) * 100)}%` }}
                />
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => toast.info("All 6 featured production workflows loaded.")}
                className="bg-surface-2 hover:bg-surface-3 text-ink text-xs font-semibold px-5 py-2.5 rounded-xl border border-hairline transition-all shadow-sm flex items-center gap-2"
              >
                <ChevronDown className="h-4 w-4" />
                <span>Load More Workflows</span>
              </button>
              <button
                onClick={exportFiltered}
                className="bg-surface-1 hover:bg-surface-2 text-ink-muted hover:text-ink text-xs font-semibold px-4 py-2.5 rounded-xl border border-hairline transition-all shadow-sm flex items-center gap-1.5"
              >
                <Archive className="h-4 w-4 text-brand-lavender" />
                <span>Download All Filtered Blueprints (ZIP)</span>
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

