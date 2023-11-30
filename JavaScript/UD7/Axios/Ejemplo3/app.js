"use strict"

window.addEventListener("DOMContentLoaded",() => {

    document.querySelector("#GET").addEventListener("click", mostrarMensajeGET)
    document.querySelector("#POST").addEventListener("click", mostrarMensajePOST)

})
const mostrarMensajeGET=()=>{
   axios.get("Ejemplo3.php?valor=GET&nombre=Ana")
    .then ( response =>{
        document.querySelector("#mensaje").textContent=response.data;
    })
    
    .catch (error=>{
        console.log(error);
    })
    
   
    
}
const mostrarMensajePOST=()=>{
    const param=`valor=POST&nombre=Luis`
    axios.post("Ejemplo3.php",param)
          
    .then ( response =>{
        document.querySelector("#mensaje").textContent=response.data;
    })
    
    .catch (error=>{
        console.log(error);
    })
    
    
   
}