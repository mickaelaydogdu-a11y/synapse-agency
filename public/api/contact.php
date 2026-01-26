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
$required_fields = ['name', 'email', 'service', 'message'];
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
$from_name = 'Synapse Agency - Contact';

// Construire le contenu de l'email
$subject = "Nouveau message de contact - {$data['name']}";

$service_labels = [
    'agents-ia' => 'Agents IA',
    'solutions-ia' => 'Solutions IA',
    'applications' => 'Applications Web/Mobile',
    'autre' => 'Autre'
];

$service_label = $service_labels[$data['service']] ?? $data['service'];

$message = "
<!DOCTYPE html>
<html>
<head>
    <meta charset='UTF-8'>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #2563EB, #1d4ed8); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
        .content { background: #f8f9fa; padding: 20px; border-radius: 0 0 8px 8px; }
        .section { background: white; padding: 15px; margin-bottom: 15px; border-radius: 6px; border-left: 4px solid #2563EB; }
        .section h3 { margin-top: 0; color: #2563EB; }
        .field { margin-bottom: 10px; }
        .label { font-weight: bold; color: #666; }
        .value { color: #333; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h2>📧 Nouveau message de contact</h2>
        </div>
        <div class='content'>
            <div class='section'>
                <h3>👤 Coordonnées</h3>
                <div class='field'><span class='label'>Nom :</span> <span class='value'>{$data['name']}</span></div>
                <div class='field'><span class='label'>Email :</span> <span class='value'>{$data['email']}</span></div>
                <div class='field'><span class='label'>Entreprise :</span> <span class='value'>" . ($data['company'] ?? 'Non renseigné') . "</span></div>
            </div>

            <div class='section'>
                <h3>🎯 Service demandé</h3>
                <div class='field'><span class='value'>{$service_label}</span></div>
            </div>

            <div class='section'>
                <h3>💬 Message</h3>
                <div class='field'><span class='value'>" . nl2br(htmlspecialchars($data['message'])) . "</span></div>
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
        'message' => 'Message envoyé avec succès'
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'error' => 'Erreur lors de l\'envoi du message'
    ]);
}
?>
