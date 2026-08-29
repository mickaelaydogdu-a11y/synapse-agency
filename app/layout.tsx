import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { CookieBanner } from "@/components/layout/CookieBanner";
import { MotionProvider } from "@/components/layout/MotionProvider";

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
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  title: "Synapse Agency | Applications métier & Intelligence Artificielle",
  description: "Nous développons des applications web et mobiles sur mesure qui centralisent vos données, automatisent vos processus et intègrent l'intelligence artificielle là où elle crée réellement de la valeur.",
  keywords: ["application métier sur mesure", "développement application métier", "logiciel métier sur mesure", "intelligence artificielle entreprise", "automatisation entreprise", "agent IA entreprise", "RAG entreprise", "CRM sur mesure"],
  authors: [{ name: "Synapse Agency" }],
  openGraph: {
    title: "Synapse Agency | Applications métier & Intelligence Artificielle",
    description: "Nous développons des applications web et mobiles sur mesure qui centralisent vos données, automatisent vos processus et intègrent l'intelligence artificielle là où elle crée réellement de la valeur.",
    type: "website",
    locale: "fr_FR",
    siteName: "Synapse Agency",
    url: baseUrl,
    images: [
      {
        url: "/images/Home-Synapse-agency.jpg",
        width: 1200,
        height: 630,
        alt: "Synapse Agency - Applications métier & Intelligence Artificielle",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Synapse Agency | Applications métier & Intelligence Artificielle",
    description: "Nous développons des applications web et mobiles sur mesure qui centralisent vos données, automatisent vos processus et intègrent l'intelligence artificielle là où elle crée réellement de la valeur.",
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
  logo: `${baseUrl}/images/Synapse-Agency.png`,
  description:
    "Synapse Agency conçoit des applications métier sur mesure intégrant l'intelligence artificielle et l'automatisation pour centraliser vos données et simplifier vos processus.",
  telephone: "+33632545578",
  email: "contact@synapse-agency.fr",
  address: {
    "@type": "PostalAddress",
    streetAddress: "7 Cour du Haut Vanry",
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
    "Développement d'applications métier sur mesure",
    "Intelligence artificielle et automatisation",
  ],
  priceRange: "€€",
  sameAs: [],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Synapse Agency",
  url: baseUrl,
  inLanguage: "fr-FR",
  publisher: {
    "@type": "ProfessionalService",
    name: "Synapse Agency",
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <MotionProvider>
          <ScrollToTop />
          <Header />
          {children}
          <Footer />
          <CookieBanner />
        </MotionProvider>
      </body>
    </html>
  );
}
