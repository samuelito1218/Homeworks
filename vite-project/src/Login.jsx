import { useState } from "react";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();

    const loguearse = () => {
        if (login(username, password)) {
            navigate("/bienvenida"); 
        } else {
            setError("Usuario o contraseña incorrectos");
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <input 
                type="text" 
                placeholder="Nombre de Usuario" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)}
            />
            <input 
                type="password" 
                placeholder="Contraseña" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={loguearse}>Iniar Sesión</button>
        </div>
    );
};

export default Login;
