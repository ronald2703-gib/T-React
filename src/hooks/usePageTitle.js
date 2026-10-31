import { useEffect } from 'react';

export const SITE_TITLE = 'MOTUShonda | Comunidad XR & CRF Off-Road N°1';

/**
 * Cambia el <title> de la pestaña según la página (bueno para SEO y accesibilidad).
 * Sin argumento, restaura el título principal del sitio.
 */
export function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | MOTUShonda` : SITE_TITLE;
  }, [title]);
}
