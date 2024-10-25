// src/components/CarouselAds.jsx

import 'react';

const CarouselAds = () => {
  const ads = Array(6).fill("/assets/images/logoTFS.webp"); // Para múltiples imágenes

  return (
    <div className=".carousel-image-full-height mt-1">
      {/* Carrusel de Anuncios Publicitarios */}
      <div id="carouselAds" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {ads.map((ad, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <img
                src={ad}
                className="w-100 image-fluid"
                alt={`Publicidad ${index + 1}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselAds" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselAds" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default CarouselAds;


