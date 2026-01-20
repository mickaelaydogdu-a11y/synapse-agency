"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Card } from "@/components/ui/Card";

const services = [
  { value: "agents-ia", label: "Agents IA" },
  { value: "solutions-ia", label: "Solutions IA" },
  { value: "applications", label: "Applications Web/Mobile" },
  { value: "autre", label: "Autre" },
];

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setIsLoading(false);
    setIsSubmitted(true);
  };

  return (
    <main className="pt-24">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
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
              className="text-slate-400 text-lg"
            >
              Premier rendez-vous gratuit et sans engagement
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Infos */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Card>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Email</h3>
                      <p className="text-slate-400">contact@synapse-agency.fr</p>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Card>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
                      <Phone className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Téléphone</h3>
                      <p className="text-slate-400">06 32 54 55 78</p>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Card>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Adresse</h3>
                      <p className="text-slate-400">21 grande place<br />77640 Jouarre</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>

            {/* Formulaire */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-2"
            >
              <Card hover={false}>
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">Message envoyé !</h3>
                    <p className="text-slate-400">Nous vous répondrons dans les 24h.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <Input
                        label="Nom *"
                        name="name"
                        required
                        placeholder="Votre nom"
                      />
                      <Input
                        label="Email *"
                        name="email"
                        type="email"
                        required
                        placeholder="votre@email.com"
                      />
                    </div>
                    <Input
                      label="Entreprise"
                      name="company"
                      placeholder="Nom de votre entreprise"
                    />
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Service intéressé *
                      </label>
                      <select
                        name="service"
                        required
                        className="w-full px-4 py-3 bg-surface border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200"
                      >
                        <option value="">Sélectionnez un service</option>
                        {services.map((s) => (
                          <option key={s.value} value={s.value}>{s.label}</option>
                        ))}
                      </select>
                    </div>
                    <Textarea
                      label="Message *"
                      name="message"
                      required
                      placeholder="Décrivez votre projet..."
                    />
                    <Button type="submit" size="lg" className="w-full" isLoading={isLoading}>
                      Envoyer le message
                      <Send className="w-5 h-5 ml-2" />
                    </Button>
                  </form>
                )}
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
