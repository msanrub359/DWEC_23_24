"use strict";
document.addEventListener("DOMContentLoaded", () => {
  //querySelector solo retorna el primero que encuentre

  const card = document.querySelector(".card"); //selectores compatibles con CSS
  console.log(card);
  const info = document.querySelector(".premium .info");

   console.log(info);

  //seleccionar en la sección hospedaje, la segunda card
  const segundaCard = document.querySelector(
    "section.hospedaje .card:nth-child(2)"
  );
  console.log(segundaCard);

  // //seleccionar id
  const formulario = document.querySelector("#formulario");
  console.log(formulario);

  //seleccionar elemento HTML
  const navegacion = document.querySelector("nav");
  console.log(navegacion);
});
