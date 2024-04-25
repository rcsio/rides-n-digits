/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },
};

if (process.env.NODE_ENV !== "production") {
  nextConfig.images.remotePatterns.push({
    protocol: "http",
    hostname: "localhost",
  });
}

export default nextConfig;
