import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Son from './Son.jsx'
import Father from './Father.jsx'

function App(){
  return(
    <div>
      <h1><font color="blue">Bienvenidos</font></h1>
      <Son />
      <Father  />
      
    </div>
  )
}



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Son />
    <Father />
  </StrictMode>,
)
