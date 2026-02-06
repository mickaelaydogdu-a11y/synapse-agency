import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { CookieBanner } from "@/components/layout/CookieBanner";

const inter = Inter({ subsets: ["latin"] });

const baseUrl = "https://synapse-agency.fr";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  verification: {
    google: [
      "h8il5Sz9FtFiDmYzH2_MDul5E7qphOKUAS5v_lcB_uw",
      "S1b65yBEHM1Lf5Y470it7ROMIsmdwZrBhlv4y25PjtU",
    ],
  },
  title: "Synapse Agency | Solutions IA & Applications",
  description: "Architecte de solutions numériques. Agents IA, solutions sur mesure et applications web & mobile pour transformer votre entreprise.",
  keywords: ["IA", "intelligence artificielle", "agents IA", "chatbot", "applications web", "développement", "agence digitale", "automatisation"],
  authors: [{ name: "Synapse Agency" }],
  openGraph: {
    title: "Synapse Agency | Solutions IA & Applications",
    description: "Transformez votre entreprise avec l'intelligence artificielle",
    type: "website",
    locale: "fr_FR",
    siteName: "Synapse Agency",
    url: baseUrl,
    images: [
      {
        url: "/images/Home-Synapse-agency.jpg",
        width: 1200,
        height: 630,
        alt: "Synapse Agency - Agence digitale IA & Applications",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Synapse Agency | Solutions IA & Applications",
    description: "Transformez votre entreprise avec l'intelligence artificielle",
    images: ["/images/Home-Synapse-agency.jpg"],
  },
  alternates: {
    canonical: baseUrl,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Synapse Agency",
  url: baseUrl,
  logo: `${baseUrl}/images/Home-Synapse-agency.jpg`,
  description:
    "Agence digitale spécialisée en intelligence artificielle, développement d'applications web & mobile et production visuelle.",
  telephone: "+33632545578",
  email: "contact@synapse-agency.fr",
  address: {
    "@type": "PostalAddress",
    streetAddress: "21 grande place",
    addressLocality: "Jouarre",
    postalCode: "77640",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 48.9267,
    longitude: 3.1306,
  },
  areaServed: {
    "@type": "Country",
    name: "France",
  },
  serviceType: [
    "Solutions d'intelligence artificielle",
    "Développement d'applications web et mobile",
    "Production visuelle professionnelle",
  ],
  priceRange: "€€",
  sameAs: [],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ScrollToTop />
        <Header />
        {children}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
