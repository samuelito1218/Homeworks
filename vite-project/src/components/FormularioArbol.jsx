import { useState } from 'react';
import '../styles/FormularioArbol.css';

const FormularioArbol = ({ onInsertarNumero, onBuscarNumero }) => {
  const [numeroInsertar, setNumeroInsertar] = useState('');
  const [numeroBuscar, setNumeroBuscar] = useState('');

  const manejarInsercion = (e) => {
    e.preventDefault();
    const num = parseInt(numeroInsertar);
    if (!isNaN(num)) {
      onInsertarNumero(num);
      setNumeroInsertar('');
    }
  };

  const manejarBusqueda = (e) => {
    e.preventDefault();
    const num = parseInt(numeroBuscar);
    if (!isNaN(num)) {
      onBuscarNumero(num);
      setNumeroBuscar('');
    }
  };

  const insertarEjemplos = () => {
    const ejemplos = [50, 30, 70, 20, 40, 60, 80];
    ejemplos.forEach(num => onInsertarNumero(num));
  };

  return (
    <div className="formulario-arbol">
      <h2>Control del Árbol Binario</h2>
      
      <div className="seccion-insertar">
        <h3>Insertar Número</h3>
        <form onSubmit={manejarInsercion}>
          <input
            type="number"
            value={numeroInsertar}
            onChange={(e) => setNumeroInsertar(e.target.value)}
            placeholder="Ingresa un número"
            className="input-numero"
          />
          <button type="submit" className="btn-insertar">
            Insertar
          </button>
        </form>
        <button onClick={insertarEjemplos} className="btn-ejemplos">
          Insertar Números de Ejemplo
        </button>
      </div>

      <div className="seccion-buscar">
        <h3>Buscar Número</h3>
        <form onSubmit={manejarBusqueda}>
          <input
            type="number"
            value={numeroBuscar}
            onChange={(e) => setNumeroBuscar(e.target.value)}
            placeholder="Buscar un número"
            className="input-numero"
          />
          <button type="submit" className="btn-buscar">
            Buscar
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormularioArbol;