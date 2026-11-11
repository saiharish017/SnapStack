export interface ComparisonMetricRow {
  metric: string;
  iconName: string;
  toolAValue: string;
  toolASubtitle: string;
  toolAWinner: boolean;
  toolBValue: string;
  toolBSubtitle: string;
  toolBWinner: boolean;
  verdict: string;
  verdictBadge: "ToolA" | "ToolB" | "Tie";
}

export interface ComparisonDetail {
  slug: string;
  title: string;
  subtitle: string;
  toolA: {
    id: string;
    slug: string;
    name: string;
    version: string;
    company: string;
    badge: string;
    verdictTitle: string;
    verdictSubtitle: string;
    perks: Array<{ title: string; desc: string }>;
  };
  toolB: {
    id: string;
    slug: string;
    name: string;
    version: string;
    company: string;
    badge: string;
    verdictTitle: string;
    verdictSubtitle: string;
    perks: Array<{ title: string; desc: string }>;
  };
  benchmarkSuite: {
    id: string;
    sampleSize: string;
    prompt: string;
    toolAResult: {
      time: string;
      tokens: string;
      precision: string;
      thinkingBudget: string;
      logSnippet: string[];
    };
    toolBResult: {
      time: string;
      tokens: string;
      precision: string;
      modality: string;
      logSnippet: string[];
    };
  };
  matrix: ComparisonMetricRow[];
}

