---
name: seo-metadata
description: >-
  Technical SEO, dynamic OpenGraph metadata, and Schema.org structured data (JSON-LD) generation
  for Next.js 15. Enforces HowTo schema for workflows and skills, SoftwareApplication schema
  for tools, and automated XML sitemaps.
---

# Technical SEO & Schema.org Structured Data Skill

Automates search engine optimization for SnapStack. Ensures every tool, workflow, skill, and comparison page ranks high on Google by implementing dynamic metadata and rich Schema.org JSON-LD snippets.

---

## 1. Dynamic Page Metadata (`generateMetadata`)

Every dynamic route (`/workflows/[slug]`, `/skills/[slug]`, `/tools/[slug]`) must export an `async generateMetadata()` function.

### Implementation Pattern:
```tsx
// app/workflows/[slug]/page.tsx
import type { Metadata } from 'next';
import { createClient } from '@/lib/supabase/server';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const supabase = await createClient();

  const { data: workflow } = await supabase
    .from('workflows')
    .select('title, summary, job_to_be_done, tools(name)')
    .eq('slug', slug)
    .single();

  if (!workflow) {
    return { title: 'Workflow Not Found | SnapStack' };
  }

  const title = `${workflow.title} — Tested AI Workflow`;
  const description = `${workflow.job_to_be_done}. Step-by-step recipe, verified system prompt, and zero-hosting video demo on SnapStack.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://snapstack.dev/workflows/${slug}`,
    },
    openGraph: {
      title,
      description,
      type: 'article',
      url: `https://snapstack.dev/workflows/${slug}`,
      images: [
        {
          url: `https://snapstack.dev/api/og?title=${encodeURIComponent(workflow.title)}`,
          width: 1200,
          height: 630,
          alt: workflow.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}
```

---

## 2. JSON-LD Structured Data (Google Rich Cards)

Inject a `<script type="application/ld+json">` tag directly into Server Component pages.

### A. Workflows & Skills: `HowTo` Schema
```tsx
export function WorkflowSchema({ workflow }: { workflow: any }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: workflow.title,
    description: workflow.job_to_be_done,
    totalTime: `PT${workflow.estimated_minutes || 10}M`,
    tool: (workflow.tools || []).map((t: any) => ({
      '@type': 'HowToTool',
      name: t.name,
    })),
    step: (workflow.steps || []).map((step: any, index: number) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.step_title,
      itemListElement: [
        {
          '@type': 'HowToDirection',
          text: step.instructions,
        },
      ],
    })),
    video: workflow.youtube_video_id
      ? {
          '@type': 'VideoObject',
          name: workflow.title,
          description: workflow.summary,
          thumbnailUrl: `https://img.youtube.com/vi/${workflow.youtube_video_id}/maxresdefault.jpg`,
          embedUrl: `https://www.youtube-nocookie.com/embed/${workflow.youtube_video_id}`,
        }
      : undefined,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
```

### B. AI Tools: `SoftwareApplication` Schema
```tsx
export function ToolSchema({ tool }: { tool: any }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: tool.name,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Cloud',
    offers: {
      '@type': 'Offer',
      price: tool.starting_price_usd === 0 ? '0' : String(tool.starting_price_usd),
      priceCurrency: 'USD',
      description: tool.pricing_summary || 'Free tier available',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
```

---

## 3. Automated Sitemaps & Robots (`sitemap.ts` & `robots.ts`)

- In Next.js 15, provide dynamic XML sitemaps in `app/sitemap.ts` fetching all active tool, workflow, skill, and comparison slugs from Supabase.
- Configure `app/robots.ts` to allow Googlebot and Bingbot indexing while disallowing `/admin` and private user `/vault` endpoints.

