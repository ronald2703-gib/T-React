import { Link } from 'react-router-dom';

const SUPPORT_LINKS = [
  { to: '/asistencia', label: 'Asistencia', icon: 'bi-headset' },
  { to: '/reportes', label: 'Reportes', icon: 'bi-exclamation-triangle' },
  { to: '/ayuda', label: 'Ayuda', icon: 'bi-question-circle' },
];

// TODO: reemplaza por los perfiles reales de la comunidad
const SOCIAL_LINKS = [
  { href: 'https://www.instagram.com/', label: 'Instagram', icon: 'bi-instagram' },
  { href: 'https://www.youtube.com/', label: 'YouTube', icon: 'bi-youtube' },
  { href: 'https://www.facebook.com/', label: 'Facebook', icon: 'bi-facebook' },
];

export const Footer = () => {
  return (
    <footer className="bg-white border-top py-4 py-md-5">
      <div className="container" style={{ maxWidth: '1200px' }}>
        {/* BLOQUE SUPERIOR */}
        <div className="row align-items-center g-3 g-md-4 justify-content-between pb-3 pb-md-4 border-bottom">
          <div className="col-12 col-md-6 text-center text-md-start">
            <p className="m-0 h5 text-dark fw-bold text-uppercase" style={{ letterSpacing: '-0.5px' }}>
              <i className="bi bi-lightning-charge-fill text-danger me-1" aria-hidden="true"></i>
              XR<span className="text-danger">&amp;</span>CRF
              <span className="fs-6 text-body-secondary fw-normal ms-1">Hub</span>
            </p>
            <p className="m-0 mt-1 text-body-secondary small">
              Comunidad off-road y control inteligente de fichas técnicas para motocicletas.
            </p>
          </div>

          <nav className="col-12 col-md-6" aria-label="Enlaces de soporte">
            <ul className="list-unstyled d-flex flex-wrap justify-content-center justify-content-md-end gap-1 gap-sm-3 m-0">
              {SUPPORT_LINKS.map(({ to, label, icon }) => (
                <li key={to}>
                  <Link to={to} className="footer-link">
                    <i className={`bi ${icon}`} aria-hidden="true"></i> {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* CRÉDITOS Y REDES */}
        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center pt-3 pt-md-4 gap-2 text-body-secondary small">
          <p className="m-0 text-center text-sm-start">
            &copy; {new Date().getFullYear()} <strong className="text-dark text-uppercase">MOTUShonda</strong>.
            Diseñado con total elegancia y minimalismo.
          </p>

          <ul className="list-unstyled d-flex m-0">
            {SOCIAL_LINKS.map(({ href, label, icon }) => (
              <li key={label}>
                <a
                  href={href}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${label} (se abre en una pestaña nueva)`}
                >
                  <i className={`bi ${icon}`} aria-hidden="true"></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
