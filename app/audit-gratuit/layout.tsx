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
  alternates: {
    canonical: "https://synapse-agency.fr/audit-gratuit",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://synapse-agency.fr" },
    { "@type": "ListItem", position: 2, name: "Audit Gratuit", item: "https://synapse-agency.fr/audit-gratuit" },
  ],
};

export default function AuditGratuitLayout({
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
