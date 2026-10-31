import { usePageTitle } from '../../../hooks/usePageTitle.js';

// Imgur: s=90px, b=160px, m=320px, l=640px, h=1024px
// Se muestra a 120px, así que usamos "m" (320px) para que se vea nítido en pantallas retina
function getImageUrl(person, sizeSuffix = 'm') {
  return `https://i.imgur.com/${person.imageId}${sizeSuffix}.jpg`;
}

// Componente Avatar
function Avatar({ person, size }) {
  return (
    <img
      src={getImageUrl(person, 'm')}
      alt={`Foto de ${person.name}`}
      width={size}
      height={size}
      loading="lazy"
      decoding="async"
      className="object-fit-cover rounded-circle shadow-sm border border-3 border-danger d-block"
    />
  );
}

const PEOPLE = [
  { name: 'Katsuko Saruhashi', imageId: 'YfeOqp2' },
  { name: 'Aklilu Lemma', imageId: 'OKS67lh' },
  { name: 'Lin Lanying', imageId: '1bX5QH6' },
];

// Página Props
export const Props = () => {
  usePageTitle('Ejemplo de Props');

  return (
    <div className="container my-4 my-md-5 px-3">
      <div className="card shadow border-0 mx-auto" style={{ maxWidth: '640px' }}>
        <div className="card-header bg-dark text-white text-center py-3">
          <h1 className="h5 mb-0 text-uppercase fw-bold">Ejemplo de Props</h1>
        </div>

        <div className="card-body bg-light p-3 p-sm-4">
          <p className="text-body-secondary text-center small mb-4">
            Cada tarjeta recibe sus datos mediante props: <strong>person</strong> y <strong>size</strong>.
          </p>

          <div className="d-flex flex-wrap justify-content-center align-items-start gap-4 py-4 px-2 bg-white rounded border">
            {PEOPLE.map((person) => (
              <figure
                key={person.imageId}
                className="d-flex flex-column align-items-center text-center m-0"
                style={{ width: '140px' }}
              >
                <Avatar person={person} size={120} />
                <figcaption className="mt-3 fw-bold text-dark lh-sm">{person.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="card-footer bg-white text-center py-2">
          <span className="badge bg-secondary">Estructura Avanzada</span>
        </div>
      </div>
    </div>
  );
};