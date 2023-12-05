"use strict"
document.addEventListener("DOMContentLoaded", ()=>{
   
    const header=document.getElementsByClassName("header");

    const hero=document.getElementsByClassName("hero");
    console.log(header);
    console.log(hero);

    //Si las clases existen más de una vez
    const contenedores=document.getElementsByClassName("contenedor");
     console.log(contenedores);

    console.log(contenedores[0].childNodes);
    console.log(contenedores[0].childNodes.length);
    console.log(contenedores[0].children);
    console.log(contenedores[0].children.length);
    console.log(contenedores[0].children[0]);
    console.log(contenedores[0].children[1].children[1].innerText="Mi ayuda de DOM");

    //Si una clase no existe

     const noExiste=document.getElementsByClassName("noExiste");
     console.log(noExiste);
})
