"use client";

import { motion } from "framer-motion";
import { MessageCircle, Clock, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function AuditSection() {
  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <MessageCircle className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary">Premier contact</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Échangeons sur votre projet
            </h2>

            <p className="text-lg text-slate-600 mb-6">
              Vous avez un projet digital en tête ? Une idée d&apos;automatisation ?
              Besoin de valoriser votre image ? Prenez 30 minutes pour en discuter
              avec nous et découvrir comment nous pouvons vous aider.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                "Écoute de vos besoins et objectifs",
                "Conseils personnalisés et sans engagement",
                "Premières pistes de solutions adaptées",
                "Estimation budgétaire indicative"
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-600">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <Link href="/contact">
              <Button size="lg">
                Prendre rendez-vous
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 border border-slate-200">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-10 h-10 text-white" />
                </div>
                <div className="text-5xl font-bold text-slate-900 mb-2">30 min</div>
                <p className="text-slate-600 mb-6">pour parler de votre projet</p>

                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200">
                  <div>
                    <div className="text-2xl font-bold text-primary">100%</div>
                    <p className="text-xs text-slate-500">Gratuit</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">0</div>
                    <p className="text-xs text-slate-500">Engagement</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">24h</div>
                    <p className="text-xs text-slate-500">Réponse</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
