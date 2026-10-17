import * as React from "react";
import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "premium" | "live" | "new" | "category";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const variants: Record<BadgeVariant, string> = {
  default:
    "bg-[var(--color-ck-surface-2)] text-[var(--color-ck-white)] border border-[var(--color-ck-border)]",
  premium:
    "bg-[var(--color-ck-premium)] text-black font-semibold shadow-[var(--shadow-premium)]",
  live: "bg-[var(--color-ck-live)] text-white font-semibold shadow-[var(--shadow-live)]",
  new: "bg-[var(--color-ck-accent)] text-white",
  category: "bg-[var(--color-ck-surface-2)] text-[var(--color-ck-accent)] border border-[var(--color-ck-accent)]/30",
};

export function Badge({ variant = "default", className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 px-2 py-0.5 text-xs rounded-full",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}

/** Pulsing LIVE dot badge for the header */
export function LiveBadge({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-bold rounded-full",
        "bg-[var(--color-ck-live)]/15 text-[var(--color-ck-live)] border border-[var(--color-ck-live)]/40",
        className
      )}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-ck-live)] animate-live-pulse" />
      LIVE
    </span>
  );
}

/** Lock icon badge for premium content */
export function PremiumBadge({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 px-2 py-0.5 text-xs font-semibold rounded-full",
        "bg-[var(--color-ck-premium)] text-black",
        className
      )}
    >
      ✦ PREMIUM
    </span>
  );
}
