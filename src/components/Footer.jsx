const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-info-content text-info p-8 mt-12">
      <aside className="max-w-sm">
        <p className="text-lg font-bold">AIDE-J</p>
        <p className="text-sm opacity-80">
          Association pour l'insertion, le développement et l'entrepreneuriat des jeunes de la
          Commune urbaine d'Antsirabe, Madagascar.
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Navigation</h6>
        <a href="/" className="link link-hover">Accueil</a>
        <a href="/nos-actions" className="link link-hover">Nos actions</a>
        <a href="/a-propos" className="link link-hover">À propos</a>
        <a href="/contact" className="link link-hover">Contact</a>
      </nav>
      <nav>
        <h6 className="footer-title">Nos domaines</h6>
        <span className="text-sm opacity-80">Formation</span>
        <span className="text-sm opacity-80">Insertion professionnelle</span>
        <span className="text-sm opacity-80">Entrepreneuriat</span>
        <span className="text-sm opacity-80">Développement communautaire</span>
      </nav>
      <nav>
        <h6 className="footer-title">Contact</h6>
        <span className="text-sm opacity-80">Antsirabe, Madagascar</span>
        <a href="mailto:contact@aide-j.mg" className="link link-hover text-sm">contact@aide-j.mg</a>
      </nav>
      <div className="w-full border-t border-info/30 pt-4 text-center sm:text-left">
        <p className="text-sm opacity-70">
          Copyright © {new Date().getFullYear()} AIDE-J — Tous droits réservés.
        </p>
      </div>
    </footer>
  )
}

export default Footer
