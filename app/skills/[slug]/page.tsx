import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSkillBySlug, getAllSkillSlugs } from "@/lib/data/skills";
import { SkillPlaybookView } from "@/components/skills/skill-playbook-view";

interface SkillPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllSkillSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: SkillPageProps): Promise<Metadata> {
  const { slug } = await params;
  const playbook = getSkillBySlug(slug);

  if (!playbook) {
    return {
      title: "Playbook Not Found | SnapStack",
    };
  }

  return {
    title: `${playbook.title} | SnapStack AI Skills`,
    description: playbook.tagline,
    openGraph: {
      title: `${playbook.title} — Tested Prompt Playbook`,
      description: playbook.description,
    },
  };
}

export default async function SkillDetailPage({ params }: SkillPageProps) {
  const { slug } = await params;
  const playbook = getSkillBySlug(slug);

  if (!playbook) {
    notFound();
  }

  return <SkillPlaybookView playbook={playbook} />;
}

