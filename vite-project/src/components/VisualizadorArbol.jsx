import { useEffect, useRef, useState } from 'react';
import Tree from 'react-d3-tree';
import '../styles/VisualizadorArbol.css';

const VisualizadorArbol = ({ datosArbol }) => {
  const contenedorRef = useRef(null);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (contenedorRef.current) {
      const { width, height } = contenedorRef.current.getBoundingClientRect();
      setTranslate({
        x: width / 2,
        y: height / 4
      });
    }
  }, [datosArbol]);

  const renderizarNodo = ({ nodeDatum }) => (
    <g>
      <circle
        r="20"
        fill="#4CAF50"
        stroke="#2E7D32"
        strokeWidth="2"
      />
      <text
        fill="white"
        strokeWidth="0"
        textAnchor="middle"
        dy="0.3em"
        fontSize="14"
        fontWeight="bold"
      >
        {nodeDatum.name}
      </text>
    </g>
  );

  return (
    <div className="visualizador-arbol">
      <h2>Visualización del Árbol</h2>
      <div 
        ref={contenedorRef}
        className="contenedor-arbol"
        style={{ width: '100%', height: '500px' }}
      >
        {datosArbol ? (
          <Tree
            data={datosArbol}
            translate={translate}
            nodeSize={{ x: 150, y: 150 }}
            separation={{ siblings: 1, nonSiblings: 2 }}
            renderCustomNodeElement={renderizarNodo}
            orientation="vertical"
            pathFunc="diagonal"
            zoom={0.8}
          />
        ) : (
          <div className="arbol-vacio">
            <p>Inserta números para ver el árbol</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VisualizadorArbol;