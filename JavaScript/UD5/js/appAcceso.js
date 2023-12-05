"use strict";
document.addEventListener("DOMContentLoaded", () => {
  let elemento;
  //formas de acceso

   elemento = document.head;
   elemento = document.body;
   elemento = document.forms;
   elemento = document.forms[0].id;
   elemento = document.forms[0].classList;
    elemento = document.forms[0].method;
    elemento = document.links;
    elemento = document.links[4];
    elemento = document.links[4].classList;
  // elemento = document.links[4].className;

  console.log(elemento);
});
