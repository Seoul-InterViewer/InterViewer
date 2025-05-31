import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    viewTransition: true,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
