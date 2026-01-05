import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar({ theme, toggleTheme }) {
    const [menuOpen, setMenuOpen] = useState(false)
    const location = useLocation()

    const isActive = (path) => location.pathname === path

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/rooms', label: 'Rooms' },
        { path: '/events', label: 'Events & Venues' },
        { path: '/booking', label: 'Booking' },
        { path: '/about', label: 'About Us' },
        { path: '/contact', label: 'Contact' }
    ]

    return (
        <header>
            <nav className="navbar">
                <div className="container">
                    <Link to="/" className="logo">
                        <img src="/images/logo.png" alt="Janaki Star Hotel Logo" />
                        <span>Janaki Star Hotel</span>
                    </Link>

                    <ul className={`nav-menu ${menuOpen ? 'active' : ''}`} id="navMenu">
                        {navLinks.map(link => (
                            <li key={link.path}>
                                <Link
                                    to={link.path}
                                    className={isActive(link.path) ? 'active' : ''}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div
                        className={`hamburger ${menuOpen ? 'active' : ''}`}
                        id="hamburger"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <button
                        id="themeToggle"
                        className="theme-toggle"
                        aria-label="Toggle Dark Mode"
                        onClick={toggleTheme}
                    >
                        <i className={`fas ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`}></i>
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
