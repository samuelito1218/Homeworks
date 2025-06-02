function HomePage(){
    return(
        <div className="page-content">
            <div className="hero-action">
                <h1>Bienvenido a Cineworld</h1>
                <p className="hero-subtitle">Tu biblioteca personal de películas, organizadas por categorías</p>

            </div>

            <div className="features-grid">
                <div className="card feature-card">
                    <h3>Explorar por géneros</h3>
                    <p>Descubre peliculas organizadas por categorías; Acción, Horror, Heroes, etc</p>
                </div>
            <div className="card feature-card">
                    <h3>Navegación fácil</h3>
                    <p>Usa el menú literal para navegar fácilmente entre categorías y subcategorías</p>
                </div>
            </div>
            
        </div>
    );



};

export default HomePage;