"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Est-ce que votre service est payant ?",
      answer: "Non. Notre accompagnement est gratuit et sans engagement pour les particuliers souhaitant connaître et activer leurs droits aux aides à la rénovation énergétique."
    },
    {
      question: "Comment savoir si je suis éligible à des aides ?",
      answer: "Lors de l'appel, un conseiller étudiera avec vous votre situation et votre projet. En quelques minutes, vous saurez exactement à quelles aides vous pouvez prétendre."
    },
    {
      question: "Quelles démarches allez-vous gérer pour moi ?",
      answer: "Nous nous occupons de la constitution du dossier, de la coordination avec les organismes et du suivi administratif jusqu'à la finalisation de la demande d'aide."
    },
    {
      question: "Puis-je choisir librement mon artisan ?",
      answer: "Oui. Nous travaillons avec des partenaires certifiés, mais vous restez libre de choisir l'entreprise de votre choix tant qu'elle respecte les critères d'éligibilité."
    }
  ];

  return (
    <section id="faq" className="bg-white py-20">
      <div className="container mx-auto max-w-4xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-blue-900">
            Questions fréquentes
          </h2>
          <p className="text-lg text-gray-700">
            Vous avez des questions ? Nous avons les réponses.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="overflow-hidden rounded-lg border-2 border-gray-200 bg-white shadow-sm transition hover:border-blue-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left transition hover:bg-gray-50"
              >
                <span className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </span>
                <motion.svg
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="h-6 w-6 shrink-0 text-blue-900"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </motion.svg>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-gray-200 px-6 py-5 text-gray-700">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="mb-6 text-gray-700">
            Vous avez d'autres questions ? Contactez-nous !
          </p>
          <a
            href="#eligibility"
            className="inline-block rounded-lg bg-green-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-green-600"
          >
            Demander un appel gratuit
          </a>
        </motion.div>
      </div>
    </section>
  );
}

