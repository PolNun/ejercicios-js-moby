function ordenarDescendiente(num) {
    // convertir el número a un string de dígitos
    let numStr = num.toString();

    // convertir el string de dígitos a un array de dígitos
    let numArr = numStr.split('');

    // ordenar el array de dígitos de menor a mayor
    let numArrSorted = numArr.sort();

    // invertir el array de dígitos para que quede de mayor a menor
    let numArrSortedDesc = numArrSorted.reverse();

    // convertir el array de dígitos a un string de dígitos
    let numStrSortedDesc = numArrSortedDesc.join('');

    // convertir el string de dígitos a un número
    return parseInt(numStrSortedDesc);
}

console.log(ordenarDescendiente(123456));  // 654321
console.log(ordenarDescendiente(111110));  // 111110
console.log(ordenarDescendiente(987654));  // 987654
console.log(ordenarDescendiente(7306));    // 7630