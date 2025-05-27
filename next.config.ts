import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Disable linting during builds
  },
  typescript: {
    ignoreBuildErrors: true, // Disables TypeScript errors during build
  },
   webpack: (config) => {
    config.resolve.alias["@"] = path.resolve(__dirname);
    return config;
  },
};

export default nextConfig;
