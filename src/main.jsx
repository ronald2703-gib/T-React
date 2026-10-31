import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './index.css'
// Nota: el menú móvil se controla con estado de React, así que no hace falta
// cargar bootstrap.bundle.js. Si agregas dropdowns/modals de Bootstrap, impórtalo aquí.
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
