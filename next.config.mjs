/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/webp"],
  },
  async redirects() {
    // Pages consolidated per CLAUDE.md. Keep old URLs working for SEO and shares.
    return [
      { source: "/how-it-works", destination: "/tutoring#how-it-works", permanent: true },
      { source: "/pricing", destination: "/tutoring#pricing", permanent: true },
      { source: "/privacy", destination: "/policies#privacy", permanent: true },
      { source: "/terms", destination: "/policies#terms", permanent: true },
    ];
  },
};

export default nextConfig;
