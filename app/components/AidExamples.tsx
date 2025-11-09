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
    <section id="exemples" className="bg-gray-50 py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}

          className="mb-12 text-center text-3xl font-bold"
          style={{ color: '#003D7A' }}
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
              <div className="px-8 py-6" style={{ backgroundColor: example.color === 'green' ? '#ED1C24' : '#00A3E0' }}>
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
                  href="#"
                  className="mt-6 inline-block rounded-lg border-2 px-6 py-3 font-semibold transition"
                  style={{ borderColor: '#003D7A', color: '#003D7A' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#003D7A';
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#003D7A';
                  }}
                >
                  Tester mon éligibilité
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

