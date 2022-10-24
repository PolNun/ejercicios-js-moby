function sumarLosDosMenores(arrayNums) {
    const arrayPositivos = sacarNumerosNegativos(arrayNums);
    // obtener el primer número menor positivo
    const min1 = Math.min(...arrayPositivos);

    // identificar el índice del primer número menor
    const index = arrayPositivos.indexOf(min1);

    // eliminar el primer número menor del array
    arrayPositivos.splice(index, 1);

    // obtener el segundo número menor positivo
    const min2 = Math.min(...arrayPositivos);

    // sumar los dos números menores y devolver el resultado
    return min1 + min2;
}

function sacarNumerosNegativos(arrayNums) {
    return arrayNums.filter(num => num > 0);
}

console.log(sumarLosDosMenores([19, 5, 42, 2, 77]));                                    // 7
console.log(sumarLosDosMenores([10, 343445353, 3453445, 3453545353453]));               // 3453455
console.log(sumarLosDosMenores([2, 9, 6, -1]));                                         // 8
console.log(sumarLosDosMenores([879, 953, 694, -847, 342, 221, -91, -723, 791, -587])); // 563

/* Esta es una alternativa que me costó bastante pensar y resolver,
asi que opté por hacerlo distinto y más simple con el método filter */

// function sacarNumerosNegativos(arrayNums) {
//     const arrayPositivo = [];
//     arrayNums.forEach((num, i) => {
//         if (num <= 0) {
//             arrayNums.splice(i, this);
//         } else {
//             arrayPositivo.push(num);
//         }
//     });
//     return arrayPositivo;
// }
//
// function sacarNumerosNegativos2(arrayNums) {
//     return arrayNums.filter(num => num > 0);
// }
//
// const numeros = [879, 953, 694, -847, 342, 221, -91, -723, 791, -587];
// console.log(sacarNumerosNegativos(numeros));
// console.log(sacarNumerosNegativos2(numeros));
