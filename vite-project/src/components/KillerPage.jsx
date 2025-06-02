function KillerPage() {
  const killerMovies = [
    { title: "Halloween", year: 1978, killer: "Michael Myers", rating: "5/5", weapon: "Cuchillo" },
    { title: "Friday the 13th", year: 1980, killer: "Jason Voorhees", rating: "5/5", weapon: "Machete" },
    { title: "A Nightmare on Elm Street", year: 1984, killer: "Freddy Krueger", rating: "5/5", weapon: "Garras" },
    { title: "Scream", year: 1996, killer: "Ghostface", rating: "5/5", weapon: "Cuchillo" },
    { title: "The Texas Chain Saw Massacre", year: 1974, killer: "Leatherface", rating: "5/5", weapon: "Motosierra" }
  ];

  return (
    <div className="page-content">
      <div className="breadcrumb">
        <span> Películas →  Terror →  Asesinos</span>
      </div>
      
      <h1>Terror de Asesinos</h1>
      <p>Los psicópatas más aterradores del cine que han marcado generaciones de espectadores.</p>
      <div className="movies-grid">
        {killerMovies.map((movie, index) => (
          <div key={index} className="card movie-card killer-theme">
            <h3>{movie.title}</h3>
            <div className="movie-info">
              <span className="movie-year">{movie.year}</span>
              <span className="movie-killer">{movie.killer}</span>
              <span className="movie-weapon">{movie.weapon}</span>
              <span className="movie-rating">{movie.rating}</span>
            </div>
            <button className="watch-btn killer-btn"> Ver ahora</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default KillerPage;