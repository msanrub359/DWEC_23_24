"use strict"

$(() => {
   
        $(":button").on("click", mostrarAsig)
    
})

function mostrarAsig() {
    $.get("Ejemplo4.xml", function (response, statusTxt, xhr){
        console.log(statusTxt)
        if (statusTxt=="success"){
           let mensaje="";
            $(response).find("curso").each((ind, ele) => {
                if (ind == 1) {
                    mensaje = "Módulos de 2º DAW";
                    $(ele).find("asig").each((ind, mod) => {
                        mensaje += "<br>" + $(mod).text()
                    })
                }
            })
            $("#mensaje").html(mensaje);
            Swal.fire({
                icon:"success",
                title:"La carga ha sido satisfactoria con GET",
                text:"AJAX con jQuery"
            })
        }else if (statusTxt=="error"){
            Swal.fire({
                icon:"error",
                title:"Error "+ xhr.status,
                text:xhr.statusText
            })
        };
    
          
})
}
