import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Synapse Agency - Applications métier & Intelligence Artificielle",
    short_name: "Synapse Agency",
    description:
      "Applications métier sur mesure intégrant intelligence artificielle et automatisation.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0d",
    theme_color: "#6366f1",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
