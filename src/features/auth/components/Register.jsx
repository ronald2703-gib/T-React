import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Register = () => {
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
            <i className="bi bi-person-plus text-danger fs-4"></i>
          </span>
          <h2 className="text-dark fw-black m-0 text-uppercase tracking-wider" style={{ fontWeight: '900', letterSpacing: '0.5px' }}>
            DOMINA EL <span className="text-danger">TERRENO</span>
          </h2>
          <p className="text-muted small mt-2 mb-0">
            Crea tu cuenta en la plataforma Off-Road
          </p>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
          <div className="d-flex flex-column gap-2 text-start">
            <label className="text-muted fw-bold text-uppercase small" style={{ fontSize: '11px', letterSpacing: '0.5px' }}>
              Nombre Completo
            </label>
            <input 
              type="text" 
              placeholder="Juan Pérez"
              required
              className="form-control bg-light border-light-subtle text-dark px-3 py-2 shadow-none"
              style={{ borderRadius: '10px', fontSize: '14px' }}
            />
          </div>

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

          <div className="d-flex flex-column gap-2 text-start">
            <label className="text-muted fw-bold text-uppercase small" style={{ fontSize: '11px', letterSpacing: '0.5px' }}>
              Contraseña
            </label>
            <input 
              type="password" 
              placeholder="••••••••"
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
            Registrarme
          </button>

          <div className="text-center text-muted small mt-1">
            ¿Ya tienes cuenta?{' '}
            <span 
              onClick={() => navigate('/Login')} 
              className="text-dark fw-bold text-decoration-underline"
              style={{ cursor: 'pointer' }}
            >
              Inicia sesión aquí
            </span>
          </div>

          <button 
            type="button"
            onClick={() => navigate('/')}
            className="btn btn-link text-muted small p-0 mt-1 text-center text-decoration-underline border-0 bg-transparent shadow-none"
            style={{ fontSize: '14px' }}
          >
            Cancelar y volver al inicio
          </button>
        </form>
      </div>
    </div>
  );
};


