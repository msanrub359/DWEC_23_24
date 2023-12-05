"use strict"

$(() => {
    //eventos
    //crear un nuevo atributo en el botón animación1
   // $(".botons:contains('animacion1')").attr("data-clave", "prueba")
    document.querySelector(".botons").setAttribute("data-clave", "prueba")
    //acceso
    console.log( document.querySelector (".botons").getAttribute("data-clave"));
    $(".botons:contains('animacion1')").on("click",animacion1);
    $(".botons:contains('animacion2')").on("click", () => {
        $("#figura").animate({
            width: '200px',
            height: '150px',
            left: '300px',
            opacity: 0.5
        });
    });
    $(".botons:contains('animacion3')").on("click", animacion3);
    
})

const animacion1 = () => {
    $("#figura").animate({
        width: '200px',
        height: '150px'
    })
}
const animacion3 = () => {
    $("#figura").animate({
        width: '200px',
        height: '150px',
        left: '300px',
        opacity: 0.5,
        backgroundColor: 'purple'
    }, 3000, animacionRecuperacion)
}
const animacionRecuperacion = () => {
    $("#figura").animate({
        width: '100px',
        height: '100px',
        left: '5px',
        opacity: 1,
        backgroundColor: '#FC2'
    }, 3000)

}