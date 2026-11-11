---
name: nextjs-architecture
description: >-
  Next.js 15 App Router and React Server Components (RSC) engineering standards. Enforces Server
  Components by default, direct database data fetching, ISR caching, generateStaticParams,
  and Server Actions.
---

# Next.js 15 App Router Architecture Skill

Enforces idiomatic Next.js 15 App Router architecture, leveraging React Server Components (RSC) for zero client-side bundle bloat, direct database access, and optimal incremental caching.

---

## 1. React Server Components (RSC) by Default

1. **Server-First Boundary:**
   - Every file inside `app/` is a Server Component by default.
   - Never add `'use client'` to page files (`page.tsx`) or layout files (`layout.tsx`).
   - Use `'use client'` only on leaf components that strictly require interactive state (`useState`, `useEffect`, clipboard events, modal toggles).

2. **Async Request Parameters (Next.js 15 Standard):**
   - In Next.js 15, `params` and `searchParams` in page components are **Promises** that must be awaited:
     ```tsx
     interface PageProps {
       params: Promise<{ slug: string }>;
       searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
     }

     export default async function WorkflowDetailPage({ params, searchParams }: PageProps) {
       const { slug } = await params;
       const query = await searchParams;
       // ...
     }
     ```

---

## 2. Direct Server Data Fetching (No `/api` Proxying)

- Perform database queries (via Supabase Server Client) directly inside Server Components using `async/await`.
- **Anti-Pattern:** Do NOT create internal API routes (`/api/workflows`) just to fetch data for your own Server Components. Fetch directly from the data layer:
  ```tsx
  // app/workflows/[slug]/page.tsx
  import { createClient } from '@/lib/supabase/server';
  import { notFound } from 'next/navigation';

  export default async function WorkflowPage({ params }: PageProps) {
    const { slug } = await params;
    const supabase = await createClient();

    const { data: workflow } = await supabase
      .from('workflows')
      .select('*, tools(*), videos(*)')
      .eq('slug', slug)
      .single();

    if (!workflow) {
      notFound();
    }

    return <WorkflowDetailView workflow={workflow} />;
  }
  ```

---

## 3. Static Site Generation (SSG) & Incremental Static Regeneration (ISR)

For high-traffic directory pages (`/tools/[slug]`, `/workflows/[slug]`, `/skills/[slug]`):
1. **Pre-render known slugs at build time with `generateStaticParams()`:**
   ```tsx
   export async function generateStaticParams() {
     const supabase = await createClient();
     const { data: slugs } = await supabase.from('workflows').select('slug');
     return (slugs ?? []).map((w) => ({ slug: w.slug }));
   }
   ```
2. **Set 1-hour ISR revalidation:**
   ```tsx
   export const revalidate = 3600; // Revalidate every 60 minutes
   ```

---

## 4. Server Actions for Mutations

Handle user interactions (submitting a workflow, bookmarking a tool, toggling a vote) via Next.js Server Actions:
1. Define actions in `app/actions/` or alongside components using `'use server'`.
2. Validate incoming payloads with `zod`.
3. Invalidate caches with `revalidatePath('/workflows')` or `revalidateTag()`.
4. Return typed results `{ success: boolean; error?: string }` instead of throwing unhandled exceptions.

---

## 5. Media & Asset Optimization

- Always use `next/image` for tool logos, author avatars, and workflow diagrams.
- Always provide explicit `width`, `height`, and `sizes` or use `fill` with a relative parent container.
- Use zero-hosting Lite YouTube Facades for all video embeds to prevent 1.5MB+ of YouTube JavaScript payload on initial page load.

