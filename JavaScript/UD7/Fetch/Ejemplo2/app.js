"use strict"

window.addEventListener("DOMContentLoaded",() => {
    document.querySelector("#boton").addEventListener("click", mostrarMensaje)

})
const mostrarMensaje=()=>{
    fetch("ejemploPHP.php")
   .then ( response =>{
    if (response.status==200){
        return response.text();
     }else{
        throw ("Error en la comunicación")
     }
   })
   .then (data=>{
    document.querySelector("#mensaje").textContent=data;
   })
   .catch (error=>{
       console.log(error);
   })
   
        
}