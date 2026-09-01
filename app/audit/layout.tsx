import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Audit de cybersécurité, conformité et workflow | Synapse Agency",
  description:
    "Synapse Agency réalise des audits de cybersécurité (tests d'intrusion, continuité d'activité PCA/PRA), de conformité réglementaire (RGPD, RGS) et de workflow, pour évaluer et renforcer la sécurité, la conformité et la performance de vos outils.",
  openGraph: {
    title: "Audit de cybersécurité, conformité et workflow | Synapse Agency",
    description:
      "Audit de cybersécurité (test d'intrusion, PCA/PRA), de conformité réglementaire (RGPD, RGS) et de workflow.",
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: "/images/Audit-Synapse-agency.jpg",
        width: 1200,
        height: 630,
        alt: "Audit de cybersécurité, conformité et workflow - Synapse Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Audit de cybersécurité, conformité et workflow | Synapse Agency",
    description:
      "Audit de cybersécurité (test d'intrusion, PCA/PRA), de conformité réglementaire (RGPD, RGS) et de workflow.",
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
  name: "Audit de cybersécurité, conformité et workflow",
  provider: {
    "@type": "ProfessionalService",
    name: "Synapse Agency",
    url: "https://synapse-agency.fr",
  },
  description:
    "Audit de cybersécurité (tests d'intrusion, continuité d'activité PCA/PRA), audit de conformité réglementaire (RGPD, RGS) et audit de workflow.",
  serviceType: "Audit d'entreprise (sécurité, conformité, workflow)",
  areaServed: { "@type": "Country", name: "France" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Audits",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Audit de cybersécurité (test d'intrusion, PCA/PRA)" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Audit de conformité réglementaire (RGPD, RGS)" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Audit de workflow" } },
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
