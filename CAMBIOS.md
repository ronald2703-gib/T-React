# Cambios realizados

## Errores que rompían el sitio
- `App.jsx` importaba `./footer.jsx` pero el archivo es `Footer.jsx` (falla en Linux/Vercel/Netlify).
- El menú enlazaba a `/Rick` pero la ruta es `/apirick`.
- Rutas inexistentes (`/motos/crf`, `/motos/xr`, `/fichas`) -> ahora hay páginas "Próximamente" y una 404.
- Iconos de Font Awesome (`fa-solid`) sin tener Font Awesome instalado -> ahora todo usa Bootstrap Icons.
- Avatares de `Props.jsx` con `xmlns='http://w3.org'` (incorrecto) -> las imágenes no se veían.
- Clases que no existen en Bootstrap (`py-2.5`, `fw-black`, `fw-extrabold`, `tracking-wider`, `transition-all`).
- Manifest PWA apuntaba a `images.jpg` (no existe) y a capturas con tamaño/tipo falsos.

## Responsive
- Layout flex de pantalla completa (sin el hack `calc(100vh - 160px)`), footer siempre abajo.
- Inputs a 16px (evita el zoom de iOS), botones y enlaces de mínimo 48px (táctil).
- Footer y paginación con `flex-wrap` (no se desbordan a 320px).
- Imágenes con `ratio` + `width/height` (sin saltos de layout), grid de Rick 1/2/3/4 columnas.

## Lighthouse (Accesibilidad, Buenas prácticas, SEO)
- Un único `<main>`, `<header>`, `<nav aria-label>`, enlace "Saltar al contenido".
- Un solo `<h1>` por página y jerarquía de títulos correcta.
- `<label htmlFor>` real en todos los formularios + `autoComplete`.
- Contraste AA en textos (rojos y grises ajustados).
- Enlaces reales (`<Link>`) en vez de `<span onClick>` y `<button onClick={navigate}>`.
- Título por página, robots.txt y sitemap.xml corregidos, og:image absoluta, íconos PWA 192/512/maskable.

## Estructura
- `AuthCard.jsx` compartido por Login / Register / ForgotPassword (antes 3 copias).
- `src/index.css` centraliza estilos (adiós a decenas de `style={{}}`).
- Rick: estados de carga/error/vacío, AbortController, búsqueda codificada.

## Pendiente por tu parte
1. Reemplazar las 3 imágenes de Google (`encrypted-tbn0.gstatic.com`) en `Main.jsx` por archivos propios en `public/img/`.
2. Poner tus perfiles reales de redes en `Footer.jsx` (`SOCIAL_LINKS`).
3. Confirmar que el dominio `https://motushonda.com` es el definitivo (index.html, robots.txt, sitemap.xml).
4. `public/satoru.jpg` es en realidad un AVIF con extensión .jpg; ya no se usa (puedes borrarlo).
