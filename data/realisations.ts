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
}

export const realisations: Realisation[] = [
  {
    slug: "mediatheque-numerique-musee",
    title: "Média — la médiathèque numérique d'un musée",
    category: "Gestion de contenus & médiathèque numérique",
    summary: "Centraliser, indexer et diffuser en toute sécurité plus de 4 To de photos, vidéos, documents et audio dispersés sur postes, disques durs et clés USB.",
    context: "Le chargé du numérique du musée nous a sollicités pour un problème concret : plus de 4 To de ressources numériques dispersées entre les ordinateurs des employés, des disques durs externes et des clés USB, sans centralisation ni suivi des droits d'usage.",
    problem: "Une partie du fonds est constituée de photographies d'œuvres en ultra haute définition, protégées par des droits et dont la diffusion publique est interdite, aux côtés de contenus librement utilisables pour la communication (vernissages, expositions). Sans outil commun, impossible de distinguer les deux, de retrouver un fichier ou de le partager en toute sécurité.",
    users: "L'équipe du musée — archivistes, service conservation, service communication — organisée en trois niveaux d'accès (administrateur, contributeur, lecteur), ainsi que les services tourisme, communication et culture de la ville et la presse locale, régionale et spécialisée pour la diffusion publique des contenus autorisés.",
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
    results: "Une bibliothèque unique remplaçant plus de 4 To de fichiers dispersés sur postes, disques durs et clés USB, avec des droits d'usage tracés pour chaque fichier. Le partage par QR code alimente directement les services tourisme, communication et culture de la ville ainsi que la presse locale, régionale et spécialisée.",
    technologies: ["Supabase", "Stockage S3 (France, 8 To)", "HTML / CSS (Tailwind)", "JavaScript"],
    isPlaceholder: false,
  },
  {
    slug: "gestion-parc-materiel",
    title: "Parc — la gestion du matériel et de la flotte de véhicules",
    category: "Gestion de flotte & matériel",
    summary: "Centraliser l'inventaire, la maintenance et les réservations du matériel et des véhicules dans un outil conforme RGPD.",
    context: "Le parc de matériel et la flotte de véhicules de l'entreprise étaient jusque-là suivis sur un fichier Excel hébergé sur Google Drive, sans conformité RGPD, avec les factures et justificatifs de garantie conservés au service comptabilité plutôt que chez le gestionnaire, et les demandes de réservation gérées par email.",
    problem: "Le gestionnaire du matériel n'avait aucune visibilité centralisée : dates d'achat et de garantie dispersées, aucun rappel de maintenance, et les demandes d'utilisation du matériel gérées sans coordination entre les employés et les services techniques. Les demandes étant traitées par email et centralisées sur une seule personne, toute absence du gestionnaire mettait le workflow à l'arrêt.",
    users: "Le responsable du matériel, les services techniques et de maintenance, ainsi que l'ensemble des employés pour les demandes de réservation.",
    solution: "Une application centralisant l'inventaire du matériel et de la flotte de véhicules : suivi des dates d'achat, statut de garantie, dates de maintenance, localisation (en stock ou déployé sur site) et état des stocks en temps réel. Un planning commun permet aux employés de faire une demande de réservation de matériel ; une IA priorise et replanifie automatiquement ces demandes, anticipe les besoins en croisant les événements planifiés de l'entreprise (séminaire, besoin d'un vidéoprojecteur, de mobilier...) tout en tenant compte des dates d'entretien, et coordonne les interventions des services techniques (réparation, installation, enlèvement).",
    features: [
      "Inventaire du matériel et de la flotte de véhicules en temps réel",
      "Suivi des dates d'achat et du statut de garantie",
      "Localisation de chaque équipement (en stock ou déployé sur site)",
      "Planning commun de demandes de réservation de matériel par les employés",
      "Conformité RGPD, en remplacement du fichier Excel hébergé sur Google Drive et des factures dispersées en comptabilité",
    ],
    ai: [
      "Rappels automatiques des dates de maintenance et de garantie",
      "Priorisation et replanification automatique des demandes de réservation",
      "Anticipation des besoins en croisant les événements planifiés de l'entreprise (séminaire, réunion, matériel spécifique...)",
      "Coordination avec les services techniques pour la réparation, l'installation et l'enlèvement du matériel",
    ],
    results: "Un outil centralisé qui remplace le fichier Excel hébergé sur Google Drive et les demandes par email, disponible 365 jours par an et 24h/24 : l'activité ne dépend plus de la présence du gestionnaire du parc. L'inventaire est mis à jour en temps réel, avec une planification des besoins en amont grâce à l'anticipation par l'IA des événements de l'entreprise.",
    technologies: [],
    isPlaceholder: false,
  },
  {
    slug: "secure-securite-maintenance",
    title: "Secure — la sécurité et la maintenance pilotées par QR code",
    category: "Sécurité & maintenance",
    summary: "Digitaliser les rondes de sécurité et le signalement d'incidents d'un site, avec preuve horodatée de passage même hors connexion et un pilotage centralisé.",
    context: "Le service de sécurité effectuait jusque-là ses rondes et consignait les incidents sur papier, sans preuve de passage horodatée ni vue consolidée en temps réel. Prévenir un prestataire externe pour une intervention nécessitait un appel téléphonique ou un email.",
    problem: "Sans horodatage vérifiable, impossible de prouver qu'une ronde avait bien été effectuée dans son intégralité, ni de disposer d'un historique consultable en cas d'incident. Le signalement d'un problème de sûreté (vitre brisée, intrusion, matériel endommagé...) reposait sur une transmission orale ou écrite, sans suivi structuré ni notification immédiate des responsables.",
    users: "Les agents de sécurité pour les rondes et la déclaration d'incidents, les techniciens pour la prise en charge des interventions, les responsables pour le pilotage (tableau de bord, historique, planning), et l'administrateur pour la configuration des bâtiments, zones, espaces et catégories.",
    solution: "Une application digitalisant la sécurité et la maintenance du site : chaque salle et équipement possède un QR code unique généré automatiquement, imprimable individuellement ou par bâtiment. Le responsable crée les rondes selon le parcours souhaité, les programme à une heure spécifique ou non, ou les laisse libres sans ordre de passage défini. Les agents de sécurité effectuent leurs rondes numériques avec preuve horodatée de passage à chaque point de contrôle, y compris hors connexion — la synchronisation se fait au retour du réseau. Un incident se déclare en un scan : type et constat prédéfinis pour les agents (ex. « Sûreté » → « Vitre brisée »), formulaire libre pour les autres profils, avec possibilité de joindre une photo pour plus de précision et une preuve visuelle. Une main courante consolide en temps réel l'ensemble des incidents déclarés, consultable par les responsables qui pilotent bâtiments, zones, espaces et équipes depuis un tableau de bord centralisé, avec export des rapports de ronde ou d'intervention en PDF. Les services concernés sont notifiés en temps réel selon la priorité de l'intervention, avec déclenchement immédiat ou programmation automatique.",
    features: [
      "QR codes uniques par espace, générés automatiquement et imprimables individuellement ou par bâtiment",
      "Rondes de sécurité horodatées, avec preuve de passage à chaque point de contrôle même hors connexion",
      "Création de plusieurs rondes selon un parcours choisi, programmées à une heure spécifique ou libres sans ordre de passage défini",
      "Déclaration structurée d'incidents (type et constat prédéfinis pour les agents, formulaire libre pour les autres profils)",
      "Photo jointe à la déclaration d'incident pour plus de précision et une preuve visuelle",
      "Main courante consolidée et consultable en temps réel",
      "Organisation hiérarchique multi-bâtiments (bâtiments → zones → espaces), extensible sans limite",
      "Catégories et constats d'incidents personnalisables depuis l'administration",
      "Export des rapports de ronde ou d'intervention en PDF",
      "Permissions par rôle (déclarant, agent de sécurité, technicien, responsable, admin)",
      "Notification en temps réel des services concernés, avec déclenchement immédiat ou programmation de l'intervention selon sa priorité",
      "Dashboard de suivi des demandes d'intervention avec statistiques générées en temps réel (déclarées, en cours, planifiées, clôturées)",
    ],
    results: "Une preuve horodatée et vérifiable de chaque ronde de sécurité, une main courante entièrement numérique remplaçant le papier, et un signalement d'incident en un scan de QR code à la place d'une transmission papier ou orale. Les services concernés sont notifiés automatiquement selon la priorité de l'intervention, sans plus avoir à appeler ou envoyer un email aux prestataires externes.",
    technologies: [],
    isPlaceholder: false,
  },
];

export function getRealisationBySlug(slug: string): Realisation | undefined {
  return realisations.find((r) => r.slug === slug);
}
