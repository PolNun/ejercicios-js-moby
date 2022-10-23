function cantidadLetrasEnCadena(letra, cadena) {
    let contador = 0;
    // recorrer la cadena de caracteres
    for (let i = 0; i < cadena.length; i++) {
        // si el caracter en la posición "i" es igual a la letra, incrementar el contador
        if (cadena[i] === letra) contador++;
    }
    return contador;
}

console.log(cantidadLetrasEnCadena("m", "esternocleidomastoideo"));    // 1
console.log(cantidadLetrasEnCadena("o", "osos escandalosos"));         // 4
console.log(cantidadLetrasEnCadena("b", "MOBY"));                      // 0
console.log(cantidadLetrasEnCadena("y", "i griega o ye"));             // 1