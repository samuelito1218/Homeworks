function MoviesPage() {
  return (
    <div className="page-content">
      <h1>Películas</h1>
      <p>Catálogo de películas por categorías</p>
      
      <div className="categories-grid">
        <div className="card category-card">
          <h3>Acción</h3>
          <p>Aventuras y peleas épicas</p>
        </div>
        
        <div className="card category-card">
          <h3>Héroes</h3>
          <p>Superhéroes y aventuras</p>
        </div>
        
        <div className="card category-card">
          <h3>Terror</h3>
          <p>Películas de miedo y suspenso</p>
        </div>
      </div>
      
      <div className="card">
        <h3>Navegación</h3>
        <p>Usa el menú lateral para explorar cada categoría.</p>
      </div>
    </div>
  );
}

export default MoviesPage;