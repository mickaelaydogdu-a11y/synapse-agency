"use client";

import { motion } from "framer-motion";
import { Workflow } from "./Workflow";

const workflow = {
  title: "Traitement des demandes entrantes",
  steps: ["Email reçu", "Analyse IA", "Identification du client", "Création d'une demande", "Notification du commercial"],
};

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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold text-slate-300 text-center mb-6">{workflow.title}</h3>
          <Workflow steps={workflow.steps} />
        </motion.div>
      </div>
    </section>
  );
}
