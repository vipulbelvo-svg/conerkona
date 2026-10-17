"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface YouTubeEmbedProps {
  videoId: string;
  title: string;
  className?: string;
}

/**
 * Lazy YouTube embed — shows thumbnail first, loads iframe only on click.
 * This avoids loading the YouTube script on every page load, protecting
 * Core Web Vitals and SEO performance.
 */
export function YouTubeEmbed({ videoId, title, className }: YouTubeEmbedProps) {
  const [activated, setActivated] = useState(false);
  const thumbnail = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
  const fallbackThumbnail = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  if (activated) {
    return (
      <div
        className={cn(
          "relative video-horizontal w-full overflow-hidden rounded-xl bg-black",
          className
        )}
      >
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          className="absolute inset-0 w-full h-full border-0"
        />
      </div>
    );
  }

  return (
    <button
      onClick={() => setActivated(true)}
      className={cn(
        "relative video-horizontal w-full overflow-hidden rounded-xl group cursor-pointer",
        "bg-[var(--color-ck-surface)]",
        className
      )}
      aria-label={`Play YouTube video: ${title}`}
    >
      <Image
        src={thumbnail}
        alt={title}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-300"
        sizes="(max-width: 768px) 100vw, 768px"
        onError={(e) => {
          // Fallback to hqdefault if maxresdefault not available
          (e.target as HTMLImageElement).src = fallbackThumbnail;
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />

      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-[#FF0000] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-200">
          <Play size={28} fill="white" className="text-white ml-1.5" />
        </div>
      </div>

      {/* Title overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
        <p className="text-sm font-medium text-white text-left line-clamp-2">
          {title}
        </p>
      </div>
    </button>
  );
}
