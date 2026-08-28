"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, FileSpreadsheet, Copy, FolderOpen, Repeat } from "lucide-react";
import { Button } from "@/components/ui/Button";

const problems = [
  {
    icon: FileSpreadsheet,
    title: "Excel partout",
    description: "Vos données sont réparties dans plusieurs fichiers difficiles à maintenir et à partager.",
  },
  {
    icon: Copy,
    title: "Double saisie",
    description: "Vos collaborateurs recopient les mêmes informations dans plusieurs logiciels.",
  },
  {
    icon: FolderOpen,
    title: "Informations dispersées",
    description: "Emails, documents PDF, WhatsApp, CRM et dossiers réseau compliquent le suivi.",
  },
  {
    icon: Repeat,
    title: "Tâches répétitives",
    description: "Devis, comptes rendus, relances, classement ou saisie mobilisent inutilement vos équipes.",
  },
];

export function ProblemSection() {
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
            Vos outils vous font perdre du temps ?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-surface border border-white/10"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                <problem.icon className="w-6 h-6 text-primary-light" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{problem.title}</h3>
              <p className="text-slate-300 text-sm">{problem.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-6">
            Synapse transforme ces processus en une application unique adaptée au fonctionnement réel de votre entreprise.
          </p>
          <Link href="/contact">
            <Button size="lg">
              Étudier mon processus
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
