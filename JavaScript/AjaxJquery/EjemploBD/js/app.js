"use strict"
$(() => {
   
        $("#first, #all").on("click", mostrar);
   
})
function mostrar() {
    const datos={
        perro:""
    }
    if ($(this).attr("id") == "first") {
        datos.perro="111A"
    }
    $.ajax({
        url:"php/mostrar.php",
        type:"GET",
        data:datos
    })
    .done(function (responseText) {
        console.log(responseText);
        $("tbody").empty();
            $(responseText.data).each((ind, ele) => {
                $("tbody").append(`<tr><td>${ele.chip}</td><td>${ele.nombre}</td><td>${ele.raza}</td><td>${ele.fechaNac}</td></tr>`)
            })
       
       
    })
    .fail(function (responseText, textStatus, xhr) {
        Swal.fire({
            icon: "error",
            title: "Error " + xhr.status,
            text: xhr.statusText
        })
    })
   

}