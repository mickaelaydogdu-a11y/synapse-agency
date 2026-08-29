// Vraies études de cas client (isPlaceholder: false). D'autres projets viendront s'ajouter
// au fil des livraisons — voir PLAN DE REFONTE.md section 56 et 71.

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
  clientLogo?: { src: string; alt: string; width: number; height: number };
}

export const realisations: Realisation[] = [
  {
    slug: "mediatheque-musee-granet",
    title: "Média — la médiathèque numérique du Musée Granet",
    category: "Gestion de contenus & médiathèque numérique",
    summary: "Centraliser, indexer et diffuser en toute sécurité plus de 4 To de photos, vidéos, documents et audio dispersés sur postes, disques durs et clés USB.",
    context: "Le chargé du numérique du Musée Granet nous a sollicités pour un problème concret : plus de 4 To de ressources numériques dispersées entre les ordinateurs des employés, des disques durs externes et des clés USB, sans centralisation ni suivi des droits d'usage.",
    problem: "Une partie du fonds est constituée de photographies d'œuvres en ultra haute définition, protégées par des droits et dont la diffusion publique est interdite, aux côtés de contenus librement utilisables pour la communication (vernissages, expositions). Sans outil commun, impossible de distinguer les deux, de retrouver un fichier ou de le partager en toute sécurité.",
    users: "L'équipe du musée — archivistes, service conservation, service communication — organisée en trois niveaux d'accès (administrateur, contributeur, lecteur), ainsi que les services tourisme, communication et culture de la Ville d'Aix-en-Provence et la presse locale, régionale et spécialisée pour la diffusion publique des contenus autorisés.",
    solution: "Une médiathèque numérique sur mesure centralisant documents, photos, illustrations, audio, vidéos, plans et PDF, avec gestion fine des droits d'accès, des catégories et des licences, et un thésaurus de mots-clés associé à chaque fichier sous forme de métadonnées. La sécurité a fait l'objet d'une attention particulière pour empêcher toute fuite de fichiers sous droits.",
    features: [
      "Stockage et partage centralisés (documents, photos, illustrations, audio, vidéo, plans, PDF)",
      "Numéro d'œuvre unique pour retrouver instantanément tous les fichiers liés à une même œuvre",
      "Upload groupé en un seul lot (ex. 20 photos d'une même œuvre sous tous les angles), avec métadonnées communes et référencement unique par fichier",
      "Trois niveaux de droits d'accès : administrateur, contributeur, lecteur",
      "Gestion des catégories de classement",
      "Gestion des droits et licences par fichier",
      "Thésaurus de mots-clés associés à chaque fichier (métadonnées)",
      "QR code généré pour la diffusion publique sécurisée des fichiers autorisés en lecture",
      "Statistiques par fichier (lectures, téléchargements) et par utilisateur (nombre d'uploads)",
    ],
    results: "Une bibliothèque unique remplaçant plus de 4 To de fichiers dispersés sur postes, disques durs et clés USB, avec des droits d'usage tracés pour chaque fichier. Le partage par QR code alimente directement les services tourisme, communication et culture de la Ville d'Aix-en-Provence ainsi que la presse locale, régionale et spécialisée.",
    technologies: ["Supabase", "Stockage S3 (France, 8 To)", "HTML / CSS (Tailwind)", "JavaScript"],
    isPlaceholder: false,
    clientLogo: { src: "/images/clients/musee-granet.webp", alt: "Musée Granet, Aix-en-Provence", width: 462, height: 540 },
  },
];

export function getRealisationBySlug(slug: string): Realisation | undefined {
  return realisations.find((r) => r.slug === slug);
}
