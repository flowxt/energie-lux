export default function Footer() {
  return (
    <footer className="bg-blue-900 py-12 text-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-xl font-bold">AidesEnergie.lu</h3>
            <p className="text-blue-200">
              Votre partenaire de confiance pour bénéficier des aides énergétiques au Luxembourg.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">Services</h4>
            <ul className="space-y-2 text-blue-200">
              <li>Panneaux photovoltaïques</li>
              <li>Pompe à chaleur</li>
              <li>Isolation thermique</li>
              <li>Rénovation énergétique</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">Contact</h4>
            <ul className="space-y-2 text-blue-200">
              <li>Email : contact@aidesenergie.lu</li>
              <li>Téléphone : +352 XX XX XX XX</li>
              <li>Luxembourg</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-blue-800 pt-8 text-center text-blue-200">
          <p>&copy; {new Date().getFullYear()} AidesEnergie.lu - Tous droits réservés</p>
        </div>
      </div>
    </footer>
  );
}

