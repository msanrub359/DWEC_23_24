"use strict"
/**
 * @description Diferencias entre la iteración de arrays con forEach y map
 */
//declaraciones

const aAnimales=['león', 'perro', 'gato', 'elefante'];

//crear dos arrays, recorriendo conforEach y map
const animalesForEach=aAnimales.forEach(animal=>{
    console.log(animal);
    return animal
}); //animalesForEach sería un array

const animalesMap=aAnimales.map(animal=>{
    console.log(animal);
    return animal
});

console.log('forEach');
console.log(animalesForEach);
console.log('map');
console.log(animalesMap);