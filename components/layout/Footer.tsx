import Link from "next/link";
import Image from "next/image";
import { Cpu, Smartphone, Camera, Mail, Phone, MapPin } from "lucide-react";

const services = [
  { name: "Solutions IA", href: "/solutions-ia", icon: Cpu },
  { name: "Applications", href: "/applications", icon: Smartphone },
  { name: "Production Visuelle", href: "/production-visuelle", icon: Camera },
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
              Le monde change vite, les technologies redéfinissent les règles du jeu. Nous vous accompagnons pour transformer vos idées en solutions digitales performantes et garder une longueur d&apos;avance.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="flex items-center justify-center md:justify-start gap-2 text-slate-300 hover:text-primary transition-colors"
                  >
                    <service.icon className="w-4 h-4" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
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
                21 grande place, 77640 Jouarre
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col-reverse md:flex-row justify-between items-center gap-4 text-center">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Synapse Agency. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <Link href="/qui-suis-je" className="text-slate-500 hover:text-primary text-sm transition-colors">
              Qui suis-je
            </Link>
            <Link href="/confidentialite" className="text-slate-500 hover:text-primary text-sm transition-colors">
              Confidentialité
            </Link>
            <Link href="/mentions-legales" className="text-slate-500 hover:text-primary text-sm transition-colors">
              Mentions légales
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
