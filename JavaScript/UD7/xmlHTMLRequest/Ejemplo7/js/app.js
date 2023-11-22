"use strict"
let xmlHttp;

$(() => {
    //crear el objeto
    xmlHttp = crearConexion();
    if (xmlHttp != undefined) {
        //funcionalidad
       cargarProvincias();

    } else {
        Swal.fire("El navegador no soporta AJAX. Debe actualizar el navegador");
    }
})

let cargarProvincias = () => {
    //preparar el objeto xmlHttp
    xmlHttp.open("GET","https://raw.githubusercontent.com/IagoLast/pselect/master/data/provincias.json" , true);
    xmlHttp.onreadystatechange = () => {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            let datos = JSON.parse(xmlHttp.responseText);
            //ordenar las provincias
            datos.sort((a,b)=>{
                return a.nm.localeCompare(b.nm)
            });
            
            $(datos).each((ind, elemento)=>{
               $("#provincias").append("<option id=" + elemento.id + ">"+ elemento.nm +"</option>")
            })
            //establecer el evento change al select provincias
            $("#provincias").on("change", function(){
                Swal.fire("el código de la provincia es " + $("#provincias option:selected").attr("id"));
            })
           
        }
    };

    xmlHttp.send(); //comienza la petición de respuesta al servidor

}