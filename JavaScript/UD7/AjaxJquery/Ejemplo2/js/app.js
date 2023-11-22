"use strict"

$(()=>{
    $("#boton").on("click", mostrarMensaje)

})
function mostrarMensaje(){
    $.get("ejemploPHP.php", function (responseText, statusTxt, xhr){
        console.log(statusTxt)
        if (statusTxt=="success"){
            $("#mensaje").text(responseText);
            Swal.fire({
                icon:"success",
                title:"La carga ha sido satisfactoria",
                text:"AJAX con jQuery"
            })
        }else if (statusTxt=="error"){
            Swal.fire({
                icon:"error",
                title:"Error "+ xhr.status,
                text:xhr.statusText
            })
        }
    })
        
}