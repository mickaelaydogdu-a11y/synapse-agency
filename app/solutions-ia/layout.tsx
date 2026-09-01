import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Intelligence artificielle & automatisation | Synapse Agency",
  description:
    "Synapse Agency intègre l'IA dans vos applications métier : assistant interne, RAG, analyse documentaire, extraction et agents IA.",
  openGraph: {
    title: "Intelligence artificielle & automatisation | Synapse Agency",
    description:
      "L'IA intégrée à vos applications métier pour automatiser ce qui peut l'être, sans complexifier votre quotidien.",
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: "/images/Solution-ia-Synapse-agency.jpg",
        width: 1200,
        height: 630,
        alt: "Intelligence artificielle & automatisation - Synapse Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Intelligence artificielle & automatisation | Synapse Agency",
    description:
      "L'IA intégrée à vos applications métier pour automatiser ce qui peut l'être, sans complexifier votre quotidien.",
    images: ["/images/Solution-ia-Synapse-agency.jpg"],
  },
  alternates: {
    canonical: "https://synapse-agency.fr/solutions-ia",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://synapse-agency.fr" },
    { "@type": "ListItem", position: 2, name: "IA & Automatisation", item: "https://synapse-agency.fr/solutions-ia" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Intelligence artificielle & automatisation",
  provider: {
    "@type": "ProfessionalService",
    name: "Synapse Agency",
    url: "https://synapse-agency.fr",
  },
  description:
    "Intelligence artificielle intégrée aux applications métier : assistant interne, RAG, analyse documentaire, extraction de données, génération assistée et agents IA.",
  serviceType: "Intelligence Artificielle",
  areaServed: { "@type": "Country", name: "France" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "IA & Automatisation",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Assistant métier IA" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "RAG" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Analyse documentaire" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Extraction de données" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Agents IA" } },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
