"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Calendar, Clock, CheckCircle, Send } from "lucide-react";
import { format, addDays, startOfWeek, addWeeks, isSameDay, isAfter, isBefore, startOfDay } from "date-fns";
import { fr } from "date-fns/locale";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";

// Créneaux horaires disponibles (format 24h)
const TIME_SLOTS = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00"
];

// Jours de la semaine disponibles (1 = Lundi, 5 = Vendredi)
const AVAILABLE_DAYS = [1, 2, 3, 4, 5]; // Lundi à Vendredi

// Questions du questionnaire pré-audit
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

export function CustomCalendar() {
  const [currentWeek, setCurrentWeek] = useState(startOfWeek(new Date(), { weekStartsOn: 1 }));
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [step, setStep] = useState<"date" | "time" | "form" | "success">("date");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedTaches, setSelectedTaches] = useState<string[]>([]);
  const [selectedObjectifs, setSelectedObjectifs] = useState<string[]>([]);

  // Générer les jours de la semaine
  const weekDays = Array.from({ length: 7 }, (_, i) => addDays(currentWeek, i));

  const nextWeek = () => setCurrentWeek(addWeeks(currentWeek, 1));
  const prevWeek = () => {
    const newWeek = addWeeks(currentWeek, -1);
    if (isAfter(newWeek, startOfDay(new Date()))) {
      setCurrentWeek(newWeek);
    }
  };

  const selectDate = (date: Date) => {
    const dayOfWeek = date.getDay();
    if (!AVAILABLE_DAYS.includes(dayOfWeek)) return;
    if (isBefore(date, startOfDay(new Date()))) return;

    setSelectedDate(date);
    setStep("time");
  };

  const selectTime = (time: string) => {
    setSelectedTime(time);
    setStep("form");
  };

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

    // Validation des sélections multiples
    if (selectedTaches.length === 0) {
      setError("Veuillez sélectionner au moins une tâche répétitive");
      setIsLoading(false);
      return;
    }

    if (selectedObjectifs.length === 0) {
      setError("Veuillez sélectionner au moins un objectif");
      setIsLoading(false);
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Construire l'objet JSON avec toutes les données
    const data = {
      date_rdv: format(selectedDate!, "dd/MM/yyyy", { locale: fr }),
      heure_rdv: selectedTime!,
      datetime_full: `${format(selectedDate!, "EEEE dd MMMM yyyy", { locale: fr })} à ${selectedTime}`,
      prenom: formData.get("prenom"),
      nom: formData.get("nom"),
      email: formData.get("email"),
      entreprise: formData.get("entreprise"),
      telephone: formData.get("telephone") || "",
      secteur: formData.get("secteur"),
      taille_entreprise: formData.get("taille_entreprise"),
      taches_repetitives: selectedTaches.join(", "),
      temps_taches: formData.get("temps_taches"),
      outils_actuels: formData.get("outils_actuels") || "",
      objectifs: selectedObjectifs.join(", "),
      urgence: formData.get("urgence"),
      message: formData.get("message") || "",
    };

    const apiUrl = "/api/audit-booking";

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      let result;
      try {
        result = await response.json();
      } catch (parseError) {
        console.error("JSON parse error:", parseError);
        // Si l'email est envoyé mais qu'il y a une erreur de parsing, on considère que c'est un succès
        if (response.ok || response.status === 200) {
          setStep("success");
          form.reset();
          setSelectedTaches([]);
          setSelectedObjectifs([]);
          return;
        }
        throw new Error("Erreur de format de réponse");
      }

      if (response.ok && result.success) {
        setStep("success");
        form.reset();
        setSelectedTaches([]);
        setSelectedObjectifs([]);
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

  const isAvailableDay = (date: Date) => {
    const dayOfWeek = date.getDay();
    return AVAILABLE_DAYS.includes(dayOfWeek) && !isBefore(date, startOfDay(new Date()));
  };

  return (
    <Card variant="glass" hover={false} className="p-6 md:p-8">
      <AnimatePresence mode="wait">
        {/* ÉTAPE 1: Sélection de la date */}
        {step === "date" && (
          <motion.div
            key="date"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Calendar className="w-5 h-5 text-orange-400" />
                Choisissez une date
              </h3>
              <div className="flex items-center gap-2">
                <button
                  onClick={prevWeek}
                  className="p-2 hover:bg-white/5 rounded-lg transition-colors"
                  type="button"
                >
                  <ChevronLeft className="w-5 h-5 text-slate-400" />
                </button>
                <span className="text-sm text-slate-400 min-w-[120px] text-center">
                  {format(currentWeek, "MMMM yyyy", { locale: fr })}
                </span>
                <button
                  onClick={nextWeek}
                  className="p-2 hover:bg-white/5 rounded-lg transition-colors"
                  type="button"
                >
                  <ChevronRight className="w-5 h-5 text-slate-400" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-2">
              {["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"].map((day) => (
                <div key={day} className="text-center text-xs text-slate-500 font-medium py-2">
                  {day}
                </div>
              ))}
              {weekDays.map((date, index) => {
                const available = isAvailableDay(date);
                const isToday = isSameDay(date, new Date());

                return (
                  <button
                    key={index}
                    onClick={() => selectDate(date)}
                    disabled={!available}
                    type="button"
                    className={`
                      aspect-square rounded-xl text-sm font-medium transition-all duration-200
                      ${available
                        ? "bg-surface hover:bg-orange-500/20 hover:border-orange-500 text-white border border-white/10 cursor-pointer"
                        : "bg-surface/30 text-slate-600 cursor-not-allowed border border-transparent"
                      }
                      ${isToday && available ? "ring-2 ring-orange-500/50" : ""}
                    `}
                  >
                    <div className="flex flex-col items-center justify-center h-full">
                      <span>{format(date, "d")}</span>
                      {isToday && <span className="text-[10px] text-orange-400">Auj.</span>}
                    </div>
                  </button>
                );
              })}
            </div>

            <p className="text-xs text-slate-500 mt-4 text-center">
              Disponible du lundi au vendredi
            </p>
          </motion.div>
        )}

        {/* ÉTAPE 2: Sélection de l'heure */}
        {step === "time" && selectedDate && (
          <motion.div
            key="time"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <div className="mb-6">
              <button
                onClick={() => {
                  setStep("date");
                  setSelectedTime(null);
                }}
                className="text-sm text-slate-400 hover:text-white mb-4 transition-colors"
                type="button"
              >
                ← Changer la date
              </button>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Clock className="w-5 h-5 text-orange-400" />
                Choisissez un créneau
              </h3>
              <p className="text-slate-400 mt-2">
                {format(selectedDate, "EEEE dd MMMM yyyy", { locale: fr })}
              </p>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
              {TIME_SLOTS.map((time) => (
                <button
                  key={time}
                  onClick={() => selectTime(time)}
                  type="button"
                  className="px-4 py-3 bg-surface border border-white/10 rounded-xl text-white hover:bg-orange-500/20 hover:border-orange-500 transition-all duration-200 font-medium"
                >
                  {time}
                </button>
              ))}
            </div>

            <p className="text-xs text-slate-500 mt-4 text-center">
              Durée : 30 minutes • En visioconférence
            </p>
          </motion.div>
        )}

        {/* ÉTAPE 3: Formulaire */}
        {step === "form" && selectedDate && selectedTime && (
          <motion.div
            key="form"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <div className="mb-6">
              <button
                onClick={() => setStep("time")}
                className="text-sm text-slate-400 hover:text-white mb-4 transition-colors"
                type="button"
              >
                ← Changer l'heure
              </button>
              <h3 className="text-xl font-bold text-white mb-2">
                Confirmez votre rendez-vous
              </h3>
              <div className="inline-block px-4 py-2 bg-orange-500/20 border border-orange-500/30 rounded-lg">
                <p className="text-orange-400 font-medium">
                  📅 {format(selectedDate, "EEEE dd MMMM yyyy", { locale: fr })} à {selectedTime}
                </p>
              </div>
            </div>

            {error && (
              <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm mb-6">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Informations de contact */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white">Vos coordonnées</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <Input label="Prénom *" name="prenom" placeholder="Jean" required />
                  <Input label="Nom *" name="nom" placeholder="Dupont" required />
                </div>
                <Input
                  label="Email professionnel *"
                  name="email"
                  type="email"
                  placeholder="jean@entreprise.fr"
                  required
                />
                <Input label="Entreprise *" name="entreprise" placeholder="Nom de votre entreprise" required />
                <Input label="Téléphone" name="telephone" type="tel" placeholder="+33 6 12 34 56 78" />
              </div>

              {/* Questionnaire */}
              <div className="space-y-4 pt-4 border-t border-white/10">
                <h4 className="text-lg font-semibold text-white">Votre situation</h4>

                {/* Secteur d'activité */}
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Secteur d&apos;activité *
                  </label>
                  <select
                    name="secteur"
                    required
                    className="w-full px-4 py-3 bg-surface border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all duration-200"
                  >
                    <option value="">Sélectionnez votre secteur</option>
                    {secteurs.map((secteur) => (
                      <option key={secteur} value={secteur}>
                        {secteur}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Taille entreprise */}
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Taille de votre entreprise *
                  </label>
                  <select
                    name="taille_entreprise"
                    required
                    className="w-full px-4 py-3 bg-surface border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all duration-200"
                  >
                    <option value="">Sélectionnez la taille</option>
                    {taillesEntreprise.map((taille) => (
                      <option key={taille} value={taille}>
                        {taille}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Tâches répétitives */}
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-3">
                    Principales tâches répétitives * (plusieurs choix possibles)
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {tachesRepetitives.map((tache) => (
                      <button
                        key={tache}
                        type="button"
                        onClick={() => toggleSelection(tache, selectedTaches, setSelectedTaches)}
                        className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 text-left ${
                          selectedTaches.includes(tache)
                            ? "bg-orange-500/20 border-2 border-orange-500 text-white"
                            : "bg-surface border border-white/10 text-slate-400 hover:border-white/20 hover:text-white"
                        }`}
                      >
                        {tache}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Temps passé */}
                <Input
                  label="Temps passé sur ces tâches (heures/semaine) *"
                  name="temps_taches"
                  type="number"
                  min="0"
                  placeholder="Ex: 10"
                  required
                />

                {/* Outils actuels */}
                <Textarea
                  label="Outils actuellement utilisés"
                  name="outils_actuels"
                  placeholder="Ex: Excel, Google Sheets, CRM Pipedrive, Notion..."
                  rows={3}
                />

                {/* Objectifs principaux */}
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-3">
                    Objectifs principaux * (plusieurs choix possibles)
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

                {/* Urgence */}
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Urgence du projet *
                  </label>
                  <select
                    name="urgence"
                    required
                    className="w-full px-4 py-3 bg-surface border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all duration-200"
                  >
                    <option value="">Sélectionnez l&apos;urgence</option>
                    {urgences.map((urgence) => (
                      <option key={urgence} value={urgence}>
                        {urgence}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Besoins supplémentaires */}
                <Textarea
                  label="Décrivez brièvement vos besoins"
                  name="message"
                  placeholder="Ex: J'aimerais automatiser la gestion de mes emails et la création de devis..."
                  rows={4}
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
                isLoading={isLoading}
              >
                Confirmer mon rendez-vous
                <Send className="w-5 h-5 ml-2" />
              </Button>
            </form>
          </motion.div>
        )}

        {/* ÉTAPE 4: Succès */}
        {step === "success" && (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12"
          >
            <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Rendez-vous confirmé !</h3>
            <p className="text-slate-400 mb-2">
              Vous recevrez un email de confirmation avec le lien de visioconférence.
            </p>
            <p className="text-sm text-slate-500">
              En attendant, n&apos;oubliez pas de remplir le questionnaire pré-audit.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
}
