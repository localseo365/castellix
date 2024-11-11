import React, { useState, useEffect } from 'react';
import './CookieBanner.css';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Comprobar si el usuario ya aceptó las cookies
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (!cookiesAccepted) {
      setIsVisible(true);
    }
  }, []);

  useEffect(() => {
    // Añadir/remover clase cuando el banner está visible
    if (isVisible) {
      document.body.classList.add('cookie-banner-visible');
    } else {
      document.body.classList.remove('cookie-banner-visible');
    }

    return () => {
      document.body.classList.remove('cookie-banner-visible');
    };
  }, [isVisible]);

  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-banner">
      <div className="cookie-content">
        <div className="cookie-text">
          <span className="cookie-icon">🍪</span>
          <p>
            Utilizamos cookies propias y de terceros para mejorar nuestros servicios y mostrarle publicidad relacionada con sus preferencias mediante el análisis de sus hábitos de navegación.
            <a href="#politica-cookies" className="cookie-link">Ver política de cookies</a>
          </p>
        </div>
        <div className="cookie-buttons">
          <button 
            className="cookie-button accept"
            onClick={handleAccept}
          >
            Aceptar
          </button>
          <a 
            href="#configurar-cookies" 
            className="cookie-button configure"
          >
            Configurar
          </a>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;