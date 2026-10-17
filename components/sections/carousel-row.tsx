"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface CarouselRowProps {
  title: string;
  seeAllHref?: string;
  accentColor?: string;
  children: React.ReactNode;
  className?: string;
}

export function CarouselRow({
  title,
  seeAllHref,
  accentColor,
  children,
  className,
}: CarouselRowProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.75;
    scrollRef.current.scrollBy({
      left: dir === "right" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <section className={cn("space-y-4", className)}>
      {/* Row header */}
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <h2
          className="text-lg sm:text-xl font-bold text-white flex items-center gap-2"
        >
          {accentColor && (
            <span
              className="w-1 h-5 rounded-full flex-shrink-0"
              style={{ backgroundColor: accentColor }}
            />
          )}
          {title}
        </h2>
        <div className="flex items-center gap-2">
          {/* Desktop arrows */}
          <div className="hidden sm:flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scroll("left")}
              aria-label="Scroll left"
              className="h-8 w-8"
            >
              <ChevronLeft size={16} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scroll("right")}
              aria-label="Scroll right"
              className="h-8 w-8"
            >
              <ChevronRight size={16} />
            </Button>
          </div>
          {seeAllHref && (
            <Link
              href={seeAllHref}
              className="flex items-center gap-1 text-xs font-medium text-[var(--color-ck-accent)] hover:underline"
            >
              See all <ArrowRight size={12} />
            </Link>
          )}
        </div>
      </div>

      {/* Scrollable track */}
      <div
        ref={scrollRef}
        className={cn(
          "flex gap-3 overflow-x-auto carousel-scroll",
          "px-4 sm:px-6 lg:px-8",
          "pb-2" // space for shadow
        )}
        role="list"
        aria-label={title}
      >
        {React.Children.map(children, (child, i) => (
          <div
            key={i}
            className="carousel-item flex-shrink-0"
            role="listitem"
          >
            {child}
          </div>
        ))}
      </div>
    </section>
  );
}
