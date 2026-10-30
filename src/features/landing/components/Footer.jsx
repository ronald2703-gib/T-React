import React from 'react';
import { NavLink } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-white py-5 border-top" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <div className="container" style={{ maxWidth: '1200px' }}>
        
        {/* BLOQUE SUPERIOR DE CONTENIDO */}
        <div className="row align-items-center g-4 justify-content-between pb-4 border-bottom">
          
          {/* MARCA SECUNDARIA DE MOTOS */}
          <div className="col-12 col-md-6 text-center text-md-start">
            <h5 className="m-0 text-dark fw-bold text-uppercase" style={{ letterSpacing: '-0.5px' }}>
              <i className="bi bi-lightning-charge-fill text-danger me-1"></i> XR<span className="text-danger">&</span>CRF<span className="fs-6 text-muted fw-normal ms-1">Hub</span>
            </h5>
            <p className="m-0 text-muted small mt-1">
              Comunidad off-road y control inteligente de fichas técnicas para motocicletas.
            </p>
          </div>

          {/* ENLACES DE SOPORTE RÁPIDOS */}
          <div className="col-12 col-md-6">
            <div className="d-flex justify-content-center justify-content-md-end gap-4">
              <a href="#asistencia" className="text-secondary text-decoration-none small fw-semibold transition-all" style={{ transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.classList.replace('text-secondary', 'text-danger')} onMouseLeave={(e) => e.target.classList.replace('text-danger', 'text-secondary')}>
                <i className="bi bi-headset me-1"></i> Asistencia
              </a>
              <a href="#reportes" className="text-secondary text-decoration-none small fw-semibold transition-all" style={{ transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.classList.replace('text-secondary', 'text-danger')} onMouseLeave={(e) => e.target.classList.replace('text-danger', 'text-secondary')}>
                <i className="bi bi-exclamation-triangle me-1"></i> Reportes
              </a>
              <a href="#ayuda" className="text-secondary text-decoration-none small fw-semibold transition-all" style={{ transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.classList.replace('text-secondary', 'text-danger')} onMouseLeave={(e) => e.target.classList.replace('text-danger', 'text-secondary')}>
                <i className="bi bi-question-circle me-1"></i> Ayuda
              </a>
            </div>
          </div>

        </div>

        {/* SECCIÓN INFERIOR DE CRÉDITOS */}
        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center pt-4 text-muted" style={{ fontSize: '13px' }}>
          <p className="m-0 text-center text-sm-start mb-2 mb-sm-0">
            &copy; {new Date().getFullYear()} <mark className="bg-danger bg-opacity-10 text-danger px-2 py-0.5 rounded fw-bold text-uppercase">Motos</mark>. Diseñado con total elegancia y minimalismo.
          </p>
          
          {/* REDES O DETALLES EXTRA */}
          <div className="d-flex gap-3 fs-5">
            <i className="bi bi-instagram text-secondary" style={{ cursor: 'pointer' }}></i>
            <i className="bi bi-youtube text-secondary" style={{ cursor: 'pointer' }}></i>
            <i className="bi bi-facebook text-secondary" style={{ cursor: 'pointer' }}></i>
          </div>
        </div>

      </div>
    </footer>
  );
};

