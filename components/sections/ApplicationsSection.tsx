"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Users, Receipt, HardHat, Construction, ShieldCheck, FolderKanban } from "lucide-react";
import { Button } from "@/components/ui/Button";

const categories = [
  { icon: Users, title: "CRM sur mesure" },
  { icon: Receipt, title: "Gestion commerciale" },
  { icon: HardHat, title: "Applications terrain" },
  { icon: Construction, title: "Suivi de chantier" },
  { icon: ShieldCheck, title: "Portail client" },
  { icon: FolderKanban, title: "Gestion documentaire" },
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <span
              key={category.title}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background border border-white/10 text-sm text-slate-300"
            >
              <category.icon className="w-4 h-4 text-primary-light" />
              {category.title}
            </span>
          ))}
        </motion.div>

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
