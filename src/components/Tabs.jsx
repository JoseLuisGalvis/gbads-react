// src/components/Tabs.jsx

import { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const categories = [
  {
    id: 'Albañilería',
    title: 'Albañilería',
    images: [
      'assets/images/albanil.webp',
      'assets/images/albanil.webp',
      'assets/images/albanil.webp',
      'assets/images/albanil.webp',
      'assets/images/albanil.webp',
      'assets/images/albanil.webp',
      'assets/images/albanil.webp',
      'assets/images/albanil.webp',
      'assets/images/albanil.webp',
      'assets/images/albanil.webp',
      'assets/images/albanil.webp',
      'assets/images/albanil.webp',
      'assets/images/albanil.webp',
      'assets/images/albanil.webp',
      'assets/images/albanil.webp' 
    ],
  },
  {
    id: 'Carpintería',
    title: 'Carpintería',
    images: [
      'assets/images/carpintero.webp',
      'assets/images/carpintero.webp',
      'assets/images/carpintero.webp',
      'assets/images/carpintero.webp',
      'assets/images/carpintero.webp',
      'assets/images/carpintero.webp',
      'assets/images/carpintero.webp',
      'assets/images/carpintero.webp',
      'assets/images/carpintero.webp',
      'assets/images/carpintero.webp',
      'assets/images/carpintero.webp',
      'assets/images/carpintero.webp',
      'assets/images/carpintero.webp',
      'assets/images/carpintero.webp',
      'assets/images/carpintero.webp'
    ],
  },
  // Añade más categorías aquí... 
  {
    id: 'Cerrajeria',
    title: 'Cerrajeria',
    images: [
        'assets/images/albanil.webp',
        'assets/images/albanil.webp',
        'assets/images/albanil.webp',
        'assets/images/albanil.webp',
        'assets/images/albanil.webp',
        'assets/images/albanil.webp',
        'assets/images/albanil.webp',
        'assets/images/albanil.webp',
        'assets/images/albanil.webp',
        'assets/images/albanil.webp',
        'assets/images/albanil.webp',
        'assets/images/albanil.webp',
        'assets/images/albanil.webp',
        'assets/images/albanil.webp',
        'assets/images/albanil.webp' 
    ],
  },
  {
    id: 'Electricistas',
    title: 'Electricistas',
    images: [
        'assets/images/carpintero.webp',
        'assets/images/carpintero.webp',
        'assets/images/carpintero.webp',
        'assets/images/carpintero.webp',
        'assets/images/carpintero.webp',
        'assets/images/carpintero.webp',
        'assets/images/carpintero.webp',
        'assets/images/carpintero.webp',
        'assets/images/carpintero.webp',
        'assets/images/carpintero.webp',
        'assets/images/carpintero.webp',
        'assets/images/carpintero.webp',
        'assets/images/carpintero.webp',
        'assets/images/carpintero.webp',
        'assets/images/carpintero.webp'
    ],
  },
  {
    id: 'Gasistas',
    title: 'Gasistas',
    images: [
        'assets/images/albanil.webp',
        'assets/images/albanil.webp',
        'assets/images/albanil.webp',
        'assets/images/albanil.webp',
        'assets/images/albanil.webp',
        'assets/images/albanil.webp',
        'assets/images/albanil.webp',
        'assets/images/albanil.webp',
        'assets/images/albanil.webp',
        'assets/images/albanil.webp',
        'assets/images/albanil.webp',
        'assets/images/albanil.webp',
        'assets/images/albanil.webp',
        'assets/images/albanil.webp',
        'assets/images/albanil.webp' 
    ],
  },
  {
    id: 'Jardineria',
    title: 'Jardineria',
    images: [
        'assets/images/carpintero.webp',
        'assets/images/carpintero.webp',
        'assets/images/carpintero.webp',
        'assets/images/carpintero.webp',
        'assets/images/carpintero.webp',
        'assets/images/carpintero.webp',
        'assets/images/carpintero.webp',
        'assets/images/carpintero.webp',
        'assets/images/carpintero.webp',
        'assets/images/carpintero.webp',
        'assets/images/carpintero.webp',
        'assets/images/carpintero.webp',
        'assets/images/carpintero.webp',
        'assets/images/carpintero.webp',
        'assets/images/carpintero.webp'
    ],
  },
  {
    id: 'Mudanzas',
    title: 'Mudanzas',
    images: [
        'assets/images/albanil.webp',
        'assets/images/albanil.webp',
        'assets/images/albanil.webp',
        'assets/images/albanil.webp',
        'assets/images/albanil.webp',
        'assets/images/albanil.webp',
        'assets/images/albanil.webp',
        'assets/images/albanil.webp',
        'assets/images/albanil.webp',
        'assets/images/albanil.webp',
        'assets/images/albanil.webp',
        'assets/images/albanil.webp',
        'assets/images/albanil.webp',
        'assets/images/albanil.webp',
        'assets/images/albanil.webp' 
    ],
  },
  {
    id: 'Pintores',
    title: 'Pintores',
    images: [
        'assets/images/carpintero.webp',
        'assets/images/carpintero.webp',
        'assets/images/carpintero.webp',
        'assets/images/carpintero.webp',
        'assets/images/carpintero.webp',
        'assets/images/carpintero.webp',
        'assets/images/carpintero.webp',
        'assets/images/carpintero.webp',
        'assets/images/carpintero.webp',
        'assets/images/carpintero.webp',
        'assets/images/carpintero.webp',
        'assets/images/carpintero.webp',
        'assets/images/carpintero.webp',
        'assets/images/carpintero.webp',
        'assets/images/carpintero.webp'
    ],
  },
  {
    id: 'Plomeria',
    title: 'Plomeria',
    images: [
        'assets/images/albanil.webp',
        'assets/images/albanil.webp',
        'assets/images/albanil.webp',
        'assets/images/albanil.webp',
        'assets/images/albanil.webp',
        'assets/images/albanil.webp',
        'assets/images/albanil.webp',
        'assets/images/albanil.webp',
        'assets/images/albanil.webp',
        'assets/images/albanil.webp',
        'assets/images/albanil.webp',
        'assets/images/albanil.webp',
        'assets/images/albanil.webp',
        'assets/images/albanil.webp',
        'assets/images/albanil.webp' 
    ],
  },
  {
    id: 'Zapateria',
    title: 'Zapateria',
    images: [
        'assets/images/carpintero.webp',
        'assets/images/carpintero.webp',
        'assets/images/carpintero.webp',
        'assets/images/carpintero.webp',
        'assets/images/carpintero.webp',
        'assets/images/carpintero.webp',
        'assets/images/carpintero.webp',
        'assets/images/carpintero.webp',
        'assets/images/carpintero.webp',
        'assets/images/carpintero.webp',
        'assets/images/carpintero.webp',
        'assets/images/carpintero.webp',
        'assets/images/carpintero.webp',
        'assets/images/carpintero.webp',
        'assets/images/carpintero.webp'
    ],
  }
];

const Tabs = () => {
    const [activeTab, setActiveTab] = useState(categories[0].id);
  
    return (
      <div>
        <h4 className="text-dark mt-4" id="ads">Anuncios por Categoría</h4>
        <a
          href="#navbar"
          className="btn btn-primary my-2 btn-proyectos text-center"
        >
          Ir al Inicio
        </a>
        <ul className="nav nav-tabs">
          {categories.map((category) => (
            <li className="nav-item" key={category.id}>
              <button
                className={`nav-link ${activeTab === category.id ? 'active' : ''}`}
                onClick={() => setActiveTab(category.id)}
                role="tab"
              >
                {category.title}
              </button>
            </li>
          ))}
        </ul>
  
        <div className="tab-content mt-3">
          {categories.map((category) => (
            <div
              className={`tab-pane fade ${activeTab === category.id ? 'show active' : ''}`}
              id={category.id}
              role="tabpanel"
              key={category.id}
            >
            <div className="row d-flex justify-content-center">
              {category.images.map((src, index) => (
                <div id="pestaña" className="col-12 mb-3" key={index}>
                  <div className="card w-100">
                    {/* Parte Superior: Logo */}
                    <div className="d-flex justify-content-center">
                      <LazyLoadImage
                        src={src}
                        alt={`${category.title} Logo`}
                        effect="blur"
                        className="card-img-top img-fluid"
                        style={{ maxHeight: '150px', width: 'auto' }}
                      />
                    </div>
                    {/* Parte Inferior: Información */}
                    <div className="card-body">
                      <h5 className="card-title">Nombre: Tus Zapatos Listos</h5>
                      <p className="card-text">Dirección: Av. Rodriguez Peña 1160 Saenz Peña 3 de Febrero PBA</p>
                      <p className="card-text">WhatsApp: +123456789</p>
                      <p className="card-text">Instagram: @ejemplo</p>
                      <p className="card-text">Correo: ejemplo@correo.com</p>
                      <button className="btn btn-primary">Evaluar</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Tabs;

