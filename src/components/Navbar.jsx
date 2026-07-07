import { useState, useEffect } from 'react'
import { X } from './Icons'

const navItems = [
  { id: 'home', label: 'Home', icon: null },
  { id: 'about', label: 'About', icon: null },
  { id: 'skills', label: 'Skills', icon: null },
  { id: 'projects', label: 'Projects', icon: null },
  { id: 'achievements', label: 'Achievements', icon: null },
]

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container navbar-inner">
        <a className="navbar-logo" onClick={() => scrollTo('home')} style={{ cursor: 'pointer' }}>
          JT
        </a>

        <ul className={`navbar-links${menuOpen ? ' open' : ''}`}>
          {navItems.map(item => (
            <li key={item.id}>
              <a
                onClick={() => scrollTo(item.id)}
                className={activeSection === item.id ? 'active' : ''}
                style={{ cursor: 'pointer' }}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a onClick={() => scrollTo('contact')} className="navbar-cta" style={{ cursor: 'pointer' }}>
              Contact
            </a>
          </li>
        </ul>

        <div className="hamburger" onClick={() => setMenuOpen(v => !v)} aria-label="Toggle menu">
          {menuOpen ? <X size={20} /> : <>
            <span /><span /><span />
          </>}
        </div>
      </div>
    </nav>
  )
}
