import React from 'react';
import './Testimonials.css';

const Testimonios = () => {
  const testimonios = [
    {
      nombre: "María García",
      ubicacion: "Castelldefels",
      texto: "Excelente servicio de mudanza. El equipo fue muy profesional y cuidadoso con todos nuestros muebles. Cumplieron con el tiempo establecido y el precio fue muy razonable. Los recomiendo totalmente para cualquier tipo de mudanza.",
      imagen: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300",
      valoracion: 5
    },
    {
      nombre: "Carlos Rodríguez",
      ubicacion: "Barcelona",
      texto: "Contraté a Castellix para una mudanza de oficina y quedé muy satisfecho. Son puntuales, organizados y muy profesionales. El proceso fue muy sencillo y todo llegó en perfecto estado. Una empresa de confianza.",
      imagen: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300",
      valoracion: 5
    },
    {
      nombre: "Laura Martínez",
      ubicacion: "Gavà",
      texto: "Mi experiencia con Castellix fue inmejorable. El equipo fue muy amable y profesional. Se ocuparon de todo, desde el embalaje hasta el montaje en mi nuevo hogar. Los precios son muy competitivos y el servicio es excelente.",
      imagen: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300",
      valoracion: 5
    }
  ];

  const renderEstrellas = (valoracion) => {
    return "⭐".repeat(valoracion);
  };

  return (
    <section className="testimonios" id="testimonios">
      <div className="testimonios-contenedor">
        <h2 className="testimonios-titulo">Lo que dicen nuestros clientes</h2>
        <p className="testimonios-subtitulo">Opiniones verificadas de clientes satisfechos</p>
        
        <div className="testimonios-grid">
          {testimonios.map((testimonio, index) => (
            <div key={index} className="testimonio-card">
              <div className="testimonio-imagen">
                <img src={testimonio.imagen} alt={testimonio.nombre} />
              </div>
              <div className="testimonio-contenido">
                <div className="estrellas">
                  {renderEstrellas(testimonio.valoracion)}
                </div>
                <p className="testimonio-texto">"{testimonio.texto}"</p>
                <div className="testimonio-autor">
                  <h3>{testimonio.nombre}</h3>
                  <p>{testimonio.ubicacion}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonios-cta">
          <p>¿Has trabajado con nosotros? Déjanos tu opinión</p>
          <a href="#contacto" className="boton-opinion">Escribir opinión</a>
        </div>
      </div>
    </section>
  );
};

export default Testimonios;