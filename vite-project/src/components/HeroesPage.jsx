function HeroesPage() {
  const heroesMovies = [
    { title: "Iron Man", year: 2008, rating: "5/5" },
    { title: "Batman el caballero de la noche", year: 2008, rating: "5/5" },
    { title: "Avengers: La era de últron", year: 2014, rating: "5/5" },
    { title: "Thor", year: 2011, rating: "4/5" },
    { title: "Avengers End Game", year: 2019, rating: "5/5" },
  ];

  return (
    <div className="page-content">
      <h1>Películas de Heróes</h1>
      <p>acción y fantasía</p>
      
      <div className="movies-grid">
        {heroesMovies.map((movie, index) => (
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
        <h3>¿Por qué elegir peliculas de héroes?</h3>
        <p>Las películas de héroes giran en torno a personajes con habilidades extraordinarias o poderes especiales, quienes luchan contra el mal para proteger a la humanidad.</p>
      </div>
    </div>
  );
}

export default HeroesPage;