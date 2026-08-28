"use client";

import { motion } from "framer-motion";
import { Workflow } from "./Workflow";

const questions = [
  "Quels dossiers sont actuellement en retard ?",
  "Résume-moi les échanges avec le client Dupont.",
  "Quels devis supérieurs à 50 000 € sont toujours en attente ?",
  "Prépare-moi le compte rendu des interventions de cette semaine.",
];

export function ApplicationAISection() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            L&apos;application métier <span className="gradient-text">nouvelle génération</span>.
          </h2>
        </motion.div>

        <div className="mb-20">
          <Workflow
            steps={["Données entreprise", "Application Synapse", "Intelligence artificielle", "Automatisation", "Action / décision"]}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-white text-center mb-8">
            Exemple : votre assistant métier
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {questions.map((question) => (
              <div
                key={question}
                className="px-5 py-4 rounded-xl bg-background border border-white/10 text-slate-300 text-sm italic"
              >
                &ldquo;{question}&rdquo;
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
