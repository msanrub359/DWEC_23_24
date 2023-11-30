"use strict"

$(() => {
   
        $(":button").on("click", mostrarAsig)
    
})

const mostrarAsig=()=> {
    axios.get("Ejemplo4.xml")
    
    .then (response=>{
        console.log(response);
        let mensaje="";
            $(response.data).find("curso").each((ind, ele) => {
                if (ind == 1) {
                    mensaje = "Módulos de 2º DAW";
                    $(ele).find("asig").each((ind, mod) => {
                        mensaje += "<br>" + $(mod).text()
                    })
                }
            })
            $("#mensaje").html(mensaje);
    })
    .catch (error=>{
        console.error(error);
    })
    
}
