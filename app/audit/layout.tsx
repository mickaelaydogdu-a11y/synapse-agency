import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Audit de flux de travail, cybersécurité et conformité | Synapse Agency",
  description:
    "Synapse Agency réalise des audits de flux de travail, de cybersécurité (tests d'intrusion, continuité d'activité PCA/PRA) et de conformité réglementaire (RGPD, RGS), pour évaluer et renforcer le fonctionnement, la sécurité et la conformité de vos outils.",
  openGraph: {
    title: "Audit de flux de travail, cybersécurité et conformité | Synapse Agency",
    description:
      "Audit de flux de travail, de cybersécurité (test d'intrusion, PCA/PRA) et de conformité réglementaire (RGPD, RGS).",
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: "/images/Audit-Synapse-agency.jpg",
        width: 1200,
        height: 630,
        alt: "Audit de flux de travail, cybersécurité et conformité - Synapse Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Audit de flux de travail, cybersécurité et conformité | Synapse Agency",
    description:
      "Audit de flux de travail, de cybersécurité (test d'intrusion, PCA/PRA) et de conformité réglementaire (RGPD, RGS).",
    images: ["/images/Audit-Synapse-agency.jpg"],
  },
  alternates: {
    canonical: "https://synapse-agency.fr/audit",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://synapse-agency.fr" },
    { "@type": "ListItem", position: 2, name: "Audit", item: "https://synapse-agency.fr/audit" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Audit de flux de travail, cybersécurité et conformité",
  provider: {
    "@type": "ProfessionalService",
    name: "Synapse Agency",
    url: "https://synapse-agency.fr",
  },
  description:
    "Audit de flux de travail, audit de cybersécurité (tests d'intrusion, continuité d'activité PCA/PRA) et audit de conformité réglementaire (RGPD, RGS).",
  serviceType: "Audit d'entreprise (flux de travail, sécurité, conformité)",
  areaServed: { "@type": "Country", name: "France" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Audits",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Audit de flux de travail" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Audit de cybersécurité (test d'intrusion, PCA/PRA)" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Audit de conformité réglementaire (RGPD, RGS)" } },
    ],
  },
};

export default function AuditLayout({
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
