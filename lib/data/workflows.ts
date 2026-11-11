export interface WorkflowStep {
  stepNumber: number;
  title: string;
  subtitle: string;
  description: string;
  codeSnippet?: string;
  language?: string;
}

export interface WorkflowNode {
  id: string;
  nodeNumber: string;
  name: string;
  type: string;
  desc: string;
  payloadInfo: string;
  targetTool: string;
}

export interface WorkflowTool {
  name: string;
  toolNumber: string;
  category: string;
  costBasis: string;
  integration: string;
  description: string;
}

export interface WorkflowItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  role: "Developers" | "Sales & RevOps" | "Operations" | "Growth" | "Founders" | "HR & Talent";
  orchestrator: "n8n" | "Make.com" | "Zapier" | "Python / LangGraph";
  difficulty: "No-Code" | "Low-Code" | "Developer";
  timeSaved: string;
  cost: string;
  verifiedDate: string;
  videoDuration: string;
  videoTitle?: string;
  youtubeId?: string;
  stack: string[];
  blueprintSpec: {
    schema: string;
    pipelineId: string;
    orchestrator: string;
    nodes: Array<{ name: string; type: string; model?: string; webhook?: string }>;
    verifiedStatus: { runtimeProofVerified: boolean; auditTimestamp: string };
  };
  nodes: WorkflowNode[];
  tools: WorkflowTool[];
  sopSteps: WorkflowStep[];
  canIDoInChatGPT: {
    status: string;
    flowcraftPerks: string[];
    chatGptLimitations: string[];
  };
  creator: {
    name: string;
    role: string;
    avatar: string;
    verified: boolean;
  };
  metrics: {
    setupTime: string;
    avgLatency: string;
    netMonthlyRoi: string;
    estimatedCost: string;
  };
}

