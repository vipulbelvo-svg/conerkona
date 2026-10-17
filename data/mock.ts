/**
 * Mock data for UI development.
 * Replace all of this with real CMS/API data in Step 12.
 */
import type {
  PodcastEpisode,
  Article,
  Audiobook,
  ShortVideo,
  AntaryatraContent,
  Category,
} from "@/types";

// --- Categories ---
export const CATEGORIES: Category[] = [
  {
    id: "cat-sports",
    slug: "sports",
    title: "Sports",
    accentColor: "#00D4FF",
    bgColor: "#0A1628",
  },
  {
    id: "cat-entertainment",
    slug: "entertainment",
    title: "Entertainment",
    accentColor: "#FF3CAC",
    bgColor: "#1A0A1E",
  },
  {
    id: "cat-geopolitics",
    slug: "geopolitics",
    title: "Geopolitics",
    accentColor: "#4A9EFF",
    bgColor: "#080E1A",
  },
  {
    id: "cat-bhakti",
    slug: "bhakti",
    title: "Bhakti",
    accentColor: "#FF9500",
    bgColor: "#1A1000",
  },
  {
    id: "cat-lifestyle",
    slug: "lifestyle",
    title: "Lifestyle",
    accentColor: "#00C9A7",
    bgColor: "#081A16",
  },
];

// --- Featured podcast episode ---
export const FEATURED_EPISODE: PodcastEpisode = {
  id: "ep-001",
  slug: "india-rise-of-a-superpower",
  title: "India: Rise of a Superpower — Deep Dive",
  description:
    "An in-depth storytelling journey through India's geopolitical ascent, economic transformation, and cultural resurgence.",
  coverImage: {
    url: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1600&q=80",
    alt: "India geopolitics feature",
    width: 1600,
    height: 900,
  },
  duration: 4520,
  language: "hi",
  status: "published",
  publishedAt: "2026-10-13T10:00:00Z",
  category: CATEGORIES[2],
  isPremium: false,
  episodeNumber: 24,
};

// --- Podcast episodes ---
export const PODCAST_EPISODES: PodcastEpisode[] = [
  FEATURED_EPISODE,
  {
    id: "ep-002",
    slug: "ipl-2027-preview",
    title: "IPL 2027 — Who Will Win the Crown?",
    description: "Complete breakdown of all 10 teams, key transfers and predictions.",
    coverImage: {
      url: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&q=75",
      alt: "Cricket",
      width: 800,
      height: 450,
    },
    duration: 3180,
    language: "hi",
    status: "published",
    publishedAt: "2026-10-12T08:00:00Z",
    category: CATEGORIES[0],
  },
  {
    id: "ep-003",
    slug: "bollywood-ott-revolution",
    title: "Bollywood vs OTT — The War for India's Screens",
    coverImage: {
      url: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=75",
      alt: "Cinema",
      width: 800,
      height: 450,
    },
    duration: 2760,
    language: "hi",
    status: "published",
    publishedAt: "2026-10-10T09:00:00Z",
    category: CATEGORIES[1],
  },
  {
    id: "ep-004",
    slug: "antar-yatra-silence-speaks",
    title: "Antar Yatra: जब मौन बोलता है",
    description: "Premium episode — the power of silence in modern life.",
    coverImage: {
      url: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&q=75",
      alt: "Meditation",
      width: 800,
      height: 450,
    },
    duration: 1980,
    language: "hi",
    status: "published",
    publishedAt: "2026-10-09T07:00:00Z",
    category: CATEGORIES[3],
    isPremium: true,
    freePreviewSeconds: 180,
  },
];

// --- Articles ---
export const ARTICLES: Article[] = [
  {
    id: "art-001",
    slug: "modi-foreign-policy-2026",
    title: "Modi's Foreign Policy in 2026: A Strategic Analysis",
    excerpt:
      "How India is reshaping its position on the world stage through a combination of economic leverage and diplomatic finesse.",
    coverImage: {
      url: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=800&q=75",
      alt: "Indian foreign policy",
      width: 800,
      height: 450,
    },
    language: "hi",
    status: "published",
    publishedAt: "2026-10-13T06:00:00Z",
    category: CATEGORIES[2],
    readingTime: 8,
    author: { id: "auth-1", name: "Rahul Sharma", slug: "rahul-sharma" },
  },
  {
    id: "art-002",
    slug: "virat-kohli-test-retirement",
    title: "Virat Kohli के Test Retirement का समय आ गया?",
    excerpt: "The debate that has split Indian cricket fans right down the middle.",
    coverImage: {
      url: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&q=75",
      alt: "Cricket match",
      width: 800,
      height: 450,
    },
    language: "hi",
    status: "published",
    publishedAt: "2026-10-12T11:00:00Z",
    category: CATEGORIES[0],
    readingTime: 5,
    author: { id: "auth-2", name: "Priya Verma", slug: "priya-verma" },
  },
];

