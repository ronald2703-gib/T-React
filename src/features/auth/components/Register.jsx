import { Link } from 'react-router-dom';
import { AuthCard, AuthField, AuthCancel } from './AuthCard.jsx';
import { usePageTitle } from '../../../hooks/usePageTitle.js';

export const Register = () => {
  usePageTitle('Crear cuenta');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado correctamente');
  };

  return (
    <AuthCard
      icon="bi-person-plus"
      title={<>Domina el <span className="text-danger">terreno</span></>}
      subtitle="Crea tu cuenta en la plataforma Off-Road"
    >
      <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
        <AuthField
          id="register-name"
          label="Nombre completo"
          type="text"
          placeholder="Juan Pérez"
          autoComplete="name"
        />

        <AuthField
          id="register-email"
          label="Correo electrónico"
          type="email"
          placeholder="nombre@ejemplo.com"
          autoComplete="email"
        />

        <AuthField
          id="register-password"
          label="Contraseña"
          type="password"
          placeholder="••••••••"
          autoComplete="new-password"
          minLength={8}
        />

        <button type="submit" className="auth-submit btn btn-danger w-100 fw-bold text-uppercase mt-2">
          Registrarme
        </button>

        <p className="text-center text-body-secondary small m-0">
          ¿Ya tienes cuenta?{' '}
          <Link to="/Login" className="text-dark fw-bold text-decoration-underline">
            Inicia sesión aquí
          </Link>
        </p>

        <AuthCancel />
      </form>
    </AuthCard>
  );
};
