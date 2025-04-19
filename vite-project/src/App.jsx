import { useState } from "react";
import Formulario from "./Formulario";
import { Persona } from "./Persona";
import "./Styles.css";

function App() {
  const [cola, setCola] = useState([
    new Persona("Juan", 2000),
    new Persona("David", 50000),
    new Persona("Lucia", 1500000)
  ]);

  const agregarPersona = (nueva) => {
    const personaObj = new Persona(nueva.nombre, nueva.monto);
    setCola([...cola, personaObj]);
  };

  return (
    <div className="App">
      <h1>Cola del Cajero Automático</h1>
      <Formulario agregarPersona={agregarPersona} />
      <h2>Personas en la cola:</h2>
      <ul>
        {cola.map((p, i) => (
          <li key={i}>
            {p.nombre} desea retirar ${p.monto}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
