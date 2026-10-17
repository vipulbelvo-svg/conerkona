import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://cornerkona.com"
  ),
  title: {
    default: "Corner Kona — Podcasts, Audiobooks, Stories & More",
    template: "%s | Corner Kona",
  },
  description:
    "Corner Kona is a multimedia storytelling platform. Explore podcasts, audiobooks, short videos, live news and in-depth stories across Sports, Entertainment, Geopolitics, Bhakti and Lifestyle.",
  keywords: [
    "Corner Kona",
    "podcasts",
    "audiobooks",
    "Hindi podcasts",
    "storytelling",
    "Antar Yatra",
    "short videos",
    "entertainment",
    "geopolitics",
  ],
  authors: [{ name: "Corner Kona" }],
  creator: "Corner Kona",
  openGraph: {
    type: "website",
    locale: "hi_IN",
    alternateLocale: "en_IN",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://cornerkona.com",
    siteName: "Corner Kona",
    title: "Corner Kona — Podcasts, Audiobooks, Stories & More",
    description:
      "A multimedia storytelling ecosystem of podcasts, audiobooks, video and live content.",
    images: [
      {
        url: "/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Corner Kona",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@cornerkona",
    title: "Corner Kona — Podcasts, Audiobooks, Stories & More",
    description:
      "A multimedia storytelling ecosystem of podcasts, audiobooks, video and live content.",
    images: ["/og-default.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "/",
    languages: {
      "hi-IN": "/",
      "en-IN": "/en",
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0A" },
    { media: "(prefers-color-scheme: light)", color: "#0A0A0A" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="hi"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-dvh flex flex-col bg-[var(--color-ck-black)] text-[var(--color-ck-white)]">
        {children}
      </body>
    </html>
  );
}
