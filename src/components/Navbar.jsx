// src/components/Navbar.jsx

import { useState, useEffect } from 'react';
import '../App.css';
import logo from '/assets/images/logoService.png';

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [isNavCollapsed, setIsNavCollapsed] = useState(true); // Estado para controlar el colapso

  useEffect(() => {
    // Aplicar el tema al cargar el componente
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // Alternar el colapso de la barra de navegación
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-lg transition-colors duration-300 dark:bg-gray-800 bg-dark" id="navbar">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Logo" />
          <span className="text-white">GBAds</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isNavCollapsed ? '' : 'show'}`} id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active text-white dark:hover:text-gray-300" href="#" onClick={handleNavCollapse}>
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white dark:hover:text-gray-300" href="#ads" onClick={handleNavCollapse}>
                Anuncios
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white dark:hover:text-gray-300" href="#contacto" onClick={handleNavCollapse}>
                Contacto
              </a>
            </li>
          </ul>
        </div>

        {/* Contenedor flexbox para el loader y el botón de modo oscuro */}
        <div className="d-flex align-items-center justify-content-end w-100">
          <div className="loader d-flex align-items-center">
            <h2 className="mt-1 px-1 text-white" id="advertising">Publicidad para:</h2>
          </div>
          <button
            onClick={toggleTheme}
            className="theme-toggle-button p-2 rounded-full bg-orange-500 dark:bg-white hover:bg-orange-600 dark:hover:bg-gray-200 transition-colors duration-200 ms-2"
            aria-label="Toggle theme"
            id="dark-button"
          >
            {theme === 'light' ? (
              <i className="fas fa-moon text-dark dark:text-gray-800"></i>
            ) : (
              <i className="fas fa-sun text-dark dark:text-gray-800"></i>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



