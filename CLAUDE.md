# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development
npm run dev          # Start dev server (http://localhost:3000)

# Build & Production
npm run build        # Build for production
npm run start        # Production with custom server (server.js)
npm run start:next   # Production with Next.js default server

# Linting
npm run lint         # Run ESLint
```

## Architecture

Site vitrine Next.js 16 (App Router) pour Synapse Agency - agence spécialisée IA et applications web.

### Structure des dossiers

```
app/                 # Pages (App Router)
├── page.tsx         # Home - compose Hero, Services, AuditSection, CTA
├── agents-ia/       # Page agents IA
├── solutions-ia/    # Page solutions IA
├── applications/    # Page applications
├── contact/         # Page contact
├── audit-gratuit/   # Page audit gratuit
├── mentions-legales/
├── confidentialite/
├── layout.tsx       # Root layout (Header + Footer + ScrollToTop)
└── globals.css      # Tailwind v4 avec @theme pour les couleurs custom

components/
├── ui/              # Primitives UI réutilisables (Button, Card, Badge, Input, Textarea)
├── layout/          # Header, Footer, ScrollToTop
├── home/            # Sections de la page d'accueil (Hero, Services, AuditSection, CTA)
└── demos/           # Demos interactives (AgentDemo, SolutionDemo, AppDemo, ImmoDemo)

lib/utils.ts         # Utilitaire cn() - combine clsx + tailwind-merge
server.js            # Serveur Node.js custom pour production (écoute sur 0.0.0.0)
```

### Conventions

- **Path alias**: `@/*` mappe vers la racine (ex: `@/components/ui`, `@/lib/utils`)
- **Exports**: Chaque dossier de composants a un `index.ts` pour les exports groupés
- **Client Components**: Ajouter `"use client"` pour les composants avec hooks/interactivité
- **Styling**: Utiliser `cn()` pour combiner les classes Tailwind conditionnellement

### Système de design

Couleurs définies dans `globals.css` et `tailwind.config.ts`:
- `primary` (#6366f1) - Indigo
- `secondary` (#0ea5e9) - Cyan
- `accent` (#8b5cf6) - Violet
- `background` (#0f172a) - Slate foncé
- `surface` / `surface-light` - Surfaces de cartes

Classes utilitaires custom:
- `.gradient-text` - Texte en dégradé primary→secondary→accent
- `.glass` - Effet glassmorphism
- `.card-hover` - Animation hover pour les cartes

### Pattern des composants UI

Les composants UI utilisent le pattern variants avec `forwardRef`:
```tsx
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}
```

### Animations

Framer Motion pour les animations (`framer-motion`). Animations Tailwind custom: `fade-in`, `slide-up`, `pulse-slow`, `float`.
