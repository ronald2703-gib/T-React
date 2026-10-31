import { Link } from 'react-router-dom';
import { usePageTitle } from '../../../hooks/usePageTitle.js';

/** Página temporal para rutas enlazadas que todavía no existen. */
export const ComingSoon = ({ title }) => {
  usePageTitle(title);

  return (
    <section className="container py-5 text-center" style={{ maxWidth: '640px' }}>
      <i className="bi bi-tools text-danger display-3" aria-hidden="true"></i>
      <h1 className="h2 fw-extrabold text-uppercase mt-3">{title}</h1>
      <p className="text-body-secondary mb-4">
        Estamos trabajando en esta sección. Muy pronto estará disponible.
      </p>
      <Link to="/" className="btn btn-danger btn-touch px-4 fw-bold text-uppercase">
        <i className="bi bi-arrow-left me-2" aria-hidden="true"></i>Volver al inicio
      </Link>
    </section>
  );
};

export const NotFound = () => {
  usePageTitle('Página no encontrada');

  return (
    <section className="container py-5 text-center" style={{ maxWidth: '640px' }}>
      <p className="display-1 fw-black text-danger mb-0" aria-hidden="true">404</p>
      <h1 className="h2 fw-extrabold text-uppercase">Página no encontrada</h1>
      <p className="text-body-secondary mb-4">
        La ruta que buscas no existe o fue movida. Regresa al inicio y sigue explorando.
      </p>
      <Link to="/" className="btn btn-danger btn-touch px-4 fw-bold text-uppercase">
        <i className="bi bi-house-door me-2" aria-hidden="true"></i>Ir al inicio
      </Link>
    </section>
  );
};
