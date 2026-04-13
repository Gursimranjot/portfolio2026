import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useTheme, themes } from '../hooks/useTheme'
import { siteConfig } from '../data/config'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const location = useLocation()

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav className={scrolled ? 'scrolled' : ''}>
        <NavLink to="/" className="nav-logo">
          {siteConfig.name.split(' ')[0]}.
        </NavLink>

        {/* Desktop links */}
        <ul className="nav-links">
          {siteConfig.nav.map((item) => (
            <li key={item.href}>
              <NavLink to={item.href} className={({ isActive }) => isActive ? 'active' : ''}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {/* Theme switcher */}
          <div className="theme-switcher">
            {themes.map((t) => (
              <button
                key={t.id}
                className={`theme-btn ${theme === t.id ? 'active' : ''}`}
                onClick={() => setTheme(t.id)}
                title={t.title}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Hamburger — mobile only */}
          <button
            className="hamburger"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className={`ham-line ${menuOpen ? 'open' : ''}`} />
            <span className={`ham-line ${menuOpen ? 'open' : ''}`} />
            <span className={`ham-line ${menuOpen ? 'open' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile overlay menu */}
      <div className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`}>
        <div className="mobile-menu__inner">
          <nav className="mobile-menu__links">
            {siteConfig.nav.map((item, i) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  `mobile-menu__link ${isActive ? 'mobile-menu__link--active' : ''}`
                }
                style={{ animationDelay: `${i * 0.07 + 0.1}s` }}
              >
                <span className="mobile-menu__num">0{i + 1}</span>
                {item.label}
                <span className="mobile-menu__arrow">↗</span>
              </NavLink>
            ))}
          </nav>

          <div className="mobile-menu__footer">
            <a
              href={`mailto:${siteConfig.email}`}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 12,
                color: 'var(--text-secondary)',
                letterSpacing: '0.06em',
              }}
            >
              {siteConfig.email}
            </a>
            <div style={{ display: 'flex', gap: 16, marginTop: 16 }}>
              {Object.entries(siteConfig.links).map(([key, url]) => (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11,
                    color: 'var(--text-secondary)',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                  }}
                >
                  {key}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {menuOpen && (
        <div
          className="mobile-menu__backdrop"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  )
}
