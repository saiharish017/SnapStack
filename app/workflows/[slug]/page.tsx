import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WORKFLOWS } from "@/lib/data/workflows";
import { WorkflowRecipeView } from "@/components/workflows/workflow-recipe-view";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return WORKFLOWS.map((wf) => ({
    slug: wf.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const workflow = WORKFLOWS.find((w) => w.slug === slug);

  if (!workflow) {
    return {
      title: "Workflow Not Found | SnapStack",
    };
  }

  return {
    title: `${workflow.title} — AI Workflow Recipe | SnapStack`,
    description: workflow.description,
    openGraph: {
      title: `${workflow.title} | SnapStack AI Workflows`,
      description: workflow.description,
      type: "article",
    },
  };
}

export default async function WorkflowDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const workflow = WORKFLOWS.find((w) => w.slug === slug);

  if (!workflow) {
    notFound();
  }

  const relatedWorkflows = WORKFLOWS.filter((w) => w.slug !== slug).slice(0, 3);

  // HowTo Schema.org JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: workflow.title,
    description: workflow.description,
    totalTime: "PT18M",
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "USD",
      value: "0",
    },
    step: workflow.sopSteps.map((step) => ({
      "@type": "HowToStep",
      position: step.stepNumber,
      name: step.title,
      itemListElement: [
        {
          "@type": "HowToDirection",
          text: step.description,
        },
      ],
    })),
  };

  return (
    <div className="min-h-screen bg-canvas text-ink flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <WorkflowRecipeView workflow={workflow} relatedWorkflows={relatedWorkflows} />
      </main>
      <Footer />
    </div>
  );
}

