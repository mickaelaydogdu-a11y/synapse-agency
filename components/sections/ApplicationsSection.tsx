"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Users, Receipt, HardHat, Construction, ShieldCheck, FolderKanban } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

const categories = [
  {
    icon: Users,
    title: "CRM sur mesure",
    features: ["Prospects", "Pipeline", "Devis"],
  },
  {
    icon: Receipt,
    title: "Gestion commerciale",
    features: ["Demandes entrantes", "Devis", "Commandes"],
  },
  {
    icon: HardHat,
    title: "Applications terrain",
    features: ["Interventions", "Rapports", "Photos"],
  },
  {
    icon: Construction,
    title: "Suivi de chantier",
    features: ["Chantiers", "Équipes", "Planning"],
  },
  {
    icon: ShieldCheck,
    title: "Portail client",
    features: ["Documents", "Factures", "Suivi de dossiers"],
  },
  {
    icon: FolderKanban,
    title: "Gestion documentaire",
    features: ["Classement", "Recherche", "Extraction IA"],
  },
];

export function ApplicationsSection() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Un logiciel qui s&apos;adapte à votre entreprise. <span className="gradient-text">Pas l&apos;inverse.</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Nous concevons des applications métier sur mesure pour remplacer les fichiers dispersés,
            connecter vos équipes et automatiser les tâches chronophages.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
            >
              <Card>
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                  <category.icon className="w-6 h-6 text-primary-light" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{category.title}</h3>
                <ul className="space-y-1.5">
                  {category.features.map((feature) => (
                    <li key={feature} className="text-slate-300 text-sm">
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/applications">
            <Button size="lg">
              Découvrir les applications métier
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
