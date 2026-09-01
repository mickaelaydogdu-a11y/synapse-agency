"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { Card } from "@/components/ui/Card";

export default function Contact() {
  return (
    <main className="pt-24">
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              Parlons de votre <span className="gradient-text">projet</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-slate-300 text-lg"
            >
              Premier rendez-vous gratuit et sans engagement, écrivez-moi ou appelez-moi directement.
            </motion.p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="h-full text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-primary-light" />
                </div>
                <h2 className="text-white font-semibold mb-1">Email</h2>
                <a href="mailto:contact@synapse-agency.fr" className="text-slate-300 hover:text-primary-light transition-colors">
                  contact@synapse-agency.fr
                </a>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="h-full text-center">
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-secondary-light" />
                </div>
                <h2 className="text-white font-semibold mb-1">Téléphone</h2>
                <p className="text-slate-300">06 32 54 55 78</p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="h-full text-center">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-accent-light" />
                </div>
                <h2 className="text-white font-semibold mb-1">Localisation</h2>
                <p className="text-slate-300">Jouarre - Seine-et-Marne</p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
