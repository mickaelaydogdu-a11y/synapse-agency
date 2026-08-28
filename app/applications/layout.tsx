import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Applications métier sur mesure | Synapse Agency",
  description:
    "Synapse Agency développe des applications métier web et mobiles sur mesure pour centraliser vos données, automatiser vos processus et améliorer la productivité de vos équipes.",
  openGraph: {
    title: "Applications métier sur mesure | Synapse Agency",
    description:
      "Des applications web et mobiles sur mesure pour centraliser vos données et automatiser vos processus métier.",
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: "/images/Applications.jpg",
        width: 1200,
        height: 630,
        alt: "Applications métier sur mesure - Synapse Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Applications métier sur mesure | Synapse Agency",
    description:
      "Des applications web et mobiles sur mesure pour centraliser vos données et automatiser vos processus métier.",
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
  name: "Développement d'applications métier sur mesure",
  provider: {
    "@type": "ProfessionalService",
    name: "Synapse Agency",
    url: "https://synapse-agency.fr",
  },
  description:
    "Développement d'applications métier web et mobiles sur mesure : CRM, gestion commerciale, applications terrain, portails clients et gestion documentaire.",
  serviceType: "Développement logiciel",
  areaServed: { "@type": "Country", name: "France" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Applications métier",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "CRM sur mesure" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gestion commerciale" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Applications terrain" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Portail client" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gestion documentaire" } },
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
