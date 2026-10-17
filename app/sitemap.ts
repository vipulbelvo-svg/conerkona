import type { MetadataRoute } from "next";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://cornerkona.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: "daily", priority: 1 },
    { url: `${BASE_URL}/podcasts`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${BASE_URL}/audiobooks`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/short-videos`, lastModified: now, changeFrequency: "daily", priority: 0.8 },
    { url: `${BASE_URL}/articles`, lastModified: now, changeFrequency: "daily", priority: 0.8 },
    { url: `${BASE_URL}/antaryatra`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/live`, lastModified: now, changeFrequency: "always", priority: 0.7 },
    { url: `${BASE_URL}/en`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${BASE_URL}/en/podcasts`, lastModified: now, changeFrequency: "daily", priority: 0.8 },
    { url: `${BASE_URL}/en/articles`, lastModified: now, changeFrequency: "daily", priority: 0.8 },
  ];

  // TODO in Step 12: add dynamic routes from CMS/database
  // const articles = await fetchAllArticles();
  // const articleRoutes = articles.map(a => ({
  //   url: `${BASE_URL}/articles/${a.category.slug}/${a.slug}`,
  //   lastModified: a.updatedAt ?? a.publishedAt,
  //   changeFrequency: 'weekly',
  //   priority: 0.7,
  // }));

  return [...staticRoutes];
}
