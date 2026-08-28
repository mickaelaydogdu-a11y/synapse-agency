"use client";

import { motion } from "framer-motion";

const steps = [
  { number: "01", title: "Comprendre", description: "Analyse du métier, des utilisateurs et des problématiques." },
  { number: "02", title: "Simplifier", description: "Identifier doublons, tâches manuelles, étapes inutiles et informations dispersées." },
  { number: "03", title: "Concevoir", description: "Définir UX, fonctionnalités, données, workflows et permissions." },
  { number: "04", title: "Développer", description: "Création progressive de l'application, en méthode agile." },
  { number: "05", title: "Automatiser", description: "Ajouter intelligence artificielle, automatisations et intégrations." },
];

export function ProcessSection() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Du processus métier à l&apos;application.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <div className="text-3xl font-bold text-primary-light/40 font-mono mb-3">{step.number}</div>
              <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
              <p className="text-slate-300 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
