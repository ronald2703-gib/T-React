import React from 'react';
import { useNavigate, NavLink } from 'react-router-dom';

export const Main = () => {
  const navigate = useNavigate();

  // Enlaces de imágenes públicas y estables optimizadas para desarrollo en React
  const heroImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7yV2iplce4gFxxpMpT_MntO88yXz1h9o-IBH318XWNA&s=10";
  const crfImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWaChgSKQynkF6v8epDVSOqLQTD7uaFLLhluUjrLL2Xw&s=10"; // Foto CRF Motocross
  const xr300Image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMVwjTwBqnNstYtJsgAsJlaXWzp-o8u2tGZBa3Mz0TWg&s=10"; // Foto XR Enduro/Trail estable

  return (
    <main className="bg-light min-vh-100 text-dark overflow-hidden">
      
      {/* 1. SECCIÓN HERO (BANNER PRINCIPAL) */}
      <section 
        className="position-relative d-flex align-items-center text-white py-5"
        style={{
          minHeight: '65vh',
          backgroundImage: `linear-gradient(to right, rgba(20, 20, 24, 0.95), rgba(20, 20, 24, 0.4)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container py-4 px-3 px-md-5">
          <div className="row">
            <div className="col-12 col-lg-8 col-xl-6 text-center text-md-start">
              
              <span className="badge bg-danger text-uppercase px-3 py-2 rounded-pill mb-3 tracking-wider fw-bold">
                <i className="bi bi-fire me-1"></i> Comunidad Off-Road N°1
              </span>
              
              <h2 className="display-5 fw-black text-uppercase lh-1 mb-3 text-white" style={{ fontWeight: '900', letterSpacing: '-1px' }}>
                Domina cualquier terreno: <span className="text-danger">XR</span> & <span className="text-danger">CRF</span>
              </h2>
              
              <p className="text-light opacity-75 mb-4 fs-6">
                Explora fichas técnicas completas, comparte modificaciones de tus proyectos y encuentra la máquina perfecta para devorar kilómetros o volar en la pista.
              </p>
              
              {/* BOTONES CENTRO: Modificados a tamaño estándar más pequeño */}
              <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-md-start gap-2">
                <button 
                  onClick={() => navigate('/motos/crf')} 
                  className="btn btn-danger px-3 py-2.5 rounded-3 fw-bold shadow d-flex align-items-center justify-content-center gap-2"
                  style={{ fontSize: '14px' }}
                >
                  <i className="bi bi-speedometer2"></i> LÍNEA CRF
                </button>
                <button 
                  onClick={() => navigate('/fichas')} 
                  className="btn btn-outline-light px-3 py-2.5 rounded-3 fw-bold d-flex align-items-center justify-content-center gap-2"
                  style={{ fontSize: '14px' }}
                >
                  <i className="bi bi-file-earmark-text"></i> FICHAS TÉCNICAS
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 2. SECCIÓN DE CATEGORÍAS (REJILLA RESPONSIVA ESTÁTICA) */}
      <section className="container py-5 px-3 px-md-4">
        
        <div className="text-center mb-5">
          <h3 className="h2 fw-bolder text-uppercase m-0" style={{ fontWeight: '800' }}>
            Modelos Destacados
          </h3>
          <div className="bg-danger mx-auto my-2 rounded" style={{ width: '50px', height: '3px' }}></div>
          <p className="text-muted small">
            Elige el concepto que mejor se adapte a tu aventura off-road.
          </p>
        </div>

        {/* Rejilla responsiva limpia de Bootstrap sin efectos javascript adicionales */}
        <div className="row g-4 justify-content-center">
          
          {/* TARJETA HONDA CRF */}
          <div className="col-12 col-md-6 col-lg-5">
            <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden bg-white">
              <div className="position-relative" style={{ height: '260px' }}>
                <img 
                  src={crfImage} 
                  alt="Honda CRF"
                  referrerPolicy="no-referrer"
                  className="w-100 h-100" 
                  style={{ objectFit: 'cover' }}
                />
                <span className="position-absolute top-0 end-0 bg-danger text-white px-3 py-1 m-3 rounded-pill fw-bold small text-uppercase">
                  Pista / MX
                </span>
              </div>
              <div className="card-body p-4 d-flex flex-column">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h4 className="card-title fw-extrabold text-uppercase m-0" style={{ fontWeight: '800', fontSize: '20px' }}>Línea CRF</h4>
                  <i className="bi bi-trophy text-danger fs-4"></i>
                </div>
                <p className="card-text text-muted small lh-base mb-4">
                  Máquinas de competición pura de cuatro tiempos. Equipadas con suspensiones invertidas avanzadas, chasis perimetral de aluminio ultra liviano y una respuesta de acelerador explosiva.
                </p>
                <NavLink 
                  to="/motos/crf" 
                  className="btn btn-light w-100 py-2 rounded-3 fw-bold text-uppercase mt-auto border-0 d-flex align-items-center justify-content-center gap-2"
                  style={{ backgroundColor: '#f1f5f9', color: '#1e1e24', fontSize: '13px' }}
                >
                  Modelos CRF <i className="bi bi-arrow-right-short fs-5"></i>
                </NavLink>
              </div>
            </div>
          </div>

          {/* TARJETA HONDA XR 300L TORNADO */}
          <div className="col-12 col-md-6 col-lg-5">
            <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden bg-white">
              <div className="position-relative" style={{ height: '260px' }}>
                <img 
                  src={xr300Image} 
                  alt="Honda XR 300L Tornado" 
                  referrerPolicy="no-referrer"
                  className="w-100 h-100" 
                  style={{ objectFit: 'cover' }}
                />
                <span className="position-absolute top-0 end-0 bg-dark text-white px-3 py-1 m-3 rounded-pill fw-bold small text-uppercase">
                  Nueva 300cc
                </span>
              </div>
              <div className="card-body p-4 d-flex flex-column">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h4 className="card-title fw-extrabold text-uppercase m-0" style={{ fontWeight: '800', fontSize: '20px' }}>XR 300L Tornado</h4>
                  <i className="bi bi-shield-check text-success fs-4"></i>
                </div>
                <p className="card-text text-muted small lh-base mb-4">
                  Evolución con motor de 293cc e inyección electrónica. Cuenta con frenos ABS, caja de 6 velocidades y la mítica resistencia Trail refrigerada por aire para el día a día y rutas de enduro.
                </p>
                <NavLink 
                  to="/motos/xr" 
                  className="btn btn-light w-100 py-2 rounded-3 fw-bold text-uppercase mt-auto border-0 d-flex align-items-center justify-content-center gap-2"
                  style={{ backgroundColor: '#f1f5f9', color: '#1e1e24', fontSize: '13px' }}
                >
                  Explorar XR300L <i className="bi bi-arrow-right-short fs-5"></i>
                </NavLink>
              </div>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
};

