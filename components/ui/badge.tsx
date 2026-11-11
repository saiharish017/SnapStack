import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium tracking-wide transition-colors focus:outline-none focus:ring-1 focus:ring-brand-lavender",
  {
    variants: {
      variant: {
        default:
          "border-hairline bg-surface-2 text-ink shadow-xs",
        secondary:
          "border-hairline-subtle bg-surface-1 text-ink-muted",
        outline:
          "border-hairline text-ink-subtle bg-transparent",
        verified:
          "border-status-emerald/30 bg-status-emerald/10 text-status-emerald",
        nocode:
          "border-status-blue/30 bg-status-blue/10 text-status-blue",
        developer:
          "border-status-purple/30 bg-status-purple/10 text-status-purple",
        review:
          "border-status-amber/30 bg-status-amber/10 text-status-amber",
        free:
          "border-status-emerald/40 bg-status-emerald/15 text-status-emerald font-semibold",
        brand:
          "border-brand-lavender/30 bg-brand-lavender/10 text-brand-lavender",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
