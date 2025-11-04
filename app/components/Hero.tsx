"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative bg-linear-to-br from-blue-900 via-blue-800 to-blue-900 py-20 text-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-4xl font-bold leading-tight lg:text-5xl">
              Bénéficier jusqu'à <span className="text-green-400">100% d'aide</span> selon votre situation pour votre installation !
            </h1>
            
            <div className="space-y-4 text-lg">
              <p className="font-semibold text-blue-100">
                Nous identifions pour vous toutes les aides disponibles :
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-400 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Aides de l'État (klima bonus)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-400 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Aides du ministère du logement (topup social)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-400 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Aides de votre commune (Eco prêt)</span>
                </li>
              </ul>
              <p className="text-blue-100 mt-6">
                Et vous accompagnons étape par étape dans votre projet. Obtenez un rendez-vous téléphonique gratuit maintenant.
              </p>
            </div>

            <motion.a
              href="#eligibility"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block rounded-lg bg-green-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-green-600"
            >
              Tester mon éligibilité
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <Image
              src="/maison-energie.png"
              alt="Maison avec installation énergétique"
              width={600}
              height={600}
              className="rounded-lg shadow-2xl"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

