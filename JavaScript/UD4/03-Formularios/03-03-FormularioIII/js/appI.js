"use strict"

window.addEventListener("DOMContentLoaded",()=>{
    const formulario=document.getElementById("frmFirst");
    const edad=document.getElementById("edad");
    //establecer evento al submit del formulario
    formulario.addEventListener("submit", validar);
    //establecer evento al reset del formulario
    formulario.addEventListener("reset", limpiar);
    //establecer el evento blur para comprobar que edad sea >=18
    edad.addEventListener("blur", comprobarEdad)

   
})
const validar=(evento)=>{
   //anular envío
   evento.preventDefault();
   validarInputs();
   validarRadio();
   

}
const limpiar=()=>{
    alert("limpiar")
}
const comprobarEdad=function(evento){
    //comprobar que sea mayor de edad
    const error=document.getElementById("erredad")
    if(this.value<18){
       error.innerText="La edad debe ser mayor o igual a 18 años"
       this.focus(); //establecer el foco
    }else{
        error.innerText="";
    }
}
const validarInputs=function(){
    //seleccionar todos los objetos cuyo atributo name sea texto
    const inputText=document.getElementsByName("texto")
    for (let elemento of inputText){
       
        const error=document.getElementById(`err${elemento.id}`)
    
     if(elemento.value==""){
        error.innerText="El campo es requerido"
       
     }else{
         error.innerText="";
     }
    }
    
}
const validarRadio=function(){
    //seleccionar todos los objetos cuyo atributo name sea texto
    const radios=document.getElementsByName("tipo")
    const errorTexto=document.getElementById(`errtipo`);
    let error=true;
    radios.forEach(elemento=>{
            
        if(elemento.checked){
            error=false;
        }
          
    })
    if (!error){
        errorTexto.innerText=""
    }else  {
        errorTexto.innerText="El campo es requerido"
    }
   
    
}