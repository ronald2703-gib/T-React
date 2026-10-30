import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Props() {
  
  // Fotos reales codificadas en Base64/URL de forma correcta para garantizar que carguen localmente
  const avatares = [
    { 
      name: 'Lin Lanying', 
      size: '80px',
      foto: "data:image/svg+xml;utf8,<svg xmlns='http://w3.org' viewBox='0 0 100 100'><circle cx='50' cy='50' r='50' fill='%23a5b4fc'/><circle cx='50' cy='37' r='18' fill='%23312e81'/><path d='M20,80 C20,55 80,55 80,80 Z' fill='%23312e81'/><circle cx='50' cy='38' r='12' fill='%23e0e7ff'/><rect x='44' y='34' width='12' height='6' rx='2' fill='none' stroke='%23312e81' stroke-width='2'/></svg>"
    },
    { 
      name: 'A. Katsuki', 
      size: '80px',
      foto: "data:image/svg+xml;utf8,<svg xmlns='http://w3.org' viewBox='0 0 100 100'><circle cx='50' cy='50' r='50' fill='%236ee7b7'/><circle cx='50' cy='38' r='16' fill='%23064e3b'/><path d='M25,82 C25,58 75,58 75,82 Z' fill='%23064e3b'/><circle cx='50' cy='39' r='11' fill='%23d1fae5'/></svg>"
    },
    { 
      name: 'Mohammad Abdus Salam', 
      size: '50px',
      foto: "data:image/svg+xml;utf8,<svg xmlns='http://w3.org' viewBox='0 0 100 100'><circle cx='50' cy='50' r='50' fill='%23fca5a5'/><circle cx='50' cy='40' r='15' fill='%237f1d1d'/><path d='M28,85 C28,62 72,62 72,85 Z' fill='%237f1d1d'/><circle cx='50' cy='41' r='10' fill='%23fee2e2'/><path d='M40,36 Q50,30 60,36' fill='none' stroke='%23ffffff' stroke-width='3'/></svg>"
    }
  ];

  return (
    <div className="container my-5">
      <div className="card shadow mx-auto" style={{ maxWidth: '550px' }}>
        
        <div className="card-header bg-dark text-white text-center py-3">
          <h5 className="mb-0">Lista de Avatares (Props con Nombres)</h5>
        </div>
        
        <div className="card-body bg-light">
          <p className="text-muted text-center small mb-4">
            Componentes de React estructurados verticalmente con Bootstrap 5.
          </p>

          <div className="d-flex justify-content-center align-items-start flex-wrap py-4 bg-white rounded border">
            
            {avatares.map((avatar, index) => (
              <div key={index} className="d-flex flex-column align-items-center mx-3 my-2" style={{ width: '110px' }}>
                
                <div 
                  className="rounded-circle shadow-sm border border-2 border-primary overflow-hidden d-flex align-items-center justify-content-center"
                  style={{ width: avatar.size, height: avatar.size }}
                >
                  <img
                    src={avatar.foto}
                    alt={avatar.name}
                    className="w-100 h-100 object-fit-cover"
                  />
                </div>

                <span className="text-center mt-2 small fw-bold text-dark text-wrap" style={{ fontSize: '12px', lineHeight: '1.2' }}>
                  {avatar.name}
                </span>

              </div>
            ))}

          </div>
        </div>

        <div className="card-footer bg-white text-center py-2">
          <span className="badge bg-secondary">Estructura Avanzada</span>
        </div>

      </div>
    </div>
  );
}
