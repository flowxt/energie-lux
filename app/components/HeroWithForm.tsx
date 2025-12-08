"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function HeroWithForm() {
  // Formulaire ULTRA-SIMPLIFIÉ - 1 seule ligne !
  const [interest, setInterest] = useState("panneaux");
  const [phone, setPhone] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          interest,
    firstName: "",
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
          
          {/* Colonne gauche : Texte + Preuves - SECOND sur mobile */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 order-2 lg:order-1"
          >
            {/* Titre CHOC avec montant */}
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              <span className="block text-yellow-300 text-6xl lg:text-7xl mb-3">Jusqu&apos;à 11 200€</span>
              <span className="text-white text-3xl lg:text-4xl">d&apos;aides pour votre </span>
              <span className="text-cyan-300 text-3xl lg:text-4xl">rénovation énergétique 🇱🇺</span>
            </h1>
            
            {/* Stat choc */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border-2 border-white/30">
              <p className="text-2xl font-bold text-yellow-300">
                ✅ 98% de nos clients obtiennent au moins 5 000€
              </p>
              <p className="text-lg mt-2">
                💰 Économisez jusqu&apos;à 800€/an sur vos factures
              </p>
            </div>

            {/* Témoignages */}
            <div className="space-y-3">
              <p className="text-xl font-bold mb-4">⭐ Ce que disent nos clients :</p>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-yellow-300">⭐⭐⭐⭐⭐</span>
                  <span className="font-bold">Marc L.</span>
                  <span className="text-sm opacity-75">Luxembourg-Ville</span>
                </div>
                <p className="text-sm">&quot;J&apos;ai obtenu 8 200€ d&apos;aides pour ma pompe à chaleur ! Service ultra professionnel.&quot;</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-yellow-300">⭐⭐⭐⭐⭐</span>
                  <span className="font-bold">Sophie D.</span>
                  <span className="text-sm opacity-75">Esch-sur-Alzette</span>
                </div>
                <p className="text-sm">&quot;Rapide, efficace, et gratuit ! Je recommande à 100%.&quot;</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-yellow-300">⭐⭐⭐⭐⭐</span>
                  <span className="font-bold">Thomas K.</span>
                  <span className="text-sm opacity-75">Differdange</span>
                </div>
                <p className="text-sm">&quot;5 600€ récupérés pour mes panneaux solaires. Merci !&quot;</p>
              </div>
            </div>

            {/* Stats de confiance */}
            <div className="flex flex-wrap gap-4 text-center">
              <div className="flex-1 bg-white/10 rounded-lg p-4">
                <div className="text-3xl font-bold text-yellow-300">200+</div>
                <div className="text-sm">Projets réalisés</div>
              </div>
              <div className="flex-1 bg-white/10 rounded-lg p-4">
                <div className="text-3xl font-bold text-yellow-300">24h</div>
                <div className="text-sm">Délai de rappel</div>
              </div>
            </div>
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
                  <div className="text-center mb-6">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-2" style={{ color: '#ED1C24' }}>
                      ⚡ RAPPEL GRATUIT
                    </h2>
                    <p className="text-xl font-bold" style={{ color: '#003D7A' }}>
                      sous 5 minutes !
                    </p>
                    <p className="text-gray-600 mt-2">
                      ✅ 100% Gratuit • ✅ Sans engagement • ✅ Conseils personnalisés
                    </p>
                  </div>

                  {/* FORMULAIRE 1 LIGNE */}
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Sélection projet */}
                      <div>
                      <label className="block text-sm font-bold mb-2" style={{ color: '#003D7A' }}>
                        Votre projet :
                        </label>
                      <select
                        value={interest}
                        onChange={(e) => setInterest(e.target.value)}
                        className="w-full rounded-xl border-2 px-5 py-4 text-lg font-semibold focus:outline-none focus:ring-4 focus:ring-blue-200 transition"
                        style={{ borderColor: '#00A3E0', color: '#003D7A' }}
                      >
                        <option value="panneaux">🌞 Panneaux solaires</option>
                        <option value="pompe">♨️ Pompe à chaleur</option>
                        <option value="isolation">🏠 Isolation</option>
                        <option value="borne">🚗 Borne de recharge</option>
                      </select>
                    </div>

                    {/* Téléphone */}
                        <div>
                      <label className="block text-sm font-bold mb-2" style={{ color: '#003D7A' }}>
                        Votre téléphone :
                        </label>
                        <input
                          type="tel"
                          required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+352 XX XX XX XX"
                        className="w-full rounded-xl border-2 px-5 py-4 text-lg font-semibold focus:outline-none focus:ring-4 focus:ring-blue-200 transition"
                        style={{ borderColor: '#00A3E0', color: '#003D7A' }}
                      />
                    </div>

                    {/* Bouton ÉNORME */}
                      <button
                      type="submit"
                      disabled={!phone || isSubmitting}
                      className="w-full rounded-xl px-8 py-5 text-2xl font-bold text-white shadow-2xl transition transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                        style={{ backgroundColor: '#ED1C24' }}
                      >
                      {isSubmitting ? "⏳ Envoi..." : "📞 JE VEUX MES AIDES !"}
                      </button>

                    {/* Réassurance sous le bouton */}
                    <div className="text-center space-y-2">
                      <p className="text-sm text-gray-600">
                        🔒 Vos données sont 100% sécurisées et confidentielles
                      </p>
                      <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
                        <span>✓ Aucun frais caché</span>
                        <span>✓ Sans engagement</span>
                        <span>✓ Réponse garantie</span>
                      </div>
                    </div>
                  </form>
                </>
              ) : (
                /* Page de confirmation */
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-24 h-24 mx-auto rounded-full flex items-center justify-center text-6xl mb-6" style={{ backgroundColor: '#E6F7FF' }}>
                    ✅
                  </div>
                  <h3 className="text-4xl font-bold mb-4" style={{ color: '#003D7A' }}>
                    Demande envoyée !
                  </h3>
                  <p className="text-xl text-gray-700 mb-6">
                    Un expert vous rappelle au <strong className="text-red-600">{phone}</strong> sous 5 minutes ! ⚡
                  </p>
                  <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
                    <p className="text-green-800 font-semibold">
                      🎉 Vous pourriez économiser jusqu&apos;à <span className="text-2xl font-bold">11 200€</span> !
                      </p>
                    </div>
                  </motion.div>
                )}
            </div>

            {/* Badges de confiance sous le formulaire */}
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <span>🇱🇺</span>
                <span className="text-sm font-semibold">Certifié État Luxembourg</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <span>⚡</span>
                <span className="text-sm font-semibold">Réponse sous 5 min</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <span>🔒</span>
                <span className="text-sm font-semibold">100% Sécurisé</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bouton WhatsApp flottant */}
      <a
        href="https://wa.me/352691373316"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-green-500 text-white px-6 py-4 rounded-full shadow-2xl hover:bg-green-600 transition transform hover:scale-110 animate-bounce"
        style={{ animationDuration: '2s' }}
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        <span className="font-bold text-lg hidden sm:block">WhatsApp</span>
      </a>
    </section>
  );
}
