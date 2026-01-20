"use client";

import { motion } from "framer-motion";
import { Gift, Clock, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function AuditSection() {
  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-orange-500/5" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <Gift className="w-4 h-4 text-orange-400" />
              <span className="text-sm text-orange-400">Offre exclusive</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Audit IA gratuit de 30 minutes
            </h2>

            <p className="text-lg text-slate-400 mb-6">
              Vous vous demandez comment l&apos;IA pourrait transformer votre quotidien professionnel ?
              Profitez d&apos;un échange gratuit avec nos experts pour découvrir les opportunités
              d&apos;automatisation adaptées à votre métier.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                "Analyse personnalisée de vos processus",
                "Recommandations concrètes et adaptées",
                "Estimation du temps que vous pourriez gagner",
                "Aucun engagement, 100% gratuit"
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-orange-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <Link href="/audit-gratuit">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
              >
                Réserver mon audit gratuit
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
            <div className="bg-gradient-to-br from-orange-500/20 to-primary/20 rounded-3xl p-8 border border-white/10">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-10 h-10 text-white" />
                </div>
                <div className="text-5xl font-bold text-white mb-2">30 min</div>
                <p className="text-slate-400 mb-6">pour transformer votre business</p>

                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                  <div>
                    <div className="text-2xl font-bold text-orange-400">100%</div>
                    <p className="text-xs text-slate-500">Gratuit</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-400">0</div>
                    <p className="text-xs text-slate-500">Engagement</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-400">24h</div>
                    <p className="text-xs text-slate-500">Réponse</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-500/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
