"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { AuditSection } from "@/components/home";
import { realisations } from "@/data/realisations";

export default function Realisations() {
  return (
    <main>
      <section className="relative max-h-[75vh] lg:max-h-none min-h-[auto] lg:min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/Realisations-hero.jpg"
            alt=""
            fill
            sizes="(max-width: 768px) 200vw, 100vw"
            className="object-cover object-right lg:object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-14 pt-24 lg:py-24 lg:pt-28">
          <div className="flex justify-center">
            <div className="text-center max-w-3xl">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              >
                Des applications conçues pour répondre à de <span className="gradient-text">vrais problèmes métier</span>.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg md:text-xl text-slate-200"
              >
                Les projets les plus récents que nous avons développés et livrés.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid justify-center gap-6 [grid-template-columns:repeat(auto-fit,minmax(280px,340px))]">
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
                    <Badge variant="secondary" className="mb-4 self-start">
                      {realisation.isPlaceholder ? "Exemple de projet type" : "Projet client"}
                    </Badge>
                    <p className="text-xs font-mono uppercase text-slate-400 mb-2">{realisation.category}</p>
                    <h2 className="text-lg font-bold text-white mb-3">{realisation.title}</h2>
                    <p className="text-slate-300 text-sm flex-1">{realisation.summary}</p>
                    <p className="flex items-center gap-2 text-primary-light text-sm font-medium mt-4">
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
