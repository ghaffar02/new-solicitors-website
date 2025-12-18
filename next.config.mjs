/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/news/:slug+",
        destination: "/:slug+",
      },
    ];
  },
};

export default nextConfig;
