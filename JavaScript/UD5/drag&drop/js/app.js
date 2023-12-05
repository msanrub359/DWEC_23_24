"use strict"

window.addEventListener("DOMContentLoaded",()=>{
    const caja=document.querySelector("#caja");
    const contenedor=document.querySelector("#contenedor");

    //establecer el drag a la caja
    caja.draggable=true;
    caja.addEventListener("dragstart", (evento)=>{ //comienza el arrastre
        console.log('dragStart');
        evento.dataTransfer.setData("id", evento.target.id)
    })
    caja.addEventListener("dragend", ()=>{ //finaliza el arrastre
        console.log('dragEnd');
    })
    caja.addEventListener("drag", ()=>{ //mientras se arrastra
        console.log('drag');
    })

    //establecer los eventos drop (soltar) en el contendor
    contenedor.addEventListener("dragenter",()=>{ //entra el objeto drag
        console.log('dragEnter');
        contenedor.classList.add("enterClass")
    })
    contenedor.addEventListener("dragleave",()=>{ //sale el objeto drag
        console.log('dragleave');
        contenedor.classList.remove("enterClass")
    })
    contenedor.addEventListener("dragover",(evento)=>{ //mientras el objeto drag se mueve dentro del contenedor
        console.log('dragover');
        contenedor.classList.add("enterClass")
        evento.preventDefault()
      
       
    })
    contenedor.addEventListener("drop",(evento)=>{ //suelta el objeto drag en el contenedor
        console.log('drop');
       // contenedor.appendChild(caja)
        const id=evento.dataTransfer.getData("id");
        contenedor.appendChild(document.querySelector(`#${id}`));
        contenedor.classList.remove("enterClass")
       
    })
})