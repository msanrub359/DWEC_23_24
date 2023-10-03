"use strict"
/**
 * Diferentes métodos para la búsqueda de un elemento de un array
 */
const aProvincias=['Córdoba', 'Huelva', 'Málaga', 'Granada'];

//1 forma -indexOf()
const findIndexOf=aProvincias.indexOf("Málagas");
console.log({findIndexOf});
if (findIndexOf>-1){
    console.log('Existe');
}else{
    console.log('No Existe');
}

//2 forma -lasIndexOf()
const findLastIndexOf=aProvincias.lastIndexOf("Málagas");
console.log({findLastIndexOf});
if (findLastIndexOf>-1){
    console.log('Existe');
}else{
    console.log('No Existe');
}

//3 forma -includes() devuelve true o false
const findIncludes=aProvincias.includes("Málagas");
console.log({findIncludes});
if (findIncludes){
    console.log('Existe');
}else{
    console.log('No Existe');
}

//3 forma -some() devuelve true o false
const findSome=aProvincias.some(provincia=>provincia=='Málaga')
console.log({findSome});
if (findSome){
    console.log('Existe');
}else{
    console.log('No Existe');
}
//4 forma -find() devuelve true o false
const findFind=aProvincias.find(provincia=>provincia=='Málaga')
console.log({findFind});
if (findFind!=undefined){
    console.log('Existe');
}else{
    console.log('No Existe');
}
//4 forma -find() devuelve true o false
const findFindIndex=aProvincias.findIndex(provincia=>provincia=='Málagas')
console.log({findFindIndex});
if (findFindIndex>-1){
    console.log('Existe');
}else{
    console.log('No Existe');
}