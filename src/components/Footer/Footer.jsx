import React from 'react';
import './Footer.css';

const Footer = () => {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="footer-contenedor">
        <div className="footer-grid">
          {/* Información de la empresa */}
          <div className="footer-seccion">
            <h3>Castellix Mudanzas</h3>
            <p>Servicios profesionales de mudanzas en Castelldefels y alrededores. Más de 10 años de experiencia nos avalan.</p>
            <div className="footer-contacto">
              <p>📞 <a href="tel:+34690220944">690 22 09 44</a></p>
              <p>✉️ <a href="mailto:info@castellix.vercel.app">info@castellix.vercel.app</a></p>
            </div>
          </div>

          {/* Servicios */}
          <div className="footer-seccion">
            <h4>Nuestros Servicios</h4>
            <ul>
              <li><a href="#servicios" onClick={(e) => scrollToSection(e, 'servicios')}>Mudanzas Locales</a></li>
              <li><a href="#servicios" onClick={(e) => scrollToSection(e, 'servicios')}>Mudanzas de Oficinas</a></li>
              <li><a href="#servicios" onClick={(e) => scrollToSection(e, 'servicios')}>Guardamuebles</a></li>
              <li><a href="#servicios" onClick={(e) => scrollToSection(e, 'servicios')}>Embalaje Profesional</a></li>
              <li><a href="#servicios" onClick={(e) => scrollToSection(e, 'servicios')}>Montaje de Muebles</a></li>
            </ul>
          </div>

          {/* Enlaces útiles */}
          <div className="footer-seccion">
            <h4>Enlaces Útiles</h4>
            <ul>
              <li><a href="#inicio" onClick={scrollToTop}>Inicio</a></li>
              <li><a href="#servicios" onClick={(e) => scrollToSection(e, 'servicios')}>Servicios</a></li>
              <li><a href="#testimonios" onClick={(e) => scrollToSection(e, 'testimonios')}>Testimonios</a></li>
              <li><a href="#contacto" onClick={(e) => scrollToSection(e, 'contacto')}>Contacto</a></li>
            </ul>
          </div>

          {/* Horario y ubicación */}
          <div className="footer-seccion">
            <h4>Horario de Atención</h4>
            <p>Lunes a Viernes: 8:00 - 20:00</p>
            <p>Sábados: 9:00 - 14:00</p>
            <p>Domingos: Cerrado</p>
            <div className="footer-ubicacion">
              <h4>Ubicación</h4>
              <p>Castelldefels, Barcelona</p>
              <p>Servicio en toda el área metropolitana</p>
            </div>
          </div>
        </div>

        {/* Redes sociales */}
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">Instagram</a>
          <a href="https://wa.me/34690220944" target="_blank" rel="noopener noreferrer" className="social-icon">WhatsApp</a>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Castellix Mudanzas. Todos los derechos reservados.</p>
          <div className="footer-legal">
            <a href="/privacidad" onClick={(e) => e.preventDefault()}>Política de Privacidad</a>
            <a href="/cookies" onClick={(e) => e.preventDefault()}>Política de Cookies</a>
            <a href="/legal" onClick={(e) => e.preventDefault()}>Aviso Legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;