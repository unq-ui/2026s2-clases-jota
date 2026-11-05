import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

// CAMBIAR ACA PARA VER LA MAGIA (?)

// import App from './App.tsx';
import App from './AppConContexto.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
