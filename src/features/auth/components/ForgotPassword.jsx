import { AuthCard, AuthField, AuthCancel } from './AuthCard.jsx';
import { usePageTitle } from '../../../hooks/usePageTitle.js';

export const ForgotPassword = () => {
  usePageTitle('Recuperar acceso');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado correctamente');
  };

  return (
    <AuthCard
      icon="bi-key"
      title={<>Recuperar <span className="text-danger">acceso</span></>}
      subtitle="Ingresa tu correo para recibir las instrucciones de restauración"
    >
      <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
        <AuthField
          id="forgot-email"
          label="Correo electrónico"
          type="email"
          placeholder="nombre@ejemplo.com"
          autoComplete="email"
        />

        <button type="submit" className="auth-submit btn btn-danger w-100 fw-bold text-uppercase mt-2">
          Enviar instrucciones
        </button>

        <AuthCancel to="/Login">Volver al inicio de sesión</AuthCancel>
      </form>
    </AuthCard>
  );
};
