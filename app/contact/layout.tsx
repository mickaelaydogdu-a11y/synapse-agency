import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contactez-nous | Synapse Agency",
  description:
    "Parlons de votre projet d'application métier, d'intelligence artificielle ou d'automatisation. Premier échange gratuit et sans engagement, réponse sous 24h.",
  openGraph: {
    title: "Contactez Synapse Agency",
    description:
      "Parlons de votre projet d'application métier, d'intelligence artificielle ou d'automatisation.",
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: "/images/Home-Synapse-agency.jpg",
        width: 1200,
        height: 630,
        alt: "Contactez Synapse Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contactez Synapse Agency",
    description:
      "Parlons de votre projet d'application métier, d'intelligence artificielle ou d'automatisation.",
    images: ["/images/Home-Synapse-agency.jpg"],
  },
  alternates: {
    canonical: "https://synapse-agency.fr/contact",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://synapse-agency.fr" },
    { "@type": "ListItem", position: 2, name: "Contact", item: "https://synapse-agency.fr/contact" },
  ],
};

export default function ContactLayout({
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
