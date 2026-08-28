"use client";

import { motion } from "framer-motion";
import { Landmark, Wrench, GraduationCap, Layers } from "lucide-react";

const points = [
  {
    icon: Landmark,
    title: "Ancrage local, pas une agence à distance",
    description: "Élu maire adjoint pendant six ans, je connais le tissu économique local — pas une agence qui répond depuis Paris ou l'étranger.",
  },
  {
    icon: Wrench,
    title: "Le terrain avant la théorie",
    description: "Avant de concevoir des agents IA, j'ai réparé des automates industriels et des systèmes AS400. Je sais ce que \"ça doit marcher tous les jours\" veut dire.",
  },
  {
    icon: GraduationCap,
    title: "Je vulgarise, je n'impressionne pas",
    description: "Ancien professeur d'informatique : mon rôle est de rendre l'IA compréhensible et actionnable pour vous, pas de vous noyer dans le jargon.",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
