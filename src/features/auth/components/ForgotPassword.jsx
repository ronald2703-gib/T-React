import React from 'react';
import { useNavigate } from 'react-router-dom';

export const ForgotPassword = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado correctamente");
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center px-3" style={{ minHeight: 'calc(100vh - 160px)', backgroundColor: '#f8f9fa', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <div className="card w-100 p-4 p-sm-5 border border-light-subtle shadow-lg" style={{ maxWidth: '400px', backgroundColor: '#ffffff', borderRadius: '16px' }}>
        
        {/* Encabezado */}
        <div className="text-center mb-4">
          <span className="d-inline-block px-3 py-2 mb-3 rounded-3 border border-danger border-opacity-25" style={{ backgroundColor: 'rgba(220, 53, 69, 0.05)' }}>
            <i className="bi bi-key text-danger fs-4"></i>
          </span>
          <h2 className="text-dark fw-black m-0 text-uppercase tracking-wider" style={{ fontWeight: '900', letterSpacing: '0.5px' }}>
            RECUPERAR <span className="text-danger">ACCESO</span>
          </h2>
          <p className="text-muted small mt-2 mb-0">
            Ingresa tu correo para recibir las instrucciones de restauración
          </p>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
          <div className="d-flex flex-column gap-2 text-start">
            <label className="text-muted fw-bold text-uppercase small" style={{ fontSize: '11px', letterSpacing: '0.5px' }}>
              Correo Electrónico
            </label>
            <input 
              type="email" 
              placeholder="nombre@ejemplo.com"
              required
              className="form-control bg-light border-light-subtle text-dark px-3 py-2 shadow-none"
              style={{ borderRadius: '10px', fontSize: '14px' }}
            />
          </div>

          <button 
            type="submit"
            className="btn btn-danger w-100 fw-bold text-uppercase mt-2 py-2"
            style={{ borderRadius: '10px', fontSize: '15px', letterSpacing: '1px', boxShadow: '0 4px 12px rgba(220, 53, 69, 0.25)' }}
          >
            Enviar Instrucciones
          </button>

          <button 
            type="button"
            onClick={() => navigate('/Login')}
            className="btn btn-link text-muted small p-0 mt-1 text-center text-decoration-underline border-0 bg-transparent shadow-none"
            style={{ fontSize: '14px' }}
          >
            Volver al Inicio de Sesión
          </button>
        </form>
      </div>
    </div>
  );
};

