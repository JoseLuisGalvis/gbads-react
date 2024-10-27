import 'react';
import logo from '/assets/images/logoService.png';

const Footer = () => {
  return (
    <footer className="mt-1 pb-2">
      <div className="container-fluid bg-dark">
        <div className="row">
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="footer_logo mt-2">
              <a href="#" className="d-flex align-items-center">
              <img src={logo} alt="Logo" className="mx-2 mb-3"
                  style={{ width: '150px', height: '110px' }}/>
              </a>
              <p className="text-white ps-3">Maximiza el Contacto con tus Clientes.</p>
            </div>

            <ul className="list-unstyled d-flex">
              <li className="me-2">
                <a
                  href="https://www.instagram.com/galvis_technology/"
                  className="text-icon text-decoration-none"
                >
                  <i className="ri-instagram-fill text-white fs-2"></i>
                </a>
              </li>
              <li className="me-2">
                <a href="https://www.facebook.com/" className="text-icon text-decoration-none">
                  <i className="ri-facebook-fill text-white fs-2"></i>
                </a>
              </li>
              <li className="me-2">
                <a href="https://x.com/" className="text-icon text-decoration-none">
                  <i className="ri-twitter-fill text-white fs-2"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/" className="text-icon text-decoration-none">
                  <i className="ri-linkedin-fill text-white fs-2"></i>
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-4 mb-3 mb-md-0">
            <h4 className="text-white ps-3">Mapa</h4>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63755.93935868727!2d7.630539663097868!3d45.07279181368801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47886d126418be25%3A0x8903f803d69c77bf!2zVHVyw61uLCBJdGFsaWE!5e0!3m2!1ses!2sar!4v1727995709528!5m2!1ses!2sar"
              className="w-100 ps-1"
              height="220"
              style={{ border: '0' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="col-md-4">
            <h4 className="text-white ps-3">Contacto</h4>
            <div className="ps-3">
              <i className="text-white fa fa-home fs-5"></i>
              <p className="text-white d-inline-block ms-2">Ubicación:</p>
              <p className="text-white d-inline-block ms-1">GBA - Argentina</p>
              <br />
              <i className="text-white fa fa-envelope fs-5"></i>
              <p className="text-white d-inline-block ms-2">Correo Electrónico:</p>
              <p className="text-white d-inline-block ms-1">GBAds@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-dark text-white text-center py-2">
        <p>&copy; 2024 Servicios Clasificados. Todos los Derechos Reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
