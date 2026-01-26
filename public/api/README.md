# Installation de l'endpoint PHP sur Hostinger

## Étape 1 : Installer PHPMailer sur le serveur

Connecte-toi en SSH à ton serveur Hostinger et exécute :

```bash
cd /home/ton-username/public_html/api
composer require phpmailer/phpmailer
```

Si composer n'est pas installé, installe-le avec :
```bash
curl -sS https://getcomposer.org/installer | php
php composer.phar require phpmailer/phpmailer
```

## Étape 2 : Configurer les credentials SMTP

Copie le fichier exemple et configure tes credentials :

```bash
cd /home/ton-username/public_html/api
cp .env.php.example .env.php
nano .env.php  # ou vim, ou éditeur de texte
```

Remplis tes vrais credentials dans `.env.php` :

```php
<?php
define('SMTP_HOST', 'smtp.hostinger.com');
define('SMTP_PORT', 465); // 465 pour SSL ou 587 pour TLS
define('SMTP_USERNAME', 'contact@synapse-agency.fr');
define('SMTP_PASSWORD', 'ton_vrai_mot_de_passe');
define('SMTP_FROM_EMAIL', 'contact@synapse-agency.fr');
define('SMTP_FROM_NAME', 'Synapse Agency');
define('SMTP_TO_EMAIL', 'contact@synapse-agency.fr');
?>
```

⚠️ **IMPORTANT** : Le fichier `.env.php` est ignoré par Git pour protéger tes credentials.

### Où trouver tes credentials SMTP Hostinger :
1. Connecte-toi à hPanel Hostinger
2. Va dans **Emails** > **Email Accounts**
3. Clique sur **Manage** pour `contact@synapse-agency.fr`
4. Tu trouveras les infos SMTP :
   - Serveur SMTP : `smtp.hostinger.com`
   - Port : `465` (SSL) ou `587` (TLS)
   - Username : `contact@synapse-agency.fr`
   - Password : le mot de passe de ta boîte email

## Étape 3 : Uploader les fichiers

Upload sur ton serveur Hostinger :
- `audit-booking.php` → `/public_html/api/audit-booking.php`
- Dossier `vendor/` (créé par composer) → `/public_html/vendor/`

## Étape 4 : Tester l'endpoint

URL de ton endpoint : `https://synapse-agency.fr/api/audit-booking.php`

Test avec curl :
```bash
curl -X POST https://synapse-agency.fr/api/audit-booking.php \
  -H "Content-Type: application/json" \
  -d '{"prenom":"Test","nom":"User","email":"test@test.com","entreprise":"Test","date_rdv":"26/01/2026","heure_rdv":"10:00","datetime_full":"Test","secteur":"E-commerce","taille_entreprise":"1-5 employés","taches_repetitives":"Test","temps_taches":"10","objectifs":"Test","urgence":"Immédiat"}'
```

## Alternative : Version sans PHPMailer (moins fiable)

Si tu ne peux pas installer PHPMailer, utilise `audit-booking-simple.php` qui utilise la fonction `mail()` native de PHP.
