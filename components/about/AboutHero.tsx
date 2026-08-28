"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin } from "lucide-react";

const stats = [
  { value: "20+", label: "ans dans le numérique" },
  { value: "2018", label: "indépendant" },
  { value: "6 ans", label: "élu local à Jouarre" },
  { value: "4", label: "domaines IA maîtrisés" },
];

export function AboutHero() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[auto_1fr] gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mx-auto lg:mx-0"
          >
            <div className="relative w-64 h-80 md:w-72 md:h-96 rounded-3xl overflow-hidden shrink-0 shadow-xl shadow-primary/10 border border-slate-200">
              <Image
                src="/images/team/mickael-aydogdu.jpg"
                alt="Mickael Aydogdu, fondateur de Synapse Agency"
                fill
                sizes="(min-width: 768px) 288px, 256px"
                className="object-cover object-top"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary">Jouarre (77)</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Mickael Aydogdu
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl">
              Avant de fonder <span className="text-slate-900 font-medium">Synapse Agency</span>, j&apos;ai réparé des automates industriels,
              enseigné l&apos;informatique, géré les services techniques d&apos;une mairie et été élu pendant six ans à Jouarre.
              Ce n&apos;est pas un parcours de startup — c&apos;est un parcours de terrain, et c&apos;est ce qui infuse ma façon
              d&apos;aborder l&apos;IA : pas de jargon, des solutions qui doivent marcher, pas juste impressionner.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-4 rounded-2xl bg-surface border border-slate-200"
            >
              <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">{stat.value}</div>
              <p className="text-slate-500 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
