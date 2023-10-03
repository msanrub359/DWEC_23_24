"use strict"
/**
 * @description. En JavaScript no existen los arrays bidimensionales
 * 
 */
//declaraciones
const aElectrodomesticos=[['lavadora','500€'], ['microondas', '200€'],['frigo', '1000€']]

console.log(`El electrodomético es ${aElectrodomesticos[2][0]} el precio es ${aElectrodomesticos[2][1]}`);

for (let index = 0; index < aElectrodomesticos.length; index++) {
   
        console.log(`El electrodomético es ${aElectrodomesticos[index][0]} el precio es ${aElectrodomesticos[index][1]}`); 
   
    
}