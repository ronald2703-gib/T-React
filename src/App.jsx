import { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';

import Header from './features/landing/components/Header.jsx';
import { Main } from './features/landing/components/Main.jsx';
import { Footer } from './features/landing/components/Footer.jsx';
import { Props } from './features/landing/components/Props.jsx';
import { Rick } from './features/landing/components/Rick.jsx';
import { ComingSoon, NotFound } from './features/landing/components/Placeholder.jsx';

import { Login } from './features/auth/components/Login.jsx';
import { Register } from './features/auth/components/Register.jsx';
import { ForgotPassword } from './features/auth/components/ForgotPassword.jsx';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <Header />

      {/* Un único <main> para TODAS las páginas (landmark requerido por accesibilidad) */}
      <main id="contenido" className="app-main" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Props" element={<Props />} />
          <Route path="/apirick" element={<Rick />} />

          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />

          {/* Páginas enlazadas desde el sitio que aún no existen */}
          <Route path="/motos/crf" element={<ComingSoon title="Línea CRF" />} />
          <Route path="/motos/xr" element={<ComingSoon title="XR 300L Tornado" />} />
          <Route path="/fichas" element={<ComingSoon title="Fichas técnicas" />} />
          <Route path="/asistencia" element={<ComingSoon title="Asistencia" />} />
          <Route path="/reportes" element={<ComingSoon title="Reportes" />} />
          <Route path="/ayuda" element={<ComingSoon title="Ayuda" />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </HashRouter>
  );
}

export default App;
