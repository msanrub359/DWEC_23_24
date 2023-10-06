"use strict"
/**
 * @description los sets o conjuntos son estructuras parecidas a los
 * arrays, con las particularidad que no permiten valores duplicados.
 * La duplicidad de elementos lo realiza automáticamente
 *   
 */

//crear un conjunto
const conjuntoI=new Set(['ana', 'Ana']);
const conjuntoII=new Set([1, 2, 3]);
const aNumeros=[1, 2, 3];
const conjuntoIII=new Set(aNumeros);
const conjuntoIV=new Set().add(1).add(2).add(3);
console.log({conjuntoI});
conjuntoI.add('Ana');
console.log({conjuntoI});
//eliminar delete
conjuntoI.delete('ana');
console.log({conjuntoI})

//recorrer elemento con conjuntoIV
conjuntoIV.forEach(function(elemento){
    console.log(elemento);
})
//eliminar el contenido del conjunto
//conjuntoIV.clear();
//calcular tamaño
console.log(conjuntoIV.size);
//búsqueda de un elemento
console.log(conjuntoIV.has(20));
console.log(conjuntoIV);
//convertir un conjunto en un array
const aNum=[...conjuntoIV];
console.log(aNum instanceof Array);
console.log(aNum);