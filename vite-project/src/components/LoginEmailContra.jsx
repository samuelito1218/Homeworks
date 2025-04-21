import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { loginEmailContra } from "../firebase/authActions";

const LoginConEmail = () =>{
    const dispatch = useDispatch();
    const {loading, error} = useSelector((state)=> state.auth);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            alert("Por favor ingresa correo y contraseña");
            return;
          }
          dispatch(loginEmailContra(email, password));
        
        };

        return (
            <div className="container">
              <h2>Iniciar sesión con email</h2>
              <form className="form-container" onSubmit={handleSubmit}>
                <input
                  className="input"
                  type="email"
                  placeholder="Correo Electrónico"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className="input"
                  type="password"
                  placeholder="Contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button className="btn" type="submit">Ingresar</button>
              </form>
            </div>
          );
};
export default LoginConEmail;