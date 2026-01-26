#!/usr/bin/env node

/**
 * Script de test pour les endpoints PHP
 * Usage: node test-endpoints.js
 */

const BASE_URL = process.env.API_URL || 'https://synapse-agency.fr/api';

// Couleurs pour le terminal
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

async function testAuditEndpoint() {
  log('\n📋 Test de l\'endpoint Audit...', 'cyan');

  const testData = {
    prenom: 'Jean',
    nom: 'Dupont',
    email: 'jean.dupont@test.com',
    entreprise: 'Test Corp',
    telephone: '0612345678',
    date_rdv: '26/01/2026',
    heure_rdv: '10:00',
    datetime_full: 'Lundi 26 janvier 2026 à 10:00',
    secteur: 'E-commerce',
    taille_entreprise: '1-5 employés',
    taches_repetitives: 'Gestion des emails, Création de devis/factures',
    temps_taches: '10',
    outils_actuels: 'Excel, Gmail',
    objectifs: 'Gagner du temps, Automatiser les processus',
    urgence: 'Court terme (1-3 mois)',
    message: 'Ceci est un message de test'
  };

  try {
    const response = await fetch(`${BASE_URL}/audit-booking-simple.php`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
    });

    const contentType = response.headers.get('content-type');

    if (!contentType || !contentType.includes('application/json')) {
      log(`❌ Erreur: Réponse non-JSON reçue`, 'red');
      const text = await response.text();
      log(`Réponse brute: ${text.substring(0, 500)}`, 'yellow');
      return false;
    }

    const result = await response.json();

    if (response.ok) {
      log('✅ Endpoint Audit: OK', 'green');
      log(`   Message: ${result.message}`, 'green');
      return true;
    } else {
      log('❌ Endpoint Audit: ERREUR', 'red');
      log(`   Code: ${response.status}`, 'red');
      log(`   Erreur: ${result.error || 'Inconnue'}`, 'red');
      if (result.details) {
        log(`   Détails: ${result.details}`, 'yellow');
      }
      return false;
    }
  } catch (error) {
    log('❌ Erreur de connexion à l\'endpoint Audit', 'red');
    log(`   ${error.message}`, 'red');
    return false;
  }
}

async function testContactEndpoint() {
  log('\n📧 Test de l\'endpoint Contact...', 'cyan');

  const testData = {
    name: 'Marie Martin',
    email: 'marie.martin@test.com',
    company: 'Test Solutions',
    service: 'agents-ia',
    message: 'Je souhaite en savoir plus sur vos services d\'agents IA. Ceci est un message de test.'
  };

  try {
    const response = await fetch(`${BASE_URL}/contact.php`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
    });

    const contentType = response.headers.get('content-type');

    if (!contentType || !contentType.includes('application/json')) {
      log(`❌ Erreur: Réponse non-JSON reçue`, 'red');
      const text = await response.text();
      log(`Réponse brute: ${text.substring(0, 500)}`, 'yellow');
      return false;
    }

    const result = await response.json();

    if (response.ok) {
      log('✅ Endpoint Contact: OK', 'green');
      log(`   Message: ${result.message}`, 'green');
      return true;
    } else {
      log('❌ Endpoint Contact: ERREUR', 'red');
      log(`   Code: ${response.status}`, 'red');
      log(`   Erreur: ${result.error || 'Inconnue'}`, 'red');
      if (result.details) {
        log(`   Détails: ${result.details}`, 'yellow');
      }
      return false;
    }
  } catch (error) {
    log('❌ Erreur de connexion à l\'endpoint Contact', 'red');
    log(`   ${error.message}`, 'red');
    return false;
  }
}

async function checkEndpointExists(url) {
  try {
    const response = await fetch(url, { method: 'OPTIONS' });
    return response.ok || response.status === 405; // 405 = Method Not Allowed (normal pour POST only)
  } catch (error) {
    return false;
  }
}

async function main() {
  log('═══════════════════════════════════════════════', 'cyan');
  log('   Test des endpoints PHP - Synapse Agency', 'cyan');
  log('═══════════════════════════════════════════════', 'cyan');
  log(`\n🔗 Base URL: ${BASE_URL}\n`, 'yellow');

  // Vérifier si les endpoints existent
  log('🔍 Vérification de l\'existence des endpoints...', 'cyan');
  const auditExists = await checkEndpointExists(`${BASE_URL}/audit-booking-simple.php`);
  const contactExists = await checkEndpointExists(`${BASE_URL}/contact.php`);

  if (!auditExists) {
    log('⚠️  Endpoint Audit introuvable. As-tu uploadé audit-booking-simple.php ?', 'yellow');
  }
  if (!contactExists) {
    log('⚠️  Endpoint Contact introuvable. As-tu uploadé contact.php ?', 'yellow');
  }

  if (!auditExists && !contactExists) {
    log('\n❌ Aucun endpoint trouvé. Vérifie que les fichiers PHP sont bien uploadés.', 'red');
    process.exit(1);
  }

  // Tests
  const results = [];

  if (auditExists) {
    results.push(await testAuditEndpoint());
  }

  if (contactExists) {
    results.push(await testContactEndpoint());
  }

  // Résumé
  log('\n═══════════════════════════════════════════════', 'cyan');
  log('   RÉSUMÉ DES TESTS', 'cyan');
  log('═══════════════════════════════════════════════', 'cyan');

  const successCount = results.filter(r => r).length;
  const totalCount = results.length;

  if (successCount === totalCount) {
    log(`\n✅ Tous les tests ont réussi (${successCount}/${totalCount})`, 'green');
    log('\n✉️  Vérifie ta boîte mail contact@synapse-agency.fr pour les emails de test', 'yellow');
  } else {
    log(`\n❌ Certains tests ont échoué (${successCount}/${totalCount} réussis)`, 'red');
  }

  log('\n');
  process.exit(successCount === totalCount ? 0 : 1);
}

main();
