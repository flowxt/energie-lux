import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { phone, firstName, timestamp } = body;

    const data = await resend.emails.send({
      from: 'Aides-Energie.lu <onboarding@resend.dev>',
      to: ['enrluxn@gmail.com'],
      subject: `🔥 RAPPEL URGENT - ${firstName || 'Prospect'} - ${phone}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #ED1C24 0%, #c91820 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
              .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
              .urgent-box { background: #FFF3CD; border-left: 5px solid #FFC107; padding: 20px; margin: 20px 0; border-radius: 5px; }
              .phone-box { background: #fff; padding: 25px; margin: 20px 0; border-radius: 10px; border: 3px solid #ED1C24; text-align: center; }
              .phone-number { font-size: 32px; font-weight: bold; color: #ED1C24; letter-spacing: 2px; }
              .action-btn { background: #00A3E0; color: white; padding: 15px 30px; border-radius: 8px; text-decoration: none; display: inline-block; font-weight: bold; margin-top: 20px; }
              .footer { text-align: center; margin-top: 30px; color: #666; font-size: 12px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0; font-size: 28px;">🔥 DEMANDE DE RAPPEL URGENT</h1>
                <p style="margin: 10px 0 0 0; font-size: 18px;">Prospect chaud - À rappeler sous 24h</p>
              </div>
              
              <div class="content">
                <div class="urgent-box">
                  <p style="margin: 0; font-weight: bold; color: #856404;">
                    ⚠️ <strong>PRIORITÉ HAUTE</strong> - Ce prospect attend votre appel !
                  </p>
                </div>

                <div class="phone-box">
                  <p style="margin: 0 0 10px 0; color: #666; font-size: 14px;">📞 Numéro à appeler :</p>
                  <div class="phone-number">${phone}</div>
                  ${firstName ? `<p style="margin-top: 15px; color: #003D7A; font-size: 18px; font-weight: bold;">Contact : ${firstName}</p>` : ''}
                </div>

                <div style="background: #E6F7FF; padding: 20px; border-radius: 8px; margin-top: 20px;">
                  <h3 style="color: #003D7A; margin-top: 0;">📋 Informations</h3>
                  <p><strong>Source :</strong> Bouton "On vous rappelle" (Site web)</p>
                  <p><strong>Date/Heure :</strong> ${new Date(timestamp).toLocaleString('fr-LU', { 
                    timeZone: 'Europe/Luxembourg',
                    dateStyle: 'full',
                    timeStyle: 'short'
                  })}</p>
                  <p><strong>Type de lead :</strong> Demande de rappel express</p>
                </div>

                <div style="background: #fff; padding: 20px; border-radius: 8px; margin-top: 20px; border: 2px solid #00A3E0;">
                  <h3 style="color: #003D7A; margin-top: 0;">💡 Conseils pour l'appel</h3>
                  <ul style="color: #666; line-height: 2;">
                    <li>Rappeler <strong>dans les 24h</strong> pour maximiser la conversion</li>
                    <li>Le prospect est déjà intéressé par les aides énergétiques</li>
                    <li>Proposer un <strong>audit gratuit</strong></li>
                    <li>Mentionner les aides jusqu'à <strong>100%</strong></li>
                  </ul>
                </div>

                <div style="text-align: center; margin-top: 30px;">
                  <a href="tel:${phone}" class="action-btn">
                    📞 Appeler maintenant : ${phone}
                  </a>
                </div>

                <div class="footer">
                  <p>Email envoyé automatiquement depuis Aides-Energie.lu</p>
                  <p>🇱🇺 Luxembourg - ${new Date().getFullYear()}</p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error sending callback email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}

