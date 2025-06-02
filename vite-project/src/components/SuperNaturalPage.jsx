function SupernaturalPage() {
  const supernaturalMovies = [
    { title: "El exorcista", year: 1973, entity: "Demonio", rating: "5/5", fear: "Posesión" },
    { title: "El conjuro", year: 2013, entity: "Fantasma", rating: "5/5", fear: "Casa embrujada" },
    { title: "Evil dead rise", year: 2023, entity: "Demonio", rating: "5/5", fear: "Posesión" },
    { title: "Anabelle", year: 2014, entity: "Demonio", rating: "3/5", fear: "Películas malditas" },
  ];

  return (
    <div className="page-content">
      <div className="breadcrumb">
        <span>Películas → Terror → Sobrenatural</span>
      </div>
      
      <h1>Terror Sobrenatural</h1>
      <p>Fuerzas del más allá, demonios y espíritus que desafían toda explicación racional.</p>
      
    
      
      <div className="movies-grid">
        {supernaturalMovies.map((movie, index) => (
          <div key={index} className="card movie-card supernatural-theme">
            <h3>{movie.title}</h3>
            <div className="movie-info">
              <span className="movie-year">{movie.year}</span>
              <span className="movie-entity">{movie.entity}</span>
              <span className="movie-fear">{movie.fear}</span>
              <span className="movie-rating">{movie.rating}</span>
            </div>
            <button className="watch-btn supernatural-btn">Mirar</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SupernaturalPage;