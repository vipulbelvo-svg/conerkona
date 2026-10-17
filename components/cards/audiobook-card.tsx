import Image from "next/image";
import Link from "next/link";
import { BookOpen, Clock, Lock } from "lucide-react";
import type { Audiobook } from "@/types";
import { cn, formatDuration } from "@/lib/utils";
import { PremiumBadge } from "@/components/ui/badge";

interface AudiobookCardProps {
  audiobook: Audiobook;
  variant?: "default" | "compact";
  className?: string;
}

export function AudiobookCard({
  audiobook,
  variant = "default",
  className,
}: AudiobookCardProps) {
  const href = `/audiobooks/${audiobook.slug}`;

  return (
    <article
      className={cn(
        "group rounded-2xl overflow-hidden",
        "bg-[var(--color-ck-surface)] border border-[var(--color-ck-border)]",
        "transition-all duration-300 hover:border-white/10 hover:shadow-[var(--shadow-card)] hover:-translate-y-0.5",
        variant === "compact" && "flex gap-3 p-3",
        className
      )}
    >
      {/* Cover */}
      <Link href={href}>
        <div
          className={cn(
            "relative overflow-hidden",
            variant === "compact"
              ? "w-16 h-16 rounded-lg flex-shrink-0"
              : "aspect-square w-full"
          )}
        >
          {audiobook.coverImage ? (
            <Image
              src={audiobook.coverImage.url}
              alt={audiobook.coverImage.alt ?? audiobook.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes={
                variant === "compact"
                  ? "64px"
                  : "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              }
            />
          ) : (
            <div className="w-full h-full bg-[var(--color-ck-surface-2)] flex items-center justify-center">
              <BookOpen
                size={variant === "compact" ? 20 : 36}
                className="text-white/20"
              />
            </div>
          )}

          {audiobook.isPremium && variant !== "compact" && (
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
              <PremiumBadge />
            </div>
          )}

          {audiobook.isPremium && variant === "compact" && (
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center rounded-lg">
              <Lock size={14} className="text-[var(--color-ck-premium)]" />
            </div>
          )}
        </div>
      </Link>

      {/* Info */}
      <div className={cn("flex flex-col gap-1", variant !== "compact" && "p-3")}>
        <Link href={href}>
          <h3
            className={cn(
              "font-semibold text-white line-clamp-2 leading-snug",
              "hover:text-[var(--color-ck-accent)] transition-colors",
              variant === "compact" ? "text-sm" : "text-base"
            )}
          >
            {audiobook.title}
          </h3>
        </Link>

        {audiobook.author && (
          <p className="text-xs text-white/40">{audiobook.author.name}</p>
        )}

        <div className="flex items-center gap-2 mt-auto">
          {audiobook.totalChapters && (
            <span className="text-xs text-white/30">
              {audiobook.totalChapters} chapters
            </span>
          )}
          {audiobook.totalDuration && (
            <span className="flex items-center gap-1 text-xs text-white/30">
              <Clock size={10} />
              {formatDuration(audiobook.totalDuration)}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
