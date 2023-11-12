"use strict"

$(() => {
    //eventos
    $(".botons:contains('fadeOut')").on("click", ocultar);
    $(".botons:contains('fadeIn')").on("click", () => {
         $("h1").fadeIn("Slow");
    });
    $(".botons:contains('fadeToggle')").on("click", () => {
         $("h1").fadeToggle(2000, fin);
    });
    $(".botons:contains('fadeTo')").on("click", () => {
        if($('h1').css("opacity")==1){
            $("h1").fadeTo(2000,0.25);
        }else{
            $("h1").fadeTo(2000,1);
        }
      
   });
})

const ocultar=()=>{
    $("h1").fadeOut();
}
const fin=()=>{
    Swal.fire("Función terminada");
}