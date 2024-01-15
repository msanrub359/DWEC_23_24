"use strict"
import {aNombres, MODULO} from './funciones.js'
import cowsay from 'cowsay';


aNombres.forEach(nombre=>{
    console.log(nombre);
});

console.log(cowsay.say({
    text : MODULO,
    e : "oO",
    T : "U "
}));
 