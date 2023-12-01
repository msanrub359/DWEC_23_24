"use strict"

$(() => {
    $("#boton").on("click", mostrarMensaje)

})
function mostrarMensaje() {

    $("#mensaje").load("ficheros/Mensaje.txt", function (responseText, statusTxt, xhr) {
        if (statusTxt == "success") {
            Swal.fire("Carga correcta");
        } else if (statusTxt == "error") {
            Swal.fire("Error: " + xhr.status + " : " + xhr.statusText);
        }

    });
}
