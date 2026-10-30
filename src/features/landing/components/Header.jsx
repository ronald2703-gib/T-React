import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const navigate = useNavigate();
  
  // Estado para controlar la apertura del menú en dispositivos móviles
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Función de React Router adaptada para el estilo oscuro
  const getNavLinkClass = ({ isActive }) => {
    return `nav-link px-3 py-2 rounded-3 fw-semibold d-flex align-items-center gap-2 transition-all ${
      isActive ? 'text-danger bg-danger bg-opacity-10 fw-bold' : 'text-white-50 text-hover-white'
    }`;
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top border-bottom border-secondary border-opacity-25 shadow-sm" style={{ backdropFilter: 'blur(10px)', backgroundColor: 'rgba(26, 26, 26, 0.95)' }}>
      <div className="container-fluid px-3 px-md-4">
        
        {/* SECCIÓN LOGO */}
        <div className="d-flex align-items-center">
          <div className="bg-danger text-white p-2 rounded-3 d-flex align-items-center justify-content-center me-2 shadow" style={{ width: '40px', height: '40px' }}>
            <i className="fa-solid fa-motorcycle fs-5"></i>
          </div>
          <NavLink to="/" className="navbar-brand m-0 fw-black text-uppercase text-white" style={{ fontWeight: '800', letterSpacing: '-0.8px' }} onClick={() => setIsMobileMenuOpen(false)}>
            XR<span className="text-danger">&</span>CRF<span className="fs-6 text-secondary fw-normal ms-1">Hub</span>
          </NavLink>
        </div>

        {/* BOTÓN HAMBURGUESA MÓVIL */}
        <button 
          className="navbar-toggler border-0 shadow-none text-white" 
          type="button" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle navigation"
        >
          <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark fs-3' : 'fa-bars fs-3'}`}></i>
        </button>

        {/* MENÚ DE NAVEGACIÓN COMPLETO */}
        <div className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show mt-3 mt-lg-0' : ''}`} id="navbarMotos">
          
          {/* ENLACES DERECHA */}
          <ul className="navbar-nav align-items-lg-center gap-1 ms-auto w-100 justify-content-end">
            <li className="nav-item">
              <NavLink to="/" className={getNavLinkClass} onClick={() => setIsMobileMenuOpen(false)}>
                <i className="fa-solid fa-house" style={{ fontSize: '14px' }}></i> Inicio
              </NavLink>
            </li>

            {/* ENLACE DE INICIO DE SESIÓN CONECTADO */}
            <li className="nav-item">
              <NavLink to="/Login" className={getNavLinkClass} onClick={() => setIsMobileMenuOpen(false)}>
                <i className="fa-solid fa-user-lock" style={{ fontSize: '14px' }}></i> Ingresar
              </NavLink>
            </li>
            {/* ENLACE DE INICIO DE SESIÓN CONECTADO */}
            <li className="nav-item">
              <NavLink to="/Rick" className={getNavLinkClass} onClick={() => setIsMobileMenuOpen(false)}>
                <i className="fa-solid fa-user-lock" style={{ fontSize: '14px' }}></i> API-R-and-M
              </NavLink>
            </li>

            {/* BOTÓN ACCIÓN */}
            <li className="nav-item ms-lg-2 mt-3 mt-lg-0">
              <button 
                onClick={() => { navigate('/Props'); setIsMobileMenuOpen(false); }} 
                className="btn btn-danger w-100 px-4 py-2 rounded-4 fw-bold shadow-sm d-flex align-items-center justify-content-center gap-2"
                style={{ transition: 'all 0.2s', boxShadow: '0 4px 12px rgba(220, 53, 69, 0.3)' }}
              >
                <i className="fa-solid fa-circle-plus"></i> PUBLICAR MOTO
              </button>
            </li>
          </ul>

        </div>
      </div>
      
      <style>{`
        .text-hover-white:hover { color: #ffffff !important; }
      `}</style>
    </nav>
  );
};

export default Navbar;
