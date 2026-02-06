"use client";

import { motion } from "framer-motion";
import { Cpu, Smartphone, Camera, ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/Card";

const services = [
  {
    icon: Cpu,
    title: "Solutions IA",
    description: "Automatisez vos processus métier avec l'intelligence artificielle : agents conversationnels, extraction de données, génération de contenu.",
    href: "/solutions-ia",
    color: "from-secondary to-cyan-400",
    features: [
      "Agents IA (téléphone, devis, réseaux sociaux)",
      "Extraction et analyse de documents",
      "Automatisation des tâches répétitives",
    ],
  },
  {
    icon: Smartphone,
    title: "Applications web et mobile",
    description: "Des applications modernes, performantes et évolutives qui digitalisent votre activité et améliorent l'expérience de vos clients.",
    href: "/applications",
    color: "from-accent to-purple-400",
    features: [
      "Applications web sur mesure",
      "Applications mobiles iOS & Android",
      "Intégrations et APIs",
    ],
  },
  {
    icon: Camera,
    title: "Production Visuelle",
    description: "Valorisez votre image de marque avec des contenus photo et vidéo professionnels, y compris des prises de vue aériennes par drone.",
    href: "/production-visuelle",
    color: "from-violet-500 to-pink-400",
    features: [
      "Photo portrait, produits, reportage",
      "Vidéo corporate et événementiel",
      "Prises de vue aériennes drone",
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-medium mb-4"
          >
            Nos expertises
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
          >
            Trois pôles d&apos;expertise pour votre réussite
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-slate-600 max-w-2xl mx-auto"
          >
            Du conseil à la réalisation, nous vous accompagnons dans tous vos projets digitaux
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={service.href} className="block h-full">
                <Card className="h-full group">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mb-6">{service.description}</p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-slate-600">
                        <Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-2 text-primary mt-auto">
                    <span>En savoir plus</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
