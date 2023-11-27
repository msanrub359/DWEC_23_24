"use strict";
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#regiones").addEventListener("change", mostrarProv);
});

const mostrarProv=() =>{
  fetch("Ejemplo6.php",{
    method:'POST',
    headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `ca=${document.querySelector("#regiones").value}`
    
  })
    .then((response) => {
      if (response.status==200){
        return response.json();
     }else{
        throw ("Error en la comunicación")
     }
    })
    .then((data) => {
        let cadena = "";
        //borrar contenido de capa
       
        data.forEach(element => {
          cadena += element + "<br>";
        });
        
       
        document.querySelector("#mostrar").innerHTML=cadena;
    })
    .catch((error) => {
      console.log(error);
    });
  
}
