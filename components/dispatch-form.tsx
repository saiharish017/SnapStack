"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";

interface DispatchFormProps {
  buttonText?: string;
  placeholder?: string;
}

export function DispatchForm({
  buttonText = "Get Dispatch",
  placeholder = "developer@company.com",
}: DispatchFormProps) {
  const [email, setEmail] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <div className="flex items-center gap-2 p-2.5 rounded-lg bg-surface-2 border border-hairline text-xs font-mono text-status-emerald">
        <span>✔ Subscribed! Check your inbox next Tuesday.</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={placeholder}
        className="flex-1 bg-surface-2 border border-hairline focus:border-brand-lavender text-ink placeholder:text-ink-tertiary px-3.5 py-2 rounded-lg text-sm focus:outline-none transition-all"
      />
      <Button
        type="submit"
        size="sm"
        className="bg-brand-lavender hover:bg-brand-hover text-white px-4 py-2 font-medium shadow-[0_0_12px_rgba(94,106,210,0.3)] shrink-0"
      >
        {buttonText}
      </Button>
    </form>
  );
}

