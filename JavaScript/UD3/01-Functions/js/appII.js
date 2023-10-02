"use strict"
//housting permite usar variables y funciones antes que se hayan declarado

//declaraciones variables y funciones
//cuerpo script

console.log(multiplicar(5));
console.log(multiplicarII(5));
console.log(multiplicarIII(5,6));
console.log(multiplicarIV(5,6));

function multiplicar(a){
    return a*5;
}

function multiplicarII(a,b=1){
    return (a*b);
}

//expresión de funciones
const multiplicarIII=function(a,b){
    return a*b;
}

//expresión y arrow
// const multiplicarIV=(a,b)=>{
//     return a*b
// }

const multiplicarIV=(a,b)=>a*b;

