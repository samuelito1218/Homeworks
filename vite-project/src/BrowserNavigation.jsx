import React, { useState, useRef, useEffect } from "react";
import DoublyLinkedList from "./DoubleLinkedList";
import { useNavigate, useLocation } from "react-router-dom";

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

    return (
        <div className="historial">
          <h2>Historial del Navegador</h2>
          <p><strong>Página actual:</strong> {paginaActual}</p>
          <p><strong>Anterior:</strong> {navegador.current ? navegador.current.obtenerAnterior() : "No disponible"}</p>
          <p><strong>Siguiente:</strong> {navegador.current ? navegador.current.obtenerSiguiente() : "No disponible"}</p>
          <button onClick={retroceder} className="btn">← Atrás</button>
          <button onClick={avanzar} className="btn">Adelante →</button>
        </div>
      );
      
};

export default BrowserNavigation;
