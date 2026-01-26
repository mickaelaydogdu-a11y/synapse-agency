<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Gérer les requêtes OPTIONS (preflight)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Vérifier que c'est une requête POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Méthode non autorisée']);
    exit();
}

// Récupérer les données JSON
$json = file_get_contents('php://input');
$data = json_decode($json, true);

// Validation des champs requis
$required_fields = ['prenom', 'nom', 'email', 'entreprise', 'date_rdv', 'heure_rdv', 'secteur', 'taille_entreprise', 'temps_taches', 'urgence'];
foreach ($required_fields as $field) {
    if (empty($data[$field])) {
        http_response_code(400);
        echo json_encode(['error' => "Le champ {$field} est requis"]);
        exit();
    }
}

// Validation de l'email
if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Email invalide']);
    exit();
}

// Configuration email
$to_email = 'contact@synapse-agency.fr';
$from_email = 'contact@synapse-agency.fr';
$from_name = 'Synapse Agency - Audit';

// Construire le contenu de l'email
$subject = "Nouvelle demande d'audit - {$data['prenom']} {$data['nom']}";

$message = "
<!DOCTYPE html>
<html>
<head>
    <meta charset='UTF-8'>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #f97316, #ea580c); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
        .content { background: #f8f9fa; padding: 20px; border-radius: 0 0 8px 8px; }
        .section { background: white; padding: 15px; margin-bottom: 15px; border-radius: 6px; border-left: 4px solid #f97316; }
        .section h3 { margin-top: 0; color: #f97316; }
        .field { margin-bottom: 10px; }
        .label { font-weight: bold; color: #666; }
        .value { color: #333; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h2>📅 Nouvelle demande d'audit gratuit</h2>
        </div>
        <div class='content'>
            <div class='section'>
                <h3>📌 Rendez-vous</h3>
                <div class='field'><span class='label'>Date et heure :</span> <span class='value'>{$data['datetime_full']}</span></div>
            </div>

            <div class='section'>
                <h3>👤 Informations de contact</h3>
                <div class='field'><span class='label'>Prénom :</span> <span class='value'>{$data['prenom']}</span></div>
                <div class='field'><span class='label'>Nom :</span> <span class='value'>{$data['nom']}</span></div>
                <div class='field'><span class='label'>Email :</span> <span class='value'>{$data['email']}</span></div>
                <div class='field'><span class='label'>Entreprise :</span> <span class='value'>{$data['entreprise']}</span></div>
                <div class='field'><span class='label'>Téléphone :</span> <span class='value'>" . ($data['telephone'] ?? 'Non renseigné') . "</span></div>
            </div>

            <div class='section'>
                <h3>🏢 Situation de l'entreprise</h3>
                <div class='field'><span class='label'>Secteur d'activité :</span> <span class='value'>{$data['secteur']}</span></div>
                <div class='field'><span class='label'>Taille de l'entreprise :</span> <span class='value'>{$data['taille_entreprise']}</span></div>
                <div class='field'><span class='label'>Tâches répétitives :</span> <span class='value'>{$data['taches_repetitives']}</span></div>
                <div class='field'><span class='label'>Temps passé (h/semaine) :</span> <span class='value'>{$data['temps_taches']}h</span></div>
                <div class='field'><span class='label'>Outils actuels :</span> <span class='value'>" . ($data['outils_actuels'] ?? 'Non renseigné') . "</span></div>
            </div>

            <div class='section'>
                <h3>🎯 Objectifs et urgence</h3>
                <div class='field'><span class='label'>Objectifs :</span> <span class='value'>{$data['objectifs']}</span></div>
                <div class='field'><span class='label'>Urgence :</span> <span class='value'>{$data['urgence']}</span></div>
            </div>

            <div class='section'>
                <h3>💬 Message</h3>
                <div class='field'><span class='value'>" . nl2br($data['message'] ?? 'Aucun message supplémentaire') . "</span></div>
            </div>
        </div>
    </div>
</body>
</html>
";

// Headers pour email HTML
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
$headers .= "From: {$from_name} <{$from_email}>\r\n";
$headers .= "Reply-To: {$data['email']}\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Envoyer l'email
if (mail($to_email, $subject, $message, $headers)) {
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Email envoyé avec succès'
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'error' => 'Erreur lors de l\'envoi de l\'email'
    ]);
}
?>
