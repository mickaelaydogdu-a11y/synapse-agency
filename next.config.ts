import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      // Canonicalisation : une seule version du domaine (sans www)
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.synapse-agency.fr" }],
        destination: "https://synapse-agency.fr/:path*",
        permanent: true,
      },
      // Anciennes pages supprimées, pour ne pas casser les URLs déjà indexées
      {
        source: "/audit-gratuit",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/audit-gratuit/questionnaire",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/agents-ia",
        destination: "/solutions-ia",
        permanent: true,
      },
      {
        source: "/realisations/application-gestion-commerciale",
        destination: "/realisations",
        permanent: true,
      },
      {
        source: "/realisations/suivi-de-chantier",
        destination: "/realisations",
        permanent: true,
      },
      {
        source: "/realisations/portail-client-documentaire",
        destination: "/realisations",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
