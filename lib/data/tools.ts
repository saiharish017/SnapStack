export interface ToolPricingTier {
  name: string;
  price: string;
  description: string;
}

export interface ToolProfile {
  id: string;
  slug: string;
  name: string;
  company: string;
  category: "LLMs & Reasoning" | "Coding Assistants" | "Automation & Agents" | "Audio & Voice" | "Video Generation" | "Research & Synthesis";
  modelId?: string;
  verifiedVersion: string;
  tagline: string;
  description: string;
  pricingType: "Free" | "Freemium" | "Paid" | "Open Source";
  startingPrice: string;
  websiteUrl: string;
  passRate: string;
  avgLatency: string;
  contextWindow: string;
  dataTraining: "Zero Retention" | "Opt-out" | "Self-Hosted" | "No Data Training";
  compliance: string[];
  guidesCount: number;
  workflowsCount: number;
  skillsCount: number;
  pricingBreakdown: ToolPricingTier[];
  apiRates?: {
    input: string;
    output: string;
    cachingWrite?: string;
    cachingRead?: string;
  };
  supportedModalities: string[];
  sdks: Array<{ name: string; command: string }>;
  ecosystem: string[];
}

export const TOOLS: ToolProfile[] = [
  {
    id: "tool-claude-3-7",
    slug: "claude-3-7-sonnet",
    name: "Claude 3.7 Sonnet",
    company: "Anthropic PBC",
    category: "LLMs & Reasoning",
    modelId: "claude-3-7-sonnet-20250219",
    verifiedVersion: "v2.4.9 (Tested May 2026)",
    tagline: "Frontier hybrid reasoning model with dynamic thinking budget",
    description: "Hybrid reasoning model combining instantaneous token generation with extended step-by-step thinking scratchpads, 200k context, and computer use. Built specifically for complex engineering, deterministic code generation, and multi-turn architectural workflows.",
    pricingType: "Freemium",
    startingPrice: "$20/mo",
    websiteUrl: "https://claude.ai",
    passRate: "99.4%",
    avgLatency: "380ms",
    contextWindow: "200,000 Tokens",
    dataTraining: "Zero Retention",
    compliance: ["No Data Training", "SOC 2 Type II", "HIPAA Ready", "ISO 27001", "GDPR"],
    guidesCount: 24,
    workflowsCount: 68,
    skillsCount: 32,
    pricingBreakdown: [
      {
        name: "Free Tier",
        price: "$0 / mo",
        description: "Claude Free web interface. Limited daily turns, dynamically rate-throttled at peak hours."
      },
      {
        name: "Pro Subscription",
        price: "$20 / seat / mo",
        description: "5x higher usage caps than Free, priority server capacity, early access to extended thinking scratchpad controls."
      },
      {
        name: "Team & Enterprise",
        price: "$30 / seat / mo",
        description: "Centralized workspace billing, dedicated SSO integration, zero retention default, higher rate limits."
      }
    ],
    apiRates: {
      input: "$3.00 / MTok",
      output: "$15.00 / MTok",
      cachingWrite: "$3.75 / MTok",
      cachingRead: "$0.30 / MTok (90% off)"
    },
    supportedModalities: ["Text / Code", "High-Res Vision", "Multi-Page PDFs", "Computer Use"],
    sdks: [
      { name: "python", command: "pip install anthropic" },
      { name: "node", command: "npm i @anthropic-ai/sdk" }
    ],
    ecosystem: ["Cursor", "Windsurf", "Zed", "n8n", "Make", "LangChain", "AWS Bedrock", "GCP Vertex"]
  },
  {
    id: "tool-cursor",
    slug: "cursor",
    name: "Cursor",
    company: "Anysphere Inc.",
    category: "Coding Assistants",
    verifiedVersion: "v0.46 (Tested May 2026)",
    tagline: "AI-native code editor with multi-file agent editing and shadow indexing",
    description: "AI-native fork of VS Code with multi-file Agent editing, semantic indexing, shadow workspace sandboxing, and background linters.",
    pricingType: "Freemium",
    startingPrice: "$20/mo",
    websiteUrl: "https://cursor.com",
    passRate: "98.2%",
    avgLatency: "410ms",
    contextWindow: "Full Repository Index",
    dataTraining: "Zero Retention",
    compliance: ["Privacy Mode (0-Retention)", "SOC 2 Type II"],
    guidesCount: 19,
    workflowsCount: 51,
    skillsCount: 14,
    pricingBreakdown: [
      { name: "Hobby", price: "$0 / mo", description: "Basic autocompletions and limited fast premium models." },
      { name: "Pro", price: "$20 / mo", description: "Unlimited completions, 500 fast requests/mo, agentic background tasks." },
      { name: "Business", price: "$40 / seat / mo", description: "Centralized admin privacy enforcement, zero data retention enforceability." }
    ],
    supportedModalities: ["Code", "Terminal Shell", "Git Diffs"],
    sdks: [{ name: "cli", command: "cursor --install" }],
    ecosystem: ["VS Code Extensions", "Claude 3.7", "OpenAI o-series", "DeepSeek"]
  },
  {
    id: "tool-n8n",
    slug: "n8n",
    name: "n8n Enterprise",
    company: "n8n GmbH",
    category: "Automation & Agents",
    verifiedVersion: "v1.80+ (Tested May 2026)",
    tagline: "Fair-code node-based autonomous workflow orchestrator",
    description: "Node-based autonomous engine supporting LangChain memory nodes, local vector DB retrieval, and deterministic sub-agent branching.",
    pricingType: "Open Source",
    startingPrice: "$0 self-host",
    websiteUrl: "https://n8n.io",
    passRate: "99.8%",
    avgLatency: "120ms",
    contextWindow: "Unlimited Local Memory",
    dataTraining: "Self-Hosted",
    compliance: ["Self-Hosted", "SOC 2", "GDPR Compliant", "Air-Gapped Ready"],
    guidesCount: 31,
    workflowsCount: 94,
    skillsCount: 41,
    pricingBreakdown: [
      { name: "Community Edition", price: "$0 / mo", description: "100% free self-hosted in Docker with full automation nodes and webhook triggers." },
      { name: "Cloud Starter", price: "$20 / mo", description: "Managed cloud hosting, 2,500 executions, zero DevOps overhead." }
    ],
    supportedModalities: ["Webhooks", "JSON Schemas", "REST APIs", "LangChain Chains"],
    sdks: [{ name: "docker", command: "docker run -it --rm -p 5678:5678 n8nio/n8n" }],
    ecosystem: ["Docker", "PostgreSQL", "Slack", "GitHub", "Anthropic", "Supabase"]
  },
  {
    id: "tool-gpt-4o",
    slug: "gpt-4o",
    name: "OpenAI GPT-4o",
    company: "OpenAI",
    category: "LLMs & Reasoning",
    modelId: "gpt-4o-2024-11-20",
    verifiedVersion: "Omni Flagship (Tested May 2026)",
    tagline: "Native multimodal speech and high-throughput reasoning engine",
    description: "Real-time multimodal flagship model processing speech, vision, and text simultaneously with sub-300ms time-to-first-token and strict JSON decoding.",
    pricingType: "Freemium",
    startingPrice: "$20/mo",
    websiteUrl: "https://openai.com",
    passRate: "96.5%",
    avgLatency: "290ms",
    contextWindow: "128,000 Tokens",
    dataTraining: "Opt-out",
    compliance: ["SOC 2 Type II", "GDPR", "Zero Data Retention Option"],
    guidesCount: 28,
    workflowsCount: 82,
    skillsCount: 36,
    pricingBreakdown: [
      { name: "ChatGPT Free", price: "$0 / mo", description: "Generous daily turns with automated fallback to mini models." },
      { name: "ChatGPT Plus", price: "$20 / mo", description: "Priority access, real-time voice conversations, custom GPTs." }
    ],
    apiRates: {
      input: "$2.50 / MTok",
      output: "$10.00 / MTok",
      cachingRead: "$1.25 / MTok"
    },
    supportedModalities: ["Native Audio", "Vision", "Text", "JSON Schema 2020-12"],
    sdks: [
      { name: "python", command: "pip install openai" },
      { name: "node", command: "npm i openai" }
    ],
    ecosystem: ["OpenAI Assistants API", "Make", "Zapier", "LangChain", "Azure OpenAI"]
  },
  {
    id: "tool-elevenlabs",
    slug: "elevenlabs",
    name: "ElevenLabs",
    company: "ElevenLabs Inc.",
    category: "Audio & Voice",
    verifiedVersion: "v2.5 (Tested May 2026)",
    tagline: "Ultra-low latency conversational voice streaming and multilingual cloning",
    description: "Ultra-low latency conversational voice streaming (140ms WebSocket), multilingual voice cloning, and programmatic sound FX synthesis.",
    pricingType: "Paid",
    startingPrice: "$5/mo",
    websiteUrl: "https://elevenlabs.io",
    passRate: "97.4%",
    avgLatency: "140ms",
    contextWindow: "Streaming Buffer",
    dataTraining: "No Data Training",
    compliance: ["REST + WS", "SOC 2 Type II", "GDPR"],
    guidesCount: 16,
    workflowsCount: 39,
    skillsCount: 11,
    pricingBreakdown: [
      { name: "Free Tier", price: "$0 / mo", description: "10,000 characters per month with 3 custom voices." },
      { name: "Starter", price: "$5 / mo", description: "30,000 characters, instant voice cloning, commercial license." }
    ],
    supportedModalities: ["Audio", "WebSockets", "Voice Cloning"],
    sdks: [{ name: "python", command: "pip install elevenlabs" }],
    ecosystem: ["Twilio", "LiveKit", "Daily.co", "Vapi"]
  },
  {
    id: "tool-runway",
    slug: "runway-gen-3",
    name: "Runway Gen-3",
    company: "Runway AI Inc.",
    category: "Video Generation",
    verifiedVersion: "Gen-3 Alpha (Tested May 2026)",
    tagline: "Hyper-realistic diffusion model for cinematic video synthesis",
    description: "Diffusion model for hyper-realistic video synthesis with structural motion brush controls, keyframe interpolation, and API pipeline hooks.",
    pricingType: "Paid",
    startingPrice: "$12/mo",
    websiteUrl: "https://runwayml.com",
    passRate: "94.0%",
    avgLatency: "18s",
    contextWindow: "10s per generation",
    dataTraining: "No Data Training",
    compliance: ["Enterprise Guardrails", "No-Train SLAs"],
    guidesCount: 14,
    workflowsCount: 23,
    skillsCount: 8,
    pricingBreakdown: [
      { name: "Standard", price: "$12 / mo", description: "625 credits per month, 4K upscaling, watermark removal." },
      { name: "Pro", price: "$28 / mo", description: "2,250 credits per month, unlimited relaxed video generation." }
    ],
    supportedModalities: ["Text-to-Video", "Image-to-Video", "Motion Brush"],
    sdks: [{ name: "rest", command: "POST https://api.runwayml.com/v1/generate" }],
    ecosystem: ["Premiere Pro Plugin", "DaVinci Resolve", "REST API"]
  }
];

