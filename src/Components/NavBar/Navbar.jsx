import React, { useState } from 'react'
import './Navbar.css'
import {Link} from 'react-scroll'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <div className='navbar'>
        <h2>Portfolio</h2>
          <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={menuOpen ? "open" : ""}>
            <li><Link to="home" smooth={true} duration={1000} onClick={() => setMenuOpen(!menuOpen)}>Home</Link></li>
            <li><Link to="about" smooth={true} duration={1000} onClick={() => setMenuOpen(!menuOpen)}>About</Link></li>
            <li><Link to="skills" smooth={true} duration={1000} onClick={() => setMenuOpen(!menuOpen)}>Skills</Link></li>
            <li><Link to="projects" smooth={true} duration={1000} onClick={() => setMenuOpen(!menuOpen)}>Projects</Link></li>
            <li><Link to="contact" smooth={true} duration={1000} onClick={() => setMenuOpen(!menuOpen)}>Contact me</Link></li>
          </ul>
    </div>
  ) 
}