function HorrorPage() {
  return (
    <div className="page-content">
      <h1>Películas de Terror</h1>
      <p><strong>Advertencia:</strong> Solo para mayores de 18.</p>
      <div className="subcategories">
        <div className="card subcategory-card horror-sub">
          <h3>Terror de Asesinos</h3>
          <p>Psicópatas, asesinos en serie, violencia y suspenso</p>
          <p className="navigate-hint"> Navega desde el menú lateral</p>
        </div>
        
        <div className="card subcategory-card horror-sub">
          <h3>Terror Sobrenatural</h3>
          <p>Fantasmas, demonios y fuerzas del más allá que desafían toda.</p>
          <p className="navigate-hint">Navega desde el menú lateral</p>
        </div>
      </div>
      <div className="genre-info horror-info">
        <h3>¿Por qué elegir películas de terror?</h3>
        <p>Las películas de terror estan diseñadas para provocar miedo, suspenso o inquietud. Usando elementos como lo sobrenatural, monstruos, asesinos, o situaciones extremas.</p>
    </div>
    </div>
  );
}

export default HorrorPage;