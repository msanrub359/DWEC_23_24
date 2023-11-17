"use strict"

$(()=>{
   
    //establecer evento al submit del formulario
    $("#frmFirst").on("submit", validar);
    //establecer evento click al botón cancelr
    $("#cancelar").on("click", limpiar);
    //establecer el evento blur para comprobar que edad sea >=18
    $("#edad").on("blur", comprobarEdad);
    activarCaptcha();

   
})
const activarCaptcha=()=>{
    grecaptcha.ready(function() {
        grecaptcha.execute('6LfVXr8UAAAAAMS-4Ar9OHK7RLug-6H6n_qxwo1L', {action: 'submit'}).then(function(token) {
            console.log({token});
            $("#recaptcha").attr("value",token);
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
   //visible
    $("#spinner").show();
    $("#exito").text("Datos enviados");
    setTimeout(() => {
        $("#spinner").hide();
        $("#exito").text("");
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
     $(".controls").val();
     //limpiar los errores
     $(".error").text("");
    
    //limpiar los radio
    $(".radio").prop("checked", false);
    
    //establecer el foco en el input de nombre
    $("#nombre").focus();
}
const comprobarEdad=function(evento){
    //comprobar que sea mayor de edad
   
    if($(this).val()<18){
       $("#erredad").text("La edad debe ser mayor o igual a 18 años");
       this.focus(); //establecer el foco
    }else{
        $("#erredad").text("");
    }
}
const validarInputs=function(){
    //seleccionar todos los objetos cuyo atributo name sea texto
  
    let valErrores=false;
   
    $(".controls").each((index,elemento)=>{
            
        if($(elemento).val()==""){
           $(`#err${elemento.id}`).text("El campo es requerido");
           valErrores=true;
          
        }else{
            $(`#err${elemento.id}`).text("");
        }
     })
              
    
   return valErrores 
}
const validarRadio=function(){
    //seleccionar todos los objetos cuyo atributo name sea texto
   let error=true;
   if ($(".radio").is(':checked')){ //si es true, el grupo radio está chequeado
        $("#errtipo").text("");
        error=false
    }else  {
        $("#errtipo").text("El campo es requerido")
    }
   
    return error; //si no hay errores devuelve false
}