import { Cpu, Smartphone, FolderKanban, User, type LucideIcon } from "lucide-react";

export interface NavItem {
  name: string;
  href: string;
  icon: LucideIcon;
}

export const mainNav: NavItem[] = [
  { name: "Applications métier", href: "/applications", icon: Smartphone },
  { name: "IA & Automatisation", href: "/solutions-ia", icon: Cpu },
  { name: "Réalisations", href: "/realisations", icon: FolderKanban },
  { name: "À propos", href: "/qui-suis-je", icon: User },
];

export const ctaLabel = "Parler de mon projet";
export const ctaHref = "/contact";
