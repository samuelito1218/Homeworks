import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { fetchUsers } from '../firebase/userActions';

function ListaUsuarios({ onSelectUser }) {
  const { user } = useSelector((state) => state.auth);
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const obtenerUsuarios = async () => {
      const allUsers = await fetchUsers();

      // Se excluye al usuario de la sesión actual (no se puede chatear con uno mismo)
      const filteredUsers = allUsers.filter(u => u.uid !== user.uid);
      setUsuarios(filteredUsers);  
    };

    obtenerUsuarios();
  }, [user]);

  return (
    <div>
      <h3>Selecciona un usuario para chatear:</h3>
      <ul>
        {usuarios.map((u) => (
          <li key={u.uid}>
            <button onClick={() => onSelectUser(u)} className="btn">
              {u.displayName && u.displayName !== "Sin nombre" ? u.displayName : u.email}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaUsuarios;
