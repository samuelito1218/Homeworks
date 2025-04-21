import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems, deleteItem, updateItem } from "../firebase/dataActions"; 

const DataList = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.data.items); 
  const [editing, setEditing] = useState(null);
  const [newName, setNewName] = useState("");
  const [newDescription, setNewDescription] = useState(""); 

  useEffect(() => {
    dispatch(fetchItems()); 
  }, [dispatch]);

  const handleUpdate = (id) => {
    // Se actualiza el nombre y la descripción
    dispatch(updateItem(id, { nombre: newName, descripcion: newDescription }));
    setEditing(null);
  };

  const handleEditClick = (item) => {
    setEditing(item.id);
    setNewName(item.nombre); 
    setNewDescription(item.descripcion); 
  };

  if (!Array.isArray(items)) {
    return <p>Cargando documentos...</p>;
  }

  return (
    <div className="list-container">
      <h3>Lista de documentos</h3>
      <ul>
        {items.map((item) => (
          <li key={item.id} className="list-item">
            {editing === item.id ? (
              <>
                <input
                  className="input"
                  type="text"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder="Nuevo nombre"
                />
                <input
                  className="input"
                  type="text"
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                  placeholder="Nueva descripción"
                />
                <button className="btn" onClick={() => handleUpdate(item.id)}>Guardar</button>
              </>
            ) : (
              <>
                <strong>{item.nombre}</strong>: {item.descripcion}
                <button className="btn" onClick={() => setEditing(item.id)}>Editar</button>
              </>
            )}
            <button className="btn" onClick={() => dispatch(deleteItem(item.id))}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataList;
