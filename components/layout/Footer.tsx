import Link from "next/link";
import { Bot, Cpu, Smartphone, Mail, Phone, MapPin } from "lucide-react";

const services = [
  { name: "Agents IA", href: "/agents-ia", icon: Bot },
  { name: "Solutions IA", href: "/solutions-ia", icon: Cpu },
  { name: "Applications", href: "/applications", icon: Smartphone },
];

export function Footer() {
  return (
    <footer className="bg-surface border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="text-xl font-bold text-white">Synapse Agency</span>
            </Link>
            <p className="text-slate-400 max-w-md">
              Architecte de solutions numériques. Nous transformons vos idées en solutions intelligentes qui font gagner du temps et de l&apos;argent.
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
                    className="flex items-center justify-center md:justify-start gap-2 text-slate-400 hover:text-white transition-colors"
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
              <li className="flex items-center justify-center md:justify-start gap-2 text-slate-400">
                <Mail className="w-4 h-4" />
                contact@synapse-agency.fr
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2 text-slate-400">
                <Phone className="w-4 h-4" />
                06 32 54 55 78
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2 text-slate-400">
                <MapPin className="w-4 h-4" />
                21 grande place, 77640 Jouarre
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col-reverse md:flex-row justify-between items-center gap-4 text-center">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Synapse Agency. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <Link href="/confidentialite" className="text-slate-500 hover:text-white text-sm transition-colors">
              Confidentialité
            </Link>
            <Link href="/mentions-legales" className="text-slate-500 hover:text-white text-sm transition-colors">
              Mentions légales
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
