import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section id="servicios" className="servicios">
      <div className="servicios-features">
        <div className="feature-card">
          <span className="feature-icon">✓</span>
          <h3>Presupuesto sin compromiso</h3>
        </div>
        <div className="feature-card">
          <span className="feature-icon">🚛</span>
          <h3>Transporte asegurado</h3>
        </div>
        <div className="feature-card">
          <span className="feature-icon">👥</span>
          <h3>Personal cualificado</h3>
        </div>
      </div>

      <div className="servicios-container">
        <h2 className="servicios-titulo">Nuestros Servicios</h2>
        <div className="servicios-grid">
          <div className="servicio-card">
            <div className="servicio-icon">🏠</div>
            <h3>Mudanzas Locales</h3>
            <p>Realizamos mudanzas en Castelldefels y toda el área metropolitana de Barcelona. Nuestro servicio incluye embalaje profesional, desmontaje y montaje de muebles, y transporte seguro de todas tus pertenencias. Nos adaptamos a tus horarios y necesidades específicas para hacer tu mudanza lo más cómoda posible.</p>
          </div>

          <div className="servicio-card">
            <div className="servicio-icon">🏢</div>
            <h3>Mudanzas de Oficinas</h3>
            <p>Especialistas en traslado de oficinas y espacios comerciales, con experiencia en la gestión de equipos informáticos, mobiliario de oficina y documentación sensible. Trabajamos en horarios que minimicen el impacto en tu negocio, incluyendo noches y fines de semana. Organizamos cada aspecto para asegurar una transición fluida a tu nueva ubicación.</p>
          </div>

          <div className="servicio-card">
            <div className="servicio-icon">📦</div>
            <h3>Embalaje Profesional</h3>
            <p>Utilizamos materiales de primera calidad y técnicas especializadas para proteger tus objetos durante el traslado. Disponemos de cajas reforzadas, material de relleno, plástico de burbujas y embalajes específicos para objetos delicados como cuadros, espejos y elementos decorativos. Nos encargamos de todo el proceso de empaquetado para garantizar la seguridad de tus pertenencias.</p>
          </div>

          <div className="servicio-card">
            <div className="servicio-icon">🔧</div>
            <h3>Montaje de Muebles</h3>
            <p>Nuestro equipo de profesionales se encarga del desmontaje en origen y montaje en destino de todo tipo de muebles. Contamos con las herramientas adecuadas y la experiencia necesaria para manipular mobiliario de cualquier fabricante, incluyendo IKEA, y muebles a medida. Garantizamos un montaje perfecto y seguro en tu nuevo hogar.</p>
          </div>

          <div className="servicio-card">
            <div className="servicio-icon">🏪</div>
            <h3>Guardamuebles</h3>
            <p>Ofrecemos servicio de almacenamiento temporal en nuestras instalaciones vigiladas 24/7. Los espacios están climatizados y protegidos contra humedad e incendios. Disponemos de diferentes tamaños de almacenes para adaptarnos a tus necesidades, desde pequeños trasteros hasta grandes espacios para mudanzas completas. Acceso flexible a tus pertenencias cuando lo necesites.</p>
          </div>

          <div className="servicio-card">
            <div className="servicio-icon">🚚</div>
            <h3>Transporte Especializado</h3>
            <p>Disponemos de una flota de vehículos adaptados para todo tipo de mudanzas, desde furgonetas para pequeños traslados hasta camiones con plataforma elevadora. Todos nuestros vehículos están equipados con sistemas de sujeción, mantas protectoras y herramientas especializadas para el transporte seguro de objetos delicados, pianos, obras de arte y mobiliario de gran valor.</p>
          </div>
        </div>

        <div className="servicios-cta">
          <h3>¿Necesitas un servicio personalizado?</h3>
          <p>Contáctanos y te ayudaremos a planificar tu mudanza según tus necesidades específicas.</p>
          <a 
            href="https://wa.link/zdi29j"
            className="cta-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contactar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;