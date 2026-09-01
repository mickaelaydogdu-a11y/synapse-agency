import type { Metadata } from "next";
import { realisations } from "@/data/realisations";

export const metadata: Metadata = {
  title: "Réalisations | Synapse Agency",
  description:
    "Trois applications métier sur mesure livrées à nos clients : médiathèque numérique, gestion de parc et sécurité digitalisée par rondes connectées.",
  openGraph: {
    title: "Réalisations | Synapse Agency",
    description:
      "Des applications conçues pour répondre à de vrais problèmes métier.",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary",
    title: "Réalisations | Synapse Agency",
    description: "Des applications conçues pour répondre à de vrais problèmes métier.",
  },
  alternates: {
    canonical: "https://synapse-agency.fr/realisations",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://synapse-agency.fr" },
    { "@type": "ListItem", position: 2, name: "Réalisations", item: "https://synapse-agency.fr/realisations" },
  ],
};

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: realisations.map((r, index) => ({
    "@type": "ListItem",
    position: index + 1,
    url: `https://synapse-agency.fr/realisations/${r.slug}`,
    name: r.title,
  })),
};

export default function RealisationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      {children}
    </>
  );
}
