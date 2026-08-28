import { z } from "zod";

export const PROJECT_TYPES = [
  "Application métier",
  "Intelligence artificielle",
  "Automatisation",
  "Modernisation d'un outil",
  "Autre",
] as const;

export const BUDGET_RANGES = [
  "À définir",
  "< 5 000 €",
  "5 000 – 15 000 €",
  "15 000 – 30 000 €",
  "30 000 – 50 000 €",
  "+ 50 000 €",
] as const;

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Le nom est requis").max(200),
  company: z.string().trim().max(200).optional().or(z.literal("")),
  email: z.string().trim().email("Email invalide").max(200),
  phone: z.string().trim().max(50).optional().or(z.literal("")),
  role: z.string().trim().max(100).optional().or(z.literal("")),
  projectType: z.array(z.enum(PROJECT_TYPES)).optional().default([]),
  message: z.string().trim().min(10, "Décrivez votre problématique en quelques mots").max(5000),
  usersEstimate: z.string().trim().max(100).optional().or(z.literal("")),
  budget: z.enum(BUDGET_RANGES).optional().or(z.literal("")),
  deadline: z.string().trim().max(100).optional().or(z.literal("")),
  consent: z.literal(true, {
    error: "Le consentement RGPD est requis pour envoyer ce formulaire",
  }),
  // Honeypot : doit rester vide, rempli uniquement par les robots
  website: z.string().max(0).optional().or(z.literal("")),
});

export type ContactFormData = z.infer<typeof contactSchema>;
