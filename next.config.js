/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Allow embedding spline iframe domain if needed
  images: {
    domains: [],
  },
};

module.exports = nextConfig;
