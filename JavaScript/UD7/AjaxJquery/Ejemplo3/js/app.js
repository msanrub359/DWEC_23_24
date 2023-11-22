"use strict"

$(()=>{

    $("#GET").on("click", mostrarMensajeGET)
    $("#POST").on("click", mostrarMensajePOST)

})
function mostrarMensajeGET(){
    $.get("Ejemplo3.php", {valor:'GET', nombre:'Ana'}, function (responseText, statusTxt, xhr){
        console.log(statusTxt)
        if (statusTxt=="success"){
            $("#mensaje").text(responseText);
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
        }
    })
    
}
function mostrarMensajePOST(){
    $.post("Ejemplo3.php", {valor:'POST', nombre:'Luis'}, function (responseText, statusTxt, xhr){
        console.log(statusTxt)
        if (statusTxt=="success"){
            $("#mensaje").text(responseText);
            Swal.fire({
                icon:"success",
                title:"La carga ha sido satisfactoria con POST",
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