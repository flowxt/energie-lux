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
