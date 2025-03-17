class DoublyNode {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.current = null;
    }

    agregarPagina(value) {
        const newNode = new DoublyNode(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.current = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    avanzar() {
        if (this.current && this.current.next) {
            this.current = this.current.next;
            return this.current;
        }
        return null;
    }

    retroceder() {
        if (this.current && this.current.prev) {
            this.current = this.current.prev;
            return this.current;
        }
        return null;
    }

    obtenerPaginaActual() {
        return this.current ? this.current.value : "No hay páginas visitadas";
    }

    obtenerAnterior() {
        return this.current && this.current.prev ? this.current.prev.value : "Ninguna";
    }

    obtenerSiguiente() {
        return this.current && this.current.next ? this.current.next.value : "Ninguna";
    }
}

export default DoublyLinkedList;
