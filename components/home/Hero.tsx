"use client";

import { motion } from "framer-motion";
import { Sparkles, Cpu, Smartphone, Camera } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-[auto] lg:min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-12 lg:pt-20 lg:pb-0">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/Home-Synapse-agency.jpg"
          alt="Synapse Agency - Agence digitale pour les professionnels"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/40 border border-primary/50 backdrop-blur-sm mb-8"
        >
          <Sparkles className="w-4 h-4 text-white" />
          <span className="text-sm text-white">Agence digitale pour les professionnels</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]"
        >
          Votre partenaire pour{" "}
          <span className="text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">accélérer votre croissance</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-white max-w-3xl mx-auto mb-10 drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]"
        >
          Intelligence artificielle, applications sur mesure et production visuelle.
          Trois expertises au service de votre transformation digitale.
        </motion.p>

        {/* Service Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/40 border border-secondary/50 backdrop-blur-sm">
            <Cpu className="w-4 h-4 text-secondary" />
            <span className="text-sm text-white">Solutions IA</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/40 border border-accent/50 backdrop-blur-sm">
            <Smartphone className="w-4 h-4 text-accent" />
            <span className="text-sm text-white">Applications</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/40 border border-violet-500/50 backdrop-blur-sm">
            <Camera className="w-4 h-4 text-violet-400" />
            <span className="text-sm text-white">Production Visuelle</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
