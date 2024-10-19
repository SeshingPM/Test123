/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { 
    unoptimized: true,
  },
  trailingSlash: true,
  swcMinify: true,
  reactStrictMode: true,
  optimizeFonts: true,
  experimental: {
    scrollRestoration: true,
  },
  // Remove the assetPrefix configuration
};

module.exports = nextConfig;