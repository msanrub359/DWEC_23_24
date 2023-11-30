"use strict"

window.addEventListener("DOMContentLoaded",() => {
    document.querySelector("#boton").addEventListener("click", mostrarMensaje)

})
const mostrarMensaje=()=> {

        axios.get("ficheros/Mensaje.txt")
        .then ( response =>{
         
           document.querySelector("#mensaje").textContent=response.data;
                 
        })
        
        .catch (error=>{
            console.log(error);
            console.log(error.message);
        })
   
   
}

