"use strict"

window.addEventListener("DOMContentLoaded", ()=>{
    establecerEvent();
})
const establecerEvent=()=>{
    const elementosInput =document.getElementsByTagName("input")
    for (const element of elementosInput) {
        element.addEventListener("keydown",function(event){
            console.log(`keydown->  ${element.value}`);
            console.log(event);
        })
        //establecer evento salida al input de nombre
        element.addEventListener("keypress",function(event){
            console.log(`keypress -> ${element.value}`);
            console.log(event);
            //solo permite letras y espacios en blanco

            // if (event.code.slice(0,3)!='Key' && event.code!='Space'){
            //     event.preventDefault()
            // }

            // if (event.code.slice(0,5)!='Digit'){
            //     event.preventDefault()
            // }
        })
        element.addEventListener("keyup",function(event){
            console.log(`keyup -> ${element.value}` );
            console.log(event);
        })
        //se produce un cambio en el input text
        element.addEventListener("input",function(event){
            console.log(`input ->  ${element.value}` );
            console.log(event);
            
        })
        
    }
        
    
    
}