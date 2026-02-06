import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Applications Web & Mobile sur mesure | Synapse Agency",
  description:
    "Développement d'applications web et mobiles sur mesure : CRM, portails clients, outils métier et plateformes collaboratives pour digitaliser votre entreprise.",
  openGraph: {
    title: "Applications Web & Mobile sur mesure | Synapse Agency",
    description:
      "Applications web et mobiles sur mesure pour digitaliser vos processus et booster votre productivité.",
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: "/images/Applications.jpg",
        width: 1200,
        height: 630,
        alt: "Applications Web & Mobile - Synapse Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Applications Web & Mobile sur mesure | Synapse Agency",
    description:
      "Applications web et mobiles sur mesure pour digitaliser vos processus et booster votre productivité.",
    images: ["/images/Applications.jpg"],
  },
  alternates: {
    canonical: "https://synapse-agency.fr/applications",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://synapse-agency.fr" },
    { "@type": "ListItem", position: 2, name: "Applications", item: "https://synapse-agency.fr/applications" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Développement d'Applications Web & Mobile",
  provider: {
    "@type": "ProfessionalService",
    name: "Synapse Agency",
    url: "https://synapse-agency.fr",
  },
  description:
    "Développement d'applications web et mobiles sur mesure : CRM, portails clients, outils métier et plateformes collaboratives.",
  serviceType: "Développement logiciel",
  areaServed: { "@type": "Country", name: "France" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Applications",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Applications web métier" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Applications mobiles iOS & Android" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Portails & plateformes clients" } },
    ],
  },
};

export default function ApplicationsLayout({
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
