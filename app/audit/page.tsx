"use client";

import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight, ShieldAlert, ScrollText, Workflow } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { AuditSection } from "@/components/home";

const audits = [
  {
    icon: Workflow,
    title: "Audit de flux de travail",
    paragraph:
      "Avant d'ajouter un outil ou d'automatiser une tâche, nous prenons le temps d'observer le fonctionnement réel de votre entreprise : qui fait quoi, avec quels outils, et où se situent les pertes de temps et les tâches répétitives. Cet audit a un objectif concret : identifier les solutions existantes qui répondent déjà au besoin, ou déterminer les outils à développer sur mesure pour que votre organisation dispose d'outils réellement performants, adaptés à son activité et à ses besoins.",
    tags: ["Processus internes", "Outils existants", "Développement sur mesure"],
  },
  {
    icon: ShieldAlert,
    title: "Audit de cybersécurité",
    paragraph:
      "Les cyberattaques ne visent pas que les grandes entreprises : TPE, PME et institutions publiques sont tout autant exposées. Notre audit de cybersécurité évalue vos vulnérabilités réelles à travers des tests d'intrusion internes et externes et l'analyse de la robustesse de vos configurations. Il intègre également l'évaluation de votre capacité à surmonter un sinistre — panne majeure, cyberattaque — et à relancer rapidement votre activité, dans une logique de plan de continuité et de reprise d'activité (PCA/PRA).",
    tags: ["Tests d'intrusion", "Robustesse des configurations", "Continuité d'activité (PCA/PRA)"],
  },
  {
    icon: ScrollText,
    title: "Audit de conformité réglementaire",
    paragraph:
      "Le non-respect des obligations réglementaires expose votre organisation à des sanctions et fragilise la confiance de vos clients, usagers ou partenaires. Notre audit de conformité réglementaire vérifie le respect des lois et normes en vigueur. Pour les institutions publiques et les entreprises, cela concerne principalement le RGPD, qui encadre la protection des données personnelles, et le RGS, le Référentiel Général de Sécurité applicable aux systèmes d'information des autorités publiques.",
    tags: ["RGPD", "RGS"],
  },
];

export default function Audit() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[auto] lg:min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/Audit-Synapse-agency.jpg"
            alt="Audit de sécurité, conformité et continuité d'activité Synapse Agency"
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
                <ShieldCheck className="w-4 h-4 mr-2" />
                Audit
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Évaluer le fonctionnement, la sécurité et la conformité de votre organisation
              </h1>
              <p className="text-lg md:text-xl text-slate-200 mb-8">
                Avant de faire évoluer vos outils, sécuriser ou mettre en conformité votre organisation, encore faut-il savoir où vous en êtes réellement.
                Nos audits dressent un état des lieux clair et objectif, avec des recommandations concrètes.
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

      {/* Les 3 types d'audit */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trois <span className="gradient-text">types d&apos;audit</span>
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Chaque audit peut être mené indépendamment ou combiné selon les enjeux de votre organisation.
            </p>
          </motion.div>

          <div className="space-y-16">
            {audits.map((audit, index) => (
              <motion.div
                key={audit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <Card className="mb-6">
                  <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-4">
                    <audit.icon className="w-6 h-6 text-secondary-light" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{audit.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {audit.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-1 rounded-full bg-white/10 text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </Card>

                <p className="text-slate-300">{audit.paragraph}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AuditSection />
    </main>
  );
}
