"use client";

import { motion } from "framer-motion";

const integrations = [
  "API", "PostgreSQL", "Supabase", "Microsoft 365",
  "Google Workspace", "Gmail", "Outlook", "CRM", "ERP", "Slack",
  "WhatsApp", "Stripe", "Dropbox", "Google Drive",
];

export function IntegrationSection() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Connectez vos outils existants.
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Nous ne remplaçons pas nécessairement votre système existant. Synapse peut connecter vos logiciels
            et créer une interface centrale pour vos collaborateurs.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {integrations.map((tool) => (
            <span
              key={tool}
              className="px-4 py-2 rounded-full bg-background border border-white/10 text-sm text-slate-300"
            >
              {tool}
            </span>
          ))}
        </motion.div>

        <p className="text-slate-400">
          Votre logiciel possède une API ? Nous pouvons probablement l&apos;intégrer.
        </p>
      </div>
    </section>
  );
}
