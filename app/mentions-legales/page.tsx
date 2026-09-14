"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export default function MentionsLegales() {
  return (
    <main className="pt-24">
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <Badge className="mb-6">
              <FileText className="w-4 h-4 mr-2" />
              Informations légales
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Mentions légales
            </h1>
            <p className="text-slate-600">
              Dernière mise à jour : Août 2026
            </p>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="prose max-w-none"
          >
            <div className="bg-surface rounded-2xl p-8 border border-slate-200 space-y-8">
              {/* Éditeur */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Éditeur du site</h2>
                <div className="text-slate-600 space-y-2">
                  <p><strong className="text-slate-900">Raison sociale :</strong> Neylio</p>
                  <p><strong className="text-slate-900">Forme juridique :</strong> EURL</p>
                  <p><strong className="text-slate-900">Capital social :</strong> 1 000 €</p>
                  <p><strong className="text-slate-900">Siège social :</strong> 7 rue Vivienne, 75002 Paris, France</p>
                  <p><strong className="text-slate-900">SIREN :</strong> En cours d&apos;attribution</p>
                  <p><strong className="text-slate-900">Immatriculation au RCS :</strong> En cours d&apos;immatriculation</p>
                  <p><strong className="text-slate-900">N° TVA intracommunautaire :</strong> En cours d&apos;attribution</p>
                  <p><strong className="text-slate-900">Email :</strong> contact@synapse-agency.fr</p>
                  <p><strong className="text-slate-900">Téléphone :</strong> 06 32 54 55 78</p>
                  <p><strong className="text-slate-900">Directeur de la publication :</strong> Mickael Aydogdu</p>
                </div>
              </section>

              {/* Hébergeur */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Hébergement</h2>
                <div className="text-slate-600 space-y-4">
                  <p>
                    <strong className="text-slate-900">OVH</strong>, Roubaix, France<br />
                    Site web : <a href="https://www.ovhcloud.com" target="_blank" rel="noopener noreferrer" className="text-primary-light underline underline-offset-2">www.ovhcloud.com</a>
                  </p>
                  <p>
                    <strong className="text-slate-900">Leviia</strong>, Montévrain, France<br />
                    Site web : <a href="https://www.leviia.com" target="_blank" rel="noopener noreferrer" className="text-primary-light underline underline-offset-2">www.leviia.com</a>
                  </p>
                  <p>
                    <strong className="text-slate-900">Hostinger</strong>, Chypre<br />
                    Site web : <a href="https://www.hostinger.fr" target="_blank" rel="noopener noreferrer" className="text-primary-light underline underline-offset-2">www.hostinger.fr</a>
                  </p>
                </div>
              </section>

              {/* Propriété intellectuelle */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Propriété intellectuelle</h2>
                <p className="text-slate-600">
                  L&apos;ensemble du contenu de ce site (textes, images, vidéos, logos, icônes, sons, logiciels, etc.)
                  est la propriété exclusive de Neylio ou de ses partenaires et est protégé par les lois
                  françaises et internationales relatives à la propriété intellectuelle.
                </p>
                <p className="text-slate-600 mt-4">
                  Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des
                  éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation
                  écrite préalable de Neylio.
                </p>
              </section>

              {/* Responsabilité */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Limitation de responsabilité</h2>
                <p className="text-slate-600">
                  Neylio s&apos;efforce de fournir sur ce site des informations aussi précises que possible.
                  Toutefois, elle ne pourra être tenue responsable des omissions, des inexactitudes et des carences
                  dans la mise à jour, qu&apos;elles soient de son fait ou du fait des tiers partenaires qui lui
                  fournissent ces informations.
                </p>
                <p className="text-slate-600 mt-4">
                  Les liens hypertextes mis en place dans le cadre du présent site internet en direction d&apos;autres
                  ressources présentes sur le réseau Internet ne sauraient engager la responsabilité de Neylio.
                </p>
              </section>

              {/* Cookies */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Cookies et données personnelles</h2>
                <p className="text-slate-600 mb-4">
                  Le site dépose un seul traceur non essentiel : Google Analytics, utilisé pour mesurer
                  l&apos;audience du site. Il n&apos;est chargé qu&apos;après votre consentement explicite via la
                  bannière de cookies ; votre choix est mémorisé localement dans votre navigateur (stockage
                  technique, pas un cookie tiers).
                </p>

                <p className="text-slate-600 mt-4">
                  Vous pouvez modifier votre choix à tout moment via le lien « Gérer les cookies » en pied de page,
                  ou en supprimant les données de votre navigateur. Pour plus d&apos;informations, consultez notre{" "}
                  <a href="/confidentialite" className="text-primary-light underline underline-offset-2">politique de confidentialité</a>.
                </p>
              </section>

              {/* Droit applicable */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Droit applicable</h2>
                <p className="text-slate-600">
                  Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux
                  français seront seuls compétents.
                </p>
              </section>

              {/* Contact */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Contact</h2>
                <p className="text-slate-600">
                  Pour toute question relative aux présentes mentions légales, vous pouvez nous contacter à
                  l&apos;adresse suivante : <a href="mailto:contact@synapse-agency.fr" className="text-primary-light underline underline-offset-2">contact@synapse-agency.fr</a>
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
