import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { interest, firstName, phone } = body;

    // Mapping des valeurs du formulaire
    const interestLabels: { [key: string]: string } = {
      'panneaux': 'Panneau solaire',
      'pompe': 'Pompe à chaleur',
      'isolation': 'Isolation',
      'borne': 'Borne de recharge automobile'
    };

    const data = await resend.emails.send({
      from: 'Aides-Energie.lu <onboarding@resend.dev>',
      to: ['enrluxn@gmail.com'],
      subject: `🇱🇺 LEAD URGENT - ${firstName || 'Prospect'} - ${interestLabels[interest] || interest}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #003D7A 0%, #00A3E0 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
              .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
              .info-block { background: white; padding: 20px; margin: 15px 0; border-radius: 8px; border-left: 4px solid #00A3E0; }
              .label { font-weight: bold; color: #003D7A; margin-bottom: 5px; }
              .value { color: #333; margin-bottom: 15px; font-size: 16px; }
              .highlight { background: #ED1C24; color: white; padding: 15px; border-radius: 8px; text-align: center; margin: 20px 0; }
              .footer { text-align: center; margin-top: 30px; color: #666; font-size: 12px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0;">🚨 LEAD ULTRA-QUALIFIÉ</h1>
                <p style="margin: 10px 0 0 0; font-size: 18px;">⚡ APPELER IMMÉDIATEMENT ⚡</p>
              </div>
              
              <div class="content">
                <div class="highlight">
                  <strong style="font-size: 20px;">🎯 ${interestLabels[interest] || interest}</strong>
                </div>

                <div class="info-block" style="border-left: 4px solid #ED1C24; background: #FFF5F5;">
                  <h3 style="color: #ED1C24; margin-top: 0; font-size: 22px;">📞 APPELER CE NUMÉRO :</h3>
                  <div class="value" style="font-size: 28px; font-weight: bold; color: #ED1C24; text-align: center; margin: 20px 0;">
                    <a href="tel:${phone}" style="color: #ED1C24; text-decoration: none;">${phone}</a>
                  </div>
                  
                  ${firstName ? `
                    <div class="label">👤 Prénom</div>
                    <div class="value" style="font-size: 18px;"><strong>${firstName}</strong></div>
                  ` : ''}
                </div>

                <div style="background: #FFF3CD; padding: 20px; border-radius: 8px; margin-top: 20px; border: 2px solid #FFC107;">
                  <p style="margin: 0; text-align: center; color: #856404; font-weight: bold; font-size: 16px;">
                    ⏰ TEMPS DE RÉPONSE CRITIQUE : Appeler dans les 5 minutes !
                  </p>
                  <p style="margin: 10px 0 0 0; text-align: center; color: #856404;">
                    Les leads qui reçoivent un appel dans les 5 minutes ont <strong>21x plus de chances</strong> de se convertir.
                  </p>
                </div>

                <div class="footer">
                  <p>Email envoyé automatiquement depuis Aides-Energie.lu</p>
                  <p>Date : ${new Date().toLocaleString('fr-LU', { timeZone: 'Europe/Luxembourg' })}</p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}

