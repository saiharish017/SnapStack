import { Metadata } from "next";
import { SkillsCatalogView } from "@/components/skills/skills-catalog-view";

export const metadata: Metadata = {
  title: "AI Skills & Prompt Playbooks | SnapStack",
  description: "Browse battle-tested prompt architectures, system instructions, and deterministic JSON extraction templates across Claude 3.7, DeepSeek R1, GPT-4o, and Cursor.",
  openGraph: {
    title: "Tested AI Skills & Prompt Engineering Playbooks | SnapStack",
    description: "Production-ready prompt templates, structured output patterns, and model-specific playbooks verified with strict evaluation metrics.",
  },
};

export default function SkillsPage() {
  return <SkillsCatalogView />;
}

