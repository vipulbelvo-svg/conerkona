import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  const allItems = [{ label: "Home", href: "/" }, ...items];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href && {
        item: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://cornerkona.com"}${item.href}`,
      }),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <nav
        aria-label="Breadcrumb"
        className={cn("flex items-center gap-1 text-xs text-white/40", className)}
      >
        {allItems.map((item, index) => {
          const isLast = index === allItems.length - 1;
          return (
            <React.Fragment key={index}>
              {index === 0 ? (
                item.href ? (
                  <Link
                    href={item.href}
                    className="hover:text-white/70 transition-colors"
                    aria-label="Home"
                  >
                    <Home size={12} />
                  </Link>
                ) : (
                  <Home size={12} />
                )
              ) : item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="hover:text-white/70 transition-colors truncate max-w-[150px]"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className={cn(
                    "truncate max-w-[200px]",
                    isLast && "text-white/70"
                  )}
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </span>
              )}
              {!isLast && (
                <ChevronRight size={12} className="flex-shrink-0" />
              )}
            </React.Fragment>
          );
        })}
      </nav>
    </>
  );
}
