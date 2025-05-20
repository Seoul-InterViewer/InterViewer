import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: false,
  },
  experimental: {
    serverComponentsExternalPackages: [],
    turbo: {
      rules: {},
    },
  },
};

export default nextConfig;
