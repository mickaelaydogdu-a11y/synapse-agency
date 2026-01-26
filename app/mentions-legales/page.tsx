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
            <p className="text-slate-400">
              Dernière mise à jour : Janvier 2025
            </p>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="prose prose-invert max-w-none"
          >
            <div className="bg-surface rounded-2xl p-8 border border-white/5 space-y-8">
              {/* Éditeur */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">1. Éditeur du site</h2>
                <div className="text-slate-300 space-y-2">
                  <p><strong className="text-white">Raison sociale :</strong> Synapse Agency</p>
                  <p><strong className="text-white">Forme juridique :</strong> Entreprise individuelle</p>
                  <p><strong className="text-white">Siège social :</strong> 21 grande place, 77640 Jouarre, France</p>
                  <p><strong className="text-white">SIRET :</strong> En cours d&apos;attribution</p>
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
                <h2 className="text-2xl font-bold text-white mb-4">5. Cookies</h2>
                <p className="text-slate-300">
                  Le site peut collecter automatiquement des informations standards. Toutes les informations
                  collectées indirectement ne seront utilisées que pour suivre le volume, le type et la configuration
                  du trafic utilisant ce site, pour en développer la conception et l&apos;agencement et à d&apos;autres fins
                  administratives et de planification et plus généralement pour améliorer le service que nous vous offrons.
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
