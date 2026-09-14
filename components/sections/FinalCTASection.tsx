"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function FinalCTASection() {
  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-slate-900 mb-6"
        >
          Et si votre prochain logiciel était conçu autour de votre entreprise ?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-slate-600 mb-10"
        >
          Parlons de vos processus, de vos outils actuels et des tâches que vos équipes aimeraient automatiser.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/contact">
            <Button size="lg">
              Parler de mon besoin
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
          <Link href="/applications">
            <Button size="lg" variant="outline">
              Découvrir nos applications métier
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
