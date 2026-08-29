# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development
npm run dev          # Start dev server (http://localhost:3000)

# Build & Production
npm run build        # Build for production
npm run start        # Production server (Next.js default)

# Linting
npm run lint         # Run ESLint

# Type checking (no dedicated script, run directly)
npx tsc --noEmit
```

## Architecture

Site vitrine Next.js 16 (App Router) pour Synapse Agency — agence positionnée sur les **applications métier sur mesure intégrant intelligence artificielle et automatisation** (pas une agence généraliste à plusieurs pôles égaux). La production visuelle (photo/vidéo/drone) est une activité secondaire, présente uniquement en page dédiée et dans le footer.

La refonte en cours est pilotée par `PLAN DE REFONTE.md` (racine du repo, cahier des charges détaillé — objectifs, contenu, ton, règles) et `docs/audit.md` (état technique de référence au démarrage de la refonte). Consulter ces deux fichiers avant toute modification de fond sur le positionnement, le contenu ou la structure du site.

### Structure des dossiers

```
app/                      # Pages (App Router)
├── page.tsx              # Home - compose 11 sections de components/sections/
├── applications/          # Applications métier
├── solutions-ia/          # IA & Automatisation (route conservée, contenu repositionné)
├── realisations/          # Liste des réalisations
│   └── [slug]/            # Détail d'une réalisation (généré depuis data/realisations.ts)
├── qui-suis-je/            # Page "À propos" (bio du fondateur, libellé nav "À propos")
├── contact/                # Formulaire de contact qualifiant
├── production-visuelle/    # Activité secondaire, liée uniquement depuis le footer
├── mentions-legales/
├── confidentialite/
├── api/contact/route.ts    # Validation Zod + honeypot + email Resend
├── layout.tsx              # Root layout (Header + Footer + ScrollToTop + MotionProvider + CookieBanner)
├── sitemap.ts               # Inclut les routes statiques + une entrée par réalisation
├── globals.css              # Tailwind v4 avec @theme pour les couleurs custom (thème sombre)
└── manifest.ts

components/
├── ui/              # Primitives UI réutilisables (Button, Card, Badge, Input, Textarea)
├── layout/          # Header, Footer, ScrollToTop, CookieBanner, MotionProvider
├── home/            # AuditSection uniquement — bloc CTA réutilisé en fin de plusieurs pages
├── about/            # Sections de /qui-suis-je (AboutHero, Timeline, Differentiators)
└── sections/          # Sections de la homepage (Hero, Applications, AI, Integration,
                        # Process, Security, FinalCTA) + Workflow (diagramme en chaîne réutilisable)

lib/
├── utils.ts                # cn() - combine clsx + tailwind-merge
├── navigation.ts            # Source unique de la nav (mainNav, ctaLabel, ctaHref) - Header et Footer la consomment, ne pas dupliquer
└── validations/contact.ts    # Schéma Zod du formulaire de contact + constantes PROJECT_TYPES/BUDGET_RANGES

data/
└── realisations.ts    # Contenu des réalisations : vraies études de cas client (isPlaceholder: false),
                        # aucune métrique inventée, voir section 56 et 71 de PLAN DE REFONTE.md.
                        # Le champ isPlaceholder (true) reste disponible pour d'éventuels exemples
                        # génériques mais aucun n'est publié actuellement. Source unique consommée
                        # par /realisations et /realisations/[slug].
