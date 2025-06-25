/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  // GitHub Pages configuration
  basePath: process.env.NODE_ENV === 'production' ? '/questwasteWebsite' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/questwasteWebsite/' : '',
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ext.same-assets.com',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
