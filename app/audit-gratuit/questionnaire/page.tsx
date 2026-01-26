"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, ArrowLeft, Send } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";

const secteurs = [
  "E-commerce",
  "Services B2B",
  "Services B2C",
  "Industrie",
  "Santé",
  "Finance",
  "Immobilier",
  "Marketing/Communication",
  "Formation/Éducation",
  "Autre",
];

const taillesEntreprise = [
  "1-5 employés",
  "6-10 employés",
  "11-50 employés",
  "51-200 employés",
  "200+ employés",
];

const tachesRepetitives = [
  "Gestion des emails",
  "Création de devis/factures",
  "Saisie de données",
  "Réponses aux clients",
  "Rédaction de contenus",
  "Planification/Organisation",
  "Recherche d'informations",
  "Reporting/Tableaux de bord",
  "Gestion administrative",
  "Autre",
];

const objectifs = [
  "Gagner du temps",
  "Réduire les coûts",
  "Améliorer la qualité",
  "Automatiser les processus",
  "Améliorer l'expérience client",
  "Augmenter la productivité",
  "Se concentrer sur le cœur de métier",
];

const urgences = [
  "Immédiat (< 1 mois)",
  "Court terme (1-3 mois)",
  "Moyen terme (3-6 mois)",
  "Long terme (6-12 mois)",
  "Exploration / Pas urgent",
];

export default function Questionnaire() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedTaches, setSelectedTaches] = useState<string[]>([]);
  const [selectedObjectifs, setSelectedObjectifs] = useState<string[]>([]);

  const toggleSelection = (value: string, list: string[], setter: (list: string[]) => void) => {
    if (list.includes(value)) {
      setter(list.filter((item) => item !== value));
    } else {
      setter([...list, value]);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Ajouter les sélections multiples au formData
    formData.set("taches_repetitives", selectedTaches.join(", "));
    formData.set("objectifs", selectedObjectifs.join(", "));

    const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID || "xwvoowze";

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
        setSelectedTaches([]);
        setSelectedObjectifs([]);
      } else {
        const data = await response.json();
        console.error("Formspree error:", data);
        setError("Une erreur est survenue. Contactez-nous à contact@synapse-agency.fr");
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setError("Erreur de connexion. Vérifiez votre connexion internet.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="pt-24 pb-20 min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <Link
            href="/audit-gratuit"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à la page audit
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Questionnaire <span className="gradient-text">pré-audit</span>
          </h1>
          <p className="text-lg text-slate-400">
            Aidez-nous à mieux comprendre vos besoins pour un audit plus personnalisé
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card variant="gradient" hover={false} className="p-6 md:p-8">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Questionnaire envoyé !</h3>
                <p className="text-slate-400 mb-6">
                  Merci pour vos réponses. Nous les analyserons avant notre rendez-vous.
                </p>
                <Link href="/audit-gratuit">
                  <Button variant="outline">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Retour à la page audit
                  </Button>
                </Link>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {error && (
                  <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
                    {error}
                  </div>
                )}

                {/* Question 1 : Secteur */}
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-3">
                    1. Secteur d&apos;activité *
                  </label>
                  <select
                    name="secteur"
                    required
                    className="w-full px-4 py-3 bg-surface border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200"
                  >
                    <option value="">Sélectionnez votre secteur</option>
                    {secteurs.map((secteur) => (
                      <option key={secteur} value={secteur}>
                        {secteur}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Question 2 : Taille entreprise */}
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-3">
                    2. Taille de votre entreprise *
                  </label>
                  <select
                    name="taille_entreprise"
                    required
                    className="w-full px-4 py-3 bg-surface border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200"
                  >
                    <option value="">Sélectionnez la taille</option>
                    {taillesEntreprise.map((taille) => (
                      <option key={taille} value={taille}>
                        {taille}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Question 3 : Tâches répétitives */}
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-3">
                    3. Principales tâches répétitives * (plusieurs choix possibles)
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {tachesRepetitives.map((tache) => (
                      <button
                        key={tache}
                        type="button"
                        onClick={() => toggleSelection(tache, selectedTaches, setSelectedTaches)}
                        className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 text-left ${
                          selectedTaches.includes(tache)
                            ? "bg-primary/20 border-2 border-primary text-white"
                            : "bg-surface border border-white/10 text-slate-400 hover:border-white/20 hover:text-white"
                        }`}
                      >
                        {tache}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Question 4 : Temps passé */}
                <div>
                  <Input
                    label="4. Temps passé sur ces tâches (heures/semaine) *"
                    name="temps_taches"
                    type="number"
                    min="0"
                    placeholder="Ex: 10"
                    required
                  />
                </div>

                {/* Question 5 : Outils actuels */}
                <div>
                  <Textarea
                    label="5. Outils actuellement utilisés"
                    name="outils_actuels"
                    placeholder="Ex: Excel, Google Sheets, CRM Pipedrive, Notion..."
                    rows={3}
                  />
                </div>

                {/* Question 7 : Objectifs principaux */}
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-3">
                    6. Objectifs principaux * (plusieurs choix possibles)
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {objectifs.map((objectif) => (
                      <button
                        key={objectif}
                        type="button"
                        onClick={() => toggleSelection(objectif, selectedObjectifs, setSelectedObjectifs)}
                        className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 text-left ${
                          selectedObjectifs.includes(objectif)
                            ? "bg-orange-500/20 border-2 border-orange-500 text-white"
                            : "bg-surface border border-white/10 text-slate-400 hover:border-white/20 hover:text-white"
                        }`}
                      >
                        {objectif}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Question 8 : Urgence */}
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-3">
                    7. Urgence du projet *
                  </label>
                  <select
                    name="urgence"
                    required
                    className="w-full px-4 py-3 bg-surface border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200"
                  >
                    <option value="">Sélectionnez l&apos;urgence</option>
                    {urgences.map((urgence) => (
                      <option key={urgence} value={urgence}>
                        {urgence}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Submit */}
                <div className="pt-4">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
                    isLoading={isLoading}
                  >
                    Envoyer le questionnaire
                    <Send className="w-5 h-5 ml-2" />
                  </Button>
                  <p className="text-center text-xs text-slate-500 mt-4">
                    Vos réponses nous permettront de préparer un audit personnalisé
                  </p>
                </div>
              </form>
            )}
          </Card>
        </motion.div>
      </div>
    </main>
  );
}
