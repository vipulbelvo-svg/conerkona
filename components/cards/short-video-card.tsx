"use client";

import Image from "next/image";
import Link from "next/link";
import { Play, Clock } from "lucide-react";
import type { ShortVideo } from "@/types";
import { cn, formatDuration } from "@/lib/utils";

interface ShortVideoCardProps {
  video: ShortVideo;
  className?: string;
  onPlay?: (video: ShortVideo) => void;
}

export function ShortVideoCard({ video, className, onPlay }: ShortVideoCardProps) {
  const href = `/short-videos/${video.slug}`;

  return (
    <article
      className={cn(
        "group relative rounded-2xl overflow-hidden cursor-pointer",
        "bg-[var(--color-ck-surface)] border border-[var(--color-ck-border)]",
        "transition-all duration-300 hover:border-white/10 hover:-translate-y-0.5",
        "hover:shadow-[var(--shadow-card)]",
        className
      )}
      onClick={() => onPlay?.(video)}
    >
      {/* Vertical thumbnail — 9:16 */}
      <div className="relative video-vertical w-full overflow-hidden">
        {video.thumbnail ? (
          <Image
            src={video.thumbnail.url}
            alt={video.thumbnail.alt ?? video.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-ck-surface-2)] to-[var(--color-ck-black)] flex items-center justify-center">
            <Play size={32} className="text-white/20" />
          </div>
        )}

        {/* Play overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="w-14 h-14 rounded-full bg-[var(--color-ck-accent)]/90 flex items-center justify-center shadow-lg">
            <Play size={24} fill="white" className="text-white ml-1" />
          </span>
        </div>

        {/* Duration */}
        {video.duration && (
          <div className="absolute bottom-2 right-2 flex items-center gap-1 px-2 py-0.5 rounded bg-black/70 text-xs text-white">
            <Clock size={10} />
            {formatDuration(video.duration)}
          </div>
        )}

        {/* Category strip */}
        {video.category?.accentColor && (
          <div
            className="absolute top-0 left-0 right-0 h-1"
            style={{ backgroundColor: video.category.accentColor }}
          />
        )}
      </div>

      {/* Info */}
      <div className="p-3">
        <Link href={href} onClick={(e) => e.stopPropagation()}>
          <h3 className="text-sm font-medium text-white line-clamp-2 leading-snug hover:text-[var(--color-ck-accent)] transition-colors">
            {video.title}
          </h3>
        </Link>
        {video.category && (
          <span
            className="text-[10px] font-semibold uppercase tracking-wider mt-1 block"
            style={{ color: video.category.accentColor ?? "var(--color-ck-accent)" }}
          >
            {video.category.title}
          </span>
        )}
      </div>
    </article>
  );
}
