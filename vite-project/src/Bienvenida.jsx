import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import "./Bienvenida.css";

const Bienvenida = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const cerrarSesion = () => {
        logout();
        navigate("/"); 
    };

    return (
        <div className="bienvenida-container">
            
                <h1>Bienvenid@, {user?.name}!</h1>
                <button onClick={cerrarSesion}>Cerrar sesión</button>
            
        </div>
    );
};

export default Bienvenida;
