// ============================================================
// CORNER KONA — Shared TypeScript Types
// ============================================================

// --- Content status ---
export type ContentStatus = "draft" | "published" | "scheduled" | "archived";

// --- Language ---
export type Language = "hi" | "en";

// --- Content types ---
export type ContentType =
  | "article"
  | "podcast"
  | "audiobook"
  | "short-video"
  | "antaryatra"
  | "live";

// --- Categories ---
export type Category = {
  id: string;
  slug: string;
  title: string;
  titleEn?: string;
  description?: string;
  accentColor?: string;
  bgColor?: string;
  iconName?: string;
  coverImage?: MediaAsset;
};

// --- Author ---
export type Author = {
  id: string;
  name: string;
  slug: string;
  bio?: string;
  avatar?: MediaAsset;
  role?: string;
};

// --- Media asset ---
export type MediaAsset = {
  url: string;
  alt?: string;
  width?: number;
  height?: number;
  blurDataUrl?: string;
};

// --- SEO metadata ---
export type SeoMeta = {
  title?: string;
  description?: string;
  ogImage?: MediaAsset;
  canonical?: string;
  noIndex?: boolean;
  structuredData?: Record<string, unknown>;
};

// --- Article ---
export type Article = {
  id: string;
  slug: string;
  title: string;
  excerpt?: string;
  body?: string;
  coverImage?: MediaAsset;
  author?: Author;
  category?: Category;
  tags?: string[];
  language: Language;
  status: ContentStatus;
  publishedAt?: string;
  updatedAt?: string;
  readingTime?: number;
  relatedPodcast?: PodcastEpisode;
  relatedVideo?: ShortVideo;
  seo?: SeoMeta;
  isPremium?: boolean;
};

// --- Podcast ---
export type Podcast = {
  id: string;
  slug: string;
  title: string;
  description?: string;
  coverImage?: MediaAsset;
  category?: Category;
  language: Language;
  totalEpisodes?: number;
  youtubePlaylistId?: string;
  isPremium?: boolean;
};

// --- Podcast Episode ---
export type PodcastEpisode = {
  id: string;
  slug: string;
  title: string;
  description?: string;
  coverImage?: MediaAsset;
  podcast?: Podcast;
  audioUrl?: string;
  youtubeVideoId?: string;
  duration?: number; // seconds
  episodeNumber?: number;
  season?: number;
  language: Language;
  status: ContentStatus;
  publishedAt?: string;
  isPremium?: boolean;
  freePreviewSeconds?: number;
  category?: Category;
  tags?: string[];
  relatedArticle?: Article;
  seo?: SeoMeta;
};

// --- Audiobook ---
export type Audiobook = {
  id: string;
  slug: string;
  title: string;
  description?: string;
  coverImage?: MediaAsset;
  author?: Author;
  narrator?: string;
  category?: Category;
  language: Language;
  totalChapters?: number;
  totalDuration?: number; // seconds
  isPremium?: boolean;
  status: ContentStatus;
  publishedAt?: string;
  tags?: string[];
  seo?: SeoMeta;
};

// --- Audiobook Chapter ---
export type AudiobookChapter = {
  id: string;
  slug: string;
  title: string;
  audiobook?: Audiobook;
  audioUrl?: string;
  duration?: number;
  chapterNumber: number;
  isPremium?: boolean;
  freePreviewSeconds?: number;
};

// --- Short Video ---
export type ShortVideo = {
  id: string;
  slug: string;
  title: string;
  description?: string;
  thumbnail?: MediaAsset;
  videoUrl?: string;
  youtubeVideoId?: string;
  duration?: number; // seconds (30–60)
  category?: Category;
  language: Language;
  status: ContentStatus;
  publishedAt?: string;
  relatedPodcast?: PodcastEpisode;
  relatedArticle?: Article;
  tags?: string[];
  seo?: SeoMeta;
};

// --- Live Event ---
export type LiveEvent = {
  id: string;
  slug: string;
  title: string;
  description?: string;
  coverImage?: MediaAsset;
  status: "upcoming" | "live" | "ended";
  startTime?: string;
  endTime?: string;
  updates?: LiveUpdate[];
};

export type LiveUpdate = {
  id: string;
  content: string;
  timestamp: string;
  type: "text" | "video" | "article";
  mediaUrl?: string;
};

// --- Antaryatra Content ---
export type AntaryatraContent = {
  id: string;
  slug: string;
  title: string;
  description?: string;
  coverImage?: MediaAsset;
  audioUrl?: string;
  youtubeVideoId?: string;
  duration?: number;
  freePreviewSeconds?: number;
  publishedAt?: string;
  status: ContentStatus;
  episodeNumber?: number;
  seo?: SeoMeta;
};

// --- User ---
export type User = {
  id: string;
  email: string;
  displayName?: string;
  avatar?: MediaAsset;
  role: UserRole;
  createdAt: string;
  subscription?: Subscription;
  preferences?: UserPreferences;
};

export type UserRole =
  | "guest"
  | "user"
  | "subscriber"
  | "writer"
  | "editor"
  | "moderator"
  | "admin";

export type UserPreferences = {
  language?: Language;
  notificationCategories?: string[];
  emailNotifications?: boolean;
  pushNotifications?: boolean;
};

// --- Subscription ---
export type Subscription = {
  id: string;
  userId: string;
  plan: SubscriptionPlan;
  status: "active" | "cancelled" | "expired" | "trial";
  startDate: string;
  endDate?: string;
  autoRenew: boolean;
};

export type SubscriptionPlan = {
  id: string;
  name: string;
  price: number;
  currency: string;
  interval: "monthly" | "annual";
  features: string[];
};

// --- Comment ---
export type Comment = {
  id: string;
  contentId: string;
  contentType: ContentType;
  author: User;
  body: string;
  createdAt: string;
  updatedAt?: string;
  likes: number;
  isLiked?: boolean;
  status: "pending" | "approved" | "rejected" | "spam";
  replies?: CommentReply[];
};

export type CommentReply = {
  id: string;
  commentId: string;
  author: User;
  body: string;
  createdAt: string;
  likes: number;
  isLiked?: boolean;
  status: "pending" | "approved" | "rejected";
};

// --- Notification ---
export type Notification = {
  id: string;
  userId: string;
  type: NotificationType;
  title: string;
  body: string;
  url?: string;
  isRead: boolean;
  createdAt: string;
};

export type NotificationType =
  | "new_episode"
  | "new_article"
  | "comment_reply"
  | "live_started"
  | "subscription_renewal"
  | "breaking_news";

// --- Navigation ---
export type NavItem = {
  label: string;
  href: string;
  icon?: string;
  isHighlighted?: boolean;
  children?: NavItem[];
};
