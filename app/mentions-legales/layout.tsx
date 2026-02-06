import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions Légales | Synapse Agency",
  description:
    "Mentions légales de Synapse Agency : informations sur l'éditeur, l'hébergeur, la propriété intellectuelle et les conditions d'utilisation du site.",
  openGraph: {
    title: "Mentions Légales | Synapse Agency",
    description: "Mentions légales et informations juridiques de Synapse Agency.",
    type: "website",
    locale: "fr_FR",
  },
  alternates: {
    canonical: "https://synapse-agency.fr/mentions-legales",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://synapse-agency.fr" },
    { "@type": "ListItem", position: 2, name: "Mentions Légales", item: "https://synapse-agency.fr/mentions-legales" },
  ],
};

export default function MentionsLegalesLayout({
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
      {children}
    </>
  );
}
