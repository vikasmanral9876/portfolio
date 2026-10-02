import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/resume.pdf",
        destination: "/resume/resume.pdf",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
