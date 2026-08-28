# Audit technique — avant refonte V2

Réalisé avant le début de la refonte décrite dans `PLAN DE REFONTE.md`. Sert de référence pour les phases suivantes.

## Stack

- Next.js 16 (App Router, Turbopack)
- React 19, TypeScript
- Tailwind CSS v4 — tokens custom via `@theme` dans `app/globals.css` (couleurs, animations)
- `framer-motion` pour les animations, `lucide-react` pour les icônes
- `clsx` + `tailwind-merge` via `lib/utils.ts` (`cn()`)
- `resend` pour l'envoi d'email transactionnel, `nodemailer` présent en dépendance mais non utilisé (Resend est le chemin actif)

## Données & formulaires

- **Pas de Supabase** dans le repo (aucune occurrence de `supabase` dans le code).
- Formulaire de contact : `app/contact/page.tsx` → `POST /api/contact` (`app/api/contact/route.ts`) → envoi d'un email via Resend à `contact@synapse-agency.fr`. Aucun stockage en base des leads, validation manuelle des champs requis (pas de Zod).
- `serviceLabels` dans `route.ts` référence encore une clé `agents-ia` qui n'existe plus côté formulaire (résidu d'une ancienne organisation de l'offre).

## Routes existantes

```
/                    Home
/solutions-ia        Page IA (layout.tsx avec JSON-LD Service)
/applications        Page Applications
/production-visuelle Page Production visuelle (photo/vidéo/drone)
/contact             Formulaire de contact
/qui-suis-je         Page bio du fondateur (JSON-LD Person)
/mentions-legales
/confidentialite
/api/contact         Route API (Resend)
/sitemap.xml, /robots.txt, /manifest.webmanifest
```

Pas de route `/ia`, `/realisations`, `/a-propos`.

## Navigation actuelle

`components/layout/Header.tsx` et `components/layout/Footer.tsx` dupliquent chacun leur propre liste de nav (pas de source commune) :
Solutions IA · Applications web et mobile · Production Visuelle · Qui suis-je.

## Design system

- Thème sombre déjà en place (fond quasi-noir `#0a0a0d`, surfaces `#141119`/`#1c1824`, textes clairs) — retheme effectué dans une session précédente, cohérent avec les exigences "premium / sombre / B2B" du cahier des charges.
- Header en dégradé violet distinctif (`.glass` dans `globals.css`), logo passé en blanc pour la lisibilité.
- Composants UI réutilisables solides : `components/ui/{Button,Card,Input,Textarea,Badge}`.
- Pattern de section établi (composant dédié par bloc + `index.ts` d'export groupé) dans `components/home/*` et `components/about/*` — à répliquer pour les nouvelles sections de la refonte (`components/sections/*`).

## Écarts avec `CLAUDE.md`

`CLAUDE.md` mentionne des routes qui n'existent plus (`/agents-ia`, `/audit-gratuit`) — document à mettre à jour dans une phase ultérieure (hors scope de la présente phase).

## Lacunes vs. cahier des charges (hors scope de cette phase)

Route `/ia`, `/realisations` + `[slug]`, table Supabase `leads` + RLS, validation Zod, anti-spam (honeypot/rate-limit), redirections 301 (canonicalisation www, anciennes URLs), headers de sécurité / CSP, audit performance (Lighthouse), audit accessibilité, structured data étendu (Service/BreadcrumbList par page), events analytics au-delà du snippet GTM de base.
