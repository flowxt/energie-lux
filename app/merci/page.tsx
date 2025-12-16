"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function MerciPage() {
  useEffect(() => {
    // Tracking de conversion pour Google Ads
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-16967255678/YOUR_CONVERSION_LABEL', // À configurer
        'value': 1.0,
        'currency': 'EUR'
      });
    }

    // Event Google Tag Manager
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        'event': 'form_submission',
        'form_name': 'aide_energie_form'
      });
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #003D7A 0%, #00A3E0 100%)' }}>
      <div className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl p-8 lg:p-12 text-center"
        >
          {/* Icône de succès */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mx-auto w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6"
          >
            <span className="text-6xl">✓</span>
          </motion.div>

          {/* Titre */}
          <h1 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#003D7A' }}>
            Merci pour votre demande !
          </h1>

          {/* Message */}
          <p className="text-lg text-gray-700 mb-6">
            Votre demande a bien été envoyée. Notre équipe va analyser votre dossier et vous recontacter très rapidement.
          </p>

          {/* Drapeau Luxembourg */}
          <div className="flex items-center justify-center gap-3 mb-8 py-4 px-6 bg-blue-50 rounded-xl">
            <Image src="/lux.png" alt="Luxembourg" width={40} height={27} />
            <span className="text-sm font-semibold text-gray-700">
              Programme subventionné par l&apos;État du Luxembourg
            </span>
          </div>

          {/* Informations supplémentaires */}
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 mb-8">
            <h2 className="text-xl font-bold mb-4" style={{ color: '#003D7A' }}>
              Prochaines étapes
            </h2>
            <div className="space-y-3 text-left">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📞</span>
                <div>
                  <p className="font-semibold text-gray-800">Appel sous 24h</p>
                  <p className="text-sm text-gray-600">Un conseiller vous contactera pour discuter de votre projet</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">📋</span>
                <div>
                  <p className="font-semibold text-gray-800">Analyse personnalisée</p>
                  <p className="text-sm text-gray-600">Calcul précis de toutes les aides disponibles pour votre situation</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">💰</span>
                <div>
                  <p className="font-semibold text-gray-800">Dossier de financement</p>
                  <p className="text-sm text-gray-600">Accompagnement complet pour obtenir vos aides</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bouton retour */}
          <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 rounded-lg text-white font-semibold text-lg shadow-lg transition-all hover:shadow-xl"
            style={{ backgroundColor: '#ED1C24' }}
          >
            Retour à l&apos;accueil
          </motion.a>

          {/* Contact d'urgence */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-600 mb-3">
              Besoin d&apos;une réponse immédiate ?
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <a 
                href="tel:+352691373316" 
                className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold"
              >
                <span>📞</span>
                +352 691 373 316
              </a>
              <span className="hidden sm:inline text-gray-300">|</span>
              <a 
                href="tel:+352691382602" 
                className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold"
              >
                <span>📞</span>
                +352 691 382 602
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

