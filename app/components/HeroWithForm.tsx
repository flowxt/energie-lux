"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HeroWithForm() {
  // Formulaire par étapes
  const [step, setStep] = useState(1);
  const [propertyType, setPropertyType] = useState("");
  const [ownership, setOwnership] = useState("");
  const [installations, setInstallations] = useState<string[]>([]);
  const [postalCode, setPostalCode] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const totalSteps = 6;

  const toggleInstallation = (value: string) => {
    if (installations.includes(value)) {
      setInstallations(installations.filter(item => item !== value));
    } else {
      setInstallations([...installations, value]);
    }
  };

  const nextStep = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          propertyType,
          ownership,
          installations,
          postalCode,
          firstName,
          lastName,
          phone,
          email
        }),
      });

      if (response.ok) {
        // Redirection vers la page de remerciement
        window.location.href = '/merci';
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
            className="space-y-10 order-2 lg:order-1"
          >
            {/* Titre principal stylé */}
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                <span className="block bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent drop-shadow-lg">
                  Calcul des aides disponibles
                </span>
                <span className="block bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent drop-shadow-lg">
                  au Luxembourg
                </span>
            </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-red-500 to-blue-500 rounded-full"></div>
            </div>

            {/* Liste des aides stylée avec cartes */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border-l-4 border-red-500 hover:bg-white/15 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-red-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    ✓
                  </div>
                  <span className="text-2xl lg:text-3xl font-bold">Aides État</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border-l-4 border-blue-500 hover:bg-white/15 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    ✓
                  </div>
                  <span className="text-2xl lg:text-3xl font-bold">Aides Commune</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border-l-4 border-cyan-400 hover:bg-white/15 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-400 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    ✓
                  </div>
                  <span className="text-2xl lg:text-3xl font-bold">Aides sociales</span>
                </div>
              </motion.div>
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
              {/* Titre du formulaire */}
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold mb-3" style={{ color: '#003D7A' }}>
                  Testez votre éligibilité
                </h2>
                <p className="text-gray-600 text-sm">
                  Réponse rapide
                </p>
              </div>

                  {/* Barre de progression */}
                  <div className="mb-8">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-600">Étape {step} sur {totalSteps}</span>
                      <span className="text-sm font-medium text-gray-600">{Math.round((step / totalSteps) * 100)}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ backgroundColor: '#00A3E0' }}
                      initial={{ width: 0 }}
                      animate={{ width: `${(step / totalSteps) * 100}%` }}
                        transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>

                  {/* FORMULAIRE PAR ÉTAPES */}
                  <form onSubmit={handleSubmit}>
              <AnimatePresence mode="wait">
                      {/* Étape 1 : Type de logement */}
                {step === 1 && (
                  <motion.div
                    key="step1"
                          initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                  >
                          <label className="block text-lg font-bold mb-4 text-center" style={{ color: '#003D7A' }}>
                            Quel type de logement ?
                          </label>
                          <div className="grid grid-cols-1 gap-3">
                      {[
                              { value: 'maison', label: 'Maison', icon: '🏡' },
                              { value: 'appartement', label: 'Appartement', icon: '🏢' }
                      ].map((option) => (
                        <button
                          key={option.value}
                                type="button"
                          onClick={() => {
                                  setPropertyType(option.value);
                                  nextStep();
                          }}
                                className="flex items-center gap-3 p-4 rounded-xl border-2 transition-all hover:border-blue-500 hover:bg-blue-50 hover:shadow-md"
                          style={{
                                  borderColor: propertyType === option.value ? '#00A3E0' : '#d1d5db',
                                  backgroundColor: propertyType === option.value ? '#E6F7FF' : 'white',
                                  boxShadow: propertyType === option.value ? '0 4px 12px rgba(0,163,224,0.15)' : 'none'
                          }}
                        >
                                <span className="text-3xl">{option.icon}</span>
                                <span className="text-lg font-semibold" style={{ color: '#1f2937' }}>{option.label}</span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                      {/* Étape 2 : Statut */}
                {step === 2 && (
                  <motion.div
                    key="step2"
                          initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                  >
                          <label className="block text-lg font-bold mb-4 text-center" style={{ color: '#003D7A' }}>
                            Vous êtes :
                          </label>
                          <div className="grid grid-cols-1 gap-3">
                      {[
                              { value: 'proprietaire', label: 'Propriétaire', icon: '👤' },
                              { value: 'locataire', label: 'Locataire', icon: '🔑' }
                      ].map((option) => (
                        <button
                          key={option.value}
                                type="button"
                          onClick={() => {
                                  setOwnership(option.value);
                                  nextStep();
                          }}
                                className="flex items-center gap-3 p-4 rounded-xl border-2 transition-all hover:border-blue-500 hover:bg-blue-50 hover:shadow-md"
                          style={{
                                  borderColor: ownership === option.value ? '#00A3E0' : '#d1d5db',
                                  backgroundColor: ownership === option.value ? '#E6F7FF' : 'white',
                                  boxShadow: ownership === option.value ? '0 4px 12px rgba(0,163,224,0.15)' : 'none'
                          }}
                        >
                                <span className="text-3xl">{option.icon}</span>
                                <span className="text-lg font-semibold" style={{ color: '#1f2937' }}>{option.label}</span>
                        </button>
                      ))}
                    </div>
                      <button
                            type="button"
                            onClick={prevStep}
                            className="mt-4 w-full py-2 text-sm text-gray-600 hover:text-gray-900"
                          >
                            ← Retour
                      </button>
                  </motion.div>
                )}

                      {/* Étape 3 : Installations (choix multiples) */}
                {step === 3 && (
                  <motion.div
                    key="step3"
                          initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                  >
                          <label className="block text-lg font-bold mb-2 text-center" style={{ color: '#003D7A' }}>
                            Quelle installation pour le confort de votre maison ?
                          </label>
                          <p className="text-sm text-gray-600 text-center mb-4">
                            Sélectionnez une ou plusieurs installations<br/>
                            <span className="text-xs">Choisissez-en autant que vous voulez</span>
                          </p>
                          <div className="grid grid-cols-1 gap-3">
                      {[
                              { value: 'panneaux', label: 'Panneaux photovoltaïques', icon: '☀️', letter: 'A' },
                              { value: 'pompe', label: 'Pompe à chaleur', icon: '♨️', letter: 'B' },
                              { value: 'isolation-ext', label: 'Isolation thermique extérieur', icon: '🏠', letter: 'C' },
                              { value: 'isolation-int', label: 'Isolation interne', icon: '🔨', letter: 'D' },
                              { value: 'isolation-toit', label: 'Isolation de toiture', icon: '🏘️', letter: 'E' }
                      ].map((option) => (
                        <button
                          key={option.value}
                                type="button"
                                onClick={() => toggleInstallation(option.value)}
                                className="flex items-center gap-3 p-4 rounded-xl border-2 transition-all hover:border-blue-500 hover:bg-blue-50 hover:shadow-md"
                          style={{
                                  borderColor: installations.includes(option.value) ? '#00A3E0' : '#d1d5db',
                                  backgroundColor: installations.includes(option.value) ? '#E6F7FF' : 'white',
                                  boxShadow: installations.includes(option.value) ? '0 4px 12px rgba(0,163,224,0.15)' : 'none'
                          }}
                        >
                                <div className="flex items-center justify-center w-10 h-10 rounded-lg font-bold text-white" style={{ backgroundColor: '#003D7A' }}>
                                  {option.letter}
                                </div>
                                <span className="text-3xl">{option.icon}</span>
                                <span className="text-base font-semibold flex-1 text-left" style={{ color: '#1f2937' }}>{option.label}</span>
                                {installations.includes(option.value) && (
                                  <span className="text-2xl">✓</span>
                                )}
                        </button>
                      ))}
                    </div>
                          <div className="flex gap-3 mt-6">
                      <button
                              type="button"
                              onClick={prevStep}
                              className="flex-1 py-3 text-sm font-semibold text-gray-600 border-2 border-gray-300 rounded-lg hover:bg-gray-50"
                      >
                              ← Retour
                      </button>
                      <button
                              type="button"
                              onClick={nextStep}
                              disabled={installations.length === 0}
                              className="flex-1 py-3 text-sm font-bold text-white rounded-lg transition disabled:opacity-50"
                        style={{ backgroundColor: '#00A3E0' }}
                      >
                              Suivant →
                      </button>
                    </div>
                  </motion.div>
                )}

                      {/* Étape 4 : Code postal */}
                {step === 4 && (
                  <motion.div
                    key="step4"
                          initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                  >
                          <label className="block text-lg font-bold mb-4 text-center" style={{ color: '#003D7A' }}>
                            Votre code postal
                          </label>
                      <div>
                            <label className="flex items-center gap-2 text-sm font-medium mb-2 text-gray-700">
                              <span className="text-2xl">📍</span>
                              Code postal
                        </label>
                        <input
                          type="text"
                              value={postalCode}
                              onChange={(e) => setPostalCode(e.target.value)}
                              placeholder="Ex: 1234"
                              className="w-full rounded-lg border-2 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition text-lg"
                              style={{ borderColor: '#e5e7eb', color: '#1f2937' }}
                              autoFocus
                        />
                      </div>
                          <div className="flex gap-3 mt-6">
                      <button
                              type="button"
                              onClick={prevStep}
                              className="flex-1 py-3 text-sm font-semibold text-gray-600 border-2 border-gray-300 rounded-lg hover:bg-gray-50"
                      >
                              ← Retour
                      </button>
                      <button
                              type="button"
                              onClick={nextStep}
                              disabled={!postalCode}
                              className="flex-1 py-3 text-sm font-bold text-white rounded-lg transition disabled:opacity-50"
                        style={{ backgroundColor: '#00A3E0' }}
                      >
                              Suivant →
                      </button>
                    </div>
                  </motion.div>
                )}

                      {/* Étape 5 : Vos informations */}
                {step === 5 && (
                  <motion.div
                    key="step5"
                          initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                  >
                          <label className="block text-lg font-bold mb-4 text-center" style={{ color: '#003D7A' }}>
                            Vos informations
                          </label>
                    <div className="space-y-4">
                        <div>
                              <label className="block text-sm font-medium mb-2 text-gray-700">
                                Prénom
                          </label>
                          <input
                            type="text"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                placeholder="Jean"
                                className="w-full rounded-lg border-2 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                                style={{ borderColor: '#e5e7eb', color: '#1f2937' }}
                                autoFocus
                          />
                        </div>
                        <div>
                              <label className="block text-sm font-medium mb-2 text-gray-700">
                                Nom de famille
                          </label>
                          <input
                            type="text"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                placeholder="Dupont"
                                className="w-full rounded-lg border-2 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                                style={{ borderColor: '#e5e7eb', color: '#1f2937' }}
                          />
                        </div>
                      </div>
                          <div className="flex gap-3 mt-6">
                            <button
                              type="button"
                              onClick={prevStep}
                              className="flex-1 py-3 text-sm font-semibold text-gray-600 border-2 border-gray-300 rounded-lg hover:bg-gray-50"
                            >
                              ← Retour
                            </button>
                            <button
                              type="button"
                              onClick={nextStep}
                              disabled={!firstName || !lastName}
                              className="flex-1 py-3 text-sm font-bold text-white rounded-lg transition disabled:opacity-50"
                              style={{ backgroundColor: '#00A3E0' }}
                            >
                              Suivant →
                            </button>
                          </div>
                        </motion.div>
                      )}

                      {/* Étape 6 : Dernière étape - Contact */}
                      {step === 6 && (
                        <motion.div
                          key="step6"
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -50 }}
                          transition={{ duration: 0.3 }}
                        >
                          <label className="block text-lg font-bold mb-4 text-center" style={{ color: '#003D7A' }}>
                            Dernière étape : Vos informations
                          </label>
                          <div className="space-y-4">
                      <div>
                              <label className="flex items-center gap-2 text-sm font-medium mb-2 text-gray-700">
                                <span className="text-2xl">📞</span>
                                Numéro de téléphone
                        </label>
                        <input
                          type="tel"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                          placeholder="+352 ..."
                                className="w-full rounded-lg border-2 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                                style={{ borderColor: '#e5e7eb', color: '#1f2937' }}
                                autoFocus
                        />
                      </div>
                      <div>
                              <label className="flex items-center gap-2 text-sm font-medium mb-2 text-gray-700">
                                <span className="text-2xl">📧</span>
                                Email
                        </label>
                        <input
                          type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="exemple@email.lu"
                                className="w-full rounded-lg border-2 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                                style={{ borderColor: '#e5e7eb', color: '#1f2937' }}
                        />
                      </div>
                    </div>
                          <p className="text-xs text-gray-500 mt-4 text-center">
                            🔒 Vos données sont sécurisées et confidentielles
                          </p>
                          <div className="flex gap-3 mt-6">
                      <button
                              type="button"
                              onClick={prevStep}
                              className="flex-1 py-3 text-sm font-semibold text-gray-600 border-2 border-gray-300 rounded-lg hover:bg-gray-50"
                      >
                              ← Retour
                      </button>
                      <button
                              type="submit"
                              disabled={!phone || !email || isSubmitting}
                              className="flex-1 py-3 text-sm font-bold text-white rounded-lg transition disabled:opacity-50"
                        style={{ backgroundColor: '#ED1C24' }}
                      >
                              {isSubmitting ? "Envoi..." : "Valider ✓"}
                      </button>
                    </div>
                  </motion.div>
                )}
                    </AnimatePresence>
                  </form>
                    </div>
                    
            {/* Badge certification */}
            <div className="mt-6 text-center">
              <p className="text-sm text-white/90">
                🇱🇺 Programme subventionné par l&apos;État du Luxembourg
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
