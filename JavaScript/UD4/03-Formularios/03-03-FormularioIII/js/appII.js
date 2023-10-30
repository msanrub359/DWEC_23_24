"use strict"

window.addEventListener("DOMContentLoaded",()=>{
    const formulario=document.getElementById("frmFirst");
    const edad=document.getElementById("edad");
    //establecer evento al submit del formulario
    formulario.addEventListener("submit", validar);
    //establecer evento click al botón cancelr
    document.getElementById("cancelar").addEventListener("click", limpiar);
    //establecer el evento blur para comprobar que edad sea >=18
    edad.addEventListener("blur", comprobarEdad);
    activarCaptcha();


   
})
const activarCaptcha=()=>{
    grecaptcha.ready(function() {
        grecaptcha.execute('6LfVXr8UAAAAAMS-4Ar9OHK7RLug-6H6n_qxwo1L', {action: 'submit'}).then(function(token) {
            console.log({token});
            document.getElementById("recaptcha").value=token
        });
      });
}
const validar=(evento)=>{
   //anular envío
  
   const inputs=validarInputs();
   const radios=validarRadio();
   console.log({inputs});
   console.log(radios);
   if (!inputs && !radios){
    const spinner=document.getElementById("spinner");
    const exito=document.getElementById("exito");
    //visible
    spinner.style.display="block";
    exito.innerText="Datos enviados";
    setTimeout(() => {
        spinner.style.display="none";
        exito.innerText="";
        limpiar();
    }, 3000);
   }
   
   evento.preventDefault();
   

}
const limpiar=()=>{
   
    const inputText=document.getElementsByName("texto");
    const spanErrores=document.getElementsByName("error");
    const radios=document.getElementsByName("tipo");
     //limpiar los inputs
    inputText.forEach(elemento=>{
        elemento.value=""
    })
     //limpiar los errores
     spanErrores.forEach(elemento=>{
        elemento.innerText=""
    });
    //limpiar los checked
    radios.forEach(elemento=>{
        elemento.checked=false
    })
    //establecer el foco en el input de nombre
    document.getElementById("nombre").focus();
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
    const inputText=document.getElementsByName("texto");
    let valErrores=false;
    for (let elemento of inputText){
       
        const error=document.getElementById(`err${elemento.id}`)
    
     if(elemento.value==""){
        error.innerText="El campo es requerido";
        valErrores=true;
       
     }else{
         error.innerText="";
     }
    }
   return valErrores 
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
    if (!error){ //si es false, el grupo radio está chequeado
        errorTexto.innerText=""
    }else  {
        errorTexto.innerText="El campo es requerido"
    }
   
    return error; //si no hay errores devuelve false
}