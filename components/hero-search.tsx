"use client";

import * as React from "react";
import { Search, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const CATEGORIES = [
  { id: "all", label: "All", count: 148 },
  { id: "founders", label: "Founders", count: 34 },
  { id: "sales", label: "Sales & CRM", count: 29 },
  { id: "marketing", label: "Marketing", count: 41 },
  { id: "operations", label: "Operations", count: 26 },
  { id: "devs", label: "Devs & LLMOps", count: 18 },
];

export function HeroSearch() {
  const [query, setQuery] = React.useState("");
  const [activeCategory, setActiveCategory] = React.useState("all");
  const inputRef = React.useRef<HTMLInputElement>(null);
  const router = useRouter();

  React.useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (!query.trim()) {
      router.push(`/workflows?category=${activeCategory}`);
    } else {
      router.push(`/workflows?q=${encodeURIComponent(query.trim())}&category=${activeCategory}`);
    }
  }

  return (
    <div className="w-full flex flex-col items-center">
      {/* Search Input Bar */}
      <form
        onSubmit={handleSearch}
        className="w-full max-w-3xl bg-surface-1/90 border border-hairline hover:border-hairline-strong focus-within:border-brand-lavender focus-within:shadow-[0_0_24px_rgba(94,106,210,0.2)] rounded-xl p-1.5 shadow-2xl transition-all mb-4"
      >
        <div className="flex items-center gap-2">
          <div className="pl-3 text-ink-subtle">
            <Search className="w-5 h-5 text-ink-subtle" />
          </div>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="What job do you want done? (e.g. Auto-extract invoice data into Sheets...)"
            className="flex-1 bg-transparent py-2.5 px-2 text-ink placeholder:text-ink-tertiary text-sm sm:text-base focus:outline-none"
          />
          <div className="hidden sm:flex items-center gap-1 bg-surface-2 border border-hairline px-2 py-1 rounded">
            <kbd className="font-mono text-[11px] text-ink-muted">⌘</kbd>
            <kbd className="font-mono text-[11px] text-ink-muted">K</kbd>
          </div>
          <button
            type="submit"
            className="flex items-center gap-1.5 bg-brand-lavender hover:bg-brand-hover text-white px-5 py-2.5 rounded-lg text-sm font-medium shadow-[0_0_12px_rgba(94,106,210,0.35)] transition-all shrink-0"
          >
            <span>Search</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </form>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                isActive
                  ? "bg-surface-2 border border-hairline-strong text-ink shadow-sm"
                  : "bg-surface-1 hover:bg-surface-2 border border-hairline hover:border-hairline-strong text-ink-subtle hover:text-ink"
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`font-mono text-[10px] px-1.5 py-0.5 rounded-full ${
                  isActive
                    ? "bg-surface-1 border border-hairline text-ink-muted"
                    : "bg-surface-2 text-ink-tertiary"
                }`}
              >
                {cat.count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

