import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-12 text-white" style={{ backgroundColor: '#003D7A' }}>
      <div className="container mx-auto px-6 lg:px-8">
        {/* Badge officiel en haut du footer */}
        <div className="flex justify-center mb-8 pb-8 border-b border-blue-700">
          <div className="flex items-center gap-3 bg-white/10 px-6 py-3 rounded-lg backdrop-blur-sm border-2 border-white/20">
            <div className="bg-white rounded px-2 py-1 shadow-lg">
              <Image src="/lux.png" alt="Drapeau Luxembourg" width={32} height={21} />
            </div>
            <span className="text-white font-semibold">Programme certifié par l'État du Luxembourg</span>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-xl font-bold">AidesEnergie.lu</h3>
            <p style={{ color: '#CCF0FF' }}>
              Votre partenaire de confiance pour bénéficier des aides énergétiques au Luxembourg.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">Services</h4>
            <ul className="space-y-2" style={{ color: '#CCF0FF' }}>
              <li>Panneaux photovoltaïques</li>
              <li>Pompe à chaleur</li>
              <li>Isolation thermique</li>
              <li>Rénovation énergétique</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">Contact</h4>
            <ul className="space-y-2" style={{ color: '#CCF0FF' }}>
              <li>Email : contact@aidesenergie.lu</li>
              <li>Téléphone : +352 XX XX XX XX</li>
              <li>Luxembourg</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 text-center" style={{ borderTop: '1px solid #00A3E0', color: '#CCF0FF' }}>
          <p>&copy; {new Date().getFullYear()} AidesEnergie.lu - Tous droits réservés</p>
        </div>
      </div>
    </footer>
  );
}

