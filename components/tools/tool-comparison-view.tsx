"use client";

import * as React from "react";
import Link from "next/link";
import { toast } from "sonner";
import {
  CheckCircle2,
  Check,
  Zap,
  Play,
  ArrowRight,
  ExternalLink,
  Shield,
  Layers,
  Sparkles,
  Volume2,
  CreditCard,
  Lock,
  Code2,
} from "lucide-react";
import { ComparisonDetail } from "@/lib/data/comparisons";

interface ToolComparisonViewProps {
  comparison: ComparisonDetail;
}

export function ToolComparisonView({ comparison }: ToolComparisonViewProps) {
  const [playingVideo, setPlayingVideo] = React.useState<"A" | "B" | null>(null);

  return (
    <div className="w-full">
      {/* Top Breadcrumb & Benchmark Metadata */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-mono text-xs text-ink-subtle">
            <Link href="/" className="hover:text-ink transition-colors">Home</Link>
            <span>/</span>
            <Link href="/tools" className="hover:text-ink transition-colors">Tools</Link>
            <span>/</span>
            <span className="text-ink-tertiary">Compare</span>
            <span>/</span>
            <span className="text-ink font-medium">{comparison.title}</span>
          </nav>
          <div className="flex items-center gap-2 bg-surface-1 border border-hairline px-3 py-1 rounded-full shadow-sm">
            <span className="inline-block w-2 h-2 rounded-full bg-status-emerald" />
            <span className="font-mono text-[11px] text-ink-muted">AUDITED BENCHMARK 2026.2</span>
            <span className="font-mono text-[11px] text-ink-tertiary">•</span>
            <span className="font-mono text-[11px] text-ink-subtle">{comparison.benchmarkSuite.sampleSize}</span>
          </div>
        </div>
      </div>

      {/* SECTION 1: HEADER & QUICK VERDICT BENTO BOX */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16">
        {/* Centered Header */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-surface-2 border border-hairline px-3 py-1 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-lavender" />
            <span className="font-mono text-xs text-brand-lavender uppercase tracking-wider font-semibold">
              Head-to-Head Production Audit • Standardized Benchmark Testbench
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-semibold text-ink tracking-tight mb-4">
            {comparison.toolA.name} <span className="text-ink-subtle font-light">vs.</span> {comparison.toolB.name}
          </h1>
          <p className="text-base sm:text-lg text-ink-subtle leading-relaxed max-w-2xl">
            {comparison.subtitle}
          </p>

          {/* Versus Emblem & Monograms */}
          <div className="flex items-center justify-center gap-6 sm:gap-12 mt-8 w-full">
            {/* Tool A Badge */}
            <div className="flex flex-col sm:flex-row items-center gap-3 bg-surface-1 border border-hairline p-3 sm:px-5 sm:py-3 rounded-xl shadow-md">
              <div className="w-10 h-10 rounded-lg bg-surface-2 border border-hairline flex items-center justify-center text-brand-lavender font-semibold text-lg">
                <span className="text-brand-lavender font-mono font-bold">C</span>
              </div>
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-1.5">
                  <span className="text-sm font-semibold text-ink">{comparison.toolA.name}</span>
                  <span className="bg-surface-3 text-status-emerald font-mono text-[10px] px-1.5 py-0.5 rounded border border-hairline">
                    {comparison.toolA.version}
                  </span>
                </div>
                <p className="font-mono text-[11px] text-ink-subtle">{comparison.toolA.company}</p>
              </div>
            </div>

            {/* Center VS Circle */}
            <div className="relative flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-surface-3 border border-hairline flex items-center justify-center shadow-lg relative z-10">
                <span className="font-mono text-xs font-semibold tracking-wider text-ink-muted">VS</span>
              </div>
              <div className="absolute inset-0 -m-1 rounded-full bg-brand-lavender/20 blur-sm" />
            </div>

            {/* Tool B Badge */}
            <div className="flex flex-col sm:flex-row items-center gap-3 bg-surface-1 border border-hairline p-3 sm:px-5 sm:py-3 rounded-xl shadow-md">
              <div className="w-10 h-10 rounded-lg bg-surface-2 border border-hairline flex items-center justify-center text-accent-blue-soft font-semibold text-lg">
                <span className="text-accent-blue-soft font-mono font-bold">O</span>
              </div>
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-1.5">
                  <span className="text-sm font-semibold text-ink">{comparison.toolB.name}</span>
                  <span className="bg-surface-3 text-accent-blue-soft font-mono text-[10px] px-1.5 py-0.5 rounded border border-hairline">
                    {comparison.toolB.version}
                  </span>
                </div>
                <p className="font-mono text-[11px] text-ink-subtle">{comparison.toolB.company}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Verdict Bento Box */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Box A */}
          <div className="bg-surface-1 border border-hairline rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden">
            <div className="absolute -top-16 -right-16 w-44 h-44 bg-brand-lavender/10 rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[11px] text-brand-lavender bg-surface-2 border border-hairline px-2.5 py-1 rounded-full inline-flex items-center gap-1.5 font-semibold">
                  <Sparkles className="h-3.5 w-3.5" /> {comparison.toolA.badge}
                </span>
                <span className="font-mono text-[11px] text-ink-tertiary">Engine: anthropic.claude-3-7</span>
              </div>
              <h3 className="text-lg font-semibold text-ink mb-1">{comparison.toolA.verdictTitle}</h3>
              <p className="font-mono text-xs text-brand-lavender mb-6">{comparison.toolA.verdictSubtitle}</p>

              <ul className="space-y-4 mb-8">
                {comparison.toolA.perks.map((p) => (
                  <li key={p.title} className="flex items-start gap-3">
                    <div className="mt-0.5 w-4 h-4 rounded-full bg-brand-lavender/20 flex items-center justify-center text-brand-lavender shrink-0">
                      <Check className="h-3 w-3" />
                    </div>
                    <p className="text-xs text-ink-muted leading-relaxed">
                      <strong className="text-ink font-semibold">{p.title}</strong> {p.desc}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-hairline mt-auto">
              <Link
                href={`/tools/${comparison.toolA.slug}`}
                className="bg-brand-lavender hover:bg-[#828fff] text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors flex items-center gap-1.5 shadow-sm"
              >
                <span>View {comparison.toolA.name} Profile</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Box B */}
          <div className="bg-surface-1 border border-hairline rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden">
            <div className="absolute -top-16 -right-16 w-44 h-44 bg-accent-blue-soft/10 rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[11px] text-accent-blue-soft bg-surface-2 border border-hairline px-2.5 py-1 rounded-full inline-flex items-center gap-1.5 font-semibold">
                  <Zap className="h-3.5 w-3.5" /> {comparison.toolB.badge}
                </span>
                <span className="font-mono text-[11px] text-ink-tertiary">Engine: gpt-4o-2024-11-20</span>
              </div>
              <h3 className="text-lg font-semibold text-ink mb-1">{comparison.toolB.verdictTitle}</h3>
              <p className="font-mono text-xs text-accent-blue-soft mb-6">{comparison.toolB.verdictSubtitle}</p>

              <ul className="space-y-4 mb-8">
                {comparison.toolB.perks.map((p) => (
                  <li key={p.title} className="flex items-start gap-3">
                    <div className="mt-0.5 w-4 h-4 rounded-full bg-accent-blue-soft/20 flex items-center justify-center text-accent-blue-soft shrink-0">
                      <Check className="h-3 w-3" />
                    </div>
                    <p className="text-xs text-ink-muted leading-relaxed">
                      <strong className="text-ink font-semibold">{p.title}</strong> {p.desc}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-hairline mt-auto">
              <Link
                href={`/tools/${comparison.toolB.slug}`}
                className="bg-surface-2 hover:bg-surface-3 text-ink text-xs font-semibold px-4 py-2 rounded-lg border border-hairline transition-colors flex items-center gap-1.5 shadow-sm"
              >
                <span>View {comparison.toolB.name} Profile</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: SIDE-BY-SIDE EXECUTION TESTBENCH */}
      <section className="w-full bg-surface-1 border-y border-hairline py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-status-emerald font-mono text-xs mb-1 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-status-emerald" />
                LIVE EXECUTION TESTBENCH
              </div>
              <h2 className="text-2xl font-semibold text-ink">
                Side-by-Side Execution Testbench: Real-Time Benchmark
              </h2>
              <p className="text-xs sm:text-sm text-ink-subtle mt-1 max-w-3xl">
                Identical prompt run across both APIs:{" "}
                <code className="text-ink font-mono text-[11px] bg-surface-2 px-1.5 py-0.5 rounded border border-hairline">
                  &quot;{comparison.benchmarkSuite.prompt}&quot;
                </code>
              </p>
            </div>
            <div className="flex items-center gap-2 bg-surface-2 border border-hairline px-3 py-1.5 rounded-lg text-ink-muted font-mono text-xs">
              <span>Standardized Run {comparison.benchmarkSuite.id} • 1080p 60fps</span>
            </div>
          </div>

          {/* 2-Column Split Terminal Screen Displays */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Terminal A */}
            <div className="bg-surface-2 border border-hairline rounded-xl overflow-hidden shadow-2xl flex flex-col">
              <div className="bg-surface-3 px-4 py-2.5 flex items-center justify-between border-b border-hairline">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-lavender" />
                  <span className="text-xs font-semibold text-ink">{comparison.toolA.name} (Thinking Budget)</span>
                </div>
                <span className="text-status-emerald font-mono text-xs font-medium">
                  {comparison.benchmarkSuite.toolAResult.time}
                </span>
              </div>

              <div className="relative bg-surface-4 aspect-video p-4 flex flex-col justify-between font-mono text-xs text-ink-muted select-none overflow-hidden">
                <div className="space-y-1.5 leading-relaxed">
                  {comparison.benchmarkSuite.toolAResult.logSnippet.map((line, idx) => (
                    <div key={idx} className={idx === 0 ? "text-brand-lavender" : idx === 3 ? "text-ink font-semibold" : "text-ink-subtle"}>
                      {line}
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between font-mono text-[11px] text-ink-tertiary pt-2 border-t border-hairline">
                  <span>Tokens: {comparison.benchmarkSuite.toolAResult.tokens}</span>
                  <span className="text-status-emerald">Precision: {comparison.benchmarkSuite.toolAResult.precision}</span>
                </div>
              </div>
            </div>

            {/* Terminal B */}
            <div className="bg-surface-2 border border-hairline rounded-xl overflow-hidden shadow-2xl flex flex-col">
              <div className="bg-surface-3 px-4 py-2.5 flex items-center justify-between border-b border-hairline">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-accent-blue-soft" />
                  <span className="text-xs font-semibold text-ink">{comparison.toolB.name} (Structured Output)</span>
                </div>
                <span className="text-accent-blue-soft font-mono text-xs font-medium">
                  {comparison.benchmarkSuite.toolBResult.time}
                </span>
              </div>

              <div className="relative bg-surface-4 aspect-video p-4 flex flex-col justify-between font-mono text-xs text-ink-muted select-none overflow-hidden">
                <div className="space-y-1.5 leading-relaxed">
                  {comparison.benchmarkSuite.toolBResult.logSnippet.map((line, idx) => (
                    <div key={idx} className={idx === 0 ? "text-accent-blue-soft" : idx === 4 ? "text-amber-400" : "text-ink-subtle"}>
                      {line}
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between font-mono text-[11px] text-ink-tertiary pt-2 border-t border-hairline">
                  <span>Tokens: {comparison.benchmarkSuite.toolBResult.tokens}</span>
                  <span className="text-ink-subtle">Precision: {comparison.benchmarkSuite.toolBResult.precision}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: STRUCTURED COMPARISON MATRIX TABLE */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-brand-lavender font-mono text-xs mb-1 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-lavender" />
              AUDITED COMPARISON MATRIX
            </div>
            <h2 className="text-2xl font-semibold text-ink">Comprehensive Architectural & Telemetry Matrix</h2>
            <p className="text-xs sm:text-sm text-ink-subtle mt-1 max-w-3xl">
              7 production metrics verified across 5,000+ benchmark requests. Winners highlighted based on engineering reliability and total cost of ownership.
            </p>
          </div>

          <div className="flex items-center gap-3 bg-surface-1 border border-hairline px-3 py-1.5 rounded-lg font-mono text-xs">
            <span className="inline-flex items-center gap-1 text-status-emerald">
              <CheckCircle2 className="h-3.5 w-3.5" /> Winner
            </span>
            <span className="text-ink-tertiary">|</span>
            <span className="text-ink-subtle">Evaluated Q2 2026</span>
          </div>
        </div>

        {/* Table */}
        <div className="w-full overflow-x-auto bg-surface-1 border border-hairline rounded-2xl shadow-xl">
          <table className="w-full text-left border-collapse min-w-[850px]">
            <thead>
              <tr className="bg-surface-2 text-ink-subtle font-mono text-xs uppercase tracking-wider border-b border-hairline">
                <th className="py-4 px-6 font-semibold w-1/4">Evaluation Metric</th>
                <th className="py-4 px-6 font-semibold w-1/4 text-brand-lavender">{comparison.toolA.name}</th>
                <th className="py-4 px-6 font-semibold w-1/4 text-accent-blue-soft">{comparison.toolB.name}</th>
                <th className="py-4 px-6 font-semibold w-1/4">Edge / Verdict</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-hairline text-xs">
              {comparison.matrix.map((row, idx) => (
                <tr key={idx} className="hover:bg-surface-2/60 transition-colors">
                  <td className="py-4 px-6 font-semibold text-ink">{row.metric}</td>
                  <td className={`py-4 px-6 ${row.toolAWinner ? "bg-brand-lavender/5" : ""}`}>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-ink font-mono font-medium">{row.toolAValue}</span>
                      {row.toolAWinner && (
                        <span className="bg-status-emerald/10 text-status-emerald text-[10px] font-mono px-1.5 py-0.2 rounded border border-status-emerald/20 font-semibold inline-flex items-center gap-0.5">
                          WINNER
                        </span>
                      )}
                    </div>
                    <p className="font-mono text-[11px] text-ink-subtle">{row.toolASubtitle}</p>
                  </td>
                  <td className={`py-4 px-6 ${row.toolBWinner ? "bg-accent-blue-soft/5" : ""}`}>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-ink font-mono font-medium">{row.toolBValue}</span>
                      {row.toolBWinner && (
                        <span className="bg-status-emerald/10 text-status-emerald text-[10px] font-mono px-1.5 py-0.2 rounded border border-status-emerald/20 font-semibold inline-flex items-center gap-0.5">
                          WINNER
                        </span>
                      )}
                    </div>
                    <p className="font-mono text-[11px] text-ink-subtle">{row.toolBSubtitle}</p>
                  </td>
                  <td className="py-4 px-6">
                    <p className="text-ink leading-snug">{row.verdict}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

