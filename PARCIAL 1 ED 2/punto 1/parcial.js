const cola = [1.5, 2.5, 3.5, 4.5, 5.5]

function invertir_cola(cola) {
    const nuevacola = [];

    while (cola.length > 0){
        nuevacola.unshift(cola.shift());   
    }
    return nuevacola;
}  


const nuevacola = invertir_cola(cola);

console.log(cola)
console.log(nuevacola)