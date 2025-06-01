import "../styles/TraversalDisplay.css";


const TraversalDisplay = ({ tree }) => {
  const resultadoInorden = tree ? tree.inorden() : [];
  const resultadoPreorden = tree ? tree.preorden() : [];
  const resultadoPostorden = tree ? tree.postorden() : [];

  const FilaRecorrido = ({ titulo, descripcion, resultado, icono, color }) => (
    <div className={`traversal-row ${color}`}>
      <div className="traversal-header">
        <span className="traversal-icon">{icono}</span>
        <div className="traversal-info">
          <h4>{titulo}</h4>
          <p>{descripcion}</p>
        </div>
      </div>
      <div className="traversal-result">
        {resultado.length > 0 ? (
          <div className="result-numbers">
            {resultado.map((num, index) => (
              <span key={index} className="result-number">
                {num}
                {index < resultado.length - 1 && <span className="separator">→</span>}
              </span>
            ))}
          </div>
        ) : (
          <span className="empty-result">Árbol vacío</span>
        )}
      </div>
    </div>
  );

  return (
    <div className="traversal-display-container">
      <h3>Recorridos del Árbol</h3>
      <div className="traversals-grid">
        <FilaRecorrido
          titulo="Inorden"
          descripcion="Izquierda → Raíz → Derecha"
          resultado={resultadoInorden}
          color="blue"
        />
        <FilaRecorrido
          titulo="Preorden"
          descripcion="Raíz → Izquierda → Derecha"
          resultado={resultadoPreorden}
          color="green"
        />
        <FilaRecorrido
          titulo="Postorden"
          descripcion="Izquierda → Derecha → Raíz"
          resultado={resultadoPostorden}
          color="orange"
        />
      </div>

      {resultadoInorden.length > 0 && (
        <div className="traversal-stats">
          <div className="stat-item">
            <span className="stat-label">Total de nodos:</span>
            <span className="stat-value">{resultadoInorden.length}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Valor mínimo:</span>
            <span className="stat-value">{Math.min(...resultadoInorden)}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Valor máximo:</span>
            <span className="stat-value">{Math.max(...resultadoInorden)}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default TraversalDisplay;
