"use strict";

//mostrar las dimensiones de objeto screen
document.write(`La resolución de la pantalla es ${screen.width}x${screen.height}`);
//el idioma del navegador
console.log(navigator.language);
if (navigator.language==='es-ES'){
    alert("El idioma del navegador es el español")
}else{
    alert("El idioma del navegador no es el español")
}
//mostrar información sobre el navegador 
document.write(`<br>Información del navegador ${navigator.userAgent}</br>`)