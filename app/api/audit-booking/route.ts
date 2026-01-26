import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs';

// Configuration Resend
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Validation des champs requis
    const requiredFields = [
      'prenom', 'nom', 'email', 'entreprise', 'date_rdv', 'heure_rdv',
      'secteur', 'taille_entreprise', 'temps_taches', 'urgence'
    ];

    for (const field of requiredFields) {
      if (!data[field]) {
        return NextResponse.json(
          { error: `Le champ ${field} est requis` },
          { status: 400 }
        );
      }
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Email invalide' },
        { status: 400 }
      );
    }

    // Construire l'email HTML
    const htmlContent = `
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
                <div class='field'><span class='label'>Date et heure :</span> <span class='value'>${data.datetime_full}</span></div>
            </div>

            <div class='section'>
                <h3>👤 Informations de contact</h3>
                <div class='field'><span class='label'>Prénom :</span> <span class='value'>${data.prenom}</span></div>
                <div class='field'><span class='label'>Nom :</span> <span class='value'>${data.nom}</span></div>
                <div class='field'><span class='label'>Email :</span> <span class='value'>${data.email}</span></div>
                <div class='field'><span class='label'>Entreprise :</span> <span class='value'>${data.entreprise}</span></div>
                <div class='field'><span class='label'>Téléphone :</span> <span class='value'>${data.telephone || 'Non renseigné'}</span></div>
            </div>

            <div class='section'>
                <h3>🏢 Situation de l'entreprise</h3>
                <div class='field'><span class='label'>Secteur d'activité :</span> <span class='value'>${data.secteur}</span></div>
                <div class='field'><span class='label'>Taille de l'entreprise :</span> <span class='value'>${data.taille_entreprise}</span></div>
                <div class='field'><span class='label'>Tâches répétitives :</span> <span class='value'>${data.taches_repetitives}</span></div>
                <div class='field'><span class='label'>Temps passé (h/semaine) :</span> <span class='value'>${data.temps_taches}h</span></div>
                <div class='field'><span class='label'>Outils actuels :</span> <span class='value'>${data.outils_actuels || 'Non renseigné'}</span></div>
            </div>

            <div class='section'>
                <h3>🎯 Objectifs et urgence</h3>
                <div class='field'><span class='label'>Objectifs :</span> <span class='value'>${data.objectifs}</span></div>
                <div class='field'><span class='label'>Urgence :</span> <span class='value'>${data.urgence}</span></div>
            </div>

            <div class='section'>
                <h3>💬 Message</h3>
                <div class='field'><span class='value'>${data.message ? data.message.replace(/\n/g, '<br>') : 'Aucun message supplémentaire'}</span></div>
            </div>
        </div>
    </div>
</body>
</html>
    `;

    // Envoyer l'email avec Resend
    await resend.emails.send({
      from: 'Synapse Agency - Audit <onboarding@resend.dev>',
      to: process.env.SMTP_TO_EMAIL || 'contact@synapse-agency.fr',
      replyTo: data.email,
      subject: `Nouvelle demande d'audit - ${data.prenom} ${data.nom}`,
      html: htmlContent,
    });

    return NextResponse.json({
      success: true,
      message: 'Email envoyé avec succès',
    });

  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return NextResponse.json(
      {
        error: 'Erreur lors de l\'envoi de l\'email',
        details: error instanceof Error ? error.message : 'Erreur inconnue',
      },
      { status: 500 }
    );
  }
}
