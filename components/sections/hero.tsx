"use client";

import Image from "next/image";
import Link from "next/link";
import { Play, Headphones, ArrowRight } from "lucide-react";
import type { PodcastEpisode } from "@/types";
import { cn, formatDuration } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface HeroProps {
  featured: PodcastEpisode;
  onPlay?: (episode: PodcastEpisode) => void;
}

export function Hero({ featured, onPlay }: HeroProps) {
  return (
    <section
      className="relative w-full min-h-[70vh] sm:min-h-[80vh] flex items-end overflow-hidden"
      aria-label="Featured content"
    >
      {/* Background image */}
      {featured.coverImage && (
        <Image
          src={featured.coverImage.url}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
          aria-hidden="true"
        />
      )}

      {/* Gradient overlay — bottom-heavy so text pops */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ck-black)] via-[var(--color-ck-black)]/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-ck-black)]/80 to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-16">
        <div className="max-w-2xl space-y-4">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 flex-wrap">
            <Badge
              variant="default"
              className="bg-[var(--color-ck-accent)]/20 text-[var(--color-ck-accent)] border-[var(--color-ck-accent)]/30"
            >
              <Headphones size={11} />
              Featured Podcast
            </Badge>
            {featured.category && (
              <Badge variant="category">{featured.category.title}</Badge>
            )}
            {featured.duration && (
              <span className="text-xs text-white/50">
                {formatDuration(featured.duration)}
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {featured.title}
          </h1>

          {/* Description */}
          {featured.description && (
            <p className="text-base sm:text-lg text-white/70 line-clamp-3 leading-relaxed">
              {featured.description}
            </p>
          )}

          {/* Actions */}
          <div className="flex items-center gap-3 flex-wrap pt-2">
            <Button
              variant="accent"
              size="lg"
              onClick={() => onPlay?.(featured)}
              className="gap-2"
              aria-label={`Play ${featured.title}`}
            >
              <Play size={18} fill="white" />
              Play Now
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href={`/podcasts/${featured.slug}`}>
                View Episode <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom fade to page background */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--color-ck-black)] to-transparent" />
    </section>
  );
}

/** Skeleton for hero — shown while data loads */
export function HeroSkeleton() {
  return (
    <div className="relative w-full min-h-[70vh] sm:min-h-[80vh] bg-[var(--color-ck-surface)] animate-pulse flex items-end">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 space-y-4">
        <div className="w-24 h-5 rounded-full bg-[var(--color-ck-surface-2)]" />
        <div className="w-2/3 h-10 rounded-xl bg-[var(--color-ck-surface-2)]" />
        <div className="w-1/2 h-5 rounded-lg bg-[var(--color-ck-surface-2)]" />
        <div className="flex gap-3 pt-2">
          <div className="w-32 h-12 rounded-xl bg-[var(--color-ck-surface-2)]" />
          <div className="w-32 h-12 rounded-xl bg-[var(--color-ck-surface-2)]" />
        </div>
      </div>
    </div>
  );
}
