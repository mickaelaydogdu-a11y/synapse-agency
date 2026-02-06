"use client";

import { motion } from "framer-motion";
import { Camera, Video, Plane, User, Package, FileImage, Film, Presentation, PartyPopper, Check, Navigation } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

const photoServices = [
  {
    icon: User,
    title: "Portrait en studio",
    description: "Séances photo portrait professionnelles en studio avec éclairage maîtrisé pour vos équipes, dirigeants ou profils LinkedIn.",
    features: ["Retouches incluses", "Plusieurs looks", "Livraison rapide"],
  },
  {
    icon: Package,
    title: "Shooting produits",
    description: "Packs photo produits pour votre e-commerce, catalogues ou réseaux sociaux. Fond blanc ou mise en situation.",
    features: ["Détourage inclus", "Multiples angles", "Optimisé web/print"],
  },
  {
    icon: FileImage,
    title: "Reportage photo",
    description: "Couverture photographique de vos événements, locaux, chantiers ou activités pour votre communication.",
    features: ["Sur site", "Grande capacité", "Droits cédés"],
  },
  {
    icon: Navigation,
    title: "Photo aérienne drone",
    description: "Prises de vue aériennes spectaculaires de vos locaux, chantiers, biens immobiliers ou événements en extérieur.",
    features: ["Télépilote certifié", "Autorisations préfecture", "Haute résolution"],
  },
];

const videoServices = [
  {
    icon: Film,
    title: "Vidéo reportage",
    description: "Reportages vidéo immersifs pour documenter vos projets, événements ou témoignages clients.",
    features: ["Montage professionnel", "Musique libre de droits", "Sous-titrage"],
  },
  {
    icon: Presentation,
    title: "Vidéo de présentation",
    description: "Vidéos corporate pour présenter votre entreprise, vos services ou vos produits de manière percutante.",
    features: ["Script sur mesure", "Motion design", "Voix off"],
  },
  {
    icon: PartyPopper,
    title: "Événementiel",
    description: "Captation vidéo de vos événements : séminaires, conférences, inaugurations, soirées d'entreprise.",
    features: ["Multi-caméras", "Interviews", "Teaser + film complet"],
  },
  {
    icon: Plane,
    title: "Vidéo aérienne drone",
    description: "Séquences vidéo aériennes en 4K pour sublimer vos projets immobiliers, chantiers, domaines ou événements.",
    features: ["Télépilote certifié", "4K stabilisé", "Plans cinématiques"],
  },
];

export default function ProductionVisuelle() {
  return (
    <main>
      {/* Hero with Background Image */}
      <section className="relative min-h-[auto] lg:min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/Production-visuelle-Synapse-agency.jpg"
            alt="Production Visuelle Synapse Agency"
            fill
            className="object-cover object-right lg:object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 pt-28 lg:py-32">
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl"
            >
              <Badge variant="accent" className="mb-6 inline-flex bg-violet-500/40 text-white border-violet-500/50 backdrop-blur-sm">
                <Camera className="w-4 h-4 mr-2" />
                Production Visuelle
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                Valorisez votre image avec des <br />
                <span className="text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">visuels professionnels</span>
              </h1>
              <p className="text-lg md:text-xl text-white mb-8 drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
                Photo, vidéo et prises de vue drone pour sublimer votre communication d&apos;entreprise.
                Un accompagnement sur mesure pour vos projets B2B.
              </p>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-6 mb-8 justify-center">
                <div className="flex items-center gap-2 backdrop-blur-sm bg-black/30 rounded-lg px-3 py-2">
                  <div className="w-10 h-10 rounded-lg bg-violet-500/40 flex items-center justify-center">
                    <Camera className="w-5 h-5 text-violet-400" />
                  </div>
                  <div>
                    <p className="text-white font-bold">Photo</p>
                    <p className="text-white/80 text-sm">Studio & terrain</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 backdrop-blur-sm bg-black/30 rounded-lg px-3 py-2">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/40 flex items-center justify-center">
                    <Video className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-white font-bold">Vidéo</p>
                    <p className="text-white/80 text-sm">4K & montage</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 backdrop-blur-sm bg-black/30 rounded-lg px-3 py-2">
                  <div className="w-10 h-10 rounded-lg bg-orange-500/40 flex items-center justify-center">
                    <Plane className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-white font-bold">Drone</p>
                    <p className="text-white/80 text-sm">Certifié</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 justify-center">
                <a href="#portfolio">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 border-primary text-white">
                    Voir le portfolio
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Photo Services */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4 inline-flex">
              <Camera className="w-4 h-4 mr-2" />
              Photographie
            </Badge>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Services photo professionnels
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Des photos qui valorisent votre image de marque et renforcent votre communication
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {photoServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center mb-4">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 mb-4">{service.description}</p>

                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-slate-600">
                        <Check className="w-4 h-4 text-violet-500 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Services */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 inline-flex">
              <Video className="w-4 h-4 mr-2" />
              Vidéo
            </Badge>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Services vidéo professionnels
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Des vidéos percutantes pour raconter votre histoire et engager votre audience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {videoServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 mb-4">{service.description}</p>

                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-slate-600">
                        <Check className="w-4 h-4 text-cyan-500 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Portfolio
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Découvrez une sélection de nos réalisations photo et vidéo
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((n, i) => (
              <motion.div
                key={n}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="aspect-square rounded-xl overflow-hidden relative group cursor-pointer"
              >
                <Image
                  src={`/images/portfolio/${n}.jpg`}
                  alt={`Réalisation ${n}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
