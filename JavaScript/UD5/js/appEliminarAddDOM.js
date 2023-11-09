"use strict"
//import Swal from 'sweetalert2'
// import '../../assets/librerias/sweetalert2.min.css'

const evento=()=>{
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Nuevo Enlace',
    showConfirmButton: false,
    timer: 1000
  })
}

  
 
//Eliminar y añadir elementos DOM

//Eliminar el nodo por si mismo
document.addEventListener("DOMContentLoaded", ()=>{
  const navegacion=document.querySelector(".navegacion");
  console.log(navegacion);
  //acceder al primer elemento del menú
  // console.log(navegacion.firstElementChild);
  // navegacion.firstElementChild.remove();
    // console.log(navegacion.children);
    // navegacion.children[0].remove()

//Eliminar el nodo desde el padre
 //navegacion.removeChild(navegacion.children[0]);

//crear un enlace

  const enlace=document.createElement('a');
  enlace.textContent="Nuevo enlace";
  enlace.setAttribute("href", '#');
  enlace.addEventListener("click", evento)
// añadir al menú al final
  //  navegacion.appendChild(enlace);
// //añadir entre otros nodos
 navegacion.insertBefore(enlace, navegacion.children[1]);
})



