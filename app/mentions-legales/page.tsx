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
              Dernière mise à jour : Janvier 2025
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
                  <p><strong className="text-slate-900">Raison sociale :</strong> Synapse Agency</p>
                  <p><strong className="text-slate-900">Forme juridique :</strong> Entreprise individuelle</p>
                  <p><strong className="text-slate-900">Siège social :</strong> 21 grande place, 77640 Jouarre, France</p>
                  <p><strong className="text-slate-900">SIRET :</strong> En cours d&apos;attribution</p>
                  <p><strong className="text-slate-900">Email :</strong> contact@synapse-agency.fr</p>
                  <p><strong className="text-slate-900">Téléphone :</strong> 06 32 54 55 78</p>
                  <p><strong className="text-slate-900">Directeur de la publication :</strong> Mickael Aydogdu</p>
                </div>
              </section>

              {/* Hébergeur */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Hébergement</h2>
                <div className="text-slate-600 space-y-2">
                  <p><strong className="text-slate-900">Hébergeur :</strong> Leviia</p>
                  <p><strong className="text-slate-900">Site web :</strong> www.leviia.com</p>
                </div>
              </section>

              {/* Propriété intellectuelle */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Propriété intellectuelle</h2>
                <p className="text-slate-600">
                  L&apos;ensemble du contenu de ce site (textes, images, vidéos, logos, icônes, sons, logiciels, etc.)
                  est la propriété exclusive de Synapse Agency ou de ses partenaires et est protégé par les lois
                  françaises et internationales relatives à la propriété intellectuelle.
                </p>
                <p className="text-slate-600 mt-4">
                  Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des
                  éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation
                  écrite préalable de Synapse Agency.
                </p>
              </section>

              {/* Responsabilité */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Limitation de responsabilité</h2>
                <p className="text-slate-600">
                  Synapse Agency s&apos;efforce de fournir sur ce site des informations aussi précises que possible.
                  Toutefois, elle ne pourra être tenue responsable des omissions, des inexactitudes et des carences
                  dans la mise à jour, qu&apos;elles soient de son fait ou du fait des tiers partenaires qui lui
                  fournissent ces informations.
                </p>
                <p className="text-slate-600 mt-4">
                  Les liens hypertextes mis en place dans le cadre du présent site internet en direction d&apos;autres
                  ressources présentes sur le réseau Internet ne sauraient engager la responsabilité de Synapse Agency.
                </p>
              </section>

              {/* Cookies */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Cookies et données personnelles</h2>
                <p className="text-slate-600 mb-4">
                  Le site utilise des cookies pour améliorer votre expérience de navigation. Un cookie est un petit
                  fichier texte stocké sur votre ordinateur lors de votre visite sur notre site.
                </p>

                <h3 className="text-lg font-semibold text-slate-900 mb-3 mt-4">Types de cookies utilisés :</h3>
                <ul className="text-slate-600 space-y-2 list-disc list-inside">
                  <li><strong className="text-slate-900">Cookies essentiels :</strong> Nécessaires au fonctionnement du site (mémorisation de votre choix de cookies)</li>
                  <li><strong className="text-slate-900">Cookies de performance :</strong> Nous permettent d&apos;analyser l&apos;utilisation du site pour améliorer votre expérience</li>
                  <li><strong className="text-slate-900">Cookies fonctionnels :</strong> Permettent de mémoriser vos préférences et paramètres</li>
                </ul>

                <p className="text-slate-600 mt-4">
                  Vous pouvez à tout moment modifier vos préférences de cookies en supprimant les données de votre
                  navigateur. Pour plus d&apos;informations, consultez notre{" "}
                  <a href="/confidentialite" className="text-primary hover:underline">politique de confidentialité</a>.
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
                  l&apos;adresse suivante : <a href="mailto:contact@synapse-agency.fr" className="text-primary hover:underline">contact@synapse-agency.fr</a>
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
