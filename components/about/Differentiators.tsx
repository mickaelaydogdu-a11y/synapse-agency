"use client";

import { motion } from "framer-motion";
import { ShieldCheck, CodeXml, Layers } from "lucide-react";

const points = [
  {
    icon: ShieldCheck,
    title: "Entreprise française, données sécurisées",
    description: "Mes solutions sont 100 % RGPD, pensées dès leur conception pour la sécurité et la propriété de vos données.",
  },
  {
    icon: CodeXml,
    title: "Un développeur, pas un intermédiaire",
    description: "HTML, CSS, PHP, SQL, API, JavaScript, React, Next.js : conception full-stack frontend et backend.",
  },
  {
    icon: Layers,
    title: "Un seul interlocuteur, toutes les compétences",
    description: "Développement web, agents IA et automatisation : pas besoin de jongler entre plusieurs prestataires.",
  },
];

export function Differentiators() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ce qui change <span className="gradient-text">avec moi</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Vingt ans de terrain à toucher au numérique sous toutes ses formes, avant d&apos;en faire une agence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {points.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <point.icon className="w-7 h-7 text-primary-light" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{point.title}</h3>
              <p className="text-slate-300 text-sm">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
