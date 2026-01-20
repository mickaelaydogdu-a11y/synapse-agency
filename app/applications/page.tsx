"use client";

import { motion } from "framer-motion";
import { Smartphone, Palette, Layout, Zap, Shield, Puzzle, ArrowRight, Check, Bot } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

const features = [
  {
    icon: Palette,
    title: "Design UI/UX moderne",
    description: "Interfaces élégantes et intuitives, conçues pour une expérience utilisateur optimale."
  },
  {
    icon: Layout,
    title: "Responsive design",
    description: "Votre application s'adapte parfaitement à tous les écrans : mobile, tablette, desktop."
  },
  {
    icon: Zap,
    title: "Performance optimisée",
    description: "Temps de chargement minimal et fluidité garantie pour une expérience sans accroc."
  },
  {
    icon: Shield,
    title: "Sécurité renforcée",
    description: "Protection des données et conformité RGPD intégrées dès la conception."
  },
  {
    icon: Puzzle,
    title: "Intégrations tierces",
    description: "Connectez votre app à vos outils existants : paiement, CRM, analytics, etc."
  },
  {
    icon: Bot,
    title: "IA intégrée",
    description: "Intégrez un agent IA directement dans votre application pour automatiser les tâches répétitives."
  },
];

const useCases = [
  "Gestion immobilière",
  "Portails clients",
  "Applications métier",
  "E-commerce",
  "Tableaux de bord",
  "CRM sur mesure",
];

export default function Applications() {
  return (
    <main>
      {/* Hero with Background Image */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/Application-Synapse-agency.png"
            alt="Applications Synapse Agency"
            fill
            className="object-cover object-right lg:object-center"
            priority
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/40" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-32">
          <div className="flex justify-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl"
            >
              <Badge variant="primary" className="mb-6 inline-flex bg-accent/20 text-accent border-accent/30">
                <Smartphone className="w-4 h-4 mr-2" />
                Applications Web & Mobile
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Des applications qui font <br />
                <span className="gradient-text">la différence</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-8">
                Applications web et mobiles modernes, performantes et évolutives, conçues sur mesure pour répondre à vos besoins métier.
              </p>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-6 mb-8 justify-center">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-white font-bold">95+</p>
                    <p className="text-slate-400 text-sm">Score performance</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Layout className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-white font-bold">&lt;2s</p>
                    <p className="text-slate-400 text-sm">Chargement</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                    <Smartphone className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <p className="text-white font-bold">100%</p>
                    <p className="text-slate-400 text-sm">Mobile-first</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/audit-gratuit">
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600 border-orange-500">
                    Audit gratuit
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </motion.div>
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
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-accent" />
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
                Nous développons des applications sur mesure pour tous les secteurs et tous les usages.
              </p>
              <ul className="space-y-4">
                {useCases.map((useCase) => (
                  <li key={useCase} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
                      <Check className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-white">{useCase}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Card variant="gradient" hover={false} className="p-8">
              <div className="text-center">
                <div className="text-5xl font-bold gradient-text mb-2">95+</div>
                <p className="text-slate-400 mb-6">Score Score performance</p>

                <div className="text-5xl font-bold gradient-text mb-2">&lt;2s</div>
                <p className="text-slate-400 mb-6">Temps de chargement</p>

                <div className="text-5xl font-bold gradient-text mb-2">100%</div>
                <p className="text-slate-400">Mobile-first</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Prêt à créer votre application ?
          </h2>
          <p className="text-slate-400 mb-8">
            Discutons de votre projet et donnons vie à vos idées.
          </p>
          <Link href="/contact">
            <Button size="lg">
              Démarrer le projet
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
