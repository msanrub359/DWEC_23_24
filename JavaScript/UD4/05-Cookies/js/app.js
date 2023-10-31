"use strict";

//declaración variables, funciones...
let clave, valor;
document.addEventListener("DOMContentLoaded", () => {
  //establecer objetos
  clave = document.getElementById("clave");
  valor = document.getElementById("valor");

  //eventos
  document.getElementById("crear").addEventListener("click", setCookie);
  document.getElementById("buscar").addEventListener("click", () => {
    valor.value = findCookie();
  });
  document.getElementById("listar").addEventListener("click", listCookie);
  document.getElementById("eliminar").addEventListener("click", delCookie);
});

const setCookie = () => {
  //cookie de sesión
  //  document.cookie="edad=40"
  //cookie no se borre en la sesión, sea local
   let fecha = new Date();
   fecha.setTime(fecha.getTime() + 4654245);
   //document.cookie = `${clave.value}=${valor.value};expires=${fecha.toUTCString()};secure`;
   document.cookie = `${clave.value}=${encodeURIComponent(valor.value)};max-age=20;secure`

  // //limpiar campos
  clave.value = "";
  valor.value = "";
};
const delCookie = () => {
  if (findCookie() != "La cookie no existe") {
    document.cookie = `${clave.value}=;max-age=-1`;
    //también se puede hacer eliminar de la siguiente forma:
    //document.cookie=`${clave.value}=;expires=Thu, 01 Jan 1970 00:00:00 GMT`
    valor.value = "Cookie borrada";
  }
};

const findCookie = () => {
  let aCookies,
    aDato,
    i = 0;
  let buscar = "La cookie no existe";
  if (clave.value.trim().length != 0) {
    //El input no está vacío.
    if (document.cookie != "") {
      //que tenga cookies creadas
      aCookies = document.cookie.split(";"); //extraer las cookies
      do {
        aDato = aCookies[i].split("=");
        if (aDato[0].trim() == clave.value) {
          buscar = decodeURIComponent(aDato[1]); //pasamos el valor
        }
        i++;
      } while (i < aCookies.length && aDato[0] != clave.value);
    }
  } else {
    clave.value = "Introduzca clave a buscar";
  }
  return buscar;
};
const listCookie = () => {
  let listar = "<h2>Listado de cookies</h2>";
  console.log(document.cookie);
  if (document.cookie != "") {
    //Si existen cookies
    let aCookies = document.cookie.split(";");
    aCookies.forEach((element) => {
      listar += `${decodeURIComponent(element)}<br>`;
    });
  } else {
    listar += "No hay cookies que listar";
  }

  document.getElementById("capa").innerHTML = listar;
};
