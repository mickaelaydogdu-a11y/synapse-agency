"use client";

import { motion } from "framer-motion";
import { Bot, MessageSquare, Clock, Brain, Zap, Users, ArrowRight, Check, Phone, FileText, Share2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

const features = [
  {
    icon: MessageSquare,
    title: "Compréhension naturelle",
    description: "Notre IA comprend le langage naturel et répond de manière contextuelle et pertinente."
  },
  {
    icon: Clock,
    title: "Disponibilité 24/7",
    description: "Vos clients obtiennent des réponses instantanées, à toute heure du jour et de la nuit."
  },
  {
    icon: Brain,
    title: "Auto-apprentissage",
    description: "L'agent s'améliore continuellement grâce aux interactions avec vos clients."
  },
  {
    icon: Zap,
    title: "Réponse instantanée",
    description: "Temps de réponse inférieur à 2 secondes pour une expérience utilisateur optimale."
  },
  {
    icon: Users,
    title: "Multi-canal",
    description: "Déployez sur votre site web, WhatsApp, Messenger et bien d'autres plateformes."
  },
  {
    icon: ArrowRight,
    title: "Escalade intelligente",
    description: "Transfert automatique vers un humain lorsque la situation l'exige."
  },
];

const agentTypes = [
  {
    icon: Phone,
    title: "Agent Téléphonique",
    description: "Gère vos appels 24h/24 : accueil, qualification, prise de RDV et réponses aux questions fréquentes.",
    features: ["Accueil téléphonique intelligent", "Prise de RDV automatique", "Transfert vers un humain si besoin"],
    ideal: "Cabinets médicaux, agences immobilières, services clients",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: FileText,
    title: "Agent Création de Devis",
    description: "Automatise la création de devis : collecte des besoins, calcul, génération PDF et envoi au client.",
    features: ["Collecte intelligente des besoins", "Calcul automatique selon vos tarifs", "Génération et envoi PDF"],
    ideal: "Artisans, agences, prestataires de services",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Share2,
    title: "Agent Réseaux Sociaux",
    description: "Votre community manager virtuel : création de posts, planification et analyse des performances.",
    features: ["Création de contenu adapté", "Calendrier éditorial automatique", "Analyse des performances"],
    ideal: "TPE/PME, indépendants, e-commerce",
    color: "from-pink-500 to-rose-500",
  },
];

const useCases = [
  "Support client automatisé",
  "Qualification de leads",
  "Prise de rendez-vous",
  "FAQ interactive",
  "Accueil téléphonique",
  "Génération de devis",
  "Gestion réseaux sociaux",
  "Relance clients",
];

export default function AgentsIA() {
  return (
    <main>
      {/* Hero with Background Image */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/Agent-ia-Synapse-agency.png"
            alt="Agent IA Synapse Agency"
            fill
            className="object-cover object-right lg:object-center"
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
              className="text-center lg:text-left"
            >
              <Badge className="mb-6 inline-flex">
                <Bot className="w-4 h-4 mr-2" />
                Agents IA
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Un collaborateur virtuel <br />
                <span className="gradient-text">disponible 24h/24</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-8">
                Automatisez votre support client avec des agents IA intelligents qui comprennent, répondent et apprennent de chaque interaction.
              </p>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-6 mb-8 justify-center lg:justify-start">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-white font-bold">24/7</p>
                    <p className="text-slate-400 text-sm">Disponible</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-white font-bold">&lt;2s</p>
                    <p className="text-slate-400 text-sm">Réponse</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                    <Brain className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <p className="text-white font-bold">Auto</p>
                    <p className="text-slate-400 text-sm">Apprentissage</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link href="/audit-gratuit">
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600 border-orange-500">
                    Audit gratuit
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Empty space for image visibility on large screens */}
            <div className="hidden lg:block" />
          </div>
        </div>
      </section>

      {/* Agent Types */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Nos agents spécialisés
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Des agents IA conçus pour répondre à vos besoins métier spécifiques
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {agentTypes.map((agent, index) => (
              <motion.div
                key={agent.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${agent.color} flex items-center justify-center mb-4`}>
                    <agent.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{agent.title}</h3>
                  <p className="text-slate-400 mb-4">{agent.description}</p>

                  <ul className="space-y-2 mb-4">
                    {agent.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-slate-300">
                        <Check className="w-4 h-4 text-green-500 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-white/10">
                    <p className="text-xs text-slate-500">Idéal pour :</p>
                    <p className="text-sm text-primary">{agent.ideal}</p>
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
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
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
                Nos agents IA s&apos;adaptent à de nombreux contextes métier pour automatiser vos interactions.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {useCases.map((useCase) => (
                  <div key={useCase} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-white text-sm">{useCase}</span>
                  </div>
                ))}
              </div>
            </div>

            <Card variant="gradient" hover={false} className="p-8">
              <div className="text-center">
                <div className="text-5xl font-bold gradient-text mb-2">-70%</div>
                <p className="text-slate-400 mb-6">de temps de réponse client</p>

                <div className="text-5xl font-bold gradient-text mb-2">24/7</div>
                <p className="text-slate-400 mb-6">disponibilité sans surcoût</p>

                <div className="text-5xl font-bold gradient-text mb-2">2h/jour</div>
                <p className="text-slate-400">gagnées en moyenne</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Prêt à automatiser votre support ?
          </h2>
          <p className="text-slate-400 mb-8">
            Obtenez une démo personnalisée et un devis adapté à vos besoins.
          </p>
          <Link href="/contact">
            <Button size="lg">
              Demander une démo
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
