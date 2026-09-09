/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/webp"],
  },
  async redirects() {
    // Pages consolidated per CLAUDE.md. Keep old URLs working for SEO and shares.
    return [
      { source: "/how-it-works", destination: "/curriculum", permanent: true },
      { source: "/tutoring", destination: "/curriculum", permanent: true },
      { source: "/pricing", destination: "/costs", permanent: true },
      { source: "/privacy", destination: "/policies?tab=privacy", permanent: true },
      { source: "/terms", destination: "/policies?tab=terms", permanent: true },
    ];
  },
};

export default nextConfig;
