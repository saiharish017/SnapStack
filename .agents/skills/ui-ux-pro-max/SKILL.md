---
name: ui-ux-pro-max
description: >-
  Design system, UI styles, curated color palettes, typography pairings, responsive layouts,
  and WCAG accessibility guidelines. Use when designing web components, pages, design tokens,
  and micro-interactions to create polished, high-converting interfaces without generic AI aesthetic.
---

# UI/UX Pro Max Design Skill

Injects deep design context and craftsmanship into frontend development. Solves the generic "AI UI look" by providing structured design styles, palettes, typography hierarchies, and strict accessibility standards.

---

## 1. Core Visual Principles

1. **Avoid Generic AI Layouts:**
   - Eliminate centered, low-contrast gradient blobs, arbitrary border radiuses, and floating card spam.
   - Use intentional hierarchy: High-contrast typography, strict spacing scales (4px / 8px grid), and subtle border borders (`border-neutral-200 dark:border-neutral-800`).

2. **Jobs-to-be-Done Visual Hierarchy:**
   - Prioritize the primary action (e.g., "Copy Tested Prompt", "Run in Make", "Watch 60s Demo").
   - Secondary actions remain subtle (ghost buttons, muted icons).

3. **Responsive & Mobile-First:**
   - Touch targets must be at least `44x44px` on mobile screens.
   - Horizontal scroll containers for chip filters with hidden scrollbars (`scrollbar-none`).

---

## 2. Curated UI Styles

| Style | Characteristics | Best Used For |
| :--- | :--- | :--- |
| **Bento Grid** | Asymmetrical multi-card grid, rounded corners (`rounded-2xl`), subtle hover elevation, high content density. | Tool feature showcases, workflow anatomy, directory homepages. |
| **Linear / Minimalist** | Dark/light neutral zinc, 1px subtle borders, monochrome icons, monospace metadata badges. | Developer tools, technical prompts, API integrations. |
| **Modern SaaS** | Crisp typography, generous whitespace, emerald/blue accent pills, soft shadow elevation. | Landing pages, marketing headers, pricing comparisons. |

---

## 3. SnapStack Color Palettes & Semantic Tokens

```css
/* Light & Dark Mode Tokens */
--bg-primary: #ffffff;             /* Dark: #09090b (Zinc 950) */
--bg-secondary: #f4f4f5;           /* Dark: #18181b (Zinc 900) */
--border-subtle: #e4e4e7;          /* Dark: #27272a (Zinc 800) */
--text-primary: #09090b;           /* Dark: #fafafa (Zinc 50) */
--text-muted: #71717a;             /* Dark: #a1a1aa (Zinc 400) */

/* Accent Colors */
--accent-workflow: #10b981;        /* Emerald 500 - Automation & Workflows */
--accent-tool: #3b82f6;            /* Blue 500 - AI Tools & Platforms */
--accent-free: #f59e0b;            /* Amber 500 - $0/Free Badge Callouts */
--accent-destructive: #ef4444;     /* Red 500 - Banned/Deprecated/Warning */
```

---

## 4. Typography Hierarchy

* **Primary Font:** Inter, Plus Jakarta Sans, or Geist (`font-sans`).
* **Display / Hero Font:** Cal Sans or Geist SemiBold (`tracking-tight font-semibold`).
* **Code / Prompt / Variable Font:** JetBrains Mono or Geist Mono (`font-mono text-sm`).

### Font Scale:
* **Page Title (H1):** `text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50`
* **Section Heading (H2):** `text-xl md:text-2xl font-semibold tracking-tight`
* **Card Title (H3):** `text-base md:text-lg font-medium`
* **Body Text:** `text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed`
* **Microcopy & Tags:** `text-xs font-medium tracking-wide uppercase`

---

## 5. Media & Video Aspect Ratios (SnapStack Standard)

* **Vertical YouTube Shorts / Reels:**
  ```tsx
  <div className="relative aspect-[9/16] w-full max-w-[320px] rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm">
    {/* Lite YouTube Facade */}
  </div>
  ```
* **Landscape Tutorials & Deep Dives:**
  ```tsx
  <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm">
    {/* Lite YouTube Facade */}
  </div>
  ```

---

## 6. Accessibility & WCAG Standards

- **Contrast Ratios:** Minimum `4.5:1` for normal text; `3:1` for large text (`>18pt`) and UI components.
- **Focus Rings:** Visible, high-contrast rings on all interactive elements: `focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-900 dark:focus-visible:ring-neutral-100`.
- **Screen Reader Support:** All icon-only buttons (`Copy`, `Bookmark`, `Close`) must include `aria-label` or `<span className="sr-only">Label</span>`.
- **Keyboard Navigation:** Modals, sheets, and popovers must trap focus and close on `Escape`.

