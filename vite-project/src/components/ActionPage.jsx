function ActionPage() {
  const actionMovies = [
    { title: "Duro de matar", year: 1988, rating: "5/5" },
    { title: "John Wick", year: 2014, rating: "4/5" },
    { title: "Misión imposible", year: 1991, rating: "5/5" },
    { title: "Depredador", year: 1987, rating: "4/5" },
    { title: "Búsqueda implacable", year: 2008, rating: "5/5" },
  ];

  return (
    <div className="page-content">
      <h1>Películas de Acción</h1>
      <p>adrenalina pura y peleas épicas</p>
      
      <div className="movies-grid">
        {actionMovies.map((movie, index) => (
          <div key={index} className="card movie-card">
            <h3>{movie.title}</h3>
            <div className="movie-info">
              <span className="movie-year">{movie.year}</span>
              <span className="movie-rating">{movie.rating}</span>
            </div>
            <button className="watch-btn">Ver Ahora</button>
          </div>
        ))}
      </div>
      
      <div className="genre-info">
        <h3>¿Por qué elegir peliculas de acción?</h3>
        <p>Las películas de acción se caracterizan por escenas intensas y emocionantes, como peleas, persecusiones, explosiones. Donde el protagonista suele enfrentar grandes desafios</p>
      </div>
    </div>
  );
}

export default ActionPage;