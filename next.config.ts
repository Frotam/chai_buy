import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains:['res.cloudinary.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '/**', // allow all paths under this domain
      },
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '5mb',  
    },
  },
};

export default nextConfig;
