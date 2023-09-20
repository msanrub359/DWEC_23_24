"use strict";
let numSemana = prompt("Introduzca nº semana [1-4]");
let resultado;

switch (numSemana) {
  case "1":
    resultado = "lunes";
    break;
  case "2":
    resultado = "martes";
    break;
  case "3":
    resultado = "miércoles";
    break;
  case "4":
    resultado = "jueves";
    break;
  default:
    resultado = "nº semana erróneo";
    break;
}
console.log(`El día de la semana es ${resultado}`);