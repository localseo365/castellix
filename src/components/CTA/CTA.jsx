import React from 'react';
import './CTA.css';

const CTA = () => {
  const pasos = [
    {
      icono: "📋",
      titulo: "SOLICITAR PRESUPUESTO",
      descripcion: "Contacta con nosotros y recibe un presupuesto detallado sin compromiso"
    },
    {
      icono: "📦",
      titulo: "EMBALAMOS SUS MUEBLES",
      descripcion: "Protegemos tus pertenencias con materiales de primera calidad"
    },
    {
      icono: "🚛",
      titulo: "TRANSPORTE CON CUIDADO",
      descripcion: "Trasladamos tus muebles con la máxima seguridad y profesionalidad"
    },
    {
      icono: "🔧",
      titulo: "ENTREGA Y MONTAJE",
      descripcion: "Instalamos todo en tu nuevo hogar dejándolo listo para usar"
    }
  ];

  return (
    <section className="cta" id="cta">
      <div className="cta-contenedor">
        <div className="cta-pasos">
          {pasos.map((paso, index) => (
            <div key={index} className="paso-card">
              <div className="paso-icono">{paso.icono}</div>
              <h3>{paso.titulo}</h3>
              <p>{paso.descripcion}</p>
              {index < pasos.length - 1 && <div className="paso-flecha">→</div>}
            </div>
          ))}
        </div>
        
        <div className="cta-accion">
          <a href="#contacto" className="cta-boton">
            Solicitar Presupuesto Gratis
          </a>
          <p className="cta-nota">Sin compromiso · Respuesta en 24h</p>
        </div>
      </div>
    </section>
  );
};

export default CTA;