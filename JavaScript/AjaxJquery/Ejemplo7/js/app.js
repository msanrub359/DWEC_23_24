"use strict"
$(() => {

    mostrarProv();

})
function mostrarProv() {
    $.ajax({
        url: "https://raw.githubusercontent.com/IagoLast/pselect/master/data/provincias.json",
        type: "GET",
        dataType:"json"
    })
        .done(function (responseText) {
            //ordenar ascedente
           
            responseText.sort((a, b) => {
                return a.nm.localeCompare(b.nm)
            })
            //cargar en el select
            $(responseText).each((ind, ele) => {
                $("#provincias").append("<option id=" + ele.id + ">" + ele.nm + "</option>")
            })

            //evento change
            $("#provincias").on("change", function () {

                Swal.fire("El Id es " + $("#provincias option:selected").attr("id"))
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