import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { createClient } from '@supabase/supabase-js';
import { contactSchema } from '@/lib/validations/contact';

export const runtime = 'nodejs';

const resend = new Resend(process.env.RESEND_API_KEY);

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  { auth: { persistSession: false } }
);

const RATE_LIMIT_WINDOW_MINUTES = 5;
const RATE_LIMIT_MAX_SUBMISSIONS = 2;

export async function POST(request: NextRequest) {
  try {
    const raw = await request.json();

    // Honeypot : un champ invisible que seuls les robots remplissent.
    // On répond succès sans rien traiter, pour ne pas leur indiquer qu'ils sont détectés.
    if (raw.website) {
      return NextResponse.json({ success: true, message: 'Message envoyé avec succès' });
    }

    const parsed = contactSchema.safeParse(raw);
    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message ?? 'Formulaire invalide' },
        { status: 400 }
      );
    }
    const data = parsed.data;

    // Anti-spam : limite le nombre de soumissions récentes pour un même email
    const since = new Date(Date.now() - RATE_LIMIT_WINDOW_MINUTES * 60 * 1000).toISOString();
    const { count } = await supabaseAdmin
      .from('leads')
      .select('id', { count: 'exact', head: true })
      .eq('email', data.email)
      .gte('created_at', since);

    if ((count ?? 0) >= RATE_LIMIT_MAX_SUBMISSIONS) {
      return NextResponse.json(
        { error: 'Trop de tentatives récentes. Merci de réessayer dans quelques minutes.' },
        { status: 429 }
      );
    }

    const { error: insertError } = await supabaseAdmin.from('leads').insert({
      name: data.name,
      company: data.company || null,
      email: data.email,
      phone: data.phone || null,
      role: data.role || null,
      project_type: data.projectType.length > 0 ? data.projectType : null,
      message: data.message,
      users_estimate: data.usersEstimate || null,
      budget: data.budget || null,
      deadline: data.deadline || null,
      status: 'new',
      source: 'site-contact-form',
    });

    if (insertError) {
      console.error('Erreur Supabase (leads):', insertError);
      return NextResponse.json(
        { error: 'Erreur lors de l\'enregistrement de votre demande' },
        { status: 500 }
      );
    }

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
                <div class='field'><span class='label'>Nom :</span> <span class='value'>${data.name}</span></div>
                <div class='field'><span class='label'>Email :</span> <span class='value'>${data.email}</span></div>
                <div class='field'><span class='label'>Entreprise :</span> <span class='value'>${data.company || 'Non renseigné'}</span></div>
                <div class='field'><span class='label'>Téléphone :</span> <span class='value'>${data.phone || 'Non renseigné'}</span></div>
                <div class='field'><span class='label'>Fonction :</span> <span class='value'>${data.role || 'Non renseigné'}</span></div>
            </div>

            <div class='section'>
                <h3>Projet</h3>
                <div class='field'><span class='label'>Type de projet :</span> <span class='value'>${data.projectType.length > 0 ? data.projectType.join(', ') : 'Non précisé'}</span></div>
                <div class='field'><span class='label'>Utilisateurs estimés :</span> <span class='value'>${data.usersEstimate || 'Non renseigné'}</span></div>
                <div class='field'><span class='label'>Budget :</span> <span class='value'>${data.budget || 'Non renseigné'}</span></div>
                <div class='field'><span class='label'>Délai souhaité :</span> <span class='value'>${data.deadline || 'Non renseigné'}</span></div>
            </div>

            <div class='section'>
                <h3>Message</h3>
                <div class='field'><span class='value'>${data.message.replace(/\n/g, '<br>')}</span></div>
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
      subject: `Nouvelle demande de contact - ${data.name}`,
      html: htmlContent,
    });

    if (emailError) {
      // Le lead est déjà enregistré en base, l'échec de l'email n'est pas bloquant
      console.error('Erreur Resend:', emailError);
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
