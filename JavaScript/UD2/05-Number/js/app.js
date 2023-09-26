"use strict";
//declaración de variables, constantes globales
const num1 = new Number(23),
  num2 = 23;
let numDato;
//mostrar igualdad
console.log(num1 === num2 ? "son iguales" : "no son iguales");
console.log(`typeof num1 ${typeof num1} -  typeof num2 ${typeof num2}`);

//entrada de números
numDato = prompt("Introduzca un número");

while (isNaN(numDato) || numDato !== null && numDato.trim() === "") {
  //dato erróneo
  numDato = prompt("Error, debe ser un número\nIntroduzca un número");
}

if (numDato !== null) {
  console.log(
    `La suma del número ${numDato} +50 es= ${parseInt(numDato) + 50}`
  );
}
