const valeurs = [
  {
    titre: 'Engagement',
    texte:
      'Nous croyons en une jeunesse actrice du développement de sa communauté et nous nous engageons à ses côtés.',
  },
  {
    titre: 'Autonomie',
    texte:
      'Nous donnons aux jeunes les moyens de développer leurs compétences et de construire eux-mêmes leur avenir.',
  },
  {
    titre: 'Solidarité',
    texte:
      "Nous favorisons l'entraide, le travail en équipe et la participation à des initiatives collectives.",
  },
  {
    titre: 'Responsabilité',
    texte:
      'Nous encourageons le civisme, le respect et la prise de responsabilité dans la vie de la cité.',
  },
]

const objectifs = [
  'Renforcer les compétences pratiques et professionnelles des jeunes.',
  "Faciliter l'accès à l'emploi et à la vie active.",
  "Encourager l'esprit d'initiative et l'entrepreneuriat local.",
  "Promouvoir l'engagement citoyen et le développement communautaire.",
  "Créer des opportunités de formation, de rencontre et d'échange.",
]

const Apropos = () => {
  return (
    <main className="bg-base-100">
      <section className="bg-base-200 py-14">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">À propos d'AIDE-J</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg">
            Une association engagée pour l'épanouissement, l'autonomisation et l'insertion des
            jeunes de la Commune urbaine d'Antsirabe.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl font-bold">Qui sommes-nous ?</h2>
            <p className="mt-4 leading-relaxed">
              AIDE-J est une association qui œuvre pour l'épanouissement et l'autonomisation des
              jeunes de la Commune urbaine d'Antsirabe. Nous accueillons les jeunes qui souhaitent
              apprendre, se former et participer à la vie de leur communauté.
            </p>
            <p className="mt-4 leading-relaxed">
              Notre mission est de donner aux jeunes les moyens de développer leurs compétences, de
              découvrir leurs talents et de saisir les opportunités qui leur permettront de
              construire leur avenir.
            </p>
            <p className="mt-4 leading-relaxed">
              À travers différentes initiatives, nous souhaitons contribuer à une jeunesse plus
              compétente, responsable, autonome et actrice du développement de sa communauté.
            </p>
          </div>
          <div className="card bg-base-200 shadow-md">
            <div className="card-body">
              <h2 className="card-title text-2xl">Notre mission</h2>
              <p>
                « Fikambanana ho fampiroboroboana ny fampananan'asa, ny fampandrosoana ary ny
                fandraharahan'ny tanora. »
              </p>
              <p className="text-sm opacity-80">
                Une association pour la promotion de l'emploi, du développement et de
                l'entrepreneuriat des jeunes.
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                <li className="badge badge-outline badge-lg">Formation</li>
                <li className="badge badge-outline badge-lg">Insertion</li>
                <li className="badge badge-outline badge-lg">Entrepreneuriat</li>
                <li className="badge badge-outline badge-lg">Citoyenneté</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-base-200 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center">Nos valeurs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {valeurs.map((valeur) => (
              <div key={valeur.titre} className="card bg-base-100 shadow-md">
                <div className="card-body">
                  <h3 className="card-title text-lg">{valeur.titre}</h3>
                  <p className="text-sm">{valeur.texte}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl font-bold">Nos objectifs</h2>
            <ul className="mt-4 space-y-3">
              {objectifs.map((objectif) => (
                <li key={objectif} className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>{objectif}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Notre public</h2>
            <p className="mt-4 leading-relaxed">
              Les jeunes de la Commune urbaine d'Antsirabe, qu'ils soient en recherche
              d'orientation, en formation, à la recherche d'un emploi ou porteurs d'une idée de
              projet.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <a href="/nos-actions" className="btn bg-info-content text-info">Découvrir nos actions</a>
              <a href="/contact" className="btn btn-outline">Nous contacter</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Apropos
