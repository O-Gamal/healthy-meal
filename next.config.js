/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['www.eatwell101.com', 'secure.gravatar.com'],
  },
};

module.exports = nextConfig;
