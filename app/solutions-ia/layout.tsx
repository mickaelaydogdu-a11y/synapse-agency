import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions IA sur mesure | Agents IA & Automatisation | Synapse Agency",
  description:
    "Automatisez vos processus métier avec nos solutions d'intelligence artificielle : agents téléphoniques, extraction de données, génération de contenu et chatbots sur mesure.",
  openGraph: {
    title: "Solutions IA sur mesure | Synapse Agency",
    description:
      "Agents IA, extraction de données, automatisation : des solutions d'intelligence artificielle adaptées à votre entreprise.",
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: "/images/Solution-ia-Synapse-agency.jpg",
        width: 1200,
        height: 630,
        alt: "Solutions IA sur mesure - Synapse Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solutions IA sur mesure | Synapse Agency",
    description:
      "Agents IA, extraction de données, automatisation : des solutions d'intelligence artificielle adaptées à votre entreprise.",
    images: ["/images/Solution-ia-Synapse-agency.jpg"],
  },
  alternates: {
    canonical: "https://synapse-agency.fr/solutions-ia",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Solutions IA sur mesure",
  provider: {
    "@type": "ProfessionalService",
    name: "Synapse Agency",
    url: "https://synapse-agency.fr",
  },
  description:
    "Automatisez vos processus métier avec nos solutions d'intelligence artificielle : agents téléphoniques, extraction de données, génération de contenu et chatbots sur mesure.",
  serviceType: "Intelligence Artificielle",
  areaServed: { "@type": "Country", name: "France" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Solutions IA",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Agent Téléphonique IA" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Agent Création de Devis" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Agent Réseaux Sociaux" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Extraction de données" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Génération de contenu IA" } },
    ],
  },
};

export default function SolutionsIALayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
