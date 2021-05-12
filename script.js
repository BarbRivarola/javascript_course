var acumuladorNotas=0;
var promedio;
var cantNotas= parseInt(prompt('que cantidad de notas vas a promediar?'));

for (let i = 1; i<=cantNotas; i++) {
    let nota = parseInt (prompt('ingrese la nota'+i));
    acumuladorNotas = acumuladorNotas + nota;
}

promedio=acumuladorNotas/cantNotas;
alert('el promedio de tus notas es:' +promedio);