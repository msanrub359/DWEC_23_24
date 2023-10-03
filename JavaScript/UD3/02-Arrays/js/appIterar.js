"use strict"
//declaraciones

const aNumeros=[1,2,3,,4,"María"];
//recorrer con for
console.log('-------Recorrido con for--------');
for (let index = 0; index < aNumeros.length; index++) {
    console.log(`${index} - ${aNumeros[index]}`);
    
}

//for in
console.log('-------Recorrido con in--------');
for (const index in aNumeros) {
    console.log(`${index} - ${aNumeros[index]}`);
}

//for of
console.log('-------Recorrido con of--------');
for (const elemento of aNumeros) {
    console.log(`${elemento}`);
}
//for of con index
console.log('-------Recorrido con of--------');
for (const [index,elemento] of aNumeros.entries()) {
    console.log(`${index} - ${elemento}`);
}

//for forEach con index
console.log('-------Recorrido con forEach--------');
aNumeros.forEach((elemento,index) => {
    console.log(`${index} - ${elemento}`);
});