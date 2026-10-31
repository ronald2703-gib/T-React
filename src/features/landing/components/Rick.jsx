import { useEffect, useState } from 'react';
import { usePageTitle } from '../../../hooks/usePageTitle.js';

const API_URL = 'https://rickandmortyapi.com/api/character/';

const STATUS = {
  Alive: { label: 'Vivo', color: '#198754' },
  Dead: { label: 'Muerto', color: '#dc3545' },
  unknown: { label: 'Desconocido', color: '#6c757d' },
};

export const Rick = () => {
  usePageTitle('API Rick y Morty');

  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [status, setStatus] = useState('loading'); // loading | success | empty | error

  // Debounce del buscador: espera 500ms después de que el usuario deja de escribir
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchTerm.trim());
      setCurrentPage(1);
    }, 500);
    return () => clearTimeout(handler);
  }, [searchTerm]);

  // Petición a la API (con AbortController para evitar respuestas "viejas" que pisan a las nuevas)
  useEffect(() => {
    const controller = new AbortController();
    const params = new URLSearchParams({ page: String(currentPage) });
    if (debouncedSearch) params.set('name', debouncedSearch); // URLSearchParams ya codifica caracteres especiales

    async function getCharacters() {
      setStatus('loading');
      try {
        const response = await fetch(`${API_URL}?${params}`, { signal: controller.signal });

        // La API responde 404 cuando no hay coincidencias: no es un error real
        if (response.status === 404) {
          setCharacters([]);
          setTotalPages(0);
          setStatus('empty');
          return;
        }
        if (!response.ok) throw new Error(`HTTP ${response.status}`);

        const data = await response.json();
        const results = data.results ?? [];
        setCharacters(results);
        setTotalPages(data.info?.pages ?? 0);
        setStatus(results.length ? 'success' : 'empty');
      } catch (error) {
        if (error.name === 'AbortError') return;
        console.error('Error al obtener los personajes:', error);
        setCharacters([]);
        setTotalPages(0);
        setStatus('error');
      }
    }

    getCharacters();
    return () => controller.abort();
  }, [currentPage, debouncedSearch]);

  const goToPage = (page) => {
    setCurrentPage(Math.min(Math.max(page, 1), totalPages));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isLoading = status === 'loading';

  return (
    <div className="container py-4 py-md-5">
      <h1 className="rick-title text-center text-uppercase fw-bold pb-2 mb-4 fs-2">API Rick y Morty</h1>

      <div className="row justify-content-center mb-4 mb-md-5">
        <div className="col-12 col-md-8 col-lg-6">
          <label htmlFor="busqueda" className="visually-hidden">
            Buscar personaje por nombre
          </label>
          <input
            id="busqueda"
            type="search"
            className="form-control form-control-lg border-dark shadow-sm"
            placeholder="Buscar en todos los personajes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            autoComplete="off"
          />
        </div>
      </div>

      {/* Mensajes para lectores de pantalla */}
      <p className="visually-hidden" role="status" aria-live="polite">
        {isLoading && 'Cargando personajes…'}
        {status === 'success' && `Mostrando ${characters.length} personajes. Página ${currentPage} de ${totalPages}.`}
        {status === 'empty' && 'No se encontraron personajes.'}
      </p>

      {status === 'error' && (
        <div className="alert alert-danger text-center" role="alert">
          No pudimos cargar los personajes. Revisa tu conexión e inténtalo de nuevo.
        </div>
      )}

      {status === 'empty' && (
        <p className="text-center text-body-secondary fs-5 my-4">
          No se encontraron personajes para &ldquo;{debouncedSearch}&rdquo;.
        </p>
      )}

      {isLoading && characters.length === 0 && (
        <div className="text-center my-5">
          <div className="spinner-border text-danger" role="presentation"></div>
        </div>
      )}

      <div
        className={`results-grid row g-3 g-md-4 mb-4 mb-md-5${isLoading ? ' opacity-50' : ''}`}
        aria-busy={isLoading}
      >
        {characters.map((character) => {
          const state = STATUS[character.status] ?? STATUS.unknown;
          return (
            <div key={character.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <article className="character-card card h-100 border-light shadow-sm">
                <img
                  src={character.image}
                  className="card-img-top h-auto"
                  alt={`Retrato de ${character.name}`}
                  width="300"
                  height="300"
                  loading="lazy"
                  decoding="async"
                />
                <div className="card-body bg-white text-dark">
                  <h2 className="h5 card-title fw-bold mb-2">{character.name}</h2>
                  <p className="card-text small text-body-secondary d-flex align-items-center gap-2 mb-0">
                    <span className="status-dot" style={{ backgroundColor: state.color }} aria-hidden="true"></span>
                    {state.label} — {character.species}
                  </p>
                </div>
              </article>
            </div>
          );
        })}
      </div>

      {totalPages > 1 && (
        <nav
          aria-label="Paginación de personajes"
          className="d-flex flex-wrap justify-content-center align-items-center gap-2 gap-sm-3"
        >
          <span className="pager-status fw-semibold text-dark">
            Página {currentPage} de {totalPages}
          </span>

          <button
            type="button"
            className="btn btn-dark btn-touch px-4"
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1 || isLoading}
          >
            <i className="bi bi-chevron-left me-1" aria-hidden="true"></i>Anterior
          </button>

          <button
            type="button"
            className="btn btn-dark btn-touch px-4"
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages || isLoading}
          >
            Siguiente<i className="bi bi-chevron-right ms-1" aria-hidden="true"></i>
          </button>
        </nav>
      )}
    </div>
  );
};
