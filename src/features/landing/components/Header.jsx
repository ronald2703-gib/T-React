import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const NAV_ITEMS = [
  { to: '/', label: 'Inicio', icon: 'bi-house-door', end: true },
  { to: '/Login', label: 'Ingresar', icon: 'bi-person-lock' },
  { to: '/apirick', label: 'API Rick & Morty', icon: 'bi-braces' },
];

export const Navbar = () => {
  // Estado para controlar la apertura del menú en dispositivos móviles
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  // Cierra el menú con la tecla Escape (accesibilidad por teclado)
  useEffect(() => {
    if (!isMenuOpen) return undefined;
    const onKeyDown = (e) => e.key === 'Escape' && setIsMenuOpen(false);
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isMenuOpen]);

  const getNavLinkClass = ({ isActive }) =>
    `nav-link site-navlink px-3 py-3 py-lg-2 rounded-3 fw-semibold d-flex align-items-center gap-2${
      isActive ? ' active' : ''
    }`;

  return (
    <header className="site-header sticky-top">
      <nav
        className="navbar navbar-expand-lg navbar-dark site-navbar border-bottom border-secondary border-opacity-25 shadow-sm"
        aria-label="Navegación principal"
      >
        <div className="container-fluid px-3 px-md-4">
          {/* LOGO + MARCA (un solo enlace al inicio) */}
          <Link
            to="/"
            className="navbar-brand d-flex align-items-center gap-2 m-0 text-uppercase text-white fw-extrabold"
            style={{ letterSpacing: '-0.8px' }}
            onClick={closeMenu}
            aria-label="XR&CRF Hub, ir al inicio"
          >
            <span className="brand-badge bg-white rounded-3 d-flex align-items-center justify-content-center shadow">
              <img src="/logo.png" alt="" width="28" height="21" decoding="async" />
            </span>
            <span>
              XR<span className="text-danger">&amp;</span>CRF
              <span className="brand-sub fs-6 fw-normal ms-1">Hub</span>
            </span>
          </Link>

          {/* BOTÓN HAMBURGUESA MÓVIL */}
          <button
            className="navbar-toggler border-0 d-flex align-items-center justify-content-center"
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="navbar-menu"
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            <i className={`bi ${isMenuOpen ? 'bi-x-lg' : 'bi-list'} fs-2`} aria-hidden="true"></i>
          </button>

          {/* MENÚ */}
          <div className={`collapse navbar-collapse${isMenuOpen ? ' show' : ''}`} id="navbar-menu">
            <ul className="navbar-nav align-items-lg-center gap-1 ms-auto pt-3 pt-lg-0">
              {NAV_ITEMS.map(({ to, label, icon, end }) => (
                <li className="nav-item" key={to}>
                  <NavLink to={to} end={end} className={getNavLinkClass} onClick={closeMenu}>
                    <i className={`bi ${icon}`} aria-hidden="true"></i> {label}
                  </NavLink>
                </li>
              ))}

              {/* BOTÓN DE ACCIÓN */}
              <li className="nav-item ms-lg-2 mt-2 mt-lg-0 pb-3 pb-lg-0">
                <Link
                  to="/Props"
                  onClick={closeMenu}
                  className="btn btn-danger btn-touch w-100 px-4 rounded-4 fw-bold shadow-sm d-flex align-items-center justify-content-center gap-2 text-uppercase"
                >
                  <i className="bi bi-plus-circle-fill" aria-hidden="true"></i> Props-EJ
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
