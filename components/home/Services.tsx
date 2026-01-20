"use client";

import { motion } from "framer-motion";
import { Bot, Cpu, Smartphone, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/Card";

const services = [
  {
    icon: Bot,
    title: "Agents IA",
    description: "Des assistants virtuels sur mesure pour automatiser vos tâches : accueil téléphonique, création de devis, gestion des réseaux sociaux et bien plus.",
    href: "/agents-ia",
    color: "from-primary to-primary-light",
    stats: "2h/jour gagnées",
  },
  {
    icon: Cpu,
    title: "Solutions IA",
    description: "Automatisez vos processus métier avec des solutions d'IA sur mesure : extraction de données, génération de contenu, analyse.",
    href: "/solutions-ia",
    color: "from-secondary to-secondary-light",
    stats: "15h/semaine économisées",
  },
  {
    icon: Smartphone,
    title: "Applications",
    description: "Applications web et mobiles modernes, performantes et évolutives, adaptées à vos besoins métier.",
    href: "/applications",
    color: "from-accent to-accent-light",
    stats: "Score Lighthouse 95+",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-medium mb-4"
          >
            Nos services
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Des solutions pour chaque besoin
          </motion.h2>
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
                  <h3 className="text-xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 mb-6">{service.description}</p>
                  <div className="flex items-center gap-2 text-primary">
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
