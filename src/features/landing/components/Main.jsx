import { Link } from 'react-router-dom';
import { usePageTitle } from '../../../hooks/usePageTitle.js';

// IMPORTANTE: estas URLs son miniaturas de Google (encrypted-tbn0). Funcionan, pero son pequeñas
// y pueden dejar de cargar. Para Lighthouse 100 en "Prácticas recomendadas" reemplázalas por
// archivos propios en /public/img/ (mínimo 1280px de ancho para el hero y 1000px para las tarjetas).
const IMAGES = {
  hero: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7yV2iplce4gFxxpMpT_MntO88yXz1h9o-IBH318XWNA&s=10',
  crf: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWaChgSKQynkF6v8epDVSOqLQTD7uaFLLhluUjrLL2Xw&s=10',
  xr300: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMVwjTwBqnNstYtJsgAsJlaXWzp-o8u2tGZBa3Mz0TWg&s=10',
};

const MODELS = [
  {
    id: 'crf',
    to: '/motos/crf',
    title: 'Línea CRF',
    badge: 'Pista / MX',
    badgeClass: 'bg-danger',
    icon: 'bi-trophy text-danger',
    image: IMAGES.crf,
    alt: 'Honda CRF de motocross en plena pista',
    description:
      'Máquinas de competición pura de cuatro tiempos. Equipadas con suspensiones invertidas avanzadas, chasis perimetral de aluminio ultra liviano y una respuesta de acelerador explosiva.',
    cta: 'Modelos CRF',
  },
  {
    id: 'xr',
    to: '/motos/xr',
    title: 'XR 300L Tornado',
    badge: 'Nueva 300cc',
    badgeClass: 'bg-dark',
    icon: 'bi-shield-check text-success',
    image: IMAGES.xr300,
    alt: 'Honda XR 300L Tornado lista para rutas de enduro',
    description:
      'Evolución con motor de 293cc e inyección electrónica. Cuenta con frenos ABS, caja de 6 velocidades y la mítica resistencia Trail refrigerada por aire para el día a día y rutas de enduro.',
    cta: 'Explorar XR300L',
  },
];

export const Main = () => {
  usePageTitle(); // restaura el título principal al volver al inicio

  return (
    <>
      {/* 1. HERO */}
      <section
        className="hero position-relative d-flex align-items-center text-white py-5"
        aria-labelledby="hero-title"
        style={{ '--hero-image': `url("${IMAGES.hero}")` }}
      >
        <div className="container py-4 px-3 px-md-5">
          <div className="row">
            <div className="col-12 col-lg-8 col-xl-6 text-center text-md-start">
              <span className="badge bg-danger text-uppercase px-3 py-2 rounded-pill mb-3 fw-bold tracking-wide">
                <i className="bi bi-fire me-1" aria-hidden="true"></i> Comunidad Off-Road N°1
              </span>

              <h1 id="hero-title" className="hero-title display-5 fw-black text-uppercase lh-1 mb-3">
                Domina cualquier terreno: <span className="text-danger">XR</span> &amp;{' '}
                <span className="text-danger">CRF</span>
              </h1>

              <p className="text-light mb-4 fs-6" style={{ opacity: 0.9 }}>
                Explora fichas técnicas completas, comparte modificaciones de tus proyectos y encuentra la máquina
                perfecta para devorar kilómetros o volar en la pista.
              </p>

              <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-md-start gap-2">
                <Link
                  to="/motos/crf"
                  className="btn btn-danger btn-touch px-4 rounded-3 fw-bold shadow d-flex align-items-center justify-content-center gap-2"
                >
                  <i className="bi bi-speedometer2" aria-hidden="true"></i> LÍNEA CRF
                </Link>
                <Link
                  to="/fichas"
                  className="btn btn-outline-light btn-touch px-4 rounded-3 fw-bold d-flex align-items-center justify-content-center gap-2"
                >
                  <i className="bi bi-file-earmark-text" aria-hidden="true"></i> FICHAS TÉCNICAS
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MODELOS DESTACADOS */}
      <section className="container py-5 px-3 px-md-4" aria-labelledby="modelos-title">
        <div className="text-center mb-4 mb-md-5">
          <h2 id="modelos-title" className="h2 fw-extrabold text-uppercase m-0">
            Modelos Destacados
          </h2>
          <div className="accent-bar bg-danger mx-auto my-2 rounded"></div>
          <p className="text-body-secondary small m-0">Elige el concepto que mejor se adapte a tu aventura off-road.</p>
        </div>

        <div className="row g-4 justify-content-center">
          {MODELS.map((model) => (
            <div className="col-12 col-md-6 col-lg-5" key={model.id}>
              <article className="model-card card h-100 border-0 shadow-sm rounded-4 overflow-hidden bg-white">
                <div className="position-relative">
                  <div className="ratio ratio-16x9">
                    <img
                      src={model.image}
                      alt={model.alt}
                      width="640"
                      height="360"
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      className="object-fit-cover"
                    />
                  </div>
                  <span
                    className={`position-absolute top-0 end-0 ${model.badgeClass} text-white px-3 py-1 m-3 rounded-pill fw-bold small text-uppercase`}
                  >
                    {model.badge}
                  </span>
                </div>

                <div className="card-body p-4 d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-center gap-2 mb-2">
                    <h3 className="h5 card-title fw-extrabold text-uppercase m-0">{model.title}</h3>
                    <i className={`bi ${model.icon} fs-4`} aria-hidden="true"></i>
                  </div>
                  <p className="card-text text-body-secondary small lh-base mb-4">{model.description}</p>
                  <Link
                    to={model.to}
                    className="btn btn-light btn-touch w-100 rounded-3 fw-bold text-uppercase mt-auto border d-flex align-items-center justify-content-center gap-2"
                  >
                    {model.cta} <i className="bi bi-arrow-right-short fs-5" aria-hidden="true"></i>
                  </Link>
                </div>
              </article>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
