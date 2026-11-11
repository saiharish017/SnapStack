import { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ToolsDirectoryView } from "@/components/tools/tools-directory-view";

export const metadata: Metadata = {
  title: "AI Tools Directory — Audited & Benchmarked AI Engines | SnapStack",
  description:
    "Production-ready LLMs, developer agents, multimodal engines, and workflow runtimes audited for enterprise privacy, deterministic latency, and validated pipeline blueprints.",
  openGraph: {
    title: "AI Tools Directory | SnapStack",
    description: "Production-ready LLMs, agents, and runtimes audited with zero promotional fluff.",
    type: "website",
  },
};

export default function ToolsDirectoryPage() {
  return (
    <div className="min-h-screen bg-canvas text-ink flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        <ToolsDirectoryView />
      </main>
      <Footer />
    </div>
  );
}

