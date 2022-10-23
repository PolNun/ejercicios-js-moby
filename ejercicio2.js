function minMax(numeros) {
    let min = numeros[0];
    let max = numeros[0];
    for (const numero of numeros) {
        if (numero < min) min = numero;
        if (numero > max) max = numero;
    }
    return [min, max];
}

console.log(minMax([1, 2, 3, 4, 5]));     // [1, 5]
console.log(minMax([5, 4, 3, 2, 1]));     // [1, 5]
console.log(minMax([2334454, 5]));        // [5, 2334454]
console.log(minMax([1]));                 // [1, 1]