import jeune1 from '../assets/img/Jeune1.jpg'
import jeune2 from '../assets/img/Jeune2.jpg'
import jeune3 from '../assets/img/Jeune3.jpg'
import jeune4 from '../assets/img/Jeune4.jpg'

const domaines = [
  {
    image: jeune1,
    titre: 'Formation et renforcement des compétences',
    texte:
      "Développer les connaissances et les compétences pratiques des jeunes pour mieux répondre aux exigences du monde professionnel.",
  },
  {
    image: jeune2,
    titre: 'Insertion sociale et professionnelle',
    texte:
      "Accompagner les jeunes dans leur parcours vers l'emploi, la vie active et leur intégration dans la société.",
  },
  {
    image: jeune3,
    titre: 'Entrepreneuriat et initiatives locales',
    texte:
      "Encourager l'esprit entrepreneurial, soutenir les idées innovantes et accompagner les jeunes dans la concrétisation de leurs projets.",
  },
  {
    image: jeune4,
    titre: 'Développement communautaire',
    texte:
      'Encourager la participation active des jeunes aux initiatives qui contribuent au développement de leur commune.',
  },
]

const Acceuil = () => {
  return (
    <main className="bg-base-100">
      <section className="bg-base-200 py-14">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">
            Construisons ensemble l'avenir de la jeunesse !
          </h1>
          <p className="mt-4 italic opacity-80">
            « Fikambanana ho fampiroboroboana ny fampananan'asa, ny fampandrosoana ary ny
            fandraharahan'ny tanora. »
          </p>
          <p className="text-lg mt-6 max-w-3xl mx-auto">
            AIDE-J s'engage pour l'insertion, le développement et l'entrepreneuriat des jeunes à
            Antsirabe. Nous accompagnons les jeunes à travers la formation, le renforcement des
            compétences et l'encouragement à l'initiative entrepreneuriale afin de leur offrir de
            nouvelles perspectives d'avenir.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mt-8">
            <a href="/nos-actions" className="btn bg-info-content text-info">Découvrir nos actions</a>
            <a href="/contact" className="btn btn-outline">Rejoindre l'association</a>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center">Qui sommes-nous ?</h2>
        <p className="text-center mt-2 opacity-80">Une association engagée pour la jeunesse.</p>
        <p className="mt-6 max-w-3xl mx-auto text-center leading-relaxed">
          AIDE-J est une association qui œuvre pour l'épanouissement et l'autonomisation des jeunes
          de la Commune urbaine d'Antsirabe. Notre mission est de donner aux jeunes les moyens de
          développer leurs compétences, de découvrir leurs talents et de saisir les opportunités qui
          leur permettront de construire leur avenir.
        </p>
        <p className="mt-4 max-w-3xl mx-auto text-center leading-relaxed">
          À travers différentes initiatives, nous souhaitons contribuer à une jeunesse plus
          compétente, responsable, autonome et actrice du développement de sa communauté.
        </p>
        <div className="text-center mt-8">
          <a href="/a-propos" className="btn bg-info-content text-info">En savoir plus sur nous</a>
        </div>
      </section>

      <section className="bg-base-200 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center">
            Nos principaux domaines d'intervention
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {domaines.map((domaine) => (
              <div key={domaine.titre} className="card bg-base-100 shadow-md">
                <figure>
                  <img
                    src={domaine.image}
                    alt={domaine.titre}
                    className="w-full h-64 object-cover"
                  />
                </figure>
                <div className="card-body">
                  <h3 className="card-title text-lg">{domaine.titre}</h3>
                  <p>{domaine.texte}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold">Rejoignez-nous !</h2>
        <p className="mt-2 opacity-80">Votre avenir commence par une opportunité.</p>
        <p className="mt-6 max-w-3xl mx-auto leading-relaxed">
          Vous êtes un jeune d'Antsirabe et vous souhaitez apprendre, développer vos compétences ou
          concrétiser une idée de projet ? AIDE-J vous invite à rejoindre une communauté engagée
          pour construire un avenir meilleur.
        </p>
        <a href="/contact" className="btn bg-info-content text-info mt-8">Nous contacter</a>
      </section>
    </main>
  )
}

export default Acceuil
