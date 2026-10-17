import Image from "next/image";
import Link from "next/link";
import { Play, Clock } from "lucide-react";
import type { PodcastEpisode } from "@/types";
import { cn, formatDuration } from "@/lib/utils";
import { PremiumBadge } from "@/components/ui/badge";

interface PodcastCardProps {
  episode: PodcastEpisode;
  variant?: "default" | "featured" | "compact";
  className?: string;
  onPlay?: (episode: PodcastEpisode) => void;
}

export function PodcastCard({
  episode,
  variant = "default",
  className,
  onPlay,
}: PodcastCardProps) {
  const href = `/podcasts/${episode.slug}`;

  if (variant === "compact") {
    return (
      <div
        className={cn(
          "flex items-center gap-3 p-3 rounded-xl",
          "bg-[var(--color-ck-surface)] hover:bg-[var(--color-ck-surface-2)]",
          "border border-[var(--color-ck-border)] transition-all duration-200",
          "group cursor-pointer",
          className
        )}
      >
        {/* Thumbnail */}
        <div className="relative w-14 h-14 rounded-lg overflow-hidden flex-shrink-0">
          {episode.coverImage ? (
            <Image
              src={episode.coverImage.url}
              alt={episode.coverImage.alt ?? episode.title}
              fill
              className="object-cover"
              sizes="56px"
            />
          ) : (
            <div className="w-full h-full bg-[var(--color-ck-surface-2)] flex items-center justify-center">
              <Play size={16} className="text-white/30" />
            </div>
          )}
          <button
            onClick={() => onPlay?.(episode)}
            className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label={`Play ${episode.title}`}
          >
            <Play size={18} fill="white" className="text-white" />
          </button>
        </div>

        <div className="flex-1 min-w-0">
          <Link href={href}>
            <h3 className="text-sm font-medium text-white line-clamp-2 hover:text-[var(--color-ck-accent)] transition-colors">
              {episode.title}
            </h3>
          </Link>
          {episode.duration && (
            <p className="flex items-center gap-1 text-xs text-white/40 mt-1">
              <Clock size={11} />
              {formatDuration(episode.duration)}
            </p>
          )}
        </div>

        {episode.isPremium && <PremiumBadge className="flex-shrink-0" />}
      </div>
    );
  }

  return (
    <article
      className={cn(
        "group relative rounded-2xl overflow-hidden",
        "bg-[var(--color-ck-surface)] border border-[var(--color-ck-border)]",
        "transition-all duration-300 hover:border-[var(--color-ck-border)]/60",
        "hover:shadow-[var(--shadow-card)] hover:-translate-y-0.5",
        variant === "featured" && "md:flex md:gap-0",
        className
      )}
    >
      {/* Cover image */}
      <div
        className={cn(
          "relative overflow-hidden",
          variant === "featured"
            ? "md:w-64 md:flex-shrink-0 aspect-square md:aspect-auto"
            : "aspect-video"
        )}
      >
        {episode.coverImage ? (
          <Image
            src={episode.coverImage.url}
            alt={episode.coverImage.alt ?? episode.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes={
              variant === "featured"
                ? "(max-width: 768px) 100vw, 256px"
                : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            }
          />
        ) : (
          <div className="w-full h-full bg-[var(--color-ck-surface-2)] flex items-center justify-center">
            <Play size={32} className="text-white/20" />
          </div>
        )}

        {/* Play button overlay */}
        <button
          onClick={() => onPlay?.(episode)}
          className={cn(
            "absolute inset-0 flex items-center justify-center",
            "bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity",
            "focus-visible:opacity-100"
          )}
          aria-label={`Play ${episode.title}`}
        >
          <span className="w-12 h-12 rounded-full bg-[var(--color-ck-accent)] flex items-center justify-center shadow-lg">
            <Play size={20} fill="white" className="text-white ml-0.5" />
          </span>
        </button>

        {/* Badges */}
        <div className="absolute top-2 left-2 flex items-center gap-1.5">
          {episode.isPremium && <PremiumBadge />}
        </div>

        {episode.duration && (
          <div className="absolute bottom-2 right-2 flex items-center gap-1 px-2 py-0.5 rounded bg-black/60 text-xs text-white">
            <Clock size={10} />
            {formatDuration(episode.duration)}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-2">
        {episode.category && (
          <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--color-ck-accent)]">
            {episode.category.title}
          </span>
        )}
        <Link href={href}>
          <h3 className="font-semibold text-white leading-snug line-clamp-2 hover:text-[var(--color-ck-accent)] transition-colors">
            {episode.title}
          </h3>
        </Link>
        {episode.description && (
          <p className="text-xs text-white/50 line-clamp-2 leading-relaxed">
            {episode.description}
          </p>
        )}
        {episode.publishedAt && (
          <p className="text-[10px] text-white/30 mt-auto">
            {new Date(episode.publishedAt).toLocaleDateString("hi-IN")}
          </p>
        )}
      </div>
    </article>
  );
}
