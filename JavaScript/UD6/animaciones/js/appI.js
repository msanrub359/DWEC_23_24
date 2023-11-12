"use strict"

$(() => {
    //eventos
    $(".botons:contains('Hide')").on("click", ocultar);
    $(".botons:contains('Show')").on("click", () => {
         $("h1").show("slow");
    });
    $(".botons:contains('Toogle')").on("click", () => {
         $("h1").toggle(2000, fin);
    });
})

const ocultar=()=>{
    $("h1").hide();
}
const fin=()=>{
    Swal.fire("Función terminada");
}