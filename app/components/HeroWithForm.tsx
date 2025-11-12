"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

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

  const totalSteps = 5;

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

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    setStep(6); // Page de félicitations
  };

  return (
    <section className="relative py-20 text-white" style={{ background: 'linear-gradient(135deg, #003D7A 0%, #00A3E0 100%)' }}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-4xl font-bold leading-tight lg:text-5xl">
              Bénéficier jusqu'à <span style={{ color: '#ED1C24' }}>100% d'aide</span> selon votre situation pour votre installation !
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
                  <span>Aides de l'État (klima bonus)</span>
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
          </motion.div>

          {/* Formulaire multi-étapes */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl bg-white p-8 shadow-2xl">
              {/* Titre du formulaire avec badge officiel */}
              <div className="text-center mb-6 py-4 rounded-lg relative" style={{ backgroundColor: '#ED1C24' }}>
                <h2 className="text-2xl font-bold text-white">SIMULATEUR D'AIDE 2025</h2>
                <div className="absolute -top-3 right-4 bg-white px-3 py-1 rounded-full shadow-lg flex items-center gap-2">
                  <Image src="/lux.png" alt="Luxembourg" width={24} height={16} />
                  <span className="text-xs font-bold" style={{ color: '#003D7A' }}>OFFICIEL</span>
                </div>
              </div>
              
              {step < 6 && (
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium" style={{ color: '#003D7A' }}>
                      Étape {step} sur {totalSteps}
                    </span>
                    <span className="text-sm font-medium" style={{ color: '#003D7A' }}>
                      {Math.round((step / totalSteps) * 100)}%
                    </span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ backgroundColor: '#00A3E0' }}
                      initial={{ width: 0 }}
                      animate={{ width: `${(step / totalSteps) * 100}%` }}
                      transition={{ duration: 0.5 }}
                    />
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

                {/* Étape 2: Type de bien */}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-2xl font-bold mb-6" style={{ color: '#003D7A' }}>
                      Type de logement
                    </h3>
                    <div className="space-y-4">
                      {[
                        { value: "maison", label: "Maison individuelle", icon: "🏡" },
                        { value: "appartement", label: "Appartement", icon: "🏢" },
                      ].map((option) => (
                        <button
                          key={option.value}
                          onClick={() => {
                            setFormData({ ...formData, propertyType: option.value });
                          }}
                          className="w-full flex items-center gap-4 p-4 rounded-lg border-2 transition-all text-left"
                          style={{
                            borderColor: formData.propertyType === option.value ? '#00A3E0' : '#e5e7eb',
                            backgroundColor: formData.propertyType === option.value ? '#E6F7FF' : 'white'
                          }}
                        >
                          <span className="text-4xl">{option.icon}</span>
                          <span className="font-semibold text-gray-900">{option.label}</span>
                        </button>
                      ))}
                    </div>
                    <div className="flex gap-4 mt-6">
                      <button
                        onClick={handleBack}
                        className="flex-1 rounded-lg border-2 px-6 py-3 font-semibold transition"
                        style={{ borderColor: '#003D7A', color: '#003D7A' }}
                      >
                        Retour
                      </button>
                      <button
                        onClick={handleNext}
                        disabled={!formData.propertyType}
                        className="flex-1 rounded-lg px-6 py-3 font-semibold text-white transition disabled:opacity-50"
                        style={{ backgroundColor: '#00A3E0' }}
                      >
                        Suivant
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Étape 3: Statut */}
                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-2xl font-bold mb-6" style={{ color: '#003D7A' }}>
                      Vous êtes
                    </h3>
                    <div className="space-y-4">
                      {[
                        { value: "proprietaire", label: "Propriétaire", icon: "🔑" },
                        { value: "locataire", label: "Locataire", icon: "📄" },
                      ].map((option) => (
                        <button
                          key={option.value}
                          onClick={() => {
                            setFormData({ ...formData, ownershipStatus: option.value });
                          }}
                          className="w-full flex items-center gap-4 p-4 rounded-lg border-2 transition-all text-left"
                          style={{
                            borderColor: formData.ownershipStatus === option.value ? '#00A3E0' : '#e5e7eb',
                            backgroundColor: formData.ownershipStatus === option.value ? '#E6F7FF' : 'white'
                          }}
                        >
                          <span className="text-4xl">{option.icon}</span>
                          <span className="font-semibold text-gray-900">{option.label}</span>
                        </button>
                      ))}
                    </div>
                    <div className="flex gap-4 mt-6">
                      <button
                        onClick={handleBack}
                        className="flex-1 rounded-lg border-2 px-6 py-3 font-semibold transition"
                        style={{ borderColor: '#003D7A', color: '#003D7A' }}
                      >
                        Retour
                      </button>
                      <button
                        onClick={handleNext}
                        disabled={!formData.ownershipStatus}
                        className="flex-1 rounded-lg px-6 py-3 font-semibold text-white transition disabled:opacity-50"
                        style={{ backgroundColor: '#00A3E0' }}
                      >
                        Suivant
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Étape 4: Adresse */}
                {step === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-2xl font-bold mb-6" style={{ color: '#003D7A' }}>
                      Votre adresse
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Commune *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.address}
                          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                          placeholder="Ex: Luxembourg-Ville"
                          className="w-full rounded-lg border-2 border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none text-gray-900"
                        />
                      </div>
                    </div>
                    <div className="flex gap-4 mt-6">
                      <button
                        onClick={handleBack}
                        className="flex-1 rounded-lg border-2 px-6 py-3 font-semibold transition"
                        style={{ borderColor: '#003D7A', color: '#003D7A' }}
                      >
                        Retour
                      </button>
                      <button
                        onClick={handleNext}
                        disabled={!formData.address}
                        className="flex-1 rounded-lg px-6 py-3 font-semibold text-white transition disabled:opacity-50"
                        style={{ backgroundColor: '#00A3E0' }}
                      >
                        Suivant
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Étape 5: Coordonnées */}
                {step === 5 && (
                  <motion.div
                    key="step5"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-2xl font-bold mb-6" style={{ color: '#003D7A' }}>
                      Vos coordonnées
                    </h3>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Prénom *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.firstName}
                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                            className="w-full rounded-lg border-2 border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none text-gray-900"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Nom *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.lastName}
                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                            className="w-full rounded-lg border-2 border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none text-gray-900"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Téléphone *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+352 ..."
                          className="w-full rounded-lg border-2 border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none text-gray-900"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full rounded-lg border-2 border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none text-gray-900"
                        />
                      </div>
                    </div>
                    <div className="flex gap-4 mt-6">
                      <button
                        onClick={handleBack}
                        className="flex-1 rounded-lg border-2 px-6 py-3 font-semibold transition"
                        style={{ borderColor: '#003D7A', color: '#003D7A' }}
                      >
                        Retour
                      </button>
                      <button
                        onClick={handleSubmit}
                        disabled={!formData.firstName || !formData.lastName || !formData.phone || !formData.email}
                        className="flex-1 rounded-lg px-6 py-3 font-semibold text-white transition disabled:opacity-50"
                        style={{ backgroundColor: '#ED1C24' }}
                      >
                        Valider
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Page de félicitations */}
                {step === 6 && (
                  <motion.div
                    key="step6"
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
                        Le montant des aides d'État dont vous pouvez bénéficier est lié à votre situation.
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
                          Notre équipe vous permettra d'obtenir le <strong>maximum d'aides de l'État possible</strong>.
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
            {step < 6 && (
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
    </section>
  );
}

