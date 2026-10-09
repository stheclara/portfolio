import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light'
  })

  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  function toggleTheme() {
    setTheme((currentTheme) =>
      currentTheme === 'light' ? 'dark' : 'light'
    )
  }

  function toggleMenu() {
    setMenuOpen((currentMenu) => !currentMenu)
  }

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="navbar">
      <nav className="navbar-container">

        <NavLink
          to="/"
          className="logo"
          onClick={closeMenu}
        >
          ST.
        </NavLink>

        {/* MENU DO COMPUTADOR */}
        <div className="nav-links desktop-nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/sobre">Sobre</NavLink>
          <NavLink to="/projetos">Projetos</NavLink>
          <NavLink to="/tecnologias">Tecnologias</NavLink>
          <NavLink to="/contato">Contato</NavLink>

          <button
            className="theme-button"
            type="button"
            onClick={toggleTheme}
            aria-label={
              theme === 'light'
                ? 'Ativar modo escuro'
                : 'Ativar modo claro'
            }
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>

        {/* BOTÕES DO CELULAR */}
        <div className="mobile-actions">
          <button
            className="menu-button"
            type="button"
            onClick={toggleMenu}
            aria-label={
              menuOpen
                ? 'Fechar menu'
                : 'Abrir menu'
            }
            aria-expanded={menuOpen}
          >
            {menuOpen ? '✕' : '☰'}
          </button>

          <button
            className="theme-button"
            type="button"
            onClick={toggleTheme}
            aria-label={
              theme === 'light'
                ? 'Ativar modo escuro'
                : 'Ativar modo claro'
            }
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>

        {/* MENU ABERTO NO CELULAR */}
        <div
          className={`mobile-menu ${
            menuOpen ? 'mobile-menu-open' : ''
          }`}
        >
          <NavLink to="/" onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/sobre" onClick={closeMenu}>
            Sobre
          </NavLink>

          <NavLink to="/projetos" onClick={closeMenu}>
            Projetos
          </NavLink>

          <NavLink to="/tecnologias" onClick={closeMenu}>
            Tecnologias
          </NavLink>

          <NavLink to="/contato" onClick={closeMenu}>
            Contato
          </NavLink>
        </div>

      </nav>
    </header>
  )
}

export default Navbar