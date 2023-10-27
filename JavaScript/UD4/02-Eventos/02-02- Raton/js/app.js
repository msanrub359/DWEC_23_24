"use strict"
//establecer el evento de carga del DOM
let pintar=false;

window.addEventListener("DOMContentLoaded", ()=>{
    establecerEvent()
})
const establecerEvent=()=>{
    const elementosInput =document.getElementsByTagName("input")
    for (const element of elementosInput) {
        element.addEventListener("mouseover",function(){
            this.style.background="#608ae5";
        })
        //establecer evento salida al input de nombre
        element.addEventListener("mouseout",function(){
            this.style.background="";
        })
        element.addEventListener("click",function(){
            this.style.background="green";
        })
        //establecer el evento mousedown
        element.addEventListener("mousedown", function(event) {
            console.log(event);
            if (event.buttons==1){ //botón izquierdo
              pintar=true;  
              color=this.style.background  ; //guardar el color que tiene  
           }
        }) 
        element.addEventListener("mouseup", function(event) {
            
              pintar=false;    
           
           
        }) 
        element.addEventListener("mousemove", function() {
            if(pintar) { //pinta cuando el ratón se mueve y el botón pulsado es el izquierdo
                this.style.background="red"
            }       
                
         
      }) 
    }
        
    
    
}