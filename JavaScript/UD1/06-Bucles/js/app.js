"use strict";
//declarar variables locales o globales al script
let numero,
  resultado = 1;

//bucle for para mostrar los números del 1 al 20
// console.log('----MOSTRAR NÚMEROS DEL 1 AL 20 ----');
// for (let numero = 1; numero <=20; numero++) {
//    console.log(`El número es ${numero}`);

// }
// //mostrar los números pares del 0 al 20
// console.log('----MOSTRAR NÚMEROS PARES DEL 1 AL 20 ----');
// for (let numero = 2; numero <=20; numero+=2) {
//      console.log(`El número es ${numero}`);

//  }
// console.log('----MOSTRAR múltiplación de los números introducidos ----');
do {
  numero = prompt("Introduzca número 0->Fin");
  if (numero != 0) {
    resultado *= numero;
  }
} while (numero != 0);
console.log(`La multiplicación de los números es ${resultado}`);

// console.log('----MOSTRAR múltiplación de los números introducidos ----');
console.log("----MOSTRAR múltiplación con while----");

numero = prompt("Introduzca número 0->Fin");
while (numero != 0) {
   resultado*=numero;
   numero = prompt("Introduzca número 0->Fin");
}

console.log(`La multiplicación de los números es ${resultado}`);
