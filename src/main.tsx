import '@fontsource/manrope'; // 400
import '@fontsource/manrope/500.css';
import '@fontsource/manrope/600.css';
import '@fontsource/manrope/700.css';
import '@fontsource/manrope/800.css'; // pesos usados nos títulos e KPIs
// (CSS do Bootstrap removido: ele conflitava com o Tailwind. Os ícones "bi bi-*"
//  continuam vindo do bootstrap-icons via <link> no index.html.)
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Router from './router' 

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router/>
  </StrictMode>
)

