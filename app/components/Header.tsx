"use client";

import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Accueil", href: "#" },
    { name: "Services", href: "#services" },
    { name: "Éligibilité", href: "#eligibility" },
    { name: "Comment ça marche", href: "#how-it-works" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="text-2xl font-bold text-blue-900">
              AidesEnergie<span className="text-green-500">.lu</span>
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
              className="text-sm font-semibold leading-6 text-gray-900 transition hover:text-blue-900"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="#eligibility"
            className="rounded-lg bg-green-500 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-green-600"
          >
            Appel gratuit
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
              href="#eligibility"
              className="mt-4 block rounded-lg bg-green-500 px-3 py-2.5 text-center text-base font-semibold text-white hover:bg-green-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              Appel gratuit
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

