import { useState, useEffect } from 'react';
import ArbolBinario from './utils/BinaryTree';
import FormularioArbol from './components/FormularioArbol';
import VisualizadorArbol from './components/VisualizadorArbol';
import TraversalDisplay from './components/TraversalDisplay';
import './App.css';

function App() {
  const [arbol] = useState(() => new ArbolBinario());
  const [datosArbol, setDatosArbol] = useState(null);

  const insertarNumero = (numero) => {
    arbol.insertar(numero);
    
    console.log('\n Recorridos del árbol:');
    console.log('Inorden:', arbol.inorden());
    console.log('Preorden:', arbol.preorden());
    console.log('Postorden:', arbol.postorden());
    
    actualizarVisualizacion();
  };

  const buscarNumero = (numero) => {
    const encontrado = arbol.buscar(numero);
    
    console.log(`\n búsqueda: El número ${numero} ${encontrado ? 'SÍ está' : 'No está'} en el árbol`);
    
    alert(`Búsqueda: ${numero} ${encontrado ? 'encontrado' : 'no encontrado'}`);
    
    return encontrado;
  };

  const actualizarVisualizacion = () => {
    const datosD3 = arbol.aFormatoD3();
    setDatosArbol(datosD3);
  };

  

  return (
    <div className="app">
      <header className="app-header">
        <h1>Árbol binario</h1>
      </header>

      <main className="app-main">
        <FormularioArbol 
          onInsertarNumero={insertarNumero}
          onBuscarNumero={buscarNumero}
        />

        <VisualizadorArbol 
          datosArbol={datosArbol}
        />

        <TraversalDisplay tree={arbol} />
      </main>

      <footer className="app-footer">
        <p>F12 para ver los recorridos impresos</p>
      </footer>
    </div>
  );
}

export default App;