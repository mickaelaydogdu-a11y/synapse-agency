"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Card } from "@/components/ui/Card";
import { PROJECT_TYPES, BUDGET_RANGES } from "@/lib/validations/contact";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company") || "",
      phone: formData.get("phone") || "",
      role: formData.get("role") || "",
      projectType: formData.getAll("projectType"),
      message: formData.get("message"),
      usersEstimate: formData.get("usersEstimate") || "",
      budget: formData.get("budget") || "",
      deadline: formData.get("deadline") || "",
      consent: formData.get("consent") === "on",
      website: formData.get("website") || "",
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });

      let result;
      try {
        result = await response.json();
      } catch (parseError) {
        console.error("JSON parse error:", parseError);
        if (response.ok || response.status === 200) {
          setIsSubmitted(true);
          form.reset();
          return;
        }
        throw new Error("Erreur de format de réponse");
      }

      if (response.ok && result.success) {
        setIsSubmitted(true);
        form.reset();
      } else {
        setError(result.error || "Une erreur est survenue. Contactez-nous à contact@synapse-agency.fr");
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setError("Erreur de connexion. Vérifiez votre connexion internet.");
    } finally {
      setIsLoading(false);
    }
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
              className="text-slate-300 text-lg"
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
                      <p className="text-slate-300">contact@synapse-agency.fr</p>
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
                      <p className="text-slate-300">06 32 54 55 78</p>
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
                      <p className="text-slate-300">21 grande place<br />77640 Jouarre</p>
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
                    <p className="text-slate-300">Nous vous répondrons dans les 24h.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                      <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
                        {error}
                      </div>
                    )}

                    {/* Honeypot anti-spam : invisible pour un visiteur humain */}
                    <input
                      type="text"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      className="absolute -left-[9999px] w-px h-px opacity-0"
                      aria-hidden="true"
                    />

                    <div className="grid md:grid-cols-2 gap-6">
                      <Input label="Nom *" name="name" required placeholder="Votre nom" />
                      <Input label="Email *" name="email" type="email" required placeholder="votre@email.com" />
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                      <Input label="Entreprise" name="company" placeholder="Nom de votre entreprise" />
                      <Input label="Téléphone" name="phone" type="tel" placeholder="06 12 34 56 78" />
                      <Input label="Fonction" name="role" placeholder="Ex : Directeur commercial" />
                    </div>

                    <fieldset>
                      <legend className="block text-sm font-medium text-slate-200 mb-2">
                        Type de projet
                      </legend>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {PROJECT_TYPES.map((type) => (
                          <label key={type} className="flex items-center gap-2 text-sm text-slate-300">
                            <input
                              type="checkbox"
                              name="projectType"
                              value={type}
                              className="w-4 h-4 rounded border-white/20 bg-surface accent-primary"
                            />
                            {type}
                          </label>
                        ))}
                      </div>
                    </fieldset>

                    <Textarea
                      label="Décrivez votre problématique *"
                      name="message"
                      required
                      placeholder="Quel processus souhaitez-vous simplifier, centraliser ou automatiser ?"
                    />

                    <div className="grid md:grid-cols-2 gap-6">
                      <Input
                        label="Nombre d'utilisateurs estimé"
                        name="usersEstimate"
                        placeholder="Ex : 5 à 10 collaborateurs"
                      />
                      <Input label="Délai souhaité" name="deadline" placeholder="Ex : sous 3 mois" />
                    </div>

                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-slate-200 mb-2">
                        Budget estimatif
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        defaultValue=""
                        className="w-full px-4 py-3 bg-surface border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200"
                      >
                        <option value="">À définir</option>
                        {BUDGET_RANGES.map((range) => (
                          <option key={range} value={range}>{range}</option>
                        ))}
                      </select>
                    </div>

                    <label className="flex items-start gap-3 text-sm text-slate-300">
                      <input
                        type="checkbox"
                        name="consent"
                        required
                        className="w-4 h-4 mt-0.5 rounded border-white/20 bg-surface accent-primary shrink-0"
                      />
                      <span>
                        J&apos;accepte que mes données soient utilisées pour traiter ma demande, conformément à la{" "}
                        <a href="/confidentialite" className="text-primary hover:underline">
                          politique de confidentialité
                        </a>. *
                      </span>
                    </label>

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
