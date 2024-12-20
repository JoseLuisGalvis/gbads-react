// src/components/Aside.jsx

import 'react';

const Aside = () => {
  const ads = Array.from({ length: 8 }, (_, i) => ({
    src: 'assets/images/logoTFS.webp',
    alt: `Anuncio ${i + 1}`,
  }));

  return (
    <aside>
      <h3 className="text-dark text-center mt-1 mb-2" id="aside-title">Anuncios</h3>
      <div className="row">
        {ads.map((ad, index) => (
          <div className="col-12 col-sm-6 col-md-6 col-lg-12 mb-3" key={index} id="aside-ad">
            <img
              src={ad.src}
              className="img-fluid"
              id="ad-img"
              alt={ad.alt}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Aside;
