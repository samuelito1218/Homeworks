import React, { useState, useRef, useEffect } from "react";
import DoublyLinkedList from "./DoubleLinkedList";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./styles/components/BrowserNavigation.module.scss";

const BrowserNavigation = () => {
    const navegador = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();
    const [paginaActual, setPaginaActual] = useState("");

    useEffect(() => {
        if (!navegador.current) {
            navegador.current = new DoublyLinkedList();
            navegador.current.agregarPagina("/");
            navegador.current.agregarPagina("/playlist");
            navegador.current.agregarPagina("/goodbye");
        }

        let paginaActual = location.pathname;
        let nodo = navegador.current.head;
        while (nodo) {
            if (nodo.value === paginaActual) {
                navegador.current.current = nodo;
                break;
            }
            nodo = nodo.next;
        }

        setPaginaActual(navegador.current.obtenerPaginaActual());
    }, [location.pathname]);

    function retroceder() {
        let nuevaPagina = navegador.current.retroceder();
        if (nuevaPagina) {
            setPaginaActual(nuevaPagina.value);
            navigate(nuevaPagina.value);
        }
    }

    function avanzar() {
        let nuevaPagina = navegador.current.avanzar();
        if (nuevaPagina) {
            setPaginaActual(nuevaPagina.value);
            navigate(nuevaPagina.value);
        }
    }

    const getPageName = (path) => {
        const pages = {
            '/': 'Inicio',
            '/playlist': 'Lista de Reproducción',
            '/goodbye': 'Despedida',
            '/browser-navigation': 'Navegación'
        };
        return pages[path] || path;
    };

    return (
        <div className={styles.historial}>
            <h2 className={styles.title}>
                Historial del Navegador
            </h2>
            
            <div className={styles.navigationInfo}>
                <div className={styles.infoItem}>
                    <span className={styles.label}>Página actual</span>
                    <span className={styles.value}>
                        {getPageName(paginaActual)}
                    </span>
                </div>
                
                <div className={styles.infoItem}>
                    <span className={styles.label}>Anterior</span>
                    <span className={styles.value}>
                        {navegador.current ? 
                            getPageName(navegador.current.obtenerAnterior()) : 
                            "No disponible"}
                    </span>
                </div>
                
                <div className={styles.infoItem}>
                    <span className={styles.label}>Siguiente</span>
                    <span className={styles.value}>
                        {navegador.current ? 
                            getPageName(navegador.current.obtenerSiguiente()) : 
                            "No disponible"}
                    </span>
                </div>
            </div>

            <div className={styles.navigationButtons}>
                <button 
                    onClick={retroceder} 
                    className={`${styles.btn} ${styles.backBtn}`}
                    disabled={!navegador.current?.current?.prev}
                >
                    ⬅ Atrás
                </button>
                <button 
                    onClick={avanzar} 
                    className={`${styles.btn} ${styles.forwardBtn}`}
                    disabled={!navegador.current?.current?.next}
                >
                    Adelante ➡
                </button>
            </div>
        </div>
    );
};

export default BrowserNavigation;