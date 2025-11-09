"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ServicesGrid() {
  const services = [
    {
      title: "Panneaux photovoltaïques",
      image: "/solaire.jpg",
      alt: "Installation de panneaux photovoltaïques"
    },
    {
      title: "Pompe à chaleur",
      image: "/pompe.jpg",
      alt: "Installation de pompe à chaleur"
    },
    {
      title: "Travaux de rénovation",
      image: "/travaux3.jpeg",
      alt: "Travaux de rénovation énergétique"
    }
  ];

  return (
    <section id="services" className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="overflow-hidden rounded-lg bg-white shadow-md transition hover:shadow-xl"
            >
              <div className="relative h-64">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold" style={{ color: '#003D7A' }}>
                  {service.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

