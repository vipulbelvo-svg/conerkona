import Link from "next/link";
import Image from "next/image";
import { Zap, Lock, Play, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ANTARYATRA_EPISODES } from "@/data/mock";
import { formatDuration } from "@/lib/utils";

export function AntaryatraSection() {
  return (
    <section
      className="relative overflow-hidden mx-4 sm:mx-6 lg:mx-8 rounded-3xl"
      aria-label="Antar Yatra premium section"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A1000] via-[#251500] to-[#0D0A00]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-ck-premium)]/5 to-transparent" />

      {/* Gold border */}
      <div className="absolute inset-0 rounded-3xl border border-[var(--color-ck-premium)]/20" />

      <div className="relative z-10 p-6 sm:p-8 lg:p-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Zap size={18} className="text-[var(--color-ck-premium)]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-ck-premium)]">
                Exclusive Premium Content
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Antar Yatra
            </h2>
            <p className="text-white/60 mt-1 text-sm">
              अंतर यात्रा — An inner journey through wisdom, silence and self-discovery
            </p>
          </div>

          <Button variant="premium" size="lg" asChild className="flex-shrink-0">
            <Link href="/antaryatra/subscribe">
              Subscribe Now
              <ArrowRight size={16} />
            </Link>
          </Button>
        </div>

        {/* Episodes grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {ANTARYATRA_EPISODES.map((ep) => (
            <div
              key={ep.id}
              className="group relative flex gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/8 border border-[var(--color-ck-premium)]/10 hover:border-[var(--color-ck-premium)]/30 transition-all duration-300"
            >
              {/* Thumbnail */}
              <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                {ep.coverImage ? (
                  <Image
                    src={ep.coverImage.url}
                    alt={ep.coverImage.alt ?? ep.title}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                ) : (
                  <div className="w-full h-full bg-[var(--color-ck-premium)]/10 flex items-center justify-center">
                    <Zap size={20} className="text-[var(--color-ck-premium)]" />
                  </div>
                )}

                {/* Lock overlay */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <Lock size={14} className="text-[var(--color-ck-premium)]" />
                </div>
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--color-ck-premium)]">
                  Episode {ep.episodeNumber}
                </span>
                <Link href={`/antaryatra/${ep.slug}`}>
                  <h3 className="text-sm font-semibold text-white mt-1 line-clamp-2 leading-snug hover:text-[var(--color-ck-premium)] transition-colors">
                    {ep.title}
                  </h3>
                </Link>
                <div className="flex items-center gap-3 mt-2">
                  {ep.freePreviewSeconds && (
                    <span className="flex items-center gap-1 text-[10px] text-[var(--color-ck-premium)]/70">
                      <Play size={9} />
                      Free {Math.floor(ep.freePreviewSeconds / 60)}m preview
                    </span>
                  )}
                  {ep.duration && (
                    <span className="text-[10px] text-white/30">
                      {formatDuration(ep.duration)}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-6 text-center">
          <Link
            href="/antaryatra"
            className="text-sm text-[var(--color-ck-premium)] hover:text-[var(--color-ck-premium-glow)] transition-colors flex items-center justify-center gap-1"
          >
            View all Antar Yatra episodes <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
