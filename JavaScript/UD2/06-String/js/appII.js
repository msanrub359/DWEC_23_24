"use strict"
//recorrer una cadena
const cadena="Estamos en clase de JavaScript";

//mostrar la longitud de la cadena
document.write(`La longitud de la cadena es ${cadena.length}<br>`)

//recorrer la cadena
for (let index = 0; index < cadena.length; index++) {
   if( cadena.charAt(index) !=" "){ //si no es espacio en blanco, mostrar letra
      if (index==cadena.length-1){//si es la última letra, no mostrar la coma
         document.write(` ${cadena.charAt(index)}`) 
      }else{
         document.write(` ${cadena.charAt(index)},`)
      }
    
   }
    
}