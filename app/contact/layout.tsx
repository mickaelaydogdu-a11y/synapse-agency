import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contactez-nous | Synapse Agency",
  description:
    "Contactez Synapse Agency pour discuter de votre projet digital : solutions IA, applications web & mobile ou production visuelle. Réponse sous 24h.",
  openGraph: {
    title: "Contactez Synapse Agency",
    description:
      "Discutons de votre projet digital. Solutions IA, applications et production visuelle sur mesure.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
