import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contacto" className="contacto">
      <div className="contacto-contenedor">
        <h2 className="contacto-titulo">Contacta con Nosotros</h2>
        <p className="contacto-subtitulo">Estamos aquí para ayudarte con tu mudanza</p>

        <div className="contacto-grid">
          {/* Información de contacto */}
          <div className="contacto-info">
            <div className="info-item">
              <div className="info-icon">📞</div>
              <div className="info-contenido">
                <h3>Teléfono</h3>
                <a href="tel:+34690220944">690 22 09 44</a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📍</div>
              <div className="info-contenido">
                <h3>Dirección</h3>
                <p>Carrer de l'Església</p>
                <p>08860 Castelldefels</p>
                <p>Barcelona</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">✉️</div>
              <div className="info-contenido">
                <h3>Email</h3>
                <a href="mailto:info@castellix.vercel.app">info@castellix.vercel.app</a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">🕒</div>
              <div className="info-contenido">
                <h3>Horario</h3>
                <p>Lunes a Viernes: 8:00 - 20:00</p>
                <p>Sábados: 9:00 - 14:00</p>
                <p>Domingos: Cerrado</p>
              </div>
            </div>
          </div>

          {/* Mapa de Google */}
          <div className="contacto-mapa">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.6876421932824!2d1.9762893!3d41.280056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a482cac96d432f%3A0x675b2ba7d9a91f35!2sCarrer%20de%20l&#39;Esgl%C3%A9sia%2C%2008860%20Castelldefels%2C%20Barcelona!5e0!3m2!1ses!2ses!4v1709835058037!5m2!1ses!2ses"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Castellix"
            ></iframe>
          </div>
        </div>

        {/* Botones de acción rápida */}
        <div className="contacto-acciones">
          <a href="tel:+34690220944" className="accion-boton llamar">
            <span>📞</span> Llamar ahora
          </a>
          <a href="https://wa.me/34690220944" className="accion-boton whatsapp" target="_blank" rel="noopener noreferrer">
            <span>💬</span> WhatsApp
          </a>
          <a href="mailto:info@castellix.vercel.app" className="accion-boton email">
            <span>✉️</span> Enviar email
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;