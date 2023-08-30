class Nodo {
    constructor(valor) {
      this.valor = valor;
      this.siguiente = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.cabeza = null;
    }
  
    agregar(valor) {
      const nuevoNodo = new Nodo(valor);
      if (!this.cabeza) {
        this.cabeza = nuevoNodo;
      } else {
        let actual = this.cabeza;
        while (actual.siguiente) {
          actual = actual.siguiente;
        }
        actual.siguiente = nuevoNodo;
      }
    }
  
    imprimir() {
      let actual = this.cabeza;
      while (actual) {
        console.log(actual.valor);
        actual = actual.siguiente;
      }
    }
  }
  
  function concatenarListasOrdenadas(lista1, lista2) {
    const listaConcatenada = new LinkedList();
    let actual1 = lista1.cabeza;
    let actual2 = lista2.cabeza;
  
    while (actual1 !== null && actual2 !== null) {
      if (actual1.valor <= actual2.valor) {
        listaConcatenada.agregar(actual1.valor);
        actual1 = actual1.siguiente;
      } else {
        listaConcatenada.agregar(actual2.valor);
        actual2 = actual2.siguiente;
      }
    }
  
   
    while (actual1 !== null) {
      listaConcatenada.agregar(actual1.valor);
      actual1 = actual1.siguiente;
    }
  
    while (actual2 !== null) {
      listaConcatenada.agregar(actual2.valor);
      actual2 = actual2.siguiente;
    }
  
    return listaConcatenada;
  }
  
  
  const lista1 = new LinkedList();
  lista1.agregar(1);
  lista1.agregar(3);
  lista1.agregar(5);
  
  const lista2 = new LinkedList();
  lista2.agregar(2);
  lista2.agregar(4);
  lista2.agregar(6);
  
  
  const listaConcatenada = concatenarListasOrdenadas(lista1, lista2);
  console.log("Lista concatenada:");
  listaConcatenada.imprimir();