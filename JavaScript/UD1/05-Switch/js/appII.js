"use strict";
let nota = prompt("Introduzca nota [1-10]");
let resultado;

switch (true) {
  case nota >= 1 && nota <= 4:
    resultado = "Insuficiente";
    break;
  case nota == 5:
    resultado = "suficiente";
    break;
  case nota == 6:
    resultado = "Bien";
    break;
  case nota >= 7 && nota <= 8:
    resultado = "notable";
    break;
  case nota >= 9 && nota <= 10:
    resultado = "sobresaliente";
    break;
  default:
    resultado = "la nota es errónea";
    break;
}
console.log(`La nota cualitativa es ${resultado}`);
