"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Shield, 
  Check, 
  Mail, 
  ArrowRight, 
  Lock, 
  RotateCcw, 
  Sparkles, 
  CheckCircle2, 
  Terminal, 
  Copy,
  Layers,
  Cpu
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function LoginView() {
  const [authState, setAuthState] = useState<"form" | "sent">("form");
  const [email, setEmail] = useState("alex.chen@syntaxfoundry.io");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resendStatus, setResendStatus] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setAuthState("sent");
    }, 700);
  };

  const handleResend = () => {
    setResendStatus(true);
    setTimeout(() => setResendStatus(false), 2500);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-cyan-500/10 via-indigo-500/5 to-transparent blur-3xl pointer-events-none" />

      {/* Top Micro Bar / Navigation */}
      <div className="relative border-b border-slate-800/80 bg-slate-950/60 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between text-xs">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            <span>Back to SnapStack Directory</span>
          </Link>

          <div className="hidden sm:flex items-center gap-2 font-mono text-[11px] text-slate-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>GATEWAY: US-EAST-VAULT-PRIMARY</span>
            <span className="text-slate-700">/</span>
            <span className="text-emerald-400">TLS 1.3 OK</span>
          </div>
        </div>
      </div>

      {/* Main Dual Column Workspace */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Context, Value Proposition & Telemetry Evidence */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {/* Identity & Protocol Markers */}
            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-cyan-950/80 text-cyan-300 font-mono text-[11px] border border-cyan-800/60">
                  <Shield className="w-3 h-3 text-cyan-400" />
                  v2.4.9 Auth Protocol
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-900 text-slate-400 font-mono text-[11px] border border-slate-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Zero-Data Retention
                </span>
                <span className="px-2 py-0.5 rounded-full bg-slate-900 text-slate-400 font-mono text-[11px] border border-slate-800">
                  SnapStack Core Compatible
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Save verified workflows, track stack spend, and scale your vault.
              </h1>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
                Join 14,000+ autonomous AI engineers and infrastructure architects storing reproducible pipeline blueprints, runtime AST templates, and telemetry ledgers.
              </p>
            </div>

            {/* Feature Checklist Card */}
            <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-5 flex flex-col gap-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <span className="font-mono text-xs text-white font-bold tracking-wider uppercase">
                  Vault Entitlements
                </span>
                <span className="font-mono text-xs text-cyan-400">
                  TIER: UNLIMITED BUILDER
                </span>
              </div>

              <div className="space-y-2.5 text-xs">
                <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/50">
                  <div className="w-5 h-5 rounded flex items-center justify-center bg-cyan-500/20 text-cyan-400 mt-0.5 shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <div>
                    <span className="font-semibold text-white block">1-Click bookmarking for multi-agent workflows</span>
                    <span className="text-slate-400 text-[11px]">Sync tool manifests, skill chains, and Docker Compose stubs directly.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/50">
                  <div className="w-5 h-5 rounded flex items-center justify-center bg-cyan-500/20 text-cyan-400 mt-0.5 shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <div>
                    <span className="font-semibold text-white block">Personal Prompt Vault with AST-grounded extraction</span>
                    <span className="text-slate-400 text-[11px]">Isolate variables, system boundaries, and structured token costs instantly.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/50">
                  <div className="w-5 h-5 rounded flex items-center justify-center bg-cyan-500/20 text-cyan-400 mt-0.5 shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <div>
                    <span className="font-semibold text-white block">Hetzner / Bare-Metal ROI Ledger & Cost Calc</span>
                    <span className="text-slate-400 text-[11px]">Compare hosted SaaS APIs against bare metal inference node economics.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/50">
                  <div className="w-5 h-5 rounded flex items-center justify-center bg-cyan-500/20 text-cyan-400 mt-0.5 shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <div>
                    <span className="font-semibold text-white block">100% Free forever • Zero telemetry spam</span>
                    <span className="text-slate-400 text-[11px]">No sales calls, no promotional drip campaigns, no vendor lock-in.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Telemetry Strip */}
            <div className="p-3 px-4 rounded-lg bg-slate-900/40 border border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <span className="text-white font-bold">4,821</span>
                <span>ACTIVE VAULTS</span>
              </div>
              <span className="text-slate-700">|</span>
              <div>
                <span className="text-white font-bold">240+</span> BLUEPRINTS
              </div>
              <span className="text-slate-700 hidden sm:inline">|</span>
              <div className="hidden sm:flex items-center gap-1 text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>99.98% SYNC</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Authentication Instrument */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            {/* Preserved Return Destination Banner */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-3.5 flex items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-2 min-w-0">
                <div className="w-6 h-6 rounded bg-cyan-500/20 flex items-center justify-center shrink-0">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                </div>
                <div className="truncate">
                  <span className="text-slate-400 uppercase text-[10px] block font-mono">Preserved Destination</span>
                  <span className="font-mono text-cyan-300">/dashboard</span>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-400 font-mono text-[10px]">
                AUTO-RESUME
              </span>
            </div>

            {/* Interactive Auth Panel Box */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-6 lg:p-8 flex flex-col gap-6 shadow-2xl relative">
              {/* Header & State Toggle */}
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="font-mono text-xs uppercase text-slate-400 font-bold">
                    Access Terminal
                  </span>
                </div>

                <div className="flex items-center bg-slate-950 p-0.5 rounded-lg font-mono text-[11px] border border-slate-800">
                  <button
                    onClick={() => setAuthState("form")}
                    className={`px-2.5 py-1 rounded transition ${
                      authState === "form" ? "bg-slate-800 text-white" : "text-slate-400 hover:text-white"
                    }`}
                  >
                    State: Form
                  </button>
                  <button
                    onClick={() => setAuthState("sent")}
                    className={`px-2.5 py-1 rounded transition ${
                      authState === "sent" ? "bg-slate-800 text-white" : "text-slate-400 hover:text-white"
                    }`}
                  >
                    State: Sent
                  </button>
                </div>
              </div>

              {authState === "form" ? (
                /* STATE A: Form View */
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-bold text-white mb-1">
                      Sign in or create account
                    </h2>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Enter your engineering email or provider to authenticate. Passwords are permanently deprecated.
                    </p>
                  </div>

                  {/* 1-Click Social Providers */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setAuthState("sent")}
                      className="flex items-center justify-center gap-2 bg-slate-950 hover:bg-slate-800 border border-slate-800 text-white px-4 py-2.5 rounded-lg text-xs font-semibold transition"
                    >
                      <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                        <path d="M12 5c1.6 0 3 .6 4.1 1.7l3.1-3.1C17.3 1.8 14.8 1 12 1 7.5 1 3.7 3.6 1.9 7.3l3.7 2.9C6.5 7.3 9 5 12 5z" fill="#EA4335" />
                        <path d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.6h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.9z" fill="#4285F4" />
                        <path d="M5.6 14.8c-.2-.7-.4-1.5-.4-2.3s.2-1.6.4-2.3L1.9 7.3C.7 9.7 0 12.3 0 15s.7 5.3 1.9 7.7l3.7-2.9z" fill="#FBBC05" />
                        <path d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3 0-5.5-2-6.4-4.8L1.9 16.4C3.7 20.1 7.5 23 12 23z" fill="#34A853" />
                      </svg>
                      <span>Google</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setAuthState("sent")}
                      className="flex items-center justify-center gap-2 bg-slate-950 hover:bg-slate-800 border border-slate-800 text-white px-4 py-2.5 rounded-lg text-xs font-semibold transition"
                    >
                      <svg className="w-4 h-4 fill-current shrink-0 text-white" viewBox="0 0 24 24">
                        <path clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" fillRule="evenodd" />
                      </svg>
                      <span>GitHub</span>
                    </button>
                  </div>

                  {/* Divider */}
                  <div className="relative flex items-center justify-center">
                    <div className="w-full h-px bg-slate-800" />
                    <span className="absolute px-3 bg-slate-900 text-slate-500 font-mono text-[10px] uppercase tracking-wider">
                      Or Continue With Email
                    </span>
                  </div>

                  {/* Passwordless Magic Link Form */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-1.5">
                      <label htmlFor="work-email" className="flex items-center justify-between text-xs font-semibold text-slate-200">
                        <span>Email address</span>
                        <span className="text-slate-500 font-mono text-[10px]">Personal or Company</span>
                      </label>
                      <div className="relative flex items-center">
                        <Mail className="w-4 h-4 text-slate-500 absolute left-3 pointer-events-none" />
                        <input
                          id="work-email"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="engineer@syntaxfoundry.io"
                          className="w-full pl-9 pr-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/60"
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs py-2.5 rounded-lg gap-2 shadow-md shadow-cyan-950 cursor-pointer"
                    >
                      {isSubmitting ? "Generating Secure Token..." : "Send Magic Link / Sign In"}
                      <ArrowRight className="w-4 h-4" />
                    </Button>

                    <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800/60 flex items-start gap-2 text-[11px] text-slate-400">
                      <Shield className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <p>
                        We will issue an encrypted, ephemeral token valid for 15 minutes. No passwords are stored or verified on SnapStack edge instances.
                      </p>
                    </div>
                  </form>
                </div>
              ) : (
                /* STATE B: Sent View */
                <div className="space-y-6 text-center py-2">
                  <div className="w-14 h-14 rounded-full bg-cyan-950/60 border border-cyan-800/80 flex items-center justify-center text-cyan-400 mx-auto">
                    <Mail className="w-6 h-6" />
                  </div>

                  <div className="space-y-2">
                    <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest font-bold">
                      TOKEN DISPATCHED
                    </span>
                    <h3 className="text-xl font-bold text-white">Check your inbox</h3>
                    <p className="text-xs text-slate-400 max-w-sm mx-auto leading-relaxed">
                      We sent a secure, single-use authentication link to{" "}
                      <strong className="text-white font-mono">{email}</strong>.
                    </p>
                  </div>

                  <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-slate-400 flex items-center justify-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-amber-400" />
                    <span>Link expires in 15:00 minutes. Single-use only.</span>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                    <Button
                      onClick={handleResend}
                      variant="outline"
                      className="w-full border-slate-700 bg-slate-800 text-white text-xs gap-1.5"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>{resendStatus ? "Dispatched new token!" : "Resend Magic Link"}</span>
                    </Button>
                    <Button
                      onClick={() => setAuthState("form")}
                      variant="ghost"
                      className="w-full text-slate-400 hover:text-white text-xs"
                    >
                      Use different email
                    </Button>
                  </div>

                  <div className="pt-2">
                    <Link
                      href="/dashboard"
                      className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:underline font-mono"
                    >
                      [Dev Bypass: Enter Dashboard directly →]
                    </Link>
                  </div>
                </div>
              )}

              {/* Security & Compliance Footer */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-col gap-2 text-center text-xs text-slate-500 font-mono">
                <div className="flex items-center justify-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-cyan-400" />
                  <span>End-to-end encrypted magic tokens • SOC 2 Type II certified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

