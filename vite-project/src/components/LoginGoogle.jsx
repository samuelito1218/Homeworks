import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginGoogle } from "../firebase/authActions";

const LoginConGoogle = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  const handleLoginGoogle = () => {
    dispatch(loginGoogle());
  };

  return (
    <div className="container">
      <button className="btn" onClick={handleLoginGoogle}>Iniciar sesión con Google</button>
    </div>
  );
};

export default LoginConGoogle;
