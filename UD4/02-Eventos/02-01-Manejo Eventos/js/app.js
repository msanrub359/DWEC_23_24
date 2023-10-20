"use strict"

//declaración de eventos con el modelo tradicional

//evento load del navegador
// const cargar=()=>{
//     alert("Página cargada")
// }
// function cargar(){
//     alert("Página cargada")
// }
//window.onload=cargar;
//función anónima arrow
const accBoton=(evento)=>{
    const boton=document.getElementById("enviar");
    const nombre=document.getElementById("nombreId")
    const apellidos=document.getElementById("apellidosId")
    alert(`El nombre es ${document.getElementById("nombreId").value} y los apellidos son ${apellidos.value}`);
    //eliminar el evento click del botón
    boton.removeEventListener("click",accBoton);
    //eliminar la acción del botón (submit)
    evento.preventDefault();
}
window.addEventListener("DOMContentLoaded", ()=>{
    //establecer evento click al botón
    const boton=document.getElementById("enviar");
    boton.addEventListener("click",accBoton);

    //cuando reciba el foco el nombre, cambiar el color de fondo
    document.getElementById("nombreId").addEventListener("focus",function(){
       this.style.backgroundColor="Cyan";
    })
    //cuando pierda el foco el nombre, quitar fondo
    document.getElementById("nombreId").addEventListener("blur",function(){
        this.style.backgroundColor="";
     })
})

//función anónima
// window.addEventListener("DOMContentLoaded", function(){
//     //establecer evento click al botón
// })