"use strict"
let xmlHttp;

window.addEventListener("DOMContentLoaded", ()=>{
    //crear el objeto
    xmlHttp=crearConexion();
    if (xmlHttp != undefined){
        //funcionalidad
        document.querySelector("#GET").addEventListener("click" ,mostrarMensajeGET);
        document.querySelector("#POST").addEventListener("click" ,mostrarMensajePOST);
    }else{
        Swal.fire("El navegador no soporta AJAX. Debe actualizar el navegador");
    }
})

const mostrarMensajeGET=()=>{
    //preparar el objeto xmlHttp
    xmlHttp.open("GET", "Ejemplo3.php?valor=GET&nombre=Laura", true);
    xmlHttp.onreadystatechange=()=>{
       if (xmlHttp.readyState==4 && xmlHttp.status==200) {
        document.querySelector("#mensaje").textContent=xmlHttp.responseText;
       }
    };

    xmlHttp.send(); //comienza la petición de respuesta al servidor

}

let mostrarMensajePOST=()=>{
    //preparar el objeto xmlHttp
    xmlHttp.open("POST", "Ejemplo3.php", true);
    //establecer las cabeceras 
    xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xmlHttp.onreadystatechange=()=>{
       if (xmlHttp.readyState==4 && xmlHttp.status==200) {
        document.querySelector("#mensaje").textContent=xmlHttp.responseText;
       }
    };

    xmlHttp.send("valor=POST&nombre=Marcos"); //comienza la petición de respuesta al servidor

}