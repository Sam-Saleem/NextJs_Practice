/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  // If using images from a remote source these are required:
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/Sam-Saleem/Nextjs-blogposts/main/images/**",
      },
    ],
  },
};

module.exports = nextConfig;
