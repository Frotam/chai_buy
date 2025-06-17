import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */

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
    serverComponentsExternalPackages: ['mongodb'],
    serverActions: {
      bodySizeLimit: '5mb',  
    },
  },
};

export default nextConfig;