export const COMPARISONS: ComparisonDetail[] = [
  {
    slug: "claude-3-7-sonnet-vs-gpt-4o",
    title: "Claude 3.7 Sonnet vs. OpenAI GPT-4o",
    subtitle: "In-depth empirical breakdown across reasoning depth, tool execution, token economics, latency, and enterprise data privacy.",
    toolA: {
      id: "tool-claude-3-7",
      slug: "claude-3-7-sonnet",
      name: "Claude 3.7 Sonnet",
      version: "v2.4.9 Verified",
      company: "Anthropic PBC • Hybrid CoT Engine",
      badge: "ARCHITECT'S CHOICE",
      verdictTitle: "Choose Claude 3.7 Sonnet if you need:",
      verdictSubtitle: "Best for Complex Logic, Large Codebases & Deterministic Schemas",
      perks: [
        {
          title: "Controllable hybrid thinking tokens:",
          desc: "Dynamic budget up to 64k tokens allows granular steering of deterministic multi-step reasoning."
        },
        {
          title: "XML boundary adherence:",
          desc: "0% tag collapse in production audits; unmatched multi-turn XML state injection and system isolation."
        },
        {
          title: "Sub-dollar prompt caching:",
          desc: "$0.30/MTok read latency pricing slashes operating costs by up to 90% for agents holding persistent context."
        },
        {
          title: "High-fidelity computer use:",
          desc: "SOTA AST code-editing, native OS cursor tool actions, and deep Git repository structural refactoring."
        }
      ]
    },
    toolB: {
      id: "tool-gpt-4o",
      slug: "gpt-4o",
      name: "OpenAI GPT-4o",
      version: "Omni Flagship",
      company: "OpenAI • Native Multimodal",
      badge: "HIGH-THROUGHPUT ENGINE",
      verdictTitle: "Choose OpenAI GPT-4o if you need:",
      verdictSubtitle: "Best for Real-time Multimodal Dialogue, Sub-300ms TTFT & Strict JSON",
      perks: [
        {
          title: "Native real-time speech streaming:",
          desc: "Sub-300ms direct audio-in/audio-out processing with expressive conversational cadence."
        },
        {
          title: "Ultra-low warm TTFT:",
          desc: "Blazing 290ms cold/warm time-to-first-token on synchronous unprompted chat surfaces and search lookups."
        },
        {
          title: "Strict JSON schema validation:",
          desc: "Enforces JSON Schema 2020-12 at the decoding layer with formal grammar adherence guarantees."
        },
        {
          title: "Expansive ecosystem tooling:",
          desc: "Out-of-the-box native integrations across thousands of SaaS connectors, Assistants API, and vector stores."
        }
      ]
    },
    benchmarkSuite: {
      id: "#408",
      sampleSize: "N=5,240 REQUESTS",
      prompt: "Parse skewed multi-currency scanned invoice, validate VAT arithmetic against rules, and output typed JSON",
      toolAResult: {
        time: "Valid JSON in 2.14s",
        tokens: "412 tok",
        precision: "100% Valid",
        thinkingBudget: "2,048 tok",
        logSnippet: [
          "[THINKING_TOKEN_STREAM] Checking multi-currency VAT cross-rate...",
          "> EUR 4,200.00 @ 21% reverse charge detected. Subtotal: 3,471.07",
          "> Currency conversion matrix parity verified with European Central Bank ledger.",
          '<json_payload> { "valid": true, "tax_exempt": false, "calculated_vat": 728.93 } </json_payload>',
          "> XML boundaries enforced. AST verification passed with 0 warnings."
        ]
      },
      toolBResult: {
        time: "Valid JSON in 1.82s",
        tokens: "388 tok",
        precision: "96.5%",
        modality: "Native Vision",
        logSnippet: [
          "[DIRECT_VISION_TOKEN_DECODE] Parsing bounding box matrix...",
          "> Optical alignment successful. Detected EUR symbol and 21% string literal.",
          '{ "valid": true, "tax_exempt": false, "calculated_vat": 728.90 }',
          "> Strict JSON grammar checked against JSONSchema validator 2020-12.",
          "> Telemetry Note: 3-cent round-off drift against statutory VAT rule table."
        ]
      }
    },
    matrix: [
      {
        metric: "Starting Pricing Tier",
        iconName: "credit_card",
        toolAValue: "$20 / seat / mo",
        toolASubtitle: "Claude Pro (Web & Mobile)",
        toolAWinner: false,
        toolBValue: "$20 / seat / mo",
        toolBSubtitle: "ChatGPT Plus (Omni Access)",
        toolBWinner: false,
        verdict: "Tie (Parity)",
        verdictBadge: "Tie"
      },
      {
        metric: "Metered API Cost (per MTok)",
        iconName: "toll",
        toolAValue: "$3.00 in / $15.00 out",
        toolASubtitle: "Prompt cache read: $0.30 / MTok",
        toolAWinner: true,
        toolBValue: "$2.50 in / $10.00 out",
        toolBSubtitle: "Cached input: $1.25 / MTok",
        toolBWinner: false,
        verdict: "Claude on Cached Context (90% savings). GPT-4o cheaper on un-cached raw output.",
        verdictBadge: "ToolA"
      },
      {
        metric: "Free Tier Allowance",
        iconName: "card_giftcard",
        toolAValue: "Dynamic rate-limited tier",
        toolASubtitle: "Strict message turn throttle on web UI",
        toolAWinner: false,
        toolBValue: "Generous daily message quota",
        toolBSubtitle: "Automated fallbacks to mini models",
        toolBWinner: true,
        verdict: "GPT-4o (Higher free tier quota)",
        verdictBadge: "ToolB"
      },
      {
        metric: "Context Window & Output Depth",
        iconName: "dataset",
        toolAValue: "200k in / 64k out",
        toolASubtitle: "~150,000 words (500 pages) capacity",
        toolAWinner: true,
        toolBValue: "128k in / 16k out",
        toolBSubtitle: "~96,000 words capacity",
        toolBWinner: false,
        verdict: "Claude 3.7 Sonnet (1.5x deeper context & 4x larger single-turn code output)",
        verdictBadge: "ToolA"
      },
      {
        metric: "Coding & SWE-bench Refactoring",
        iconName: "code",
        toolAValue: "70.3% SWE-bench Verified",
        toolASubtitle: "Zero hallucinated imports across 50 repos",
        toolAWinner: true,
        toolBValue: "53.8% SWE-bench Verified",
        toolBSubtitle: "Fast single-file autocompletion",
        toolBWinner: false,
        verdict: "Claude 3.7 Sonnet (Highest benchmarked multi-file refactoring accuracy)",
        verdictBadge: "ToolA"
      },
      {
        metric: "Native Multimodal Dialogue",
        iconName: "mic",
        toolAValue: "Text, Code, Vision & PDF",
        toolASubtitle: "Requires external TTS/STT pipelines",
        toolAWinner: false,
        toolBValue: "Native Speech-to-Speech",
        toolBSubtitle: "Real-time emotional cadence (<300ms)",
        toolBWinner: true,
        verdict: "OpenAI GPT-4o (Superior real-time conversational voice)",
        verdictBadge: "ToolB"
      },
      {
        metric: "Data Privacy & Governance",
        iconName: "security",
        toolAValue: "Zero Data Retention Default",
        toolASubtitle: "Commercial API never trains on data",
        toolAWinner: true,
        toolBValue: "30-Day Retention Default",
        toolBSubtitle: "Opt-out available via enterprise agreements",
        toolBWinner: false,
        verdict: "Claude 3.7 Sonnet (Cleaner default enterprise data posture)",
        verdictBadge: "ToolA"
      }
    ]
  }
];

