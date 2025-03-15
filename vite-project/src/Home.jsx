import { Link } from "react-router-dom";
import "./Home.css"; 

const Home = () => {
    return (
        <div className="home-container">
            <div className="box">
                <h1>Home</h1>
                <p>Aún no has iniciado sesión</p>
                <Link to="/login" className="btn">Ir a iniciar sesión</Link>
            </div>
        </div>
    );
};

export default Home;
