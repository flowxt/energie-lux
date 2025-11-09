"use client";

import { motion } from "framer-motion";

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Prise de contact",
      description: "Vous remplissez notre formulaire en ligne pour être rappelé gratuitement par un conseiller expert dans les 24h."
    },
    {
      number: "2",
      title: "Analyse personnalisée",
      description: "Lors de l'échange, nous étudions votre situation, vos besoins, et les aides disponibles selon votre projet."
    },
    {
      number: "3",
      title: "Montage du dossier & accompagnement",
      description: "Nous constituons pour vous un dossier complet et vous accompagnons dans toutes les démarches administratives."
    },
    {
      number: "4",
      title: "Suivi jusqu'à la réalisation des travaux",
      description: "Nous restons à vos côtés jusqu'à la mise en œuvre des travaux avec nos partenaires certifiés."
    }
  ];

  return (
    <section id="how-it-works" className="bg-white py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold" style={{ color: '#003D7A' }}>
            Zéro engagement, 100 % gagnant
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-700">
            Notre mission : vous faire bénéficier du maximum d'aides possibles, en toute transparence, sans frais cachés.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ scale: 1.05 }}
              className="relative rounded-lg border-2 bg-white p-6 shadow-sm transition hover:shadow-md"
              style={{ borderColor: '#CCF0FF' }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = '#00A3E0'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = '#CCF0FF'}
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full text-3xl font-bold text-white" style={{ backgroundColor: '#00A3E0' }}>
                {step.number}
              </div>
              <h3 className="mb-3 text-xl font-semibold" style={{ color: '#003D7A' }}>
                {step.title}
              </h3>
              <p className="text-gray-700">
                {step.description}
              </p>
              
              {index < steps.length - 1 && (
                <div className="absolute -right-4 top-1/2 hidden -translate-y-1/2 lg:block">
                  <svg className="h-8 w-8" style={{ color: '#00A3E0' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block rounded-lg px-8 py-4 text-lg font-semibold text-white shadow-lg transition"
            style={{ backgroundColor: '#ED1C24' }}
          >
            Tester mon éligibilité
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

