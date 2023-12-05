"use strict"
document.addEventListener("DOMContentLoaded", ()=>{
   //crear un card

const parrafo1=document.createElement("p");
const parrafo2=document.createElement("p");
const parrafo3=document.createElement("p");

//añadir clases
parrafo1.classList.add("categoria", "concierto");
parrafo2.classList.add("titulo");
parrafo3.classList.add("precio");

// //añadir texto
//1ª forma añadir texto
parrafo1.textContent="Salidas";
const textoParrafo2=document.createTextNode("Visita startlight en bici");
parrafo2.appendChild(textoParrafo2);
parrafo3.textContent="35€ por persona";

 //crear div para contener los párrafos creados
const div=document.createElement("div");
div.classList.add("info");

//insertar los párrafos a la capa
div.appendChild(parrafo1);
div.appendChild(parrafo2);
div.appendChild(parrafo3);
// console.log(div);

//crear la imagen
const imagen=document.createElement("img");
imagen.setAttribute("src", "../assets/img/hacer4.jpg");
//imagen.src="../assets/img/hacer4.jpg";

//crear div padre
const divPadre=document.createElement("div");
divPadre.classList.add("card");
//añadimos la imagen a la clase padre
 divPadre.appendChild(imagen);
//añadirmos el div que contiene los párrafos
divPadre.appendChild(div);
 console.log(divPadre);
//añadir el divPadre al div cuya clase es contenedor-cards

document.querySelector('.hacer .contenedor-cards').appendChild(divPadre) 
})

