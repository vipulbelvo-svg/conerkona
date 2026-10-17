import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization — allow external media sources
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**.sanity.io" },
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "i.ytimg.com" },
      { protocol: "https", hostname: "img.youtube.com" },
    ],
  },
  // Turbopack for Tailwind 4
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
