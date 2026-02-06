import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de Confidentialité | RGPD | Synapse Agency",
  description:
    "Politique de confidentialité et protection des données personnelles de Synapse Agency. Conformité RGPD, droits des utilisateurs et gestion des cookies.",
  openGraph: {
    title: "Politique de Confidentialité | Synapse Agency",
    description:
      "Protection des données personnelles et conformité RGPD chez Synapse Agency.",
    type: "website",
    locale: "fr_FR",
  },
  alternates: {
    canonical: "https://synapse-agency.fr/confidentialite",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://synapse-agency.fr" },
    { "@type": "ListItem", position: 2, name: "Confidentialité", item: "https://synapse-agency.fr/confidentialite" },
  ],
};

export default function ConfidentialiteLayout({
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
