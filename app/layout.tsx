import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AidesEnergie.lu - Aides énergétiques au Luxembourg",
  description: "Bénéficiez jusqu'à 100% d'aide pour vos travaux de rénovation énergétique au Luxembourg. Panneaux photovoltaïques, pompe à chaleur, isolation. Accompagnement gratuit et personnalisé.",
  keywords: "aides énergétiques Luxembourg, Klimabonus, rénovation énergétique, panneaux photovoltaïques, pompe à chaleur, isolation, top-up social",
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
    <html lang="fr">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
