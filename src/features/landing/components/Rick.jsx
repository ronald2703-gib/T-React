import React from 'react'
import { useEffect, useState } from 'react';

export const Rick = () => {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState(''); // Nuevo estado para el debounce
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Efecto para manejar el Debounce del buscador
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchTerm);
      setCurrentPage(1); // Reinicia a la página 1 cuando cambia la búsqueda real
    }, 500); // Espera 500ms después de que el usuario deja de escribir

    return () => {
      clearTimeout(handler); // Limpia el timer si el usuario sigue escribiendo
    };
  }, [searchTerm]);

  // Petición a la API (ahora depende de debouncedSearch en lugar de searchTerm)
  useEffect(() => {
    async function getCharacters() {
      try {
        const urlBase = 'https://rickandmortyapi.com/api/character/';
        const queryParams = '?page=' + currentPage + '&name=' + debouncedSearch;
        
        const response = await fetch(urlBase + queryParams);
        const data = await response.json();

        if (data.results) {
          setCharacters(data.results);
          setTotalPages(data.info.pages);
        } else {
          setCharacters([]);
          setTotalPages(0);
        }
      } catch (error) {
        console.error("Error al obtener los personajes:", error);
        setCharacters([]);
        setTotalPages(0);
      }
    }
    getCharacters();
  }, [currentPage, debouncedSearch]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value); // Cambia instantáneamente para que el input sea fluido
  };

  return (
    <div className="container py-5" style={{ maxWidth: '1000px' }}>
      <h1 className="text-center text-uppercase fw-bold pb-2 mb-4" style={{ borderBottom: '4px solid #dc3545', letterSpacing: '2px' }}>
        API Rick y Morty
      </h1>

      <div className="row justify-content-center mb-5">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control form-control-lg border-dark shadow-sm"
            placeholder="Buscar en todos los personajes..."
            value={searchTerm}
            onChange={handleSearchChange}
            style={{ borderRadius: '4px' }}
          />
        </div>
      </div>

      <div className="row g-4 mb-5">
        {characters.length > 0 ? (
          characters.map((character) => (
            <div key={character.id} className="col-12 col-sm-6 col-md-4">
              <div className="card h-100 border-light shadow-sm" style={{ borderTop: '4px solid #dc3545', borderRadius: '8px', overflow: 'hidden' }}>
                <img 
                  src={character.image} 
                  className="card-img-top w-100 h-auto" 
                  alt={character.name} 
                />
                <div className="card-body bg-white text-dark">
                  <h5 className="card-title fw-bold text-dark mb-2">{character.name}</h5>
                  <p className="card-text small text-muted d-flex align-items-center gap-2 mb-0">
                    <span 
                      className="d-inline-block rounded-circle" 
                      style={{ 
                        width: '8px', 
                        height: '8px', 
                        backgroundColor: character.status === 'Alive' ? '#2ecc71' : character.status === 'Dead' ? '#e74c3c' : '#95a5a6' 
                      }}
                    ></span>
                    {character.status} — {character.species}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12 text-center text-muted fs-5 my-4">
            No se encontraron personajes para "{searchTerm}".
          </div>
        )}
      </div>

      {totalPages > 1 && (
        <nav aria-label="Navegación de secciones">
          <ul className="pagination justify-content-center align-items-center gap-3">
            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
              <button
                className="btn btn-dark px-4 py-2"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                style={{ borderRadius: '4px' }}
              >
                Anterior
              </button>
            </li>
            
            <li className="page-item fw-semibold text-dark fs-6 mx-2">
              Página {currentPage} de {totalPages}
            </li>

            <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
              <button
                className="btn btn-dark px-4 py-2"
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                style={{ borderRadius: '4px' }}
              >
                Siguiente
              </button>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};
