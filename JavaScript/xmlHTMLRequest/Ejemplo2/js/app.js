"use strict"
let xmlHttp;

window.addEventListener("DOMContentLoaded", ()=>{
    //crear el objeto
    xmlHttp=crearConexion();
    if (xmlHttp != undefined){
        //funcionalidad
        document.querySelector("#boton").addEventListener("click" ,mostrarMensaje);
    }else{
        Swal.fire("El navegador no soporta AJAX. Debe actualizar el navegador");
    }
})

const mostrarMensaje=()=>{
    //preparar el objeto xmlHttp
    xmlHttp.open("GET", "ejemploPHP.php", true);
    xmlHttp.onreadystatechange=()=>{
       if (xmlHttp.readyState==4 && xmlHttp.status==200) {
        document.querySelector("#mensaje").textContent=xmlHttp.responseText;
       }
    };

    xmlHttp.send(); //comienza la petición de respuesta al servidor

}