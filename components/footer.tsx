import Link from "next/link";
import { Terminal, Rss } from "lucide-react";
import { DispatchForm } from "@/components/dispatch-form";

export function Footer() {
  return (
    <footer className="w-full bg-surface-1 border-t border-hairline pt-16 pb-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-hairline/80">
          {/* Column 1: Brand & License */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <span className="text-lg font-semibold text-ink tracking-tight">
                SnapStack
              </span>
              <span className="font-mono text-[11px] text-brand-lavender bg-surface-2 border border-hairline px-2 py-0.5 rounded-full">
                Open Source
              </span>
            </div>
            <p className="text-sm text-ink-subtle max-w-sm leading-relaxed">
              Tested AI Workflows &amp; Tool Stacks in a Snap. Engineered for technical builders, operators, and engineering leads.
            </p>
            <div className="flex items-center gap-2 font-mono text-xs text-ink-tertiary">
              <Terminal className="w-3.5 h-3.5" />
              <span>Released under MIT License • 100% Free</span>
            </div>
          </div>

          {/* Column 2: Workflows */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-ink font-semibold">
              Workflows
            </h4>
            <ul className="flex flex-col gap-2 text-sm text-ink-subtle">
              <li>
                <Link href="/workflows?role=founders" className="hover:text-ink transition-colors">
                  Founders
                </Link>
              </li>
              <li>
                <Link href="/workflows?role=sales" className="hover:text-ink transition-colors">
                  Sales &amp; CRM
                </Link>
              </li>
              <li>
                <Link href="/workflows?role=marketing" className="hover:text-ink transition-colors">
                  Marketing
                </Link>
              </li>
              <li>
                <Link href="/workflows?role=devs" className="hover:text-ink transition-colors">
                  Devs &amp; LLMOps
                </Link>
              </li>
              <li>
                <Link href="/workflows?role=operations" className="hover:text-ink transition-colors">
                  Operations
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Directory */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-ink font-semibold">
              Directory
            </h4>
            <ul className="flex flex-col gap-2 text-sm text-ink-subtle">
              <li>
                <Link href="/tools" className="hover:text-ink transition-colors">
                  All Tools (120+)
                </Link>
              </li>
              <li>
                <Link href="/skills" className="hover:text-ink transition-colors">
                  Prompt Skills
                </Link>
              </li>
              <li>
                <Link href="/videos" className="hover:text-ink transition-colors">
                  Video Feed
                </Link>
              </li>
              <li>
                <Link href="/compare" className="hover:text-ink transition-colors">
                  Compare Stacks
                </Link>
              </li>
              <li>
                <Link href="/submit" className="hover:text-ink transition-colors">
                  Submit Recipe
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Tuesday Dispatch */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-ink font-semibold">
              Tuesday Dispatch
            </h4>
            <p className="text-sm text-ink-subtle leading-relaxed">
              Get 1 tested, production-ready AI workflow recipe delivered every Tuesday. Zero noise.
            </p>
            <div className="mt-1">
              <DispatchForm buttonText="Subscribe" placeholder="developer@company.com" />
            </div>
            <div className="flex items-center gap-3 text-xs text-ink-tertiary pt-1">
              <span>✔ No spam, ever</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Rss className="w-3 h-3 text-brand-lavender" /> RSS Feed
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 text-xs text-ink-tertiary">
          <div className="flex items-center gap-4">
            <span>© 2026 SnapStack. All rights reserved.</span>
            <Link href="#" className="hover:text-ink-subtle transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-ink-subtle transition-colors">
              Terms of Service
            </Link>
          </div>
          <div className="flex items-center gap-2 bg-surface-2 border border-hairline px-3 py-1 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-status-emerald animate-pulse" />
            <span className="font-mono text-[11px] text-ink-subtle">
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
