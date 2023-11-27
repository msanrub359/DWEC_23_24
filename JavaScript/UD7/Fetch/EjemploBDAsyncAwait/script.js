"use strict"
document.addEventListener("DOMContentLoaded", () => {
   
    document.querySelectorAll("#first, #all").forEach(elemento =>{
        elemento.addEventListener("click", mostrar)
    })
    
   
})
async function mostrar() {
    const param=new FormData();

    if (this.getAttribute("id") == "first") {
        param.append("perro", "111A")
    }else{
        param.append("perro", "");
    }   
 
    try {
        const response=await fetch("php/mostrar.php",{
            method:'POST',
            body: param 
        })
        const datos=await response.json();
       //elimina las filas
       document.querySelector("tbody").querySelectorAll("tr").forEach(element=>{
        element.remove();
       })
       
        datos.data.forEach(elemento => {
              const fila=document.createElement("tr");
              const colChip=document.createElement("td");
              colChip.textContent=elemento.chip;
              const colNombre=document.createElement("td");
              colNombre.textContent=elemento.nombre;
              const colRaza=document.createElement("td");
              colRaza.textContent=elemento.raza;
              const colFechaNac=document.createElement("td");
              colFechaNac.textContent=elemento.fechaNac;
              fila.append(colChip,colNombre,colRaza,colFechaNac);
              document.querySelector("tbody").append(fila);
        })
         
           
         
    } catch (error) {
        console.error(error.message);
    }
   

}