import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './reset.css'
import './index.css'
import Header from './Header.jsx'
import Sobre from './Sobre.jsx'
import Skills from './Skills.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Sobre />
    <Skills />
  </StrictMode>,
)
