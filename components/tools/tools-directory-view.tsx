"use client";

import * as React from "react";
import Link from "next/link";
import { toast } from "sonner";
import {
  Search,
  SlidersHorizontal,
  Bookmark,
  CheckCircle2,
  ExternalLink,
  Shield,
  Zap,
  PlayCircle,
  Brain,
  ChevronDown,
  Terminal,
  Cpu,
  Video,
  Mic,
  Code,
  Layers,
  Sparkles,
} from "lucide-react";
import { TOOLS, ToolProfile } from "@/lib/data/tools";

export function ToolsDirectoryView() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState<string>("All");
  const [selectedPricing, setSelectedPricing] = React.useState<string>("All");
  const [activeCompliance, setActiveCompliance] = React.useState<Set<string>>(new Set(["No Data Training"]));
  const [sortBy, setSortBy] = React.useState("Most Workflows Built");
  const [bookmarkedIds, setBookmarkedIds] = React.useState<Set<string>>(new Set(["tool-claude-3-7"]));
  const searchInputRef = React.useRef<HTMLInputElement>(null);

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

  const toggleBookmark = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setBookmarkedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
        toast.info("Removed from bookmarked tools.");
      } else {
        next.add(id);
        toast.success("Saved tool to your personal vault!");
      }
      return next;
    });
  };

  const toggleCompliance = (tag: string) => {
    setActiveCompliance((prev) => {
      const next = new Set(prev);
      if (next.has(tag)) {
        next.delete(tag);
      } else {
        next.add(tag);
      }
      return next;
    });
  };

  const filteredTools = React.useMemo(() => {
    return TOOLS.filter((tool) => {
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = tool.name.toLowerCase().includes(q);
        const matchesCompany = tool.company.toLowerCase().includes(q);
        const matchesDesc = tool.description.toLowerCase().includes(q);
        const matchesCategory = tool.category.toLowerCase().includes(q);
        if (!matchesName && !matchesCompany && !matchesDesc && !matchesCategory) return false;
      }
      if (selectedCategory !== "All" && tool.category !== selectedCategory) return false;
      if (selectedPricing !== "All" && tool.pricingType !== selectedPricing) return false;

      // Compliance filter
      for (const req of Array.from(activeCompliance)) {
        if (!tool.compliance.includes(req) && tool.dataTraining !== req) {
          return false;
        }
      }

      return true;
    });
  }, [searchQuery, selectedCategory, selectedPricing, activeCompliance]);

  const categories = [
    "All",
    "LLMs & Reasoning",
    "Coding Assistants",
    "Automation & Agents",
    "Audio & Voice",
    "Video Generation",
  ];

  const complianceTags = ["No Data Training", "SOC 2 Type II", "GDPR", "HIPAA Ready"];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* SECTION 1: Page Header & Telemetry */}
      <section className="flex flex-col gap-4 mb-6">
        <div className="flex items-center gap-2 self-start">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-2 border border-hairline text-ink-muted font-mono text-xs shadow-sm">
            <span className="w-2 h-2 rounded-full bg-status-emerald animate-pulse" />
            84 PRODUCTION-VETTED AI TOOLS / ZERO PROMOTIONAL FLUFF / AUDITED WEEKLY
          </span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-3xl space-y-2">
            <h1 className="text-3xl sm:text-4xl font-semibold text-ink tracking-tight">
              Verified AI Tools Directory
            </h1>
            <p className="text-base sm:text-lg text-ink-muted leading-relaxed">
              Production-ready LLMs, developer agents, multimodal engines, and workflow runtimes audited for enterprise privacy, deterministic latency, and validated pipeline blueprints.
            </p>
          </div>

          {/* Telemetry Stats Panel */}
          <div className="hidden xl:flex items-center gap-4 bg-surface-1 border border-hairline px-5 py-3 rounded-xl shadow-sm">
            <div className="flex flex-col pr-4 border-r border-hairline">
              <span className="font-mono text-[10px] text-ink-tertiary uppercase tracking-wider">Pass Rate</span>
              <span className="text-xl font-semibold text-ink font-mono">11.4%</span>
            </div>
            <div className="flex flex-col pr-4 border-r border-hairline">
              <span className="font-mono text-[10px] text-ink-tertiary uppercase tracking-wider">Avg Latency</span>
              <span className="text-xl font-semibold text-ink font-mono">420ms</span>
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-[10px] text-ink-tertiary uppercase tracking-wider">No-Train SLAs</span>
              <span className="text-xl font-semibold text-status-emerald font-mono">100%</span>
            </div>
          </div>
        </div>

        {/* Search Control */}
        <div className="mt-2 w-full bg-surface-1 border border-hairline p-1.5 rounded-xl flex flex-col sm:flex-row items-center gap-2 shadow-sm">
          <div className="relative flex-1 w-full flex items-center">
            <Search className="text-ink-subtle absolute left-3.5 h-4 w-4 pointer-events-none" />
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by tool name, capability, model family, or company (e.g. Claude 3.7, Cursor, ElevenLabs)..."
              className="w-full bg-transparent text-ink placeholder:text-ink-tertiary pl-11 pr-14 py-2.5 text-sm rounded-lg focus:outline-none"
            />
            <kbd className="hidden sm:inline-flex items-center absolute right-3 font-mono text-[11px] bg-surface-2 text-ink-subtle px-2 py-0.5 rounded border border-hairline">
              ⌘K
            </kbd>
          </div>
          <button
            onClick={() => {}}
            className="w-full sm:w-auto bg-brand-lavender hover:bg-[#828fff] text-white text-xs font-semibold px-5 py-2.5 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-sm"
          >
            <SlidersHorizontal className="h-3.5 w-3.5" />
            <span>Apply Filter</span>
          </button>
        </div>

        {/* Category Quick-Filter Horizontal Scroll */}
        <div className="overflow-x-auto pb-1 mt-1 scrollbar-none">
          <div className="flex items-center gap-2 min-w-max">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors border ${
                  selectedCategory === cat
                    ? "bg-surface-3 border-brand-lavender text-ink shadow-sm"
                    : "bg-surface-1 border-hairline text-ink-subtle hover:text-ink"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: Advanced Controls & Compliance Chips */}
      <section className="w-full mb-6">
        <div className="bg-surface-1 border border-hairline p-4 rounded-xl flex flex-col gap-4 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Left: Compliance & Pricing Filter Chips */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="relative inline-block">
                <select
                  value={selectedPricing}
                  onChange={(e) => setSelectedPricing(e.target.value)}
                  className="appearance-none bg-surface-2 border border-hairline text-ink text-xs font-medium pl-3 pr-8 py-1.5 rounded-lg focus:outline-none cursor-pointer"
                >
                  <option value="All">All Pricing</option>
                  <option value="Free">Free / Community</option>
                  <option value="Freemium">Freemium</option>
                  <option value="Paid">Paid Only</option>
                  <option value="Open Source">Open Source</option>
                </select>
                <ChevronDown className="h-3.5 w-3.5 absolute right-2.5 top-2 pointer-events-none text-ink-tertiary" />
              </div>

              {complianceTags.map((tag) => {
                const isActive = activeCompliance.has(tag);
                return (
                  <button
                    key={tag}
                    onClick={() => toggleCompliance(tag)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all border ${
                      isActive
                        ? "bg-brand-lavender text-white border-brand-lavender shadow-sm"
                        : "bg-surface-2 border-hairline text-ink-muted hover:text-ink"
                    }`}
                  >
                    <Shield className="h-3.5 w-3.5" />
                    <span>{tag}</span>
                  </button>
                );
              })}
            </div>

            {/* Right: Sort & Count */}
            <div className="flex items-center gap-4 shrink-0 ml-auto">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[11px] text-ink-tertiary">Sort:</span>
                <div className="relative inline-block">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-surface-2 border border-hairline text-ink text-xs font-medium pl-3 pr-8 py-1.5 rounded-lg focus:outline-none cursor-pointer"
                  >
                    <option>Most Workflows Built</option>
                    <option>Alphabetical (A–Z)</option>
                    <option>Price (Low to High)</option>
                    <option>Newly Verified</option>
                  </select>
                  <ChevronDown className="h-3.5 w-3.5 absolute right-2.5 top-2 pointer-events-none text-ink-tertiary" />
                </div>
              </div>

              <div className="flex items-center gap-2 pl-3 border-l border-hairline font-mono text-xs text-ink-muted">
                <span>
                  Showing <strong className="text-ink">{filteredTools.length}</strong> Tools
                </span>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All");
                    setSelectedPricing("All");
                    setActiveCompliance(new Set());
                  }}
                  className="text-brand-lavender hover:underline ml-1"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: 3-Column Tools Directory Card Grid */}
      <section className="w-full pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool) => {
            const isBookmarked = bookmarkedIds.has(tool.id);
            return (
              <article
                key={tool.id}
                className="bg-surface-1 hover:bg-surface-2 border border-hairline hover:border-hairline-strong transition-all duration-200 rounded-xl p-5 flex flex-col justify-between shadow-sm group"
              >
                <div className="flex flex-col gap-3">
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-surface-3 border border-hairline flex items-center justify-center text-brand-lavender shrink-0 shadow-inner">
                        {tool.category === "LLMs & Reasoning" ? (
                          <Brain className="h-6 w-6 text-brand-lavender" />
                        ) : tool.category === "Coding Assistants" ? (
                          <Code className="h-6 w-6 text-brand-lavender" />
                        ) : tool.category === "Audio & Voice" ? (
                          <Mic className="h-6 w-6 text-brand-lavender" />
                        ) : tool.category === "Video Generation" ? (
                          <Video className="h-6 w-6 text-brand-lavender" />
                        ) : (
                          <Layers className="h-6 w-6 text-brand-lavender" />
                        )}
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h2 className="text-base font-semibold text-ink tracking-tight group-hover:text-white transition-colors">
                            {tool.name}
                          </h2>
                          <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono bg-status-emerald/10 text-status-emerald border border-status-emerald/20">
                            <span className="w-1 h-1 rounded-full bg-status-emerald mr-1" />
                            Verified
                          </span>
                        </div>
                        <p className="text-xs text-ink-subtle">{tool.company}</p>
                      </div>
                    </div>
                    <button
                      onClick={(e) => toggleBookmark(tool.id, e)}
                      className={`p-1 rounded-md transition-colors ${
                        isBookmarked ? "text-brand-lavender" : "text-ink-tertiary hover:text-ink"
                      }`}
                      title={isBookmarked ? "Bookmarked" : "Bookmark tool"}
                    >
                      <Bookmark className={`h-4 w-4 ${isBookmarked ? "fill-brand-lavender" : ""}`} />
                    </button>
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                    <span className="px-2 py-0.5 rounded-full bg-surface-3 text-ink-muted text-xs border border-hairline">
                      {tool.category}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-surface-2 text-ink-subtle text-xs border border-hairline">
                      {tool.pricingType} from {tool.startingPrice}
                    </span>
                  </div>

                  {/* Summary */}
                  <p className="text-xs text-ink-muted leading-relaxed line-clamp-2">
                    {tool.description}
                  </p>

                  {/* Compliance Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1 font-mono text-[10px]">
                    {tool.compliance.slice(0, 3).map((comp) => (
                      <span key={comp} className="bg-surface-2 text-ink-muted px-2 py-0.5 rounded border border-hairline">
                        {comp}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Strip & Links */}
                <div className="mt-4 pt-3 border-t border-hairline flex flex-col gap-3">
                  <div className="flex items-center justify-between text-ink-subtle font-mono text-[11px] py-1.5 px-2 bg-surface-2 rounded-lg border border-hairline">
                    <span className="inline-flex items-center gap-1">
                      <PlayCircle className="h-3 w-3 text-brand-lavender" /> {tool.guidesCount} Guides
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Zap className="h-3 w-3 text-[#e4f222]" /> {tool.workflowsCount} Workflows
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Sparkles className="h-3 w-3 text-accent-blue-soft" /> {tool.skillsCount} Skills
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <Link
                      href={`/tools/${tool.slug}`}
                      className="bg-surface-3 hover:bg-surface-4 text-ink text-xs font-semibold py-2 px-3 rounded-lg text-center transition-colors border border-hairline shadow-sm"
                    >
                      View Profile
                    </Link>
                    <a
                      href={tool.websiteUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-brand-lavender hover:bg-[#828fff] text-white text-xs font-semibold py-2 px-3 rounded-lg flex items-center justify-center gap-1 transition-colors shadow-sm"
                    >
                      <span>Visit Site</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}

