"use client";

import { motion } from "framer-motion";
import { Smartphone, Palette, Layout, Zap, Shield, Puzzle, Check, Bot, Users, MessageSquare, BarChart3, Clock, Cog, Globe, Laptop, TabletSmartphone } from "lucide-react";
import Image from "next/image";
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

const appTypes = [
  {
    icon: Laptop,
    title: "Applications web métier",
    description: "Digitalisez vos processus internes avec des outils sur mesure : gestion de projets, suivi d'activité, tableaux de bord.",
    examples: ["CRM personnalisé", "Gestion de stock", "Suivi de chantier", "Planning équipes"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: TabletSmartphone,
    title: "Applications mobiles",
    description: "Restez connecté à votre activité où que vous soyez. Applications iOS et Android natives ou hybrides.",
    examples: ["App client", "App terrain", "Gestion sur mobile", "Notifications push"],
    color: "from-accent to-purple-500",
  },
  {
    icon: Globe,
    title: "Portails & plateformes",
    description: "Créez des espaces dédiés pour vos clients, partenaires ou collaborateurs avec accès sécurisé.",
    examples: ["Espace client", "Portail fournisseur", "Intranet", "Plateforme de réservation"],
    color: "from-green-500 to-emerald-500",
  },
];

const benefits = [
  {
    icon: Clock,
    title: "Gain de temps",
    description: "Automatisez les tâches répétitives et concentrez-vous sur votre coeur de métier.",
  },
  {
    icon: Users,
    title: "Collaboration facilitée",
    description: "Vos équipes travaillent ensemble efficacement, où qu'elles soient.",
  },
  {
    icon: MessageSquare,
    title: "Communication fluide",
    description: "Échangez avec vos clients et partenaires via des canaux intégrés.",
  },
  {
    icon: BarChart3,
    title: "Données centralisées",
    description: "Toutes vos informations au même endroit pour de meilleures décisions.",
  },
];

export default function Applications() {
  return (
    <main>
      {/* Hero with Background Image */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/Applications.png"
            alt="Applications Synapse Agency"
            fill
            className="object-cover object-right lg:object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-32">
          <div className="flex justify-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl"
            >
              <Badge variant="primary" className="mb-6 inline-flex bg-accent/40 text-white border-accent/50 backdrop-blur-sm">
                <Smartphone className="w-4 h-4 mr-2" />
                Applications Web & Mobile
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                Des outils digitaux qui <br />
                <span className="text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">transforment votre quotidien</span>
              </h1>
              <p className="text-lg md:text-xl text-white mb-8 drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
                Applications web et mobiles sur mesure pour digitaliser vos processus,
                fluidifier votre communication et booster votre productivité.
              </p>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-6 mb-8 justify-center">
                <div className="flex items-center gap-2 backdrop-blur-sm bg-black/30 rounded-lg px-3 py-2">
                  <div className="w-10 h-10 rounded-lg bg-accent/40 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-white font-bold">95+</p>
                    <p className="text-white/80 text-sm">Score performance</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 backdrop-blur-sm bg-black/30 rounded-lg px-3 py-2">
                  <div className="w-10 h-10 rounded-lg bg-primary/40 flex items-center justify-center">
                    <Layout className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-white font-bold">&lt;2s</p>
                    <p className="text-white/80 text-sm">Chargement</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 backdrop-blur-sm bg-black/30 rounded-lg px-3 py-2">
                  <div className="w-10 h-10 rounded-lg bg-green-500/40 flex items-center justify-center">
                    <Smartphone className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-white font-bold">100%</p>
                    <p className="text-white/80 text-sm">Mobile-first</p>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Digital Tools Matter */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-4 inline-flex">
                <Cog className="w-4 h-4 mr-2" />
                Vos outils, votre force
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Des outils adaptés pour une entreprise <span className="gradient-text">performante</span>
              </h2>
              <div className="space-y-4 text-slate-600">
                <p>
                  Dans un monde où tout s&apos;accélère, vos outils de travail font la différence.
                  Une entreprise équipée des bons outils digitaux gagne en réactivité, en efficacité
                  et en qualité de service.
                </p>
                <p>
                  <strong className="text-slate-900">La communication interne et externe</strong> est le nerf
                  de la guerre. Clients, équipes, partenaires : chacun doit pouvoir accéder à la bonne
                  information au bon moment. Fini les emails perdus, les fichiers Excel éparpillés
                  et les informations qui n&apos;arrivent jamais à destination.
                </p>
                <p>
                  <strong className="text-slate-900">Vos processus métier méritent des outils sur mesure</strong>.
                  Plutôt que de vous adapter à des logiciels génériques, nous créons des applications
                  qui épousent parfaitement votre façon de travailler.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className="p-6 rounded-xl bg-background border border-slate-200"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-slate-900 font-bold mb-2">{benefit.title}</h3>
                  <p className="text-slate-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* App Types */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/Solutions-applications-fond.png"
            alt="Solutions applicatives"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Nos solutions applicatives
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
              Du simple outil interne à la plateforme client complète,
              nous développons l&apos;application qui correspond à vos besoins
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {appTypes.map((app, index) => (
              <motion.div
                key={app.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${app.color} flex items-center justify-center mb-4`}>
                    <app.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{app.title}</h3>
                  <p className="text-slate-600 mb-4">{app.description}</p>

                  <div className="pt-4 border-t border-slate-200">
                    <p className="text-xs text-slate-500 mb-2">Exemples :</p>
                    <div className="flex flex-wrap gap-2">
                      {app.examples.map((example) => (
                        <span
                          key={example}
                          className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-600"
                        >
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Ce qui fait la différence
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Chaque application que nous développons intègre les meilleures pratiques
              du web moderne pour garantir qualité et pérennité
            </p>
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
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
