import React, { useState, useEffect } from 'react'
import './Navbar.css'
import { Link } from 'react-scroll'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-logo">
        <h2>Portfolio</h2>
      </div>
      
      <div className={`menu ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <Link to="home" smooth={true} duration={800} onClick={() => setMenuOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={800} onClick={() => setMenuOpen(false)}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={800} onClick={() => setMenuOpen(false)}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={800} onClick={() => setMenuOpen(false)}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={800} onClick={() => setMenuOpen(false)}>
            Contact me
          </Link>
        </li>
      </ul>
      
      {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)}></div>}
    </div>
  )
}