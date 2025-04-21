import { ref, push, onValue, remove } from "firebase/database";
import { realtimeDb } from "../firebase/config";
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const Chat = ({ contacto }) => {
  const { user } = useSelector((state) => state.auth);
  const [mensajes, setMensajes] = useState([]);
  const [nuevoMensaje, setNuevoMensaje] = useState("");

  if (!contacto || !contacto.uid) {
    return <p>Selecciona un contacto válido para chatear.</p>;
  }

  const chatPath = [user.uid, contacto.uid].sort().join("_");

  useEffect(() => {
    const mensajesRef = ref(realtimeDb, `messages/${chatPath}`);
    const unsubscribe = onValue(mensajesRef, (snapshot) => {
      const data = snapshot.val();
      const mensajesArray = data ? Object.values(data) : [];
      setMensajes(mensajesArray);
    });

    return () => unsubscribe();
  }, [chatPath]);

  const enviarMensaje = () => {
    if (nuevoMensaje.trim() === "") return;

    const mensajesRef = ref(realtimeDb, `messages/${chatPath}`);
    push(mensajesRef, {
      sender: user.uid,
      receiver: contacto.uid,
      text: nuevoMensaje,
      timestamp: Date.now()
    });
    setNuevoMensaje("");
  };

  const vaciarChat = () => {
    const confirmacion = window.confirm("¿Estás seguro de que quieres vaciar el chat?"); //Se vacia el chat para ambos y pueden iniciar una nueva conversación
    if (!confirmacion) return;
  
    const mensajesRef = ref(realtimeDb, `messages/${chatPath}`);
    remove(mensajesRef)
      .then(() => console.log("Chat eliminado"))
      .catch((error) => console.error("Error al eliminar el chat:", error));
  };
  

  const getNombre = (usuario) =>
    usuario.displayName && usuario.displayName !== "Sin nombre"
      ? usuario.displayName
      : usuario.email;

      return (
        <div className="chat-box">
          <div className="chat-header">
            <h4>Conversación con {getNombre(contacto)}</h4>
            <button className="vaciar-btn" onClick={vaciarChat}>🗑️ Vaciar chat</button>
          </div>
      
          <div className="mensajes">
            {mensajes.map((msg, i) => {
              const isOwn = msg.sender === user.uid;
              return (
                <div key={i} className={`mensaje ${isOwn ? "propio" : "ajeno"}`}>
                  <p><strong>{isOwn ? "Tú" : getNombre(contacto)}:</strong></p>
                  <div className="burbuja">
                    <span>{msg.text}</span>
                  </div>
                </div>
              );
            })}
          </div>
      
          <div className="input-box">
            <input
              value={nuevoMensaje}
              onChange={(e) => setNuevoMensaje(e.target.value)}
              placeholder="Escribe un mensaje..."
            />
            <button onClick={enviarMensaje}>Enviar</button>
          </div>
        </div>
      );
      
};



export default Chat;
