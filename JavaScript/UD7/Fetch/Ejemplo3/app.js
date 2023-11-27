"use strict"

window.addEventListener("DOMContentLoaded",() => {

    document.querySelector("#GET").addEventListener("click", mostrarMensajeGET)
    document.querySelector("#POST").addEventListener("click", mostrarMensajePOST)

})
const mostrarMensajeGET=()=>{
    fetch("Ejemplo3.php?valor=GET&nombre=Ana")
    .then ( response =>{
        return response.text();
    })
    .then (data=>{
        document.querySelector("#mensaje").textContent=data;
    })
    .catch (error=>{
        console.error(error);
    })
    
   
    
}
const mostrarMensajePOST=()=>{
    
    fetch("Ejemplo3.php", {
        method:'POST',
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `valor=POST&nombre=Luis`
       
    })
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