"use strict"
window.addEventListener("DOMContentLoaded",()=>{
    const caja=document.querySelector("#caja")
    const contenedor=document.querySelector("#contenedor")
    caja.draggable=true;
    //eventos arrastrar
    caja.addEventListener("dragstart", (evento)=>{//cuando comienza el arrastre
        console.log('Drag Start');
        evento.dataTransfer.setData("id",evento.target.id);
    })
    caja.addEventListener("dragend", (evento)=>{ //cuando acaba el arrastre
        console.log('Drag End');
    });

    caja.addEventListener("drag", (evento)=>{ //mientras se arrastra
        console.log('Drag');
    })

     //eventos soltar
    contenedor.addEventListener("dragenter", (evento)=>{
        console.log('Drag enter');
        evento.target.classList.add("enterClass")
    })
    contenedor.addEventListener("dragleave", (evento)=>{ //cuando el ratón sale
        console.log('Drag Leave');
        evento.target.classList.remove("enterClass")
    })
    contenedor.addEventListener("dragover", (evento)=>{ //el objeto se mueve dentro del contendor
        console.log('Drag Over');
        evento.preventDefault();
    })
    contenedor.addEventListener("drop", (evento)=>{ //el objeto se suelta
        console.log('Drop');
        const objeto=evento.dataTransfer.getData("id");
        console.log(objeto);
       evento.target.appendChild(document.querySelector(`#${objeto}`))
       evento.target.classList.remove("enterClass")

    })
})
