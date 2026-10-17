import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MobileBottomNav } from "@/components/layout/mobile-nav";
import { PersistentAudioPlayer } from "@/components/media/audio-player";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main
        id="main-content"
        className="flex-1 pt-16 pb-20 md:pb-0"
        // pt-16 = header height offset
        // pb-20 = mobile bottom nav + player space
      >
        {children}
      </main>
      <Footer />
      <MobileBottomNav />
      <PersistentAudioPlayer />
    </>
  );
}
