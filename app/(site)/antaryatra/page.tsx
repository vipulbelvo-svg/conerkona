import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Zap, Lock, Play, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ANTARYATRA_EPISODES } from "@/data/mock";
import { formatDuration } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Antar Yatra — Premium Subscription Content",
  description:
    "Antar Yatra is Corner Kona's exclusive spiritual and introspective podcast series. Subscribe for unlimited access.",
  alternates: { canonical: "/antaryatra" },
};

const PLAN_FEATURES = [
  "All Antar Yatra episodes — unlimited access",
  "New episodes every week",
  "Offline listening (coming soon)",
  "Ad-free experience",
  "Early access to new series",
  "Community access (coming soon)",
];

export default function AntaryatraPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1000] via-[#120D00] to-[var(--color-ck-black)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,150,42,0.15),transparent_60%)]" />

        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
          <div className="flex items-center justify-center gap-2">
            <Zap size={20} className="text-[var(--color-ck-premium)]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-ck-premium)]">
              Exclusive Premium Content
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            Antar Yatra
          </h1>
          <p className="text-lg text-white/60 leading-relaxed">
            अंतर यात्रा — An inner journey through wisdom, silence and self-discovery.
            Deeply personal, thoughtfully crafted exclusive podcasts.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <Button variant="premium" size="lg" asChild>
              <Link href="/antaryatra/subscribe">
                Subscribe — Start Free Preview
                <ArrowRight size={18} />
              </Link>
            </Button>
            <Button variant="outline" size="lg">
              <Play size={16} />
              Listen to Free Preview
            </Button>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-14">
        {/* Episodes */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-white">Episodes</h2>
          <div className="space-y-4">
            {ANTARYATRA_EPISODES.map((ep) => (
              <div
                key={ep.id}
                className="group flex gap-4 p-5 rounded-2xl bg-[var(--color-ck-surface)] border border-[var(--color-ck-border)] hover:border-[var(--color-ck-premium)]/30 transition-all duration-300"
              >
                <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                  {ep.coverImage && (
                    <Image
                      src={ep.coverImage.url}
                      alt={ep.coverImage.alt ?? ep.title}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <Lock size={16} className="text-[var(--color-ck-premium)]" />
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-ck-premium)]">
                    Episode {ep.episodeNumber}
                  </span>
                  <Link href={`/antaryatra/${ep.slug}`}>
                    <h3 className="text-base font-semibold text-white mt-1 line-clamp-2 hover:text-[var(--color-ck-premium)] transition-colors">
                      {ep.title}
                    </h3>
                  </Link>
                  {ep.description && (
                    <p className="text-sm text-white/50 mt-1 line-clamp-2">
                      {ep.description}
                    </p>
                  )}
                  <div className="flex items-center gap-4 mt-2">
                    {ep.freePreviewSeconds && (
                      <span className="flex items-center gap-1 text-xs text-[var(--color-ck-premium)]/70">
                        <Play size={10} />
                        Free {Math.floor(ep.freePreviewSeconds / 60)}m preview
                      </span>
                    )}
                    {ep.duration && (
                      <span className="text-xs text-white/30">
                        {formatDuration(ep.duration)}
                      </span>
                    )}
                  </div>
                </div>

                <Button
                  variant="premium"
                  size="sm"
                  asChild
                  className="flex-shrink-0 self-center"
                >
                  <Link href={`/antaryatra/${ep.slug}`}>Listen</Link>
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* Subscription CTA */}
        <section className="relative overflow-hidden rounded-3xl p-8 sm:p-10 border border-[var(--color-ck-premium)]/20 bg-gradient-to-br from-[#1A1000] to-[#0D0A00]">
          <div className="max-w-lg space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Unlock all episodes
            </h2>
            <p className="text-white/60">
              Subscribe to Antar Yatra and get unlimited access to every episode, past and future.
            </p>
            <ul className="space-y-2">
              {PLAN_FEATURES.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-white/70">
                  <Check size={14} className="text-[var(--color-ck-premium)] flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <Button variant="premium" size="lg" asChild className="mt-4">
              <Link href="/antaryatra/subscribe">
                Subscribe Now <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
