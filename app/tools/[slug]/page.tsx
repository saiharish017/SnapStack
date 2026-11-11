import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { TOOLS } from "@/lib/data/tools";
import { ToolProfileView } from "@/components/tools/tool-profile-view";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return TOOLS.map((t) => ({
    slug: t.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = TOOLS.find((t) => t.slug === slug);

  if (!tool) {
    return {
      title: "Tool Not Found | SnapStack",
    };
  }

  return {
    title: `${tool.name} — Technical Specs, Pricing & Audited Workflows | SnapStack`,
    description: tool.description,
    openGraph: {
      title: `${tool.name} Technical Profile | SnapStack`,
      description: tool.description,
      type: "website",
    },
  };
}

export default async function ToolDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const tool = TOOLS.find((t) => t.slug === slug);

  if (!tool) {
    notFound();
  }

  // Schema.org SoftwareApplication JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: tool.name,
    operatingSystem: "Cloud / REST API / Cross-platform",
    applicationCategory: tool.category,
    offers: {
      "@type": "Offer",
      price: tool.startingPrice.replace(/[^0-9]/g, "") || "0",
      priceCurrency: "USD",
    },
    description: tool.description,
  };

  return (
    <div className="min-h-screen bg-canvas text-ink flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ToolProfileView tool={tool} />
      </main>
      <Footer />
    </div>
  );
}

