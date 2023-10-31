"use strict"

//declaración variables, funciones y eventos
let clave, valor;
document.addEventListener("DOMContentLoaded", () => {
    //establecer objetos
    clave = document.getElementById("clave");
    valor = document.getElementById("valor");

    //eventos 
    document.getElementById("crear").addEventListener("click", addCookie);
    document.getElementById("buscar").addEventListener("click", findCookie);
    document.getElementById("listar").addEventListener("click", listCookie);
    document.getElementById("eliminar").addEventListener("click", delCookie);
})
const addCookie = () => {
    sessionStorage.setItem(clave.value, encodeURIComponent(valor.value))
    //limpiar campos
    clave.value = "";
    valor.value = "";

}
const delCookie = () => {
    if(sessionStorage.getItem(clave.value)!=null){
        sessionStorage.removeItem(clave.value);
        valor.value = "cookie borrada";
    }else{
        valor.value = "cookie no existe";
    }
    
        
    
}
const findCookie = () => {
    valor.value = sessionStorage.getItem(clave.value)
    if (valor.value == "" || valor.value==null) {
        valor.value = "cookie no existe"
    }


}
const listCookie = () => {
    let listar = "<h2>Listado de cookies</h2>"
    document.getElementById("capa").innerHTML="";
    for (let index = 0; index < sessionStorage.length; index++) {
        document.getElementById("capa").innerHTML += sessionStorage.key(index) + " = " + decodeURIComponent(sessionStorage.getItem(sessionStorage.key(index))) + "<br>"

    }

}
