import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../firebase/authActions";

const BotonLogOut = () =>{
    const dispatch = useDispatch()
    const {user} = useSelector((state)=>state.auth);

    if (!user) return null;
    return (
        <div className="container">
          <p>Sesión activa: {user.email}</p>
          <button className="btn" onClick={() => dispatch(logoutUser())}>Cerrar sesión</button>
        </div>
      );
};

export default BotonLogOut;