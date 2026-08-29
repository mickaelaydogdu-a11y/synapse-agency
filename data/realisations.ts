// Projets clients réels (isPlaceholder: false) et exemples de projets types (isPlaceholder: true)
// en attendant d'autres vraies études de cas. Aucun résultat chiffré inventé n'est présenté
// pour les exemples types — voir PLAN DE REFONTE.md section 56 et 71.

export interface Realisation {
  slug: string;
  title: string;
  category: string;
  summary: string;
  context: string;
  problem: string;
  users: string;
  solution: string;
  features: string[];
  ai?: string[];
  results: string;
  technologies: string[];
  isPlaceholder: boolean;
}

export const realisations: Realisation[] = [
  {
    slug: "mediatheque-musee-granet",
    title: "Média — la médiathèque numérique du Musée Granet",
    category: "Gestion de contenus & médiathèque numérique",
    summary: "Centraliser, indexer et diffuser en toute sécurité plus de 4 To de photos, vidéos, documents et audio dispersés sur postes, disques durs et clés USB.",
    context: "Le responsable du numérique du Musée Granet a sollicité Synapse Agency pour un problème concret : plus de 4 To de ressources numériques dispersées entre les ordinateurs des employés, des disques durs externes et des clés USB, sans centralisation ni suivi des droits d'usage.",
    problem: "Une partie du fonds est constituée de photographies d'œuvres en ultra haute définition, protégées par des droits et dont la diffusion publique est interdite, aux côtés de contenus librement utilisables pour la communication (vernissages, expositions). Sans outil commun, impossible de distinguer les deux, de retrouver un fichier ou de le partager en toute sécurité.",
    users: "L'équipe du musée, organisée en trois niveaux d'accès — administrateur, contributeur, lecteur — ainsi que les services tourisme, communication et culture de la Ville d'Aix-en-Provence et la presse locale, régionale et spécialisée pour la diffusion publique des contenus autorisés.",
    solution: "Une médiathèque numérique sur mesure centralisant documents, photos, illustrations, audio, vidéos, plans et PDF, avec gestion fine des droits d'accès, des catégories et des licences, et un thésaurus de mots-clés associé à chaque fichier sous forme de métadonnées. La sécurité a fait l'objet d'une attention particulière pour empêcher toute fuite de fichiers sous droits.",
    features: [
      "Stockage et partage centralisés (documents, photos, illustrations, audio, vidéo, plans, PDF)",
      "Trois niveaux de droits d'accès : administrateur, contributeur, lecteur",
      "Gestion des catégories de classement",
      "Gestion des droits et licences par fichier",
      "Thésaurus de mots-clés associés à chaque fichier (métadonnées)",
      "QR code généré pour la diffusion publique sécurisée des fichiers autorisés en lecture",
    ],
    results: "Une bibliothèque unique remplaçant plus de 4 To de fichiers dispersés sur postes, disques durs et clés USB, avec des droits d'usage tracés pour chaque fichier. Le partage par QR code alimente directement les services tourisme, communication et culture de la Ville d'Aix-en-Provence ainsi que la presse locale, régionale et spécialisée.",
    technologies: ["Supabase", "Stockage S3 (France, 8 To)", "HTML / CSS (Tailwind)", "JavaScript"],
    isPlaceholder: false,
  },
  {
    slug: "application-gestion-commerciale",
    title: "Application de gestion commerciale",
    category: "CRM & Gestion commerciale",
    summary: "Centraliser prospects, devis et suivi commercial dans un outil unique pour toute l'équipe.",
    context: "Une entreprise de services avec une équipe commerciale de plusieurs personnes, historiquement organisée autour de fichiers Excel et d'échanges par email.",
    problem: "Les prospects, devis et documents sont dispersés dans plusieurs outils. Le suivi commercial repose sur la mémoire individuelle plutôt que sur un processus partagé.",
    users: "Commerciaux, direction commerciale, service administratif.",
    solution: "Une application centralisant prospects, opportunités, devis, documents, relances et reporting dans un seul outil accessible à toute l'équipe.",
    features: [
      "Gestion des prospects et opportunités",
      "Pipeline commercial visuel",
      "Génération de devis",
      "Relances automatiques",
      "Reporting en temps réel",
    ],
    ai: [
      "Analyse des demandes entrantes",
      "Résumé automatique des échanges",
      "Aide à la qualification des prospects",
      "Génération assistée de propositions commerciales",
    ],
    results: "Centraliser le suivi commercial, réduire la ressaisie d'informations et donner une visibilité claire sur le pipeline à toute l'équipe.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Supabase"],
    isPlaceholder: true,
  },
  {
    slug: "suivi-de-chantier",
    title: "Application de suivi de chantier",
    category: "Gestion de chantier & Applications terrain",
    summary: "Relier le bureau et le terrain autour d'un même planning et des mêmes rapports.",
    context: "Une entreprise du bâtiment gérant plusieurs chantiers simultanément, avec des équipes réparties entre le bureau et le terrain.",
    problem: "Le suivi des chantiers repose sur des tableurs et des échanges dispersés entre le bureau et le terrain, avec un risque de perte d'information.",
    users: "Conducteurs de travaux, chefs de chantier, bureau d'études, direction.",
    solution: "Une application centralisant affaires, chantiers, équipes, planning et rapports, accessible depuis le terrain comme depuis le bureau.",
    features: [
      "Suivi des affaires et chantiers",
      "Planning des équipes",
      "Rapports d'intervention avec photos",
      "Gestion des réserves",
      "Accès mobile terrain",
    ],
    ai: [
      "Génération automatique des comptes rendus",
      "Extraction des informations depuis les rapports terrain",
      "Classement automatique des documents",
    ],
    results: "Donner une visibilité en temps réel sur l'avancement des chantiers et réduire la ressaisie entre le terrain et le bureau.",
    technologies: ["Next.js", "React Native", "PostgreSQL"],
    isPlaceholder: true,
  },
  {
    slug: "portail-client-documentaire",
    title: "Portail client & gestion documentaire",
    category: "Portail client & Gestion documentaire",
    summary: "Donner aux clients un accès direct et sécurisé au statut de leurs dossiers.",
    context: "Une entreprise de services dont les clients sollicitaient régulièrement le service administratif pour connaître le statut de leurs dossiers.",
    problem: "Les clients réclament le statut de leurs dossiers par téléphone ou email faute d'accès direct à l'information.",
    users: "Clients, service administratif, service client.",
    solution: "Un portail sécurisé centralisant dossiers, documents, factures et échanges, accessible directement par les clients.",
    features: [
      "Espace client sécurisé",
      "Suivi des dossiers en temps réel",
      "Accès aux documents et factures",
      "Messagerie intégrée",
    ],
    ai: [
      "Classement automatique des documents",
      "Recherche intelligente dans la base documentaire",
    ],
    results: "Réduire les sollicitations téléphoniques et donner plus d'autonomie aux clients dans le suivi de leurs dossiers.",
    technologies: ["Next.js", "TypeScript", "Supabase", "PostgreSQL"],
    isPlaceholder: true,
  },
];

export function getRealisationBySlug(slug: string): Realisation | undefined {
  return realisations.find((r) => r.slug === slug);
}
