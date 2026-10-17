import Image from "next/image";
import Link from "next/link";
import { Clock } from "lucide-react";
import type { Article } from "@/types";
import { cn } from "@/lib/utils";

interface ArticleCardProps {
  article: Article;
  variant?: "default" | "featured" | "compact";
  className?: string;
}

export function ArticleCard({
  article,
  variant = "default",
  className,
}: ArticleCardProps) {
  const href =
    article.language === "en"
      ? `/en/articles/${article.category?.slug}/${article.slug}`
      : `/articles/${article.category?.slug}/${article.slug}`;

  if (variant === "compact") {
    return (
      <div
        className={cn(
          "flex gap-3 group",
          className
        )}
      >
        {article.coverImage && (
          <div className="relative w-20 h-16 rounded-lg overflow-hidden flex-shrink-0">
            <Image
              src={article.coverImage.url}
              alt={article.coverImage.alt ?? article.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="80px"
            />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <Link href={href}>
            <h3 className="text-sm font-medium text-white line-clamp-2 hover:text-[var(--color-ck-accent)] transition-colors leading-snug">
              {article.title}
            </h3>
          </Link>
          {article.readingTime && (
            <p className="flex items-center gap-1 text-xs text-white/40 mt-1">
              <Clock size={11} />
              {article.readingTime} min read
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <article
      className={cn(
        "group rounded-2xl overflow-hidden",
        "bg-[var(--color-ck-surface)] border border-[var(--color-ck-border)]",
        "transition-all duration-300 hover:border-white/10 hover:shadow-[var(--shadow-card)] hover:-translate-y-0.5",
        variant === "featured" && "md:flex md:flex-row",
        className
      )}
    >
      {/* Cover */}
      {article.coverImage && (
        <div
          className={cn(
            "relative overflow-hidden",
            variant === "featured"
              ? "md:w-56 md:flex-shrink-0 aspect-video md:aspect-auto"
              : "aspect-video"
          )}
        >
          <Image
            src={article.coverImage.url}
            alt={article.coverImage.alt ?? article.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes={
              variant === "featured"
                ? "(max-width: 768px) 100vw, 224px"
                : "(max-width: 640px) 100vw, 50vw"
            }
          />
          {/* Category color strip */}
          {article.category?.accentColor && (
            <div
              className="absolute top-0 left-0 right-0 h-1"
              style={{ backgroundColor: article.category.accentColor }}
            />
          )}
        </div>
      )}

      {/* Content */}
      <div className="p-4 flex flex-col gap-2">
        {article.category && (
          <span
            className="text-[10px] font-semibold uppercase tracking-wider"
            style={{ color: article.category.accentColor ?? "var(--color-ck-accent)" }}
          >
            {article.category.title}
          </span>
        )}

        <Link href={href}>
          <h3 className="font-semibold text-white leading-snug line-clamp-2 hover:text-[var(--color-ck-accent)] transition-colors">
            {article.title}
          </h3>
        </Link>

        {article.excerpt && variant !== "compact" && (
          <p className="text-sm text-white/50 line-clamp-2 leading-relaxed">
            {article.excerpt}
          </p>
        )}

        <div className="flex items-center gap-3 mt-auto">
          {article.author && (
            <span className="text-xs text-white/40">{article.author.name}</span>
          )}
          {article.readingTime && (
            <span className="flex items-center gap-1 text-xs text-white/30">
              <Clock size={10} />
              {article.readingTime} min
            </span>
          )}
          {article.publishedAt && (
            <span className="text-xs text-white/30 ml-auto">
              {new Date(article.publishedAt).toLocaleDateString(
                article.language === "en" ? "en-IN" : "hi-IN"
              )}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
