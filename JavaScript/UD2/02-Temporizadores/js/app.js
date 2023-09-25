"use strict";
let ventana;
let intervalo;

function comenzar(){
    ventana=open("", 'ventana', "width=200, height=300");
    //establecer el intervalo
    intervalo=setInterval(color, 1000) //ejecutará la función color cada segundo
}
function color(){
    if (ventana.document.body.bgColor==="red"){
        ventana.document.body.bgColor="green";
    }else{
        ventana.document.body.bgColor="red";
    }

}
function parar(){
    //parar el cronómetro (setInterval)
    clearInterval(intervalo);
    ventana.focus();
}