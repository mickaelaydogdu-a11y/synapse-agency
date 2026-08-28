"use client";

import { motion } from "framer-motion";
import { KeyRound, Lock, ScrollText, ShieldAlert, UserCheck } from "lucide-react";

const points = [
  {
    icon: KeyRound,
    title: "Gestion des accès",
    description: "Chaque utilisateur accède uniquement aux informations correspondant à son rôle.",
  },
  {
    icon: Lock,
    title: "Sécurité des données",
    description: "Authentification, autorisations, chiffrement, journalisation et sauvegardes.",
  },
  {
    icon: ScrollText,
    title: "RGPD",
    description: "Les applications sont pensées pour faciliter une gestion conforme et maîtrisée des données personnelles.",
  },
  {
    icon: ShieldAlert,
    title: "IA contrôlée",
    description: "Les assistants et agents IA disposent uniquement des informations et outils nécessaires à leur mission.",
  },
  {
    icon: UserCheck,
    title: "Validation humaine",
    description: "Les opérations critiques peuvent être soumises à validation avant exécution.",
  },
];

export function SecuritySection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Vos données restent vos données.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {points.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="p-6 rounded-2xl bg-surface border border-white/10"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                <point.icon className="w-6 h-6 text-primary-light" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">{point.title}</h3>
              <p className="text-slate-300 text-sm">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
