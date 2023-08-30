function invertirPila(pila) {
    const nuevaPila = [];
  
    while (pila.length > 0) {
      nuevaPila.push(pila.pop());
    }
  
    return nuevaPila;
  }
  

  const pila = ['andres', 'kenny', 'chistain', 'anna', 'jorge'];
  const pilaInvertida = invertirPila(pila);
  
  console.log(pila);
  console.log(pilaInvertida);