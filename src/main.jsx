import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import  FirstLanding from './first.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FirstLanding />
  </StrictMode>,
)
