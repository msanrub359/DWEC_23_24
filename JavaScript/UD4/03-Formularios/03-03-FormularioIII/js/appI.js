"use strict"

window.addEventListener("DOMContentLoaded",()=>{
    const formulario=document.getElementById("frmFirst");
    const edad=document.getElementById("edad");
    //establecer evento al submit del formulario
    formulario.addEventListener("submit", validar);
    //establecer evento al reset del formulario
    formulario.addEventListener("reset", limpiar);
    //establecer el evento blur para comprobar que edad sea >=18
    edad.addEventListener("blur", comprobarEdad)

   
})
const validar=()=>{
    alert("validar")
}
const limpiar=()=>{
    alert("limpiar")
}
const comprobarEdad=function(){
    alert("edad")
}