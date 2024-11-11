import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    closeMenu();
  };

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80; // altura aproximada del header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      closeMenu();
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <a href="#" onClick={scrollToTop}>
            Castellix
          </a>
        </div>

        <button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li>
              <a href="#" onClick={scrollToTop}>Inicio</a>
            </li>
            <li>
              <a href="#servicios" onClick={(e) => scrollToSection(e, 'servicios')}>
                Servicios
              </a>
            </li>
            <li>
              <a href="#testimonios" onClick={(e) => scrollToSection(e, 'testimonios')}>
                Testimonios
              </a>
            </li>
            <li>
              <a href="#contacto" onClick={(e) => scrollToSection(e, 'contacto')}>
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;