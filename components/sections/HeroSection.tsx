"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section className="relative min-h-[auto] lg:min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-12 lg:pt-20 lg:pb-0">
      <div className="absolute inset-0">
        <Image
          src="/images/Home-Synapse-agency.jpg"
          alt="Synapse Agency - Applications métier et intelligence artificielle"
          fill
          sizes="(max-width: 768px) 200vw, 100vw"
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance"
        >
          Des applications métier intelligentes, conçues pour votre entreprise.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto mb-10"
        >
          Nous développons des applications web et mobiles sur mesure qui centralisent vos données,
          automatisent vos processus et intègrent l&apos;intelligence artificielle là où elle crée réellement de la valeur.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <Link href="/contact">
            <Button size="lg">
              Parler de mon projet
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
          <Link href="/applications">
            <Button size="lg" variant="outline">
              Découvrir nos solutions
            </Button>
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-sm text-slate-400"
        >
          Applications métier • Intelligence artificielle • Automatisation • Intégrations
        </motion.p>
      </div>
    </section>
  );
}