// --- Audiobooks ---
export const AUDIOBOOKS: Audiobook[] = [
  {
    id: "ab-001",
    slug: "chanakya-niti-modern",
    title: "Chanakya Niti: Modern Life के लिए",
    description: "Ancient wisdom reinterpreted for the 21st century.",
    coverImage: {
      url: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&q=75",
      alt: "Book cover",
      width: 400,
      height: 400,
    },
    language: "hi",
    status: "published",
    publishedAt: "2026-09-01T00:00:00Z",
    totalChapters: 12,
    totalDuration: 18000,
    isPremium: false,
    author: { id: "auth-3", name: "Dr. Arjun Mishra", slug: "dr-arjun-mishra" },
  },
  {
    id: "ab-002",
    slug: "mahabharata-retold",
    title: "Mahabharata Retold — A Storyteller's Version",
    coverImage: {
      url: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&q=75",
      alt: "Ancient stories",
      width: 400,
      height: 400,
    },
    language: "hi",
    status: "published",
    publishedAt: "2026-08-15T00:00:00Z",
    totalChapters: 18,
    totalDuration: 36000,
    isPremium: true,
    author: { id: "auth-4", name: "Sunita Patel", slug: "sunita-patel" },
  },
];

// --- Short videos ---
export const SHORT_VIDEOS: ShortVideo[] = [
  {
    id: "sv-001",
    slug: "india-gdp-record-60sec",
    title: "India's GDP hits record high — explained in 60 seconds",
    thumbnail: {
      url: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&q=75",
      alt: "Economy",
      width: 400,
      height: 711,
    },
    duration: 58,
    language: "hi",
    status: "published",
    publishedAt: "2026-10-13T12:00:00Z",
    category: CATEGORIES[2],
  },
  {
    id: "sv-002",
    slug: "dhoni-last-interview",
    title: "Dhoni का आखिरी Interview — हर बात जो उन्होंने कही",
    thumbnail: {
      url: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&q=75",
      alt: "Cricket",
      width: 400,
      height: 711,
    },
    duration: 45,
    language: "hi",
    status: "published",
    publishedAt: "2026-10-12T15:00:00Z",
    category: CATEGORIES[0],
  },
  {
    id: "sv-003",
    slug: "morning-routine-science",
    title: "Science of the Perfect Morning Routine",
    thumbnail: {
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=75",
      alt: "Morning",
      width: 400,
      height: 711,
    },
    duration: 52,
    language: "hi",
    status: "published",
    publishedAt: "2026-10-11T08:00:00Z",
    category: CATEGORIES[4],
  },
];

// --- Antaryatra ---
export const ANTARYATRA_EPISODES: AntaryatraContent[] = [
  {
    id: "ay-001",
    slug: "silence-speaks",
    title: "जब मौन बोलता है — The Power of Silence",
    description:
      "In this exclusive episode, explore how silence can be your most powerful tool in a world of noise.",
    coverImage: {
      url: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&q=75",
      alt: "Meditation and silence",
      width: 800,
      height: 450,
    },
    duration: 2700,
    freePreviewSeconds: 180,
    episodeNumber: 1,
    status: "published",
    publishedAt: "2026-10-01T07:00:00Z",
  },
  {
    id: "ay-002",
    slug: "fear-is-a-teacher",
    title: "डर एक गुरु है — Fear Is a Teacher",
    coverImage: {
      url: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=800&q=75",
      alt: "Inner journey",
      width: 800,
      height: 450,
    },
    duration: 3120,
    freePreviewSeconds: 180,
    episodeNumber: 2,
    status: "published",
    publishedAt: "2026-10-08T07:00:00Z",
  },
];
