"use strict"
/**
 * @description Destructuring, nos permite extraer datos de objetos o arrays y
 * asignarlos a una variable o constante
 * 
 */
//declaraciones

const aAnimales=['león', 'perro', 'gato', 'elefante'];

//asignar el valor del índice 1 a la variable animalPerro
// const animalPerro=aAnimales[1];
// const animalPerro=aAnimales.at(1)
//destucturing
//const [animalI,animalII]=aAnimales ;
// const[,animalI]=aAnimales;
const [,...animalI]=aAnimales; //a partir del segundo elemento, extrae la información y la almacena
                               //en un array, animalI

console.log(animalI);
//const animalPerro


