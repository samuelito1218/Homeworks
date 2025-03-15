import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FirstApp from './FirstApp.jsx'
import SecondApp from './SecondApp.jsx'
import NewComponent from './NewComponentAppFather';

function App(){
  return(
    <div>
      <h1><font color="blue">Bienvenidos</font></h1>
      <FirstApp />
      <SecondApp value={18} />
      <NewComponent />  {/* Aquí agregamos el nuevo componente */}
    </div>
  )
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
