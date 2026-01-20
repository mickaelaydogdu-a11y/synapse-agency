"use client";

import { motion } from "framer-motion";
import { Cpu, FileSearch, Wand2, FolderKanban, BarChart3, Layers, ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

const features = [
  {
    icon: FileSearch,
    title: "Extraction de données",
    description: "Extrayez automatiquement les informations clés de vos documents (factures, contrats, CV)."
  },
  {
    icon: Wand2,
    title: "Génération de contenu",
    description: "Créez du contenu de qualité : rapports, résumés, traductions, emails personnalisés."
  },
  {
    icon: FolderKanban,
    title: "Classification automatique",
    description: "Triez et catégorisez vos documents et données automatiquement."
  },
  {
    icon: Layers,
    title: "Intégration API",
    description: "Connectez nos solutions à vos outils existants via une API REST simple."
  },
  {
    icon: BarChart3,
    title: "Tableau de bord analytique",
    description: "Suivez les performances et les insights en temps réel."
  },
  {
    icon: Cpu,
    title: "Traitement par lots",
    description: "Traitez des milliers de documents en quelques minutes."
  },
];

const useCases = [
  "Analyse de factures",
  "Tri automatique d'emails",
  "Génération de rapports",
  "Extraction de CV",
];

export default function SolutionsIA() {
  return (
    <main>
      {/* Hero with Background Image */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/Solution-ia-Synapse-agency.png"
            alt="Solution IA Synapse Agency"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/40" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Badge variant="secondary" className="mb-6">
                <Cpu className="w-4 h-4 mr-2" />
                Solutions IA
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Transformez vos données en <br />
                <span className="gradient-text">décisions intelligentes</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-8">
                Automatisez vos processus métier avec des solutions d&apos;IA sur mesure : extraction, génération, analyse et bien plus.
              </p>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
                    <FileSearch className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-white font-bold">95%</p>
                    <p className="text-slate-400 text-sm">Précision</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Layers className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-white font-bold">x10</p>
                    <p className="text-slate-400 text-sm">Plus rapide</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <p className="text-white font-bold">15h</p>
                    <p className="text-slate-400 text-sm">Économisées/sem</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button size="lg">
                    Demander une démo
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/audit-gratuit">
                  <Button size="lg" variant="secondary">
                    Audit gratuit
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Empty space for image visibility on large screens */}
            <div className="hidden lg:block" />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Fonctionnalités clés
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-slate-400">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Cas d&apos;usage
              </h2>
              <p className="text-slate-400 mb-8">
                Nos solutions IA s&apos;adaptent à vos processus métier spécifiques pour maximiser votre productivité.
              </p>
              <ul className="space-y-4">
                {useCases.map((useCase) => (
                  <li key={useCase} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-secondary/20 flex items-center justify-center">
                      <Check className="w-4 h-4 text-secondary" />
                    </div>
                    <span className="text-white">{useCase}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Card variant="gradient" hover={false} className="p-8">
              <div className="text-center">
                <div className="text-5xl font-bold gradient-text mb-2">15h</div>
                <p className="text-slate-400 mb-6">économisées par semaine</p>

                <div className="text-5xl font-bold gradient-text mb-2">95%</div>
                <p className="text-slate-400 mb-6">de précision d&apos;extraction</p>

                <div className="text-5xl font-bold gradient-text mb-2">x10</div>
                <p className="text-slate-400">plus rapide que le manuel</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Prêt à automatiser vos processus ?
          </h2>
          <p className="text-slate-400 mb-8">
            Discutons de votre projet et créons ensemble une solution sur mesure.
          </p>
          <Link href="/contact">
            <Button size="lg">
              Planifier un appel
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
