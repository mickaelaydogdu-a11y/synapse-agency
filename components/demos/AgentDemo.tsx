"use client";

import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const suggestions = [
  "Agent téléphonique",
  "Agent création de devis",
  "Agent réseaux sociaux",
  "Quels sont vos services ?",
];

const responses: Record<string, string> = {
  "agent téléphonique": "📞 **Agent Téléphonique IA**\n\nNotre agent vocal intelligent gère vos appels 24h/24 :\n\n✅ **Accueil téléphonique** - Répond instantanément à tous les appels\n\n✅ **Qualification** - Identifie le besoin et dirige vers le bon service\n\n✅ **Prise de RDV** - Planifie directement dans votre agenda\n\n✅ **Réponses FAQ** - Traite les questions courantes automatiquement\n\n✅ **Transfert intelligent** - Bascule vers un humain si nécessaire\n\n💡 *Idéal pour : cabinets médicaux, agences immobilières, services clients*\n\nVoulez-vous une démonstration personnalisée ?",
  "agent création de devis": "📋 **Agent Création de Devis IA**\n\nAutomatisez vos devis en quelques secondes :\n\n✅ **Collecte intelligente** - Pose les bonnes questions au client\n\n✅ **Calcul automatique** - Applique vos tarifs et règles métier\n\n✅ **Génération PDF** - Crée un devis professionnel instantanément\n\n✅ **Envoi automatique** - Transmet par email avec suivi\n\n✅ **Relance** - Suit les devis en attente et relance\n\n💡 *Idéal pour : artisans, agences, prestataires de services*\n\n⏱️ Gain moyen : **2h par jour** sur la gestion des devis !\n\nSouhaitez-vous voir un exemple de devis généré ?",
  "agent réseaux sociaux": "📱 **Agent Contenu Réseaux Sociaux IA**\n\nVotre community manager virtuel :\n\n✅ **Création de posts** - Génère du contenu adapté à chaque plateforme\n\n✅ **Calendrier éditorial** - Planifie vos publications à l'avance\n\n✅ **Visuels** - Suggère et crée des images engageantes\n\n✅ **Hashtags optimisés** - Maximise votre visibilité\n\n✅ **Réponses aux commentaires** - Interagit avec votre communauté\n\n✅ **Analyse des performances** - Rapports et recommandations\n\n💡 *Plateformes : Instagram, LinkedIn, Facebook, X (Twitter)*\n\n🚀 Passez de 0 à 30 posts/mois sans effort !\n\nQuel réseau social vous intéresse le plus ?",
  "quels sont vos services": "Nous proposons 3 services principaux :\n\n🤖 **Création d'Agents IA** - Chatbots intelligents pour automatiser votre support client\n\n🧠 **Solutions IA sur mesure** - Automatisation de vos processus métier\n\n📱 **Applications Web & Mobile** - Développement d'outils digitaux personnalisés\n\nNous avons notamment des agents spécialisés :\n• Agent téléphonique\n• Agent création de devis\n• Agent réseaux sociaux\n\nQuel type d'agent vous intéresse ?",
  "comment fonctionne un agent ia": "Un agent IA fonctionne en 4 étapes :\n\n1️⃣ **Analyse** - Il comprend la question grâce au traitement du langage naturel\n\n2️⃣ **Recherche** - Il consulte sa base de connaissances\n\n3️⃣ **Réponse** - Il formule une réponse adaptée\n\n4️⃣ **Apprentissage** - Il s'améliore avec chaque interaction\n\nVoulez-vous en savoir plus sur les cas d'usage ?",
  "quel est le délai de mise en place": "Le délai dépend de la complexité :\n\n⚡ **Agent simple** (FAQ) : 1-2 semaines\n\n🔧 **Agent personnalisé** : 2-4 semaines\n\n🏢 **Solution entreprise** : 4-8 semaines\n\nNous commençons toujours par un audit gratuit pour évaluer vos besoins. Souhaitez-vous prendre rendez-vous ?",
  "combien ça coûte": "Nos tarifs s'adaptent à vos besoins :\n\n💫 **Starter** : 497€/mois (1 agent, 1000 conversations)\n\n🚀 **Pro** : 1 297€/mois (3 agents, 5000 conversations)\n\n🏢 **Enterprise** : Sur devis (volume illimité)\n\nTous nos plans incluent la maintenance et les mises à jour. Voulez-vous un devis personnalisé ?",
  "default": "Je suis ravi de vous aider ! Je suis un exemple d'agent IA créé par Synapse Agency. Posez-moi une question ou cliquez sur une suggestion ci-dessous 👇",
};

