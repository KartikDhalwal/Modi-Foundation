import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Disable linting during builds
  },
  typescript: {
    ignoreBuildErrors: true, // Disables TypeScript errors during build
  },
  images: {
    domains: ['erp.autovyn.com'], // Add allowed domains here
  },
};

export default nextConfig;
