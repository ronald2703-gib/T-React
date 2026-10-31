import { Link } from 'react-router-dom';

/** Contenedor común de Login / Register / ForgotPassword. */
export const AuthCard = ({ icon, title, subtitle, children }) => (
  <div className="container d-flex justify-content-center align-items-center py-4 py-sm-5 px-3">
    <div className="auth-card card w-100 border border-light-subtle shadow-lg p-4 p-sm-5 bg-white">
      <div className="text-center mb-4">
        <span className="auth-icon-box d-inline-block px-3 py-2 mb-3 rounded-3">
          <i className={`bi ${icon} text-danger fs-4`} aria-hidden="true"></i>
        </span>
        <h1 className="h3 text-dark fw-black m-0 text-uppercase tracking-wide">{title}</h1>
        {subtitle && <p className="text-body-secondary small mt-2 mb-0">{subtitle}</p>}
      </div>
      {children}
    </div>
  </div>
);

/** Campo con <label> realmente asociado al <input> (accesibilidad). */
export const AuthField = ({ id, label, aside, ...inputProps }) => (
  <div className="d-flex flex-column gap-1 text-start">
    <div className="d-flex justify-content-between align-items-center gap-2">
      <label htmlFor={id} className="auth-label text-body-secondary fw-bold text-uppercase">
        {label}
      </label>
      {aside}
    </div>
    <input id={id} name={id} required className="form-control text-dark" {...inputProps} />
  </div>
);

export const AuthCancel = ({ to = '/', children = 'Cancelar y volver al inicio' }) => (
  <Link to={to} className="auth-link text-body-secondary text-center text-decoration-underline">
    {children}
  </Link>
);
