function calculadora(a, operador, b) {
    switch (operador) {
        case '':
            return 'Debe proveer un operador matemático';
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            if (b === 0) return 'No se puede dividir por cero';
            return a / b;
        default:
            return 'Operador inválido';
    }
}

console.log(calculadora(1, '+', 2));      // 3
console.log(calculadora(1, '-', 2));      // -1
console.log(calculadora(1, '*', 2));      // 2
console.log(calculadora(1, '/', 2));      // 0.5
console.log(calculadora(1, 'a', 2));      // Operador inválido
console.log(calculadora(1, '', 2));       // Debe proveer un operador matemático
console.log(calculadora(1, '/', 0));      // No se puede dividir por cero