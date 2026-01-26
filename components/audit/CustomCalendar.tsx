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

export function CustomCalendar() {
  const [currentWeek, setCurrentWeek] = useState(startOfWeek(new Date(), { weekStartsOn: 1 }));
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [step, setStep] = useState<"date" | "time" | "form" | "success">("date");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Ajouter date et heure au formData
    formData.set("date_rdv", format(selectedDate!, "dd/MM/yyyy", { locale: fr }));
    formData.set("heure_rdv", selectedTime!);
    formData.set("datetime_full", `${format(selectedDate!, "EEEE dd MMMM yyyy", { locale: fr })} à ${selectedTime}`);

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
        setStep("success");
        form.reset();
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

            <form onSubmit={handleSubmit} className="space-y-4">
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
              <Textarea
                label="Décrivez brièvement vos besoins"
                name="message"
                placeholder="Ex: J'aimerais automatiser la gestion de mes emails et la création de devis..."
                rows={4}
              />
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
