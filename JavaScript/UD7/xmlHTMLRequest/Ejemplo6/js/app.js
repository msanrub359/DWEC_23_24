"use strict"
let xmlHttp;

$(() => {
    //crear el objeto
    xmlHttp = crearConexion();
    if (xmlHttp != undefined) {
        //funcionalidad
        $("#regiones").on("change", cargarProvincias);

    } else {
        Swal.fire("El navegador no soporta AJAX. Debe actualizar el navegador");
    }
})

let cargarProvincias = () => {
    //preparar el objeto xmlHttp
    xmlHttp.open("GET", "Ejemplo6.php?ca="+$("#regiones").val(), true);
    xmlHttp.onreadystatechange = () => {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            let datos = JSON.parse(xmlHttp.responseText); //parsear la respuesta que viene en formato texto a JSON
            let mensaje="";
            $(datos).each((ind, elemento)=>{
                mensaje+=elemento + "<br>"
            })
            
            $("#mostrar").html(mensaje);
        }
    };

    xmlHttp.send(); //comienza la petición de respuesta al servidor

}