import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

type ButtonVariant =
  | "default"
  | "accent"
  | "premium"
  | "ghost"
  | "outline"
  | "live";

type ButtonSize = "sm" | "md" | "lg" | "icon";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  default:
    "bg-[var(--color-ck-surface-2)] text-[var(--color-ck-white)] hover:bg-[var(--color-ck-border)]",
  accent:
    "bg-[var(--color-ck-accent)] text-white hover:bg-[var(--color-ck-accent-hover)] shadow-[var(--shadow-glow)]",
  premium:
    "bg-[var(--color-ck-premium)] text-black font-semibold hover:bg-[var(--color-ck-premium-glow)] animate-premium-glow",
  ghost:
    "bg-transparent text-[var(--color-ck-white)] hover:bg-[var(--color-ck-surface)]",
  outline:
    "border border-[var(--color-ck-border)] text-[var(--color-ck-white)] hover:bg-[var(--color-ck-surface)]",
  live: "bg-[var(--color-ck-live)] text-white font-semibold shadow-[var(--shadow-live)]",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-8 px-3 text-sm rounded-md",
  md: "h-10 px-5 text-sm rounded-lg",
  lg: "h-12 px-8 text-base rounded-xl",
  icon: "h-10 w-10 rounded-full",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "default",
      size = "md",
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 font-medium",
          "transition-all duration-200 cursor-pointer",
          "focus-visible:outline-2 focus-visible:outline-[var(--color-ck-accent)] focus-visible:outline-offset-2",
          "disabled:opacity-50 disabled:pointer-events-none",
          "select-none",
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
