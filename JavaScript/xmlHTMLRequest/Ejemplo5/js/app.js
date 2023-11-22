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
    xmlHttp.open("GET", "Ejemplo5.php?ca="+$("#regiones").val(), true);
    xmlHttp.onreadystatechange = () => {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            let datos = xmlHttp.responseXML;
            let mensaje="";
           
            $(datos).find("capital").each((ind, ele) => {
                mensaje+= $(ele).text()+"<br>";
              //mensaje+= ele.innerText+"<br>";         
            })
            $("#mostrar").html(mensaje);
        }
    };

    xmlHttp.send(); //comienza la petición de respuesta al servidor

}