"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export default function Confidentialite() {
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
            <Badge variant="secondary" className="mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Protection des données
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Politique de confidentialité
            </h1>
            <p className="text-slate-600">
              Dernière mise à jour : Février 2026
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
              {/* Introduction */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
                <p className="text-slate-600">
                  Synapse Agency s&apos;engage à protéger la vie privée des utilisateurs de son site internet
                  www.synapse-agency.fr. La présente politique de confidentialité décrit les types d&apos;informations
                  que nous collectons, comment nous les utilisons, et les mesures que nous prenons pour les protéger.
                </p>
                <p className="text-slate-600 mt-4">
                  Cette politique est conforme au Règlement Général sur la Protection des Données (RGPD) et à la
                  loi Informatique et Libertés.
                </p>
              </section>

              {/* Données collectées */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Données collectées</h2>
                <p className="text-slate-600 mb-4">Nous collectons les données suivantes :</p>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                  <li><strong className="text-slate-900">Données d&apos;identification :</strong> nom, prénom, adresse email, numéro de téléphone</li>
                  <li><strong className="text-slate-900">Données professionnelles :</strong> nom de l&apos;entreprise, fonction</li>
                  <li><strong className="text-slate-900">Données de navigation :</strong> adresse IP, type de navigateur, pages visitées</li>
                  <li><strong className="text-slate-900">Données de communication :</strong> messages envoyés via le formulaire de contact</li>
                </ul>
              </section>

              {/* Finalités */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Finalités du traitement</h2>
                <p className="text-slate-600 mb-4">Vos données sont collectées pour les finalités suivantes :</p>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                  <li>Répondre à vos demandes de contact et de devis</li>
                  <li>Vous fournir les services demandés</li>
                  <li>Améliorer notre site et nos services</li>
                  <li>Vous envoyer des informations commerciales (avec votre consentement)</li>
                  <li>Respecter nos obligations légales</li>
                </ul>
              </section>

              {/* Base légale */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Base légale</h2>
                <p className="text-slate-600">
                  Le traitement de vos données repose sur :
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-2 mt-4">
                  <li><strong className="text-slate-900">Votre consentement</strong> pour l&apos;envoi de communications commerciales</li>
                  <li><strong className="text-slate-900">L&apos;exécution d&apos;un contrat</strong> pour la fourniture de nos services</li>
                  <li><strong className="text-slate-900">Notre intérêt légitime</strong> pour l&apos;amélioration de nos services</li>
                  <li><strong className="text-slate-900">Nos obligations légales</strong> pour la conservation de certaines données</li>
                </ul>
              </section>

              {/* Conservation */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Durée de conservation</h2>
                <p className="text-slate-600">
                  Vos données sont conservées pendant la durée nécessaire aux finalités pour lesquelles elles ont
                  été collectées :
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-2 mt-4">
                  <li><strong className="text-slate-900">Données de contact :</strong> 3 ans après le dernier contact</li>
                  <li><strong className="text-slate-900">Données clients :</strong> durée de la relation contractuelle + 5 ans</li>
                  <li><strong className="text-slate-900">Données de navigation :</strong> 13 mois maximum</li>
                </ul>
              </section>

              {/* Droits */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Vos droits</h2>
                <p className="text-slate-600 mb-4">
                  Conformément au RGPD, vous disposez des droits suivants :
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                  <li><strong className="text-slate-900">Droit d&apos;accès :</strong> obtenir une copie de vos données</li>
                  <li><strong className="text-slate-900">Droit de rectification :</strong> corriger vos données inexactes</li>
                  <li><strong className="text-slate-900">Droit à l&apos;effacement :</strong> demander la suppression de vos données</li>
                  <li><strong className="text-slate-900">Droit à la limitation :</strong> restreindre le traitement de vos données</li>
                  <li><strong className="text-slate-900">Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
                  <li><strong className="text-slate-900">Droit d&apos;opposition :</strong> vous opposer au traitement de vos données</li>
                </ul>
                <p className="text-slate-600 mt-4">
                  Pour exercer ces droits, contactez-nous à : <a href="mailto:contact@synapse-agency.fr" className="text-primary hover:underline">contact@synapse-agency.fr</a>
                </p>
              </section>

              {/* Sécurité */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Sécurité</h2>
                <p className="text-slate-600">
                  Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger
                  vos données contre tout accès non autorisé, modification, divulgation ou destruction.
                  Notre site utilise le protocole HTTPS pour sécuriser les échanges de données.
                </p>
              </section>

              {/* Cookies */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Cookies et technologies similaires</h2>
                <p className="text-slate-600 mb-4">
                  Notre site utilise des cookies pour améliorer votre expérience de navigation. Les cookies sont
                  de petits fichiers texte stockés sur votre appareil lors de votre visite. Ils permettent au site
                  de mémoriser vos actions et préférences.
                </p>

                <h3 className="text-lg font-semibold text-slate-900 mb-3 mt-6">Types de cookies utilisés :</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-slate-900 font-medium mb-2">🔒 Cookies essentiels (obligatoires)</h4>
                    <p className="text-slate-600 text-sm">
                      Ces cookies sont nécessaires au fonctionnement du site. Ils vous permettent de naviguer sur
                      le site et d&apos;utiliser ses fonctionnalités. Ils incluent le cookie de consentement qui mémorise
                      votre choix concernant les cookies.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-slate-900 font-medium mb-2">📊 Cookies de performance et analytiques</h4>
                    <p className="text-slate-600 text-sm">
                      Ces cookies nous aident à comprendre comment les visiteurs interagissent avec notre site en
                      collectant et analysant des informations de manière anonyme. Ils nous permettent d&apos;améliorer
                      le fonctionnement du site.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-slate-900 font-medium mb-2">⚙️ Cookies fonctionnels</h4>
                    <p className="text-slate-600 text-sm">
                      Ces cookies permettent au site de mémoriser vos choix (comme votre langue ou votre région)
                      pour vous offrir une expérience plus personnalisée.
                    </p>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-slate-900 mb-3 mt-6">Gestion de vos préférences :</h3>
                <p className="text-slate-600">
                  Lors de votre première visite, une bannière vous demande votre consentement pour l&apos;utilisation
                  des cookies non essentiels. Vous pouvez à tout moment :
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-2 mt-2">
                  <li>Modifier vos préférences en supprimant les cookies de votre navigateur</li>
                  <li>Configurer votre navigateur pour bloquer les cookies</li>
                  <li>Retirer votre consentement en effaçant les données de navigation</li>
                </ul>

                <p className="text-slate-600 mt-4 text-sm italic">
                  Note : Le blocage de certains cookies peut affecter votre expérience de navigation et limiter
                  l&apos;accès à certaines fonctionnalités du site.
                </p>
              </section>

              {/* Transferts */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Transferts de données</h2>
                <p className="text-slate-600">
                  Vos données sont hébergées au sein de l&apos;Union Européenne. En cas de transfert vers un pays
                  tiers, nous nous assurons que des garanties appropriées sont mises en place conformément au RGPD.
                </p>
              </section>

              {/* Contact */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Contact</h2>
                <p className="text-slate-600">
                  Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits,
                  vous pouvez nous contacter :
                </p>
                <div className="mt-4 text-slate-600">
                  <p><strong className="text-slate-900">Email :</strong> contact@synapse-agency.fr</p>
                  <p><strong className="text-slate-900">Téléphone :</strong> 06 32 54 55 78</p>
                  <p><strong className="text-slate-900">Adresse :</strong> 21 grande place, 77640 Jouarre, France</p>
                </div>
                <p className="text-slate-600 mt-4">
                  Vous pouvez également introduire une réclamation auprès de la CNIL (Commission Nationale de
                  l&apos;Informatique et des Libertés) : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.cnil.fr</a>
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
