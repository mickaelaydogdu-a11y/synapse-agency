import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/layout/ScrollToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Synapse Agency | Solutions IA & Applications",
  description: "Architecte de solutions numériques. Agents IA, solutions sur mesure et applications web & mobile pour transformer votre entreprise.",
  keywords: ["IA", "intelligence artificielle", "agents IA", "chatbot", "applications web", "développement"],
  authors: [{ name: "Synapse Agency" }],
  openGraph: {
    title: "Synapse Agency | Solutions IA & Applications",
    description: "Transformez votre entreprise avec l'intelligence artificielle",
    type: "website",
    locale: "fr_FR",
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
        <ScrollToTop />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
