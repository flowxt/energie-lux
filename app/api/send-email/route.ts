import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { propertyType, ownership, installations, postalCode, firstName, lastName, phone, email } = body;

    // Mapping des valeurs du formulaire
    const propertyTypeLabels: { [key: string]: string } = {
      'maison': 'Maison',
      'appartement': 'Appartement'
    };

    const ownershipLabels: { [key: string]: string } = {
      'proprietaire': 'Propriétaire',
      'locataire': 'Locataire'
    };

    const installationLabels: { [key: string]: string } = {
      'panneaux': 'Panneaux photovoltaïques',
      'pompe': 'Pompe à chaleur',
      'isolation-ext': 'Isolation thermique extérieur',
      'isolation-int': 'Isolation interne',
      'isolation-toit': 'Isolation de toiture'
    };

    const installationsText = Array.isArray(installations) 
      ? installations.map((inst: string) => installationLabels[inst] || inst).join(', ')
      : 'Non renseigné';

    // 📧 ÉTAPE 1 : Envoi de l'email
    const data = await resend.emails.send({
      from: 'Aides-Energie.lu <onboarding@resend.dev>',
      to: ['enrluxn@gmail.com'],
      subject: `🇱🇺 LEAD URGENT - ${firstName} ${lastName} - ${propertyTypeLabels[propertyType] || propertyType}`,
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
                  <strong style="font-size: 20px;">🎯 ${installationsText}</strong>
                </div>

                <div class="info-block" style="border-left: 4px solid #ED1C24; background: #FFF5F5;">
                  <h3 style="color: #ED1C24; margin-top: 0; font-size: 22px;">📞 APPELER CE NUMÉRO :</h3>
                  <div class="value" style="font-size: 28px; font-weight: bold; color: #ED1C24; text-align: center; margin: 20px 0;">
                    <a href="tel:${phone}" style="color: #ED1C24; text-decoration: none;">${phone}</a>
                  </div>
                  
                  <div class="label">👤 Nom complet</div>
                  <div class="value" style="font-size: 18px;"><strong>${firstName} ${lastName}</strong></div>

                  ${email ? `
                    <div class="label">📧 Email</div>
                    <div class="value"><a href="mailto:${email}" style="color: #00A3E0;">${email}</a></div>
                  ` : ''}

                  ${postalCode ? `
                    <div class="label">📍 Code postal</div>
                    <div class="value">${postalCode}</div>
                  ` : ''}

                  ${propertyType ? `
                    <div class="label">🏠 Type de logement</div>
                    <div class="value">${propertyTypeLabels[propertyType] || propertyType}</div>
                  ` : ''}

                  ${ownership ? `
                    <div class="label">👥 Statut</div>
                    <div class="value">${ownershipLabels[ownership] || ownership}</div>
                  ` : ''}

                  ${installations && Array.isArray(installations) && installations.length > 0 ? `
                    <div class="label">🔧 Installations souhaitées</div>
                    <div class="value">
                      <ul style="margin: 5px 0; padding-left: 20px;">
                        ${installations.map((inst: string) => `<li>${installationLabels[inst] || inst}</li>`).join('')}
                      </ul>
                    </div>
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

    // 🔄 ÉTAPE 2 : Envoi vers Make.com → Pipedrive
    try {
      const webhookUrl = process.env.MAKE_WEBHOOK_URL;
      
      if (!webhookUrl) {
        console.warn('⚠️ MAKE_WEBHOOK_URL non configuré dans .env.local');
        return NextResponse.json({ success: true, data, webhook: 'skipped' });
      }
      
      const webhookData = {
        // Informations personnelles
        firstName,
        lastName,
        phone,
        email,
        
        // Informations du bien
        propertyType,
        propertyTypeLabel: propertyTypeLabels[propertyType] || propertyType,
        ownership,
        ownershipLabel: ownershipLabels[ownership] || ownership,
        postalCode,
        
        // Installations demandées
        installations,
        installationsLabels: Array.isArray(installations) 
          ? installations.map((inst: string) => installationLabels[inst] || inst)
          : [],
        installationsText,
        
        // Métadonnées
        source: 'aides-energie.lu',
        timestamp: new Date().toISOString(),
        locale: 'fr-LU'
      };

      await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookData),
      });

      console.log('✅ Données envoyées vers Make.com → Pipedrive');
    } catch (webhookError) {
      // Si le webhook échoue, on log l'erreur mais on ne bloque pas l'email
      console.error('⚠️ Erreur webhook Make.com (email envoyé quand même):', webhookError);
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}

