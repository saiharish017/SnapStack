---
name: supabase-schema
description: >-
  PostgreSQL and Supabase database schema design, normalization, indexing, and Row-Level Security
  (RLS) architecture. Enforces UUID primary keys, explicit B-tree foreign key indexing, composite
  junction keys, and single-round-trip PostgREST joins.
---

# Supabase & PostgreSQL Schema Architecture Skill

Enforces enterprise-grade relational database design for SnapStack using Supabase and PostgreSQL. Prevents performance traps, unindexed joins, and security vulnerabilities.

---

## 1. Primary Keys & Data Types

1. **UUID Primary Keys:**
   - Always use `UUID PRIMARY KEY DEFAULT gen_random_uuid()`.
   - Never use auto-incrementing serial integers for core entities.
2. **Timestamps:**
   - Every table must have:
     ```sql
     created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
     updated_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
     ```
3. **Text & Constraints:**
   - Use `TEXT` rather than arbitrary `VARCHAR(255)`.
   - Use check constraints instead of database ENUM types to allow safe alterations without migration lockups:
     ```sql
     pricing_model TEXT CHECK (pricing_model IN ('free', 'freemium', 'paid', 'open_source')) NOT NULL
     ```

---

## 2. Normalization & Junction Tables

SnapStack maintains clean relationships between Workflows, Skills, AI Tools, and Video Embeds.

1. **Many-to-Many Junctions:**
   - Structure junction tables with composite primary keys:
     ```sql
     CREATE TABLE public.workflow_tools (
       workflow_id UUID REFERENCES public.workflows(id) ON DELETE CASCADE,
       tool_id UUID REFERENCES public.tools(id) ON DELETE CASCADE,
       role TEXT DEFAULT 'primary', -- 'primary' | 'secondary' | 'integration'
       created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
       PRIMARY KEY (workflow_id, tool_id)
     );
     ```

2. **Mandatory Foreign Key Indexing:**
   - PostgreSQL does NOT automatically create indexes on foreign keys.
   - Always create explicit B-tree indexes on foreign keys to avoid full-table scans during relational joins:
     ```sql
     CREATE INDEX idx_workflow_tools_tool_id ON public.workflow_tools(tool_id);
     CREATE INDEX idx_workflow_tools_workflow_id ON public.workflow_tools(workflow_id);
     CREATE INDEX idx_saved_items_user_id ON public.user_saved_items(user_id);
     CREATE INDEX idx_workflows_slug ON public.workflows(slug);
     CREATE INDEX idx_tools_slug ON public.tools(slug);
     ```

---

## 3. Row-Level Security (RLS) Architecture

Every table created in Supabase MUST have Row-Level Security enabled.

1. **Enable RLS:**
   ```sql
   ALTER TABLE public.tools ENABLE ROW LEVEL SECURITY;
   ALTER TABLE public.workflows ENABLE ROW LEVEL SECURITY;
   ALTER TABLE public.skills ENABLE ROW LEVEL SECURITY;
   ALTER TABLE public.user_saved_items ENABLE ROW LEVEL SECURITY;
   ```

2. **Public Read Tables (Tools, Workflows, Skills):**
   ```sql
   CREATE POLICY "Allow public read access on tools"
   ON public.tools FOR SELECT
   TO anon, authenticated
   USING (is_published = true);
   ```

3. **User-Owned Vault / Bookmarks Table:**
   ```sql
   -- Users can only read their own bookmarks
   CREATE POLICY "Users can view own saved items"
   ON public.user_saved_items FOR SELECT
   TO authenticated
   USING (auth.uid() = user_id);

   -- Users can only insert their own bookmarks
   CREATE POLICY "Users can insert own saved items"
   ON public.user_saved_items FOR INSERT
   TO authenticated
   WITH CHECK (auth.uid() = user_id);

   -- Users can only delete their own bookmarks
   CREATE POLICY "Users can delete own saved items"
   ON public.user_saved_items FOR DELETE
   TO authenticated
   USING (auth.uid() = user_id);
   ```

---

## 4. Query Optimization & Single-Trip Joins

Avoid N+1 queries by leveraging PostgREST nested resource embedding:
```typescript
const { data, error } = await supabase
  .from('workflows')
  .select(`
    id, title, slug, job_to_be_done, tested_date, estimated_minutes,
    tools ( id, name, slug, logo_url, website_url ),
    videos ( id, youtube_video_id, title, duration_seconds )
  `)
  .eq('slug', slug)
  .single();
```
- Never call `select('*')` on high-traffic listing endpoints. Fetch only displayed columns.

