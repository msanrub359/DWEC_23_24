"use strict"
window.addEventListener("DOMContentLoaded", ()=>{
    mostrarProv();
})

const mostrarProv=async() =>{
    try{
        const response= await fetch("https://raw.githubusercontent.com/IagoLast/pselect/master/data/provincias.json")
        const data=await response.json();
        data.sort((a, b) => {
            return a.nm.localeCompare(b.nm)
        })
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
        
    }catch(error){
        console.error(error);
    };
         
}
