import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'

import AppExampleReact from './AppExampleReact.tsx'
import AppRenderList from './AppRenderList.tsx'
import AppAxios from './AppAxios.tsx'
import AppNavigation from './AppNavigation.tsx'

import Product from './Components/Product.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppNavigation />} /> 
        <Route path="/AppExampleReact" element={<AppExampleReact />} />
        <Route path="/AppRenderList" element={<AppRenderList />} /> 
        <Route path="/AppAxios" element={<AppAxios />} /> 
        <Route path="/:productId" element={<Product />} /> 
        <Route path="*" element={<div>Not found</div>} /> 
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
