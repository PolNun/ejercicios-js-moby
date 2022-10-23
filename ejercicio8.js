function vocalesANumeros(cadena = "") {
    let resultado = "";
    for (let i = 0; i < cadena.length; i++) {
        switch (cadena.charAt(i)) {
            case "A":
            case "a":
                resultado += "1";
                break;
            case "E":
            case "e":
                resultado += "2";
                break;
            case "I":
            case "i":
                resultado += "3";
                break;
            case "O":
            case "o":
                resultado += "4";
                break;
            case "U":
            case "u":
                resultado += "5";
                break;
            default:
                resultado += cadena.charAt(i);
        }
    }
    return resultado;
}

console.log(vocalesANumeros("hola"));           // h4l1
console.log(vocalesANumeros("lorem ipsum"));    // l4r2m 3ps5m
console.log(vocalesANumeros("federico"));       // f2d2r3c4
console.log(vocalesANumeros("maximiliano"));    // m1x3m3l31n4
