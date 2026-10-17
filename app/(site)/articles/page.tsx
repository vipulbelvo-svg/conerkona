import type { Metadata } from "next";
import { ArticleCard } from "@/components/cards/article-card";
import { ARTICLES, CATEGORIES } from "@/data/mock";

export const metadata: Metadata = {
  title: "Articles",
  description: "In-depth stories and analysis from Corner Kona across Sports, Entertainment, Geopolitics, Bhakti and Lifestyle.",
  alternates: { canonical: "/articles" },
};

export default function ArticlesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-bold text-white">Articles</h1>
        <p className="text-white/50 text-lg">Stories that go deeper</p>
      </div>

      {/* Category tabs */}
      <div className="flex gap-2 flex-wrap">
        <button className="px-4 py-1.5 rounded-full bg-[var(--color-ck-accent)] text-white text-sm font-medium">
          All
        </button>
        {CATEGORIES.map((cat) => (
          <a
            key={cat.id}
            href={`/articles/${cat.slug}`}
            className="px-4 py-1.5 rounded-full border border-[var(--color-ck-border)] text-sm text-white/60 hover:text-white hover:border-white/30 transition-colors"
          >
            {cat.title}
          </a>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {ARTICLES.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}
