"use strict"
window.addEventListener("DOMContentLoaded", ()=>{
    mostrarProv();
})

const mostrarProv=() =>{
        fetch("https://raw.githubusercontent.com/IagoLast/pselect/master/data/provincias.json")
         .then((response) =>{ 
            if (response.status==200){
             return response.json();
            }else{
              throw ("Error en la comunicación")
            }
         })
        
         .then((data) => {
            //ordenar ascedente
           
            data.sort((a, b) => {
                return a.nm.localeCompare(b.nm)
            })
            //cargar en el select
            data.forEach(element => {
              const option=document.createElement("option");
              option.setAttribute("id", element.id);
              option.textContent=element.nm;
              document.querySelector("#provincias").append(option);
            }); 

            //evento change
            document.querySelector("#provincias").addEventListener("change", function () {
                const provincias=document.querySelector("#provincias")
                if (provincias.selectedIndex!=0){
                  Swal.fire("El Id es " +provincias.options[provincias.selectedIndex].getAttribute("id"));
                }
            })
          })
          .catch((error) => {
            console.log(error);
          });
        
      }
