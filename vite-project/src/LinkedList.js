import Node from "./Node";

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.current = null;
        this.length = 0; 
    }

    agregarUnElementoLista(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.current = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.tail.next = null; 
        this.length++;
        
    }

    obtenerCancionActual() {
        return this.current ? this.current.value : "No hay canciones disponibles";
    }

    obtenerSiguienteCancion() {
        return this.current && this.current.next ? this.current.next.value : null;
    }

    avanzarCancion() {

        if (this.current && this.current.next) {
            this.current = this.current.next;
        } else {
            this.current = null; 
        }

    }
}

export default LinkedList;
