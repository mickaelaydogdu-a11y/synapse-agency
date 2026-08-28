"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { AuditSection } from "@/components/home";
import { realisations } from "@/data/realisations";

export default function Realisations() {
  return (
    <main>
      <section className="pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Des applications conçues pour répondre à de <span className="gradient-text">vrais problèmes métier</span>.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-sm max-w-2xl mx-auto"
          >
            Exemples de projets types — nos premières études de cas client seront publiées ici dès qu&apos;elles seront disponibles.
          </motion.p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {realisations.map((realisation, index) => (
              <motion.div
                key={realisation.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/realisations/${realisation.slug}`}>
                  <Card className="h-full flex flex-col">
                    <Badge variant="secondary" className="mb-4 self-start">Exemple de projet type</Badge>
                    <p className="text-xs font-mono uppercase text-slate-500 mb-2">{realisation.category}</p>
                    <h2 className="text-lg font-bold text-white mb-3">{realisation.title}</h2>
                    <p className="text-slate-300 text-sm flex-1">{realisation.summary}</p>
                    <p className="flex items-center gap-2 text-primary text-sm font-medium mt-4">
                      Voir le projet
                      <ArrowRight className="w-4 h-4" />
                    </p>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AuditSection />
    </main>
  );
}
