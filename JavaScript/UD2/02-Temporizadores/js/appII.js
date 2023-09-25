"use strict";
let ventana, intervalo;
// let intervalo;

function comenzar(){
    ventana=open("", 'ventana', "width=200, height=300");
    //establecer el intervalo
    intervalo=setTimeout(color, 1000) //ejecutará la función color cada segundo
}
function color(){
    if (ventana.document.body.bgColor==="red"){
        ventana.document.body.bgColor="green";
    }else{
        ventana.document.body.bgColor="red";
    }

}
function parar(){
    //eliminar el objeto
    clearTimeout(intervalo);
    ventana.focus();
}