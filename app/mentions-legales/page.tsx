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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Mentions légales
            </h1>
            <p className="text-slate-300">
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
            <div className="bg-surface rounded-2xl p-8 border border-white/10 space-y-8">
              {/* Éditeur */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">1. Éditeur du site</h2>
                <div className="text-slate-300 space-y-2">
                  <p><strong className="text-white">Raison sociale :</strong> Synapse Agency</p>
                  <p><strong className="text-white">Forme juridique :</strong> Entreprise individuelle</p>
                  <p><strong className="text-white">Siège social :</strong> 7 Cour du Haut Vanry, 77640 Jouarre, France</p>
                  <p><strong className="text-white">SIREN :</strong> 502299142</p>
                  <p><strong className="text-white">Immatriculation au RCS :</strong> R.C.S. Meaux</p>
                  <p><strong className="text-white">Email :</strong> contact@synapse-agency.fr</p>
                  <p><strong className="text-white">Téléphone :</strong> 06 32 54 55 78</p>
                  <p><strong className="text-white">Directeur de la publication :</strong> Mickael Aydogdu</p>
                </div>
              </section>

              {/* Hébergeur */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. Hébergement</h2>
                <div className="text-slate-300 space-y-2">
                  <p><strong className="text-white">Hébergeur :</strong> Leviia</p>
                  <p><strong className="text-white">Site web :</strong> www.leviia.com</p>
                </div>
              </section>

              {/* Propriété intellectuelle */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. Propriété intellectuelle</h2>
                <p className="text-slate-300">
                  L&apos;ensemble du contenu de ce site (textes, images, vidéos, logos, icônes, sons, logiciels, etc.)
                  est la propriété exclusive de Synapse Agency ou de ses partenaires et est protégé par les lois
                  françaises et internationales relatives à la propriété intellectuelle.
                </p>
                <p className="text-slate-300 mt-4">
                  Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des
                  éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation
                  écrite préalable de Synapse Agency.
                </p>
              </section>

              {/* Responsabilité */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. Limitation de responsabilité</h2>
                <p className="text-slate-300">
                  Synapse Agency s&apos;efforce de fournir sur ce site des informations aussi précises que possible.
                  Toutefois, elle ne pourra être tenue responsable des omissions, des inexactitudes et des carences
                  dans la mise à jour, qu&apos;elles soient de son fait ou du fait des tiers partenaires qui lui
                  fournissent ces informations.
                </p>
                <p className="text-slate-300 mt-4">
                  Les liens hypertextes mis en place dans le cadre du présent site internet en direction d&apos;autres
                  ressources présentes sur le réseau Internet ne sauraient engager la responsabilité de Synapse Agency.
                </p>
              </section>

              {/* Cookies */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. Cookies et données personnelles</h2>
                <p className="text-slate-300 mb-4">
                  Le site dépose un seul traceur non essentiel : Google Analytics, utilisé pour mesurer
                  l&apos;audience du site. Il n&apos;est chargé qu&apos;après votre consentement explicite via la
                  bannière de cookies ; votre choix est mémorisé localement dans votre navigateur (stockage
                  technique, pas un cookie tiers).
                </p>

                <p className="text-slate-300 mt-4">
                  Vous pouvez modifier votre choix à tout moment via le lien « Gérer les cookies » en pied de page,
                  ou en supprimant les données de votre navigateur. Pour plus d&apos;informations, consultez notre{" "}
                  <a href="/confidentialite" className="text-primary-light hover:underline">politique de confidentialité</a>.
                </p>
              </section>

              {/* Droit applicable */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">6. Droit applicable</h2>
                <p className="text-slate-300">
                  Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux
                  français seront seuls compétents.
                </p>
              </section>

              {/* Contact */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">7. Contact</h2>
                <p className="text-slate-300">
                  Pour toute question relative aux présentes mentions légales, vous pouvez nous contacter à
                  l&apos;adresse suivante : <a href="mailto:contact@synapse-agency.fr" className="text-primary-light hover:underline">contact@synapse-agency.fr</a>
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
