"use strict"
/**
 * @description copias de arrays se realizan por referencia. Para realizar copias por valor, utilizaremos spread
 * Spread permite simplicar la recogida de valores en una estructura de datos. El Spread se represanta con:...
 * 
 * 
 */
//declaraciones

const aNumeros=[1,2,3,,4,"María"];
const aCopia=aNumeros;
const aCopiaSpread=[...aNumeros];
const aCopiaSpreadII=["uno", "dos", ...aNumeros, "seis"];
const aCopiaSlice=aNumeros.slice();

aNumeros.push(100); //añadir un elemento al array aNumeros

console.log(aCopia, aNumeros, aCopiaSpread, aCopiaSpreadII, aCopiaSlice);

//script

