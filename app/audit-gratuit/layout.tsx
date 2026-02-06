import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Audit Digital Gratuit | Analysez votre potentiel IA | Synapse Agency",
  description:
    "Bénéficiez d'un audit digital gratuit de 30 minutes pour identifier les opportunités d'automatisation et de digitalisation de votre entreprise.",
  openGraph: {
    title: "Audit Digital Gratuit | Synapse Agency",
    description:
      "30 minutes pour analyser votre potentiel digital et identifier les opportunités d'automatisation IA.",
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: "/images/Home-Synapse-agency.jpg",
        width: 1200,
        height: 630,
        alt: "Audit Digital Gratuit - Synapse Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Audit Digital Gratuit | Synapse Agency",
    description:
      "30 minutes pour analyser votre potentiel digital et identifier les opportunités d'automatisation IA.",
    images: ["/images/Home-Synapse-agency.jpg"],
  },
};

export default function AuditGratuitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
