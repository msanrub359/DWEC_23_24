"use strict"

document.addEventListener("DOMContentLoaded", ()=>{
    //querySelectorAll  retorna todos los nodos que encuentre con esas características

    const card=document.querySelectorAll(".card:nth-child(odd)"); //selectores compatibles con CSS
    console.log(card);
    

 const info=document.querySelectorAll(".premium .info");
 console.log(info);

//seleccionar de la sección en hospedaje la segunda card
 const segundaCard=document.querySelectorAll("section.hospedaje .card:nth-child(2)");
 console.log(segundaCard);

//seleccionar id
const formulario=document.querySelectorAll("#formulario");
 console.log(formulario);


//seleccionar elemento HTML

 const navegacion=document.querySelectorAll("nav");
 console.log(navegacion);
 })

