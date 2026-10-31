import { Link } from 'react-router-dom';
import { AuthCard, AuthField, AuthCancel } from './AuthCard.jsx';
import { usePageTitle } from '../../../hooks/usePageTitle.js';

export const Login = () => {
  usePageTitle('Ingresar');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado correctamente');
  };

  return (
    <AuthCard
      icon="bi-speedometer2"
      title={<>XR&amp;CRF <span className="text-danger">HUB</span></>}
      subtitle="Comunidad Off-Road N°1"
    >
      <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
        <AuthField
          id="login-email"
          label="Correo electrónico"
          type="email"
          placeholder="nombre@ejemplo.com"
          autoComplete="email"
        />

        <AuthField
          id="login-password"
          label="Contraseña"
          type="password"
          placeholder="••••••••"
          autoComplete="current-password"
          aside={
            <Link to="/ForgotPassword" className="link-accent small fw-semibold">
              ¿La olvidaste?
            </Link>
          }
        />

        <button type="submit" className="auth-submit btn btn-danger w-100 fw-bold text-uppercase mt-2">
          Ingresar
        </button>

        <p className="text-center text-body-secondary small m-0">
          ¿No tienes cuenta?{' '}
          <Link to="/Register" className="text-dark fw-bold text-decoration-underline">
            Regístrate aquí
          </Link>
        </p>

        <AuthCancel />
      </form>
    </AuthCard>
  );
};
