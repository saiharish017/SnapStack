import Link from "next/link";
import { Search, Star, Plus, User, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#010102]/80 backdrop-blur-xl border-b border-hairline">
      <div className="h-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand Logo & Version Tag */}
        <div className="flex items-center gap-3 shrink-0">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-surface-2 border border-hairline group-hover:border-hairline-strong flex items-center justify-center transition-colors">
              <Layers className="w-4 h-4 text-brand-lavender" />
            </div>
            <span className="text-base font-semibold text-ink tracking-tight">
              SnapStack
            </span>
          </Link>
          <span className="font-mono text-[11px] uppercase px-2 py-0.5 rounded-full bg-surface-1 border border-hairline text-ink-subtle">
            v1.0
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
          <Link
            href="/workflows"
            className="text-ink hover:text-white bg-surface-2/60 border border-hairline-strong rounded-lg px-3 py-1.5 transition-all"
          >
            Workflows
          </Link>
          <Link
            href="/skills"
            className="text-ink-subtle hover:text-ink hover:bg-surface-1 border border-transparent hover:border-hairline px-3 py-1.5 rounded-lg transition-all"
          >
            Skills
          </Link>
          <Link
            href="/tools"
            className="text-ink-subtle hover:text-ink hover:bg-surface-1 border border-transparent hover:border-hairline px-3 py-1.5 rounded-lg transition-all"
          >
            AI Tools
          </Link>
          <Link
            href="/videos"
            className="text-ink-subtle hover:text-ink hover:bg-surface-1 border border-transparent hover:border-hairline px-3 py-1.5 rounded-lg transition-all"
          >
            Videos
          </Link>
          <Link
            href="/compare"
            className="text-ink-subtle hover:text-ink hover:bg-surface-1 border border-transparent hover:border-hairline px-3 py-1.5 rounded-lg transition-all"
          >
            Compare
          </Link>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5 shrink-0">
          {/* Quick Search Shortcut */}
          <button
            type="button"
            className="hidden sm:flex items-center gap-2 bg-surface-1 hover:bg-surface-2 border border-hairline hover:border-hairline-strong text-ink-subtle hover:text-ink px-3 py-1.5 rounded-lg transition-all text-xs"
          >
            <Search className="w-3.5 h-3.5 text-ink-subtle" />
            <span>Search</span>
            <kbd className="font-mono text-[10px] bg-surface-2 border border-hairline text-ink-muted px-1.5 py-0.5 rounded">
              ⌘K
            </kbd>
          </button>

          {/* GitHub Star Pill */}
          <a
            href="https://github.com/saiharish017/SnapStack"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-1.5 bg-surface-1 hover:bg-surface-2 border border-hairline hover:border-hairline-strong text-ink px-3 py-1.5 rounded-lg text-xs transition-all"
          >
            <Star className="w-3.5 h-3.5 text-brand-lavender fill-brand-lavender" />
            <span>Star</span>
            <span className="font-mono text-[10px] text-ink-muted px-1.5 py-0.2 rounded bg-surface-2 border border-hairline">
              4.2k
            </span>
          </a>

          {/* Submit Workflow CTA */}
          <Button
            asChild
            size="sm"
            className="h-8 px-3 rounded-lg bg-brand-lavender hover:bg-brand-hover text-white shadow-[0_0_16px_rgba(94,106,210,0.35)] text-xs font-medium"
          >
            <Link href="/submit">
              <Plus className="w-3.5 h-3.5 mr-1" />
              <span>Submit</span>
            </Link>
          </Button>

          {/* User Account / Login */}
          <Link
            href="/login"
            className="w-8 h-8 rounded-full bg-surface-2 border border-hairline-strong hover:border-brand-lavender flex items-center justify-center transition-colors"
            title="Sign In or User Dashboard"
          >
            <User className="w-4 h-4 text-ink-muted" />
          </Link>
        </div>
      </div>
    </header>
  );
}

