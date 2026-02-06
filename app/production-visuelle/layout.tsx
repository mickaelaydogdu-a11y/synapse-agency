import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Production Visuelle | Photo, Vidéo & Drone professionnels | Synapse Agency",
  description:
    "Services de production visuelle professionnelle : photographie corporate, vidéo d'entreprise et prises de vue drone pour valoriser votre image de marque.",
  openGraph: {
    title: "Production Visuelle professionnelle | Synapse Agency",
    description:
      "Photo, vidéo et drone professionnels pour sublimer votre communication d'entreprise.",
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: "/images/Production-visuelle-Synapse-agency.jpg",
        width: 1200,
        height: 630,
        alt: "Production Visuelle professionnelle - Synapse Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Production Visuelle professionnelle | Synapse Agency",
    description:
      "Photo, vidéo et drone professionnels pour sublimer votre communication d'entreprise.",
    images: ["/images/Production-visuelle-Synapse-agency.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Production Visuelle Professionnelle",
  provider: {
    "@type": "ProfessionalService",
    name: "Synapse Agency",
    url: "https://synapse-agency.fr",
  },
  description:
    "Services de production visuelle professionnelle : photographie corporate, vidéo d'entreprise et prises de vue drone.",
  serviceType: "Production audiovisuelle",
  areaServed: { "@type": "Country", name: "France" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Production Visuelle",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Photographie corporate" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Vidéo d'entreprise" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Prises de vue drone" } },
    ],
  },
};

export default function ProductionVisuelleLayout({
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
