"use client";

import { motion } from "framer-motion";
import { Users, Lightbulb, Rocket, HeartHandshake } from "lucide-react";

const benefits = [
  {
    icon: HeartHandshake,
    title: "Accompagnement sur mesure",
    description: "Un interlocuteur unique qui comprend vos enjeux et vous guide à chaque étape de votre projet.",
  },
  {
    icon: Lightbulb,
    title: "Expertise multi-domaines",
    description: "IA, développement et production visuelle : toutes les compétences digitales réunies en une seule agence.",
  },
  {
    icon: Rocket,
    title: "Résultats concrets",
    description: "Des solutions pragmatiques qui génèrent de la valeur rapidement pour votre entreprise.",
  },
  {
    icon: Users,
    title: "Pensé pour les pros",
    description: "Nous comprenons les contraintes des TPE/PME et adaptons nos solutions à votre réalité terrain.",
  },
];

export function WhyUs() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Pourquoi choisir <span className="gradient-text">Synapse Agency</span> ?
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Une agence digitale à taille humaine qui combine technologie de pointe et approche personnalisée.
            Nous transformons vos idées en solutions concrètes qui font la différence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</h3>
              <p className="text-slate-600 text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
