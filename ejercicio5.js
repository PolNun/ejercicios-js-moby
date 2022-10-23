const regexCodigoPostal = /^\d{4}$/;

const validarCodigoPostal = codigoPostal => regexCodigoPostal.test(codigoPostal);

console.log(validarCodigoPostal("5929"));   // true
console.log(validarCodigoPostal("12345"));  // false
console.log(validarCodigoPostal("A123"));   // false
console.log(validarCodigoPostal("ABCD"));   // false