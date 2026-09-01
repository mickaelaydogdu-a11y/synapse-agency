"use client";

import { motion } from "framer-motion";
import {
  Cpu, MessageSquare, Network, FileSearch, Database, PenLine, Bot,
  ArrowRight, Layers, ShieldCheck, PlugZap,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { AuditSection } from "@/components/home";
import { AutomationSection, SecuritySection, Workflow } from "@/components/sections";

const why = [
  { icon: Layers, title: "Réduire les tâches répétitives", description: "Sans ajouter un outil de plus à gérer : l'IA s'intègre dans vos applications existantes." },
  { icon: Database, title: "Exploiter vos données", description: "Vos documents et informations restent chez vous — l'IA travaille avec ce qui existe déjà." },
  { icon: ShieldCheck, title: "Garder le contrôle", description: "Les décisions importantes restent validées par vos équipes, pas automatisées à l'aveugle." },
  { icon: PlugZap, title: "S'intégrer, pas remplacer", description: "L'IA vient compléter vos outils et vos process, pas les bouleverser." },
];

const capabilities = [
  {
    icon: MessageSquare,
    title: "Assistant métier",
    description: "Vos collaborateurs interrogent directement les informations internes de l'entreprise, sans chercher dans plusieurs outils.",
    examples: [
      "Quels dossiers sont en retard ?",
      "Résume-moi les échanges avec le client Dupont.",
      "Quels devis supérieurs à 50 000 € sont toujours en attente ?",
    ],
  },
  {
    icon: Network,
    title: "RAG",
    description: "Une intelligence artificielle capable de travailler avec la base documentaire propre à votre entreprise.",
    tags: ["PDF", "Word", "Bases de données", "Documentation", "Procédures", "Contrats", "Emails"],
  },
  {
    icon: FileSearch,
    title: "Analyse documentaire",
    description: "Analyse automatiquement devis, factures, contrats, rapports, cahiers des charges, emails et fichiers PDF.",
    tags: ["Devis", "Factures", "Contrats", "Rapports", "Cahiers des charges"],
  },
  {
    icon: Database,
    title: "Extraction de données",
    description: "Transforme automatiquement vos documents en données structurées et exploitables.",
    workflow: ["PDF", "Analyse", "Extraction", "Base de données"],
  },
  {
    icon: PenLine,
    title: "Génération assistée",
    description: "Génère comptes rendus, devis, emails, synthèses, propositions commerciales et documents internes.",
    tags: ["Comptes rendus", "Devis", "Emails", "Synthèses", "Propositions commerciales"],
  },
  {
    icon: Bot,
    title: "Agents IA",
    description: "Des agents spécialisés capables d'effectuer certaines tâches dans un cadre défini, sous contrôle.",
    tags: ["Qualification commerciale", "Analyse documentaire", "Préparation de devis", "Support interne", "Reporting"],
  },
];

export default function SolutionsIA() {
  return (
    <main>
      {/* Hero */}
      <section className="relative max-h-[75vh] lg:max-h-none min-h-[auto] lg:min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/Solution-ia-Synapse-agency.jpg"
            alt="Intelligence artificielle et automatisation Synapse Agency"
            fill
            sizes="(max-width: 768px) 200vw, 100vw"
            className="object-cover object-right lg:object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-14 pt-24 lg:py-24 lg:pt-28">
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl"
            >
              <Badge variant="secondary" className="mb-6 inline-flex bg-secondary/40 text-white border-secondary/50 backdrop-blur-sm">
                <Cpu className="w-4 h-4 mr-2" />
                IA & Automatisation
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                L&apos;intelligence artificielle au service de vos processus métier
              </h1>
              <p className="text-lg md:text-xl text-slate-200 mb-8">
                Nous intégrons l&apos;IA directement dans vos applications métier pour automatiser ce qui peut l&apos;être,
                sans complexifier votre quotidien.
              </p>
              <Link href="/contact">
                <Button size="lg">
                  Parler de mon besoin
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pourquoi intégrer l'IA */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Pourquoi intégrer l&apos;<span className="gradient-text">IA</span> ?
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Synapse ne vend pas de l&apos;IA pour vendre de l&apos;IA. Nous l&apos;intégrons lorsqu&apos;elle permet
              réellement de simplifier, accélérer ou automatiser le travail.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {why.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="p-6 rounded-xl bg-background border border-white/10"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-4">
                  <point.icon className="w-6 h-6 text-secondary-light" />
                </div>
                <h3 className="text-white font-bold mb-2">{point.title}</h3>
                <p className="text-slate-300 text-sm">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capacités */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Comment l&apos;IA travaille dans votre entreprise
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
              >
                <Card className="h-full">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
                    <capability.icon className="w-6 h-6 text-accent-light" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{capability.title}</h3>
                  <p className="text-slate-300 text-sm mb-4">{capability.description}</p>

                  {capability.examples && (
                    <div className="space-y-2 pt-4 border-t border-white/10">
                      {capability.examples.map((example) => (
                        <p key={example} className="text-xs font-mono text-primary-light/80 italic">
                          &ldquo;{example}&rdquo;
                        </p>
                      ))}
                    </div>
                  )}

                  {capability.tags && (
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                      {capability.tags.map((tag) => (
                        <span key={tag} className="text-xs px-2 py-1 rounded-full bg-white/10 text-slate-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {capability.workflow && (
                    <div className="pt-4 border-t border-white/10">
                      <Workflow steps={capability.workflow} />
                    </div>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AutomationSection />
      <SecuritySection />
      <AuditSection />
    </main>
  );
}
