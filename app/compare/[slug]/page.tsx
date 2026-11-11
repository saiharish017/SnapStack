import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { COMPARISONS } from "@/lib/data/comparisons";
import { ToolComparisonView } from "@/components/tools/tool-comparison-view";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return COMPARISONS.map((c) => ({
    slug: c.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const comparison = COMPARISONS.find((c) => c.slug === slug);

  if (!comparison) {
    return {
      title: "Comparison Not Found | SnapStack",
    };
  }

  return {
    title: `${comparison.title} — Empirical Head-to-Head Benchmark | SnapStack`,
    description: comparison.subtitle,
    openGraph: {
      title: `${comparison.title} | SnapStack Benchmark`,
      description: comparison.subtitle,
      type: "article",
    },
  };
}

export default async function ToolComparisonPage({ params }: PageProps) {
  const { slug } = await params;
  const comparison = COMPARISONS.find((c) => c.slug === slug);

  if (!comparison) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-canvas text-ink flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        <ToolComparisonView comparison={comparison} />
      </main>
      <Footer />
    </div>
  );
}