function getResponse(input: string): string {
  const normalizedInput = input.toLowerCase().trim();

  for (const [key, value] of Object.entries(responses)) {
    if (key !== "default" && normalizedInput.includes(key)) {
      return value;
    }
  }

  return `Merci pour votre question ! En tant que démo, mes réponses sont limitées. Pour une réponse complète sur "${input}", contactez notre équipe qui se fera un plaisir de vous aider.\n\nEssayez une des suggestions ci-dessous pour voir mes capacités 👇`;
}

export function AgentDemo() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Bonjour ! 👋 Je suis l'assistant virtuel de Synapse Agency. Comment puis-je vous aider aujourd'hui ?",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (text: string = input) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: text.trim(),
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    await new Promise((resolve) => setTimeout(resolve, 1000 + Math.random() * 1000));

    const botMessage: Message = {
      id: Date.now() + 1,
      text: getResponse(text),
      isBot: true,
      timestamp: new Date(),
    };

    setIsTyping(false);
    setMessages((prev) => [...prev, botMessage]);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-secondary rounded-t-2xl p-4 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
          <Bot className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-white font-semibold">Assistant Synapse</h3>
          <p className="text-white/70 text-sm flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            En ligne
          </p>
        </div>
        <div className="ml-auto">
          <Sparkles className="w-5 h-5 text-white/50" />
        </div>
      </div>

      {/* Messages */}
      <div className="bg-surface border-x border-white/5 h-96 overflow-y-auto p-4 space-y-4">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={cn(
                "flex gap-3",
                !message.isBot && "flex-row-reverse"
              )}
            >
              <div
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
                  message.isBot
                    ? "bg-primary/20"
                    : "bg-secondary/20"
                )}
              >
                {message.isBot ? (
                  <Bot className="w-4 h-4 text-primary" />
                ) : (
                  <User className="w-4 h-4 text-secondary" />
                )}
              </div>
              <div
                className={cn(
                  "max-w-[80%] rounded-2xl px-4 py-3",
                  message.isBot
                    ? "bg-surface-light text-white"
                    : "bg-gradient-to-r from-primary to-secondary text-white"
                )}
              >
                <p className="text-sm whitespace-pre-line">{message.text}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Typing indicator */}
        {isTyping && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex gap-3"
          >
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
              <Bot className="w-4 h-4 text-primary" />
            </div>
            <div className="bg-surface-light rounded-2xl px-4 py-3">
              <div className="flex gap-1">
                <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          </motion.div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggestions */}
      <div className="bg-surface-light border-x border-white/5 px-4 py-3 flex gap-2 overflow-x-auto">
        {suggestions.map((suggestion) => (
          <button
            key={suggestion}
            onClick={() => handleSend(suggestion)}
            className="shrink-0 px-3 py-1.5 rounded-full bg-primary/20 text-primary text-sm hover:bg-primary/30 transition-colors"
          >
            {suggestion}
          </button>
        ))}
      </div>

      {/* Input */}
      <div className="bg-surface rounded-b-2xl border border-t-0 border-white/5 p-4">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="flex gap-3"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Tapez votre message..."
            className="flex-1 bg-surface-light rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
          <button
            type="submit"
            disabled={!input.trim() || isTyping}
            className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-primary/25 transition-all"
          >
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
}
