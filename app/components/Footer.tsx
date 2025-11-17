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
            <h3 className="mb-4 text-xl font-bold">Aides-Energie.lu</h3>
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
              <li>Email : enrluxn@gmail.com</li>
              <li>Luxembourg</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 text-center" style={{ borderTop: '1px solid #00A3E0', color: '#CCF0FF' }}>
          <p>&copy; {new Date().getFullYear()} Aides-Energie.lu - Tous droits réservés</p>
        </div>

        {/* Section SEO - Mots-clés Luxembourg */}
        <div className="mt-8 pt-8 border-t border-blue-800/30">
          <h3 className="text-lg font-semibold text-white mb-4 text-center">
            Aides énergétiques disponibles au Luxembourg 🇱🇺
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm" style={{ color: '#CCF0FF' }}>
            <div>
              <p className="font-semibold text-white mb-2">Panneaux solaires</p>
              <ul className="space-y-1 text-xs">
                <li>• Aide panneaux solaires Luxembourg</li>
                <li>• Aide panneaux photovoltaïques Luxembourg</li>
                <li>• Subvention panneaux solaires</li>
                <li>• Klimabonus panneaux solaires</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-white mb-2">Pompe à chaleur</p>
              <ul className="space-y-1 text-xs">
                <li>• Aide pompe à chaleur Luxembourg</li>
                <li>• Prime pompe à chaleur 2025</li>
                <li>• Subvention chauffage Luxembourg</li>
                <li>• Klimabonus pompe à chaleur</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-white mb-2">Isolation</p>
              <ul className="space-y-1 text-xs">
                <li>• Aide isolation Luxembourg</li>
                <li>• Aide isolation toiture</li>
                <li>• Aide isolation extérieure</li>
                <li>• Prime isolation Luxembourg</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-white mb-2">Autres aides</p>
              <ul className="space-y-1 text-xs">
                <li>• Aide borne de recharge Luxembourg</li>
                <li>• Aide rénovation énergétique</li>
                <li>• Top-up social Luxembourg</li>
                <li>• Aides communales énergie</li>
              </ul>
            </div>
          </div>
          <p className="mt-6 text-center text-xs opacity-75">
            Aides-Energie.lu vous accompagne dans l'obtention de toutes les aides de l'État luxembourgeois pour vos travaux de rénovation énergétique 2025. 
            Calculez gratuitement vos droits aux aides : Klimabonus, Top-up social, aides communales.
          </p>
        </div>

        {/* Section SEO - Villes du Luxembourg */}
        <div className="mt-8 pt-8 border-t border-blue-800/30">
          <h3 className="text-lg font-semibold text-white mb-4 text-center">
            🏙️ Nos services dans tout le Luxembourg
          </h3>
          <div className="flex flex-wrap justify-center gap-3 text-sm" style={{ color: '#CCF0FF' }}>
            <span className="bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition">Luxembourg-Ville</span>
            <span className="bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition">Esch-sur-Alzette</span>
            <span className="bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition">Differdange</span>
            <span className="bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition">Dudelange</span>
            <span className="bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition">Ettelbruck</span>
            <span className="bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition">Diekirch</span>
            <span className="bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition">Wiltz</span>
            <span className="bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition">Echternach</span>
            <span className="bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition">Rumelange</span>
            <span className="bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition">Grevenmacher</span>
          </div>
          <p className="mt-4 text-center text-xs opacity-75">
            Aide panneaux solaires, pompe à chaleur et isolation disponible dans toutes les communes du Luxembourg. 
            Accompagnement personnalisé partout au Grand-Duché.
          </p>
        </div>
      </div>
    </footer>
  );
}

