import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

import { HeroesApp } from './HeroesApp';
import './style.css';
createRoot(document.getElementById('root')).render(
  <StrictMode>
  
    <BrowserRouter>
      <HeroesApp />
    </BrowserRouter>
    
  </StrictMode>,
)
