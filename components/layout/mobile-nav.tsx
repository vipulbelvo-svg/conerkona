"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Headphones, Play, Zap, User } from "lucide-react";
import { cn, isActivePath } from "@/lib/utils";

const BOTTOM_NAV = [
  { label: "Home", href: "/", icon: Home },
  { label: "Podcasts", href: "/podcasts", icon: Headphones },
  { label: "Videos", href: "/short-videos", icon: Play },
  { label: "Antar", href: "/antaryatra", icon: Zap, isPremium: true },
  { label: "Profile", href: "/profile", icon: User },
] as const;

export function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-[var(--z-header)]"
      aria-label="Mobile bottom navigation"
    >
      {/* Gradient fade above nav */}
      <div className="h-8 bg-gradient-to-t from-[var(--color-ck-black)] to-transparent pointer-events-none" />

      <div className="bg-[var(--color-ck-surface)]/95 backdrop-blur-md border-t border-[var(--color-ck-border)]">
        <div className="flex items-center justify-around px-2 pb-safe">
          {BOTTOM_NAV.map(({ label, href, icon: Icon, isPremium }) => {
            const active = isActivePath(pathname, href);
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "flex flex-col items-center gap-1 px-3 py-3 min-w-[60px]",
                  "transition-colors duration-200",
                  active
                    ? isPremium
                      ? "text-[var(--color-ck-premium)]"
                      : "text-[var(--color-ck-accent)]"
                    : "text-white/50 hover:text-white/80"
                )}
                aria-current={active ? "page" : undefined}
              >
                <Icon
                  size={22}
                  className={cn(
                    "transition-transform duration-200",
                    active && "scale-110"
                  )}
                />
                <span
                  className={cn(
                    "text-[10px] font-medium",
                    isPremium && "text-[var(--color-ck-premium)]"
                  )}
                >
                  {label}
                </span>
                {active && (
                  <span
                    className={cn(
                      "absolute bottom-0 w-1 h-1 rounded-full",
                      isPremium
                        ? "bg-[var(--color-ck-premium)]"
                        : "bg-[var(--color-ck-accent)]"
                    )}
                  />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
