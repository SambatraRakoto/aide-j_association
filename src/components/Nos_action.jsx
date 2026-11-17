const actions = [
  {
    titre: 'Formation et développement des compétences',
    introduction:
      'Nous souhaitons proposer des formations adaptées aux besoins des jeunes et aux réalités du marché du travail.',
    activites: [
      'Initiation et perfectionnement en informatique.',
      'Formation aux outils numériques.',
      'Développement des compétences professionnelles.',
      'Communication et expression orale.',
      'Gestion de projets et travail en équipe.',
    ],
  },
  {
    titre: "Accompagnement vers l'emploi",
    introduction:
      'Nous voulons aider les jeunes à mieux préparer leur entrée dans le monde professionnel.',
    activites: [
      "Initiation à la recherche d'emploi.",
      'Apprentissage de la rédaction de CV et de lettres de motivation.',
      "Préparation aux entretiens d'embauche.",
      'Orientation et conseils professionnels.',
      "Mise en relation avec des opportunités professionnelles et des partenaires.",
    ],
  },
  {
    titre: "Promotion de l'entrepreneuriat des jeunes",
    introduction:
      'Nous encourageons les jeunes à devenir des acteurs économiques en développant leurs propres initiatives.',
    activites: [
      "Sensibilisation à l'entrepreneuriat.",
      "Formation à la création d'entreprise.",
      'Initiation à la gestion financière.',
      'Accompagnement des idées de projets.',
      'Encouragement des initiatives génératrices de revenus.',
    ],
  },
  {
    titre: 'Engagement citoyen et développement communautaire',
    introduction:
      'Nous encourageons les jeunes à participer activement à la vie de leur communauté.',
    activites: [
      "Organisation d'activités communautaires.",
      'Sensibilisation au civisme et à la responsabilité citoyenne.',
      'Initiatives solidaires.',
      'Participation aux projets de développement local.',
    ],
  },
]

const Nos_realisation = () => {
  return (
    <main className="bg-base-100">
      <section className="bg-base-200 py-14">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">
            Nos actions pour une jeunesse autonome et engagée
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg">
            Chez AIDE-J, nous croyons que chaque jeune possède un potentiel qui mérite d'être
            développé. C'est pourquoi nous mettons en place des actions destinées à renforcer les
            compétences, faciliter l'insertion professionnelle et encourager l'entrepreneuriat chez
            les jeunes de la Commune urbaine d'Antsirabe.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mt-8">
            <a href="/contact" className="btn bg-info-content text-info">Rejoindre l'association</a>
            <a href="/a-propos" className="btn btn-outline">En savoir plus sur nous</a>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center">Nos principales actions</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          {actions.map((action, index) => (
            <article key={action.titre} className="card bg-base-200 shadow-md">
              <div className="card-body">
                <h3 className="card-title text-lg">
                  <span className="badge badge-neutral">{index + 1}</span>
                  {action.titre}
                </h3>
                <p>{action.introduction}</p>
                <p className="font-semibold mt-2">Exemples d'activités :</p>
                <ul className="list-disc list-inside space-y-1">
                  {action.activites.map((activite) => (
                    <li key={activite}>{activite}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-xl font-semibold">Ensemble, transformons les idées en opportunités !</p>
          <p className="mt-4 max-w-3xl mx-auto">
            Chaque action représente une nouvelle possibilité pour les jeunes de progresser,
            d'apprendre et de participer au développement de leur communauté.
          </p>
          <a href="/contact" className="btn bg-info-content text-info mt-8">Prendre contact</a>
        </div>
      </section>
    </main>
  )
}

export default Nos_realisation
