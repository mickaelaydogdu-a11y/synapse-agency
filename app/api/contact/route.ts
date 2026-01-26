import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs';

// Configuration Resend
const resend = new Resend(process.env.RESEND_API_KEY);

const serviceLabels: { [key: string]: string } = {
  'agents-ia': 'Agents IA',
  'solutions-ia': 'Solutions IA',
  'applications': 'Applications Web/Mobile',
  'autre': 'Autre',
};

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Validation des champs requis
    const requiredFields = ['name', 'email', 'service', 'message'];

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

    const serviceLabel = serviceLabels[data.service] || data.service;

    // Construire l'email HTML
    const htmlContent = `
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
                <div class='field'><span class='label'>Nom :</span> <span class='value'>${data.name}</span></div>
                <div class='field'><span class='label'>Email :</span> <span class='value'>${data.email}</span></div>
                <div class='field'><span class='label'>Entreprise :</span> <span class='value'>${data.company || 'Non renseigné'}</span></div>
            </div>

            <div class='section'>
                <h3>🎯 Service demandé</h3>
                <div class='field'><span class='value'>${serviceLabel}</span></div>
            </div>

            <div class='section'>
                <h3>💬 Message</h3>
                <div class='field'><span class='value'>${data.message.replace(/\n/g, '<br>')}</span></div>
            </div>
        </div>
    </div>
</body>
</html>
    `;

    // Envoyer l'email avec Resend
    const { data: emailData, error: emailError } = await resend.emails.send({
      from: 'Synapse Agency - Contact <contact@updates.synapse-agency.fr>',
      to: 'contact@synapse-agency.fr',
      replyTo: data.email,
      subject: `Nouveau message de contact - ${data.name}`,
      html: htmlContent,
    });

    if (emailError) {
      console.error('Erreur Resend:', emailError);
      return NextResponse.json(
        {
          error: 'Erreur lors de l\'envoi du message',
          details: emailError.message,
        },
        { status: 500 }
      );
    }

    console.log('Email envoyé avec succès:', emailData);

    return NextResponse.json({
      success: true,
      message: 'Message envoyé avec succès',
      emailId: emailData?.id,
    });

  } catch (error) {
    console.error('Erreur lors de l\'envoi du message:', error);
    return NextResponse.json(
      {
        error: 'Erreur lors de l\'envoi du message',
        details: error instanceof Error ? error.message : 'Erreur inconnue',
      },
      { status: 500 }
    );
  }
}
