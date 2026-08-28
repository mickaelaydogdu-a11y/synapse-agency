"use client";

import { motion } from "framer-motion";
import {
  Smartphone, Palette, Layout, Zap, Shield, Puzzle, Bot, ArrowRight,
  PackageX, Lock, CreditCard, Unplug, Repeat, TrendingDown,
  Users, Receipt, Construction, HardHat, ShieldCheck, FolderKanban,
  CalendarDays, Wrench, Building2, LayoutDashboard, GitBranch,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ParallaxImage } from "@/components/ui/ParallaxImage";
import { AuditSection } from "@/components/home";

const limits = [
  { icon: PackageX, title: "Fonctionnalités inutiles", description: "Vous payez pour des options que vous n'utiliserez jamais." },
  { icon: Lock, title: "Processus imposés", description: "Le logiciel dicte votre façon de travailler, pas l'inverse." },
  { icon: CreditCard, title: "Multiplication des abonnements", description: "Un outil par besoin, et une facture qui grimpe chaque mois." },
  { icon: Unplug, title: "Logiciels non connectés", description: "Vos données restent cloisonnées, sans communication entre elles." },
  { icon: Repeat, title: "Manque d'automatisation", description: "Les tâches répétitives restent à la charge de vos équipes." },
  { icon: TrendingDown, title: "Difficulté d'évolution", description: "Impossible d'adapter l'outil quand votre activité change." },
];

const appCategories = [
  { icon: Users, title: "CRM", description: "Centralisez prospects, opportunités et suivi commercial." },
  { icon: Receipt, title: "Gestion commerciale", description: "Devis, commandes et statistiques réunis dans un même outil." },
  { icon: Construction, title: "Gestion de chantier", description: "Affaires, équipes et planning, du bureau au terrain." },
  { icon: HardHat, title: "Applications terrain", description: "Interventions, rapports et photos accessibles depuis le mobile." },
  { icon: ShieldCheck, title: "Portail client", description: "Un espace sécurisé pour documents, factures et échanges." },
  { icon: FolderKanban, title: "Gestion documentaire", description: "Classement, recherche et extraction automatique de documents." },
  { icon: CalendarDays, title: "Planning", description: "Coordonnez équipes, ressources et interventions au même endroit." },
  { icon: Wrench, title: "Gestion des interventions", description: "Du signalement à la clôture, suivez chaque intervention terrain." },
  { icon: Building2, title: "ERP métier", description: "Un outil central pour piloter les données de votre entreprise." },
  { icon: LayoutDashboard, title: "Dashboard", description: "Visualisez vos indicateurs clés en un coup d'œil, sans tableur." },
  { icon: GitBranch, title: "Workflow interne", description: "Automatisez les validations et les étapes répétitives entre équipes." },
];

const features = [
  { icon: Palette, title: "Design UI/UX moderne", description: "Interfaces élégantes et intuitives, conçues pour une expérience utilisateur optimale." },
  { icon: Layout, title: "Responsive design", description: "Votre application s'adapte parfaitement à tous les écrans : mobile, tablette, desktop." },
  { icon: Zap, title: "Performance optimisée", description: "Temps de chargement minimal et fluidité pour une expérience sans accroc." },
  { icon: Shield, title: "Sécurité par conception", description: "Bonnes pratiques de sécurité et respect du RGPD pris en compte dès la conception." },
  { icon: Puzzle, title: "Intégrations tierces", description: "Connectez votre application à vos outils existants : paiement, CRM, analytics." },
  { icon: Bot, title: "IA intégrée", description: "Intégrez un agent IA directement dans votre application pour automatiser les tâches répétitives." },
];

export default function Applications() {
  return (
    <main>
      {/* Hero */}
      <section className="relative max-h-[75vh] lg:max-h-none min-h-[auto] lg:min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/Applications.jpg"
            alt="Applications métier Synapse Agency"
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
              <Badge variant="primary" className="mb-6 inline-flex bg-accent/40 text-white border-accent/50 backdrop-blur-sm">
                <Smartphone className="w-4 h-4 mr-2" />
                Applications métier
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Applications métier sur mesure
              </h1>
              <p className="text-lg md:text-xl text-slate-200 mb-8">
                Nous construisons les outils numériques qui correspondent réellement au fonctionnement de votre entreprise.
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

      {/* Pourquoi une application sur mesure */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Pourquoi une application <span className="gradient-text">sur mesure</span> ?
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Les logiciels standards imposent leurs propres limites. Une application sur mesure s&apos;adapte à vous, pas l&apos;inverse.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {limits.map((limit, index) => (
              <motion.div
                key={limit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="p-6 rounded-xl bg-background border border-white/10"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
                  <limit.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-white font-bold mb-2">{limit.title}</h3>
                <p className="text-slate-300 text-sm">{limit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Types d'applications */}
      <section className="py-12 lg:py-20 relative overflow-hidden">
        <ParallaxImage
          src="/images/Solutions-applications-fond.jpg"
          alt="Types d'applications métier"
        />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Types d&apos;applications
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
              Du CRM au workflow interne, nous développons l&apos;application qui correspond à vos besoins.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {appCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card>
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{category.title}</h3>
                  <p className="text-slate-300 text-sm">{category.description}</p>
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
              Ce qui fait la différence
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Chaque application que nous développons intègre les meilleures pratiques
              du web moderne pour garantir qualité et pérennité.
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
                  <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-slate-300">{feature.description}</p>
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
