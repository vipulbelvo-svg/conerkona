import Link from "next/link";

const FOOTER_LINKS = {
  Explore: [
    { label: "Podcasts", href: "/podcasts" },
    { label: "Audiobooks", href: "/audiobooks" },
    { label: "Short Videos", href: "/short-videos" },
    { label: "Articles", href: "/articles" },
    { label: "Live", href: "/live" },
  ],
  Premium: [
    { label: "Antar Yatra", href: "/antaryatra" },
    { label: "Subscribe", href: "/antaryatra/subscribe" },
    { label: "Pricing", href: "/antaryatra/subscribe" },
  ],
  English: [
    { label: "English Podcasts", href: "/en/podcasts" },
    { label: "English Articles", href: "/en/articles" },
    { label: "English Audiobooks", href: "/en/audiobooks" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer
      className="bg-[var(--color-ck-surface)] border-t border-[var(--color-ck-border)] mt-auto"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <div className="text-2xl font-bold mb-3">
              <span className="text-[var(--color-ck-accent)]">Corner</span>
              <span className="text-white"> Kona</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              A multimedia storytelling ecosystem of podcasts, audiobooks,
              video and live content.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([section, links]) => (
            <div key={section}>
              <h3 className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-4">
                {section}
              </h3>
              <ul className="space-y-2">
                {links.map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-[var(--color-ck-border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Corner Kona. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/en"
              className="text-xs text-[var(--color-english-accent)] hover:underline"
            >
              English Site (EN)
            </Link>
            <Link
              href="/sitemap.xml"
              className="text-xs text-white/30 hover:text-white/60"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
