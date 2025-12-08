"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function HeroWithForm() {
  // Formulaire ULTRA-SIMPLIFIÉ avec prénom
  const [interest, setInterest] = useState("panneaux");
  const [firstName, setFirstName] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName || !phone) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          interest,
          firstName,
          phone 
        }),
      });

      if (response.ok) {
        // Tracking Google Ads Conversion
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'conversion', {
            'send_to': process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID,
            'value': 1.0,
            'currency': 'EUR',
            'transaction_id': Date.now().toString()
          });
        }
        setIsSubmitted(true);
      } else {
        alert("Une erreur s'est produite. Veuillez réessayer.");
      }
    } catch (error) {
      console.error("Erreur:", error);
      alert("Une erreur s'est produite. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative py-16 text-white" style={{ background: 'linear-gradient(135deg, #003D7A 0%, #00A3E0 100%)' }}>
      <div className="container mx-auto px-6 lg:px-8">
        
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          
          {/* Colonne gauche : Texte - SECOND sur mobile */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 order-2 lg:order-1"
          >
            {/* Titre principal avec couleurs Luxembourg */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="block mb-2" style={{ color: '#ED1C24' }}>Calculez vos droits</span>
              <span className="block mb-2" style={{ color: '#00A3E0' }}>aux aides financières</span>
              <span className="block text-white">pour votre rénovation énergétique</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/90">
              Nous identifions pour vous toutes les aides disponibles :
            </p>

            <ul className="space-y-4 text-lg">
              <li className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <span>Aides de l&apos;État (klima bonus)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <span>Aides du ministère du logement (topup social)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <span>Aides de votre commune (Eco prêt)</span>
              </li>
            </ul>
          </motion.div>

          {/* Colonne droite : FORMULAIRE ULTRA-SIMPLIFIÉ - PREMIER sur mobile */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10">
              
              {!isSubmitted ? (
                <>
                  {/* Titre du formulaire */}
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-3" style={{ color: '#003D7A' }}>
                      Testez votre éligibilité
                    </h2>
                    <p className="text-gray-600">
                      Gratuit • Sans engagement • Réponse rapide
                    </p>
                  </div>

                  {/* FORMULAIRE */}
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Sélection projet */}
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">
                        Votre projet
                      </label>
                      <select
                        value={interest}
                        onChange={(e) => setInterest(e.target.value)}
                        className="w-full rounded-lg border-2 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        style={{ borderColor: '#e5e7eb', color: '#1f2937' }}
                      >
                        <option value="panneaux">☀️ Panneau solaire</option>
                        <option value="pompe">♨️ Pompe à chaleur</option>
                        <option value="isolation">🏠 Isolation</option>
                        <option value="borne">🔌 Borne de recharge automobile</option>
                      </select>
                    </div>

                    {/* Nom et Prénom */}
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">
                        Nom et Prénom
                      </label>
                      <input
                        type="text"
                        required
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="Jean Dupont"
                        className="w-full rounded-lg border-2 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        style={{ borderColor: '#e5e7eb', color: '#1f2937' }}
                      />
                    </div>

                    {/* Téléphone */}
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+352 ..."
                        className="w-full rounded-lg border-2 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        style={{ borderColor: '#e5e7eb', color: '#1f2937' }}
                      />
                    </div>

                    {/* Bouton */}
                    <button
                      type="submit"
                      disabled={!firstName || !phone || isSubmitting}
                      className="w-full rounded-lg px-6 py-4 text-lg font-bold text-white shadow-lg transition hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                      style={{ backgroundColor: '#ED1C24' }}
                    >
                      {isSubmitting ? "Envoi en cours..." : "Tester mon éligibilité"}
                    </button>

                    {/* Réassurance */}
                    <p className="text-center text-xs text-gray-500">
                      🔒 Vos données sont sécurisées et confidentielles
                    </p>
                  </form>
                </>
              ) : (
                /* Page de confirmation */
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center text-5xl mb-6" style={{ backgroundColor: '#E6F7FF' }}>
                    ✅
                  </div>
                  <h3 className="text-3xl font-bold mb-4" style={{ color: '#003D7A' }}>
                    Merci {firstName} !
                  </h3>
                  <p className="text-lg text-gray-700">
                    Un expert vous rappelle au <strong style={{ color: '#ED1C24' }}>{phone}</strong> très rapidement
                  </p>
                </motion.div>
                )}
            </div>

            {/* Badge certification */}
            <div className="mt-6 text-center">
              <p className="text-sm text-white/90">
                🇱🇺 Programme certifié par l&apos;État du Luxembourg
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bouton WhatsApp */}
      <a
        href="https://wa.me/352691373316"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </section>
  );
}
