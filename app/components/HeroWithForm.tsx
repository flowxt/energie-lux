"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type FormData = {
  interest: string;
  propertyType: string;
  ownershipStatus: string;
  address: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
};

type CallbackData = {
  phone: string;
  firstName?: string;
};

export default function HeroWithForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    interest: "",
    propertyType: "",
    ownershipStatus: "",
    address: "",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });
  
  // État pour le modal de rappel
  const [showCallbackModal, setShowCallbackModal] = useState(false);
  const [callbackData, setCallbackData] = useState<CallbackData>({
    phone: "",
    firstName: "",
  });
  const [isSubmittingCallback, setIsSubmittingCallback] = useState(false);
  const [callbackSuccess, setCallbackSuccess] = useState(false);

  const totalSteps = 2; // Formulaire ultra-simplifié pour conversion max

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = async () => {
    try {
      // Envoi des données via l'API Resend
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Email envoyé avec succès !");
        
        // Tracking Google Ads Conversion
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'conversion', {
            'send_to': process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID,
            'value': 1.0,
            'currency': 'EUR',
            'transaction_id': Date.now().toString()
          });
        }
        
        setStep(3); // Page de félicitations (étape 3 pour formulaire simplifié)
      } else {
        console.error("Erreur lors de l'envoi de l'email");
        alert("Une erreur s'est produite. Veuillez réessayer.");
      }
    } catch (error) {
      console.error("Erreur:", error);
      alert("Une erreur s'est produite. Veuillez réessayer.");
    }
  };

  const handleCallbackSubmit = async () => {
    if (!callbackData.phone) {
      alert("Veuillez entrer votre numéro de téléphone");
      return;
    }

    setIsSubmittingCallback(true);

    try {
      const response = await fetch('/api/send-callback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phone: callbackData.phone,
          firstName: callbackData.firstName,
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setCallbackSuccess(true);
        setTimeout(() => {
          setShowCallbackModal(false);
          setCallbackSuccess(false);
          setCallbackData({ phone: "", firstName: "" });
        }, 3000);
      } else {
        alert("Une erreur s'est produite. Veuillez réessayer.");
      }
    } catch (error) {
      console.error("Erreur:", error);
      alert("Une erreur s'est produite. Veuillez réessayer.");
    } finally {
      setIsSubmittingCallback(false);
    }
  };

  return (
    <section className="relative py-20 text-white" style={{ background: 'linear-gradient(135deg, #003D7A 0%, #00A3E0 100%)' }}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Texte explicatif + CTA Rappel - PREMIER sur desktop, SECOND sur mobile */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 order-2 lg:order-1"
          >
            <h1 className="text-4xl font-bold leading-tight lg:text-5xl">
              <span className="text-white">Calculez vos droits aux </span>
              <span style={{ color: '#ED1C24' }} className="block lg:inline">aides financières</span>
              <span className="text-white"> pour votre </span>
              <span className="text-cyan-300 block lg:inline">rénovation énergétique</span>
              <span className="text-white">.</span>
            </h1>
            
            <div className="space-y-4 text-lg">
              <p className="font-semibold text-blue-100">
                Nous identifions pour vous toutes les aides disponibles :
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 mt-1 shrink-0" style={{ color: '#ffffff' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Aides de l&apos;État (klima bonus)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 mt-1 shrink-0" style={{ color: '#ffffff' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Aides du ministère du logement (topup social)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 mt-1 shrink-0" style={{ color: '#ffffff' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Aides de votre commune (Eco prêt)</span>
                </li>
              </ul>
            </div>

            {/* Bouton "On vous rappelle" avec effet de vague */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <button
                onClick={() => setShowCallbackModal(true)}
                className="relative w-full py-5 px-8 text-xl font-bold text-white rounded-2xl overflow-hidden shadow-2xl transform transition-all hover:scale-105 hover:shadow-3xl group"
                style={{ backgroundColor: '#ED1C24' }}
              >
                {/* Effet de vague animé */}
                <span className="absolute inset-0 w-full h-full">
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 animate-shimmer"></span>
                </span>
                
                {/* Effet de pulse */}
                <span className="absolute inset-0 rounded-2xl animate-ping opacity-20" style={{ backgroundColor: '#ED1C24' }}></span>
                
                {/* Texte du bouton */}
                <span className="relative flex items-center justify-center">
                  <span className="text-2xl animate-bounce">📞 On vous rappelle !</span>
                </span>
                
                {/* Effet de brillance au survol */}
                <span className="absolute bottom-0 left-0 w-full h-1 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
              </button>
              
              <p className="text-center mt-3 text-sm text-blue-100">
                ⚡ Réponse sous 24h • Gratuit et sans engagement
              </p>
            </motion.div>
          </motion.div>

          {/* Formulaire - PREMIER sur mobile pour conversion MAX ! */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-1 lg:order-2"
          >
            <div className="rounded-2xl bg-white p-8 shadow-2xl">
              {/* Titre du formulaire */}
              <div className="text-center mb-6 py-4 rounded-lg" style={{ backgroundColor: '#ED1C24' }}>
                <h2 className="text-2xl font-bold text-white">⚡ ESTIMATION GRATUITE</h2>
                <p className="text-white/90 text-sm mt-1">En 2 minutes chrono ⏱️</p>
              </div>
              
              {step < 3 && (
                <div className="mb-6">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <div className={`w-3 h-3 rounded-full transition-all ${step === 1 ? 'w-8 bg-red-500' : 'bg-gray-300'}`}></div>
                    <div className={`w-3 h-3 rounded-full transition-all ${step === 2 ? 'w-8 bg-red-500' : 'bg-gray-300'}`}></div>
                  </div>
                </div>
              )}

              <AnimatePresence mode="wait">
                {/* Étape 1: Type d'intérêt */}
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-2xl font-bold mb-6" style={{ color: '#003D7A' }}>
                      Quel est votre projet ?
                    </h3>
                    <div className="space-y-4">
                      {[
                        { value: "panneaux", label: "Panneau solaire", icon: "☀️" },
                        { value: "pompe", label: "Pompe à chaleur", icon: "♨️" },
                        { value: "isolation", label: "Isolation", icon: "🏠" },
                        { value: "borne", label: "Borne de recharge automobile", icon: "🔌" },
                      ].map((option) => (
                        <button
                          key={option.value}
                          onClick={() => {
                            setFormData({ ...formData, interest: option.value });
                            handleNext();
                          }}
                          className="w-full flex items-center gap-4 p-4 rounded-lg border-2 transition-all text-left"
                          style={{
                            borderColor: formData.interest === option.value ? '#00A3E0' : '#e5e7eb',
                            backgroundColor: formData.interest === option.value ? '#E6F7FF' : 'white'
                          }}
                        >
                          <span className="text-4xl">{option.icon}</span>
                          <span className="font-semibold text-gray-900">{option.label}</span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Étape 2: Coordonnées ULTRA-SIMPLIFIÉES */}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-2xl font-bold mb-4 text-center" style={{ color: '#003D7A' }}>
                      🎯 On vous rappelle gratuitement
                    </h3>
                    <p className="text-center text-gray-600 mb-6">
                      Remplissez juste ces 2 champs 👇
                    </p>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Prénom *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          placeholder="Jean"
                          className="w-full rounded-xl border-2 border-gray-300 px-5 py-4 focus:border-blue-500 focus:outline-none text-gray-900 text-lg"
                          autoFocus
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Téléphone * 📱
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+352 XX XX XX XX"
                          className="w-full rounded-xl border-2 border-gray-300 px-5 py-4 focus:border-blue-500 focus:outline-none text-gray-900 text-lg font-semibold"
                        />
                      </div>
                    </div>
                    
                    {/* Garanties */}
                    <div className="mt-6 p-4 bg-green-50 rounded-lg border-2 border-green-200">
                      <div className="flex items-center gap-2 text-green-800 text-sm font-semibold">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        ✅ Rappel sous 24h • Gratuit • Sans engagement
                      </div>
                    </div>

                    <div className="flex gap-4 mt-6">
                      <button
                        onClick={handleBack}
                        className="flex-1 rounded-xl border-2 px-6 py-3 font-semibold transition"
                        style={{ borderColor: '#003D7A', color: '#003D7A' }}
                      >
                        ← Retour
                      </button>
                      <button
                        onClick={handleSubmit}
                        disabled={!formData.firstName || !formData.phone}
                        className="flex-1 rounded-xl px-6 py-4 font-bold text-white transition disabled:opacity-50 text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
                        style={{ backgroundColor: '#ED1C24' }}
                      >
                        Être rappelé(e) 📞
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Page de félicitations */}
                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-center py-8"
                  >
                    <div className="mb-6">
                      <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center text-4xl mb-4" style={{ backgroundColor: '#E6F7FF' }}>
                        🎉
                      </div>
                      <h3 className="text-3xl font-bold mb-4" style={{ color: '#003D7A' }}>
                        Félicitations !
                      </h3>
                    </div>
                    
                    <div className="space-y-4 text-left bg-gray-50 p-6 rounded-lg">
                      <p className="text-lg font-semibold" style={{ color: '#003D7A' }}>
                        Le montant des aides d&apos;État dont vous pouvez bénéficier est lié à votre situation.
                      </p>
                      
                      <div className="flex items-start gap-3">
                        <svg className="w-6 h-6 mt-1 shrink-0" style={{ color: '#00A3E0' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <p className="text-gray-700">
                          Vous serez recontacté par téléphone par un expert <strong>sous 24h</strong>.
                        </p>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <svg className="w-6 h-6 mt-1 shrink-0" style={{ color: '#00A3E0' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <p className="text-gray-700">
                          Notre équipe vous permettra d&apos;obtenir le <strong>maximum d&apos;aides de l&apos;État possible</strong>.
                        </p>
                      </div>
                    </div>

                    <div className="mt-8 p-4 rounded-lg" style={{ backgroundColor: '#E6F7FF' }}>
                      <p className="text-sm text-gray-600">
                        Un email de confirmation vous a été envoyé à <strong>{formData.email}</strong>
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Badge de confiance */}
            {step < 3 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-4 flex items-center justify-center gap-2 text-white text-sm"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Vos données sont sécurisées et confidentielles</span>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Modal de rappel */}
      <AnimatePresence>
        {showCallbackModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowCallbackModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {!callbackSuccess ? (
                <>
                  {/* En-tête */}
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#E6F7FF' }}>
                      <span className="text-5xl">📞</span>
                    </div>
                    <h3 className="text-3xl font-bold mb-2" style={{ color: '#003D7A' }}>
                      On vous rappelle !
                    </h3>
                    <p className="text-gray-600">
                      Laissez-nous votre numéro et nous vous contactons sous 24h
                    </p>
                  </div>

                  {/* Formulaire */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Prénom (optionnel)
                      </label>
                      <input
                        type="text"
                        value={callbackData.firstName}
                        onChange={(e) => setCallbackData({ ...callbackData, firstName: e.target.value })}
                        placeholder="Jean"
                        className="w-full rounded-xl border-2 border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none text-gray-900"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Téléphone *
                      </label>
                      <input
                        type="tel"
                        value={callbackData.phone}
                        onChange={(e) => setCallbackData({ ...callbackData, phone: e.target.value })}
                        placeholder="+352 XX XX XX XX"
                        className="w-full rounded-xl border-2 border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none text-gray-900 text-lg font-semibold"
                      />
                    </div>

                    {/* Boutons */}
                    <div className="flex gap-3 mt-6">
                      <button
                        onClick={() => setShowCallbackModal(false)}
                        className="flex-1 rounded-xl border-2 px-6 py-3 font-semibold transition"
                        style={{ borderColor: '#003D7A', color: '#003D7A' }}
                      >
                        Annuler
                      </button>
                      <button
                        onClick={handleCallbackSubmit}
                        disabled={isSubmittingCallback || !callbackData.phone}
                        className="flex-1 rounded-xl px-6 py-3 font-semibold text-white transition disabled:opacity-50"
                        style={{ backgroundColor: '#ED1C24' }}
                      >
                        {isSubmittingCallback ? 'Envoi...' : 'Valider ✓'}
                      </button>
                    </div>
                  </div>

                  {/* Badge de confiance */}
                  <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-600">
                    <svg className="w-5 h-5" style={{ color: '#00A3E0' }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Gratuit et sans engagement</span>
                  </div>
                </>
              ) : (
                /* Message de succès */
                <div className="text-center py-8">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#E6F7FF' }}>
                    <span className="text-6xl">🎉</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-4" style={{ color: '#003D7A' }}>
                    Parfait !
                  </h3>
                  <p className="text-lg text-gray-700 mb-2">
                    Nous vous rappelons <strong>sous 24h</strong>
                  </p>
                  <p className="text-sm text-gray-600">
                    Merci pour votre confiance 🇱🇺
                  </p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

