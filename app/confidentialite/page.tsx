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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Politique de confidentialité
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
              {/* Introduction */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
                <p className="text-slate-300">
                  Synapse Agency s&apos;engage à protéger la vie privée des utilisateurs de son site internet
                  www.synapse-agency.fr. La présente politique de confidentialité décrit les types d&apos;informations
                  que nous collectons, comment nous les utilisons, et les mesures que nous prenons pour les protéger.
                </p>
                <p className="text-slate-300 mt-4">
                  Cette politique est conforme au Règlement Général sur la Protection des Données (RGPD) et à la
                  loi Informatique et Libertés.
                </p>
              </section>

              {/* Données collectées */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. Données collectées</h2>
                <p className="text-slate-300 mb-4">Nous collectons les données suivantes :</p>
                <ul className="list-disc list-inside text-slate-300 space-y-2">
                  <li><strong className="text-white">Données d&apos;identification :</strong> nom, prénom, adresse email, numéro de téléphone</li>
                  <li><strong className="text-white">Données professionnelles :</strong> nom de l&apos;entreprise, fonction</li>
                  <li><strong className="text-white">Données de navigation :</strong> adresse IP, type de navigateur, pages visitées</li>
                  <li><strong className="text-white">Données de communication :</strong> messages envoyés via le formulaire de contact</li>
                </ul>
              </section>

              {/* Finalités */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. Finalités du traitement</h2>
                <p className="text-slate-300 mb-4">Vos données sont collectées pour les finalités suivantes :</p>
                <ul className="list-disc list-inside text-slate-300 space-y-2">
                  <li>Répondre à vos demandes de contact et de devis</li>
                  <li>Vous fournir les services demandés</li>
                  <li>Améliorer notre site et nos services</li>
                  <li>Vous envoyer des informations commerciales (avec votre consentement)</li>
                  <li>Respecter nos obligations légales</li>
                </ul>
              </section>

              {/* Base légale */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. Base légale</h2>
                <p className="text-slate-300">
                  Le traitement de vos données repose sur :
                </p>
                <ul className="list-disc list-inside text-slate-300 space-y-2 mt-4">
                  <li><strong className="text-white">Votre consentement</strong> pour l&apos;envoi de communications commerciales</li>
                  <li><strong className="text-white">L&apos;exécution d&apos;un contrat</strong> pour la fourniture de nos services</li>
                  <li><strong className="text-white">Notre intérêt légitime</strong> pour l&apos;amélioration de nos services</li>
                  <li><strong className="text-white">Nos obligations légales</strong> pour la conservation de certaines données</li>
                </ul>
              </section>

              {/* Conservation */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. Durée de conservation</h2>
                <p className="text-slate-300">
                  Vos données sont conservées pendant la durée nécessaire aux finalités pour lesquelles elles ont
                  été collectées :
                </p>
                <ul className="list-disc list-inside text-slate-300 space-y-2 mt-4">
                  <li><strong className="text-white">Données de contact :</strong> 3 ans après le dernier contact</li>
                  <li><strong className="text-white">Données clients :</strong> durée de la relation contractuelle + 5 ans</li>
                  <li><strong className="text-white">Données de navigation :</strong> 13 mois maximum</li>
                </ul>
              </section>

              {/* Droits */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">6. Vos droits</h2>
                <p className="text-slate-300 mb-4">
                  Conformément au RGPD, vous disposez des droits suivants :
                </p>
                <ul className="list-disc list-inside text-slate-300 space-y-2">
                  <li><strong className="text-white">Droit d&apos;accès :</strong> obtenir une copie de vos données</li>
                  <li><strong className="text-white">Droit de rectification :</strong> corriger vos données inexactes</li>
                  <li><strong className="text-white">Droit à l&apos;effacement :</strong> demander la suppression de vos données</li>
                  <li><strong className="text-white">Droit à la limitation :</strong> restreindre le traitement de vos données</li>
                  <li><strong className="text-white">Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
                  <li><strong className="text-white">Droit d&apos;opposition :</strong> vous opposer au traitement de vos données</li>
                </ul>
                <p className="text-slate-300 mt-4">
                  Pour exercer ces droits, contactez-nous à : <a href="mailto:contact@synapse.agency" className="text-primary hover:underline">contact@synapse.agency</a>
                </p>
              </section>

              {/* Sécurité */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">7. Sécurité</h2>
                <p className="text-slate-300">
                  Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger
                  vos données contre tout accès non autorisé, modification, divulgation ou destruction.
                  Notre site utilise le protocole HTTPS pour sécuriser les échanges de données.
                </p>
              </section>

              {/* Cookies */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">8. Cookies</h2>
                <p className="text-slate-300">
                  Notre site utilise des cookies pour améliorer votre expérience de navigation. Les cookies sont
                  de petits fichiers texte stockés sur votre appareil. Vous pouvez configurer votre navigateur
                  pour refuser les cookies, mais certaines fonctionnalités du site pourraient ne plus être disponibles.
                </p>
                <p className="text-slate-300 mt-4">Types de cookies utilisés :</p>
                <ul className="list-disc list-inside text-slate-300 space-y-2 mt-2">
                  <li><strong className="text-white">Cookies essentiels :</strong> nécessaires au fonctionnement du site</li>
                  <li><strong className="text-white">Cookies analytiques :</strong> pour comprendre l&apos;utilisation du site</li>
                </ul>
              </section>

              {/* Transferts */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">9. Transferts de données</h2>
                <p className="text-slate-300">
                  Vos données sont hébergées au sein de l&apos;Union Européenne. En cas de transfert vers un pays
                  tiers, nous nous assurons que des garanties appropriées sont mises en place conformément au RGPD.
                </p>
              </section>

              {/* Contact */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">10. Contact</h2>
                <p className="text-slate-300">
                  Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits,
                  vous pouvez nous contacter :
                </p>
                <div className="mt-4 text-slate-300">
                  <p><strong className="text-white">Email :</strong> contact@synapse.agency</p>
                  <p><strong className="text-white">Adresse :</strong> [Adresse à compléter], France</p>
                </div>
                <p className="text-slate-300 mt-4">
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
