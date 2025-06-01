// Nodo del árbol binario
class NodoArbol {
  constructor(valor) {
    this.valor = valor;
    this.izquierda = null;
    this.derecha = null;
  }
}

// Clase del árbol binario
class ArbolBinario {
  constructor() {
    this.raiz = null;
  }

  // Insertar un valor en el árbol
  insertar(valor) {
    const nuevoNodo = new NodoArbol(valor);
    
    if (this.raiz === null) {
      this.raiz = nuevoNodo;
      return this;
    }

    let actual = this.raiz;
    while (true) {
      if (valor === actual.valor) return undefined; 
      
      if (valor < actual.valor) {
        if (actual.izquierda === null) {
          actual.izquierda = nuevoNodo;
          return this;
        }
        actual = actual.izquierda;
      } else {
        if (actual.derecha === null) {
          actual.derecha = nuevoNodo;
          return this;
        }
        actual = actual.derecha;
      }
    }
  }

  // Buscar un valor en el árbol
  buscar(valor) {
    let actual = this.raiz;
    while (actual) {
      if (valor === actual.valor) {
        return true;
      }
      if (valor < actual.valor) {
        actual = actual.izquierda;
      } else {
        actual = actual.derecha;
      }
    }
    return false;
  }

  // Recorrido Inorder (izquierda -raíz - derecha)
  inorden(nodo = this.raiz, resultado = []) {
    if (nodo !== null) {
      this.inorden(nodo.izquierda, resultado);
      resultado.push(nodo.valor);
      this.inorden(nodo.derecha, resultado);
    }
    return resultado;
  }

  // Recorrido Preorder (raíz - izquierda - derecha)
  preorden(nodo = this.raiz, resultado = []) {
    if (nodo !== null) {
      resultado.push(nodo.valor);
      this.preorden(nodo.izquierda, resultado);
      this.preorden(nodo.derecha, resultado);
    }
    return resultado;
  }

  // Recorrido Postorder (izquierda - derecha - raíz)
  postorden(nodo = this.raiz, resultado = []) {
    if (nodo !== null) {
      this.postorden(nodo.izquierda, resultado);
      this.postorden(nodo.derecha, resultado);
      resultado.push(nodo.valor);
    }
    return resultado;
  }

  aFormatoD3(nodo = this.raiz) {
    if (!nodo) return null;

    const nodoD3 = {
      name: nodo.valor.toString(),
      attributes: {
        valor: nodo.valor
      }
    };

    const hijos = [];
    if (nodo.izquierda) hijos.push(this.aFormatoD3(nodo.izquierda));
    if (nodo.derecha) hijos.push(this.aFormatoD3(nodo.derecha));
    
    if (hijos.length > 0) {
      nodoD3.children = hijos;
    }

    return nodoD3;
  }

  imprimirRecorridos() {
    console.group('Recorridos del Árbol Binario');
    console.log('Inorden (Izq-Raíz-Der):', this.inorden());
    console.log('Preorden (Raíz-Izq-Der):', this.preorden());
    console.log('Postorden (Izq-Der-Raíz):', this.postorden());
    console.groupEnd();
  }
}

export default ArbolBinario;