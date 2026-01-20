"use client";

import { useState } from "react";
import {
  Home, Search, Bell, User, MapPin, Bed, Square, Euro,
  Bot, X, Send, Sparkles, Calendar, FileText, TrendingUp, Users,
  ChevronRight, Building
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface Property {
  id: number;
  title: string;
  address: string;
  price: number;
  surface: number;
  rooms: number;
  status: "disponible" | "en-visite" | "sous-offre";
  image: string;
}

const initialProperties: Property[] = [
  {
    id: 1,
    title: "Appartement T3 Centre-ville",
    address: "15 rue de la République, Lyon",
    price: 285000,
    surface: 72,
    rooms: 3,
    status: "disponible",
    image: "🏢",
  },
  {
    id: 2,
    title: "Maison avec jardin",
    address: "8 allée des Roses, Villeurbanne",
    price: 425000,
    surface: 120,
    rooms: 5,
    status: "en-visite",
    image: "🏡",
  },
  {
    id: 3,
    title: "Studio rénové",
    address: "42 cours Lafayette, Lyon",
    price: 145000,
    surface: 28,
    rooms: 1,
    status: "sous-offre",
    image: "🏠",
  },
];

const statusConfig = {
  "disponible": { label: "Disponible", color: "bg-green-500/20 text-green-400 border-green-500/30" },
  "en-visite": { label: "En visite", color: "bg-amber-500/20 text-amber-400 border-amber-500/30" },
  "sous-offre": { label: "Sous offre", color: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
};

const aiSuggestions = [
  { icon: FileText, text: "Rédiger une annonce", action: "annonce" },
  { icon: Calendar, text: "Planifier une visite", action: "visite" },
  { icon: TrendingUp, text: "Estimer ce bien", action: "estimation" },
  { icon: Users, text: "Relancer les prospects", action: "relance" },
];

const aiResponses: Record<string, string> = {
  annonce: "✨ **Annonce générée :**\n\nMagnifique appartement T3 de 72m² en plein cœur de Lyon ! Lumineux et traversant, il offre un séjour spacieux, 2 chambres, une cuisine équipée et un balcon exposé sud. Proche commerces et transports. Idéal pour famille ou investissement.\n\n📍 15 rue de la République\n💰 285 000 €\n\n*Annonce prête à publier sur SeLoger, LeBonCoin et votre site !*",
  visite: "📅 **Créneaux disponibles cette semaine :**\n\n• Mardi 14h - 16h\n• Mercredi 10h - 12h\n• Vendredi 15h - 18h\n\nJ'ai identifié **3 prospects intéressés** pour ce bien. Voulez-vous que j'envoie les invitations ?",
  estimation: "📊 **Estimation IA du bien :**\n\nBasé sur les transactions récentes du quartier :\n\n• Prix bas : 270 000 €\n• **Prix estimé : 285 000 €** ✓\n• Prix haut : 305 000 €\n\nVotre prix est cohérent avec le marché. Le délai de vente estimé est de **45-60 jours**.",
  relance: "📨 **Relance automatique préparée :**\n\n5 prospects ont visité des biens similaires.\n\nMessage personnalisé prêt :\n*\"Bonjour [Prénom], un nouveau bien correspondant à vos critères vient d'arriver...\"*\n\nEnvoyer à tous les prospects ?",
  default: "👋 Je suis votre assistant IA immobilier. Je peux vous aider à :\n\n• Rédiger des annonces attractives\n• Planifier et gérer les visites\n• Estimer les biens\n• Relancer vos prospects\n\nCliquez sur une suggestion ou posez-moi une question !",
};

export function ImmoDemo() {
  const [properties, setProperties] = useState<Property[]>(initialProperties);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [showAI, setShowAI] = useState(false);
  const [aiMessage, setAiMessage] = useState(aiResponses.default);
  const [isTyping, setIsTyping] = useState(false);

  const handleStatusChange = (id: number, newStatus: Property["status"]) => {
    setProperties(properties.map(p =>
      p.id === id ? { ...p, status: newStatus } : p
    ));
  };

  const handleAiAction = async (action: string) => {
    setIsTyping(true);
    await new Promise(r => setTimeout(r, 1000 + Math.random() * 500));
    setAiMessage(aiResponses[action] || aiResponses.default);
    setIsTyping(false);
  };

  const stats = {
    biens: properties.length,
    visites: properties.filter(p => p.status === "en-visite").length,
    offres: properties.filter(p => p.status === "sous-offre").length,
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* App Frame */}
      <div className="bg-slate-900 rounded-3xl p-2 shadow-2xl">
        <div className="bg-background rounded-2xl overflow-hidden">

          {/* Header */}
          <div className="bg-surface px-4 py-3 flex items-center justify-between border-b border-white/5">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Building className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-white">ImmoSync</span>
            </div>
            <div className="flex items-center gap-3">
              <button className="w-8 h-8 rounded-full bg-surface-light flex items-center justify-center">
                <Search className="w-4 h-4 text-slate-400" />
              </button>
              <button className="w-8 h-8 rounded-full bg-surface-light flex items-center justify-center relative">
                <Bell className="w-4 h-4 text-slate-400" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-[10px] text-white flex items-center justify-center">3</span>
              </button>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="p-4 grid grid-cols-3 gap-3">
            <div className="bg-surface rounded-xl p-3 text-center">
              <div className="text-2xl font-bold text-white">{stats.biens}</div>
              <div className="text-xs text-slate-400">Biens actifs</div>
            </div>
            <div className="bg-surface rounded-xl p-3 text-center">
              <div className="text-2xl font-bold text-amber-400">{stats.visites}</div>
              <div className="text-xs text-slate-400">En visite</div>
            </div>
            <div className="bg-surface rounded-xl p-3 text-center">
              <div className="text-2xl font-bold text-blue-400">{stats.offres}</div>
              <div className="text-xs text-slate-400">Sous offre</div>
            </div>
          </div>

          {/* Properties List */}
          <div className="px-4 pb-4">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-white font-semibold">Mes biens</h2>
              <button className="text-xs text-primary">+ Ajouter</button>
            </div>

            <div className="space-y-3 max-h-72 overflow-y-auto">
              <AnimatePresence>
                {properties.map((property) => (
                  <motion.div
                    key={property.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={cn(
                      "bg-surface rounded-xl p-3 cursor-pointer transition-all",
                      selectedProperty?.id === property.id && "ring-2 ring-primary"
                    )}
                    onClick={() => setSelectedProperty(property)}
                  >
                    <div className="flex gap-3">
                      {/* Image placeholder */}
                      <div className="w-16 h-16 rounded-lg bg-surface-light flex items-center justify-center text-3xl">
                        {property.image}
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="text-white font-medium text-sm truncate">{property.title}</h3>
                          <span className={cn(
                            "shrink-0 text-[10px] px-2 py-0.5 rounded-full border",
                            statusConfig[property.status].color
                          )}>
                            {statusConfig[property.status].label}
                          </span>
                        </div>
                        <p className="text-slate-400 text-xs flex items-center gap-1 mt-1">
                          <MapPin className="w-3 h-3" />
                          {property.address}
                        </p>
                        <div className="flex items-center gap-3 mt-2">
                          <span className="text-primary font-bold text-sm">
                            {property.price.toLocaleString()} €
                          </span>
                          <span className="text-slate-500 text-xs flex items-center gap-1">
                            <Square className="w-3 h-3" />
                            {property.surface}m²
                          </span>
                          <span className="text-slate-500 text-xs flex items-center gap-1">
                            <Bed className="w-3 h-3" />
                            {property.rooms}
                          </span>
                        </div>
                      </div>

                      <ChevronRight className="w-4 h-4 text-slate-500 shrink-0 self-center" />
                    </div>

                    {/* Status selector (visible when selected) */}
                    {selectedProperty?.id === property.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="mt-3 pt-3 border-t border-white/5"
                      >
                        <p className="text-xs text-slate-400 mb-2">Changer le statut :</p>
                        <div className="flex gap-2">
                          {(["disponible", "en-visite", "sous-offre"] as const).map((status) => (
                            <button
                              key={status}
                              onClick={(e) => {
                                e.stopPropagation();
                                handleStatusChange(property.id, status);
                              }}
                              className={cn(
                                "text-[10px] px-2 py-1 rounded-full border transition-all",
                                property.status === status
                                  ? statusConfig[status].color
                                  : "border-white/10 text-slate-400 hover:border-white/30"
                              )}
                            >
                              {statusConfig[status].label}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* AI Assistant Button */}
          <div className="relative">
            <button
              onClick={() => setShowAI(!showAI)}
              className={cn(
                "absolute bottom-4 right-4 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all",
                showAI
                  ? "bg-surface-light"
                  : "bg-gradient-to-br from-primary to-secondary hover:scale-110"
              )}
            >
              {showAI ? (
                <X className="w-5 h-5 text-white" />
              ) : (
                <Bot className="w-6 h-6 text-white" />
              )}
            </button>

            {/* AI Panel */}
            <AnimatePresence>
              {showAI && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.9 }}
                  className="absolute bottom-20 right-4 w-72 bg-surface rounded-2xl border border-white/10 shadow-2xl overflow-hidden"
                >
                  {/* AI Header */}
                  <div className="bg-gradient-to-r from-primary to-secondary p-3 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">Assistant IA</h4>
                      <p className="text-white/70 text-[10px]">Propulsé par Synapse</p>
                    </div>
                  </div>

                  {/* AI Content */}
                  <div className="p-3">
                    {/* Message */}
                    <div className="bg-surface-light rounded-xl p-3 mb-3 max-h-40 overflow-y-auto">
                      {isTyping ? (
                        <div className="flex gap-1">
                          <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                          <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                          <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                        </div>
                      ) : (
                        <p className="text-xs text-slate-300 whitespace-pre-line">{aiMessage}</p>
                      )}
                    </div>

                    {/* Suggestions */}
                    <div className="grid grid-cols-2 gap-2">
                      {aiSuggestions.map((suggestion) => (
                        <button
                          key={suggestion.action}
                          onClick={() => handleAiAction(suggestion.action)}
                          className="flex items-center gap-2 p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
                        >
                          <suggestion.icon className="w-3 h-3 text-primary" />
                          <span className="text-[10px] text-white">{suggestion.text}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Bottom padding for AI button */}
          <div className="h-20" />
        </div>
      </div>

      {/* Caption */}
      <div className="text-center mt-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface rounded-full">
          <Building className="w-4 h-4 text-primary" />
          <span className="text-slate-400 text-sm">Application métier + Agent IA intégré</span>
        </div>
      </div>
    </div>
  );
}
