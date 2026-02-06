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
};

export default function ConfidentialiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
