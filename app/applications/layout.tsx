import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Applications Web & Mobile sur mesure | Synapse Agency",
  description:
    "Développement d'applications web et mobiles sur mesure : CRM, portails clients, outils métier et plateformes collaboratives pour digitaliser votre entreprise.",
  openGraph: {
    title: "Applications Web & Mobile sur mesure | Synapse Agency",
    description:
      "Applications web et mobiles sur mesure pour digitaliser vos processus et booster votre productivité.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function ApplicationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
