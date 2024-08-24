/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ["cdn.pixabay.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
      },
    ],
  },
};

export default nextConfig;
