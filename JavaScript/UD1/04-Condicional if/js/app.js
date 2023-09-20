"use strict";
//declarar las variables globales al script
const numero = "123";
if (numero == 123) console.log("Los números son iguales");
if (numero == 123) {
  console.log("Los números son iguales");
}

if (numero === 123) {
    console.log("Los números sson iguales");
}else{
    console.log("Los números no son iguales");
}

//operador ternario
console.log(numero===123 ? 'Los números son iguales': 'Los números no son iguales');
