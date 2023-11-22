"use strict"
let xmlHttp;

$(() => {
    //crear el objeto
    xmlHttp = crearConexion();
    if (xmlHttp != undefined) {
        //funcionalidad
        $("#cursos").on("change", cargarModulos);

    } else {
        Swal.fire("El navegador no soporta AJAX. Debe actualizar el navegador");
    }
})

const cargarModulos = () => {
    //preparar el objeto xmlHttp
    xmlHttp.open("GET", "Ejemplo4.xml", true);
    xmlHttp.onreadystatechange = () => {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            let datos = xmlHttp.responseXML; //pasamos la respuesta del servidor en formato xml a una variable

            //limpiar el select de modulos, excepto la primera opción
            $("#modulos option:gt(0)").remove();
            $(datos).find("curso").each((ind, ele) => {

                //muestre los módulos de primero
                if (ind == $("#cursos").prop("selectedIndex") - 1) {
                    $(ele).find("asig").each((ind, mod) => {
                        //crear option en el select de modulos
                        $("#modulos").append("<option>" + $(mod).text() + "</option>");
                    })
                }
            })

        }
    };

    xmlHttp.send(); //comienza la petición de respuesta al servidor

}