"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { realisations } from "@/data/realisations";

export function CaseStudiesSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Des applications conçues pour répondre à de vrais problèmes métier.
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto">
            Un projet client réel, et des exemples de projets types pour illustrer d&apos;autres cas d&apos;usage possibles.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {realisations.map((study, index) => (
            <motion.div
              key={study.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/realisations/${study.slug}`}>
                <Card className="h-full flex flex-col">
                  <Badge variant="secondary" className="mb-4 self-start">
                    {study.isPlaceholder ? "Exemple de projet type" : "Projet client réel"}
                  </Badge>
                  <h3 className="text-lg font-bold text-white mb-3">{study.title}</h3>
                  <p className="text-slate-300 text-sm flex-1">{study.summary}</p>
                  <p className="flex items-center gap-2 text-primary-light text-sm font-medium mt-4">
                    Voir le projet
                    <ArrowRight className="w-4 h-4" />
                  </p>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/realisations">
            <Button size="lg" variant="outline">
              Voir toutes les réalisations
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
