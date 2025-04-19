import { useState } from 'react'
import Formulario from './Formulario'
import { Libros } from './libros'
import "./Styles.css";

function App() {
  const [stack, setStack] = useState([
    new Libros ("Principios de React", "123456789", "Juan Perez", "Editorial A")
  ]);
  const agregarLibro = (nuevoLibro) =>{
     const libroObjeto = new Libros(nuevoLibro.name, nuevoLibro.isbn, nuevoLibro.author, nuevoLibro.editorial);
     setStack([...stack,libroObjeto]);
  };

  return (
    <div className='pila'>
        <h1>Gestión de Libros</h1>
        <Formulario agregarLibro={agregarLibro} />

        <h2>Pila de Libros:</h2>
        <ul>
            {stack.map((libro, index) => (
                <li key={index}>
                    <strong>{libro.name}</strong> - {libro.author} (ISBN: {libro.isbn}, Editorial: {libro.editorial})
                </li>
            ))}
        </ul>
    </div>
);
};

export default App;

