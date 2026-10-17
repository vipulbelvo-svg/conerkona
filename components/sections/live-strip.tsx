"use client";

import Link from "next/link";
import { LiveBadge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

interface LiveStripProps {
  headline?: string;
  href?: string;
}

export function LiveStrip({
  headline = "Live updates available — click to follow",
  href = "/live",
}: LiveStripProps) {
  return (
    <div className="w-full bg-[var(--color-ck-live)]/10 border-y border-[var(--color-ck-live)]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href={href}
          className="flex items-center gap-3 py-2.5 group"
          aria-label="Go to live coverage"
        >
          <LiveBadge className="flex-shrink-0" />
          <p className="text-sm text-white/80 line-clamp-1 flex-1 group-hover:text-white transition-colors">
            {headline}
          </p>
          <ArrowRight
            size={14}
            className="flex-shrink-0 text-[var(--color-ck-live)] group-hover:translate-x-0.5 transition-transform"
          />
        </Link>
      </div>
    </div>
  );
}
