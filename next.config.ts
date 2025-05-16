import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: false,
  },
  experimental: {
    serverComponentsExternalPackages: [],
    turbo: {
      rules: {
        // 터보팩에서 SVG 파일을 처리하는 규칙 추가
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "react",
        },
      },
    },
  },
};

export default nextConfig;
