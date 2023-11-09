"use script"
window.addEventListener("DOMContentLoaded",()=>{
    const divFooter=document.querySelector(".footer");
    const botonFlotante=document.querySelector(".btn-flotante")

    //establecer el evento click al boton
    botonFlotante.addEventListener("click",()=>{
        if (divFooter.classList.contains("activo")){ //condición si existe la clase activo
            divFooter.classList.remove("activo"); //añadir clase
            botonFlotante.textContent="Idioma y moneda"
        }else{
            divFooter.classList.add("activo"); //añadir clase
            botonFlotante.textContent="X cerrar"
        }
    })
})