"use strict"
//declaraciones
const aNombre=new Array(6); //vacía
const aProvincias=new Array('Córdoba', 'Sevilla', 'Huelva')
//declación óptima
const aNumeros=[1,2,3,4];
const aAlumnos=[]; //vacía

//mostrar el nº de elementos de un array
console.log(`nº elementos ${aNumeros.length}`);
//asignar un valor a un índice
aAlumnos[aAlumnos.length]='María' //añadir al final

aNumeros[15]=23;

//mostrar
console.log(aNombre);
console.log(aProvincias);
console.table(aAlumnos);
console.table(aNumeros);

