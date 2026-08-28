"use client";

import { motion } from "framer-motion";
import { Code2, Wrench, Building2, Sparkles, Landmark, PlaneTakeoff, type LucideIcon } from "lucide-react";

interface TimelineItem {
  year: string;
  title: string;
  org: string;
  description: string;
  icon: LucideIcon;
}

const timeline: TimelineItem[] = [
  {
    year: "2004 – 2008",
    title: "Développeur web puis professeur d'informatique",
    org: "M6 / Centre A. Grosselin",
    description: "Développement web, création multimédia et enseignement de l'informatique — les bases d'une pédagogie que j'applique encore aujourd'hui pour expliquer l'IA simplement.",
    icon: Code2,
  },
  {
    year: "2013 – 2017",
    title: "Technicien de maintenance",
    org: "CERP",
    description: "Maintenance préventive et curative d'automates industriels et de systèmes AS400. On apprend vite ce que \"ça doit marcher tous les jours\" veut vraiment dire.",
    icon: Wrench,
  },
  {
    year: "2017 – 2018",
    title: "Responsable des services techniques",
    org: "Mairie de Jouarre",
    description: "Management d'équipes, suivi des bâtiments recevant du public et coordination des interventions.",
    icon: Building2,
  },
  {
    year: "2018 – Aujourd'hui",
    title: "Développeur Full Stack & Consultant IA",
    org: "Synapse Agency",
    description: "Audit des process, conception d'agents IA, développement web sur mesure et automatisation — accompagnement de A à Z des entreprises locales.",
    icon: Sparkles,
  },
  {
    year: "2020 – 2026",
    title: "Maire adjoint aux Sports et aux Associations",
    org: "Mairie de Jouarre",
    description: "Pilotage de projets sportifs et associatifs, gestion budgétaire et coordination des acteurs locaux — six ans à Jouarre, sur le terrain.",
    icon: Landmark,
  },
  {
    year: "2021",
    title: "Licence télépilote de drone",
    org: "DGAC",
    description: "Certification officielle pour les prises de vue aériennes proposées en production visuelle.",
    icon: PlaneTakeoff,
  },
];

export function Timeline() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Un parcours de <span className="gradient-text">terrain</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Vingt ans à toucher au numérique sous toutes ses formes, avant d&apos;en faire une agence.
          </p>
        </motion.div>

        <div className="relative pl-10 md:pl-14 border-l-2 border-white/10 space-y-10">
          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="relative"
            >
              <div className="absolute -left-[3.25rem] md:-left-[4.25rem] top-0 w-9 h-9 rounded-full bg-surface border-2 border-primary flex items-center justify-center">
                <item.icon className="w-4 h-4 text-primary-light" />
              </div>
              <span className="inline-block text-xs font-mono font-semibold tracking-wide text-primary-light bg-primary/10 rounded-full px-3 py-1 mb-2">
                {item.year}
              </span>
              <h3 className="text-lg font-bold text-white">{item.title}</h3>
              <p className="text-sm text-slate-400 mb-2">{item.org}</p>
              <p className="text-slate-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
