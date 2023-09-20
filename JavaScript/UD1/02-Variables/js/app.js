"use strict" //Obligación declarar variables y constantes
var edad=23;
let nombre;

if (edad==23){
    const localidad='Córdoba';
    var apellidos='Pérez';
    nombre='María'
    console.log("El nombre es "+ nombre + " los apellidos son " +apellidos + " localidad" +localidad+ " la edad es "+ edad);

    //mostrar cadena y variables con interpolación o plantilla de carácteres
    console.log(`El nombre es ${nombre} los apellidos sonn ${apellidos} localidad ${localidad} la edad es ${edad}`);

}
// console.log("El nombre es "+ nombre + " los apellidos son " +apellidos + " localidad" +localidad+ " la edad es "+ edad);  Error por el ámbito de las variables localidad y apellidos