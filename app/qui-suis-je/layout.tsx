import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Qui suis-je | Mickael Aydogdu, Synapse Agency",
  description:
    "Mickael Aydogdu, fondateur de Synapse Agency à Jouarre (77) : 20 ans de terrain, au service des institutions publiques et des PME.",
  openGraph: {
    title: "Qui suis-je | Mickael Aydogdu, Synapse Agency",
    description:
      "Un parcours de terrain avant la tech : webmaster, enseignant, puis agence, au service des institutions publiques et des PME.",
    type: "profile",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary",
    title: "Qui suis-je | Mickael Aydogdu, Synapse Agency",
    description:
      "Un parcours de terrain avant la tech : webmaster, enseignant, puis agence, au service des institutions publiques et des PME.",
  },
  alternates: {
    canonical: "https://synapse-agency.fr/qui-suis-je",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://synapse-agency.fr" },
    { "@type": "ListItem", position: 2, name: "Qui suis-je", item: "https://synapse-agency.fr/qui-suis-je" },
  ],
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mickael Aydogdu",
  jobTitle: "Développeur IA & Consultant en automatisation",
  url: "https://synapse-agency.fr/qui-suis-je",
  worksFor: {
    "@type": "ProfessionalService",
    name: "Synapse Agency",
    url: "https://synapse-agency.fr",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jouarre",
    postalCode: "77640",
    addressCountry: "FR",
  },
  knowsAbout: [
    "Intelligence artificielle",
    "Agents IA",
    "Automatisation de processus",
    "Développement web",
    "Applications métier sur mesure",
  ],
};

export default function QuiSuisJeLayout({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      {children}
    </>
  );
}
