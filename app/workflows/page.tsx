import { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WorkflowsCatalogView } from "@/components/workflows/workflows-catalog-view";

export const metadata: Metadata = {
  title: "AI Workflows Catalog — Tested Production Pipelines | SnapStack",
  description:
    "Battle-tested, end-to-end multi-tool automation pipelines connecting 2+ tools. Downloadable JSON blueprints, prompt schemas, and unedited video proof.",
  openGraph: {
    title: "AI Workflows Catalog — SnapStack",
    description: "Battle-tested, end-to-end automation pipelines connecting 2+ tools.",
    type: "website",
  },
};

export default function WorkflowsPage() {
  return (
    <div className="min-h-screen bg-canvas text-ink flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        <WorkflowsCatalogView />
      </main>
      <Footer />
    </div>
  );
}

