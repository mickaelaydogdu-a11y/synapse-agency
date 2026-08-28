"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MessageSquare, FileSearch, Database, PenLine, Network, Bot } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

const capabilities = [
  {
    icon: MessageSquare,
    title: "Assistant IA interne",
    description: "Permet aux collaborateurs d'interroger les informations internes de l'entreprise.",
    example: "Quels dossiers sont en retard ?",
  },
  {
    icon: FileSearch,
    title: "Analyse documentaire",
    description: "Analyse automatiquement devis, factures, contrats, rapports, cahiers des charges et emails.",
  },
  {
    icon: Database,
    title: "Extraction de données",
    description: "Transforme automatiquement les documents en données structurées.",
    example: "PDF → analyse → extraction → base de données",
  },
  {
    icon: PenLine,
    title: "Génération assistée",
    description: "Génère comptes rendus, devis, emails, synthèses et propositions commerciales.",
  },
  {
    icon: Network,
    title: "RAG",
    description: "Une IA capable de travailler avec la base documentaire propre à votre entreprise (PDF, Word, bases de données, procédures).",
  },
  {
    icon: Bot,
    title: "Agents IA",
    description: "Des agents spécialisés pour la qualification commerciale, l'analyse documentaire ou le support interne.",
  },
];

export function AISection() {
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
            Ajoutez de l&apos;<span className="gradient-text">intelligence</span> à vos outils.
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Nous intégrons l&apos;intelligence artificielle directement dans vos applications et vos processus métier.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
            >
              <Card>
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
                  <capability.icon className="w-6 h-6 text-accent-light" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{capability.title}</h3>
                <p className="text-slate-300 text-sm mb-3">{capability.description}</p>
                {capability.example && (
                  <p className="text-xs font-mono text-primary-light/80 border-t border-white/10 pt-3">
                    {capability.example}
                  </p>
                )}
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/solutions-ia">
            <Button size="lg">
              Découvrir l&apos;IA Synapse
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
