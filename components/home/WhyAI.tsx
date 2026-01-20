"use client";

import { motion } from "framer-motion";
import { TrendingUp, Clock, Target, Zap } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Libérez votre temps",
    description: "Déléguez les tâches répétitives à l'IA et consacrez-vous à ce qui vous passionne vraiment.",
  },
  {
    icon: TrendingUp,
    title: "Développez votre potentiel",
    description: "L'IA amplifie vos capacités et vous permet d'accomplir davantage avec les mêmes ressources.",
  },
  {
    icon: Target,
    title: "Gagnez en sérénité",
    description: "Un assistant fiable qui travaille avec précision, 24h/24, pour vous épauler au quotidien.",
  },
  {
    icon: Zap,
    title: "Simplifiez votre quotidien",
    description: "Des solutions concrètes qui s'intègrent naturellement dans vos processus existants.",
  },
];

export function WhyAI() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            L&apos;IA, votre <span className="gradient-text">meilleur allié</span> au quotidien
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            Imaginez pouvoir vous concentrer sur ce que vous aimez vraiment dans votre métier.
            L&apos;intelligence artificielle prend en charge les tâches chronophages et répétitives,
            vous offrant un temps précieux pour développer votre entreprise, innover et créer de la valeur.
            C&apos;est un véritable partenaire qui travaille à vos côtés, simplifie votre quotidien
            et vous aide à atteindre vos objectifs plus sereinement.
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
              <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
              <p className="text-slate-400 text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
