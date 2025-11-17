import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { interest, propertyType, ownershipStatus, address, firstName, lastName, phone, email } = body;

    // Mapping des valeurs du formulaire
    const interestLabels: { [key: string]: string } = {
      'panneaux': 'Panneau solaire',
      'pompe': 'Pompe à chaleur',
      'isolation': 'Isolation',
      'borne': 'Borne de recharge automobile'
    };

    const propertyLabels: { [key: string]: string } = {
      'maison': 'Maison individuelle',
      'appartement': 'Appartement'
    };

    const ownershipLabels: { [key: string]: string } = {
      'proprietaire': 'Propriétaire',
      'locataire': 'Locataire'
    };

    const data = await resend.emails.send({
      from: 'Aides-Energie.lu <onboarding@resend.dev>', // Email de test Resend
      to: ['enrluxn@gmail.com'],
      subject: `🇱🇺 Nouvelle demande de simulation - ${firstName} ${lastName}`,
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
                <h1 style="margin: 0;">🇱🇺 Nouvelle Demande Aides-Energie.lu</h1>
                <p style="margin: 10px 0 0 0;">Simulateur d'aides 2025</p>
              </div>
              
              <div class="content">
                <div class="highlight">
                  <strong>Projet : ${interestLabels[interest] || interest}</strong>
                </div>

                <div class="info-block">
                  <h3 style="color: #003D7A; margin-top: 0;">👤 Informations du contact</h3>
                  <div class="label">Nom complet</div>
                  <div class="value">${firstName} ${lastName}</div>
                  
                  <div class="label">📧 Email</div>
                  <div class="value"><a href="mailto:${email}">${email}</a></div>
                  
                  <div class="label">📱 Téléphone</div>
                  <div class="value"><a href="tel:${phone}">${phone}</a></div>
                </div>

                <div class="info-block">
                  <h3 style="color: #003D7A; margin-top: 0;">🏠 Informations du bien</h3>
                  <div class="label">Type de logement</div>
                  <div class="value">${propertyLabels[propertyType] || propertyType}</div>
                  
                  <div class="label">Statut</div>
                  <div class="value">${ownershipLabels[ownershipStatus] || ownershipStatus}</div>
                  
                  <div class="label">📍 Commune</div>
                  <div class="value">${address}</div>
                </div>

                <div style="background: #E6F7FF; padding: 20px; border-radius: 8px; margin-top: 20px;">
                  <p style="margin: 0; text-align: center; color: #003D7A;">
                    ⚡ <strong>Action recommandée :</strong> Contacter le prospect sous 24h pour maximiser la conversion
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

