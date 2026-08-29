import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Workflow } from "@/components/sections";
import { AuditSection } from "@/components/home";
import { realisations, getRealisationBySlug } from "@/data/realisations";

export function generateStaticParams() {
  return realisations.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const realisation = getRealisationBySlug(slug);
  if (!realisation) return {};

  const title = `${realisation.title} | Réalisations | Synapse Agency`;
  const canonical = `https://synapse-agency.fr/realisations/${realisation.slug}`;

  return {
    title,
    description: realisation.summary,
    openGraph: {
      title,
      description: realisation.summary,
      type: "article",
      locale: "fr_FR",
      url: canonical,
    },
    twitter: {
      card: "summary",
      title,
      description: realisation.summary,
    },
    alternates: {
      canonical,
    },
  };
}

export default async function RealisationDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const realisation = getRealisationBySlug(slug);
  if (!realisation) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: realisation.title,
    description: realisation.summary,
    about: realisation.category,
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-surface">
        <div className="max-w-4xl mx-auto px-6">
          <Link
            href="/realisations"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-primary-light text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Toutes les réalisations
          </Link>

          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
            <div>
              <Badge variant="secondary" className="mb-4">
                {realisation.isPlaceholder ? "Exemple de projet type" : "Projet client réel"}
              </Badge>
              <p className="text-xs font-mono uppercase text-slate-400 mb-2">{realisation.category}</p>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">{realisation.title}</h1>
              <p className="text-lg text-slate-300">{realisation.summary}</p>
            </div>

            {realisation.clientLogo && (
              <div className="shrink-0 bg-white rounded-2xl p-4 self-start">
                <Image
                  src={realisation.clientLogo.src}
                  alt={realisation.clientLogo.alt}
                  width={realisation.clientLogo.width}
                  height={realisation.clientLogo.height}
                  className="h-24 w-auto object-contain"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 space-y-14">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-xs font-mono uppercase tracking-wide text-primary-light mb-3">Le contexte</h2>
              <p className="text-slate-300">{realisation.context}</p>
            </div>
            <div>
              <h2 className="text-xs font-mono uppercase tracking-wide text-primary-light mb-3">Le problème</h2>
              <p className="text-slate-300">{realisation.problem}</p>
            </div>
            <div>
              <h2 className="text-xs font-mono uppercase tracking-wide text-primary-light mb-3">Les utilisateurs</h2>
              <p className="text-slate-300">{realisation.users}</p>
            </div>
            <div>
              <h2 className="text-xs font-mono uppercase tracking-wide text-primary-light mb-3">La solution</h2>
              <p className="text-slate-300">{realisation.solution}</p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-5">Les fonctionnalités</h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {realisation.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-slate-300 text-sm">
                  <Check className="w-4 h-4 text-primary-light shrink-0 mt-0.5" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {realisation.ai && realisation.ai.length > 0 && (
            <div>
              <h2 className="text-xl font-bold text-white mb-5 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-accent-light" />
                L&apos;intelligence artificielle
              </h2>
              <ul className="grid sm:grid-cols-2 gap-3">
                {realisation.ai.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-300 text-sm">
                    <Check className="w-4 h-4 text-accent-light shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <h2 className="text-xl font-bold text-white mb-6 text-center">L&apos;architecture</h2>
            <Workflow
              steps={
                realisation.ai && realisation.ai.length > 0
                  ? ["Données entreprise", "Application Synapse", "Intelligence artificielle", "Automatisation", "Action / décision"]
                  : ["Données entreprise", "Application Synapse", "Automatisation", "Action / décision"]
              }
            />
          </div>

          <div className="p-6 rounded-2xl bg-surface border border-white/10">
            <h2 className="text-xs font-mono uppercase tracking-wide text-primary-light mb-3">
              {realisation.isPlaceholder ? "Résultats attendus" : "Résultats"}
            </h2>
            <p className="text-slate-300">{realisation.results}</p>
          </div>

          <div className="text-center pt-4">
            <Link href="/contact">
              <Button size="lg">
                Parler de mon projet
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <AuditSection />
    </main>
  );
}
