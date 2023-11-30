"use strict"

window.addEventListener("DOMContentLoaded",() => {
    document.querySelector("#boton").addEventListener("click", mostrarMensaje)

})
const mostrarMensaje=()=>{
   axios.get("ejemploPHP.php")
   .then ( response =>{
    document.querySelector("#mensaje").textContent=response.data;
   })
   
   .catch (error=>{
       console.log(error);
   })
   
        
}