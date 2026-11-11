export interface VideoCreator {
  name: string;
  handle: string;
  initials: string;
  role: string;
}

export interface VideoToolRef {
  name: string;
  slug: string;
  color?: string;
}

export interface VideoItem {
  id: string;
  slug: string;
  title: string;
  tagline?: string;
  description: string;
  duration: string;
  durationType: "Short" | "Quick" | "Deep";
  aspectRatio: "9:16" | "16:9";
  contentType: "Workflow" | "Skill";
  youtubeId: string;
  views: string;
  accuracy: string;
  verifiedDate: string;
  creator: VideoCreator;
  tools: VideoToolRef[];
  roleTarget: "Software Engineers" | "RevOps & Automation" | "Growth & Marketing" | "Founders";
  associatedWorkflowSlug?: string;
  associatedSkillSlug?: string;
  codeSnippet: string;
  snippetFilename: string;
  snippetTokens: string;
  upvotes: number;
  clones: number;
  terminalLogs: string[];
}

export const VIDEOS: VideoItem[] = [
  {
    id: "vid-claude-thinking-pr",
    slug: "claude-3-7-thinking-budget-pr-cicd",
    title: "Claude 3.7 Thinking Budget Control in PR CI/CD",
    description: "Watch how to dynamically tune Claude 3.7 Sonnet's reasoning token budget during automated GitHub Pull Request security reviews to prevent SSRF vulnerabilities.",
    duration: "1:04",
    durationType: "Short",
    aspectRatio: "9:16",
    contentType: "Skill",
    youtubeId: "dQw4w9WgXcQ",
    views: "4.2k",
    accuracy: "99.4% Verified",
    verifiedDate: "18 min ago",
    creator: {
      name: "Alex Rivera",
      handle: "@alex_dev",
      initials: "AR",
      role: "Core Security WG"
    },
    tools: [
      { name: "Claude 3.7 Sonnet", slug: "claude-3-7-sonnet" },
      { name: "Anthropic Python SDK", slug: "claude-3-7-sonnet" },
      { name: "GitHub Actions", slug: "cursor-ai" }
    ],
    roleTarget: "Software Engineers",
    associatedSkillSlug: "r1-reasoning-json",
    codeSnippet: `<system_instruction>
You are an AST-grounded security audit runtime.
<thinking_budget target="4096">
Reason step-by-step through network ingress points.
</thinking_budget>
<context_diff>{{TARGET_PR_DIFF}}</context_diff>
</system_instruction>`,
    snippetFilename: "system_prompt_v2.xml",
    snippetTokens: "312 tokens",
    upvotes: 342,
    clones: 89,
    terminalLogs: [
      "> anthropic.messages.create({",
      '  "model": "claude-3-7-sonnet-20250219",',
      '  "thinking": { "type": "enabled", "budget_tokens": 4096 },',
      '  "messages": [{ "role": "user", "content": "Audit PR #481 for SSRF in webhook handler..." }]',
      "})",
      "[Thinking Process: 812 tokens consumed in 1.42s]",
      "Vulnerability Flagged: High SSRF Severity in /api/webhook/dispatch.ts"
    ]
  },
  {
    id: "vid-inbound-lead-clay",
    slug: "inbound-lead-enrichment-clay-claude",
    title: "10-Minute Full Inbound Lead Enrichment in Clay & Claude",
    description: "End-to-end multi-tool execution video. Webhook listener pulls incoming demo requests, validates LinkedIn corporate domain, queries Perplexity API for recent funding, and routes scored qualified leads.",
    duration: "4:38",
    durationType: "Quick",
    aspectRatio: "16:9",
    contentType: "Workflow",
    youtubeId: "dQw4w9WgXcQ",
    views: "8.9k",
    accuracy: "98.7% Verified",
    verifiedDate: "2 hours ago",
    creator: {
      name: "Marcus Vance",
      handle: "@marcus_revops",
      initials: "MV",
      role: "Lead Automation Eng"
    },
    tools: [
      { name: "Claude 3.7 Sonnet", slug: "claude-3-7-sonnet" },
      { name: "n8n Self-Hosted", slug: "n8n-self-hosted" },
      { name: "DeepSeek R1", slug: "deepseek-r1" }
    ],
    roleTarget: "RevOps & Automation",
    associatedWorkflowSlug: "inbound-lead-enrichment-scoring",
    codeSnippet: `export async function routeLead(lead: LeadPayload) {
  const enrich = await clayClient.lookupCompany(lead.domain);
  const score = await anthropic.evaluateICP({
    company: enrich,
    annualRevenue: enrich.revenue,
    employeeCount: enrich.headcount
  });
  if (score.tier === "ENTERPRISE") {
    await slack.sendAlert("#sales-priority", lead);
  }
}`,
    snippetFilename: "lead_router.ts",
    snippetTokens: "480 tokens",
    upvotes: 512,
    clones: 147,
    terminalLogs: [
      "> POST /webhook/lead-ingress [200 OK]",
      "Clay API: Found domain stripe.com (Series Seed to Pre-IPO)",
      "Claude 3.7: ICP Fit Score calculated at 96/100",
      "Slack Webhook: Alert dispatched to #sales-priority in 380ms"
    ]
  },
  {
    id: "vid-invoice-vision-ocr",
    slug: "claude-vision-invoice-extraction-zero-error",
    title: "Zero-Hallucination Invoice Extraction in Claude Vision",
    tagline: "Live demonstration of XML bounding tags preventing OCR errors.",
    description: "Watch a high-resolution 300 DPI PDF invoice processed through Claude 3.7 Sonnet with deterministic Draft-07 JSON schema verification.",
    duration: "0:52",
    durationType: "Short",
    aspectRatio: "9:16",
    contentType: "Skill",
    youtubeId: "dQw4w9WgXcQ",
    views: "3.7k",
    accuracy: "99.4% Precision",
    verifiedDate: "Yesterday",
    creator: {
      name: "Elena Rostova",
      handle: "@elena_ai",
      initials: "ER",
      role: "Data Systems Architect"
    },
    tools: [
      { name: "Claude 3.7 Sonnet", slug: "claude-3-7-sonnet" }
    ],
    roleTarget: "Software Engineers",
    associatedSkillSlug: "invoice-extraction-claude-vision",
    codeSnippet: `<image_input>{{DOCUMENT_IMAGE_BASE64}}</image_input>
<extraction_schema>
{
  "vendor": { "name": string, "tax_id": string | null },
  "totals": { "subtotal": number, "grand_total": number }
}
</extraction_schema>`,
    snippetFilename: "invoice_extractor.xml",
    snippetTokens: "285 tokens",
    upvotes: 289,
    clones: 76,
    terminalLogs: [
      "> Base64 image loaded (1,240 KB)",
      "Sending payload to claude-3-7-sonnet-20250219",
      "Output JSON verified: Vendor Acme Cloud, Total $2,102.80",
      "Zero hallucinations detected across 14 table rows."
    ]
  },
  {
    id: "vid-cursor-fullstack-dash",
    slug: "cursor-composer-one-shot-react-dashboards",
    title: "Scaffold Full Next.js 15 Dashboard in Cursor in 5 Mins",
    description: "Live unedited session building an end-to-end analytics dashboard with Tailwind CSS v4, shadcn/ui primitives, and Recharts using Cursor Composer multi-file edits.",
    duration: "6:14",
    durationType: "Deep",
    aspectRatio: "16:9",
    contentType: "Workflow",
    youtubeId: "dQw4w9WgXcQ",
    views: "12.4k",
    accuracy: "97.8% First-pass",
    verifiedDate: "3 days ago",
    creator: {
      name: "David Kim",
      handle: "@dkim_code",
      initials: "DK",
      role: "Frontend Engineer"
    },
    tools: [
      { name: "Cursor", slug: "cursor-ai" },
      { name: "Claude 3.7 Sonnet", slug: "claude-3-7-sonnet" }
    ],
    roleTarget: "Software Engineers",
    associatedSkillSlug: "claude-artifacts-react-dashboards",
    codeSnippet: `// Cursor Composer prompt rule
Use React Server Components (RSC) by default.
Isolate 'use client' only to chart leaf wrappers.
Ensure zero missing props or any types.`,
    snippetFilename: "composer_rules.md",
    snippetTokens: "190 tokens",
    upvotes: 840,
    clones: 310,
    terminalLogs: [
      "> cursor composer: scaffold /app/analytics/page.tsx",
      "Generating components/charts/kpi-metric-card.tsx",
      "Generating components/charts/token-usage-chart.tsx",
      "TypeScript compiler check: 0 errors in 1.8s"
    ]
  },
  {
    id: "vid-deepseek-r1-math",
    slug: "deepseek-r1-reasoning-pathways-uncovered",
    title: "Inspecting DeepSeek R1 Chain-of-Thought in Production",
    description: "Analyzing the difference between raw CoT reasoning traces and final JSON outputs. See how to catch edge-case failure modes in algorithmic problem sets.",
    duration: "1:12",
    durationType: "Short",
    aspectRatio: "9:16",
    contentType: "Skill",
    youtubeId: "dQw4w9WgXcQ",
    views: "6.1k",
    accuracy: "98.9% Rigor",
    verifiedDate: "4 days ago",
    creator: {
      name: "Alex Rivera",
      handle: "@alex_dev",
      initials: "AR",
      role: "Core Research"
    },
    tools: [
      { name: "DeepSeek R1", slug: "deepseek-r1" }
    ],
    roleTarget: "Software Engineers",
    associatedSkillSlug: "r1-reasoning-json",
    codeSnippet: `<problem>
Find optimal rate limiter configuration for 100k requests/sec.
</problem>
<thinking>
Evaluating Token Bucket vs Leaky Bucket algorithms...
</thinking>`,
    snippetFilename: "cot_prompt.txt",
    snippetTokens: "340 tokens",
    upvotes: 418,
    clones: 104,
    terminalLogs: [
      "> deepseek-reasoner: streaming tokens...",
      "<think> analyzing Redis sliding window memory overhead...",
      "Result: Distributed Token Bucket with Redis Cluster pipeline",
      "Verified SLA latency: 1.2ms p99"
    ]
  },
  {
    id: "vid-voice-agent-retell",
    slug: "ai-voice-agent-inbound-dispatch-retell",
    title: "Deploying a Low-Latency AI Voice Support Agent",
    description: "Watch live phone call handling using Retell AI and Claude 3.7. Audio turn-taking latency maintained under 600ms with real-time tool calling into PostgreSQL.",
    duration: "8:25",
    durationType: "Deep",
    aspectRatio: "16:9",
    contentType: "Workflow",
    youtubeId: "dQw4w9WgXcQ",
    views: "5.4k",
    accuracy: "99.1% Verified",
    verifiedDate: "5 days ago",
    creator: {
      name: "Marcus Vance",
      handle: "@marcus_revops",
      initials: "MV",
      role: "Lead Automation Eng"
    },
    tools: [
      { name: "Claude 3.7 Sonnet", slug: "claude-3-7-sonnet" },
      { name: "n8n Self-Hosted", slug: "n8n-self-hosted" }
    ],
    roleTarget: "RevOps & Automation",
    associatedWorkflowSlug: "inbound-lead-enrichment-scoring",
    codeSnippet: `const voiceSession = await retell.createCall({
  agent_id: "agent_49102",
  phone_number: "+14155552671",
  variables: { customer_tier: "Enterprise VIP" }
});`,
    snippetFilename: "telephony_handler.ts",
    snippetTokens: "220 tokens",
    upvotes: 395,
    clones: 92,
    terminalLogs: [
      "> Inbound SIP trunk connected",
      "ASR latency: 140ms | LLM first-token: 290ms | TTS: 120ms",
      "Caller intent: Reschedule flight AC-892",
      "Database update committed via Supabase RPC"
    ]
  }
];

export function getVideoBySlug(slug: string): VideoItem | undefined {
  return VIDEOS.find((v) => v.slug === slug);
}
