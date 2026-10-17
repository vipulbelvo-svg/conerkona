import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MobileBottomNav } from "@/components/layout/mobile-nav";
import { PersistentAudioPlayer } from "@/components/media/audio-player";

export const metadata: Metadata = {
  alternates: {
    canonical: "/en",
    languages: { "en-IN": "/en", "hi-IN": "/" },
  },
};

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-16 pb-20 md:pb-0">
        {/* English section indicator */}
        <div className="bg-[var(--color-english-accent)]/10 border-b border-[var(--color-english-accent)]/20 px-4 py-2">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <span className="text-xs font-semibold text-[var(--color-english-accent)]">
              English Section
            </span>
            <a
              href="/"
              className="text-xs text-white/40 hover:text-white transition-colors"
            >
              Switch to Hindi →
            </a>
          </div>
        </div>
        {children}
      </main>
      <Footer />
      <MobileBottomNav />
      <PersistentAudioPlayer />
    </>
  );
}
