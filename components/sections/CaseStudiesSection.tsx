"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const caseStudies = [
  {
    title: "Application de gestion commerciale",
    problem: "Les prospects, devis et documents sont dispersés dans plusieurs outils.",
    solution: "Prospects, opportunités, devis, documents, relances, reporting centralisés dans une application unique.",
    ai: "Analyse des demandes, résumé des échanges, génération assistée, qualification.",
    goal: "Processus centralisé, meilleure visibilité, suivi commercial simplifié.",
  },
  {
    title: "Application de suivi de chantier",
    problem: "Le suivi des chantiers repose sur des tableurs et des échanges dispersés entre le bureau et le terrain.",
    solution: "Affaires, chantiers, équipes, planning et rapports centralisés, accessibles depuis le terrain.",
    ai: "Génération automatique des comptes rendus, extraction des informations depuis les rapports terrain.",
    goal: "Visibilité en temps réel sur l'avancement, moins de ressaisie entre terrain et bureau.",
  },
  {
    title: "Portail client & gestion documentaire",
    problem: "Les clients réclament le statut de leurs dossiers par téléphone ou email faute d'accès direct.",
    solution: "Portail sécurisé centralisant dossiers, documents, factures et échanges.",
    ai: "Classement automatique des documents, recherche intelligente.",
    goal: "Moins de sollicitations téléphoniques, autonomie accrue des clients.",
  },
];

export function CaseStudiesSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Des applications conçues pour répondre à de vrais problèmes métier.
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto">
            Exemples de projets types — nos premières études de cas client seront publiées ici dès qu&apos;elles seront disponibles.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card hover={false} className="h-full flex flex-col">
                <Badge variant="secondary" className="mb-4 self-start">Exemple de projet type</Badge>
                <h3 className="text-lg font-bold text-white mb-4">{study.title}</h3>
                <div className="space-y-3 text-sm flex-1">
                  <div>
                    <p className="text-slate-500 font-mono text-xs uppercase mb-1">Problème</p>
                    <p className="text-slate-300">{study.problem}</p>
                  </div>
                  <div>
                    <p className="text-slate-500 font-mono text-xs uppercase mb-1">Solution</p>
                    <p className="text-slate-300">{study.solution}</p>
                  </div>
                  <div>
                    <p className="text-slate-500 font-mono text-xs uppercase mb-1">Intelligence artificielle</p>
                    <p className="text-slate-300">{study.ai}</p>
                  </div>
                  <div>
                    <p className="text-slate-500 font-mono text-xs uppercase mb-1">Objectif</p>
                    <p className="text-slate-300">{study.goal}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
