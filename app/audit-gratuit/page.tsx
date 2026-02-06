"use client";

import { motion } from "framer-motion";
import { Clock, CheckCircle, Lightbulb, Target, Calendar, Gift, Cpu, Smartphone, Camera } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { CustomCalendar } from "@/components/audit";

const benefits = [
  {
    icon: Target,
    title: "Analyse personnalisée",
    description: "Nous analysons vos besoins et identifions les solutions digitales adaptées à votre activité."
  },
  {
    icon: Lightbulb,
    title: "Recommandations concrètes",
    description: "Vous repartez avec des pistes de solutions adaptées à votre métier et votre budget."
  },
  {
    icon: Clock,
    title: "Gain de temps estimé",
    description: "Nous évaluons l'impact potentiel sur votre productivité et votre image."
  },
  {
    icon: Gift,
    title: "100% gratuit",
    description: "Aucun engagement, aucune carte bancaire. Juste 30 minutes de valeur."
  },
];

const services = [
  {
    icon: Cpu,
    title: "Solutions IA",
    description: "Automatisation, agents conversationnels, extraction de données",
    color: "from-secondary to-cyan-400",
  },
  {
    icon: Smartphone,
    title: "Applications",
    description: "Web, mobile, portails clients, outils métier sur mesure",
    color: "from-accent to-purple-400",
  },
  {
    icon: Camera,
    title: "Production Visuelle",
    description: "Photo, vidéo, drone pour valoriser votre image",
    color: "from-violet-500 to-pink-400",
  },
];

const steps = [
  { number: "1", title: "Réservez votre créneau", description: "Choisissez votre moment sur le calendrier" },
  { number: "2", title: "Complétez le formulaire", description: "Vos informations et votre projet" },
  { number: "3", title: "Recevez la confirmation", description: "Email avec le lien de visioconférence" },
  { number: "4", title: "Échange de 30 minutes", description: "Discutez de vos besoins et objectifs" },
  { number: "5", title: "Recevez nos recommandations", description: "Propositions personnalisées sous 48h" },
];

export default function AuditGratuit() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">
              <Gift className="w-4 h-4 mr-2" />
              Consultation gratuite - 30 minutes
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Échangeons sur votre <br />
              <span className="gradient-text">projet digital</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10">
              30 minutes pour découvrir comment nous pouvons vous aider à développer
              votre activité grâce au digital : IA, applications ou production visuelle.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-slate-600">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <span>30 minutes</span>
              </div>
              <span className="hidden sm:inline mx-2">•</span>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>100% gratuit</span>
              </div>
              <span className="hidden sm:inline mx-2">•</span>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-secondary" />
                <span>En visio</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services concernés */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Un échange pour tous vos projets
            </h2>
            <p className="text-slate-600">Quel que soit votre besoin, nous pouvons en discuter</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full text-center">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mx-auto mb-4`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-slate-600 text-sm">{service.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Ce que vous obtenez
            </h2>
            <p className="text-slate-600">Un échange de valeur, sans engagement</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full text-center">
                  <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</h3>
                  <p className="text-slate-600 text-sm">{benefit.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Comment ça marche ?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4 text-xl font-bold text-white">
                  {step.number}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Calendly Widget */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Réservez votre créneau
              </h2>
              <p className="text-slate-600 text-lg">
                Choisissez le moment qui vous convient pour échanger sur votre projet
              </p>
            </div>

            <CustomCalendar />
          </motion.div>
        </div>
      </section>

      {/* FAQ mini */}
      <section className="py-20 bg-surface">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Questions fréquentes
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Combien de temps dure l'échange ?",
                a: "L'échange dure 30 minutes en visioconférence. C'est suffisant pour comprendre vos besoins et vous proposer des premières pistes."
              },
              {
                q: "Est-ce vraiment gratuit ?",
                a: "Oui, 100% gratuit et sans engagement. C'est notre façon de faire connaissance et de vous montrer notre approche avant toute collaboration."
              },
              {
                q: "Que dois-je préparer ?",
                a: "Rien de spécial ! Venez simplement avec vos questions et une idée de votre projet ou des problématiques que vous rencontrez."
              },
              {
                q: "Je ne sais pas encore quel service me convient...",
                a: "C'est justement le but de cet échange ! Nous vous aiderons à identifier la meilleure solution selon vos besoins et votre budget."
              },
            ].map((faq) => (
              <Card key={faq.q} variant="glass" hover={false}>
                <h3 className="text-slate-900 font-semibold mb-2">{faq.q}</h3>
                <p className="text-slate-600 text-sm">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
