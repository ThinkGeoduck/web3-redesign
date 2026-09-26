import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Speaker photos, event posters and partner logos are served from the
    // current official site until the organisers hand over source files.
    remotePatterns: [
      { protocol: "https", hostname: "www.web3carnival.world", pathname: "/**" },
    ],
  },
};

export default nextConfig;
