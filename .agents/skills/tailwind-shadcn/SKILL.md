---
name: tailwind-shadcn
description: >-
  Component composition, accessible UI patterns, and styling standards using Tailwind CSS v4
  and shadcn/ui primitives. Enforces Radix UI accessibility, video container aspect ratios,
  responsive layouts, and interactive microcopy.
---

# Tailwind CSS v4 & shadcn/ui Component Skill

Guides frontend development using Tailwind CSS v4 and shadcn/ui (Radix UI primitives). Ensures consistent, accessible, and high-performance components across SnapStack.

---

## 1. shadcn/ui Component Composition

1. **Leverage Established Primitives:**
   - Always compose features using existing shadcn primitives (`Button`, `Dialog`, `Tabs`, `Badge`, `Accordion`, `Sheet`, `DropdownMenu`, `Card`).
   - Do NOT invent custom modal, tooltip, or dropdown implementations when Radix primitives already provide keyboard trap, escape listener, and ARIA attributes out of the box.

2. **Component Customization Pattern:**
   - Keep components unstyled in core logic and style via `className` with `cn()` (`clsx` + `tailwind-merge`):
     ```tsx
     import { cn } from '@/lib/utils';

     interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
       featured?: boolean;
     }

     export function RecipeCard({ className, featured, ...props }: CardProps) {
       return (
         <div
           className={cn(
             "rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5 transition-all hover:shadow-md",
             featured && "border-emerald-500/50 ring-1 ring-emerald-500/20",
             className
           )}
           {...props}
         />
       );
     }
     ```

---

## 2. Video Containers & Aspect Ratios (SnapStack Standard)

SnapStack embeds 100% zero-hosting YouTube videos using Lite-Embed Facades. Always apply strict aspect ratios:

### Vertical Shorts & Reels (`aspect-[9/16]`):
```tsx
<div className="relative aspect-[9/16] w-full max-w-[320px] overflow-hidden rounded-2xl bg-neutral-950 border border-neutral-800 shadow-lg">
  <LiteYouTubeEmbed
    id={shortId}
    title={title}
    poster="maxresdefault"
    aspectHeight={16}
    aspectWidth={9}
  />
</div>
```

### Landscape Tutorials & Full Demos (`aspect-[16/9]`):
```tsx
<div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-neutral-950 border border-neutral-800 shadow-lg">
  <LiteYouTubeEmbed
    id={tutorialId}
    title={title}
    poster="maxresdefault"
    aspectHeight={9}
    aspectWidth={16}
  />
</div>
```

---

## 3. Responsive Breakpoints & Mobile Touch Targets

- **Mobile Touch Targets:** All clickable interactive elements (buttons, tag chips, bookmark icons) must have a hit area of at least `44x44px` on mobile (`min-h-[44px] min-w-[44px]`).
- **Filter Drawers:** On mobile screens (`< md`), display filters inside a slide-out `Sheet` (bottom or side drawer). On desktop (`>= md`), render them in a sticky sidebar.
- **Horizontal Scrolling Filters:** Use `flex overflow-x-auto no-scrollbar space-x-2 py-2` for quick category filters on phones.

---

## 4. Toast Notifications & Micro-Interactions

- Use **Sonner** (`sonner`) for non-intrusive feedback when users copy prompts, bookmark items, or export blueprints:
  ```tsx
  import { toast } from 'sonner';

  function handleCopyPrompt(promptText: string) {
    navigator.clipboard.writeText(promptText);
    toast.success('System Prompt copied to clipboard!', {
      description: 'Tested and verified for Nov 2026 models.',
    });
  }
  ```
- Use smooth hover feedback: `hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors duration-150`.

