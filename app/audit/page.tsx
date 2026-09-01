"use client";

import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight, ShieldAlert, ScrollText, RotateCcw } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { AuditSection } from "@/components/home";

const audits = [
  {
    icon: ShieldAlert,
    title: "Audit de cybersécurité",
    subtitle: "ou test d'intrusion",
    description:
      "Évaluation des vulnérabilités face aux cyberattaques. Il comprend des tests d'intrusion (internes et externes) et l'analyse de la robustesse des configurations.",
  },
  {
    icon: ScrollText,
    title: "Audit de conformité réglementaire",
    description:
      "Vérification du respect des lois et normes en vigueur. Pour les institutions publiques et les entreprises, cela concerne principalement le RGPD (protection des données) et le RGS (Référentiel Général de Sécurité).",
  },
  {
    icon: RotateCcw,
    title: "Audit de continuité d'activité",
    subtitle: "PCA/PRA",
    description:
      "Analyse de la capacité de l'organisation à surmonter un sinistre (panne majeure, cyberattaque) et à relancer son activité rapidement.",
  },
];

export default function Audit() {
  return (
    <main>
      {/* Hero */}
      <section className="relative max-h-[75vh] lg:max-h-none min-h-[auto] lg:min-h-screen flex items-center overflow-hidden">
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
                Évaluer la sécurité, la conformité et la résilience de votre organisation
              </h1>
              <p className="text-lg md:text-xl text-slate-200 mb-8">
                Avant de sécuriser ou de faire évoluer un système d&apos;information, encore faut-il savoir où il en est réellement.
                Nos audits dressent un état des lieux clair et objectif, avec des recommandations concrètes.
              </p>
              <Link href="/contact">
                <Button size="lg">
                  Parler de mon projet
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Les 3 types d'audit */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trois <span className="gradient-text">types d&apos;audit</span>
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Chaque audit peut être mené indépendamment ou combiné selon les enjeux de votre organisation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {audits.map((audit, index) => (
              <motion.div
                key={audit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <Card className="h-full">
                  <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-4">
                    <audit.icon className="w-6 h-6 text-secondary-light" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{audit.title}</h3>
                  {audit.subtitle && (
                    <p className="text-sm text-slate-400 mb-3">{audit.subtitle}</p>
                  )}
                  <p className="text-slate-300 text-sm">{audit.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AuditSection />
    </main>
  );
}
