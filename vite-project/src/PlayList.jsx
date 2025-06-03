import React, { useState, useRef, useEffect } from "react";
import LinkedList from "./LinkedList";
import BrowserNavigation from "./BrowserNavigation";
import styles from "./styles/components/PlayList.module.scss";

const Playlist = () => {
    const lista = useRef(new LinkedList());
    const cancionesAgregadas = useRef(false);

    useEffect(() => {
        if (!cancionesAgregadas.current) {
            lista.current.agregarUnElementoLista("Lost on You - LP");
            lista.current.agregarUnElementoLista("Apologize - OneRepublic");
            lista.current.agregarUnElementoLista("505 - Arctic Monkeys");
            lista.current.agregarUnElementoLista("Do I Wanna Know? - Arctic Monkeys");
            lista.current.agregarUnElementoLista("Sweater Weather - The Neighbourhood");
            lista.current.agregarUnElementoLista("R.I.P. 2 My Youth - The Neighbourhood");
            lista.current.agregarUnElementoLista("Demons - Imagine Dragons");
            lista.current.agregarUnElementoLista("Radioactive - Imagine Dragons");

            cancionesAgregadas.current = true;
            setCancionActual(lista.current.obtenerCancionActual());
            setHaySiguienteCancion(lista.current.obtenerSiguienteCancion() !== null);
        }
    }, []);

    const [cancionActual, setCancionActual] = useState("");
    const [haySiguienteCancion, setHaySiguienteCancion] = useState(false);

    const siguienteCancion = () => {
        if (!haySiguienteCancion) return;

        lista.current.avanzarCancion();

        const nuevaCancion = lista.current.obtenerCancionActual();
        const siguiente = lista.current.obtenerSiguienteCancion();

        if (!nuevaCancion) {
            setCancionActual("No hay más canciones");
            setHaySiguienteCancion(false);
            return;
        }

        setCancionActual(nuevaCancion);
        setHaySiguienteCancion(siguiente !== null);
    };

    return (
        <div className={styles.container}>
            <div className={styles.player}>
                <h2 className={styles.playerTitle}>
                    Reproductor de Música
                </h2>
                
                <div className={styles.songTitle}>
                     {cancionActual}
                </div>
                
                <p className={styles.nextSong}>
                    {haySiguienteCancion 
                        ? `Siguiente: ${lista.current.obtenerSiguienteCancion()}` 
                        : "No hay más canciones en la lista"}
                </p>

                <button 
                    onClick={siguienteCancion} 
                    className={styles.btn}
                    disabled={!haySiguienteCancion}
                >
                    ⏭ Siguiente Canción
                </button>
            </div>

            <BrowserNavigation />
        </div>
    );
};

export default Playlist;