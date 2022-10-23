function convertir(grados) {
    // extraer la parte numérica del string "grados" y redondearla al entero más cercano
    let gradosNum = Math.round(parseFloat(grados));

    if (grados.includes("C")) {
        let fahrenheit = (gradosNum * 9 / 5) + 32;
        return `${Math.round(fahrenheit)}ºF`;
    }
    if (grados.includes("F")) {
        let celcius = (gradosNum - 32) * 5 / 9;
        return `${Math.round(celcius)}ºC`;
    }
    return "Error";
}

console.log(convertir("35ºC"));     // 95ºF
console.log(convertir("19ºF"));     // -7ºC
console.log(convertir("33"));       // Error
console.log(convertir("212ºF"));    // 100ºC