import { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  const linkClass = ({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')

  return (
    <nav className={`site-nav${isOpen ? ' site-nav--open' : ''}`}>
      <button
        className="nav-toggle"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        &#9776;
      </button>
      <NavLink to="/" end className={linkClass} onClick={() => setIsOpen(false)}>
        Home
      </NavLink>
      <NavLink to="/projects" className={linkClass} onClick={() => setIsOpen(false)}>
        Projects
      </NavLink>
    </nav>
  )
}

export default Nav
