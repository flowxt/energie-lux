"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#003D7A' }}>
            Exemples d'aides obtenues
          </h2>
          <div className="flex items-center justify-center gap-2 text-gray-600">
            <Image src="/lux.png" alt="Luxembourg" width={28} height={19} />
            <span className="text-sm font-semibold">Aides accordées au Luxembourg</span>
          </div>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {examples.map((example, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.03 }}
              className="overflow-hidden rounded-xl bg-white shadow-lg transition hover:shadow-xl flex flex-col"
            >
              <div className="px-8 py-6" style={{ backgroundColor: example.color === 'green' ? '#ED1C24' : '#00A3E0' }}>
                <div className="text-6xl font-bold text-white">
                  {example.percentage} <span className="text-xl font-semibold">d'aides</span>
                </div>
                <div className="mt-4 text-base font-bold text-white border-t-2 border-white/30 pt-4">
                  Aides éligibles : {example.aids}
                </div>
              </div>

              <div className="space-y-4 p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-900">
                  {example.title}
                </h3>

                <div className="space-y-2 text-gray-700 flex-grow">
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
                </div>

                <a
                  href="#"
                  className="mt-6 inline-block rounded-lg border-2 px-6 py-3 font-semibold transition text-center"
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

