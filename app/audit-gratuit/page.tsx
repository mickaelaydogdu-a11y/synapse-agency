"use client";

import { motion } from "framer-motion";
import { Clock, CheckCircle, Lightbulb, Target, Calendar, Gift, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CustomCalendar } from "@/components/audit";

const benefits = [
  {
    icon: Target,
    title: "Analyse personnalisée",
    description: "Nous analysons vos processus actuels et identifions les opportunités d'automatisation."
  },
  {
    icon: Lightbulb,
    title: "Recommandations concrètes",
    description: "Vous repartez avec des solutions IA adaptées à votre métier et votre budget."
  },
  {
    icon: Clock,
    title: "Gain de temps estimé",
    description: "Nous calculons le temps que vous pourriez économiser chaque semaine."
  },
  {
    icon: Gift,
    title: "100% gratuit",
    description: "Aucun engagement, aucune carte bancaire. Juste 30 minutes de valeur."
  },
];

const steps = [
  { number: "1", title: "Réservez votre créneau", description: "Choisissez votre moment sur le calendrier" },
  { number: "2", title: "Remplissez le questionnaire", description: "7 questions pour personnaliser votre audit" },
  { number: "3", title: "Recevez la confirmation", description: "Email avec le lien de visioconférence" },
  { number: "4", title: "Échange de 30 minutes", description: "Discutez de vos besoins et opportunités IA" },
  { number: "5", title: "Recevez votre audit", description: "Plan d'action personnalisé sous 24h" },
];

export default function AuditGratuit() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 via-background to-background" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <Badge className="mb-6 bg-orange-500/20 text-orange-400 border-orange-500/30">
              <Gift className="w-4 h-4 mr-2" />
              Audit gratuit - 30 minutes
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Découvrez en 30 minutes comment <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                l&apos;IA peut devenir votre meilleur allié
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10">
              Un échange gratuit et sans engagement pour identifier les opportunités
              d&apos;automatisation dans votre entreprise.
            </p>
            <div className="flex items-center justify-center gap-2 text-slate-300">
              <Clock className="w-5 h-5 text-orange-400" />
              <span>30 minutes</span>
              <span className="mx-2">•</span>
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>100% gratuit</span>
              <span className="mx-2">•</span>
              <Calendar className="w-5 h-5 text-primary" />
              <span>En visio</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ce que vous obtenez
            </h2>
            <p className="text-slate-400">Un audit complet et personnalisé de votre potentiel IA</p>
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
                  <div className="w-14 h-14 rounded-xl bg-orange-500/20 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-7 h-7 text-orange-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-slate-400 text-sm">{benefit.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
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
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mx-auto mb-4 text-xl font-bold text-white">
                  {step.number}
                </div>
                <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                <p className="text-slate-400 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Calendly Widget */}
      <section className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Réservez votre créneau
              </h2>
              <p className="text-slate-400 text-lg">
                Choisissez le moment qui vous convient pour votre audit gratuit de 30 minutes
              </p>
            </div>

            <CustomCalendar />

            {/* Bouton vers le questionnaire */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-8 text-center"
            >
              <p className="text-slate-400 mb-4">
                Une fois votre rendez-vous réservé, remplissez le questionnaire pré-audit
              </p>
              <Link href="/audit-gratuit/questionnaire">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-orange-500/30 text-orange-400 hover:bg-orange-500/10"
                >
                  Accéder au questionnaire
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ mini */}
      <section className="py-20 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Questions fréquentes
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Combien de temps dure l'audit ?",
                a: "L'audit dure 30 minutes en visioconférence. C'est suffisant pour analyser vos besoins et vous proposer des premières pistes."
              },
              {
                q: "Est-ce vraiment gratuit ?",
                a: "Oui, 100% gratuit et sans engagement. C'est notre façon de vous montrer notre expertise avant toute collaboration."
              },
              {
                q: "Que dois-je préparer ?",
                a: "Rien de spécial ! Venez simplement avec vos questions et une idée des tâches qui vous prennent le plus de temps."
              },
            ].map((faq) => (
              <Card key={faq.q} variant="glass" hover={false}>
                <h3 className="text-white font-semibold mb-2">{faq.q}</h3>
                <p className="text-slate-400 text-sm">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
