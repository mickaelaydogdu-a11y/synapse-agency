import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Production Visuelle | Photo, Vidéo & Drone professionnels | Synapse Agency",
  description:
    "Services de production visuelle professionnelle : photographie corporate, vidéo d'entreprise et prises de vue drone pour valoriser votre image de marque.",
  openGraph: {
    title: "Production Visuelle professionnelle | Synapse Agency",
    description:
      "Photo, vidéo et drone professionnels pour sublimer votre communication d'entreprise.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function ProductionVisuelleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
