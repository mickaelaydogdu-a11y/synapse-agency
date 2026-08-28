"use client";

import { motion } from "framer-motion";
import { Workflow } from "./Workflow";

const workflows = [
  {
    title: "Traitement des demandes entrantes",
    steps: ["Email reçu", "Analyse IA", "Identification du client", "Création d'une demande", "Notification du commercial"],
  },
  {
    title: "Compte rendu terrain",
    steps: ["Rapport terrain", "Analyse", "Génération du compte rendu", "PDF", "Envoi au client", "Archivage"],
  },
  {
    title: "Qualification commerciale",
    steps: ["Nouveau prospect", "Qualification", "CRM", "Attribution commerciale", "Relance"],
  },
];

export function AutomationSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Automatisez ce qui ne nécessite pas votre expertise.
          </h2>
        </motion.div>

        <div className="space-y-14">
          {workflows.map((workflow, index) => (
            <motion.div
              key={workflow.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-lg font-semibold text-slate-300 text-center mb-6">{workflow.title}</h3>
              <Workflow steps={workflow.steps} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
