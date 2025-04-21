import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNewItem } from "../firebase/dataActions";

const AddDataForm = () => {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.user?.uid);

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!nombre.trim() || !descripcion.trim() || !userId) {
      alert("Completa todos los campos o asegúrate de que el usuario esté autenticado");
      return;
    }
    console.log("Enviando a Firestore:", { nombre, descripcion, userId });

  
    dispatch(createNewItem({ nombre, descripcion }));
    setNombre("");
    setDescripcion("");
  };
  

  return (
    <div className="container">
      <h2>Agregar Documento</h2>
      <form className="form-container" onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          placeholder="Nombre del documento"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          className="input"
          type="text"
          placeholder="Descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
        <button className="btn" type="submit">Agregar</button>
      </form>
    </div>
  );
};

export default AddDataForm;
