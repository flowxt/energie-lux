"use client";

import { motion } from "framer-motion";

export default function RenovationServices() {
  const services = [
    {
      icon: (
        <svg className="h-16 w-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      title: "Isolation",
      description: "Améliorez le confort thermique de votre logement tout en diminuant vos pertes énergétiques. Murs, toitures, planchers."
    },
    {
      icon: (
        <svg className="h-16 w-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: "Panneaux photovoltaïques",
      description: "Produisez votre propre électricité, réduisez vos factures et valorisez votre bien grâce à une installation éligible aux aides étatiques."
    },
    {
      icon: (
        <svg className="h-16 w-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
        </svg>
      ),
      title: "Système de chauffage",
      description: "Passez à un système plus performant et écologique (pompe à chaleur, chaudière à haut rendement)."
    },
    {
      icon: (
        <svg className="h-16 w-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Optimisation de la consommation énergétique globale",
      description: "Analyse complète de votre habitat pour maximiser l'efficacité énergétique."
    }
  ];

  return (
    <section className="py-20 text-white" style={{ background: 'linear-gradient(135deg, #003D7A 0%, #00A3E0 100%)' }}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">
            Rénovation énergétique de l'habitat
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-blue-100">
            Des aides pour tous vos travaux de rénovation énergétique
          </p>
        </div>

        <div className="mb-12 max-w-4xl mx-auto text-center">
          <p className="text-blue-100 leading-relaxed">
            Le Luxembourg propose des aides financières concrètes pour vos travaux de rénovation énergétique, notamment via le programme Klimabonus, qui soutient les initiatives durables des particuliers.
          </p>
          <p className="mt-4 text-blue-100 leading-relaxed">
            Chez Aides-Energie.lu, nous identifions précisément les aides auxquelles vous avez droit, en fonction de votre projet, et vous guidons à chaque étape.
          </p>
          <p className="mt-4 font-semibold text-white">
            Notre objectif : vous faire profiter au maximum des dispositifs disponibles, tout en vous simplifiant les démarches de A à Z.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="rounded-lg bg-white/10 p-6 backdrop-blur-sm transition hover:bg-white/20"
            >
              <div className="mb-4" style={{ color: '#ED1C24' }}>
                {service.icon}
              </div>
              <h3 className="mb-3 text-xl font-semibold">
                {service.title}
              </h3>
              <p className="text-blue-100">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

