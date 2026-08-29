import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { contactSchema } from '@/lib/validations/contact';

export const runtime = 'nodejs';

const resend = new Resend(process.env.RESEND_API_KEY);

async function verifyTurnstile(token: string, remoteip: string | null): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    console.error('TURNSTILE_SECRET_KEY manquante : formulaire de contact non protégé, requête rejetée.');
    return false;
  }
  if (!token) return false;

  try {
    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ secret, response: token, remoteip: remoteip ?? undefined }),
      signal: AbortSignal.timeout(5000),
    });
    const result = await response.json();
    return result.success === true;
  } catch (error) {
    console.error('Erreur de vérification Turnstile:', error);
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    const raw = await request.json();

    // Honeypot : un champ invisible que seuls les robots remplissent.
    // On répond succès sans rien traiter, pour ne pas leur indiquer qu'ils sont détectés.
    if (raw.website) {
      return NextResponse.json({ success: true, message: 'Message envoyé avec succès' });
    }

    const remoteip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? null;
    const turnstileValid = await verifyTurnstile(raw.turnstileToken, remoteip);
    if (!turnstileValid) {
      return NextResponse.json(
        { error: 'Vérification anti-robot échouée. Merci de réessayer.' },
        { status: 400 }
      );
    }

    const parsed = contactSchema.safeParse(raw);
    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message ?? 'Formulaire invalide' },
        { status: 400 }
      );
    }
    const data = parsed.data;

    const escapeHtml = (value: string) =>
      value.replace(/[&<>"']/g, (char) => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
      }[char]!));

    // On retire les retours à la ligne du nom avant de l'utiliser dans le sujet de
    // l'email (contrairement au corps HTML, un sujet ne passe pas par escapeHtml).
    const subjectSafeName = data.name.replace(/[\r\n]+/g, ' ').trim();

    const name = escapeHtml(data.name);
    const email = escapeHtml(data.email);
    const company = escapeHtml(data.company || 'Non renseigné');
    const phone = escapeHtml(data.phone || 'Non renseigné');
    const role = escapeHtml(data.role || 'Non renseigné');
    const projectType = escapeHtml(data.projectType.length > 0 ? data.projectType.join(', ') : 'Non précisé');
    const usersEstimate = escapeHtml(data.usersEstimate || 'Non renseigné');
    const budget = escapeHtml(data.budget || 'Non renseigné');
    const deadline = escapeHtml(data.deadline || 'Non renseigné');
    const message = escapeHtml(data.message).replace(/\n/g, '<br>');

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <meta charset='UTF-8'>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #6366f1, #4338ca); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
        .content { background: #f8f9fa; padding: 20px; border-radius: 0 0 8px 8px; }
        .section { background: white; padding: 15px; margin-bottom: 15px; border-radius: 6px; border-left: 4px solid #6366f1; }
        .section h3 { margin-top: 0; color: #6366f1; }
        .field { margin-bottom: 10px; }
        .label { font-weight: bold; color: #666; }
        .value { color: #333; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h2>Nouvelle demande de contact</h2>
        </div>
        <div class='content'>
            <div class='section'>
                <h3>Coordonnées</h3>
                <div class='field'><span class='label'>Nom :</span> <span class='value'>${name}</span></div>
                <div class='field'><span class='label'>Email :</span> <span class='value'>${email}</span></div>
                <div class='field'><span class='label'>Entreprise :</span> <span class='value'>${company}</span></div>
                <div class='field'><span class='label'>Téléphone :</span> <span class='value'>${phone}</span></div>
                <div class='field'><span class='label'>Fonction :</span> <span class='value'>${role}</span></div>
            </div>

            <div class='section'>
                <h3>Projet</h3>
                <div class='field'><span class='label'>Type de projet :</span> <span class='value'>${projectType}</span></div>
                <div class='field'><span class='label'>Utilisateurs estimés :</span> <span class='value'>${usersEstimate}</span></div>
                <div class='field'><span class='label'>Budget :</span> <span class='value'>${budget}</span></div>
                <div class='field'><span class='label'>Délai souhaité :</span> <span class='value'>${deadline}</span></div>
            </div>

            <div class='section'>
                <h3>Message</h3>
                <div class='field'><span class='value'>${message}</span></div>
            </div>
        </div>
    </div>
</body>
</html>
    `;

    const { error: emailError } = await resend.emails.send({
      from: 'Synapse Agency - Contact <notification@synapse-agency.fr>',
      to: 'contact@synapse-agency.fr',
      replyTo: data.email,
      subject: `Nouvelle demande de contact - ${subjectSafeName}`,
      html: htmlContent,
    });

    if (emailError) {
      console.error('Erreur Resend:', emailError);
      return NextResponse.json(
        { error: 'Erreur lors de l\'envoi du message. Merci de réessayer ou de nous écrire directement à contact@synapse-agency.fr' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, message: 'Message envoyé avec succès' });
  } catch (error) {
    console.error('Erreur lors du traitement du formulaire de contact:', error);
    return NextResponse.json(
      {
        error: 'Erreur lors de l\'envoi du message',
        details: error instanceof Error ? error.message : 'Erreur inconnue',
      },
      { status: 500 }
    );
  }
}
