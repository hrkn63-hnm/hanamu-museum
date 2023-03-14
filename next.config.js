/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    optimizeFonts: true,
  },
  images: {
    domains: ["images.unsplash.com", "images.microcms-assets.io"],
  },
};

module.exports = nextConfig
