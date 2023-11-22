"use strict"
let xmlHttp
$(() => {
    //crear el objeto
    xmlHttp = crearConexion();
    if (xmlHttp != undefined) {
        $("#first, #all").on("click", mostrar);

    } else {
        Swal.fire("El navegador no soporta AJAX. Debe actualizar el navegador");
    }
       
   
})
function mostrar() {
     //preparar el objeto xmlHttp
     let param= "php/mostrar.php?perro=";
     if ($(this).attr("id") == "first") {
        param="php/mostrar.php?perro=111A";
     
    }
     xmlHttp.open("GET", param, true);
     xmlHttp.onreadystatechange = () => {
         if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            console.log(xmlHttp.responseText);
             let datos = JSON.parse(xmlHttp.responseText); //parsear la respuesta que viene en formato texto a JSON
             $("tbody").empty();
            $(datos.data).each((ind, ele) => {
                $("tbody").append(`<tr><td>${ele.chip}</td><td>${ele.nombre}</td><td>${ele.raza}</td><td>${ele.fechaNac}</td></tr>`)
            })
            
         }
     };
 
     xmlHttp.send(); //comienza la petición de respuesta al servidor
 
 

}