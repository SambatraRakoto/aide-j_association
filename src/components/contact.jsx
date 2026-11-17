import { useState } from 'react'

const EMAIL = 'contact@aide-j.mg'

const Contact = () => {
  const [formulaire, setFormulaire] = useState({ nom: '', email: '', sujet: '', message: '' })

  const changer = (event) => {
    setFormulaire({ ...formulaire, [event.target.name]: event.target.value })
  }

  const envoyer = (event) => {
    event.preventDefault()
    const sujet = encodeURIComponent(formulaire.sujet || 'Message depuis le site AIDE-J')
    const corps = encodeURIComponent(
      `Nom : ${formulaire.nom}\nEmail : ${formulaire.email}\n\n${formulaire.message}`,
    )
    window.location.href = `mailto:${EMAIL}?subject=${sujet}&body=${corps}`
  }

  return (
    <main className="bg-base-100">
      <section className="bg-base-200 py-14">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">Contactez AIDE-J</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg">
            Une question, une idée de projet ou l'envie de rejoindre l'association ? Écrivez-nous,
            nous vous répondrons avec plaisir.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="space-y-6">
            <div className="card bg-base-200 shadow-md">
              <div className="card-body">
                <h2 className="card-title">Nos coordonnées</h2>
                <p>
                  <span className="font-semibold">Adresse</span>
                  <br />
                  Antsirabe, Vakinankaratra
                  <br />
                  Madagascar
                </p>
                <p>
                  <span className="font-semibold">Email</span>
                  <br />
                  <a href={`mailto:${EMAIL}`} className="link link-primary">
                    {EMAIL}
                  </a>
                </p>
              </div>
            </div>
            <div className="card bg-base-200 shadow-md">
              <div className="card-body">
                <h2 className="card-title">Rejoindre l'association</h2>
                <p className="text-sm">
                  Les jeunes d'Antsirabe qui souhaitent se former, développer leurs compétences ou
                  concrétiser une idée de projet sont les bienvenus.
                </p>
                <a href="/nos-actions" className="btn bg-info-content text-info btn-sm mt-2">
                  Voir nos actions
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={envoyer} className="card bg-base-200 shadow-md lg:col-span-2">
            <div className="card-body">
              <h2 className="card-title">Envoyer un message</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <label className="block w-full">
                  <span className="block mb-1 text-sm font-medium">Nom complet</span>
                  <input
                    type="text"
                    name="nom"
                    required
                    value={formulaire.nom}
                    onChange={changer}
                    placeholder="Votre nom"
                    className="input input-bordered w-full"
                  />
                </label>
                <label className="block w-full">
                  <span className="block mb-1 text-sm font-medium">Email</span>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formulaire.email}
                    onChange={changer}
                    placeholder="vous@exemple.com"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <label className="block w-full mt-4">
                <span className="block mb-1 text-sm font-medium">Sujet</span>
                <input
                  type="text"
                  name="sujet"
                  value={formulaire.sujet}
                  onChange={changer}
                  placeholder="Objet de votre message"
                  className="input input-bordered w-full"
                />
              </label>
              <label className="block w-full mt-4">
                <span className="block mb-1 text-sm font-medium">Message</span>
                <textarea
                  name="message"
                  required
                  rows="6"
                  value={formulaire.message}
                  onChange={changer}
                  placeholder="Votre message"
                  className="textarea textarea-bordered w-full"
                />
              </label>
              <div className="card-actions mt-4">
                <button type="submit" className="btn bg-info-content text-info">
                  Envoyer
                </button>
              </div>
              <p className="text-xs opacity-70 mt-2">
                L'envoi ouvre votre logiciel de messagerie avec le message pré-rempli.
              </p>
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}

export default Contact
