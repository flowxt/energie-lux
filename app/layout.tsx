import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";

// Police pour les titres - Montserrat (moderne et impactante)
const montserrat = Montserrat({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

// Police pour les paragraphes - Open Sans (lisible et professionnelle)
const openSans = Open_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aides Énergie Luxembourg 2025 | Panneaux Solaires, Pompe à Chaleur, Isolation - AidesEnergie.lu",
  description: "🇱🇺 Aide panneaux solaires Luxembourg, aide pompe à chaleur Luxembourg, aide isolation Luxembourg. Calculez vos aides 2025 : Klimabonus, Top-up social, aides communales. Jusqu'à 100% de financement pour votre rénovation énergétique. Simulateur gratuit. Services dans tout le Luxembourg.",
  keywords: "aide panneaux solaires luxembourg, aide panneaux photovoltaïques luxembourg, aide pompe à chaleur luxembourg, aide isolation luxembourg, klimabonus luxembourg, aide rénovation énergétique luxembourg, top-up social luxembourg, subvention panneaux solaires luxembourg, prime énergie luxembourg, aide état luxembourg, aides 2025 luxembourg, borne recharge luxembourg aide, aide travaux énergétiques luxembourg, aide énergie Luxembourg-Ville, aide énergie Esch-sur-Alzette, aide énergie Differdange, aide énergie Dudelange, aide énergie Ettelbruck, aide énergie Diekirch, aide énergie Wiltz, aide énergie Echternach, aide énergie Rumelange, aide énergie Grevenmacher",
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr-LU">
      <head>
        <meta name="geo.region" content="LU" />
        <meta name="geo.placename" content="Luxembourg" />
        <meta property="og:locale" content="fr_LU" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Aides Énergie Luxembourg 2025 | AidesEnergie.lu" />
        <meta property="og:description" content="Calculez vos aides pour panneaux solaires, pompe à chaleur et isolation au Luxembourg. Klimabonus 2025. Jusqu'à 100% de financement." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.aidesenergie.lu" />
      </head>
      <body className={`${montserrat.variable} ${openSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
