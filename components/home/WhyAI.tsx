"use client";

import { motion } from "framer-motion";
import { TrendingUp, Clock, Target, Zap } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Gagnez du temps",
    description: "Automatisez les tâches répétitives et concentrez-vous sur ce qui compte vraiment.",
  },
  {
    icon: TrendingUp,
    title: "Restez compétitif",
    description: "Vos concurrents adoptent l'IA. Ne prenez pas de retard sur votre marché.",
  },
  {
    icon: Target,
    title: "Réduisez les erreurs",
    description: "L'IA travaille avec précision, 24h/24, sans fatigue ni distraction.",
  },
  {
    icon: Zap,
    title: "Agissez maintenant",
    description: "Plus vous attendez, plus l'écart se creuse avec ceux qui ont déjà franchi le pas.",
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
            Pourquoi intégrer l&apos;IA <span className="gradient-text">dès maintenant</span> ?
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            L&apos;intelligence artificielle n&apos;est plus une option, c&apos;est une nécessité.
            Les entreprises qui l&apos;adoptent aujourd&apos;hui gagnent en efficacité, réduisent leurs coûts
            et prennent une longueur d&apos;avance sur leurs concurrents. Celles qui attendent risquent
            de se retrouver dépassées.
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
