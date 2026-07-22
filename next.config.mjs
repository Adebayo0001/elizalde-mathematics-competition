/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "scontent-lis1-1.xx.fbcdn.net" },
    ],
  },
};

export default nextConfig;
