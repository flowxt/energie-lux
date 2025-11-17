"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ServicesGrid() {
  const services = [
    {
      title: "Isolation extérieure",
      description: "Améliorez le confort thermique et réduisez vos factures d'énergie",
      image: "/iso-ext.jpg",
      alt: "Isolation extérieure de bâtiment",
      badge: "Jusqu'à 75% d'aides"
    },
    {
      title: "Isolation de toiture",
      description: "Protégez votre habitat des pertes de chaleur par le toit",
      image: "/iso-toit.jpg",
      alt: "Isolation de toiture",
      badge: "Aides disponibles"
    },
    {
      title: "Panneaux solaires",
      description: "Produisez votre propre électricité et devenez autonome",
      image: "/panneau-sol.jpg",
      alt: "Installation de panneaux solaires photovoltaïques",
      badge: "Jusqu'à 100% d'aides"
    },
    {
      title: "Pompe à chaleur",
      description: "Chauffage écologique et économique pour votre maison",
      image: "/pompe-new.jpg",
      alt: "Installation de pompe à chaleur",
      badge: "Jusqu'à 11 200€"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        {/* En-tête de section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Image src="/lux.png" alt="Luxembourg" width={36} height={24} />
            <span className="text-sm font-semibold text-gray-600">Solutions éligibles au Luxembourg</span>
          </div>
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#003D7A' }}>
            Nos solutions de <span style={{ color: '#ED1C24' }}>rénovation énergétique</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Des travaux financés par les aides de l&apos;État luxembourgeois pour améliorer votre confort et réduire vos dépenses énergétiques
          </p>
        </motion.div>

        {/* Grille des services */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-2xl"
            >
              {/* Badge d'aide */}
              <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-red-600 to-red-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg">
                {service.badge}
              </div>

              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              </div>

              {/* Contenu */}
              <div className="p-6 relative">
                <h3 className="text-xl font-bold mb-2 transition-colors" style={{ color: '#003D7A' }}>
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Bordure décorative */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-900 via-red-600 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.div>
          ))}
        </div>

        {/* CTA en bas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">
            Vous avez un projet de rénovation énergétique ?
          </p>
          <motion.a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 rounded-lg text-white font-semibold text-lg shadow-lg transition-all hover:shadow-xl cursor-pointer"
            style={{ backgroundColor: '#ED1C24' }}
          >
            Calculer mes aides gratuitement
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

