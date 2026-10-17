"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Search,
  Bell,
  User,
  Menu,
  X,
  Headphones,
  BookOpen,
  Play,
  Zap,
} from "lucide-react";
import { cn, isActivePath } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LiveBadge } from "@/components/ui/badge";

const NAV_ITEMS = [
  { label: "Podcasts", href: "/podcasts", icon: Headphones },
  { label: "Audiobooks", href: "/audiobooks", icon: BookOpen },
  { label: "Short Videos", href: "/short-videos", icon: Play },
] as const;

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isEnglish = pathname.startsWith("/en");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-[var(--z-header)]",
          "transition-all duration-300",
          isScrolled
            ? "bg-[var(--color-ck-black)]/95 backdrop-blur-md shadow-lg py-2"
            : "bg-transparent py-4"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">

            {/* Logo */}
            <Link
              href="/"
              className="flex-shrink-0 focus-visible:outline-[var(--color-ck-accent)]"
              aria-label="Corner Kona — Home"
            >
              <div
                className={cn(
                  "font-bold text-white tracking-tight transition-all duration-300",
                  isScrolled ? "text-xl" : "text-2xl"
                )}
              >
                <span className="text-[var(--color-ck-accent)]">Corner</span>
                <span className="text-white"> Kona</span>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav
              className="hidden md:flex items-center gap-1"
              aria-label="Main navigation"
            >
              {NAV_ITEMS.map(({ label, href, icon: Icon }) => (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    "flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-lg",
                    "transition-colors duration-200",
                    isActivePath(pathname, href)
                      ? "bg-[var(--color-ck-surface)] text-white"
                      : "text-white/70 hover:text-white hover:bg-[var(--color-ck-surface)]"
                  )}
                >
                  <Icon size={15} />
                  {label}
                </Link>
              ))}

              {/* Antaryatra — highlighted CTA */}
              <Link
                href="/antaryatra"
                className={cn(
                  "flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-lg",
                  "bg-[var(--color-ck-premium)]/15 text-[var(--color-ck-premium)]",
                  "border border-[var(--color-ck-premium)]/30",
                  "hover:bg-[var(--color-ck-premium)]/25 transition-all duration-200",
                  "animate-premium-glow",
                  isActivePath(pathname, "/antaryatra") &&
                    "bg-[var(--color-ck-premium)]/25"
                )}
              >
                <Zap size={14} />
                Antar Yatra
                <span className="text-[10px] bg-[var(--color-ck-premium)] text-black px-1.5 py-0.5 rounded-full font-bold">
                  PREMIUM
                </span>
              </Link>

              {/* English toggle */}
              <Link
                href={isEnglish ? "/" : "/en"}
                className={cn(
                  "px-3 py-1.5 text-sm font-semibold rounded-full border transition-all duration-200",
                  isEnglish
                    ? "bg-[var(--color-english-accent)] text-white border-[var(--color-english-accent)]"
                    : "border-[var(--color-ck-border)] text-white/60 hover:text-white hover:border-white/40"
                )}
                aria-label={isEnglish ? "Switch to Hindi" : "Switch to English"}
              >
                EN
              </Link>

              {/* LIVE indicator */}
              <Link href="/live" aria-label="Live content">
                <LiveBadge />
              </Link>
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                aria-label="Search"
                className="hidden sm:flex"
              >
                <Search size={18} />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                aria-label="Notifications"
                className="relative hidden sm:flex"
              >
                <Bell size={18} />
                {/* Notification dot — shown when there are unread notifications */}
                <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-[var(--color-ck-accent)]" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                asChild
                className="hidden sm:flex"
                aria-label="Profile"
              >
                <Link href="/login">
                  <User size={18} />
                </Link>
              </Button>

              {/* Antaryatra subscribe CTA — desktop */}
              <Button
                variant="premium"
                size="sm"
                asChild
                className="hidden lg:flex"
              >
                <Link href="/antaryatra/subscribe">Subscribe</Link>
              </Button>

              {/* Mobile menu toggle */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-[var(--z-modal)] md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Panel */}
          <nav className="absolute top-0 left-0 bottom-0 w-72 bg-[var(--color-ck-surface)] flex flex-col overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b border-[var(--color-ck-border)]">
              <span className="font-bold text-lg">
                <span className="text-[var(--color-ck-accent)]">Corner</span> Kona
              </span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={20} />
              </Button>
            </div>

            <div className="flex-1 p-4 space-y-1">
              {[
                { label: "Home", href: "/" },
                { label: "Podcasts", href: "/podcasts" },
                { label: "Audiobooks", href: "/audiobooks" },
                { label: "Short Videos", href: "/short-videos" },
                { label: "Articles", href: "/articles" },
                { label: "Live", href: "/live" },
                { label: "Search", href: "/search" },
              ].map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                    isActivePath(pathname, href)
                      ? "bg-[var(--color-ck-surface-2)] text-white"
                      : "text-white/70 hover:bg-[var(--color-ck-surface-2)] hover:text-white"
                  )}
                >
                  {label}
                </Link>
              ))}

              <Link
                href="/antaryatra"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-[var(--color-ck-premium)] bg-[var(--color-ck-premium)]/10 border border-[var(--color-ck-premium)]/20"
              >
                <Zap size={14} />
                Antar Yatra
                <span className="ml-auto text-[10px] bg-[var(--color-ck-premium)] text-black px-1.5 py-0.5 rounded-full">
                  PREMIUM
                </span>
              </Link>

              <Link
                href={isEnglish ? "/" : "/en"}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-[var(--color-english-accent)] bg-[var(--color-english-accent)]/10"
              >
                English Section (EN)
              </Link>
            </div>

            <div className="p-4 border-t border-[var(--color-ck-border)] space-y-2">
              <Button variant="outline" size="md" asChild className="w-full">
                <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                  Log In
                </Link>
              </Button>
              <Button variant="premium" size="md" asChild className="w-full">
                <Link
                  href="/antaryatra/subscribe"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Subscribe to Antar Yatra
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