export const WORKFLOWS: WorkflowItem[] = [
  {
    id: "wf_ast_security_audit_092",
    slug: "github-pr-security-ast-audit",
    title: "Automated GitHub PR Security & AST Audit",
    description: "Deep AST static evaluation on new pull requests with automated zero-day detection and contextual test case generation.",
    role: "Developers",
    orchestrator: "n8n",
    difficulty: "Low-Code",
    timeSaved: "18 hrs/wk",
    cost: "$0/mo stack",
    verifiedDate: "May 2026",
    videoDuration: "12:40",
    videoTitle: "Autonomous AST Code Review with Claude 3.7 & n8n",
    youtubeId: "dQw4w9WgXcQ",
    stack: ["GitHub", "Claude 3.7", "SonarQube"],
    blueprintSpec: {
      schema: "https://flowcraft.sh/schemas/v2/pipeline.json",
      pipelineId: "wf_ast_security_audit_092",
      orchestrator: "n8n",
      nodes: [
        { name: "GitHub PR Trigger", type: "n8n-nodes-base.githubTrigger", webhook: "active" },
        { name: "Claude 3.7 Evaluator", type: "claude-3-7-sonnet", model: "claude-3-7-sonnet" },
        { name: "Severity Gate", type: "n8n-nodes-base.if" },
        { name: "PR Inline Commenter", type: "n8n-nodes-base.github" }
      ],
      verifiedStatus: {
        runtimeProofVerified: true,
        auditTimestamp: "2026-05-18T09:42:00Z"
      }
    },
    nodes: [
      {
        id: "node-1",
        nodeNumber: "NODE 01",
        name: "GitHub Webhook",
        type: "Webhook Event",
        desc: "Triggered on pull_request.opened & commit sync.",
        payloadInfo: "git_diff_stream (~120KB)",
        targetTool: "tool-github"
      },
      {
        id: "node-2",
        nodeNumber: "NODE 02",
        name: "n8n Orchestrator",
        type: "Chunker & Dispatch",
        desc: "Splits large PR diffs, executes Semgrep AST CLI filter via worker.",
        payloadInfo: "Chunk window: 8k ctx",
        targetTool: "tool-n8n"
      },
      {
        id: "node-3",
        nodeNumber: "NODE 03 • AI",
        name: "Claude 3.7 Sonnet",
        type: "Reasoning Engine",
        desc: "Zero-shot OWASP vulnerability scan & architectural taint analysis.",
        payloadInfo: "Latency: 1.8s (JSON Schema)",
        targetTool: "tool-claude"
      },
      {
        id: "node-4",
        nodeNumber: "NODE 04",
        name: "Severity Gate",
        type: "Quality Gate",
        desc: "Rejects false positives. Passes findings with CVSS >= 7.0 (HIGH/CRIT).",
        payloadInfo: "Ruleset: 142 checks",
        targetTool: "tool-semgrep"
      },
      {
        id: "node-5",
        nodeNumber: "NODE 05",
        name: "PR Inline Comment",
        type: "Execution",
        desc: "Writes precise diff suggestions & opens Linear ticket for SEV-1.",
        payloadInfo: "GitHub API v3 & Slack",
        targetTool: "tool-github"
      }
    ],
    tools: [
      {
        name: "GitHub",
        toolNumber: "TOOL 01",
        category: "Version Control",
        costBasis: "$0 / Included",
        integration: "Fine-grained PAT",
        description: "Source repository, Webhook publisher, and Pull Request review recipient."
      },
      {
        name: "n8n Orchestrator",
        toolNumber: "TOOL 02",
        category: "Workflow Automation",
        costBasis: "Docker Free / Cloud $20",
        integration: "Self-hosted REST API",
        description: "Executes webhook routing, error retries, and conditional diff routing."
      },
      {
        name: "Claude 3.7 Sonnet",
        toolNumber: "TOOL 03",
        category: "LLM / Reasoning",
        costBasis: "~$0.04 / PR review",
        integration: "Anthropic Messages API",
        description: "Advanced static analysis reasoning engine with structured JSON outputs."
      },
      {
        name: "Semgrep CLI",
        toolNumber: "TOOL 04",
        category: "AST Security",
        costBasis: "$0 / LGPL-2.1",
        integration: "CLI Node inside n8n",
        description: "Local AST syntax checker for fast, deterministic false-positive weeding."
      }
    ],
    sopSteps: [
      {
        stepNumber: 1,
        title: "Configure GitHub Webhook & Fine-Grained Secret",
        subtitle: "Time: 4 minutes",
        description: "Create a GitHub Webhook on your target repository pointing to your n8n public webhook URL. Select 'Pull requests' and 'Issue comments' events, choosing application/json payload.",
        codeSnippet: `curl -X POST "https://api.github.com/repos/{owner}/{repo}/hooks" \\
  -H "Authorization: Bearer \${GITHUB_PAT}" \\
  -d '{"name":"web","active":true,"events":["pull_request"],"config":{"url":"https://n8n.yourdomain.com/webhook/github-pr","content_type":"json"}}'`,
        language: "bash"
      },
      {
        stepNumber: 2,
        title: "Import the n8n Workflow JSON Blueprint",
        subtitle: "Time: 2 minutes",
        description: "In your n8n instance, click 'New Workflow' -> 'Import from File' (or Paste JSON) using the provided blueprint below. Configure your Anthropic and GitHub credential nodes.",
        codeSnippet: `{
  "nodes": [
    { "type": "n8n-nodes-base.githubTrigger", "parameters": { "events": ["pull_request"] } },
    { "type": "@n8n/n8n-nodes-langchain.chainLlm", "parameters": { "model": "claude-3-7-sonnet" } }
  ]
}`,
        language: "json"
      },
      {
        stepNumber: 3,
        title: "Define the Claude 3.7 Security Review Prompt Payload",
        subtitle: "Time: 3 minutes",
        description: "Configure the prompt node with strict output JSON constraints. Claude receives the git unified diff along with modified file paths and outputs verified vulnerabilities.",
        codeSnippet: `SYSTEM: You are a Principal Application Security Auditor. Analyze the incoming git diff.
Identify:
1. SQL injection / tainted query concatenation
2. Broken authorization / missing RLS
3. Memory leaks or unhandled promise rejections
Output ONLY valid JSON adhering to the provided schema.`,
        language: "markdown"
      },
      {
        stepNumber: 4,
        title: "Test with Sample Vulnerable PR & Verify Inline Comments",
        subtitle: "Time: 5 minutes",
        description: "Open a test PR with an unescaped SQL parameter or insecure eval. Within 4.2 seconds, n8n executes the workflow and writes inline Markdown review comments directly on the GitHub PR diff.",
        language: "markdown"
      }
    ],
    canIDoInChatGPT: {
      status: "Partially • Manual Fallback Only",
      flowcraftPerks: [
        "Zero human clicks — fires automatically on PR creation",
        "Inline line-by-line diff comments posted to GitHub",
        "Blocks merging if SEV-1 vulnerabilities occur",
        "Deterministic JSON schema integration with CI/CD"
      ],
      chatGptLimitations: [
        "Requires manual copy-pasting of git diff files",
        "Truncates on multi-file diffs exceeding prompt token limit",
        "Cannot post inline comments back to GitHub API",
        "Zero automated CI/CD gating"
      ]
    },
    creator: {
      name: "Dan Miller",
      role: "Alex Automates & Security • Recorded May 14, 2026",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDzNabdCeUIFpyG6wrjqRvMEKzqTQjgYeIxrE0s-xmIbfdPUqWl--P2u2dZPqBx8VMRqtPO_OqRmpcLJP0sGo_hBnmMutEiL0KBAStjCfFfoCAWeqk8mneCoPJdrEe8kxTDpwOd9czyaOBjVfhw6PjjFTuz1d-iaUMeI2ylNiqKOJJvy2cdMfG_aCg771nS7OIRscG64brX2utggKV8T11vR8SXfIV4hyuu21RdTSg",
      verified: true
    },
    metrics: {
      setupTime: "18 mins setup",
      avgLatency: "~4.2s avg",
      netMonthlyRoi: "~$1,800/mo",
      estimatedCost: "$0 - $24 / mo"
    }
  },
  {
    id: "wf_clay_perplexity_dossier",
    slug: "clay-perplexity-dossier-pipeline",
    title: "Deep Research Clay & Perplexity Dossier Pipeline",
    description: "Multi-agent company intelligence gathering with verified executive quotes, SEC 10-K extraction, and automated CRM enrichment.",
    role: "Sales & RevOps",
    orchestrator: "Make.com",
    difficulty: "No-Code",
    timeSaved: "24 hrs/wk",
    cost: "$49/mo stack",
    verifiedDate: "May 2026",
    videoDuration: "08:15",
    videoTitle: "Automated Enterprise Lead Intelligence with Clay",
    youtubeId: "dQw4w9WgXcQ",
    stack: ["Apollo", "Clay", "Perplexity", "HubSpot"],
    blueprintSpec: {
      schema: "https://flowcraft.sh/schemas/v2/pipeline.json",
      pipelineId: "wf_clay_perplexity_dossier",
      orchestrator: "Make.com",
      nodes: [
        { name: "Apollo Trigger", type: "make.apollo" },
        { name: "Clay Waterfall", type: "clay.table" },
        { name: "Perplexity Research", type: "perplexity.sonar" },
        { name: "HubSpot Push", type: "hubspot.crm" }
      ],
      verifiedStatus: {
        runtimeProofVerified: true,
        auditTimestamp: "2026-05-15T11:20:00Z"
      }
    },
    nodes: [],
    tools: [],
    sopSteps: [],
    canIDoInChatGPT: {
      status: "Partially",
      flowcraftPerks: ["Auto-sync to HubSpot", "Waterfall email verification"],
      chatGptLimitations: ["Manual company research", "No bulk CRM mapping"]
    },
    creator: {
      name: "Sarah Chen",
      role: "RevOps Lead at ScaleFlow",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDzNabdCeUIFpyG6wrjqRvMEKzqTQjgYeIxrE0s-xmIbfdPUqWl--P2u2dZPqBx8VMRqtPO_OqRmpcLJP0sGo_hBnmMutEiL0KBAStjCfFfoCAWeqk8mneCoPJdrEe8kxTDpwOd9czyaOBjVfhw6PjjFTuz1d-iaUMeI2ylNiqKOJJvy2cdMfG_aCg771nS7OIRscG64brX2utggKV8T11vR8SXfIV4hyuu21RdTSg",
      verified: true
    },
    metrics: {
      setupTime: "25 mins setup",
      avgLatency: "~8.5s avg",
      netMonthlyRoi: "~$2,400/mo",
      estimatedCost: "$49 / mo"
    }
  },
  {
    id: "wf_ticket_triage_linear",
    slug: "multi-agent-ticket-triage-linear",
    title: "Multi-Agent Ticket Triage & Linear Issue Sync",
    description: "Autonomous triage for high-volume customer escalations with error log parsing, repro-step generation, and Linear ticket sync.",
    role: "Operations",
    orchestrator: "n8n",
    difficulty: "Low-Code",
    timeSaved: "31 hrs/wk",
    cost: "$0/mo (Self-Host)",
    verifiedDate: "May 2026",
    videoDuration: "15:10",
    videoTitle: "Zendesk to Linear Auto-Sync with Claude",
    youtubeId: "dQw4w9WgXcQ",
    stack: ["Zendesk", "n8n", "Claude", "Linear"],
    blueprintSpec: {
      schema: "https://flowcraft.sh/schemas/v2/pipeline.json",
      pipelineId: "wf_ticket_triage_linear",
      orchestrator: "n8n",
      nodes: [
        { name: "Zendesk Trigger", type: "n8n-nodes-base.zendesk" },
        { name: "Claude Triage", type: "claude-3-7-sonnet" },
        { name: "Linear Sync", type: "linear.issue" }
      ],
      verifiedStatus: {
        runtimeProofVerified: true,
        auditTimestamp: "2026-05-12T14:10:00Z"
      }
    },
    nodes: [],
    tools: [],
    sopSteps: [],
    canIDoInChatGPT: {
      status: "No",
      flowcraftPerks: ["Direct Linear issue sync", "Log parsing in realtime"],
      chatGptLimitations: ["No webhook listener", "No Zendesk API integration"]
    },
    creator: {
      name: "Marcus Vance",
      role: "Support Operations Engineer",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDzNabdCeUIFpyG6wrjqRvMEKzqTQjgYeIxrE0s-xmIbfdPUqWl--P2u2dZPqBx8VMRqtPO_OqRmpcLJP0sGo_hBnmMutEiL0KBAStjCfFfoCAWeqk8mneCoPJdrEe8kxTDpwOd9czyaOBjVfhw6PjjFTuz1d-iaUMeI2ylNiqKOJJvy2cdMfG_aCg771nS7OIRscG64brX2utggKV8T11vR8SXfIV4hyuu21RdTSg",
      verified: true
    },
    metrics: {
      setupTime: "30 mins setup",
      avgLatency: "~3.1s avg",
      netMonthlyRoi: "~$3,100/mo",
      estimatedCost: "$0 - $15 / mo"
    }
  },
  {
    id: "wf_figma_tailwind_factory",
    slug: "figma-tailwind-react-factory",
    title: "Autonomous Figma to Tailwind React Factory",
    description: "Webhook-driven conversion of Figma component variants directly into type-safe Tailwind React components and Storybook docs.",
    role: "Developers",
    orchestrator: "Python / LangGraph",
    difficulty: "Developer",
    timeSaved: "14 hrs/wk",
    cost: "$20/mo stack",
    verifiedDate: "May 2026",
    videoDuration: "18:30",
    videoTitle: "Figma Dev Mode to Production Next.js Code Generator",
    youtubeId: "dQw4w9WgXcQ",
    stack: ["Figma", "Cursor CLI", "Next.js 15"],
    blueprintSpec: {
      schema: "https://flowcraft.sh/schemas/v2/pipeline.json",
      pipelineId: "wf_figma_tailwind_factory",
      orchestrator: "Python / LangGraph",
      nodes: [
        { name: "Figma Webhook", type: "figma.webhook" },
        { name: "AST Converter", type: "python.ast" },
        { name: "Cursor Auto-PR", type: "cursor.cli" }
      ],
      verifiedStatus: {
        runtimeProofVerified: true,
        auditTimestamp: "2026-05-10T16:00:00Z"
      }
    },
    nodes: [],
    tools: [],
    sopSteps: [],
    canIDoInChatGPT: {
      status: "No",
      flowcraftPerks: ["Direct git commit to repo", "Extracts actual Figma design tokens"],
      chatGptLimitations: ["Hallucinates styles without AST", "Manual screenshots required"]
    },
    creator: {
      name: "Elena Rostova",
      role: "Design Systems Engineer",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDzNabdCeUIFpyG6wrjqRvMEKzqTQjgYeIxrE0s-xmIbfdPUqWl--P2u2dZPqBx8VMRqtPO_OqRmpcLJP0sGo_hBnmMutEiL0KBAStjCfFfoCAWeqk8mneCoPJdrEe8kxTDpwOd9czyaOBjVfhw6PjjFTuz1d-iaUMeI2ylNiqKOJJvy2cdMfG_aCg771nS7OIRscG64brX2utggKV8T11vR8SXfIV4hyuu21RdTSg",
      verified: true
    },
    metrics: {
      setupTime: "40 mins setup",
      avgLatency: "~12s avg",
      netMonthlyRoi: "~$2,000/mo",
      estimatedCost: "$20 / mo"
    }
  },
  {
    id: "wf_docllm_invoice_extract",
    slug: "docllm-invoice-extraction-reconcile",
    title: "DocLLM Invoice Extraction & Auto-Reconcile",
    description: "Multi-language invoice OCR and line-item extraction matched against bank ledger transactions with human-in-the-loop Slack approval.",
    role: "Operations",
    orchestrator: "n8n",
    difficulty: "Low-Code",
    timeSaved: "11 hrs/wk",
    cost: "< $5/mo stack",
    verifiedDate: "May 2026",
    videoDuration: "06:45",
    videoTitle: "Automated Invoice Reconciliation with Llama-3 & Xero",
    youtubeId: "dQw4w9WgXcQ",
    stack: ["Gmail", "Llama-3", "Slack", "Xero"],
    blueprintSpec: {
      schema: "https://flowcraft.sh/schemas/v2/pipeline.json",
      pipelineId: "wf_docllm_invoice_extract",
      orchestrator: "n8n",
      nodes: [
        { name: "Gmail Fetch", type: "n8n.gmail" },
        { name: "OCR Extractor", type: "llama-3-vision" },
        { name: "Xero Reconcile", type: "xero.api" }
      ],
      verifiedStatus: {
        runtimeProofVerified: true,
        auditTimestamp: "2026-05-08T18:15:00Z"
      }
    },
    nodes: [],
    tools: [],
    sopSteps: [],
    canIDoInChatGPT: {
      status: "Partially",
      flowcraftPerks: ["Slack 1-click approvals", "Auto-reconciles in Xero"],
      chatGptLimitations: ["Manual file uploads", "No accounting ledger sync"]
    },
    creator: {
      name: "Tariq Al-Mansoor",
      role: "CFO & Finance Operations",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDzNabdCeUIFpyG6wrjqRvMEKzqTQjgYeIxrE0s-xmIbfdPUqWl--P2u2dZPqBx8VMRqtPO_OqRmpcLJP0sGo_hBnmMutEiL0KBAStjCfFfoCAWeqk8mneCoPJdrEe8kxTDpwOd9czyaOBjVfhw6PjjFTuz1d-iaUMeI2ylNiqKOJJvy2cdMfG_aCg771nS7OIRscG64brX2utggKV8T11vR8SXfIV4hyuu21RdTSg",
      verified: true
    },
    metrics: {
      setupTime: "20 mins setup",
      avgLatency: "~2.4s avg",
      netMonthlyRoi: "~$1,200/mo",
      estimatedCost: "< $5 / mo"
    }
  },
  {
    id: "wf_lead_waterfall_enrichment",
    slug: "inbound-lead-waterfall-enrichment",
    title: "Autonomous Inbound Lead Waterfall Enrichment",
    description: "Zero-latency webhook routing from form fills to waterfall phone/email validation, social footprints, and smart routing.",
    role: "Growth",
    orchestrator: "Make.com",
    difficulty: "No-Code",
    timeSaved: "16 hrs/wk",
    cost: "$15/mo stack",
    verifiedDate: "May 2026",
    videoDuration: "11:05",
    videoTitle: "High-Converting Lead Waterfall with Make.com & Attio",
    youtubeId: "dQw4w9WgXcQ",
    stack: ["Typeform", "Make.com", "Hunter", "Attio"],
    blueprintSpec: {
      schema: "https://flowcraft.sh/schemas/v2/pipeline.json",
      pipelineId: "wf_lead_waterfall_enrichment",
      orchestrator: "Make.com",
      nodes: [
        { name: "Typeform Webhook", type: "typeform.webhook" },
        { name: "Hunter Email Check", type: "hunter.verify" },
        { name: "Attio Contact Sync", type: "attio.crm" }
      ],
      verifiedStatus: {
        runtimeProofVerified: true,
        auditTimestamp: "2026-05-05T08:30:00Z"
      }
    },
    nodes: [],
    tools: [],
    sopSteps: [],
    canIDoInChatGPT: {
      status: "No",
      flowcraftPerks: ["Direct Attio CRM sync", "Multi-provider waterfall lookup"],
      chatGptLimitations: ["Zero realtime webhook triggers", "No email deliverability check"]
    },
    creator: {
      name: "Chloe Dupont",
      role: "Growth Engineer at HyperFlow",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDzNabdCeUIFpyG6wrjqRvMEKzqTQjgYeIxrE0s-xmIbfdPUqWl--P2u2dZPqBx8VMRqtPO_OqRmpcLJP0sGo_hBnmMutEiL0KBAStjCfFfoCAWeqk8mneCoPJdrEe8kxTDpwOd9czyaOBjVfhw6PjjFTuz1d-iaUMeI2ylNiqKOJJvy2cdMfG_aCg771nS7OIRscG64brX2utggKV8T11vR8SXfIV4hyuu21RdTSg",
      verified: true
    },
    metrics: {
      setupTime: "15 mins setup",
      avgLatency: "~1.9s avg",
      netMonthlyRoi: "~$1,600/mo",
      estimatedCost: "$15 / mo"
    }
  }
];

