import { useState } from 'react'
import logo from '../assets/img/aide_j.png'

const liens = [
  { href: '/', label: 'Accueil' },
  { href: '/nos-actions', label: 'Nos actions' },
  { href: '/a-propos', label: 'À propos' },
  { href: '/contact', label: 'Contact' },
]

const NavBar = () => {
  const [ouvert, setOuvert] = useState(false)
  const path = window.location.pathname.replace(/\/+$/, '') || '/'

  return (
    <header className="bg-info-content text-info sticky top-0 z-50 shadow-md">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2">
          <a href="/" className="flex items-center gap-3" onClick={() => setOuvert(false)}>
            <img src={logo} alt="Logo AIDE-J" className="logo" />
            <span className="text-xl font-bold tracking-wide">AIDE-J</span>
          </a>

          <div className="hidden md:flex items-center gap-2">
            {liens.map((lien) => (
              <a
                key={lien.href}
                href={lien.href}
                className={`text-lg px-3 py-2 rounded-lg transition-colors hover:bg-info/15 ${
                  path === lien.href ? 'bg-info/20 font-semibold' : ''
                }`}
              >
                {lien.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            className="btn btn-ghost md:hidden"
            aria-label="Ouvrir le menu"
            aria-expanded={ouvert}
            onClick={() => setOuvert(!ouvert)}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {ouvert ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>

        {ouvert && (
          <div className="flex flex-col pb-3 md:hidden">
            {liens.map((lien) => (
              <a
                key={lien.href}
                href={lien.href}
                className={`px-3 py-2 rounded-lg text-lg hover:bg-info/15 ${
                  path === lien.href ? 'bg-info/20 font-semibold' : ''
                }`}
                onClick={() => setOuvert(false)}
              >
                {lien.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}

export default NavBar
