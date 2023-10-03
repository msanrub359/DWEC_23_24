"use strict"
//declaraciones

const aNumeros=[1,2,3,,4,"María"];

//script
//insertar un elemento al final
aNumeros[aNumeros.length]='rojo'
console.log(aNumeros);
aNumeros.push('azul'); //insertar azul al final del array
console.log(aNumeros);
//insertar un elemento al principio
aNumeros.unshift('rosa');
//insertar elementos con splice
//añadir a partir de la 2 posición
console.log(aNumeros);
console.log(aNumeros.splice(0,0, "dos", "tres" ))

console.log(aNumeros);
