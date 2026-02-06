import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions IA sur mesure | Agents IA & Automatisation | Synapse Agency",
  description:
    "Automatisez vos processus métier avec nos solutions d'intelligence artificielle : agents téléphoniques, extraction de données, génération de contenu et chatbots sur mesure.",
  openGraph: {
    title: "Solutions IA sur mesure | Synapse Agency",
    description:
      "Agents IA, extraction de données, automatisation : des solutions d'intelligence artificielle adaptées à votre entreprise.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function SolutionsIALayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
