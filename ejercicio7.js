function diasHastaLaFecha(fecha) {
    // convertir el string de la fecha a un objeto Date
    let fechaObj = new Date(fecha);

    // obtener la fecha actual
    let fechaActual = new Date();

    // calcular la diferencia entre las fechas en milisegundos
    let diferencia = fechaObj - fechaActual;

    if (diferencia < 0) return "La fecha que ingresaste ya pasó";
    // convertir la diferencia en días
    let cantDias = Math.round(diferencia / (1000 * 60 * 60 * 24));

    return `Faltan ${cantDias} días para la fecha`;
}

console.log(diasHastaLaFecha("10/31/2022"));
console.log(diasHastaLaFecha("12/31/2022"));
console.log(diasHastaLaFecha("10/18/2023"));
console.log(diasHastaLaFecha("01/03/2023"));
console.log(diasHastaLaFecha("pan con queso"));