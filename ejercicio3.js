function digitoMasAlto(num) {
    let digito = 0;
    while (num > 0) {
        // obtener el último dígito del número
        let resto = num % 10;

        // Math.floor() para sacarle el último dígito y comparar "num" con "resto"
        num = Math.floor(num / 10);

        // comprobar si el último dígito es mayor que el dígito más alto encontrado hasta ahora
        if (resto > digito) digito = resto;
    }
    return digito;
}

console.log(digitoMasAlto(123456));  // 6
console.log(digitoMasAlto(111110));  // 1
console.log(digitoMasAlto(987654));  // 9
console.log(digitoMasAlto(0));       // 0