import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import FirstLanding from './general-code/first.jsx'
import SecondLanding from './general-code/second.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FirstLanding />
    <SecondLanding/>
  </StrictMode>,
)
