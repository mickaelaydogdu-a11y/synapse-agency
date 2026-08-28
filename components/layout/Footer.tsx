import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { mainNav, ctaLabel, ctaHref } from "@/lib/navigation";
import { CookiePreferencesButton } from "@/components/layout/CookieBanner";

const expertises = [
  "CRM sur mesure",
  "Applications terrain",
  "Automatisation",
  "Intelligence artificielle",
  "RAG",
  "Agents IA",
  "Intégrations API",
];

export function Footer() {
  return (
    <footer className="bg-surface border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center justify-center md:justify-start mb-4">
              <Image
                src="/images/Logo-SynapseAgency.png"
                alt="Synapse Agency"
                width={300}
                height={300}
                className="h-16 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-slate-300 max-w-md">
              Applications métier sur mesure, intelligence artificielle et automatisation : nous concevons des outils qui s&apos;adaptent à votre entreprise, pas l&apos;inverse.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-3">
              {mainNav.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="flex items-center justify-center md:justify-start gap-2 text-slate-300 hover:text-primary-light transition-colors"
                  >
                    <item.icon className="w-4 h-4" />
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={ctaHref}
                  className="text-slate-300 hover:text-primary-light transition-colors"
                >
                  {ctaLabel}
                </Link>
              </li>
            </ul>
          </div>

          {/* Expertises */}
          <div>
            <h3 className="text-white font-semibold mb-4">Expertises</h3>
            <ul className="space-y-3">
              {expertises.map((item) => (
                <li key={item} className="text-slate-300">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact */}
        <div className="mt-12 pt-12 border-t border-white/10 text-center md:text-left">
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <ul className="flex flex-col md:flex-row flex-wrap gap-4 md:gap-10">
            <li className="flex items-center justify-center md:justify-start gap-2 text-slate-300">
              <Mail className="w-4 h-4" />
              contact@synapse-agency.fr
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2 text-slate-300">
              <Phone className="w-4 h-4" />
              06 32 54 55 78
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2 text-slate-300">
              <MapPin className="w-4 h-4" />
              Jouarre - Seine-et-Marne
            </li>
          </ul>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col-reverse md:flex-row justify-between items-center gap-4 text-center">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Synapse Agency. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <Link href="/confidentialite" className="text-slate-400 hover:text-primary-light text-sm transition-colors">
              Confidentialité
            </Link>
            <Link href="/mentions-legales" className="text-slate-400 hover:text-primary-light text-sm transition-colors">
              Mentions légales
            </Link>
            <CookiePreferencesButton />
          </div>
        </div>
      </div>
    </footer>
  );
}
