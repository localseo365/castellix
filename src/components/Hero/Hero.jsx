import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="inicio" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Mudanzas profesionales en Castelldefels</h1>
          <p className="hero-subtitle">
            Más de 10 años de experiencia haciendo mudanzas seguras y eficientes
          </p>
          <div className="hero-buttons">
            <a 
              href="https://wa.link/zdi29j" 
              className="hero-button primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Solicitar Presupuesto
            </a>
            <a 
              href="https://wa.link/zdi29j" 
              className="hero-button secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;