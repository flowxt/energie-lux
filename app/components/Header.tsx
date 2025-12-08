"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Accueil", href: "#" },
    { name: "Services", href: "#services" },
    { name: "Exemples d'aides", href: "#exemples" },
    { name: "Comment ça marche", href: "#how-it-works" },
    { name: "FAQ", href: "#faq" },
  ];

  const promotionalMessages = [
    { text: "Jusqu'à", highlight: "11 200€ d'aides", suffix: "pour votre pompe à chaleur" },
    { text: "Profitez des", highlight: "aides de l'État", suffix: "pour vos panneaux solaires" },
    { text: "Bénéficiez d'aides", highlight: "exceptionnelles", suffix: "pour l'isolation de votre maison" },
    { text: "Installation de", highlight: "borne de recharge", suffix: "avec aides de l'État" },
  ];

  return (
    <>
    <header className="sticky top-0 z-50 bg-white shadow-md">
        {/* Bandeau avec drapeau et certification */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 py-2">
          <div className="container mx-auto px-6 lg:px-8 flex items-center justify-center gap-3">
            <div className="bg-white rounded px-2 py-1 shadow-md">
              <Image src="/lux.png" alt="Drapeau Luxembourg" width={40} height={27} />
            </div>
            <span className="text-white text-sm font-semibold">Programme subventionné par l&apos;État du Luxembourg</span>
          </div>
        </div>
      
      <nav className="container mx-auto flex items-center justify-between px-6 py-4 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 flex items-center gap-2 p-1.5">
            <Image src="/logo.png" alt="Aides-Energie.lu" width={40} height={40} className="h-10 w-auto" />
            <span className="text-2xl font-bold" style={{ color: '#003D7A' }}>
              Aides<span style={{ color: '#ED1C24' }}>-</span>Energie<span style={{ color: '#ED1C24' }}>.lu</span>
            </span>
          </a>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Ouvrir le menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900 transition hover:text-[#00A3E0]"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="#"
            className="rounded-lg px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition"
            style={{ backgroundColor: '#ED1C24' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#c91820'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ED1C24'}
          >
            Tester mon éligibilité
          </a>
        </div>
      </nav>

      {/* Menu mobile */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="space-y-1 px-4 pb-4 pt-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#"
              className="mt-4 block rounded-lg px-3 py-2.5 text-center text-base font-semibold text-white"
              style={{ backgroundColor: '#ED1C24' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Tester mon éligibilité
            </a>
          </div>
        </div>
      )}
    </header>
    </>
  );
}

