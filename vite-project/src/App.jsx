import React, { useState } from 'react';
import "./Styles.css";
import { useSelector } from 'react-redux';
import LoginConEmail from './components/LoginEmailContra';
import LoginConGoogle from './components/LoginGoogle';
import BotonLogOut from './components/LogOut';
import AddDataForm from './components/AddDataForm';
import DataList from './components/DataList';
import Chat from './components/Chat';
import ListaUsuarios from './components/ListaUsuarios';

function App() {
  const { user, loading } = useSelector((state) => state.auth);
  const [contactoSeleccionado, setContactoSeleccionado] = useState(null);

  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Mi App con Firebase Auth + Firestore CRUD + Chat</h1>

      {loading && <p>Cargando...</p>}

      {!loading && !user && (
        <>
          <LoginConEmail />
          <hr />
          <LoginConGoogle />
        </>
      )}

      {!loading && user && (
        <>
          <p>
            Bienvenido,{" "}
            {user.displayName && user.displayName !== "Sin nombre"
              ? user.displayName
              : user.email}
          </p>

          <BotonLogOut />

          <hr />
          <h2>Gestión de documentos</h2>
          <AddDataForm />
          <DataList />

          <hr />
          <h2>Chat en tiempo real</h2>
          {!contactoSeleccionado ? (
            <ListaUsuarios onSelectUser={setContactoSeleccionado} />
          ) : (
            <>
              <button className="btn" onClick={() => setContactoSeleccionado(null)}>
                ← Volver a usuarios
              </button>
              <Chat contacto={contactoSeleccionado} />
            </>
          )}
        </>
      )}
    </div>
  );
}

export default App;
