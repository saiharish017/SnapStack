"use client";

import * as React from "react";
import { Search, Bot, Terminal, ArrowRight, CornerDownLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface MatchingWorkflow {
  title: string;
  stack: string;
  timeSaved: string;
  href: string;
}

interface MatchingTool {
  name: string;
  initials: string;
  category: string;
  href: string;
}

const MATCHING_WORKFLOWS: MatchingWorkflow[] = [
  {
    title: "Customer Support Auto-Triaging with Claude 3.7",
    stack: "n8n • Gmail • Claude 3.7 • Linear",
    timeSaved: "14 hrs/wk",
    href: "/workflows/support-draft-replier",
  },
  {
    title: "Full-Stack PR Reviewer via Cursor & GitHub Actions",
    stack: "Cursor Agent • GitHub Actions • SonarQube",
    timeSaved: "18 hrs/wk",
    href: "/workflows/github-auto-pr",
  },
];

const MATCHING_TOOLS: MatchingTool[] = [
  {
    name: "n8n",
    initials: "n8",
    category: "Workflow Automation",
    href: "/tools/n8n",
  },
  {
    name: "DeepSeek-R1",
    initials: "DS",
    category: "Reasoning LLM",
    href: "/tools/deepseek-r1",
  },
  {
    name: "Claude Cowork",
    initials: "CL",
    category: "Autonomous Agent",
    href: "/tools/claude-3-7-sonnet",
  },
];

export function LiveSearchAutocomplete() {
  const [query, setQuery] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const router = useRouter();

  React.useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        inputRef.current?.focus();
        setIsOpen(true);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
        inputRef.current?.blur();
      }
    }

    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsOpen(false);
    if (query.trim()) {
      router.push(`/workflows?q=${encodeURIComponent(query.trim())}`);
    } else {
      router.push("/workflows");
    }
  }

  return (
    <div ref={containerRef} className="w-full max-w-2xl relative mb-12 text-left">
      <form
        onSubmit={handleSubmit}
        className="relative flex items-center bg-surface-1 border border-hairline hover:border-hairline-strong focus-within:border-brand-lavender focus-within:shadow-[0_0_24px_rgba(94,106,210,0.25)] rounded-xl shadow-xl transition-all duration-200"
      >
        <Search className="w-5 h-5 text-ink-subtle ml-4 mr-1 select-none shrink-0" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onFocus={() => setIsOpen(true)}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          placeholder="Search workflows, tools, or target outcomes (e.g., 'auto-qualify leads', 'n8n PR triage')..."
          className="w-full bg-transparent py-3.5 pr-20 text-ink placeholder:text-ink-tertiary text-sm focus:outline-none"
        />
        <div className="absolute right-3 flex items-center gap-1 select-none pointer-events-none">
          <kbd className="font-mono text-[11px] bg-surface-2 border border-hairline text-ink-muted px-2 py-0.5 rounded">
            ⌘K
          </kbd>
        </div>
      </form>

      {/* Live Autocomplete Panel Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-surface-1 border border-hairline-strong rounded-xl shadow-2xl p-3 z-50 transition-all duration-150 backdrop-blur-xl">
          {/* Workflows Group */}
          <div className="px-2 pt-1 pb-1.5 flex items-center justify-between text-ink-tertiary">
            <span className="font-mono text-[11px] tracking-wider uppercase font-semibold text-brand-lavender">
              Matching Workflows
            </span>
            <span className="font-mono text-[11px] text-ink-tertiary">
              {MATCHING_WORKFLOWS.length} matching
            </span>
          </div>

          <div className="space-y-1">
            {MATCHING_WORKFLOWS.map((wf, idx) => (
              <Link
                key={idx}
                href={wf.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-lg hover:bg-surface-2 group transition-colors"
              >
                <div className="flex items-center gap-3 min-w-0 pr-2">
                  <div className="w-7 h-7 rounded-md bg-surface-2 border border-hairline flex items-center justify-center text-brand-lavender shrink-0">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-ink group-hover:text-brand-lavender transition-colors truncate">
                      {wf.title}
                    </p>
                    <p className="text-xs text-ink-tertiary font-mono truncate">
                      {wf.stack}
                    </p>
                  </div>
                </div>
                <span className="font-mono text-xs bg-surface-3 text-status-emerald px-2 py-0.5 rounded border border-hairline shrink-0">
                  {wf.timeSaved}
                </span>
              </Link>
            ))}
          </div>

          {/* Verified Tools Group */}
          <div className="px-2 pt-3 pb-1 flex items-center justify-between text-ink-tertiary border-t border-hairline/60 mt-2">
            <span className="font-mono text-[11px] tracking-wider uppercase font-semibold text-brand-lavender">
              Verified Tools
            </span>
            <span className="font-mono text-[11px] text-ink-tertiary">
              {MATCHING_TOOLS.length} tools
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2 px-1 py-1.5">
            {MATCHING_TOOLS.map((t, idx) => (
              <Link
                key={idx}
                href={t.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 p-2 rounded-lg bg-surface-2 hover:bg-surface-3 border border-hairline transition-colors"
              >
                <div className="w-6 h-6 rounded bg-surface-3 border border-hairline flex items-center justify-center font-mono text-[11px] font-semibold text-brand-lavender">
                  {t.initials}
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-medium text-ink block truncate">
                    {t.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Keyboard Navigation Footer */}
          <div className="mt-2 pt-2 px-2 flex items-center justify-between font-mono text-[11px] text-ink-tertiary bg-surface-2/50 border border-hairline/40 rounded-lg py-1.5">
            <span className="flex items-center gap-1">
              Press <kbd className="bg-surface-3 text-ink px-1 rounded">↵</kbd> to search all
            </span>
            <span className="flex items-center gap-1">
              <kbd className="bg-surface-3 text-ink px-1 rounded">ESC</kbd> to dismiss
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

