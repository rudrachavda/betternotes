import type { NextConfig } from "next";

// Added important stuff to this file, remember to move later

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
