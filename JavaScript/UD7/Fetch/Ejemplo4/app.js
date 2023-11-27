"use strict";

document.addEventListener("DOMContentLoaded", ()=>{
    document.querySelector("#mostrar").addEventListener("click", mostrarAsig);
})
 


const mostrarAsig = () => {
  fetch("Ejemplo4.xml")
    .then((response) => {
      if (response.status == 200) {
        return response.text();
      } else {
        throw "Error en la comunicación";
      }
    })
    .then((data) => {
      let mensaje = "";
      //utilizar XML
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(data, "text/xml");

      xmlDoc.querySelectorAll("curso").forEach((element,index) => {
        if (index == 1) {
           mensaje = "Módulos de 2º DAW";
           element.querySelectorAll("asig").forEach(mod => {
                       mensaje += "<br>" + mod.textContent;
           });
        }   
        
      });
      document.querySelector("#mensaje").innerHTML = mensaje;
     
    
    })
    .catch((error) => {
      console.log(error);
    });
};
