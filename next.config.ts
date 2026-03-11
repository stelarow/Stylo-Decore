import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["lucide-react", "motion"],
    inlineCss: true,
  },
  compress: true,
};

export default nextConfig;
