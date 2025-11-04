"use client";

import { motion } from "framer-motion";

export default function AidExamples() {
  const examples = [
    {
      percentage: "100%",
      title: "Installation de panneaux photovoltaïques",
      city: "Differdange",
      profile: "Propriétaires d'une maison – foyer avec 2 enfants",
      income: "80 000 €",
      aids: "État + Commune + Aide sociale complémentaire (Top-up social)",
      color: "green"
    },
    {
      percentage: "75%",
      title: "Installation de panneaux photovoltaïques",
      city: "Differdange",
      profile: "Propriétaires d'une maison",
      income: null,
      aids: "État + Commune",
      color: "blue"
    }
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center text-3xl font-bold text-blue-900"
        >
          Exemples d'aides obtenues
        </motion.h2>

        <div className="grid gap-8 lg:grid-cols-2">
          {examples.map((example, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.03 }}
              className="overflow-hidden rounded-xl bg-white shadow-lg transition hover:shadow-xl"
            >
              <div className={`${example.color === 'green' ? 'bg-green-500' : 'bg-blue-500'} px-8 py-6`}>
                <div className="text-6xl font-bold text-white">
                  {example.percentage}
                </div>
                <div className="mt-2 text-xl font-semibold text-white">
                  d'aides
                </div>
              </div>

              <div className="space-y-4 p-8">
                <h3 className="text-xl font-semibold text-gray-900">
                  {example.title}
                </h3>

                <div className="space-y-2 text-gray-700">
                  <p>
                    <span className="font-medium">Ville :</span> {example.city}
                  </p>
                  <p>
                    <span className="font-medium">Profil :</span> {example.profile}
                  </p>
                  {example.income && (
                    <p>
                      <span className="font-medium">Revenu annuel du foyer :</span> {example.income}
                    </p>
                  )}
                  <p>
                    <span className="font-medium">Aides éligible :</span> {example.aids}
                  </p>
                </div>

                <a
                  href="#eligibility"
                  className="mt-6 inline-block rounded-lg border-2 border-blue-900 px-6 py-3 font-semibold text-blue-900 transition hover:bg-blue-900 hover:text-white"
                >
                  Appel Gratuit
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

