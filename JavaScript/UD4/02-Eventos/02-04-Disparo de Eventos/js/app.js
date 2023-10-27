"use strict"
window.addEventListener("DOMContentLoaded",()=>{
    // eventoCaptura();
    eventoBurbujeo();
})
const eventoCaptura=()=>{
    document.getElementById("capaPrincipal").addEventListener("click", function(){
        alert("Capa principal")
    },true);
    document.getElementById("capaSecundaria").addEventListener("click", function(){
        alert("Capa Secundaria")
    },true)
}
const eventoBurbujeo=()=>{
    document.getElementById("capaPrincipal").addEventListener("click", function(){
        alert("Capa principal")
    },false);
    document.getElementById("capaSecundaria").addEventListener("click", function(event){
        alert("Capa Secundaria");
        event.stopPropagation(); //detiene el flujo del evento
    },false)
}