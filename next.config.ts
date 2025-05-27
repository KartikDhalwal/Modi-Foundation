import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Disable linting during builds
  },
  typescript: {
    ignoreBuildErrors: true, // Disables TypeScript errors during build
  },
   webpack: (config) => {
    config.optimization.splitChunks = false
    return config
  }
};

export default nextConfig;
