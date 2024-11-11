import React, { useState } from 'react';
import './Gallery.css';
import { galleryImages } from '../../utils/imageUrls';

const Galeria = () => {
  const [imagenSeleccionada, setImagenSeleccionada] = useState(null);

  return (
    <section className="galeria" id="galeria">
      <div className="galeria-contenedor">
        <h2>Nuestra Galería de Trabajos</h2>
        <div className="galeria-grid">
          {galleryImages.map((imagen, index) => (
            <div 
              key={index} 
              className="galeria-item"
              onClick={() => setImagenSeleccionada(imagen)}
            >
              <img src={imagen} alt={`Mudanzas trabajo ${index + 1}`} />
            </div>
          ))}
        </div>

        {/* Modal para ver imagen ampliada */}
        {imagenSeleccionada && (
          <div 
            className="galeria-modal"
            onClick={() => setImagenSeleccionada(null)}
          >
            <span className="cerrar-modal">&times;</span>
            <img src={imagenSeleccionada} alt="Imagen ampliada" />
          </div>
        )}
      </div>
    </section>
  );
};

export default Galeria;