```

### Conventions

- **Path alias**: `@/*` mappe vers la racine (ex: `@/components/ui`, `@/lib/utils`)
- **Exports**: Chaque dossier de composants a un `index.ts` pour les exports groupés
- **Client Components**: Ajouter `"use client"` pour les composants avec hooks/interactivité. Un composant Server (ex: `app/realisations/[slug]/page.tsx`) peut importer et rendre un composant Client (ex: `Workflow`, `AuditSection`) sans problème — c'est le sens inverse qui est interdit.
- **Styling**: Utiliser `cn()` pour combiner les classes Tailwind conditionnellement
- **Navigation**: toujours passer par `lib/navigation.ts` (`mainNav`, `ctaLabel`, `ctaHref`) plutôt que de recréer une liste de liens dans un composant
- **Pas de code mort**: avant d'ajouter un composant "juste au cas où" ou de garder un fichier non importé, vérifier son usage réel (`grep` sur le nom du composant) — plusieurs composants orphelins ont déjà été supprimés (`components/demos/*`, `Hero`/`WhyUs`/`Services`/`Stats` de `components/home/`)

### Système de design

Thème **sombre** (fond quasi-noir), défini dans `globals.css` avec `@theme` (Tailwind v4) :
- `primary` (#4f46e5) - Indigo — usage bg/border/icônes
- `secondary` (#0284c7) - Cyan — usage bg/border/icônes
- `accent` (#7c3aed) - Violet — usage bg/border/icônes
- `primary-light` (#818cf8) / `secondary-light` (#0ea5e9) / `accent-light` (#a78bfa) — **variantes claires à utiliser pour tout texte lisible** (`text-primary-light`, etc.). Les couleurs de base ne passent pas le contraste WCAG AA (4.5:1) sur fond sombre — vérifié via un vrai rapport PageSpeed Insights, ne pas revenir à `text-primary`/`text-secondary`/`text-accent` pour du texte.
- `background` (#0a0a0d), `surface` (#141119), `surface-light` (#1c1824)
- `text-primary` / `text-secondary` / `text-muted` — tokens de texte clair sur fond sombre (attention : distincts des couleurs de marque `primary`/`secondary` ci-dessus, ne pas confondre `text-text-primary` (token de texte) et `text-primary` (couleur de marque, à éviter pour du texte))

Classes utilitaires custom :
- `.gradient-text` - Texte en dégradé primary→secondary→accent
- `.glass` - Dégradé violet translucide utilisé par le header (`Header.tsx`), pas un glassmorphism blanc
- `.card-hover` - Animation hover pour les cartes

Autres conventions d'accessibilité à respecter :
- `Input`/`Textarea` génèrent automatiquement un `id` (depuis `name` ou `useId()`) pour associer le `<label>` — toujours passer `name` à ces composants
- Un groupe de cases à cocher/radio utilise `<fieldset>`/`<legend>`, pas un `<label>` flottant au-dessus
- Tout bouton icône-seule doit avoir un `aria-label`
- `prefers-reduced-motion` est respecté globalement via `MotionProvider` (`MotionConfig reducedMotion="user"` de framer-motion) dans `app/layout.tsx` — inutile de le regérer section par section

### Pattern des composants UI

Les composants UI utilisent le pattern variants avec `forwardRef` :
```tsx
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}
```

### Animations

Framer Motion pour les animations (`framer-motion`). Animations Tailwind custom : `fade-in`, `slide-up`, `pulse-slow`, `float`.

### Formulaire de contact

Le formulaire (`app/contact/page.tsx`) envoie vers `app/api/contact/route.ts`, qui :
1. Rejette silencieusement les soumissions avec le champ honeypot (`website`) rempli (faux succès renvoyé, aucun traitement)
2. Valide avec le schéma Zod de `lib/validations/contact.ts`
3. Envoie une notification par email via Resend — c'est le seul canal d'enregistrement de la demande (plus d'archivage en base depuis le retrait de Supabase), donc un échec d'envoi fait échouer la requête et remonte une erreur au formulaire.

Variable d'environnement nécessaire (voir `.env.local.example`) : `RESEND_API_KEY`. Elle doit aussi être configurée sur Vercel (Production/Preview/Development) pour que le formulaire fonctionne en ligne.

### Redirections

`next.config.ts` gère :
- La canonicalisation `www.synapse-agency.fr` → `synapse-agency.fr`
- Les redirections 301 des anciennes URLs supprimées (`/audit-gratuit`, `/audit-gratuit/questionnaire`, `/agents-ia`, les 3 exemples de réalisations retirés) vers leurs pages de remplacement

Avant de supprimer ou renommer une route déjà déployée, ajouter une redirection ici plutôt que de la laisser 404.

## Ce qui reste hors scope de la refonte actuelle

Ces points sont identifiés dans `PLAN DE REFONTE.md` mais pas encore traités : refonte du contenu de `/production-visuelle` et des pages légales (mentions-légales/confidentialité), route `/ia` dédiée (actuellement `/solutions-ia` fait office de page IA, avec redirect à prévoir le jour où `/ia` sera créée). `data/realisations.ts` contient trois vraies études de cas, toutes anonymisées (client non nommé) : Média (médiathèque numérique pour un musée), Parc (gestion de matériel et de flotte de véhicules) et Secure (rondes de sécurité et signalement d'incidents par QR code).
