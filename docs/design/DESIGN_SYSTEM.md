# SnapStack — Obsidian Precision Craft Design System

Derived directly from the **Google Stitch Project** [`projects/8555052820962903380`](https://stitch.withgoogle.com), tailored for **SnapStack** (*Tested AI Workflows & Tool Stacks in a Snap*). All 12 production screens are mapped to this project.

---

## 1. Design Philosophy & Aesthetic Core

* **Theme Name:** `Obsidian Precision Craft`
* **Vibe:** Modern developer-first hyper-utility (Linear, Raycast, Vercel). High information density, clinical typography, razor-sharp hairline boundaries, and disciplined dark-canvas contrast.
* **Canvas Substrate:** Built on an obsidian black floor (`#010102`), avoiding the harsh sterility of `#000000` while providing infinite depth across the viewport.
* **Tonal Elevation Ladder:** Dimensional hierarchy relies strictly on a 4-tier surface ladder and 1px hairlines instead of generic, diffuse drop shadows.
* **Controlled Chromatic Sparks:** Primary interactions leverage a targeted duo of **Electric Emerald (`#10b981`)** for verification and validation signals, paired with an **Indigo-Lavender accent (`#5e6ad2`)** for primary calls to action and active states.

---

## 2. Color Palette & Semantic Tokens

### A. The Dark Ground & Surface Elevation Ladder

| Token | Hex Value | Role & Usage |
| :--- | :--- | :--- |
| `canvas` | `#010102` | Ground plane for viewport, persistent sidebars, and base backdrops. |
| `surface-1` | `#0f1011` | Base container for bento cards, code facades, and content panels. |
| `surface-2` | `#141516` | Elevated nested tiles, table rows, and interactive card hover states. |
| `surface-3` | `#18191a` | Flyout drawers, context menus, and micro-dialogs. |
| `surface-4` | `#191a1b` | Active segmented tabs and elevated tooltips. |

### B. Hairlines (Structural 1px Boundaries)

| Token | Hex Value | Usage |
| :--- | :--- | :--- |
| `hairline` | `#23252a` | Default 1px boundary on resting cards, panels, and input borders. |
| `hairline-strong` | `#34343a` | Hovered state borders, active container divisions. |
| `hairline-subtle` | `#1b1c1e` | Internal card dividers, footer separators. |

### C. Ink Typography Hierarchy

| Token | Hex Value | Usage |
| :--- | :--- | :--- |
| `ink` | `#f7f8f8` | Primary headlines, active button labels, card titles. |
| `ink-muted` | `#d0d6e0` | Secondary body text, subheadings, descriptive summaries. |
| `ink-subtle` | `#8a8f98` | Tertiary metadata, step counters, ghost button labels. |
| `ink-tertiary` | `#62666d` | Input placeholders, disabled indicators, subtle timestamps. |

### D. Chromatic Accents & Taxonomy Signals

| Token | Hex Value | Meaning & Context |
| :--- | :--- | :--- |
| `brand-lavender` | `#5e6ad2` | Primary interactive trigger, active tab indicator, primary CTA. |
| `brand-hover` | `#828fff` | Hover state for primary buttons and active links. |
| `brand-focus` | `#5e69d1` | Pressed state and 1px active focus rings. |
| `status-emerald` | `#10b981` | **Verified Working** badge, $0/month free tier badge, uptime. |
| `status-blue` | `#3b82f6` | **No-Code** integration workflows (Make.com, Zapier). |
| `status-purple` | `#a855f7` | **Developer / API** tools, SDKs, programmatic pipelines. |
| `status-amber` | `#f59e0b` | **Community Review**, experimental models, canary alerts. |

---

## 3. Typography & Spacing Scale

### A. Font Families
* **Display & Headings:** `Geist` or `Inter` (`font-sans` with negative tracking `-0.04em` to `-0.015em`).
* **Reading & Body:** `Inter` (`font-sans` with neutral tracking).
* **Technical Telemetry & Code:** `JetBrains Mono` (`font-mono`).

### B. Typographic Scale

| Style | Font | Size | Weight | Line Height | Tracking |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `display-xl` | Geist | 72px / 4.5rem | 600 | 1.05 | -0.04em |
| `display-lg` | Geist | 52px / 3.25rem | 600 | 1.10 | -0.035em |
| `headline-lg` | Geist | 32px / 2.0rem | 600 | 1.20 | -0.025em |
| `headline-md` | Geist | 24px / 1.5rem | 500 | 1.25 | -0.02em |
| `headline-sm` | Geist | 18px / 1.125rem | 500 | 1.30 | -0.015em |
| `body-lg` | Inter | 16px / 1.0rem | 400 | 1.55 | -0.005em |
| `body-md` | Inter | 14px / 0.875rem | 400 | 1.50 | 0.0em |
| `body-sm` | Inter | 12px / 0.75rem | 400 | 1.45 | +0.005em |
| `label-mono` | JetBrains Mono | 12px / 0.75rem | 400 | 1.40 | 0.0em |
| `label-micro` | JetBrains Mono | 11px / 0.6875rem | 500 | 1.20 | +0.06em (UPPER) |
| `button` | Inter | 13px / 0.8125rem | 500 | 1.20 | -0.01em |

---

## 4. Shapes & Corner Radii

* **Cards & Bento Enclosures (`12px` / `rounded-xl`):** Standard for workflow cards, hero bento boxes, video facades.
* **Controls & Inputs (`8px` / `rounded-lg`):** Buttons, search bars, filter dropdowns, selects.
* **Badges & Category Pills (`9999px` / `rounded-full`):** Category chips, model tags, status indicators.
* **Micro Elements (`4px` / `rounded`):** Keybindings (`<kbd>`), code tag chips, step numbers.

---

## 5. Media & Video Containers (SnapStack Standard)

To preserve strict $0/month hosting and instant page loads, video embeds strictly use zero-hosting Lite-Embed Facades with precise aspect ratios:

* **Vertical 60s Shorts & Reels:**
  ```tsx
  <div className="relative aspect-[9/16] w-full max-w-[320px] rounded-xl overflow-hidden bg-surface-1 border border-hairline shadow-sm">
    {/* LiteYouTubeEmbed Facade */}
  </div>
  ```
* **Landscape Step-by-Step Tutorials:**
  ```tsx
  <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-surface-1 border border-hairline shadow-sm">
    {/* LiteYouTubeEmbed Facade */}
  </div>
  ```

---

## 6. Library Composition Protocol (No Reinventing the Wheel)

**Rule:** NEVER build bespoke, low-level UI controls or logic from scratch when proven libraries are available in the project stack:

| Need | Library / Primitive | Never Build From Scratch |
| :--- | :--- | :--- |
| Modal Dialogs & Drawers | `@radix-ui/react-dialog`, shadcn `Dialog`, `Sheet` | Do not write custom backdrop blur, body scroll locks, or focus traps. |
| Expandable SOPs & FAQs | `@radix-ui/react-accordion`, shadcn `Accordion` | Do not build manual height-measuring JS collapse logic. |
| Tabs & View Switchers | `@radix-ui/react-tabs`, shadcn `Tabs` | Do not hand-code ARIA tablist or active state indexing. |
| Filter Menus & Selects | `@radix-ui/react-dropdown-menu`, `@radix-ui/react-select` | Do not invent custom floating HTML popovers. |
| Toasts & Notifications | `sonner` | Do not build floating notification queues. |
| SVG Icons | `lucide-react` | Do not write inline raw SVG strings. |
| Micro-Animations | `framer-motion` | Do not write complex keyframe CSS transitions manually. |
| Video Streaming | YouTube Lite-Embed Facade | Do not load raw YouTube iframe embeds or host video files. |
| Database & Session | Supabase SSR (`@supabase/ssr`) | Do not build custom cookie/JWT token authentication brokers. |

